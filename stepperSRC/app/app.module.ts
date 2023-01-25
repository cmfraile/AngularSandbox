import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

const stepper = [MatStepperModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatInputModule,DropdownModule]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...stepper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
