/* fonction affichantla fenêtre pop-up de confirmation de commande */
function good(){
    var Nom = document.formulaire.name.value;
    var Money = document.formulaire.duree.value*100

    var epoq = document.formulaire.Epoque.value /* condition pour modifier le prix selon l'époque */
    if (epoq == "Antiquité"){
        Money = Money*2
    }
    if (epoq == "Renaissance"){
        Money = Money*1.5
    }
    if (epoq == "Epoque Moderne"){
        Money = Money*1.25
    }
    
    if (document.formulaire.sexe[2].checked) { 
    var Sex = document.formulaire.prenom.value;
    } else {
        var Sex = document.formulaire.sexe.value;
    }
    alert("Félicitations " + Sex + " " + Nom + " vous venez de rejoindre l'Ordre des Templiers avec un don de " + Money + "€")
    window.open("../Data/Introduction.mp4", "Introduction")
}

/* fonction calculant le prix de la commande selon la durée choisie ainsi que l'époque */
function prix(){
    var Price = document.formulaire.duree.value*100;
    
    var epoq = document.formulaire.Epoque.value
    if (epoq == "Antiquité"){
        Price = Price*2
    }
    if (epoq == "Renaissance"){
        Price = Price*1.5
    }
    if (epoq == "Epoque Moderne"){
        Price = Price*1.25
    }
    document.getElementById("result").innerHTML = Price+"€"
}


/* fonction définissant les ancêtres disponibles selon l'époque choisie */ 
function choix(){
    var epoq = document.formulaire.Epoque.value
    if (epoq == "Antiquité"){
        document.getElementById("1").innerHTML = "Bayek de Siwa"
        document.getElementById("2").innerHTML = "Kassandra"
        document.getElementById("3").innerHTML = "Alexios"
    }

    if (epoq == "Renaissance"){
        document.getElementById("1").innerHTML = "Ezio 25ans"
        document.getElementById("2").innerHTML = "Ezio 40ans"
        document.getElementById("3").innerHTML = "Ezio 50ans"
    }

    if (epoq == "Epoque moderne"){
        document.getElementById("1").innerHTML = "Arno Dorian"
        document.getElementById("2").innerHTML = "Evie Frye"
        document.getElementById("3").innerHTML = "Jacob Frye"
    }
}


function dark(){ /* fonction appliquant un thème sombre aux pages sauf Commande */
    var ele = document.getElementById("dark");
    var body_color = window.getComputedStyle(document.getElementById("body"), null).backgroundColor;
    var text_color = window.getComputedStyle(document.getElementById("body"), null).color;
               
    if (body_color == "rgb(255, 255, 255)") {
        body_color = document.body.style.backgroundColor = "black";
        text_color = document.body.style.color = "lightgray";

    	return(body_color);
        return(text_color);
    }

    if (body_color == "rgb(0, 0, 0)") {
        body_color = document.body.style.backgroundColor = "white";
        text_color = document.body.style.color = "black";

        return(body_color);
        return(text_color);
    }
}

function Fct(){  /* fonction appliquant un thème sombre à la page Commande */
    var ele = document.getElementById("dark");
    var body_color = window.getComputedStyle(document.getElementById("body_commande"), null).backgroundColor;
    var text_color = window.getComputedStyle(document.getElementById("body_commande"), null).color;

               
    if (body_color == "rgb(255, 255, 255)") {
        body_color = document.body.style.backgroundColor = "black";
        text_color = document.body.style.color = "lightgray";

        return(body_color);
        return(text_color);
    }

    if (body_color == "rgb(0, 0, 0)") {
        body_color = document.body.style.backgroundColor = "white";
        text_color = document.body.style.color = "black";

        return(body_color);
        return(text_color);
    }
}




