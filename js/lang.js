var isGermanTemp = localStorage.getItem('isGerman')
var isGerman;

if(isGermanTemp=''){
    isGerman=false;
}
else{
    isGerman=true;
}

function langChange() {
        
    if(isGerman==false){
        isGerman=true;
        localStorage.setItem("isGerman", isGerman);

    }
    else{
        isGerman=false;
        localStorage.setItem("isGerman", isGerman);

    }

    location.reload(true);
};

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

if(isGerman==true) {
    welcometitle.textContent = language.ger.welcometitle;
    welcome.textContent = language.ger.welcome;
}
else{
    welcometitle.textContent = language.eng.welcometitle;
    welcome.textContent = language.eng.welcome;
}



    



