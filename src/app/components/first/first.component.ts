import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.sass']
})
export class FirstComponent {
  counter:number = 0
  addToCounter(amount:number){this.counter+=amount};
}
