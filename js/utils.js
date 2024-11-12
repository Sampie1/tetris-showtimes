// utils.js
// Functie om de parameter op te halen uit de URL met ES6 syntax.
export const getUrlParams = (param) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param) || 'monday';
};

// Functie om de JSON-data op te halen.
export const fetchJsonFile = async (url) => {
    try {
        const response = await fetch(url); // Gebruik async/await voor het ophalen van de data
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON file:', error);
    }
};

// Functie om showtimes op te halen voor de geselecteerde dag
export const getShowTimes = async (showDay) => {
    try {
        const data = await fetchJsonFile('/tetris-showtimes/data/showtimes.json');// maak hier ../data/showtimes.json van
        return data.filter(showtime => Object.keys(showtime)[0] === showDay);
    } catch (error) {
        console.error('Error fetching showtimes:', error);
        return [];
    }
};
