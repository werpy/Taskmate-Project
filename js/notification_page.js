'use strict'

// const collapseBtn = document.getElementById('notification_collapse_btn');
// const sidebar = document.querySelector('.notification_aside_nav');

// collapseBtn.addEventListener('click', () => {
//     sidebar.classList.toggle('collapsed');
// });

// const collapseBtn = document.getElementById('notification_collapse_btn');
// const sidebar = document.querySelector('.notification_aside_nav');

// // Перевірка стану меню при завантаженні сторінки
// if (localStorage.getItem('sidebarCollapsed') === 'true') {
//     sidebar.classList.add('collapsed');
// }

// // Додавання обробника події для кнопки
// collapseBtn.addEventListener('click', () => {
//     sidebar.classList.toggle('collapsed');

//     // Збереження стану в localStorage
//     if (sidebar.classList.contains('collapsed')) {
//         localStorage.setItem('sidebarCollapsed', 'true');
//     } else {
//         localStorage.setItem('sidebarCollapsed', 'false');
//     }
// });

const collapseBtn = document.getElementById('notification_collapse_btn');
const sidebar = document.querySelector('.notification_aside_nav');
const collapseBtnText = document.querySelector('.notification_btn_aside');
const collapseArrow = document.querySelector('.notification_arrow_back');

// Перевірка стану меню при завантаженні сторінки
if (localStorage.getItem('sidebarCollapsed') === 'true') {
    sidebar.classList.add('collapsed');
    sidebar.style.transition = 'none'; // Вимкнення анімації для sidebar
    collapseBtnText.style.transition = 'none'; // Вимкнення анімації для тексту кнопки
    collapseArrow.style.transition = 'none'; // Вимкнення анімації для стрілки
}

// Включення анімації після завантаження сторінки
window.addEventListener('load', () => {
    sidebar.style.transition = '';
    collapseBtnText.style.transition = '';
    collapseArrow.style.transition = '';
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

