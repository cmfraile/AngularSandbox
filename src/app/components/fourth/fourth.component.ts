import { Component } from '@angular/core';
import { FormAsyncValidatorsService } from 'src/app/services/form-async-validators.service';
import { OpenModalService } from 'src/app/services/open-modal.service';
import { ValidationErrors , AbstractControl } from '@angular/forms';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { delay, map, of, tap } from 'rxjs';
import { Observable } from 'rxjs';
import { AsyncValidatorFn } from '@angular/forms';
import * as _ from 'underscore';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.sass']
})
export class FourthComponent {

  $asyncValidatorExample = (control:AbstractControl):Observable<ValidationErrors | null> => {

    const check = () => (!this.formAsyncValidators.digiCheckName.includes(control.value) && !control.pristine) ? { ['invalidTerm']:true } : null
    
    return of(null).pipe(
      delay(2000),
      map(check)
    )
  
  }

  public digimonChoose:UntypedFormGroup = new UntypedFormGroup({
    digimon : new UntypedFormControl(undefined,undefined,[this.$asyncValidatorExample]),
  })

  login(){
    if(this.digimonChoose.invalid){return};
  };

  constructor(
    public formAsyncValidators:FormAsyncValidatorsService,
    public openModal:OpenModalService
  ){}

}
