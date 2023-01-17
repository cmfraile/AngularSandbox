import { Component, Input } from '@angular/core';
import { Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.sass']
})
export class AddButtonComponent {
  @Input()amount!:number;
  @Output()amountEmit = new EventEmitter<number>();
  add(){ this.amountEmit.emit(this.amount) }
}
