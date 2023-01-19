import { Component } from '@angular/core';
import { FormAsyncValidatorsService } from 'src/app/services/form-async-validators.service';
import { OpenModalService } from 'src/app/services/open-modal.service';
import { ValidationErrors , AbstractControl } from '@angular/forms';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.sass']
})
export class FourthComponent {

  asyncValidatorExample = async(control:AbstractControl):Promise<ValidationErrors | null> => {
    const value = control.value.toLowerCase() ; let validationErrors:ValidationErrors = {} ;
    try{
      if(this.formAsyncValidators.digiCheckName.includes(value)){validationErrors['invalid Term'] = true};
    }catch(err){() => {validationErrors['request fail'] = true}};
    if(Object.keys(validationErrors).length > 0){return validationErrors}else{return null};
  }

  public digimonChoose:UntypedFormGroup = new UntypedFormGroup({
    digimon : new UntypedFormControl(undefined,undefined,[this.asyncValidatorExample]),
  })
  

  constructor(
    public formAsyncValidators:FormAsyncValidatorsService,
    public openModal:OpenModalService
  ){}

}
