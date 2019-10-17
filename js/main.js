// EX: calcolo prezzo biglietto del treno

//Il programma dovrà chiedere all’utente il numero di chilometri e l’età e dovrà calcolare il prezzo totale del viaggio.
//Il prezzo del biglietto è definito in base ai km (0.21 €cent al km) ma c’è uno sconto del 20% per i minorenni e del 40% per gli over 65

// dichiarazione variabili
var nKm,nAnni,prezzoBigl,costoAlKm;

//chiedo utente quanti km deve fare
nKm = parseInt (prompt("Ciao! Quanti km devi fare?"));

//chiedo utente quanti anni ha
nAnni = prompt("Quanti anni hai?");

//costo al km
costoAlKm = 0.21 * 1;

//verifico se utente ha meno di 18 anni
if (nAnni < 18) {
    prezzoBigl - 20%;
  }

else if (nAnni >= 65) {
    prezzoBigl - 40%;
}


//calcolo prezzo biglietto in base ai km (0,21 euro/km)
prezzoBigl = nKm * costoAlKm;

//console.log(prezzoBigl);

