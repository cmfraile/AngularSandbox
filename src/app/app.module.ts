import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './component/third/third.component';
import { NavigateButtonComponent } from './component/navigate-button/navigate-button.component';

const routes: Routes = [
  {path:'',component:FirstComponent},
  {path:'**',redirectTo:'',pathMatch:'full'},
  //{path:'admin',children:rutaspaneladmin},
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    NavigateButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }