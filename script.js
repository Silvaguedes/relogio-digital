


const Horas = document.getElementById('Horas');
const Minutos = document.getElementById('Minutos');
const Segundos = document.getElementById('Segundos');

const relogio = setInterval(function time() {


    const DateToday = new Date();
    let hr = DateToday.getHours();
    let min = DateToday.getMinutes();
    let s = DateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    Horas.textContent = hr;
    Minutos.textContent = min;
    Segundos.textContent = s;


})


