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

let stringa = chiedoStringaUtente();

//Inserisco la stringa nel Palindromator

let palOrNot = palindromator(stringa);

console.log(palresult(palOrNot));

// Procedo alla seconda parte dell'esercizio
// Chiedo all'utente di inserire pari o dispari

let sceltaUtente = annoyingDispari();

// Chiedo all'utente di inserire un valore tra 1 e 5

let numeroScelto=annoyingDaUnoACinque()

//Genero un numero randomico sfruttanto il possente randomizator

let numeroPC = randomizator(1, 5);

let somma = sommaNumeri(parseInt(numeroScelto),parseInt(numeroPC));

let risultato = disparizator(sommaNumeri);

console.log(getResult(sceltaUtente, risultato));





// ------------------------- Funzioni -------------------------

function palindromator(string) {
    for (let i = 0; i < string.length; i++) {
        if (!(string[i] == string[string.length - 1 - i])) {
            return false;
        }
    } return true
}

function randomizator(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroRandom
}

function disparizator(num) {
    if (num % 2 == 0) {
        console.log("pari");
        return "pari"
    } else {
        console.log("dispari");
        return "dispari"
    }
}

function palresult(bool){
    if (bool){
        return "La parola è palindroma";
    } else {
        return "La parola non è palindroma";
    }
}

function chiedoStringaUtente(){
    stringaUtente = prompt("inserisci una parola");
    stringaMinuscola = stringaUtente.toLowerCase();
    return stringaMinuscola;
}

function annoyingDispari(){
    do {
        pariODispari = prompt('Scegli "pari" o "dispari"');
    }
    while ((pariODispari.toLowerCase()) != "pari" && (pariODispari.toLowerCase()) != "dispari");

    return pariODispari;
}

function annoyingDaUnoACinque(){
    do {
        numeroUtente = prompt("Scegli un numero da 1 a 5");
        numeroUtente = parseInt(numeroUtente);
    
    }
    while (numeroUtente < 1 || numeroUtente > 5);

    return numeroUtente
}

function sommaNumeri(num1,num2){
    sum= num1+num2;
    return sum
}

function getResult(pariODispari, risultatoDisparizator){
    pariODispari=pariODispari.toLowerCase()
    if (risultatoDisparizator == pariODispari) {
        return "Hai vinto complimenti!";
    } else {
        return "Mi dispiace hai perso!";
}}