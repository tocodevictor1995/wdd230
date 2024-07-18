document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

const hbutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hbutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hbutton.classList.toggle('open');
});

// Toggle Dark Mode
const dmButton = document.getElementById('dm-button');
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
    dmButton.src = 'images/light_mode_icon.png';
} else {
    dmButton.src = 'images/dark_mode_icon.png';
}

dmButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        dmButton.src = 'images/dark_mode_icon.png';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        dmButton.src = 'images/light_mode_icon.png';
    }
});
