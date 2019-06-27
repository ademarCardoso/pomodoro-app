const audio = document.getElementById('alarm')
const seconds = 1000
let time
let min = 1, seg = 1 
let timer_on = 0

function start () {
    if (!timer_on) {
        timer_on = 1
        relogio()
    }
}

function pause () {
    timer_on = 0
    clearTimeout(time)
}

function refresh () {
    clearTimeout(time)
    document.getElementById('spanRelogio').innerHTML = "25:00";
    document.getElementById('progres-bar').value = 0 
    min = 25; seg = 1

    relogio()
}

function relogio() {
    if ((min > 0) || (seg > 0)) {
        if (seg == 0) {
            seg = 59;
            min = min - 1
        }
        else {
            seg = seg - 1;
        }
        if (min.toString().length == 1) {
            min = "0" + min;
        }
        if (seg.toString().length == 1) {
            seg = "0" + seg;
        }
        // Injeta o tempo de forma regressiva no html
        document.getElementById('spanRelogio').innerHTML = min + ":" + seg;
        // Incrementa a barra de progresso a cada segundo passado
        document.getElementById('progres-bar').value += 1 
        time = setTimeout(relogio, seconds)
    }
    else {
        document.getElementById('spanRelogio').innerHTML = "00:00"
        audio.play()
    }
}	
