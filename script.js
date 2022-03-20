console.log('connecté'); 
//pseudo code : au clic sur le bouton, il change de texte et de couleur
const btnButton = document.querySelector('.btn'); //je déclare la variable
console.log(btnButton); //je vérifie
btnButton.addEventListener('click', function(){ //je donne les actions à réaliser lors du clic
    console.log('bouton cliqué'); //(je vérifie)
    if(btnButton.innerText === "Abonné"){ //les 3 égals === signifie qu'il compare
        btnButton.innerText = "Abonnez-vous";
    }else{
        console.log('else'); //je vérifie
        btnButton.innerText = "Abonné"; //voici ma 1er action mais comme elle est fixe je lui ai donné une condition avant.
    };
    //ma condition commence par IF: si le texte du bouton est bien "ABONNé", 
    //alors le texte du bouton devient "ABONNEZ-VOUS",
    //sinon (si le texte n'est pas "Abonné"),
    //le texte du bouton devient "Abonné".
    //ainsi à chaque clic sur ce bouton çà passera de "abonnez-vous" à "abonné" et inversement.
    btnButton.classList.toggle('abonne');
});

