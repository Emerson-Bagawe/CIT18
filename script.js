const themeToggleBtns = document.querySelectorAll('.header__dark');

themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
});
