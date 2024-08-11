btn1.addEventListener('click', function sondy(){

    let pow = document.querySelector('#powierzchnia').value;
    let ozc = document.querySelector('#zapotrzebowanie').value;
    let cop = document.querySelector('#cop').value;
    let mocMetr = document.querySelector('#mocMetr').value;
    let sonda = document.querySelector('#dlugosc_sondy').value;
    let godziny = document.querySelector('#godziny_pracy').value;
    let kwh = document.querySelector('#kwh').value;

    // obliczenia OZC
    let wynik1 = (pow * ozc).toFixed(2);
    document.querySelector('#wynik1').innerHTML = wynik1;

    // obliczenia mocy parownika
    let wynik2 = ((cop-1)/cop*pow*ozc).toFixed(2);
    document.querySelector('#wynik2').innerHTML = wynik2;

    // obliczeniowa dlugość sondy
    let wynik3 = (wynik2/mocMetr).toFixed(2);
    document.querySelector('#wynik3').innerHTML = wynik3;

    // ilość sond pojedynczych
    let wynik4 = Math.ceil(wynik3/sonda);
    document.querySelector('#wynik4').innerHTML = wynik4;

    // suma długości sond pojedynczych
    let wynik5 = Math.ceil(wynik4*sonda);
    document.querySelector('#wynik5').innerHTML = wynik5;

    // kWh / m a
    let wynik6 = Math.ceil(wynik1/1000*godziny/wynik5);
    document.querySelector('#wynik6').innerHTML = wynik6;

    // kWh / a
    let wynik7 = Math.ceil(wynik5*wynik6*kwh);
    document.querySelector('#wynik7').innerHTML = wynik7;


})
