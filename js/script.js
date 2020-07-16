// Eventi al click del bottone genera
document.getElementById('genera').addEventListener("click", function () {
  // Generare nome
  var nome = document.getElementById('name').value;
  var travellerName = document.getElementById('travellerName');
  travellerName.innerHTML = nome;
  // Selezione sconto
  var discountType = document.getElementById('age').value;
  if (discountType == 0) {
    document.getElementById('discountType').innerHTML = "Tariffa Minorenni";
  } else if (discountType == 1) {
    document.getElementById('discountType').innerHTML = "Tariffa Standard";
  } else if (discountType == 2) {
    document.getElementById('discountType').innerHTML = "Tariffa Silver";
  }
  // numero casuale da 1 a 9 per Carrozza
  var cab = Math.floor(Math.random()*9) + 1;
  document.getElementById('cab').innerHTML = cab;
  // numero casuale da 90000 a 100000 escluso per codice CP
  var cpNumber = Math.floor(Math.random()*99999) + 1;
  document.getElementById('cpNumber').innerHTML = cpNumber;
  // Calcolo prezzo biglietto
  var km = document.getElementById('km').value;
  var prezzo = km * 0.21;
  // Calcolo sconti
  if (discountType == 0) {
    prezzo *= 0.8;
  } else if (discountType == 2) {
    prezzo *= 0.6;
  }
  document.getElementById('ticketPrice').innerHTML = prezzo.toFixed(2) + ' €';
  //mostra ticket al click
  var ticket = document.getElementById('ticket');
  ticket.className = "show";
}
);
//  eventi al click del bottone annulla
document.getElementById('annulla').addEventListener("click", function () {
  var ticket = document.getElementById('ticket');
  ticket.className = "hidden";
}
)
