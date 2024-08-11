function interpolate(x0, y0, x1, y1, x) {
    return y0 + (x - x0) * (y1 - y0) / (x1 - x0);
  }
  
  function getInterpolation(x, data) {
    for (let i = 1; i < data.length; i++) {
      if (x < data[i].x) {
        return interpolate(data[i - 1].x, data[i - 1].y, data[i].x, data[i].y, x);
      }
    }
    return null;
  }
  
  btn1.addEventListener('click', () => {
    const ti = parseFloat(document.getElementById('ti').value);
    const tp = parseFloat(document.getElementById('tp').value);
    const tz = parseFloat(document.getElementById('tz').value);
  
    if (isNaN(ti) || isNaN(tp) || isNaN(tz)) {
      document.querySelector('#wynik1').innerText = 'Invalid input values';
      return;
    }
  
    const tempInput = ti - (tp + tz) / 2;
  
    const data = [
      { x: 3, y: 10 },
      { x: 8, y: 39 },
      { x: 9, y: 45 },
      { x: 10, y: 51 },
      { x: 14, y: 75 }
    ];
  
    const interpolatedValue = getInterpolation(tempInput, data);
    if (interpolatedValue !== null) {
      document.querySelector('#wynik1').innerText = interpolatedValue;
    } else {
      document.querySelector('#wynik1').innerText = 'Podana temperatura jest poza zakresem danych.';
    }
  });
  

