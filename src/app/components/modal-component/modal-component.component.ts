import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.sass']
})
export class ModalComponentComponent {
  title?:string;
  digimon?:{name:string,img:string}
  constructor(
    public bsModalRef:BsModalRef
  ){
    console.log(this.bsModalRef.content);
  }
}
