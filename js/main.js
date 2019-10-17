// EX: calcolo prezzo biglietto del treno

//Il programma dovrà chiedere all’utente il numero di chilometri e l’età e dovrà calcolare il prezzo totale del viaggio.
//Il prezzo del biglietto è definito in base ai km (0.21 €cent al km) ma c’è uno sconto del 20% per i minorenni e del 40% per gli over 65

// dichiarazione variabili
var nKm,nAnni,prezzoBigl,costoAlKm,sconto,costoDef;

//chiedo utente quanti km deve fare
nKm = parseInt (prompt("Ciao! Quanti km devi fare?"));

//chiedo utente quanti anni ha
nAnni = prompt("Quanti anni hai?");

//costo al km
costoAlKm = 0.21 * 1;

//calcolo prezzo biglietto in base ai km (0,21 euro/km)
prezzoBigl = nKm * costoAlKm;


//verifico se utente ha meno di 18 anni o più-uguale a di 65 anni per attribuire eventuale sconto sul totale
if (nAnni < 18) {
   sconto = prezzoBigl / 100 * 20;
  }

else if (nAnni >= 65) {
    sconto = prezzoBigl / 100 * 40;
}

else {
    sconto = 0;
}

costoDef = prezzoBigl - sconto;

console.log(costoDef);



//console.log(prezzoBigl);

