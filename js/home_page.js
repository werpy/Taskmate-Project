'use strict'

const chartStatistic = document.getElementById('inflowStatistic').getContext('2d');
const chartOnline = document.getElementById('onlineStatus').getContext('2d');

const inflowStatistic = new Chart(chartStatistic, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Statistic',
            data: [1000, 1100, 1200, 1300, 1400, 1500, 1600, 4000, 3000],
            backgroundColor: 'rgb(173, 172, 172)',
            borderColor: 'rgb(173, 172, 172)',
            fill: false
        },
        {
            label: 'Peak',
            data: [null, null, null, null, null, null, null, 4000, null], // Peak
            // backgroundColor: '#808080',
            // borderColor: '#808080',
            backgroundColor: '#7148fc',
            borderColor: '#7148fc',
            pointRadius: 5,
            pointHoverRadius: 7
        },
        {
            label: 'Current statistics',
            data: [null, null, null, null, null, null, null, null, 3000], // Current Statistic
            // backgroundColor: '#202c39',
            // borderColor: '#202c39',
            backgroundColor: '#b8a6f7',
            borderColor: '#b8a6f7',
            pointRadius: 5,
            pointHoverRadius: 7
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const onlineStatus = new Chart(chartOnline, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Global Online',
            data: [1000, 1100, 2600, 1300, 1400, 1500, 2600, 3300, 7000, 0, 0, 0],
            borderColor: 'rgb(192, 192, 192)',
            fill: false
        },
        {
            label: 'Current online',
            data: [null, null, null, null, null, null, null, null, 7000, null, null, null], // Peak
            backgroundColor: '#7148fc',
            borderColor: '#7148fc',
            pointRadius: 5,
            pointHoverRadius: 7
        },
        {
            label: 'No data',
            data: [null, null, null, null, null, null, null, null, null, 0, 0, 0], // Peak
            backgroundColor: '#808080',
            borderColor: '#808080',
            pointRadius: 5,
            pointHoverRadius: 7
        }
        ],
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


$('.circle_chart').easyPieChart({
    size: 160,
    barColor: "#7148fc", // Стандартний колір
    scaleLength: 0,
    lineWidth: 10,
    trackColor: "#f4f4f4", // Стандартний трек
    lineCap: "circle",
    animate: 1000,
});

let mouseDown = false;
let startX, scrollLeft;
const slider = document.querySelector('.scrollmenu_tags');

