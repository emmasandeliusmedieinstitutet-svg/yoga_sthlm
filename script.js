/*
=========================================
Lotus Yoga Studio
script.js
=========================================
*/

/* Bekräftar att sidan laddats */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Lotus Yoga Studio laddad");

});


/*
=========================================
Klickspårning för CTA-knappar
Bra för senare GA4-implementation
=========================================
*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        console.log("CTA klickad:", this.textContent);

    });

});


/*
=========================================
Formulärspårning
Kan senare ersättas med
GA4, HubSpot eller Meta Pixel
=========================================
*/

const forms = document.querySelectorAll("form");

forms.forEach(form => {

    form.addEventListener("submit", function () {

        console.log("Formulär skickat");

    });

});


/*
=========================================
Scroll-spårning
Visar när användaren nått
50% av sidan
=========================================
*/

let scrollTracked = false;

window.addEventListener("scroll", function () {

    if (scrollTracked) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight * 0.5) {

        console.log("Användaren har scrollat 50%");

        scrollTracked = true;
    }

});


/*
=========================================
Förberedd datalayer för GA4
=========================================
*/

window.dataLayer = window.dataLayer || [];

function trackEvent(eventName, eventData = {}) {

    window.dataLayer.push({
        event: eventName,
        ...eventData
    });

    console.log("Event skickat:", eventName);

}