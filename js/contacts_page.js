'use strict'


// Відкривання та закривання меню
const collapseBtn = document.getElementById('collapse_btn'); // Замінили id на відповідне в HTML
const sidebar = document.querySelector('.contacts_aside_nav'); // Замінили клас на відповідне в HTML
const collapseBtnText = document.querySelector('.contacts_btn_text'); // Замінили клас на відповідне в HTML
const collapseArrow = document.querySelector('.contacts_arrow_back'); // Замінили клас на відповідне в HTML

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


const whiteTextFocusFix = document.getElementById('focus_link');
whiteTextFocusFix.style.color = '#202c39';

// window.onload = function () {
    
//     const darkModeBtn = document.querySelector('.dark_mode_btn');
//     const homeContent = document.querySelector('.contacts_content');
//     const asideHeaderNav = document.querySelector('.contacts_header_nav');
//     const collapseBtn = document.querySelector('#collapse_btn'); 
//     const navArrowsDark = document.querySelectorAll('.dark_mode_arrow'); 
//     const mainSliderText = document.querySelector('.contacts_page_name');
//     const mainTextElements = document.querySelectorAll('.news_main_text');
//     const pageNameContacts = document.querySelector('.contacts_logo_text');
//     const darkModeLogo = document.querySelector('.fast_nav_icon');
    

   
//     let buttonIsClicked = false;

    
//     function updateTheme() {
//         const sidebar = document.querySelector('.contacts_aside_nav');
//         const isDarkMode = sidebar.classList.contains('dark-mode');
//         const activeLink = document.getElementById('focus_link');
//         activeLink.style.color = isDarkMode ? '#202c39' : '#ffffff';
        
//         if (isDarkMode) {
//             activeLink.classList.add('active-link');
//         } else {
//             activeLink.classList.remove('active-link');
//         }

//         activeLink.style.color = buttonIsClicked ? '#ffffff' : '#202c39'; 

        
//         sidebar.classList.toggle('dark-mode', buttonIsClicked);
//         if (homeContent) homeContent.classList.toggle('dark-home-content', buttonIsClicked);
//         asideHeaderNav.classList.toggle('dark-aside-header', buttonIsClicked);
//         collapseBtn.classList.toggle('dark-collapse-btn', buttonIsClicked);

//         navArrowsDark.forEach(function (arrow) {
//             arrow.classList.toggle('nav-header-arrow', buttonIsClicked);
//         });

//         pageNameContacts.style.color = buttonIsClicked ? '#ffffff' : '#202c39';
//         mainSliderText.style.color = buttonIsClicked ? '#ffffff' : '#202c39';
//         mainTextElements.style.color = buttonIsClicked ? '#ffffff' : '#202c39';
//         darkModeLogo.setAttribute('color', buttonIsClicked ? '#ffffff' : '#000000');
//         darkBellLogo.setAttribute('color', buttonIsClicked ? '#ffffff' : '#000000');
//     }

    
//     function saveButtonState() {
//         localStorage.setItem('buttonState', JSON.stringify(buttonIsClicked));
//     }

    
//     function loadButtonState() {
//         const storedState = localStorage.getItem('buttonState');
//         if (storedState !== null) {
//             buttonIsClicked = JSON.parse(storedState);
//             darkModeBtn.classList.toggle('active', buttonIsClicked);
//         }
//     }

    
//     darkModeBtn.addEventListener('click', function () {
//         buttonIsClicked = !buttonIsClicked;
//         darkModeBtn.classList.toggle('active', buttonIsClicked);
//         updateTheme();
//         saveButtonState();
//     });

    
//     loadButtonState();
//     updateTheme();
// };

