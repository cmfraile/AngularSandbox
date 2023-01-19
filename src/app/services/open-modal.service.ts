import { ChangeDetectorRef, Component, Injectable } from '@angular/core';
import { BsModalRef, BsModalService , ModalOptions } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../components/modal/modal.component';
import { FormAsyncValidatorsService } from './form-async-validators.service';
import { combineLatest, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {

  bsModalRef?: BsModalRef;
  public openModalWithComponent(){
    const digiQuery:any = this.formAsync.digiModals.pop();
    const initialState:ModalOptions = {initialState:{...digiQuery}}
    this.bsModalRef = this.modalService.show(ModalComponent,initialState);
  }

  constructor(
    private modalService: BsModalService,
    private changeDetection: ChangeDetectorRef,
    private formAsync: FormAsyncValidatorsService
  ){}
}
