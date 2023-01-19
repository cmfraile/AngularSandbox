import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { NavigateButtonComponent } from './components/navigate-button/navigate-button.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './components/modal/modal.component';
import { OpenModalService } from './services/open-modal.service';

const materialModules:any = [
  BrowserAnimationsModule,MatInputModule,
  TooltipModule.forRoot(),ModalModule.forRoot()
]

const entryComponents = [ModalComponent];
const bootstrapServices = [OpenModalService];

const routes: Routes = [
  {path:'1',component:FirstComponent},
  {path:'2',component:SecondComponent},
  {path:'3',component:ThirdComponent},
  {path:'',redirectTo:'1',pathMatch:'full'},
  {path:'**',redirectTo:'1',pathMatch:'full'},
  //{path:'admin',children:rutaspaneladmin},
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    NavigateButtonComponent,
    AddButtonComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    ...materialModules,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents:[...entryComponents],
  bootstrap: [AppComponent,...bootstrapServices]
})
export class AppModule { }