import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { FormAsyncValidatorsService } from 'src/app/services/form-async-validators.service';

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
      if(!this.formAsyncValidators.digiList.includes(value)){validationErrors['request fail'] = true};
    }catch(err){() => {validationErrors['request fail'] = true}};
    if(Object.keys(validationErrors).length > 0){return validationErrors}else{return null};
  }

  login(){console.log({...this.user.controls})};

  public user:FormGroup = this.forma.group({
    name:['',[Validators.required,Validators.minLength(5),this.syncValidatorExample(['Carlos','Pepe'])]],
    surname:['',[Validators.required,Validators.minLength(5)],[this.asyncValidatorExample]],
    password:['',[Validators.required,Validators.minLength(5)]]
  });
  
  constructor(
    private forma:FormBuilder,
    private formAsyncValidators:FormAsyncValidatorsService,
  ){};

}
