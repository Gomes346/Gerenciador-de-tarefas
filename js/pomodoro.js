// variables
let FocoTittle = document.getElementById('foco');
let breakTittle = document.getElementById('pausa');
let minutes = 25;
let seconds = 0
let cont = 0;
var seconds_interval;
var contCor = 1;

// display
window.onload = () => {
    attDisplay();
    FocoTittle.classList.add('active');

}

// começa o timer
function startTimer() {
    document.getElementById('startp').style.display = "none";
    document.getElementById('resetp').style.display = "inline";
    document.getElementById('pausep').style.display = "inline";
    function secondsTimer() {
        if (seconds > 0 || minutes > 0) {
            seconds = seconds - 1;
            if (seconds < 0) {
                seconds = 59;
                minutes = minutes - 1
            }
            attDisplay();

            if (minutes <= 0 && seconds === 0) {
                cont++;
                if (cont % 2 === 0) {
                    minutes = 25;
                    FocoTittle.classList.add('active');
                    breakTittle.classList.remove('active');
                } else {
                    minutes = 5;
                    breakTittle.classList.add('active');
                    FocoTittle.classList.remove('active');
                }
                attDisplay();
            }
        }
    }
    clearInterval(seconds_interval);
    seconds_interval = setInterval(secondsTimer, 1000);
}
function attDisplay() {
    if (minutes < 10) {
        document.getElementById('minutes').innerHTML = "0" + minutes;
    } else {
        document.getElementById('minutes').innerHTML = minutes;
    }
    if (seconds < 10) {
        document.getElementById('seconds').innerHTML = "0" + seconds;
    } else {
        document.getElementById('seconds').innerHTML = seconds;
    }
}
function pausa() {
    document.getElementById('startp').style.display = "inline";
    document.getElementById('resetp').style.display = "inline";
    document.getElementById('pausep').style.display = "none";
    FocoTittle.classList.add('active');
    clearInterval(seconds_interval);
}
function resetp() {
    document.getElementById('startp').style.display = "inline";
    document.getElementById('resetp').style.display = "none";
    document.getElementById('pausep').style.display = "none";
    FocoTittle.classList.add('active');
    clearInterval(seconds_interval);
    minutes = 25;
    seconds = 0;
    attDisplay();
}

function cor() {
    contCor++;
    var root = document.documentElement; // Selects the :root element

    var h2Element = document.querySelector('h2');
    var imageElement = document.querySelector('.acessi img');
    var h1Element = document.querySelector('h1');

    if (contCor % 2 === 0) {
        root.style.setProperty('--cor-primaria', '#E0DEBF');
        root.style.setProperty('--cor-secundaria', '#20FE97');
        root.style.setProperty('--cor-terciaria', '#13B966');
        root.style.setProperty('--cor-quartenaria', '#74A309');
        root.style.setProperty('--cor-quintenaria', '#111111');
        root.style.setProperty('--cor-auxiliar', '#D1CD9E');
        root.style.setProperty('--cor-font', '#000');
        root.style.setProperty('--cor-sombra', '#C7C287');
        imageElement.style.filter = 'invert(100%)';
    } else {
        root.style.setProperty('--cor-primaria', '#1f2140');
        root.style.setProperty('--cor-secundaria', '#df0168');
        root.style.setProperty('--cor-terciaria', '#ec4699');
        root.style.setProperty('--cor-quartenaria', '#8b5cf6');
        root.style.setProperty('--cor-quintenaria', '#eee');
        root.style.setProperty('--cor-auxiliar', '#2e3261');
        root.style.setProperty('--cor-font', '#fff');
        root.style.setProperty('--cor-sombra', '#383d78');
        imageElement.style.filter = 'none';
    }
}

