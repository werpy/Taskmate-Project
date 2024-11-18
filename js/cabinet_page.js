'use strict'

// Закривання та відкривання меню
const collapseBtn = document.getElementById('cabinet_collapse_btn'); // Замінили id на відповідне в HTML
const sidebar = document.querySelector('.cabinet_aside_nav'); // Замінили клас на відповідне в HTML
const collapseBtnText = document.querySelector('.cabinet_btn_text'); // Замінили клас на відповідне в HTML
const collapseArrow = document.querySelector('.cabinet_arrow_back'); // Замінили клас на відповідне в HTML

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


// Знаходимо всі елементи кнопок хрестика
const crossSigns = document.querySelectorAll('.cross_sign');

// Додаємо обробник події 'click' для кожної кнопки
crossSigns.forEach(cross => {
    cross.addEventListener('click', function() {
        // Знаходимо батьківський елемент, який потрібно видалити
        const eventReminder = cross.closest('.cabinet_event_reminder');
        
        // Видаляємо елемент з DOM
        if (eventReminder) {
            eventReminder.remove();
        }
    });
});

const passwordFields = document.querySelectorAll(".password");
const togglePasswordIcons = document.querySelectorAll(".password_toggle_icon i");

// Додаємо обробник події для кожної іконки
togglePasswordIcons.forEach((togglePassword, index) => {
  togglePassword.addEventListener("click", function () {
    // Отримуємо відповідне поле пароля
    const passwordField = passwordFields[index];
    
    if (passwordField.type === "password") {
      passwordField.type = "text";
      togglePassword.classList.remove("fa-eye");
      togglePassword.classList.add("fa-eye-slash");
    } else {
      passwordField.type = "password";
      togglePassword.classList.remove("fa-eye-slash");
      togglePassword.classList.add("fa-eye");
    }
  });
});



