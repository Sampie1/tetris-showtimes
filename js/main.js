// main.js
// Import de functies uit utils.js
import { getUrlParams, getShowTimes } from './utils.js';

// Functie om de showtimes op te halen en toe te voegen aan de DOM
const setShowTimes = async (day) => {
    const daySpan = document.getElementById('day');
    daySpan.textContent = day; // Gebruik textContent in plaats van innerHTML voor meer veiligheid

    try {
        const data = await getShowTimes(day);
        const showTimes = data[0][day];

        const showtimesList = document.getElementById('showtimes');
        showtimesList.innerHTML = ''; // Leeg de lijst voordat nieuwe items worden toegevoegd

        if (showTimes.length > 0) {
            showTimes.forEach(showtime => {
                const showtimeElement = document.createElement('li');
                showtimeElement.textContent = `${showtime.showtime_start} - ${showtime.showtime_end}`;
                showtimesList.appendChild(showtimeElement);
            });
        } else {
            const showtimeElement = document.createElement('li');
            showtimeElement.textContent = 'Geen voorstellingen';
            showtimesList.appendChild(showtimeElement);
        }
    } catch (error) {
        console.error('Error setting showtimes:', error);
    }
};

// Roep de setShowTimes functie aan met de opgehaalde dagparameter
setShowTimes(getUrlParams('day'));
