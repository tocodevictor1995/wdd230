const apiKey = 'sua_chave_api';  
const cityId = '6322752';  

async function fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric&lang=pt_br`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        updateWeatherCard(data);
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}

function updateWeatherCard(data) {
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('current-weather');
    const weatherIcon = document.getElementById('weather-icon');

    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', fetchWeather);
