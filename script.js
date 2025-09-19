// Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher) {
        const themeIcon = themeSwitcher.querySelector('i');
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
        themeSwitcher.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            if (themeIcon) {
                themeIcon.className = `fas ${isLight ? 'fa-sun' : 'fa-moon'}`;
            }
        });
    }
    // Sidebar Logic
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.querySelector('.overlay');
    const toggleSidebar = (show) => {
        if (sidebar && overlay && menuIcon) {
            sidebar.classList.toggle('active', show);
            overlay.classList.toggle('active', show);
            menuIcon.classList.toggle('active', show);
        }
    };
    if (menuIcon) menuIcon.addEventListener('click', () => toggleSidebar(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleSidebar(false));
    if (overlay) overlay.addEventListener('click', () => toggleSidebar(false));
});