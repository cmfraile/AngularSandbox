import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService , ModalOptions } from 'ngx-bootstrap/modal';
import { ModalComponentComponent } from '../components/modal-component/modal-component.component';
import { FormAsyncValidatorsService } from './form-async-validators.service';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {

  bsModalRef?:BsModalRef;
  digimonLoginModal(){
    const initialState:ModalOptions = { initialState: {digimon:this.formAsyncValidators.digiModals.pop()} };
    this.bsModalRef = this.modalService.show(ModalComponentComponent,initialState);
  }
  constructor(
    private modalService:BsModalService,
    private formAsyncValidators:FormAsyncValidatorsService
  ){}
}
