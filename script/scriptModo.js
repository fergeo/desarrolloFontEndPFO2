const themeToggle = document.getElementById('cambiarModo');

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('modo-oscuro');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('modo-oscuro');
        localStorage.setItem('theme', 'light');
    }
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('modo-oscuro');
    themeToggle.checked = true;
}



