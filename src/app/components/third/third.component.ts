import { Component , Input, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormAsyncValidatorsService } from 'src/app/services/form-async-validators.service';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.sass']
})
export class ThirdComponent {

  modalRef?: BsModalRef;
  
  openModal(template:TemplateRef<any>){this.modalRef = this.modalService.show(template)}
  
  constructor(
    private modalService: BsModalService,
    private digimon: FormAsyncValidatorsService
  ){}

}
