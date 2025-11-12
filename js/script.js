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