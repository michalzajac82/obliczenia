btn1.addEventListener('click', function przeplyw(){

  let wyd = parseFloat(document.getElementById('wyd').value);
  let dt = parseFloat(document.getElementById('dt').value);
  let pow = parseFloat(document.getElementById('pow').value);

  
  // obliczenia wynik1
  let wynik1 = (wyd/(1.163*dt)).toFixed(2);
  document.querySelector('#wynik1').innerHTML = wynik1;

  // obliczenia wynik2
  let wynik2 = (wynik1*pow).toFixed(2);
  document.querySelector('#wynik2').innerHTML = wynik2;

})
