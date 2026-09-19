#!/usr/bin/env python3
"""
多語系建置腳本
  中文版（index.html、js/data.js）是唯一的內容來源。
  英文、日文版由此腳本讀取 i18n/en.json、i18n/ja.json（鍵為中文原文）自動產生：
    en/index.html、ja/index.html、js/data.en.js、js/data.ja.js

用法（需要 beautifulsoup4）：
  uvx --with beautifulsoup4 python build.py extract   # 列出所有需要翻譯的中文字串 → i18n/strings.json
  uvx --with beautifulsoup4 python build.py           # 產生英文、日文版
"""
import json, re, sys, copy, os
from bs4 import BeautifulSoup, NavigableString, Comment, Doctype

ROOT = os.path.dirname(os.path.abspath(__file__))
CJK = re.compile(r'[぀-ヿ㐀-鿿＀-￯　-〿]')
HAN = re.compile(r'[぀-ヿ㐀-鿿]')
ATTRS = ('alt', 'aria-label', 'title')
LANGS = {
    'en': dict(html_lang='en', title_font='Noto+Sans:wght@400;500;700&family=Noto+Serif:wght@600;700'),
    'ja': dict(html_lang='ja', title_font='Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@600;700'),
}
BS = chr(92)
STR_RE = re.compile('"((?:[^"' + BS + BS + ']|' + BS + BS + '.)*)"')
FONT_RE = re.compile(r'family=Noto\+Sans\+TC[^"]*')

def read(p): return open(os.path.join(ROOT, p), encoding='utf-8').read()
def write(p, s):
    os.makedirs(os.path.dirname(os.path.join(ROOT, p)), exist_ok=True)
    open(os.path.join(ROOT, p), 'w', encoding='utf-8', newline='\n').write(s)

def in_hero(tag):
    return any(p.name == 'header' and 'hero' in (p.get('class') or []) for p in tag.parents)

def text_nodes(soup):
    for n in soup.find_all(string=True):
        if isinstance(n, (Comment, Doctype)): continue
        if n.parent.name in ('script', 'style'): continue
        core = n.strip()
        if not core: continue
        cls = n.parent.get('class') or []
        if HAN.search(core) or CJK.search(core) or 'eyebrow' in cls:
            yield n, core

def collect_html():
    soup = BeautifulSoup(read('index.html'), 'html.parser')
    out = []
    for n, core in text_nodes(soup): out.append(core)
    for t in soup.find_all(True):
        for a in ATTRS:
            v = t.get(a)
            if v and HAN.search(v): out.append(v)
        if t.name == 'meta' and t.get('name') == 'description': out.append(t['content'])
    return out

def data_strings(js):
    out = []
    for line in js.split('\n'):
        if line.strip().startswith('//'): continue
        for m in STR_RE.finditer(line):
            if HAN.search(m.group(1)): out.append(m.group(1))
    return out

def extract():
    seen, order = set(), []
    for s in collect_html() + data_strings(read('js/data.js')):
        if s not in seen: seen.add(s); order.append(s)
    write('i18n/strings.json', json.dumps(order, ensure_ascii=False, indent=0))
    print(len(order), 'strings')

def build(lang):
    tr = json.load(open(os.path.join(ROOT, 'i18n', lang + '.json'), encoding='utf-8'))
    cfg = LANGS[lang]
    missing = set()
    def T(s):
        if s in tr and tr[s] != '': return tr[s]
        missing.add(s); return s

    soup = BeautifulSoup(read('index.html'), 'html.parser')
    for c in soup.find_all(string=lambda t: isinstance(t, Comment)): c.extract()
    html = soup.find('html'); html['lang'] = cfg['html_lang']; html['data-root'] = '../'
    # 移除中文版內附的英文副標（英文版、日文版不重複顯示）
    for t in soup.find_all(class_=lambda c: c in ('en', 'en-t')):
        if lang == 'ja' and in_hero(t): continue   # 首頁保留校名英文
        t.decompose()
    for n, core in list(text_nodes(soup)):
        n.replace_with(NavigableString(n.replace(core, T(core), 1)))
    for t in soup.find_all(True):
        for a in ATTRS:
            v = t.get(a)
            if v and HAN.search(v): t[a] = T(v)
        if t.name == 'meta' and t.get('name') == 'description': t['content'] = T(t['content'])
        # 資源路徑改成上一層
        for a in ('href', 'src'):
            v = t.get(a)
            if v and re.match(r'(css|js|images)/', v): t[a] = '../' + v
    for s in soup.find_all('script', src=True):
        if s['src'].endswith('js/data.js'): s['src'] = '../js/data.%s.js' % lang
    for l in soup.find_all('link', href=True):
        if 'fonts.googleapis.com/css2' in l['href']:
            l['href'] = FONT_RE.sub('family=' + cfg['title_font'], l['href'])
    # 語言切換列
    hrefs = {'zh': '../', 'en': './', 'ja': '../ja/'} if lang == 'en' else {'zh': '../', 'en': '../en/', 'ja': './'}
    for a in soup.select('.lang a'):
        k = {'zh-Hant': 'zh', 'en': 'en', 'ja': 'ja'}[a.get('lang')]
        a['href'] = hrefs[k]
        if k == lang: a['class'] = ['on']; a['aria-current'] = 'true'
        else: a.attrs.pop('class', None); a.attrs.pop('aria-current', None)
    write('%s/index.html' % lang, str(soup))

    js = read('js/data.js')
    def sub(m):
        return '"%s"' % T(m.group(1)) if HAN.search(m.group(1)) else m.group(0)
    lines = []
    for line in js.split('\n'):
        lines.append(line if line.strip().startswith('//') else STR_RE.sub(sub, line))
    js = '\n'.join(l for l in lines if not (HAN.search(l) and l.strip().startswith(('//', '/*'))))
    ui = {'en': "{ open: ' (', close: ')', eq: '=' }", 'ja': "{ open: '（', close: '）', eq: '＝' }"}[lang]
    js = re.sub(r"ui: \{[^}]*\}", 'ui: ' + ui, js, count=1)
    js = re.sub(r',\s*en:\s*' + STR_RE.pattern, '', js)   # 中文版附的英文副標，在英文、日文版不需要
    write('js/data.%s.js' % lang, js)
    print(lang, 'missing:', len(missing))
    if missing:
        write('i18n/missing.%s.json' % lang, json.dumps(sorted(missing), ensure_ascii=False, indent=0))

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == 'extract': extract()
    else:
        for lg in LANGS: build(lg)
