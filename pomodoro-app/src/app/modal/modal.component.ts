import { Component} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor() { }

invisible () {
  let modal = document.getElementById('modal')
  modal.classList.remove('is-active')
}

visible () {
  let modal = document.getElementById('modal')
  modal.classList.add('is-active')
}

}
