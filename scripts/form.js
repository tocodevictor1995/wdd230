const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const message = document.getElementById('message');
const rangeInput = document.getElementById('rangeinput');
const rangeValue = document.getElementById('rangevalue');

password2.addEventListener('input', () => {
    if (password1.value !== password2.value) {
        message.textContent = 'Passwords do not match';
        message.style.color = 'red';
    } else {
        message.textContent = '';
    }
});

rangeInput.addEventListener('input', () => {
    rangeValue.textContent = `Rating: ${rangeInput.value}`;
});
