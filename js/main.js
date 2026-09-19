(function () {
  var D = window.SITE;
  var ROOT = document.documentElement.getAttribute('data-root') || '';
  var UI = D.ui || { open: '（', close: '）', eq: '＝' };
  // 六力標籤：括號內優先顯示 6C 的中文名，若與六力同名或與英文相同則改用英文
  function czLabel(a) { return (a.cz === a.name || a.cz === a.c) ? a.c : a.cz; }
  var $ = function (s, r) { return (r || document).querySelector(s); };

  // 沿革
  $('#timeline').innerHTML = D.history.map(function (h) {
    return '<li><div class="y">' + h.year + '</div><b>' + h.title + '</b><br><span style="color:var(--muted)">' + h.desc + '</span>' + (h.en ? '<span class="en">' + h.en + '</span>' : '') + '</li>';
  }).join('');

  // 六力（括號加註對應的 NPDL 6C）。若六力名稱本身就是 6C 用語（英文版），就不重複加括號
  $('#abilities').innerHTML = D.abilities.map(function (a) {
    var lab = czLabel(a);
    var small = lab === a.name ? '' : '<small>' + UI.open + lab + UI.close + '</small>';
    return '<div><b>' + a.name + small + '</b><span>' + a.desc + '</span>' + (a.en ? '<span class="en">' + a.en + '</span>' : '') + '<ul>' +
      a.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul></div>';
  }).join('');

  // 六力 × 6Cs 對照
  $('#comp-grid').innerHTML = D.abilities.map(function (a) {
    var right = a.name === a.c ? '' :
      '<i>' + UI.eq + '</i><span>' + ((a.cz === a.name || a.cz === a.c) ? a.c : a.cz + '<em>' + a.c + '</em>') + '</span>';
    return '<article class="cc" style="--cc:' + a.color + '">' +
      '<div class="cc-h"><b>' + a.name + '</b>' + right + '</div>' +
      '<p>' + a.cdesc + '</p>' + (a.en ? '<p class="en" style="margin-top:-6px">' + a.en + '</p>' : '') +
      '<ul>' + a.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul></article>';
  }).join('');

  // 深度學習課程
  $('#deep-tl').innerHTML = D.deepCourses.map(function (d) {
    return '<li><div class="y">' + d.year + '</div><ul class="dot">' +
      d.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul></li>';
  }).join('');

  // 榮譽榜
  $('#honors').innerHTML = D.honors.map(function (h) {
    return '<li class="' + (h.science ? 's' : '') + '"><b>' + h.name + '</b><em>' + h.result + '</em></li>';
  }).join('');
  $('#sci-honors').innerHTML = D.honors.filter(function (h) { return h.science; }).map(function (h) {
    return '<div class="honor"><b>' + h.name + '</b><span>' + h.result + '</span></div>';
  }).join('');

  // 升學圖
  var max = 70;
  var chart = $('#chart');
  chart.innerHTML = D.admissions.map(function (a) {
    if (a.value == null) return '<div class="bar"><div class="na">' + a.text + '</div></div>';
    return '<div class="bar' + (a.latest ? ' latest' : '') + '"><div class="v">' + a.text +
      '</div><div class="col" data-h="' + (a.value / max * 100) + '"></div></div>';
  }).join('');
  $('#chart-l').innerHTML = D.admissions.map(function (a) { return '<div>' + a.label + '</div>'; }).join('');

  // 相簿
  function gallery(sel, items) {
    $(sel).innerHTML = items.map(function (g) {
      return '<button type="button" data-src="' + ROOT + 'images/' + g.img + '.webp" data-cap="' + g.cap + '">' +
        '<img src="' + ROOT + 'images/' + g.img + '.webp" alt="' + g.cap + '" loading="lazy"><span>' + g.cap + '</span></button>';
    }).join('');
  }
  gallery('#g-act', D.gallery.activities);
  gallery('#g-com', D.gallery.community);
  gallery('#g-work', D.gallery.works);
  gallery('#g-plc', D.gallery.plc);

  // 燈箱
  var lb = $('#lb'), lbi = $('img', lb), lbc = $('figcaption', lb);
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.ph button');
    if (b) { lbi.src = b.dataset.src; lbi.alt = b.dataset.cap; lbc.textContent = b.dataset.cap; lb.classList.add('open'); return; }
    if (lb.classList.contains('open') && (e.target === lb || e.target.closest('.lb > button'))) lb.classList.remove('open');
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lb.classList.remove('open'); });

  // 科學分頁
  document.querySelectorAll('.tabs').forEach(function (bar) {
    var tabs = bar.querySelectorAll('button');
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (x) {
          var on = x === t;
          x.setAttribute('aria-selected', on);
          $('#' + x.dataset.tab).hidden = !on;
        });
      });
    });
  });

  // 選單自動收合：不論語言，只要選單放不下就改成漢堡選單
  var nav = $('.nav'), navWrap = $('.nav .wrap');
  function fitNav() {
    nav.classList.remove('compact');
    if (navWrap.scrollWidth > navWrap.clientWidth + 1) nav.classList.add('compact');
  }
  fitNav();
  window.addEventListener('resize', fitNav);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitNav);

  // 語言切換時保留目前所在的章節
  document.querySelectorAll('.lang a').forEach(function (a) {
    a.addEventListener('click', function () { if (location.hash) a.href = a.getAttribute('href') + location.hash; });
  });

  // 選單
  var burger = $('.burger'), menu = $('#menu');
  burger.addEventListener('click', function () {
    var o = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', o);
  });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });

  // 目前章節高亮
  var links = {};
  menu.querySelectorAll('a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
  var spy = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      if (en.isIntersecting && links[en.target.id]) {
        Object.keys(links).forEach(function (k) { links[k].classList.remove('on'); });
        links[en.target.id].classList.add('on');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });

  // 進場動畫與長條圖
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      en.target.querySelectorAll('.col').forEach(function (c) { c.style.height = c.dataset.h + '%'; });
      io.unobserve(en.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