const startDragging = (e) => {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

const stopDragging = (e) => {
    mouseDown = false;
}

const move = (e) => {
    e.preventDefault();
    if (!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
}

// Add the event listeners
slider.addEventListener('mousemove', move, false);
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);

// Закривання та відкривання меню
const collapseBtn = document.getElementById('collapse_btn'); // Замінили id на відповідне в HTML
const sidebar = document.querySelector('.aside_nav'); // Замінили клас на відповідне в HTML
const collapseBtnText = document.querySelector('.btn_text'); // Замінили клас на відповідне в HTML
const collapseArrow = document.querySelector('.arrow_back'); // Замінили клас на відповідне в HTML

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


const crossSigns = document.querySelectorAll('.cross_sign');

// Додаємо обробник події 'click' для кожної кнопки
crossSigns.forEach(cross => {
    cross.addEventListener('click', function() {
        // Знаходимо батьківський елемент, який потрібно видалити
        const eventReminder = cross.closest('.reminder__block');
        
        // Видаляємо елемент з DOM
        if (eventReminder) {
            eventReminder.remove();
        }
    });
});

window.onload = function () {
    const linkElement = document.getElementById('focus_link');
    const changeColorText = document.querySelector('.dark_mode_logo_text');

    
    function updateTheme() {
        const sidebar = document.querySelector('.dark_aside_nav');
        const isDarkMode = sidebar.classList.contains('dark-mode');
        const textColor = isDarkMode ? '#ffffff' : '#202c39';

        
        changeColorText.style.color = textColor;


        sidebar.querySelectorAll('.nav_menu span').forEach(function (span) {
            span.style.color = textColor; 
        });
    }

    
    let buttonIsClicked = false; 

    const darkModeBtn = document.querySelector('.dark_mode_btn');
    const sidebar = document.querySelector('.dark_aside_nav');
    const homeContent = document.querySelector('.home_content');
    const asideHeaderNav = document.querySelector('.aside_header_nav');
    const collapseBtn = document.querySelector('.collapse-btn');
    const navArrowsDark = document.querySelector('.dark_mode_arrow');
    const mainSliderText = document.querySelector('.page_name');
    const darkModeLogo = document.querySelector('.fast_nav_icon');
    const darkBellLogo = document.querySelector('.dark_bell');
    const mainParagraph = document.querySelector('.main_paragraph');
    const mainSubtitle = document.querySelector('.main_paragraph_subtitle');
    const graphMainText = document.querySelector('.chart_main_text');
    const addUserText = document.querySelector('.add_users_text');
    const userStat = document.querySelector('.users_stat');
    const selectYear = document.querySelector('.select_year');
    const circleChartText = document.querySelector('.circle_chart');
    const mainTextScrollMenu = document.querySelector('.main_text_scrollmenu');
    const mainTextElements = document.querySelectorAll('.news_main_text');
    const firstElement = document.querySelector('.first_el');
    const secondElement = document.querySelector('.second_el');
    const thirdElement = document.querySelector('.third_el');
    const forthElement = document.querySelector('.forth_el')
    const firstNewsHeader = document.querySelector('.first_news_header');
    const secondNewsHeader = document.querySelector('.second_news_header');
    const thirdNewsHeader = document.querySelector('.third_news_header');
    const forthNewsHeader = document.querySelector('.forth_news_header');

    // Функція для оновлення кольорів на основі стану кнопки
    function updateTheme() {
        mainTextElements.forEach(function (element) {
            const currentColor = getComputedStyle(element).color;
            element.style.color = (currentColor === 'rgb(32, 44, 57)') ? '#ffffff' : '#202c39';
        });

        mainSliderText.style.color = buttonIsClicked ? '#ffffff' : '#202c39';
        graphMainText.style.color = buttonIsClicked ? '#ffffff' : '#202c39';
        addUserText.style.color = buttonIsClicked ? '#ffffff' : '#202c39';
        userStat.style.color = buttonIsClicked ? '#ffffff' : '#202c39';
        circleChartText.style.color = buttonIsClicked ? '#ffffff' : '#202c39';
        mainTextScrollMenu.style.color = buttonIsClicked ? '#ffffff' : '#202c39';
        firstElement.style.color = buttonIsClicked ? '#bfbfbf' : '#2a2b2b';
        secondElement.style.color = buttonIsClicked ? '#bfbfbf' : '#2a2b2b';
        thirdElement.style.color = buttonIsClicked ? '#bfbfbf' : '#2a2b2b';
        forthElement.style.color = buttonIsClicked ? '#bfbfbf' : '#2a2b2b';
        mainParagraph.style.color = buttonIsClicked ? '#ffffff' : '#202c39';
        mainSubtitle.style.color = buttonIsClicked ? '#cccccc' : '#4d5761';
        firstNewsHeader.style.color = buttonIsClicked ? '#ffffff' : '#202c39';
        secondNewsHeader.style.color = buttonIsClicked ? '#ffffff' : '#202c39';
        thirdNewsHeader.style.color = buttonIsClicked ? '#ffffff' : '#202c39';
        forthNewsHeader.style.color =buttonIsClicked ?'#ffffff' : '#202c39';

        selectYear.style.backgroundColor = buttonIsClicked ? '#bfbfbf' : '#ffffff';
        darkModeLogo.setAttribute('color', buttonIsClicked ? '#ffffff' : '#000000');
        darkBellLogo.setAttribute('color', buttonIsClicked ? '#ffffff' : '#000000');

        sidebar.classList.toggle('dark-mode', buttonIsClicked);
        homeContent.classList.toggle('dark-home-content', buttonIsClicked);
        asideHeaderNav.classList.toggle('dark-aside-header', buttonIsClicked);
        collapseBtn.classList.toggle('dark-collapse-btn', buttonIsClicked);
        navArrowsDark.classList.toggle('nav-header-arrow', buttonIsClicked);
        mainSliderText.classList.toggle('dark-page-name', buttonIsClicked);
    }

    function saveButtonState() {
        localStorage.setItem('buttonState', JSON.stringify(buttonIsClicked));
    }

    function loadButtonState() {
        const storedState = localStorage.getItem('buttonState');
        if (storedState !== null) {
            buttonIsClicked = JSON.parse(storedState);
            darkModeBtn.classList.toggle('active', buttonIsClicked);
        }
    }

    darkModeBtn.addEventListener('click', function () {
        buttonIsClicked = !buttonIsClicked;
        darkModeBtn.classList.toggle('active', buttonIsClicked);
        updateTheme();
        saveButtonState();
    });

    // Завантажити стан кнопки при завантаженні сторінки
    loadButtonState();
    updateTheme();
};


// Припустимо, у нас є елемент з id "container", який потрібно видалити


let container = document.getElementById("container_wrapper");
// Видалення обложки при зміни розришення екрану

while (container_wrapper.firstChild) {
  container.parentNode.insertBefore(container_wrapper.firstChild, container_wrapper);
}


container_wrapper.remove();
