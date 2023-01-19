import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FormAsyncValidatorsService } from 'src/app/services/form-async-validators.service';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.sass']
})
export class SecondComponent {

  syncValidatorExample = (invalidTerms:string[]) => (control:AbstractControl) => {
    const { value } = control ; let validationErrors:ValidationErrors|null = null ;
    if(invalidTerms.includes(value)){validationErrors = {['invalidTerm']:true}};
    return validationErrors ;
  };

  asyncValidatorExample = async(control:AbstractControl):Promise<ValidationErrors | null> => {
    const value = control.value.toLowerCase() ; let validationErrors:ValidationErrors = {} ;
    try{
      if(!this.formAsyncValidators.digiCheckName.includes(value)){validationErrors['invalid Term'] = true};
    }catch(err){() => {validationErrors['request fail'] = true}};
    if(Object.keys(validationErrors).length > 0){return validationErrors}else{return null};
  }

  bsModalRef?:BsModalRef;
  loginModal(){
    const initialState:ModalOptions = { initialState: {digimon:this.formAsyncValidators.digiModals.pop()} };
    this.bsModalRef = this.modalService.show(ModalComponentComponent,initialState);
  }

  login(){this.loginModal()};

  public user:FormGroup = this.forma.group({
    name:['',[Validators.required,Validators.minLength(5),this.syncValidatorExample(['Carlos','Pepe'])]],
    surname:['',[Validators.required,Validators.minLength(5)],[this.asyncValidatorExample]],
    password:['',[Validators.required,Validators.minLength(5)]]
  });
  
  constructor(
    private forma:FormBuilder,
    private formAsyncValidators:FormAsyncValidatorsService,
    private modalService:BsModalService
  ){};

}
