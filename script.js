/*Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata
Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


//Chiedo all'utente di inserire una parola qualsiasi

stringaUtente=prompt("inserisci una parola");
stringaMinuscola=stringaUtente.toLowerCase();

//Inserisco la stringa nel Palindromator

palOrNot=palindromator(stringaMinuscola)

if (palOrNot){
    console.log(stringaUtente + " è palindroma");
} else {
    console.log (stringaUtente + " non è palindroma");
}

// Procedo alla seconda parte dell'esercizio
// Chiedo all'utente di inserire pari o dispari

do {
    pariODispari=prompt('Scegli "pari" o "dispari"');
}
while ((pariODispari.toLowerCase())!= "pari" && (pariODispari.toLowerCase())!="dispari")

// Chiedo all'utente di inserire un valore tra 1 e 5

do {
numeroUtente=prompt("Scegli un numero da 1 a 5");
numeroUtente=parseInt(numeroUtente);

}
while (numeroUtente<1 && numeroUtente > 5) 

//Genero un numero randomico sfruttanto il possente randomizator

numeroPC = randomizator(1,5);

let sommaNumeri = numeroUtente + numeroPC;

let risultato = disparizator(sommaNumeri);

if (risultato==(pariODispari.toLowerCase())){
    console.log ("Hai vinto complimenti!")
} else {
    console.log ("Mi dispiace hai perso!")
}





// ------------------------- Funzioni -------------------------

function palindromator(string){
for (let i=0; i<string.length; i++){
    if (!(string[i]==string[string.length-1-i])){
        return false;
    }
} return true}

function randomizator (min, max){
    numeroRandom = Math.floor(Math.random()*(max-min+1)+min);
    return numeroRandom
}

function disparizator (num){
    if (num%2 == 0){
        console.log("pari")
        return "pari"
    } else {
        console.log("dispari")
        return "dispari"
    }
}