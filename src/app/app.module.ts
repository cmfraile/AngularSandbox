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
    AddButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }