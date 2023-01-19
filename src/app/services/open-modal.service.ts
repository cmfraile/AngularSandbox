import { ChangeDetectorRef, Component, EventEmitter, Injectable } from '@angular/core';
import { BsModalRef, BsModalService , ModalOptions } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../components/modal/modal.component';
import { FormAsyncValidatorsService } from './form-async-validators.service';
import { combineLatest, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {

  bsModalRef?: BsModalRef;
  public openModalWithComponent():EventEmitter<unknown>|undefined{
    const digiQuery:any = this.formAsync.digiModals.pop();
    const initialState:ModalOptions = {initialState:{...digiQuery}}
    this.bsModalRef = this.modalService.show(ModalComponent,initialState);
    return this.bsModalRef.onHidden
  }

  constructor(
    private modalService: BsModalService,
    private formAsync: FormAsyncValidatorsService
  ){

  }
}
