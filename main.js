

const form = document.getElementById("ticket-form");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const km = parseFloat(document.getElementById("km").value);
  const age = parseInt(document.getElementById("age").value);
  const pricePerKm = 0.21;
  let price = km * pricePerKm;

  if (age < 18) {
    price *= 0.8; // sconto 20%
  } else if (age > 65) {
    price *= 0.6; // sconto 40%
  }

  result.textContent = `Prezzo del biglietto: €${price.toFixed(2)}`;
});
