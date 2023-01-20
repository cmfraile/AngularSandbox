import { Component } from '@angular/core';
import { FormAsyncValidatorsService } from 'src/app/services/form-async-validators.service';
import { OpenModalService } from 'src/app/services/open-modal.service';
import { ValidationErrors , AbstractControl } from '@angular/forms';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { delay, map, of, tap } from 'rxjs';
import { Observable } from 'rxjs';
import * as _ from 'underscore';
import { HttpErrorResponse } from '@angular/common/http';

interface digimon {name:string,img:string,level:string}

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.sass']
})
export class FourthComponent {

  $asyncValidatorExample = (control:AbstractControl):Observable<ValidationErrors | null> => {

    if(control.pristine){ return of(null) };

    return this.formAsyncValidators.digimonQuery().pipe(
      delay(2000),
      tap(() => { console.log('query!') }),
      map((resp:any) => {
        let validation:ValidationErrors|null = null;
        if(resp.error){validation = {['errorInQuery']:true}};
        const digiArray:digimon[] = resp.map((x:digimon) => x.name);
        if(!digiArray.includes(control.value)){validation = {['invalidTerm']:true}};
        return validation
      })
    )

  }

  public digimonChoose:UntypedFormGroup = new UntypedFormGroup({
    digimon : new UntypedFormControl(undefined,undefined,[this.$asyncValidatorExample]),
  },{updateOn:'blur'})

  login(){
    if(this.digimonChoose.invalid){return};
  };

  constructor(
    public formAsyncValidators:FormAsyncValidatorsService,
    public openModal:OpenModalService
  ){}

}
