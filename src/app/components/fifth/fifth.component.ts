import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { FormAsyncValidatorsService } from 'src/app/services/form-async-validators.service';
import { AsyncValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.sass']
})
export class FifthComponent {

  validatorMiddleware:AsyncValidatorFn = (control:AbstractControl) => new Promise((rs,rj) => {
    console.log('pokeMiddlewareValidator',control)
    rs(null)
  })

  public register:UntypedFormGroup = new UntypedFormGroup({
    name:new UntypedFormControl(undefined,[Validators.required,Validators.minLength(6)],undefined),
    sidekick:new UntypedFormControl(undefined,[Validators.required,Validators.minLength(6)],undefined)
  },{
    updateOn:'blur',
    validators:[],
    asyncValidators:[this.validatorMiddleware]
  });

  registerSubmit(){console.log('valid form?',this.register.valid)}

  constructor(
    private form:FormBuilder,
    private formAsyncValidators:FormAsyncValidatorsService,
  ){}

}
