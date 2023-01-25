import { Component } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public oneOptions:{id:number,nombre:string}[] = [{id:1,nombre:'test1'},{id:2,nombre:'test2'},]
  public twoOptions:{id:number,nombre:string}[] = [{id:3,nombre:'test3'},{id:4,nombre:'test4'},]
  public form:FormGroup;

  public indexc:number = 0

  move(avance:number){
    if(avance == 1){this.indexc++}else{this.indexc--}
  }

  constructor(private formBuilder:FormBuilder){

    this.form = this.formBuilder.group({
      one:['',[]],
      two:['',[]]
    });

    this.form.get('one')?.valueChanges.subscribe(() => { this.indexc++ })

  }
}
