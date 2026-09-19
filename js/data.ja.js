window.SITE = {
  ui: { open: '（', close: '）', eq: '＝' },

  admissions: [
    { label: "2006〜07年", value: 30,   text: "30%" },
    { label: "2008〜12年", value: 42,  text: "42%" },
    { label: "2013〜19年", value: 45.2, text: "43–45.2%" },
    { label: "2020年", value: 45.5,   text: "45.5%" },
    { label: "2021〜24年", value: 57, text: "平均 57%" },
    { label: "2025年", value: 55,     text: "55%", latest: true },
    { label: "2026年", value: 65,     text: "65%", latest: true }
  ],

  honors: [
    { name: "旺宏科学賞", result: "2022、2023、2025年に学校賞・校長賞。最近は3件が決勝進出、3件が佳作", science: true },
    { name: "国際オリンピアード", result: "近年、代表15名、世界金メダル8名。西部の名門校に匹敵する成績。2020年8月には2科目で代表", science: true },
    { name: "数理情報学科能力競技", result: "全国一等賞", science: true },
    { name: "科学展", result: "全国優秀校。最近の全国科学展では環境科学部門で第1位、物理部門で佳作、コンピュータ情報部門でチームワーク賞", science: true },
    { name: "国語競技会", result: "花蓮県団体優勝。2020年には県の国語競技会から6人が全国大会へ" },
    { name: "吹奏楽合奏", result: "花蓮A部門優勝、全国優秀賞" },
    { name: "サッカーリーグ", result: "全国優勝（2019年4月に初優勝）" }
  ],

  history: [
    { year: "1936", title: "花蓮港中学校の創立", desc: "台湾光復の9年前（6月5日、民国25年）、日本統治期の5年制の中学校として創立（1936〜1945年）。" },
    { year: "1945", title: "台湾省立花蓮港中学", desc: "光復後に改制し、翌年花蓮中学に改称（1946〜1970年）。中学部と高校部をもつ中高一貫校で、1968年に中学部の募集を停止。" },
    { year: "1971", title: "台湾省立花蓮高級中学", desc: "3年制の高級中学に改まり、1999年まで続きました。" },
    { year: "2000", title: "国立花蓮高級中学", desc: "2000年（民国89年）に国立となり、3年制の高級中学として現在に至ります。" }
  ],

  abilities: [
    { name: "学習力", c: "Collaboration", cz: "協働", color: "#8e4585", cdesc: "対人・チームのスキルを備えたチームで、互いに支え合いながら働き、他者から学び、他者に貢献します。", desc: "時代とともに進む生涯学習の力", items: ["協力・集中して学ぶ", "事実に即して・読解する", "自己探求・専門的な力"] },
    { name: "思考力", c: "Critical Thinking", cz: "クリティカルシンキング", color: "#123f6b", cdesc: "情報や主張を批判的に吟味し、パターンやつながりを見つけ、意味のある知識を築いて現実世界に生かします。", desc: "分析し判断する、高次元の思考力", items: ["慎重に考え見極める・メディアリテラシー", "論理的な推論・批判的思考", "自分で考える・前向きな多様性"] },
    { name: "創造力", c: "Creativity", cz: "創造性", color: "#6a4c93", cdesc: "正しい探究の問いを立てて新しい発想を生み、リーダーシップを築き、発想を行動へと変えます。", desc: "挑戦を恐れず、創意を生み出す力", items: ["現実を形にする・鋭い観察", "問題を見つけ、解決する", "新しい視点・大きな視野"] },
    { name: "対話力", c: "Communication", cz: "コミュニケーション", color: "#1b64b7", cdesc: "さまざまな相手に向けて、多様な音・形式・ツールを使って効果的に伝えます。", desc: "思いやりをもって対話する力", items: ["共感して伝える・多様な表現", "グローバルな視野・相手を理解する", "双方が得をする発想・共通点を探す"] },
    { name: "人格力", c: "Character", cz: "人格", color: "#c2185b", cdesc: "やり抜く力、粘り強さ、忍耐、しなやかさといった人格的特質をもってディープラーニングを行い、学びを生活に欠かせないものにします。", desc: "芸術を融合して品格を養う力", items: ["人との接し方・是非の見極め", "社会への思いやり・自己管理", "挫折からの回復・自己調整"] },
    { name: "実践力", c: "Citizenship", cz: "シチズンシップ", color: "#1e9aa8", cdesc: "グローバル市民として考え、多様な価値観や世界観を理解し、人類と環境の持続可能性に関わる現実の問題を解決する関心と力をもちます。", desc: "積極的で果断な行動力", items: ["公民性・持続可能な開発", "資源の統合・組織と計画", "国際参加・ボランティア"] }
  ],

  deepCourses: [
    { year: "2021〜22年度", items: ["3年生選択科目「旅行英語」"] },
    { year: "2022〜23年度", items: ["1年生必修「花蓮学：英語の詩」"] },
    { year: "2023〜24年度", items: ["1年生必修「花蓮学」：国語・歴史・生活科技", "1年生必修「花蓮学」：家庭科と情報", "シンガポールのメソジスト女子学校とのオンライン交流（2024年5月）"] },
    { year: "2024〜25年度", items: ["1年生必修英語「Fighting for or against Graffiti」", "1年生ミニ講座「文創魅客が花蓮高校を灯す」", "2年生ミニ講座「SDG5 ジェンダー平等」", "3年生学級経営「AIを活用した英作文指導と学級経営」", "3年生必修の保健看護「海を救え大作戦」", "3年生選択科目「映像で見る台湾と開発史」「生活英語」"] },
    { year: "2025〜26年度", items: ["1年生校定必修「花蓮学」：家庭科と情報", "2年生選択科目「応急手当入門」「SDGs、NGにしない」", "ミニ講座「SDG5 ジェンダー平等」「校長のレーザーカッター工房」"] }
  ],

  gallery: {
    plc: [
      { img: "plc-workshop-hall", cap: "教員コミュニティの活動" },
      { img: "plc-card-game", cap: "教員コミュニティの活動" },
      { img: "plc-workshop-screen", cap: "教員コミュニティの研修" },
      { img: "plc-discussion", cap: "教員コミュニティの共学" }
    ],
    works: [
      { img: "work-physics-purpose", cap: "2年の物理：phyphoxで跳ね返り高さを測る（実験の目的）" },
      { img: "work-physics-variables", cap: "2年の物理：変数の設計" },
      { img: "work-physics-result", cap: "2年の物理：実験結果" },
      { img: "work-physics-notes", cap: "2年の物理：備考と感想" },
      { img: "work-inquiry-report", cap: "自然科の探究と実践：研究レポート" },
      { img: "work-python", cap: "1年の情報科技：プログラミング" },
      { img: "work-report-cover", cap: "課題レポート：除草剤の危機" },
      { img: "work-geo-map", cap: "1年の地理：学習シート" },
      { img: "work-english-haiku", cap: "1年の英語：俳句づくり" },
      { img: "work-english-comic", cap: "1年の英語：イラスト制作" }
    ],
    activities: [
      { img: "act-graduation-trip", cap: "2年生の校外学習" },
      { img: "act-bike-ceremony", cap: "野外教育・3年生の自転車成人式" },
      { img: "act-intl-trip-2019", cap: "野外教育・国際教育旅行" },
      { img: "act-camp-highland", cap: "宿泊キャンプ・1年生キャンプ" },
      { img: "act-candle-camp", cap: "1年生の校外キャンプ" },
      { img: "act-club-training", cap: "部活動リーダーの合同研修" },
      { img: "act-intl-edu", cap: "国際教育とリーダー合同研修" }
    ],
    community: [
      { img: "com-xmas-1", cap: "冬のあたたかい地域支援・花蓮高校クリスマス月間" },
      { img: "com-xmas-2", cap: "冬のあたたかい地域支援・花蓮高校クリスマス月間" },
      { img: "com-xmas-3", cap: "冬のあたたかい地域支援・花蓮高校クリスマス月間" },
      { img: "com-bamboo-orch", cap: "地域コンサート・花中糸竹室内楽団" },
      { img: "com-campus-concert", cap: "地域コンサート・花蓮高校と花蓮女子高校の合同記念コンサート" },
      { img: "com-redcross-service", cap: "赤十字青少年奉仕チーム（2020〜21年度）" },
      { img: "com-firstaid", cap: "赤十字青少年救急キャンプ（2020〜21年度）" }
    ]
  }
};
