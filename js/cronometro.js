var seg = document.querySelector('.segundos');
var hr = document.querySelector('.horas');
var min = document.querySelector('.minutos');

var auxseg = 0
var auxmin = 0
var auxhr = 0
var intervalo

document.querySelector('.pausar').style.display = "none";
document.querySelector('.reset').style.display = "none";
function segundos() {
    auxseg++
    document.querySelector('.segundos').innerHTML = auxseg
    if (auxseg < 10) {
        document.querySelector('.segundos').innerHTML = '0' + auxseg
    }
    if (auxseg === 60) {
        auxseg = 0
        minutos()
    }
}
function minutos() {
    auxmin++
    document.querySelector('.minutos').innerHTML = auxmin
    if (auxmin < 10) {
        document.querySelector('.minutos').innerHTML = '0' + auxmin
    }
    if (auxmin == 60) {
        auxmin = 0
        horas()
    }
}
function horas() {
    auxhr++
    document.querySelector('.horas').innerHTML = auxhr
    if (auxhr < 10) {
        document.querySelector('.horas').innerHTML = '0' + auxhr
    }
}
function iniciar() {
    document.querySelector('.comecar').style.display = "none";
    document.querySelector('.reset').style.display = "inline";
    document.querySelector('.pausar').style.display = "inline";
    clearInterval(intervalo)
    intervalo = setInterval(() => { segundos() }, 1000)
}
function pausar() {
    document.querySelector('.comecar').style.display = "inline";
    document.querySelector('.reset').style.display = "inline";
    document.querySelector('.pausar').style.display = "none";
    clearInterval(intervalo)
}
function reset() {
    document.querySelector('.comecar').style.display = "inline";
    document.querySelector('.reset').style.display = "none";
    document.querySelector('.pausar').style.display = "none";
    clearInterval(intervalo)
    auxseg = 0
    auxmin = 0
    auxhr = 0
    document.querySelector('.minutos').innerHTML = '00'
    document.querySelector('.segundos').innerHTML = '00'
    document.querySelector('.horas').innerHTML = '00'
}