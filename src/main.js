import { renderLayout } from "./layouts/layout.js";
renderLayout();


//generatore numeri casuali (1-100)
let numeroSegreto = Math.floor(Math.random() * 100) + 1; //cambio da const a let poichè il valore cambia nel tempo: X BONUS 3

//BONUS 1:contatore tentativi
let tentativi = 0;

//test log del generatore
console.log(`Numero segreto: ${numeroSegreto}`);

//selezione elementi HTML
const input = document.getElementById("inputNumero");
const bottone = document.getElementById("btnIndovina");
const messaggio = document.getElementById("messaggio");

//click del bottone
bottone.addEventListener("click", function(){
    const numero = Number(input.value);

    //BONUS 1:incremento e mostra contatore
    tentativi++; // alternativa a: tentativi = tentativi + 1
    document.getElementById("contatore").textContent = "Tentativi: " + tentativi;

    //verifica inserimento valori in console
    console.log("Hai inserito: ", numero);

    //confronto dei numeri (maggiori o minori)
    if (numero > numeroSegreto) {
        messaggio.textContent = "Troppo alto! Riprova!";

    } else if (numero < numeroSegreto){
        messaggio.textContent = "Troppo basso! Riprova!";

    } else {
        messaggio.textContent = "Assurdo! Hai indovinato il numero!"

        //BONUS 2: blocco totale alla vittoria
        input.disabled = true;
        bottone.disabled = true;

        //BONUS 3: bottone RIGIOCA alla vittoria
        document.getElementById("btnRigioca").style.display = "block";
    }

    //BONUS 2: controllo del game over DOPO il confronto
    if (tentativi >= 10 && input.disabled == false) {
        messaggio.textContent = `Game Over! Il numero segreto era ${numeroSegreto}!`
        input.disabled = true;
        bottone.disabled = true;
        document.getElementById("btnRigioca").style.display = "block";
    }
});

//BONUS 3: bottone RIGIOCA
document.getElementById("btnRigioca").addEventListener("click", function(){
  
    numeroSegreto = Math.floor(Math.random() * 100) + 1;
    tentativi = 0;

    input.disabled = false;
    bottone.disabled = false;
    input.value = "";
    messaggio.textContent = "";
    document.getElementById("contatore").textContent = "Tentativi: 0/10";
    document.getElementById("btnRigioca").style.display = "none";

    console.log(`Nuovo numero segreto: ${numeroSegreto}`);
});