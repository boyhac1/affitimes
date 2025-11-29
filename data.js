/**
 * AFFITIMES CORE ENGINE - STABLE VERSION
 * --------------------------------------
 * 1. Auto Column Detection (AI Logic)
 * 2. Crash Proof Loop System
 * 3. Smart Caching (LocalStorage)
 * 4. Advanced YouTube URL Parser
 */

// আপনার অ্যাপস স্ক্রিপ্ট লিংক (এটি অপরিবর্তিত থাকবে)
const API_URL = "https://script.google.com/macros/s/AKfycbwSaGakhBA3TCl47-OId2pH_opYaxyyx8fCazaAauM_TXUJ_83NX3GWhJ7nUbbsI6sAyQ/exec";

// গ্লোবাল ডাটা স্টোর
const store = {
    videos: {},         // সকল ভিডিওর অবজেক্ট
    categories: {},     // ক্যাটাগরি এবং সাবজেক্ট স্ট্রাকচার
    stats: {            // পরিসংখ্যান
        total: 0,
        subjects: 0,
        slides: 0,
        sheets: 0
    },
    isReady: false      // সিস্টেম রেডি ফ্ল্যাগ
};

// --- ১. হেল্পার ফাংশন (INTELLIGENCE LAYER) ---

// স্ট্রিং ক্লিন করার ফাংশন (বড় হাতের/ছোট হাতের সমস্যা মেটানোর জন্য)
function normalize(str) {
    if (!str) return "";
    return String(str).toLowerCase().trim().replace(/[\s_.-]+/g, "");
}

// শিটের কলাম খুঁজে বের করার ফাংশন
function getVal(row, aliases) {
    if (!row || typeof row !== 'object') return "";
    
    // রো এর সব কি (Key) নরমালইজ করে একটি ম্যাপ তৈরি করা
    const normalizedMap = {};
    Object.keys(row).forEach(key => {
        normalizedMap[normalize(key)] = row[key];
    });

    // আমাদের কাঙ্ক্ষিত নাম (Alias) খোঁজা
    for (let alias of aliases) {
        const cleanAlias = normalize(alias);
        if (normalizedMap[cleanAlias] !== undefined && normalizedMap[cleanAlias] !== "") {
            return String(normalizedMap[cleanAlias]).trim();
        }
    }
    return ""; // কিছু না পেলে খালি স্ট্রিং
}

// শক্তিশালী ইউটিউব আইডি এক্সট্রাক্টর (Shorts/Live/Embed সব সাপোর্ট করবে)
function getYTId(url) {
    if (!url) return null;
    let str = String(url).trim();

    // ১. যদি সরাসরি ১১ ডিজিটের আইডি দেওয়া হয়
    if (/^[a-zA-Z0-9_-]{11}$/.test(str)) {
        return str;
    }

    // ২. যদি লিংক দেওয়া হয় (রেজেক্স দিয়ে আইডি বের করা)
    // Supports: youtube.com, youtu.be, shorts, embed, live
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = str.match(regex);

    return match ? match[1] : null;
}

// ড্রাইভ লিংক ফিক্সার (View -> Preview)
function fixDriveLink(url) {
    if (!url) return "";
    let str = String(url).trim();
    if (str.includes("drive.google.com") && str.includes("/view")) {
        return str.replace(/\/view.*/, "/preview");
    }
    return str;
}

// --- ২. মেইন ডাটা প্রসেসর ---

