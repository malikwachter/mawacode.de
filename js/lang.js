
var language = {
    eng: {
        welcometitle: "Hello Internet!",
        welcome: "I'm Malik, some guy on the web who's learning to code. Welcome to my personal website. Here you can find out more about me and my projects! Thanks for stopping by. :)"
    },
    ger: {
        welcometitle: "Hallo Internet!",
        welcome:"Ich bin Malik, irgend so ein Typ im Web, der gerade Programmieren lernt. Willkommen auf meiner persönlichen Webseite. Hier erfährst du mehr über mich und meine Projekte! Danke fürs Vorbeischauen. :)"
    }
};

if(window.location.hash) {
    if(window.location.hash === "#ger") {
        welcome.textContent = language.ger.welcome;
    }
}

    function langReload() {
        if(localStorage)
        
        localStorage.setItem('Language') = ger


        location.reload(true);
    };



