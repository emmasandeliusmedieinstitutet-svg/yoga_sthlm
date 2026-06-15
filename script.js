// JavaScript för Lasses Snickeri - Analys & Effektmätning kursverktyg

document.addEventListener("DOMContentLoaded", function() {
    console.log("Lasses Snickeri - Spårningsskript laddat.");

    // 1. UTM-PARAMETRAR: Fånga upp och spara i SessionStorage så att de inte försvinner vid sidbyten
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    utmParams.forEach(param => {
        if (urlParams.has(param)) {
            sessionStorage.setItem(param, urlParams.get(param));
        }
    });

    // 2. AUTOMATISK UTFYLLNAD AV DOLDA FÄLT I FORMULÄR
    // Detta gör att UTM-data följer med till tacksidan/CRM-systemet när ett formulär postas
    const sourceField = document.getElementById('form_utm_source') || document.getElementById('contact_utm_source');
    const mediumField = document.getElementById('form_utm_medium') || document.getElementById('contact_utm_medium');
    const campaignField = document.getElementById('form_utm_campaign') || document.getElementById('contact_utm_campaign');

    if (sourceField) sourceField.value = sessionStorage.getItem('utm_source') || 'organic_direct';
    if (mediumField) mediumField.value = sessionStorage.getItem('utm_medium') || 'none';
    if (campaignField) campaignField.value = sessionStorage.getItem('utm_campaign') || 'none';

    // 3. EXEMPEL PÅ EVENT TRACKING (Klick på CTA)
    // Loggar i konsolen så studenter kan verifiera händelser innan de sätter upp GA4 / GTM tags
    const ctaButtons = document.querySelectorAll('.btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = e.target.innerText;
            const destination = e.target.getAttribute('href');
            console.log(`[GA4 Event Simulator] Klick på CTA-knapp: "${buttonText}" -> Länkar till: ${destination}`);
            
            // Om man har GA4 installerat kan man lägga till:
            // gtag('event', 'cta_click', { 'cta_text': buttonText, 'destination': destination });
        });
    });
});
