import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor () {

  }
  time
  seconds = 1000
  min = 25
  seg = 0
  timer_on = 0

  // Funcao para fazer os botoes de play e pause sumirem ou aparecerem
playPause (elem) {
  if (elem === 'play') {
    document.getElementById('play').classList.add('hide')
    document.getElementById('play').classList.remove('show')
    document.getElementById('pause').classList.add('show')
    document.getElementById('pause').classList.remove('hide')
    return
  }

  document.getElementById('pause').classList.add('hide')
  document.getElementById('pause').classList.remove('show')
  document.getElementById('play').classList.add('show')
  document.getElementById('play').classList.remove('hide')

  return
}

  relogio() {
    if ((this.min > 0) || (this.seg > 0)) {
      if (this.seg == 0) {
        this.seg = 59
        this.min = this.min - 1
      }
      else {
        this.seg = this.seg - 1
      }
      if (this.min.toString().length == 1) {
        this.min = 0 + this.min
      }
      if (this.seg.toString().length == 1) {
        this.seg = 0 + this.seg
      }
      // Injeta o tempo de forma regressiva no html
      document.getElementById('regress-timer').innerHTML = this.min + ':' + this.seg
      // Incrementa a barra de progresso a cada segundo passado
      // document.getElementById('progres-bar').value += 1
      this.time = setTimeout(() => {
        this.relogio()
      }, this.seconds)
    }
    else {
      document.getElementById('regress-timer').innerHTML = "00:00"
      this.playAudio('play')
    }
  }

  playAudio(condition) {
    let audio = new Audio()
    audio.src = '../assets/bip.wav'

    if (condition === 'play') {
      audio.load()
      audio.play()
    }
    if (condition === 'pause') {
      console.log('karalho')
      audio.pause()
    }
  }

start() {
  this.playPause('play')
  if (!this.timer_on) {
    this.timer_on = 1
    this.relogio()
  }
}

pause() {
  this.playPause('pause')
  this.timer_on = 0
  clearTimeout(this.time)
  this.playAudio('pause')
}

refresh() {
  clearTimeout(this.time)
  this.min = 25
  this.seg = 0
  document.getElementById('regress-timer').innerHTML = "25:00";
  // document.getElementById('progres-bar').value = 0

  this.relogio()
}

stop() {
  clearTimeout(this.time)
  this.playPause('pause')
  document.getElementById('regress-timer').innerHTML = "25:00";
  this.min = 25
  this.seg = 0
  this.timer_on = 0
  this.playAudio('pause')

  // document.getElementById('progres-bar').value = 0

  // this.audio.pause()
}

}
