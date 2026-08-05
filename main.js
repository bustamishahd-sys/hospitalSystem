//mobile menu
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})
//dark mode
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
themeToggle.addEventListener('click', () => {
    const newTheme = html.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(newTheme);
})
function applyTheme(theme) {
    if  (theme === 'dark') {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}