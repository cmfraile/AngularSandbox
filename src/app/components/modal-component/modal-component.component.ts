import { Component, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Input } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { template } from 'underscore';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.sass']
})
export class ModalComponentComponent {
  
  modalRef?: BsModalRef;
  @Input()title!:string;
  private openModal(template:string){this.modalRef = this.modalService.show(template)};
  public openModalFather(){this.openModal('template')}

  constructor(
    private modalService:BsModalService
  ){}

}
