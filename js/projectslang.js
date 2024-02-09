var language = {
    //All english strings:
    eng: {
        personalwebsitetitle: "My Personal Website",
        personalwebsite1: "Project Start: 2024-01-21 | Project status: Still going",
        personalwebsitebutton1: "Detailed Changelog",
        personalwebsitetitle2: "Biggest changes over time:",
        personalwebsite2: "Oldest Screenshot: (2024-01-21)",
        personalwebsite3: "This is the oldest screenshot that I still have from my Website. This was before I used Git.",
        personalwebsite4: "First ever git commit: (2024-01-22)",
        personalwebsite5: "This was the first ever commit of my Website. Back then, it was still unusable on Mobile.",
        personalwebsite6: "Working mobile version: (2024-01-23)",
        personalwebsite7: "In this update, I got the responsive design to work on mobile.",
        personalwebsite8: "Translated website: (2024-01-27)",
        personalwebsite9: "First implementation of the translation feature.",
        personalwebsite10: "Redesgin of the navbar and CAT! (2024-02-03)",
        personalwebsite11: "In this update, I redesigned the entire nav bar to look more modern. I also removed the text from the language change button and used an Icon instead. And the best part: I added my cat on the front page.",
        personalwebsite12: "Complete redesign (2024-02-08)",
        personalwebsite13: "In this update, I redesigned the entire page once again. I changed the colors and added blur effects. I also made most of the text smaller into a more normal size."
    },
    //All german strings:
    ger: {
        personalwebsitetitle: "Meine Persönliche Webseite",
        personalwebsite1: "Projekt Start: 2024-01-21 | Projekt Status: Läuft noch",
        personalwebsitebutton1: "Detaillierter Changelog",
        personalwebsitetitle2: "Größte Veränderungen im Laufe der Zeit:",
        personalwebsite2: "Ältester Screenshot: (2024-01-21)",
        personalwebsite3: "Dies ist der älteste Screenshot, den ich noch von meiner Website habe. Das war, bevor ich Git verwendet habe.",
        personalwebsite4: "Erster git commit: (2024-01-22)",
        personalwebsite5: "Dies war der allererste Commit meiner Website. Damals war sie auf dem Handy noch unbenutzbar.",
        personalwebsite6: "Funktionierende mobile Version: (2024-01-23)",
        personalwebsite7: "In diesem Update habe ich das Responsive Design auf dem Handy zum Laufen gebracht.",
        personalwebsite8: "Übersetzte Website: (2024-01-27)",
        personalwebsite9: "Erste Implementierung der Übersetzungsfunktion.",
        personalwebsite10: "Überarbeitung der Navigationsleiste und KATZE!(2024-02-03)",
        personalwebsite11: "In diesem Update habe ich die gesamte Navigationsleiste neu gestaltet, damit sie moderner aussieht. Außerdem habe ich den Text aus der Schaltfläche zum Wechseln der Sprache entfernt und stattdessen ein Icon verwendet. Und das Beste: Ich habe meine Katze auf der Startseite hinzugefügt.",
        personalwebsite12: "Komplette Neugestaltung (2024-02-08)",
        personalwebsite13: "In diesem Update habe ich die gesamte Seite noch einmal umgestaltet. Ich habe die Farben geändert und Unschärfeeffekte hinzugefügt. Außerdem habe ich den Großteil des Textes auf eine normalere Größe verkleinert."
    }
};

//get isEnglish state from localStorage
var isEnglish = localStorage.getItem("isEnglish") === "true";

//inserting the german strings:
if(isEnglish===false) {
    //personalwebsite.html
    if (window.location.pathname == '/' || window.location.href.indexOf("personalwebsite") > -1) {
        personalwebsitetitle.textContent = language.ger.personalwebsitetitle;
        personalwebsite1.textContent = language.ger.personalwebsite1;
        personalwebsitebutton1.textContent = language.ger.personalwebsitebutton1;
        personalwebsitetitle2.textContent = language.ger.personalwebsitetitle2;
        personalwebsite2.textContent = language.ger.personalwebsite2;
        personalwebsite3.textContent = language.ger.personalwebsite3;
        personalwebsite4.textContent = language.ger.personalwebsite4;
        personalwebsite5.textContent = language.ger.personalwebsite5;
        personalwebsite6.textContent = language.ger.personalwebsite6;
        personalwebsite7.textContent = language.ger.personalwebsite7;
        personalwebsite8.textContent = language.ger.personalwebsite8;
        personalwebsite9.textContent = language.ger.personalwebsite9;
        personalwebsite10.textContent = language.ger.personalwebsite10;
        personalwebsite11.textContent = language.ger.personalwebsite11;
        personalwebsite12.textContent = language.ger.personalwebsite12;
        personalwebsite13.textContent = language.ger.personalwebsite13;
    }
}
//inserting the english strings:
else{
    //personalwebsite.html
    if (window.location.pathname == '/' || window.location.href.indexOf("personalwebsite") > -1) {        
        personalwebsitetitle.textContent = language.eng.personalwebsitetitle;
        personalwebsite1.textContent = language.eng.personalwebsite1;
        personalwebsitebutton1.textContent = language.eng.personalwebsitebutton1;
        personalwebsitetitle2.textContent = language.eng.personalwebsitetitle2;
        personalwebsite2.textContent = language.eng.personalwebsite2;
        personalwebsite3.textContent = language.eng.personalwebsite3;
        personalwebsite4.textContent = language.eng.personalwebsite4;
        personalwebsite5.textContent = language.eng.personalwebsite5;
        personalwebsite6.textContent = language.eng.personalwebsite6;
        personalwebsite7.textContent = language.eng.personalwebsite7;
        personalwebsite8.textContent = language.eng.personalwebsite8;
        personalwebsite9.textContent = language.eng.personalwebsite9;
        personalwebsite10.textContent = language.eng.personalwebsite10;
        personalwebsite11.textContent = language.eng.personalwebsite11;
        personalwebsite12.textContent = language.eng.personalwebsite12;
        personalwebsite13.textContent = language.eng.personalwebsite13;
    }
}



//invert isEnglish bool on click of language button
function langChange() {
    isEnglish = !isEnglish;
    localStorage.setItem("isEnglish", isEnglish);
    console.log(isEnglish);
    window.location.reload();
}


