/*
// 1️⃣ Chiedo all'utente i dati
const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));

// 2️⃣ Calcolo prezzo base
let prezzo = km * 0.21;

// 3️⃣ Applico eventuali sconti
if (eta < 18) {
  prezzo *= 0.8; // sconto 20%
} else if (eta > 65) {
  prezzo *= 0.6; // sconto 40%
}

// 4️⃣ Mostro il risultato in console
console.log("Prezzo del biglietto: € " + prezzo.toFixed(2));
*/

// script.js

// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formBiglietto");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Previene il refresh della pagina

        // Prendo i valori dal form
        const nome = document.getElementById("nome").value.trim();
        const km = parseFloat(document.getElementById("km").value);
        const eta = document.getElementById("eta").value;

        // Validazione base
        if (!nome || !km || !eta) {
            alert("Compila tutti i campi!");
            return;
        }

        // Prezzo base
        let prezzo = km * 0.21;

        // Calcolo sconto
        let offerta = "Biglietto Standard";
        if (eta === "minorenne") {
            prezzo *= 0.8; // 20% sconto
            offerta = "Sconto Minorenne";
        } else if (eta === "over65") {
            prezzo *= 0.6; // 40% sconto
            offerta = "Sconto Over 65";
        }

        // Genera carrozza (numero casuale tra 1 e 12)
        const carrozza = Math.floor(Math.random() * 12) + 1;

        // Genera codice CP (numero casuale tra 90000 e 99999)
        const codiceCP = Math.floor(Math.random() * 10000) + 90000;

        // Inserisco i risultati nelle rispettive colonne del rettangolo bianco
        document.getElementById("nomePasseggero").textContent = nome;
        document.getElementById("offerta").textContent = offerta;
        document.getElementById("carrozza").textContent = carrozza;
        document.getElementById("codiceCP").textContent = codiceCP;
        document.getElementById("costoBiglietto").textContent = prezzo.toFixed(2) + " €";
    });
});