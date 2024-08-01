// main.js

import { updateSegments } from './bar.js';
import { updateLanguage } from './language.js';
import { updateDistanceIndicator } from './distance_indicator.js';

document.addEventListener("DOMContentLoaded", function () {
    const languageButtons = document.querySelectorAll('.dropdown-item');

    languageButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLang = this.getAttribute('data-lang');
            if (selectedLang) {
                updateLanguage(selectedLang);
                document.querySelector('.btn-secondary img').src = this.querySelector('img').src;
                document.querySelector('.btn-secondary').innerHTML = `<img src="${this.querySelector('img').src}" style="width: 24px;">&nbsp; ${selectedLang.charAt(0).toUpperCase() + selectedLang.slice(1)}`;
            
            // Tüm düğmelerden 'active' sınıfını kaldırma
            languageButtons.forEach(btn => btn.classList.remove('active', 'bg-secondary'));

            // Tıklanan düğmeye 'active' ve 'bg-secondary' sınıfını ekleme
            this.classList.add('active', 'bg-secondary');
            } else {
                console.warn('Language attribute not found on button');
            }
        });
    });

    // Default language
    updateLanguage('en');

    let currentValues = {
        minDis: 200,
        maxDis: 3500,
        offset: 10,
        interval: null,
        distance: null,
        percent: 3
    };

    //try catch
    try {
        updateSegments(currentValues);
    updateDistanceIndicator();
    } catch (error) {
        console.log("Missing element in the DOM");
    }


    
});
