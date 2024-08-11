btn1.addEventListener('click', function przeplyw(){

  let wyd = parseFloat(document.getElementById('wyd').value);
  let dt = parseFloat(document.getElementById('dt').value);


  // obliczenia OZC
  let wynik1 = (wyd/(1.163*dt)).toFixed(2);
  document.querySelector('#wynik1').innerHTML = wynik1;


})
