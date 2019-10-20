// EX: calcolo prezzo biglietto del treno

//Il programma dovrà chiedere all’utente il numero di chilometri e l’età e dovrà calcolare il prezzo totale del viaggio.
//Il prezzo del biglietto è definito in base ai km (0.21 €cent al km) ma c’è uno sconto del 20% per i minorenni e del 40% per gli over 65

// dichiarazione variabili
var nKm, nAnni, prezzoBigl, sconto, date, day, month, year;

//chiedo utente quanti km deve fare (con parseInt forzo il valore da stringa a numero intero)
nKm = prompt("Ciao! Quanti km devi fare?");

//chiedo utente quanti anni ha (con parseInt forzo il valore da stringa a numero intero)
nAnni = parseInt(prompt("Quanti anni hai?"));

//calcolo prezzo biglietto in base ai km (0,21 euro/km) senza sconti
prezzoBigl = nKm * 0.21;

//verifico se utente ha meno di 18 anni o più-uguale a 65 anni per calcolare prezzo scontato
if (nAnni < 18) {
   sconto = (prezzoBigl / 100) * 20;

   prezzoBigl = prezzoBigl - sconto;
  }

else if (nAnni >= 65) {
    sconto = (prezzoBigl / 100) * 40;

    prezzoBigl = prezzoBigl - sconto;
}

//forzo il prezzo a 2 numeri dopo la virgola
prezzoBigl = prezzoBigl.toFixed(2);

//inserisco output in pagina
document.getElementById("prezzo").innerHTML = "Prezzo: " + prezzoBigl + " Euro";


//genero data e individuo il giorno
data = new Date();
day = data.getDate();

//individuo il mese
month = data.getMonth() + 1;

//individuo l'anno
year = data.getFullYear();

//inserisco tutto in html
document.getElementById("data-completa").innerHTML = day + "/" + month + "/" + year;


document.getElementById("numero-biglietto").innerHTML = "Numero biglietto: " + 
Math.floor(Math.random() * 10000) + 1;
