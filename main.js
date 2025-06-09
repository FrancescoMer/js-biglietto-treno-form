document.getElementById('ticket-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const km = parseFloat(document.getElementById('km').value);
  const ageGroup = document.getElementById('age').value;

  const pricePerKm = 0.21;
  let price = km * pricePerKm;
  let offer = 'Biglietto Standard';

  if (ageGroup === 'minorenne') {
    price *= 0.8;
    offer = 'Biglietto Young';
  } else if (ageGroup === 'over65') {
    price *= 0.6;
    offer = 'Biglietto Senior';
  }

  const coach = Math.floor(Math.random() * 10) + 1;
  const cpCode = Math.floor(10000 + Math.random() * 90000);

  // Inserisci i dati nella tabella
  document.getElementById('passenger-name').textContent = name;
  document.getElementById('ticket-type').textContent = offer;
  document.getElementById('coach').textContent = coach;
  document.getElementById('cp-code').textContent = cpCode;
  document.getElementById('ticket-price').textContent = price.toFixed(2) + '€';

  document.getElementById('ticket-output').classList.remove('hidden');
});
