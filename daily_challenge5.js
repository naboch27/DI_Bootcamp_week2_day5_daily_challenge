// Nombre total de bouteille
let bottles = 99
let compteur = 0;
let account
console.log(" We start the song at " + bottles + " bottles")

let user = prompt("entrer le nombre de bouteillle")
//let user = 0
//Verifie si la saise de user est un nombre
if (user != "" && isNaN(user) == false) {

    //Recuperer le nombre de bouteille
    account = (bottles == 99) ? bottles : 1
    //Verifier le nombre tant que account est inferieur a 0
    while (account > 0) {
        user = Number(prompt("entrer le nombre de bouteillle"))
        // console.log(typeof(user))

        if (account >= user) {
            //Le compteur reçoit la valeur de user
            compteur = +user

            //Verification de la valeur saisie
            if (user != "" && isNaN(user) == false) {

                //Affichage du compteur
                console.log("Take _" + compteur + "_ down, pass it around")
                //Mise a jour du compteur
                account = account - compteur
                //Affichage du compteur
                console.log("we have now " + account + " bottles")

            }
        }
        else {

            //si la saisie est superieur a account
            console.log("impossible to write")
            console.log("we have now " + account + " bottles")

        }

    }
}
