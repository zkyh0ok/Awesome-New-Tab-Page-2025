// ui.js - código para mejorar la interfaz de usuario
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-toggle');
    themeButton.addEventListener('click', toggleTheme);
});

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}
