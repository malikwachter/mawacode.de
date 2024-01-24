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

var isGerman = localStorage.getItem("isGerman") === "true";

if(isGerman===true) {
    welcometitle.textContent = language.ger.welcometitle;
    welcome.textContent = language.ger.welcome;
}
else{
    welcometitle.textContent = language.eng.welcometitle;
    welcome.textContent = language.eng.welcome;
}


function langChange() {
    isGerman = !isGerman;
    localStorage.setItem("isGerman", isGerman);
    console.log(localStorage.getItem("isGerman"));
    window.location.reload();
}





    



