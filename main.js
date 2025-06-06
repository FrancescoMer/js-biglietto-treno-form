const pricePerKm = 0.21;

const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));

let price = km * pricePerKm;

if (age < 18) {
  price *= 0.8; 
} else if (age > 65) {
  price *= 0.6; 
}

console.log("Il prezzo del tuo biglietto è: €" + price.toFixed(2));
