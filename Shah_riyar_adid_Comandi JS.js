//Programma per la valutazione del sito
let counterValue = 0;
const counterLabel = document.getElementById('counter');
const btnAumenta = document.getElementById('aumenta');
const btnDiminuisci = document.getElementById('diminuisci');
const btnReset = document.getElementById('reset');


function aggiornaDisplay(){
    counterLabel.textContent = counterValue;
}

btnAumenta.addEventListener('click', function(){
    if(counterValue<10){
        counterValue++;
        aggiornaDisplay();
    }
});

btnDiminuisci.addEventListener('click', function(){
    if(counterValue>1){
        counterValue--;
        aggiornaDisplay();
    }
});

btnReset.addEventListener('click', function(){
    counterValue = 0;
    aggiornaDisplay();
});

//Fine programma valutazione sito

//Questionario

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("invia").addEventListener("click", function(event) {
        event.preventDefault(); 

        let punteggio = 0;

        if (document.getElementById("q1a").checked) punteggio++;
        if (document.getElementById("q2a").checked) punteggio++;
        if (document.getElementById("q3c").checked) punteggio++;
        if (document.getElementById("q4c").checked) punteggio++;
        if (document.getElementById("q5b").checked) punteggio++;


        const risultato = document.getElementById("risultato");
        risultato.textContent = "Hai totalizzato " + punteggio + " su 5 risposte corrette.";

    
        if (punteggio === 5) {
            risultato.style.color = "green";
        } else if (punteggio >= 3) {
            risultato.style.color = "orange";
        } else {
            risultato.style.color = "red";
        }
    });
});
//fine qquestionario