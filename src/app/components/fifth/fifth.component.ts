import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { FormAsyncValidatorsService } from 'src/app/services/form-async-validators.service';
import { AsyncValidatorFn } from '@angular/forms';
import { Observable ,delay, tap ,map , of } from 'rxjs';
import { ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.sass']
})
export class FifthComponent {

  validatorMiddleware = (form:any):Observable<ValidationErrors | null> => {
    //Haz por usar el of, ya que el Observable esta deprecated para una mayoria de usos.
    return of<any>(null).pipe(delay(500))
  }

  validatorPlaceholder = [Validators.required,Validators.minLength(6)];

  public register:UntypedFormGroup = new UntypedFormGroup({
    name:new UntypedFormControl(undefined,this.validatorPlaceholder,undefined),
    sidekick:new UntypedFormControl(undefined,this.validatorPlaceholder,undefined)
  },{
    //updateOn:'blur',
    validators:[Validators.required],
    asyncValidators:[this.validatorMiddleware]
  });

  registerSubmit(){}

  constructor(
    private form:FormBuilder,
    private formAsyncValidators:FormAsyncValidatorsService,
  ){}

}
