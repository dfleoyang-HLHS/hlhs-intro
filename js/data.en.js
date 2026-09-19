window.SITE = {
  ui: { open: ' (', close: ')', eq: '=' },

  admissions: [
    { label: "2006–07", value: 30,   text: "30%" },
    { label: "2008–12", value: 42,  text: "42%" },
    { label: "2013–19", value: 45.2, text: "43–45.2%" },
    { label: "2020", value: 45.5,   text: "45.5%" },
    { label: "2021–24", value: 57, text: "Avg. 57%" },
    { label: "2025", value: 55,     text: "55%", latest: true },
    { label: "2026", value: 65,     text: "65%", latest: true }
  ],

  honors: [
    { name: "Macronix Science Award", result: "School Award and Principal’s Award in 2022, 2023 and 2025; recently three finalists and three honorable mentions", science: true },
    { name: "International Olympiads", result: "15 national team members and 8 world gold medalists in recent years, with results rivaling top schools in western Taiwan; two-subject national team members in August 2020", science: true },
    { name: "Mathematics and Information Ability Competition", result: "First prize nationwide", science: true },
    { name: "Science Fair", result: "Outstanding school nationwide; recently first place in environmental science, an honorable mention in physics and a teamwork award in computer science at the national science fair", science: true },
    { name: "Chinese language competition", result: "Hualien team champion; in 2020, six students advanced to the national round of the county language competition" },
    { name: "Wind ensemble", result: "Hualien Group A champion; national Excellence Award" },
    { name: "Football league", result: "National champion (first title in April 2019)" }
  ],

  history: [
    { year: "1936", title: "Founding of Hualien Harbor Public School", desc: "Nine years before Taiwan’s retrocession (June 5, ROC year 25), as a five-year middle school of the Japanese colonial period (1936–1945)." },
    { year: "1945", title: "Taiwan Provincial Hualien Harbor School", desc: "Reorganized after retrocession and renamed Hualien High School the next year (1946–1970), a combined junior and senior high school (junior high enrollment ended in 1968)." },
    { year: "1971", title: "Taiwan Provincial Hualien Senior High School", desc: "Became a three-year senior high school, used until 1999." },
    { year: "2000", title: "National Hualien Senior High School", desc: "Became a national school in 2000 (ROC year 89) and has remained a three-year senior high school to this day." }
  ],

  abilities: [
    { name: "Collaboration", c: "Collaboration", cz: "Collaboration", color: "#8e4585", cdesc: "Working interdependently and in teams with strong interpersonal and team skills, learning from others and contributing to them.", desc: "Lifelong learning ability to keep pace with the times", items: ["Teamwork · Focused learning", "Seeking truth from facts · Reading comprehension", "Self-exploration · Professional competence"] },
    { name: "Critical Thinking", c: "Critical Thinking", cz: "Critical Thinking", color: "#123f6b", cdesc: "Critically evaluating information and arguments, seeing patterns and connections, building meaningful knowledge and applying it in the real world.", desc: "High-dimensional thinking ability for analysis and judgment", items: ["Careful reasoning · Media literacy", "Logical reasoning · Critical thinking", "Independent thinking · Positive diversity"] },
    { name: "Creativity", c: "Creativity", cz: "Creativity", color: "#6a4c93", cdesc: "Asking the right inquiry questions to generate new ideas, building leadership and turning ideas into action.", desc: "Ability to develop creative and challenging concepts", items: ["Building reality · Keen observation", "Finding and solving problems", "Fresh perspectives · Big-picture spirit"] },
    { name: "Communication", c: "Communication", cz: "Communication", color: "#1b64b7", cdesc: "Communicating effectively for different audiences with a variety of sounds, modes and tools.", desc: "Interactive communication skills for humanistic care", items: ["Empathetic communication · Diverse expression", "Global vision · Understanding others", "Win-win thinking · Seeking common ground"] },
    { name: "Character", c: "Character", cz: "Character", color: "#c2185b", cdesc: "Learning to deep-learn with the character traits of grit, tenacity, perseverance and resilience, making learning an integral part of life.", desc: "Ability to integrate art into character cultivation", items: ["Getting along with others · Telling right from wrong", "Caring for society · Self-management", "Recovering from setbacks · Self-regulation"] },
    { name: "Citizenship", c: "Citizenship", cz: "Citizenship", color: "#1e9aa8", cdesc: "Thinking like global citizens, understanding diverse values and worldviews, and having the interest and ability to solve real problems that affect human and environmental sustainability.", desc: "Being active and decisive in taking actions", items: ["Citizenship · Sustainable development", "Resource integration · Organization and planning", "International participation · Volunteering"] }
  ],

  deepCourses: [
    { year: "2021–22 school year", items: ["Year 12 elective “English for Travel”"] },
    { year: "2022–23 school year", items: ["Year 10 required course “Hualien Studies: English Poetry”"] },
    { year: "2023–24 school year", items: ["Year 10 required course “Hualien Studies”: Chinese, history and living technology", "Year 10 required course “Hualien Studies”: home economics and information technology", "Online exchange with Methodist Girls’ School in Singapore (May 2024)"] },
    { year: "2024–25 school year", items: ["Year 10 required English course “Fighting for or against Graffiti”", "Year 10 mini-course “Cultural & Creative Makers Light Up HLHS”", "Year 11 mini-course “SDG5 Gender Equality”", "Year 12 class management “AI-assisted English writing instruction and class management”", "Year 12 required health and nursing course “Battle to Save the Oceans”", "Year 12 electives “Imaging Taiwan and the History of Its Development” and “Everyday English”"] },
    { year: "2025–26 school year", items: ["Year 10 school-based required course “Hualien Studies”: home economics and information technology", "Year 11 electives “Introduction to Basic First Aid” and “SDGs, Not NG”", "Mini-courses “SDG5 Gender Equality” and “Principal’s Laser Cutting Studio”"] }
  ],

  gallery: {
    plc: [
      { img: "plc-workshop-hall", cap: "Teachers’ community activities" },
      { img: "plc-card-game", cap: "Teachers’ community activities" },
      { img: "plc-workshop-screen", cap: "Teacher community workshop" },
      { img: "plc-discussion", cap: "Teacher community learning together" }
    ],
    works: [
      { img: "work-physics-purpose", cap: "Year 11 physics: measuring bounce height with phyphox (experiment goal)" },
      { img: "work-physics-variables", cap: "Year 11 physics: designing the variables" },
      { img: "work-physics-result", cap: "Year 11 physics: experiment results" },
      { img: "work-physics-notes", cap: "Year 11 physics: notes and reflections" },
      { img: "work-inquiry-report", cap: "Inquiry and practice in natural science: research report" },
      { img: "work-python", cap: "Year 10 information technology: programming" },
      { img: "work-report-cover", cap: "Project report: The Danger of Herbicides" },
      { img: "work-geo-map", cap: "Year 10 geography: worksheet" },
      { img: "work-english-haiku", cap: "Year 10 English: haiku writing" },
      { img: "work-english-comic", cap: "Year 10 English: illustration project" }
    ],
    activities: [
      { img: "act-graduation-trip", cap: "Year 11 excursion" },
      { img: "act-bike-ceremony", cap: "Outdoor education · Year 12 cycling coming-of-age ceremony" },
      { img: "act-intl-trip-2019", cap: "Outdoor education · international educational tour" },
      { img: "act-camp-highland", cap: "Overnight camping · Year 10 camp" },
      { img: "act-candle-camp", cap: "Year 10 off-campus camp" },
      { img: "act-club-training", cap: "Joint training for club leaders" },
      { img: "act-intl-edu", cap: "International education and joint training for student leaders" }
    ],
    community: [
      { img: "com-xmas-1", cap: "Winter warmth for the community · HLHS Warm Christmas Month" },
      { img: "com-xmas-2", cap: "Winter warmth for the community · HLHS Warm Christmas Month" },
      { img: "com-xmas-3", cap: "Winter warmth for the community · HLHS Warm Christmas Month" },
      { img: "com-bamboo-orch", cap: "Community concert · HLHS Chinese Chamber Music Ensemble" },
      { img: "com-campus-concert", cap: "Community concert · HLHS and Hualien Girls’ High School joint anniversary concert" },
      { img: "com-redcross-service", cap: "Youth Red Cross Service Team (2020–21)" },
      { img: "com-firstaid", cap: "Youth Red Cross First Aid Camp (2020–21)" }
    ]
  }
};
