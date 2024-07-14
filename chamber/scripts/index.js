// scripts/common.js

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('lastmodified').textContent = `Last modified: ${document.lastModified}`;

const hbutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hbutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hbutton.classList.toggle('open');
});

const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body;
const welcomeText = document.querySelector('#welcome');

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const darkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled);
});

if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}

let lastVisitDate = getVisitDate() || 0;

if (lastVisitDate !== 0) {
    let oldDate = new Date(lastVisitDate);
    let diff = (Date.now() - oldDate.getTime()) / (1000 * 60 * 60 * 24); // difference in days
    if (diff < 1) {
        welcomeText.textContent = 'Back so soon! Awesome!';
        lastVisitDate = Date.now();
        setVisitDate(lastVisitDate);
    } else {
        welcomeText.textContent = `You last visited ${Math.floor(diff)} day(s) ago.`;
        lastVisitDate = Date.now();
        setVisitDate(lastVisitDate);
    }
} else {
    welcomeText.textContent = 'Let us know if you have any questions!';
    lastVisitDate = Date.now();
    setVisitDate(lastVisitDate);
}

function getVisitDate() {
    return Number(JSON.parse(localStorage.getItem('visit-date')));
}

function setVisitDate(date) {
    localStorage.setItem('visit-date', JSON.stringify(date));
}