function process(rows) {
    // স্টোর রিসেট (পুরানো ডাটা মুছে ফেলা)
    store.videos = {};
    store.categories = {};
    store.stats = { total: 0, subjects: 0, slides: 0, sheets: 0 };
    
    let uniqueSubjects = new Set(); // সাবজেক্ট গুনার জন্য

    // যদি রো না থাকে বা অ্যারে না হয়
    if (!Array.isArray(rows)) {
        console.error("Invalid Data Format from Sheet");
        return;
    }

    rows.forEach(row => {
        // ১. ক্রিটিকাল ডাটা রিড করা
        const rawLink = getVal(row, ['youtube_id', 'youtube_link', 'link', 'url', 'video_link']);
        const subId = getVal(row, ['subject_id', 'sub_id', 'code']);
        
        // ২. ভ্যালিডেশন: ইউটিউব আইডি বা সাবজেক্ট আইডি না থাকলে এই রো বাদ
        const yId = getYTId(rawLink);
        if (!yId || !subId) return;

        // ৩. অন্যান্য ডাটা রিড করা
        const chapId = getVal(row, ['chapter_id', 'chap_id']) || "ch00";
        const catName = getVal(row, ['category', 'cat', 'program']) || "General Courses";
        const vidTitle = getVal(row, ['video_title', 'title', 'topic']) || "Untitled Class";
        const instructor = getVal(row, ['instructor', 'teacher_name', 'sir']) || "Affitimes Faculty";
        
        const slideLink = getVal(row, ['slide_link', 'slide', 'ppt']);
        const sheetLink = getVal(row, ['lecture_link', 'sheet', 'pdf', 'note']);

        // ৪. ইউনিক ভিডিও কি (Key) জেনারেট করা
        // শিটে যদি video_key থাকে সেটা নিব, না থাকলে বানাবো
        let vKey = getVal(row, ['video_key', 'key']);
        if (!vKey) vKey = `${subId}_${yId}`; // অটোমেটিক জেনারেশন

        // ৫. স্ট্যাটাস আপডেট
        store.stats.total++;
        uniqueSubjects.add(subId);
        if (slideLink) store.stats.slides++;
        if (sheetLink) store.stats.sheets++;

        // ৬. ভিডিও অবজেক্ট তৈরি
        const videoObj = {
            key: vKey,
            yId: yId,
            title: vidTitle,
            instructor: instructor,
            
            // গ্রুপিং ডাটা
            cat: catName,
            subId: subId,
            subName: getVal(row, ['subject_name', 'subject', 'sub_name']) || subId,
            subBn: getVal(row, ['subject_bn', 'bangla_name']) || "",
            
            chapId: chapId,
            chapName: getVal(row, ['chapter_name', 'chapter']) || "General Chapter",
            
            // রিসোর্স
            slide: fixDriveLink(slideLink), // স্লাইড লিংক (Preview মোডে কনভার্ট করা)
            lecture: sheetLink              // শিট লিংক
        };

        // ৭. স্টোরে জমা করা
        store.videos[vKey] = videoObj;

        // ৮. ক্যাটাগরি স্ট্রাকচার তৈরি (হোমপেজের জন্য)
        if (!store.categories[catName]) {
            store.categories[catName] = {};
        }

        if (!store.categories[catName][subId]) {
            store.categories[catName][subId] = {
                id: subId,
                name: videoObj.subName,
                bn: videoObj.subBn,
                videos: [] // ভিডিওর লিস্ট
            };
        }

        // ডুপ্লিকেট ভিডিও চেক করে পুশ করা
        if (!store.categories[catName][subId].videos.includes(vKey)) {
            store.categories[catName][subId].videos.push(vKey);
        }
    });

    store.stats.subjects = uniqueSubjects.size;
    console.log(`✅ Processed: ${store.stats.total} videos in ${store.stats.subjects} subjects.`);
}

// --- ৩. লোডিং এবং সিঙ্ক সিস্টেম ---

// অ্যাপ রান হওয়ার ফাংশন
async function initApp() {
    const cachedData = localStorage.getItem('affi_stable_v1');

    if (cachedData) {
        console.log("⚡ Loading from Cache...");
        try {
            const parsed = JSON.parse(cachedData);
            process(parsed);
            fireEvent();
            hideLoader();
        } catch (e) {
            console.error("Cache Error, Fetching fresh...", e);
            refreshDatabase();
        }
    } else {
        console.log("☁️ No Cache, Downloading...");
        refreshDatabase();
    }
}

// রিফ্রেশ ফাংশন (বাটনের জন্য)
async function refreshDatabase() {
    // UI Elements
    const btn = document.getElementById('refresh-icon');
    const bar = document.getElementById('progress-area');
    const fill = document.getElementById('progress-fill');
    
    // Animation On
    if (btn) btn.classList.add('spin-anim');
    if (bar) bar.style.display = 'block';
    
    // ফেইক প্রোগ্রেস বার (ইউজার এক্সপেরিয়েন্সের জন্য)
    let width = 0;
    const interval = setInterval(() => {
        if (width < 90) {
            width += Math.floor(Math.random() * 10);
            if (fill) fill.style.width = width + '%';
        }
    }, 150);

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Network Error");
        
        const data = await response.json();
        
        // ডাটা ভ্যালিডেশন
        if (data.error) throw new Error(data.error);

        // প্রসেস এবং সেভ
        process(data);
        localStorage.setItem('affi_stable_v1', JSON.stringify(data));

        // Animation Finish
        clearInterval(interval);
        if (fill) fill.style.width = '100%';

        // ১ সেকেন্ড পর লোডার বন্ধ হবে (স্মুথ এফেক্ট)
        setTimeout(() => {
            fireEvent();
            hideLoader();
            if (btn) btn.classList.remove('spin-anim');
            if (bar) bar.style.display = 'none';
        }, 800);

    } catch (error) {
        clearInterval(interval);
        console.error("Failed to load:", error);
        if (btn) btn.classList.remove('spin-anim');
        alert("⚠️ ডাটা লোড করা যায়নি। দয়া করে ইন্টারনেট চেক করুন।");
    }
}

// ইভেন্ট ফায়ার করা (UI কে জানানো)
function fireEvent() {
    store.isReady = true;
    document.dispatchEvent(new Event('appReady'));
}

// লোডার লুকানো
function hideLoader() {
    const l = document.getElementById('loader');
    if (l) {
        l.style.opacity = '0';
        setTimeout(() => { l.style.display = 'none'; }, 500);
    }
}

// --- রান ---
initApp();