const database = {
    // =================================================================================
    //  ADMISSION SERIES DATA (সম্পূর্ণ নতুন সিলেবাস)
    // =================================================================================
    subjects: {
        'phys1': {
            name: "Physics 1st Paper", bn_name: "পদার্থবিজ্ঞান ১ম পত্র",
            chapters: [
                { id: 'phys1_ch1', name: "Chapter 01: Physical World and Measurement", bn_name: "ভৌত জগৎ ও পরিমাপ" },
                { id: 'phys1_ch2', name: "Chapter 02: Vectors", bn_name: "ভেক্টর" },
                { id: 'phys1_ch3', name: "Chapter 03: Newtonian Mechanics", bn_name: "নিউটনিয়ান বলবিদ্যা" },
                { id: 'phys1_ch5', name: "Chapter 05: Work, Energy and Power", bn_name: "কাজ, শক্তি ও ক্ষমতা" },
                { id: 'phys1_ch6', name: "Chapter 06: Gravitation", bn_name: "মহাকর্ষ ও অভিকর্ষ" },
                { id: 'phys1_ch7', name: "Chapter 07: Structural Properties of Matter", bn_name: "পদার্থের গাঠনিক ধর্ম" },
                { id: 'phys1_ch8', name: "Chapter 08: Periodic Motion", bn_name: "পর্যাবৃত্ত গতি" },
                { id: 'phys1_ch10', name: "Chapter 10: Ideal Gas and Gas laws", bn_name: "আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব" }
            ]
        },
        'phys2': {
            name: "Physics 2nd Paper", bn_name: "পদার্থবিজ্ঞান ২য় পত্র",
            chapters: [
                { id: 'phys2_ch1', name: "Chapter 01: Thermodynamics", bn_name: "তাপগতিবিদ্যা" },
                { id: 'phys2_ch2', name: "Chapter 02: Electrostatics", bn_name: "স্থির তড়িৎ" },
                { id: 'phys2_ch3', name: "Chapter 03: Current Electricity", bn_name: "চলতড়িৎ" },
                { id: 'phys2_ch7', name: "Chapter 07: Physical Optics", bn_name: "ভৌত আলোকবিজ্ঞান" },
                { id: 'phys2_ch8', name: "Chapter 08: Introduction to Modern Physics", bn_name: "আধুনিক পদার্থবিজ্ঞানের সূচনা" },
                { id: 'phys2_ch9', name: "Chapter 09: Atomic Models and Nuclear Physics", bn_name: "পরমাণুর মডেল এবং নিউক্লিয়ার পদার্থবিজ্ঞান" },
                { id: 'phys2_ch10', name: "Chapter 10: Semiconductors and Electronics", bn_name: "সেমিকন্ডাক্টর ও ইলেকট্রনিকস" }
            ]
        },
        'chem1': {
            name: "Chemistry 1st Paper", bn_name: "রসায়ন ১ম পত্র",
            chapters: [
                { id: 'chem1_ch2', name: "Chapter 02: Qualitative Chemistry", bn_name: "গুণগত রসায়ন" },
                { id: 'chem1_ch3', name: "Chapter 03: Periodic Properties & Chemical Bonding", bn_name: "মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন" },
                { id: 'chem1_ch4', name: "Chapter 04: Chemical Change", bn_name: "রাসায়নিক পরিবর্তন" },
                { id: 'chem1_ch5', name: "Chapter 05: Applied Chemistry", bn_name: "কর্মমুখী রসায়ন" }
            ]
        },
        'chem2': {
            name: "Chemistry 2nd Paper", bn_name: "রসায়ন ২য় পত্র",
            chapters: [
                { id: 'chem2_ch1', name: "Chapter 01: Environmental Chemistry", bn_name: "পরিবেশ রসায়ন" },
                { id: 'chem2_ch2', name: "Chapter 02: Organic Chemistry", bn_name: "জৈব রসায়ন" },
                { id: 'chem2_ch3', name: "Chapter 03: Quantitative Chemistry", bn_name: "পরিমাণগত রসায়ন" },
                { id: 'chem2_ch4', name: "Chapter 04: Electrochemistry", bn_name: "তড়িৎ রসায়ন" }
            ]
        },
        'math1': {
            name: "Higher Math 1st Paper", bn_name: "উচ্চতর গণিত ১ম পত্র",
            chapters: [
                { id: 'math1_ch1', name: "Chapter 01: Matrices and Determinants", bn_name: "ম্যাট্রিক্স ও নির্ণায়ক" },
                { id: 'math1_ch3', name: "Chapter 03: Straight Line", bn_name: "সরলরেখা" },
                { id: 'math1_ch4', name: "Chapter 04: Circle", bn_name: "বৃত্ত" },
                { id: 'math1_ch7', name: "Chapter 07: Trigonometric Ratios", bn_name: "ত্রিকোণমিতিক অনুপাত" },
                { id: 'math1_ch9', name: "Chapter 09: Differentiation", bn_name: "অন্তরীকরণ" },
                { id: 'math1_ch10', name: "Chapter 10: Integration", bn_name: "যোগজীকরণ" }
            ]
        },
        'math2': {
            name: "Higher Math 2nd Paper", bn_name: "উচ্চতর গণিত ২য় পত্র",
            chapters: [
                { id: 'math2_ch3', name: "Chapter 03: Complex Numbers", bn_name: "জটিল সংখ্যা" },
                { id: 'math2_ch4', name: "Chapter 04: Polynomials", bn_name: "বহুপদী ও বহুপদীর সমীকরণ" },
                { id: 'math2_ch6', name: "Chapter 06: Conics", bn_name: "কণিক" },
                { id: 'math2_ch7', name: "Chapter 07: Inverse Trigonometric Functions", bn_name: "বিপরীত ত্রিকোণমিতিক ফাংশন" },
                { id: 'math2_ch8', name: "Chapter 08: Statics", bn_name: "স্থিতিবিদ্যা" },
                { id: 'math2_ch9', name: "Chapter 09: Dynamics", bn_name: "গতিবিদ্যা" }
            ]
        },
        'bio1': {
            name: "Biology 1st Paper", bn_name: "জীববিজ্ঞান ১ম পত্র",
            chapters: [
                { id: 'bio1_ch1', name: "Chapter 01: Cell & Its Structure", bn_name: "কোষ ও এর গঠন" },
                { id: 'bio1_ch2', name: "Chapter 02: Cell Division", bn_name: "কোষ বিভাজন" },
                { id: 'bio1_ch4', name: "Chapter 04: Microorganisms", bn_name: "অণুজীব" },
                { id: 'bio1_ch7', name: "Chapter 07: Gymnosperm & Angiosperm", bn_name: "নগ্নবীজী ও আবৃতবীজী উদ্ভিদ" },
                { id: 'bio1_ch8', name: "Chapter 08: Tissue & Tissue System", bn_name: "টিস্যু ও টিস্যুতন্ত্র" },
                { id: 'bio1_ch9', name: "Chapter 09: Plant Physiology", bn_name: "উদ্ভিদ শারীরতত্ত্ব" },
                { id: 'bio1_ch11', name: "Chapter 11: Biotechnology", bn_name: "জীব প্রযুক্তি" }
            ]
        },
        'bio2': { 
            name: "Biology 2nd Paper", bn_name: "জীববিজ্ঞান ২য় পত্র", 
            chapters: [
                { id: 'bio2_ch1', name: "Chapter 01: Animal Diversity and Classification", bn_name: "প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস" },
                { id: 'bio2_ch2', name: "Chapter 02: Animal Identification", bn_name: "প্রাণীর পরিচিতি" },
                { id: 'bio2_ch3', name: "Chapter 03: Human Physiology: Digestion & Absorption", bn_name: "পরিপাক ও শোষণ" },
                { id: 'bio2_ch4', name: "Chapter 04: Human Physiology: Blood & Circulation", bn_name: "রক্ত ও সঞ্চালন" },
                { id: 'bio2_ch5', name: "Chapter 05: Human Physiology: Breathing & Respiration", bn_name: "শ্বাস ক্রিয়া ও শ্বসন" },
                { id: 'bio2_ch7', name: "Chapter 07: Human Physiology: Locomotion & Movement", bn_name: "চলন ও অঙ্গচালনা" },
                { id: 'bio2_ch11', name: "Chapter 11: Genetics & Evolution", bn_name: "জিনতত্ত্ব ও বিবর্তন" }
            ] 
        }
    },

    // =================================================================================
    //  HSC ONE SHOT DATA (সম্পূর্ণ নতুন সিলেবাস)
    // =================================================================================
    oneShotSubjects: {
        // ... (oneShotSubjects আগের মতোই থাকবে, এখানে কোনো পরিবর্তন করা হয়নি) ...
    },

    // =================================================================================
    //  VIDEOS SECTION (সব ভিডিওর জন্য youtubeId ব্যবহার করা হয়েছে)
    // =================================================================================
    videos: {
        // --- Physics 1st Paper ---
        'phys1_ch2_lec1': { chapterId: 'phys1_ch2', title: "Vector Class 01", youtubeId: "OZdnnFQ7l-g", instructor: { name: "Shahriar Nazim" }, downloads: { lectureSheet: "#" } },
        'phys1_ch2_lec2': { chapterId: 'phys1_ch2', title: "Vector Class 02", youtubeId: "mpYDxBZAg4U", instructor: { name: "Shahriar Nazim" }, downloads: { lectureSheet: "#" } },
        'phys1_ch2_lec3': { chapterId: 'phys1_ch2', title: "Vector Class 03", youtubeId: "cGweIyDH3Fc", instructor: { name: "Shahriar Nazim" }, downloads: { lectureSheet: "#" } },
        'phys1_ch2_lec4': { chapterId: 'phys1_ch2', title: "Vector Class 04", youtubeId: "AW61Y9QzaoE", instructor: { name: "Shahriar Nazim" }, downloads: { lectureSheet: "#" } },
        'phys1_ch3_lec1': { chapterId: 'phys1_ch3', title: "Newtonian Mechanics Class 01", youtubeId: "wZmm4hyT3ao", instructor: { name: "Shahriar Nazim" }, downloads: { lectureSheet: "#" } },
        'phys1_ch3_lec2': { chapterId: 'phys1_ch3', title: "Newtonian Mechanics Class 02", youtubeId: "Oq63MxMHz1A", instructor: { name: "Shahriar Nazim" }, downloads: { lectureSheet: "#" } },
        'phys1_ch5_lec1': { chapterId: 'phys1_ch5', title: "Work, Energy and Power Class 01", youtubeId: "be2ryBJO_44", instructor: { name: "Shariar Nazim" }, downloads: { lectureSheet: "#" } },
        'phys1_ch6_lec1': { chapterId: 'phys1_ch6', title: "Gravitation Class 01", youtubeId: "HQeOyrPfqfU", instructor: { name: "Shariar Nazim" }, downloads: { lectureSheet: "#" } },
        'phys1_ch7_lec1': { chapterId: 'phys1_ch7', title: "Structural Properties of Matter Class 01", youtubeId: "xIwEsi4OSbo", instructor: { name: "Shariar Nazim" }, downloads: { lectureSheet: "#" } },
        'phys1_ch8_lec1': { chapterId: 'phys1_ch8', title: "Periodic Motion Class 01", youtubeId: "LVEChmJcPGU", instructor: { name: "Shariar Nazim" }, downloads: { lectureSheet: "#" } },
        'phys1_ch10_lec1': { chapterId: 'phys1_ch10', title: "Ideal Gas Class 01", youtubeId: "KVYxMiC86Q0", instructor: { name: "Shahriar Nazim" }, downloads: { lectureSheet: "#" } },
        
        // --- Physics 2nd Paper ---
        'phys2_ch1_lec1': { chapterId: 'phys2_ch1', title: "Thermodynamics Class 01", youtubeId: "OEHC7HSua18", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'phys2_ch2_lec1': { chapterId: 'phys2_ch2', title: "Electrostatics Class 01", youtubeId: "bz8lbJsHrVg", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'phys2_ch3_lec1': { chapterId: 'phys2_ch3', title: "Current Electricity Class 01", youtubeId: "68bgaW423Uc", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'phys2_ch3_lec2': { chapterId: 'phys2_ch3', title: "Current Electricity Class 02", youtubeId: "WPovaQqIYyY", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'phys2_ch3_lec3': { chapterId: 'phys2_ch3', title: "Current Electricity Class 03", youtubeId: "XTb2ZRXkZ8Y", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'phys2_ch7_lec1': { chapterId: 'phys2_ch7', title: "Physical Optics Class 01", youtubeId: "s8yfBKC9ELY", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'phys2_ch7_lec2': { chapterId: 'phys2_ch7', title: "Physical Optics Class 02", youtubeId: "t9rCgPxUJIg", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'phys2_ch7_lec3': { chapterId: 'phys2_ch7', title: "Physical Optics Class 03", youtubeId: "rgbdgR85t2I", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'phys2_ch8_lec1': { chapterId: 'phys2_ch8', title: "Modern Physics Class 01", youtubeId: "JXjl4JRJa88", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'phys2_ch8_lec2': { chapterId: 'phys2_ch8', title: "Modern Physics Class 02", youtubeId: "ySL44xqQ3Kw", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'phys2_ch9_lec1': { chapterId: 'phys2_ch9', title: "Atomic Models Class 01", youtubeId: "EAX10C9MI0c", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'phys2_ch10_lec1': { chapterId: 'phys2_ch10', title: "Semiconductors Class 01", youtubeId: "648e5r4iB_E", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },

        // --- Chemistry 1st Paper ---
        'chem1_ch2_lec1': { chapterId: 'chem1_ch2', title: "Qualitative Chemistry Class 01", youtubeId: "jc3Be6DJOsI", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem1_ch2_lec2': { chapterId: 'chem1_ch2', title: "Qualitative Chemistry Class 02", youtubeId: "lit6MPK4Njc", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem1_ch2_lec3': { chapterId: 'chem1_ch2', title: "Qualitative Chemistry Class 03", youtubeId: "4WhBGkXQC8s", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem1_ch2_lec4': { chapterId: 'chem1_ch2', title: "Qualitative Chemistry Class 04", youtubeId: "wVAUzJ14oBs", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem1_ch2_lec5': { chapterId: 'chem1_ch2', title: "Qualitative Chemistry Class 05", youtubeId: "Tzfe6pGGgJs", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem1_ch3_lec1': { chapterId: 'chem1_ch3', title: "Periodic Properties Class 01", youtubeId: "bCdPqkqotYs", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem1_ch3_lec2': { chapterId: 'chem1_ch3', title: "Periodic Properties Class 02", youtubeId: "SMk3XLJEiKs", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem1_ch3_lec3': { chapterId: 'chem1_ch3', title: "Periodic Properties Class 03", youtubeId: "9eI2nudPhNU", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem1_ch3_lec4': { chapterId: 'chem1_ch3', title: "Periodic Properties Class 04", youtubeId: "jaeOys5hFlM", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem1_ch3_lec5': { chapterId: 'chem1_ch3', title: "Periodic Properties Class 05", youtubeId: "n-TPSgVYf68", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem1_ch4_lec1': { chapterId: 'chem1_ch4', title: "Chemical Change Class 01", youtubeId: "LBkfu6op8Jg", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem1_ch4_lec2': { chapterId: 'chem1_ch4', title: "Chemical Change Class 02", youtubeId: "f8hV4KDPEFY", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem1_ch4_lec3': { chapterId: 'chem1_ch4', title: "Chemical Change Class 03", youtubeId: "AEX4LEiIP5w", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem1_ch4_lec4': { chapterId: 'chem1_ch4', title: "Chemical Change Class 04", youtubeId: "fnYraENzn0I", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem1_ch5_lec1': { chapterId: 'chem1_ch5', title: "Applied Chemistry Class 01", youtubeId: "khq6E38WVIg", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },

        // --- Chemistry 2nd Paper ---
        'chem2_ch1_lec1': { chapterId: 'chem2_ch1', title: "Environmental Chemistry Class 01", youtubeId: "nT5EFWmdQ2I", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch1_lec2': { chapterId: 'chem2_ch1', title: "Environmental Chemistry Class 02", youtubeId: "kvtsMqMJaCI", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch1_lec3': { chapterId: 'chem2_ch1', title: "Environmental Chemistry Class 03", youtubeId: "e0N69eIN32A", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch2_lec1': { chapterId: 'chem2_ch2', title: "Organic Chemistry Class 01", youtubeId: "LDu5HZKJ5Dw", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch2_lec2': { chapterId: 'chem2_ch2', title: "Organic Chemistry Class 02", youtubeId: "r64oJWmcjZM", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch2_lec3': { chapterId: 'chem2_ch2', title: "Organic Chemistry Class 03", youtubeId: "dn2S6BD353o", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch2_lec4': { chapterId: 'chem2_ch2', title: "Organic Chemistry Class 04", youtubeId: "u5X1xdKuc04", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch2_lec5': { chapterId: 'chem2_ch2', title: "Organic Chemistry Class 05", youtubeId: "1nA0rrJahJ0", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch2_lec6': { chapterId: 'chem2_ch2', title: "Organic Chemistry Class 06", youtubeId: "9EY01JfiTH0", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch2_lec7': { chapterId: 'chem2_ch2', title: "Organic Chemistry Class 07", youtubeId: "6_pGyBYAkZI", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch2_lec8': { chapterId: 'chem2_ch2', title: "Organic Chemistry Class 08", youtubeId: "SZgj68GdFRE", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch2_lec9': { chapterId: 'chem2_ch2', title: "Organic Chemistry Class 09", youtubeId: "0VA9bVJaE2Y", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch2_lec10': { chapterId: 'chem2_ch2', title: "Organic Chemistry Class 10", youtubeId: "8Q6KUj0ayqk", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch2_lec11': { chapterId: 'chem2_ch2', title: "Organic Chemistry Class 11", youtubeId: "V-nBH-UJ76w", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch2_lec12': { chapterId: 'chem2_ch2', title: "Organic Chemistry Class 12", youtubeId: "64JMejzZWy0", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch2_lec13': { chapterId: 'chem2_ch2', title: "Organic Chemistry Class 13", youtubeId: "QZp5HWNbFlg", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch2_lec14': { chapterId: 'chem2_ch2', title: "Organic Chemistry Class 14", youtubeId: "xtZT62a6kC8", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch3_lec1': { chapterId: 'chem2_ch3', title: "Quantitative Chemistry Class 01", youtubeId: "80B7XA_1zRE", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch3_lec2': { chapterId: 'chem2_ch3', title: "Quantitative Chemistry Class 02", youtubeId: "0d67uZ9w8VI", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch3_lec3': { chapterId: 'chem2_ch3', title: "Quantitative Chemistry Class 03", youtubeId: "GwWe_IBu2eE", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch4_lec1': { chapterId: 'chem2_ch4', title: "Electrochemistry Class 01", youtubeId: "ElrX-MFIYWQ", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch4_lec2': { chapterId: 'chem2_ch4', title: "Electrochemistry Class 02", youtubeId: "UlwUt6WmPv8", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch4_lec3': { chapterId: 'chem2_ch4', title: "Electrochemistry Class 03", youtubeId: "bPzeFXEXdow", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'chem2_ch4_lec4': { chapterId: 'chem2_ch4', title: "Electrochemistry Class 04", youtubeId: "QA4N6ZYqOEY", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },

        // --- Math 1st & 2nd Paper ---
        'math1_ch1_lec1': { chapterId: 'math1_ch1', title: "Matrix Class 01", youtubeId: "VQHMD7JXx70", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch1_lec2': { chapterId: 'math1_ch1', title: "Matrix Class 02", youtubeId: "4eevnbDTfio", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch1_lec3': { chapterId: 'math1_ch1', title: "Matrix Class 03", youtubeId: "mFpDHnZEH2A", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch3_lec1': { chapterId: 'math1_ch3', title: "Straight Line Class 01", youtubeId: "P5cJVWbQrw0", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch3_lec2': { chapterId: 'math1_ch3', title: "Straight Line Class 02", youtubeId: "Tgt5FzPZOsw", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch3_lec3': { chapterId: 'math1_ch3', title: "Straight Line Class 03", youtubeId: "N28Uoaf6QQY", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch3_lec4': { chapterId: 'math1_ch3', title: "Straight Line Class 04", youtubeId: "YOAPZ7tMk1M", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch4_lec1': { chapterId: 'math1_ch4', title: "Circle Class 01", youtubeId: "d6xZBW83OFY", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch4_lec2': { chapterId: 'math1_ch4', title: "Circle Class 02", youtubeId: "kAdfY8erRKg", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch4_lec3': { chapterId: 'math1_ch4', title: "Circle Class 03", youtubeId: "aQvAKepn3E8", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch7_lec1': { chapterId: 'math1_ch7', title: "Trigonometry Class 01", youtubeId: "wwAZ_ELWmLU", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch7_lec2': { chapterId: 'math1_ch7', title: "Trigonometry Class 02", youtubeId: "SoJVhbSkOXk", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch7_lec3': { chapterId: 'math1_ch7', title: "Trigonometry Class 03", youtubeId: "MeqQR6YJy7o", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch9_lec1': { chapterId: 'math1_ch9', title: "Differentiation Class 01", youtubeId: "OqyseQo88kM", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch9_lec2': { chapterId: 'math1_ch9', title: "Differentiation Class 02", youtubeId: "O0Gq1wrxR84", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch9_lec3': { chapterId: 'math1_ch9', title: "Differentiation Class 03", youtubeId: "FUVFPVfv_UY", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch9_lec4': { chapterId: 'math1_ch9', title: "Differentiation Class 04", youtubeId: "A7e_26Y2bT0", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch9_lec5': { chapterId: 'math1_ch9', title: "Differentiation Class 05", youtubeId: "NfFnVS8KzaE", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch10_lec1': { chapterId: 'math1_ch10', title: "Integration Class 01", youtubeId: "7vxJg2mqeak", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch10_lec2': { chapterId: 'math1_ch10', title: "Integration Class 02", youtubeId: "jkCiJVBzZkk", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch10_lec3': { chapterId: 'math1_ch10', title: "Integration Class 03", youtubeId: "TElrJfcV3xI", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math1_ch10_lec4': { chapterId: 'math1_ch10', title: "Integration Class 04", youtubeId: "Jv7pJxdia3E", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch3_lec1': { chapterId: 'math2_ch3', title: "Complex Number Class 01", youtubeId: "j64QHZshK38", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch3_lec2': { chapterId: 'math2_ch3', title: "Complex Number Class 02", youtubeId: "j7XxAwANgwk", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch3_lec3': { chapterId: 'math2_ch3', title: "Complex Number Class 03", youtubeId: "6PkOAanQwNY", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch4_lec1': { chapterId: 'math2_ch4', title: "Polynomial Class 01", youtubeId: "5ybgUDrji3g", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch4_lec2': { chapterId: 'math2_ch4', title: "Polynomial Class 02", youtubeId: "FXK1kKOvhY4", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch4_lec3': { chapterId: 'math2_ch4', title: "Polynomial Class 03", youtubeId: "Z8GyHPhkHzQ", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch6_lec1': { chapterId: 'math2_ch6', title: "Conics Class 01", youtubeId: "MMxszs-Q3pg", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch6_lec2': { chapterId: 'math2_ch6', title: "Conics Class 02", youtubeId: "7jKoVD8moao", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch6_lec3': { chapterId: 'math2_ch6', title: "Conics Class 03", youtubeId: "bvI1dgckmMA", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch6_lec4': { chapterId: 'math2_ch6', title: "Conics Class 04", youtubeId: "wrc-czFuClc", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch7_lec1': { chapterId: 'math2_ch7', title: "Inverse Trigonometry Class 01", youtubeId: "A_lMrtzaIVo", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch7_lec2': { chapterId: 'math2_ch7', title: "Inverse Trigonometry Class 02", youtubeId: "vHRA-Hgh380", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch7_lec3': { chapterId: 'math2_ch7', title: "Inverse Trigonometry Class 03", youtubeId: "qXHkfLbj3Ow", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch8_lec1': { chapterId: 'math2_ch8', title: "Statics Class 01", youtubeId: "UiM4DAh5o3Q", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch8_lec2': { chapterId: 'math2_ch8', title: "Statics Class 02", youtubeId: "t-wInunAtmA", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch8_lec3': { chapterId: 'math2_ch8', title: "Statics Class 03", youtubeId: "plA1k0rZwZc", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch9_lec1': { chapterId: 'math2_ch9', title: "Dynamics Class 01", youtubeId: "z39EuJNtptc", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'math2_ch9_lec2': { chapterId: 'math2_ch9', title: "Dynamics Class 02", youtubeId: "9gjrAAULEbY", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        
        // --- Biology 1st & 2nd Paper ---
        'bio1_ch1_lec1': { chapterId: 'bio1_ch1', title: "Cell & its Structure Class 01", youtubeId: "ZyptSeQxRU0", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch1_lec2': { chapterId: 'bio1_ch1', title: "Cell & its Structure Class 02", youtubeId: "vraPhrYgGD0", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch1_lec3': { chapterId: 'bio1_ch1', title: "Cell & its Structure Class 03", youtubeId: "Kx4yWOSu0YA", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch2_lec1': { chapterId: 'bio1_ch2', title: "Cell Division Class 01", youtubeId: "6X5_OF2G8ZY", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch2_lec2': { chapterId: 'bio1_ch2', title: "Cell Division Class 02", youtubeId: "d6atuks839I", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch4_lec1': { chapterId: 'bio1_ch4', title: "Microorganisms Class 01", youtubeId: "TmMnlM5mrGo", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch4_lec2': { chapterId: 'bio1_ch4', title: "Microorganisms Class 02", youtubeId: "TuyZ05Aqak8", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch4_lec3': { chapterId: 'bio1_ch4', title: "Microorganisms Class 03", youtubeId: "OP8p3Q9xYgA", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch4_lec4': { chapterId: 'bio1_ch4', title: "Microorganisms Class 04", youtubeId: "rd2X5C-7wRI", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch7_lec1': { chapterId: 'bio1_ch7', title: "Gymnosperms & Angiosperms Class 01", youtubeId: "Pt55y4VFHIE", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch7_lec2': { chapterId: 'bio1_ch7', title: "Gymnosperms & Angiosperms Class 02", youtubeId: "yxxw1zODwMk", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch7_lec3': { chapterId: 'bio1_ch7', title: "Gymnosperms & Angiosperms Class 03", youtubeId: "s98T6uoOmis", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch7_lec4': { chapterId: 'bio1_ch7', title: "Gymnosperms & Angiosperms Class 04", youtubeId: "rjsVuUsQ6aY", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch8_lec1': { chapterId: 'bio1_ch8', title: "Tissue & Tissue System Class 01", youtubeId: "5NBM12ySmpE", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch8_lec2': { chapterId: 'bio1_ch8', title: "Tissue & Tissue System Class 02", youtubeId: "ooOF4Ilrl7A", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch9_lec1': { chapterId: 'bio1_ch9', title: "Plant Physiology Class 01", youtubeId: "twKS1ubuHxg", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch9_lec2': { chapterId: 'bio1_ch9', title: "Plant Physiology Class 02", youtubeId: "NsTqo1D_5gQ", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch9_lec3': { chapterId: 'bio1_ch9', title: "Plant Physiology Class 03", youtubeId: "TQt6InNKtWc", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch11_lec1': { chapterId: 'bio1_ch11', title: "Biotechnology Class 01", youtubeId: "0FOQb2ywbJc", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio1_ch11_lec2': { chapterId: 'bio1_ch11', title: "Biotechnology Class 02", youtubeId: "sHDZT7aGkgU", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch1_lec1': { chapterId: 'bio2_ch1', title: "Animal Diversity Class 01", youtubeId: "S0oCotDZ95Y", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch1_lec2': { chapterId: 'bio2_ch1', title: "Animal Diversity Class 02", youtubeId: "PHTzbBZfYOQ", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch1_lec3': { chapterId: 'bio2_ch1', title: "Animal Diversity Class 03", youtubeId: "dux-ms3O5Yw", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch1_lec4': { chapterId: 'bio2_ch1', title: "Animal Diversity Class 04", youtubeId: "zp7KXE3lBvw", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch2_lec1': { chapterId: 'bio2_ch2', title: "Animal Identification Class 01", youtubeId: "olTpXhoF-Dc", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch2_lec2': { chapterId: 'bio2_ch2', title: "Animal Identification Class 02", youtubeId: "Rz5I7RQI0QM", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch2_lec3': { chapterId: 'bio2_ch2', title: "Animal Identification Class 03", youtubeId: "VzUbWg1YK5E", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch3_lec1': { chapterId: 'bio2_ch3', title: "Digestion & Absorption Class 01", youtubeId: "qv79Up5xpYY", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch3_lec2': { chapterId: 'bio2_ch3', title: "Digestion & Absorption Class 02", youtubeId: "hQxz9WN6N_A", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch3_lec3': { chapterId: 'bio2_ch3', title: "Digestion & Absorption Class 03", youtubeId: "BhwPiOObQHM", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch4_lec1': { chapterId: 'bio2_ch4', title: "Blood & Circulation Class 01", youtubeId: "dAXfnRFMdIs", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch4_lec2': { chapterId: 'bio2_ch4', title: "Blood & Circulation Class 02", youtubeId: "WK1W0PDnL84", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch4_lec3': { chapterId: 'bio2_ch4', title: "Blood & Circulation Class 03", youtubeId: "NLUAFYcFY_I", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch5_lec1': { chapterId: 'bio2_ch5', title: "Breathing & Respiration Class 01", youtubeId: "MbLDzGxBveM", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch5_lec2': { chapterId: 'bio2_ch5', title: "Breathing & Respiration Class 02", youtubeId: "Kb8EjZRgG_A", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch7_lec1': { chapterId: 'bio2_ch7', title: "Locomotion & Movement Class 01", youtubeId: "keIfaa47UJY", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch7_lec2': { chapterId: 'bio2_ch7', title: "Locomotion & Movement Class 02", youtubeId: "do0aWiKvpNA", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch7_lec3': { chapterId: 'bio2_ch7', title: "Locomotion & Movement Class 03", youtubeId: "og4hcGNr448", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch11_lec1': { chapterId: 'bio2_ch11', title: "Genetics & Evolution Class 01", youtubeId: "HUPD9b2jqWc", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch11_lec2': { chapterId: 'bio2_ch11', title: "Genetics & Evolution Class 02", youtubeId: "xUCUBd68yY0", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },
        'bio2_ch11_lec3': { chapterId: 'bio2_ch11', title: "Genetics & Evolution Class 03", youtubeId: "_69hLZfGxsE", instructor: { name: "শিক্ষক" }, downloads: { lectureSheet: "#" } },

        // --- One Shot Videos ---
        'phys1_ch2_oneshot_video': { chapterId: 'phys1_ch2_oneshot', title: "ভেক্টর (One Shot)", youtubeId: "6eW-p_1x3aE", slideUrl: "#", instructor: { name: "On Stage Education" } },
        'phys1_ch3_oneshot_video': { chapterId: 'phys1_ch3_oneshot', title: "নিউটনিয়ান বলবিদ্যা (One Shot)", youtubeId: "bLuT522j2Lo", slideUrl: "#", instructor: { name: "On Stage Education" } },
        'phys2_ch1_oneshot_video': { chapterId: 'phys2_ch1_oneshot', title: "তাপগতিবিদ্যা (One Shot)", youtubeId: "fGigtTEB-dI", slideUrl: "#", instructor: { name: "Sparkle" } },
        'chem1_ch2_oneshot_video': { chapterId: 'chem1_ch2_oneshot', title: "গুণগত রসায়ন (One Shot)", youtubeId: "T1hP3gA4b84", slideUrl: "#", instructor: { name: "Chem Time" } },
        'math1_ch1_oneshot_video': { chapterId: 'math1_ch1_oneshot', title: "ম্যাট্রিক্স ও নির্ণায়ক (One Shot)", youtubeId: "x0bCFTRX3yE", slideUrl: "#", instructor: { name: "Shadhin Ahmed" } },
        'bio1_ch1_oneshot_video': { chapterId: 'bio1_ch1_oneshot', title: "কোষ ও এর গঠন (One Shot)", youtubeId: "wDqQk1a2YQM", slideUrl: "#", instructor: { name: "Biology Haters" } }
    }
};