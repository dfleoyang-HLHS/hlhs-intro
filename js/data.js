/* 網站資料：之後更新升學數據、榮譽榜，只需要改這個檔案 */
window.SITE = {
  // 介面符號（各語言版本會覆寫）
  ui: { open: '（', close: '）', eq: '＝' },

  // 近年來國立大學暨醫學系比率（%）
  // 95-96、97-101、102-108、109 年來自 2021 年摺頁；114、115 年為 2026 年新增。
  // 110–113 年為四年平均值（57%）。
  admissions: [
    { label: "95–96 年", value: 30,   text: "30%" },
    { label: "97–101 年", value: 42,  text: "42%" },
    { label: "102–108 年", value: 45.2, text: "43–45.2%" },
    { label: "109 年", value: 45.5,   text: "45.5%" },
    { label: "110–113 年", value: 57, text: "平均 57%" },
    { label: "114 年", value: 55,     text: "55%", latest: true },
    { label: "115 年", value: 65,     text: "65%", latest: true }
  ],

  // 榮譽榜（2021 年摺頁版本，尚待更新近年成績）
  honors: [
    { name: "旺宏科學獎", result: "2022、2023、2025 年榮獲學校獎及校長獎；近期三件決選、三件佳作", science: true },
    { name: "國際奧林匹亞競賽", result: "近年榮獲 15 位國手、8 位世界金牌，成績媲美西部名校；2020 年 8 月雙科雙國手", science: true },
    { name: "數理資訊學科能力競賽", result: "全國一等獎", science: true },
    { name: "科學展覽", result: "全國績優學校；近期全國科展環境科學科第一名、物理科佳作、電腦資訊科團體合作獎", science: true },
    { name: "國語文競賽", result: "花蓮團體冠軍；2020 年全縣語文競賽 6 人進軍全國" },
    { name: "管樂團合奏", result: "花蓮 A 組冠軍，全國優等" },
    { name: "足球聯賽", result: "全國冠軍（2019 年 4 月首奪）" }
  ],

  // 學校沿革
  history: [
    { year: "1936", title: "花蓮港中學校創校", desc: "臺灣光復前九年（6 月 5 日，民國 25 年），為日治時期五年制的中學校（1936–1945）。", en: "Founded nine years before the end of Japanese rule in Taiwan (June 5, 1936) as Hualien Harbor Public School." },
    { year: "1945", title: "臺灣省立花蓮港中學", desc: "光復後改制，次年更名為花蓮中學（1946–1970），為完全中學，含初中部與高中部（1968 停招初中部）。", en: "Taiwan Provincial Hualien High School (1946–1970), including a junior high division (terminated in 1968) and a senior high division." },
    { year: "1971", title: "臺灣省立花蓮高級中學", desc: "改制為三年制高級中學，沿用至 1999 年。", en: "Taiwan Provincial Hualien Senior High School (1971–1999)." },
    { year: "2000", title: "國立花蓮高級中學", desc: "民國 89 年起改為國立，三年制高級中學，延續至今。", en: "National Hualien Senior High School (2000–present)." }
  ],

  // 學生圖像六力
  // 六力對應 NPDL 6Cs：學習力＝協作、實踐力＝公民素養
  abilities: [
    { name: "學習力", c: "Collaboration", cz: "協作", color: "#8e4585", cdesc: "相互依存地工作，在具備人際與團隊技能的團隊中向他人學習，也為他人貢獻。", desc: "與時俱進的終身學習能力", en: "Lifelong learning ability to keep pace with the times", items: ["協力合作．專注學習", "實事求是．閱讀理解", "自我探索．專業智能"] },
    { name: "思辨力", c: "Critical Thinking", cz: "批判思維", color: "#123f6b", cdesc: "批判性地評估資訊與論點，看見模式與聯繫，建立有意義的知識並應用於現實世界。", desc: "分析判斷的高維思考能力", en: "High-dimensional thinking ability for analysis and judgment", items: ["慎思明辨．媒體識讀", "邏輯推理．批判思維", "獨立思考．正向多元"] },
    { name: "創造力", c: "Creativity", cz: "創意", color: "#6a4c93", cdesc: "提出正確的探究問題以產生新想法，建立領導力，並將想法轉化為行動。", desc: "勇於挑戰的創意發想能力", en: "Ability to develop creative and challenging concepts", items: ["創建實相．敏銳觀察", "發現問題．解決問題", "創新觀點．宏觀精神"] },
    { name: "溝通力", c: "Communication", cz: "溝通", color: "#1b64b7", cdesc: "為不同的對象，運用各種聲音、模式與工具進行有效溝通。", desc: "人道關懷的互動溝通能力", en: "Interactive communication skills for humanistic care", items: ["同理溝通．多元表達", "全球視野．知彼解此", "雙贏思維．求同存異"] },
    { name: "品格力", c: "Character", cz: "品格", color: "#c2185b", cdesc: "以堅毅、堅韌、毅力與韌性等品格特質進行深度學習，讓學習成為生活不可或缺的一部分。", desc: "融合藝術的品德涵養能力", en: "Ability to integrate art into character cultivation", items: ["待人處事．明辨是非", "關懷社會．自主管理", "挫折修復．自我調節"] },
    { name: "實踐力", c: "Citizenship", cz: "公民素養", color: "#1e9aa8", cdesc: "像全球公民一樣思考，理解多元價值與世界觀，並有興趣與能力解決影響人類與環境永續的真實問題。", desc: "積極果斷的實踐行動能力", en: "Being active and decisive in taking actions", items: ["公民素養．永續發展", "資源整合．組織規劃", "國際參與．志工服務"] }
  ],

  // 深度學習（NPDL）課程實踐，依學年度
  deepCourses: [
    { year: "110 學年", items: ["高三選修「旅遊英文」"] },
    { year: "111 學年", items: ["高一必修「花蓮學：英文詩」"] },
    { year: "112 學年", items: ["高一必修「花蓮學」：國文、歷史與生活科技", "高一必修「花蓮學」：家政與資訊", "與新加坡美以美中學線上交流（2024 年 5 月）"] },
    { year: "113 學年", items: ["高一部訂必修英文「Fighting for or against Graffiti」", "高一微型課程「文創魅客點亮花中」", "高二微型課程「SDG5 性別平權」", "高三班級經營「AI 協助英語作文教學與班級經營」", "高三部訂必修健康護理「搶救海洋大作戰」", "高三多元選修「影像台灣與開發史」、「生活英文」"] },
    { year: "114 學年", items: ["高一校訂必修「花蓮學」：家政與資訊", "高二多元選修「基礎急救概論」、「SDGs 不 NG」", "微型課程「SDG5 性別平權」、「校長雷切工作室」"] }
  ],

  // 生活相簿
  gallery: {
    plc: [
      { img: "plc-workshop-hall", cap: "教師社群活動" },
      { img: "plc-card-game", cap: "教師社群活動" },
      { img: "plc-workshop-screen", cap: "教師社群研習" },
      { img: "plc-discussion", cap: "教師社群共學" }
    ],
    works: [
      { img: "work-physics-purpose", cap: "高二物理：用 phyphox 測量彈跳高度（實驗目的）" },
      { img: "work-physics-variables", cap: "高二物理：變因設計" },
      { img: "work-physics-result", cap: "高二物理：實驗結果" },
      { img: "work-physics-notes", cap: "高二物理：備註與心得" },
      { img: "work-inquiry-report", cap: "自然探究與實作：研究報告" },
      { img: "work-python", cap: "高一資訊科技：程式設計" },
      { img: "work-report-cover", cap: "專題報告：除草劑的危機" },
      { img: "work-geo-map", cap: "高一地理：學習單" },
      { img: "work-english-haiku", cap: "高一英文：Haiku 詩詞創作" },
      { img: "work-english-comic", cap: "高一英文：圖像創作" }
    ],
    activities: [
      { img: "act-graduation-trip", cap: "高二校外教學參觀" },
      { img: "act-bike-ceremony", cap: "戶外教育．高三單車成年禮" },
      { img: "act-intl-trip-2019", cap: "戶外教育．國際教育旅行" },
      { img: "act-camp-highland", cap: "隔宿露營．花蓮高中高一露營" },
      { img: "act-candle-camp", cap: "高一校外露營" },
      { img: "act-club-training", cap: "社團幹部聯合訓練" },
      { img: "act-intl-edu", cap: "國際教育與聯合幹訓" }
    ],
    community: [
      { img: "com-xmas-1", cap: "寒冬送暖關懷社區．花中聖誕溫馨月" },
      { img: "com-xmas-2", cap: "寒冬送暖關懷社區．花中聖誕溫馨月" },
      { img: "com-xmas-3", cap: "寒冬送暖關懷社區．花中聖誕溫馨月" },
      { img: "com-bamboo-orch", cap: "社區音樂會．花中絲竹室內樂團" },
      { img: "com-campus-concert", cap: "社區音樂會．花中花女校慶聯合音樂會" },
      { img: "com-redcross-service", cap: "109 活力紅少服務團" },
      { img: "com-firstaid", cap: "109 紅少急救營" }
    ]
  }
};
