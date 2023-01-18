import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidatorFn , AsyncValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

interface digimon {name:string,img:string,level:string}

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
      this.http.get<digimon[]>('https://digimon-api.vercel.app/api/digimon').subscribe({
      next:(resp) => {
        const digimonList:string[] = resp.map<string>(digimon => digimon.name.toLowerCase());
        if(digimonList.includes(value)){validationErrors['invalid name'] = true}
      },
      error:() => { throw new Error('Request fail') },
      //finally:() => {}
    })
    }catch(err){() => {validationErrors['request fail'] = true}};
    if(Object.keys(validationErrors).length > 0){return validationErrors}else{return null};
  }

  login(){console.log(this.user)};
  
  user:FormGroup = this.forma.group({
    name:['',[Validators.required,Validators.minLength(5),this.syncValidatorExample(['Carlos'])]],
    surname:['',[Validators.required,Validators.minLength(5),this.asyncValidatorExample]],
    password:['',[Validators.required,Validators.minLength(5)]]
  });
  
  constructor(
    private forma:FormBuilder,
    private http:HttpClient
  ){};

}
