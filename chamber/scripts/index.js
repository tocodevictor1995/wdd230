// index.js

// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Display the last modified date in the footer
document.getElementById('lastmodified').textContent = `Last modified: ${document.lastModified}`;

// Hamburger menu button functionality
const hbutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hbutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hbutton.classList.toggle('open');
});

// Dark mode toggle button functionality
const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const darkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled);
});

// Check dark mode preference on page load
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}
