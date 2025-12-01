/**
 * AFFITIMES ULTIMATE - PRO EDITION
 * Features: PWA, Offline, Progress, History, Floating Tools, Hard Reset
 */

const CONFIG = {
    API_URL: "https://script.google.com/macros/s/AKfycbwSaGakhBA3TCl47-OId2pH_opYaxyyx8fCazaAauM_TXUJ_83NX3GWhJ7nUbbsI6sAyQ/exec",
    CACHE_KEY: "affi_data_v5",
    SETTINGS_KEY: "affi_settings_v1",
    PROGRESS_KEY: "affi_progress_v1",
    HISTORY_KEY: "affi_history_v1",
    NOTE_KEY: "affi_notepad_v1"
};

const app = {
    data: [],
    categories: {},
    watched: [],
    history: null,
    
    settings: { autoplay: false, theme: 'dark' },
    calcVal: "",

    // --- INIT ---
    init: async () => {
        // PWA Registration
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js')
                .then(() => console.log('Service Worker Ready (Offline Mode)'))
                .catch(err => console.log('SW Fail', err));
        }

        app.loadSettings();
        app.loadUserData();
        app.setupEventListeners();

        const cached = localStorage.getItem(CONFIG.CACHE_KEY);
        if (cached) {
            app.processData(JSON.parse(cached));
            app.syncData(false); // Silent Background Sync
        } else {
            app.syncData(true);
        }

        // Load Saved Note
        document.getElementById('quick-note').value = localStorage.getItem(CONFIG.NOTE_KEY) || "";
    },

    loadUserData: () => {
        // Load Watched Items
        const savedWatched = localStorage.getItem(CONFIG.PROGRESS_KEY);
        app.watched = savedWatched ? JSON.parse(savedWatched) : [];

        // Load History
        const savedHist = localStorage.getItem(CONFIG.HISTORY_KEY);
        app.history = savedHist ? JSON.parse(savedHist) : null;
    },

    loadSettings: () => {
        if(localStorage.getItem('affi_theme') === 'light') document.body.classList.add('light-theme');
        const saved = localStorage.getItem(CONFIG.SETTINGS_KEY);
        if (saved) app.settings = { ...app.settings, ...JSON.parse(saved) };
        const autoCheck = document.getElementById('setting-autoplay');
        if(autoCheck) autoCheck.checked = app.settings.autoplay;
    },

    saveSettings: () => {
        app.settings.autoplay = document.getElementById('setting-autoplay').checked;
        localStorage.setItem(CONFIG.SETTINGS_KEY, JSON.stringify(app.settings));
        app.showToast("Settings Saved!");
    },

    // --- NEW: HARD RESET FUNCTION ---
    hardReset: async () => {
        if (!confirm("Update App: নতুন ফিচার পেতে অ্যাপটি রিলোড হবে। আপনি কি রাজি?")) return;

        app.showToast("♻️ Updating System...");

        try {
            // 1. Delete API Cache
            localStorage.removeItem(CONFIG.CACHE_KEY);

            // 2. Delete PWA Cache Storage
            if ('caches' in window) {
                const keys = await caches.keys();
                await Promise.all(keys.map(key => caches.delete(key)));
            }

            // 3. Unregister Service Worker
            if ('serviceWorker' in navigator) {
                const registrations = await navigator.serviceWorker.getRegistrations();
                for (const registration of registrations) {
                    await registration.unregister();
                }
            }

            // 4. Force Reload
            setTimeout(() => {
                window.location.reload(true);
            }, 1000);

        } catch (e) {
            console.error(e);
            window.location.reload();
        }
    },

    setupEventListeners: () => {
        document.getElementById('sidebar-toggle').onclick = (e) => {
            e.stopPropagation();
            document.getElementById('sidebar').classList.toggle('active');
        };
        document.addEventListener('click', (e) => {
            const sb = document.getElementById('sidebar');
            const btn = document.getElementById('sidebar-toggle');
            if (window.innerWidth < 1024 && !sb.contains(e.target) && !btn.contains(e.target)) {
                sb.classList.remove('active');
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape") {
                app.closeModal('pdf-modal');
                app.closeModal('settings-modal');
                document.getElementById('tools-panel').style.display = 'none';
            }
        });
    },

    // --- DATA ---
    syncData: async (manual = false) => {
        if(manual) app.showToast("🔄 Syncing...");
        try {
            const res = await fetch(CONFIG.API_URL);
            const json = await res.json();
            if (!json || json.error) throw new Error("Invalid Data");
            
            localStorage.setItem(CONFIG.CACHE_KEY, JSON.stringify(json));
            app.processData(json);
            if(manual) app.showToast("✅ Updated!");
        } catch (e) {
            console.error(e);
            if(manual) app.showToast("⚠️ Offline Mode Active");
        }
    },

    processData: (rows) => {
        app.data = [];
        app.categories = {};

        rows.forEach(row => {
            const get = (keys) => {
                for (let k of keys) {
                    let found = Object.keys(row).find(rk => rk.toLowerCase().replace(/[^a-z]/g,'') === k);
                    if (found && row[found]) return String(row[found]).trim();
                }
                return "";
            };

            let title = get(['videotitle', 'title', 'topic', 'chapter']) || "Untitled";
            let cat = get(['category', 'program', 'class']) || "General";
            let subId = get(['subjectid', 'subid', 'code']) || "MISC";
            let subName = get(['subjectname', 'subject']) || subId;
            let instructor = get(['instructor', 'teacher']) || "Affitimes";
            let vidLink = get(['youtubeid', 'link', 'url', 'videolink']);
            let sheet = get(['sheetlink', 'sheet', 'pdf', 'note']);
            let slide = get(['slidelink', 'slide']);
            
            let yId = app.extractYouTubeID(vidLink);
            let type = yId ? 'video' : (sheet ? 'pdf' : null);
            if (!type) return;

            const fixDrive = (url) => url ? url.replace(/\/view.*/, '/preview').replace(/\/edit.*/, '/preview') : null;

            const item = {
                id: yId || 'doc_' + Math.random().toString(36).substr(2, 9),
                type, title, instructor, subId, subName, cat,
                slide: fixDrive(slide),
                sheet: fixDrive(sheet)
            };

            app.data.push(item);

            if (!app.categories[cat]) app.categories[cat] = {};
            if (!app.categories[cat][subId]) {
                app.categories[cat][subId] = { name: subName, items: [] };
            }
            app.categories[cat][subId].items.push(item);
        });

        app.renderSidebar();
        if (!document.getElementById('player-view')) app.renderHome();
    },

    extractYouTubeID: (url) => {
        if (!url) return null;
        const match = url.match(/(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
        return (match && match[1].length === 11) ? match[1] : (url.length === 11 ? url : null);
    },

    // --- RENDER ---
    renderSidebar: () => {
        const menu = document.getElementById('course-menu');
        menu.innerHTML = '';
        
        Object.keys(app.categories).forEach(cat => {
            let html = `<div class="nav-label" style="margin-top:15px">${cat}</div>`;
            Object.entries(app.categories[cat]).forEach(([subId, data]) => {
                html += `
                <div class="nav-item" onclick="app.openCourse('${cat}', '${subId}')">
                    <i class="fas fa-folder"></i> ${data.name}
                </div>`;
            });
            menu.innerHTML += html;
        });
    },

    renderHome: (filter = "") => {
        const main = document.getElementById('main-content');
        main.scrollTop = 0;
        if(window.innerWidth < 1024) document.getElementById('sidebar').classList.remove('active');

        let html = `
            <div class="hero">
                <h1>Welcome to <span style="color:var(--primary)">Affitimes</span></h1>
                <p>Advanced Learning Management System</p>
            </div>
        `;

        // 1. CONTINUE WATCHING FEATURE
        if(app.history && !filter) {
            html += `
            <div class="continue-banner" onclick="app.openCourse('${app.history.cat}', '${app.history.subId}', '${app.history.id}')">
                <div>
                    <div style="font-size:0.8rem; opacity:0.8; margin-bottom:5px">Continue Learning</div>
                    <div style="font-weight:700; font-size:1.1rem">${app.history.title}</div>
                    <div style="font-size:0.9rem">${app.history.instructor}</div>
                </div>
                <div style="background:white; color:var(--primary); width:40px; height:40px; border-radius:50%; display:grid; place-items:center">
                    <i class="fas fa-play"></i>
                </div>
            </div>`;
        }

        html += `<div id="grid-area"></div>`;
        main.innerHTML = html;

        const grid = document.getElementById('grid-area');
        
        Object.keys(app.categories).forEach(cat => {
            let catHtml = `<h3 style="margin:25px 0 15px; border-left:4px solid var(--primary); padding-left:10px;">${cat}</h3><div class="grid">`;
            let count = 0;

            Object.entries(app.categories[cat]).forEach(([subId, data]) => {
                if (filter && !data.name.toLowerCase().includes(filter.toLowerCase()) && !cat.toLowerCase().includes(filter.toLowerCase())) return;
                
                // 2. PROGRESS CALCULATION
                const total = data.items.length;
                const completed = data.items.filter(i => app.watched.includes(i.id)).length;
                const percent = Math.round((completed / total) * 100);

                const first = data.items[0];
                const isPdf = first.type === 'pdf';
                const thumb = isPdf ? 'https://cdn-icons-png.flaticon.com/512/337/337946.png' : `https://img.youtube.com/vi/${first.id}/hqdefault.jpg`;

                catHtml += `
                    <div class="card" onclick="app.openCourse('${cat}', '${subId}')">
                        <div class="card-thumb">
                            ${isPdf ? '<span class="badge-doc">DOCS</span>' : ''}
                            <img src="${thumb}" style="${isPdf ? 'object-fit:contain; padding:30px; background:#f1f5f9' : ''}" loading="lazy">
                        </div>
                        <div class="card-body">
                            <div class="card-title">${data.name}</div>
                            <div class="card-info">
                                <div class="progress-text">
                                    <span>${completed}/${total} Completed</span>
                                    <span>${percent}%</span>
                                </div>
                                <div class="progress-bg"><div class="progress-fill" style="width:${percent}%"></div></div>
                            </div>
                        </div>
                    </div>
                `;
                count++;
            });
            catHtml += `</div>`;
            if(count > 0) grid.innerHTML += catHtml;
        });
    },

    // --- PLAYER ---
    openCourse: (cat, subId, targetId = null) => {
        const data = app.categories[cat][subId];
        const main = document.getElementById('main-content');
        
        main.innerHTML = `
            <div id="player-view" class="player-layout">
                <button class="btn-action" style="width:fit-content; margin-bottom:15px" onclick="app.renderHome()">
                    <i class="fas fa-arrow-left"></i> Dashboard
                </button>
                <div class="player-content">
                    <div class="left-panel">
                        <div class="video-wrapper" id="video-frame" style="display:none;"></div>
                        <div style="background:var(--bg-card); padding:20px; border-radius:var(--radius); border:1px solid var(--border)">
                            <h2 id="lesson-title" style="font-size:1.3rem; margin-bottom:5px;">Loading...</h2>
                            <div id="lesson-meta" style="color:var(--text-muted); font-size:0.9rem; margin-bottom:10px"></div>
                            <div class="action-area" id="lesson-actions"></div>
                        </div>
                    </div>
                    <div class="right-panel">
                        <div style="padding:15px; border-bottom:1px solid var(--border); font-weight:700; background:var(--glass)">
                            ${data.name}
                        </div>
                        <div style="overflow-y:auto; flex:1;" id="playlist-container"></div>
                    </div>
                </div>
            </div>
        `;

        const pl = document.getElementById('playlist-container');
        let targetItem = data.items[0];

        data.items.forEach((item, idx) => {
            const isWatched = app.watched.includes(item.id);
            if(targetId && item.id === targetId) targetItem = item;

            const row = document.createElement('div');
            row.className = 'nav-item';
            row.style.borderRadius = '0';
            row.style.borderBottom = '1px solid var(--glass)';
            row.innerHTML = `
                <div style="width:20px; text-align:center">
                    ${isWatched ? '<i class="fas fa-check-circle" style="color:#10b981"></i>' : `<i class="fas ${item.type === 'video' ? 'fa-play-circle' : 'fa-file-pdf'}" style="color:var(--text-muted)"></i>`}
                </div>
                <div style="margin-left:10px">
                    <div style="font-weight:600; font-size:0.85rem">${idx + 1}. ${item.title}</div>
                    <div style="font-size:0.75rem; opacity:0.7">By ${item.instructor}</div>
                </div>
            `;
            row.id = `plist-${item.id}`;
            row.onclick = () => app.loadLesson(item, row);
            pl.appendChild(row);
        });

        if(data.items.length > 0) app.loadLesson(targetItem, document.getElementById(`plist-${targetItem.id}`));
    },

    loadLesson: (item, elem) => {
        document.querySelectorAll('#playlist-container .nav-item').forEach(e => e.classList.remove('active'));
        if(elem) elem.classList.add('active');

        // Mark as Watched
        if(!app.watched.includes(item.id)) {
            app.watched.push(item.id);
            localStorage.setItem(CONFIG.PROGRESS_KEY, JSON.stringify(app.watched));
            // Update Icon
            if(elem) elem.querySelector('i').className = 'fas fa-check-circle';
            if(elem) elem.querySelector('i').style.color = '#10b981';
        }

        // Save History
        app.history = { ...item, cat: item.cat, subId: item.subId }; // Ensure context is saved
        localStorage.setItem(CONFIG.HISTORY_KEY, JSON.stringify(app.history));

        const vidBox = document.getElementById('video-frame');
        document.getElementById('lesson-title').innerText = item.title;
        document.getElementById('lesson-meta').innerText = `${item.instructor} | ${item.cat}`;
        
        const actions = document.getElementById('lesson-actions');
        actions.innerHTML = '';

        if (item.type === 'video') {
            vidBox.style.display = 'block';
            const auto = app.settings.autoplay ? 1 : 0;
            vidBox.innerHTML = `<iframe src="https://www.youtube.com/embed/${item.id}?autoplay=${auto}&modestbranding=1&rel=0&hl=bn" allowfullscreen allow="autoplay"></iframe>`;
            if (item.slide) actions.innerHTML += app.btnHtml(item.slide, 'Lecture Slide', 'desktop');
            if (item.sheet) actions.innerHTML += app.btnHtml(item.sheet, 'Note / Question', 'file-alt');
        } else {
            vidBox.style.display = 'none';
            actions.innerHTML = `
                <div style="width:100%; text-align:center; padding:30px; background:rgba(59,130,246,0.1); border-radius:10px;">
                    <i class="fas fa-file-pdf" style="font-size:3.5rem; color:#ef4444; margin-bottom:15px"></i>
                    <h3>Document Resource</h3>
                    ${app.btnHtml(item.sheet, 'Open Document', 'external-link-alt')}
                </div>
            `;
        }
    },

    // --- TOOLS (CALC & NOTE) ---
    toggleTools: () => {
        const p = document.getElementById('tools-panel');
        p.style.display = p.style.display === 'flex' ? 'none' : 'flex';
    },

    switchTool: (t) => {
        document.querySelectorAll('.t-tab').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tool-content').forEach(d => d.style.display = 'none');
        event.target.classList.add('active');
        document.getElementById(`tool-${t}`).style.display = 'block';
    },

    // Calculator Logic
    calcInput: (v) => {
        app.calcVal += v;
        document.getElementById('calc-display').value = app.calcVal;
    },
    calcOp: (op) => {
        app.calcVal += op;
        document.getElementById('calc-display').value = app.calcVal;
    },
    calcResult: () => {
        try {
            app.calcVal = eval(app.calcVal).toString();
            document.getElementById('calc-display').value = app.calcVal;
        } catch {
            document.getElementById('calc-display').value = "Error";
            app.calcVal = "";
        }
    },
    calcClear: () => {
        app.calcVal = "";
        document.getElementById('calc-display').value = "";
    },

    // Note Logic
    saveNote: () => {
        const val = document.getElementById('quick-note').value;
        localStorage.setItem(CONFIG.NOTE_KEY, val);
    },

    // --- UTILS ---
    btnHtml: (url, text, icon) => `<button class="btn-action" onclick="app.openPDF('${url}', '${text}')"><i class="fas fa-${icon}"></i> ${text}</button>`,
    openPDF: (url, title) => {
        document.getElementById('pdf-title').innerText = title;
        document.getElementById('pdf-download').href = url.replace('/preview', '/view');
        document.getElementById('pdf-frame').src = url;
        document.getElementById('pdf-modal').style.display = 'grid';
    },
    openSettings: () => document.getElementById('settings-modal').style.display = 'grid',
    closeModal: (id) => {
        document.getElementById(id).style.display = 'none';
        if(id === 'pdf-modal') document.getElementById('pdf-frame').src = '';
    },
    toggleTheme: () => {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('affi_theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    },
    search: (q) => app.renderHome(q),
    showToast: (msg) => {
        const t = document.getElementById('toast');
        t.innerText = msg;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 3000);
    }
};

document.addEventListener('DOMContentLoaded', app.init);