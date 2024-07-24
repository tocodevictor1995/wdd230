document.addEventListener("DOMContentLoaded", function () {
    const companiesContainer = document.getElementById('companies');
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayCompanies(data.companies, 'grid');
        });

    gridButton.addEventListener('click', () => {
        fetch('data/members.json')
            .then(response => response.json())
            .then(data => {
                displayCompanies(data.companies, 'grid');
            });
    });

    listButton.addEventListener('click', () => {
        fetch('data/members.json')
            .then(response => response.json())
            .then(data => {
                displayCompanies(data.companies, 'list');
            });
    });

    function displayCompanies(companies, view) {
        companiesContainer.innerHTML = '';
        companiesContainer.className = view;

        companies.forEach(company => {
            const companyElement = document.createElement('div');
            companyElement.className = 'company';

            if (view === 'grid') {
                companyElement.innerHTML = `
                    <img src="images/${company.imgFile}" alt="${company.name} logo">
                    <h2>${company.name}</h2>
                    <p>${company.address}</p>
                    <p>${company.phone}</p>
                    <a href="${company.url}">${company.url}</a>
                    <p>${company.membershipLevel}</p>
                `;
            } else {
                companyElement.innerHTML = `
                    <h2>${company.name}</h2>
                    <p>${company.address}</p>
                    <p>${company.phone}</p>
                    <a href="${company.url}">${company.url}</a>
                    <p>${company.membershipLevel}</p>
                `;
            }

            companiesContainer.appendChild(companyElement);
        });
    }
});
