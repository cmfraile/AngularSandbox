import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigate-button',
  templateUrl: './navigate-button.component.html',
  styleUrls: ['./navigate-button.component.sass']
})
export class NavigateButtonComponent {
  @Input()url!:string;
  navigate(){this._r.navigate([this.url])}
  constructor(private _r:Router){}
}
