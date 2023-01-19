import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent {

  name:string|undefined = undefined
  img:string|undefined = undefined

  constructor(public bsModalRef: BsModalRef){}
}
