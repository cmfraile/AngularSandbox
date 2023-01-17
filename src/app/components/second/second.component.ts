import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidatorFn , AsyncValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

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
  }

  asyncValidatorExample = async(control:AbstractControl):Promise<ValidationErrors | null> => {
    const { value } = control ; let validationErrors:ValidationErrors|null = null ;
    try{
      this.http.get('https://digimon-api.vercel.app/api/digimon').subscribe({
      next:(resp) => {

      },
      error:() => {

      },
      //finally:() => {}
    })
    }catch(err){validationErrors = {['requestFail']:true}};
    return validationErrors;
  }
  
  user:FormGroup = this.forma.group({
    name:['',[Validators.required,Validators.minLength(5),this.syncValidatorExample(['Carlos'])]],
    surname:['',[Validators.required,Validators.minLength(5)]],
    password:['',[Validators.required,Validators.minLength(5)]]
  });

  /*
  syncValidatorExample:ValidatorFn = (control:AbstractControl) => {
    const { value } = control ; let validationErrors:ValidationErrors|null = null
    if(value)
  }
  */

  
  
  constructor(
    private forma:FormBuilder,
    private http:HttpClient
  ){}

}
