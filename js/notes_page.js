'use strict'

// Закривання та відкривання меню
const collapseBtn = document.getElementById('collapse_btn'); // Клас залишається незмінним
const sidebar = document.querySelector('.notes_aside_nav'); // Замінили клас на відповідне в HTML
const collapseBtnText = document.querySelector('.notes_btn_text'); // Замінили клас на відповідне в HTML
const collapseArrow = document.querySelector('.notes_arrow_back'); // Замінили клас на відповідне в HTML

// Перевірка стану меню при завантаженні сторінки
if (localStorage.getItem('sidebarCollapsed') === 'true') {
    sidebar.classList.add('collapsed');
    sidebar.style.transition = 'none'; // Вимкнення анімації для sidebar
    collapseBtnText.style.transition = 'none'; // Вимкнення анімації для тексту кнопки
    collapseArrow.style.transition = 'none'; // Вимкнення анімації для стрілки
    collapseBtn.style.transition = 'none'; // Вимкнення анімації для кнопки
}

// Включення анімації після завантаження сторінки
window.addEventListener('load', () => {
    sidebar.style.transition = '';
    collapseBtnText.style.transition = '';
    collapseArrow.style.transition = '';
    collapseBtn.style.transition = ''; // Включення анімації для кнопки після завантаження сторінки
});

// Додавання обробника події для кнопки
collapseBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');

    // Збереження стану в localStorage
    if (sidebar.classList.contains('collapsed')) {
        localStorage.setItem('sidebarCollapsed', 'true');
    } else {
        localStorage.setItem('sidebarCollapsed', 'false');
    }
});


    window.onload = function() {
        const linkElement = document.getElementById('focus_link');
        linkElement.focus();
    
        linkElement.style.color = "#202c39"; 
    };