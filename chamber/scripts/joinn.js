// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Display last modified date in the footer
document.getElementById('lastmodified').textContent = `Last updated: ${document.lastModified}`;

// Hamburger menu button functionality
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
});

// Generate local timestamp for form submission
function convertToLocalDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const timestampInput = document.querySelector('#timestamp');
const submitButton = document.querySelector('#reg');
const currentDate = new Date();
timestampInput.value = convertToLocalDate(currentDate);
