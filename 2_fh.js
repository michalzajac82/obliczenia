btn1.addEventListener('click', function moc(){

    let t1 = document.querySelector('#temp1').value;
    let t2 = document.querySelector('#temp2').value;
    let pow = document.querySelector('#powierzchnia').value;


    // obliczenia OZC
    let wynik1 = ((t2-t1)*pow).toFixed(2);
    document.querySelector('#wynik1').innerHTML = wynik1;


})

btn2.addEventListener('click', function dlugosc(){

    let pow = document.querySelector('#pow').value;
    let va = document.querySelector('#va').value;
    let dp = document.querySelector('#dp').value;

    // obliczenia OZC
    let wynik2 = (pow/va).toFixed(2);
    document.querySelector('#wynik2').innerHTML = wynik2;

    let wynik3 = (wynik2/dp).toFixed(2);
    document.querySelector('#wynik3').innerHTML = wynik3;

})
