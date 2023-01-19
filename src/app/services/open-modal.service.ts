import { Component, Injectable } from '@angular/core';
import { BsModalRef, BsModalService , ModalOptions } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../components/modal/modal.component';
import { FormAsyncValidatorsService } from './form-async-validators.service';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {

  bsModalRef?: BsModalRef;
  public openModalWithComponent(){
    const digiQuery:any = this.formAsync.digiModals.pop() ; console.log(digiQuery)
    const { name , img } = digiQuery;
    const initialState:ModalOptions = {initialState:{name,img}}
    this.bsModalRef = this.modalService.show(ModalComponent,initialState);
  }

  constructor(
    private modalService: BsModalService,
    private formAsync: FormAsyncValidatorsService
  ){}
}
