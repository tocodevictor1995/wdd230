const baseURL = 'https://tocodevictor1995.github.io/wdd230/';
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayLinks(data.weeks); 
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}

function displayLinks(weeks) {
    const activityLinks = document.getElementById('activity-links');
    activityLinks.innerHTML = '';  

    weeks.forEach(week => {
        const listItem = document.createElement('li');
        listItem.textContent = `${week.week}: `;
        
        week.links.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            listItem.appendChild(document.createTextNode(' | '));
        });

        activityLinks.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', getLinks);
