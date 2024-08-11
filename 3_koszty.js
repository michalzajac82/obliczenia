btn1.addEventListener('click', function koszty(){

    let pow = document.querySelector('#powierzchnia').value;
    let ozc = document.querySelector('#zapotrzebowanie').value;
    let czas = document.querySelector('#czas').value;
    let kwh = document.querySelector('#kwh').value;
    let cop = document.querySelector('#cop').value;

    // obliczenia OZC
    let wynik1 = (((pow * ozc * czas)/1000)/cop * kwh).toFixed(2);
    document.querySelector('#wynik1').innerHTML = wynik1;




})