// Funktion zum Laden der JSON-Daten
async function loadConfig() {
    try {
        const response = await fetch('/json/content.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}

// Funktion zum Erstellen der Karten
function createCards(page, listData) {
    const container = document.createElement('div');
    container.className = 'container';
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    Object.keys(listData).forEach(key => {
        const section = listData[key];
        const col = document.createElement('div');
        col.className = 'col-md-4';
        const card = document.createElement('div');
        card.className = 'card';
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = section.headline;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = section.text;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });

    const contentContainerId = `content-container-${page}`;
    const contentContainer = document.getElementById(contentContainerId);
    if (contentContainer) {
        contentContainer.appendChild(container);
    }
}


// DOMContentLoaded Eventlistener, um die Karten zu erstellen
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await loadConfig();

        if (data && data.siteSettings && data.siteSettings.pages) {
            Object.keys(data.siteSettings.pages).forEach(page => {
                if (data.siteSettings.pages[page].list_data) {
                    createCards(page, data.siteSettings.pages[page].list_data);
                }
            });
        }
    } catch (error) {
        console.error('Error loading configuration:', error);
        // Hier können Sie entsprechende Fehlerbehandlung hinzufügen, z.B. eine Fehlermeldung anzeigen
    }
});

