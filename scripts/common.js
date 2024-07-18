document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

const hbutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hbutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hbutton.classList.toggle('open');
});

const lastVisitDate = getVisitDate() || 0;
const welcomeText = document.querySelector('#welcome');

if (lastVisitDate !== 0) {
    const oldDate = new Date(lastVisitDate);
    const diff = (Date.now() - oldDate.getTime()) / (1000 * 60 * 60 * 24); // diferença em dias

    if (diff < 1) {
        welcomeText.textContent = 'Back so soon! Awesome!';
    } else {
        welcomeText.textContent = `You last visited ${Math.floor(diff)} day(s) ago.`;
    }
    setVisitDate(Date.now());
} else {
    welcomeText.textContent = 'Let us know if you have any questions!';
    setVisitDate(Date.now());
}

function getVisitDate() {
    return Number(JSON.parse(localStorage.getItem('visit-date')));
}

function setVisitDate(date) {
    localStorage.setItem('visit-date', JSON.stringify(date));
}
