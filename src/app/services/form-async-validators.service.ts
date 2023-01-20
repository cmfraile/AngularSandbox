import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shuffle } from 'underscore';

interface digimon {name:string,img:string,level:string}

@Injectable({
  providedIn: 'root'
})
export class FormAsyncValidatorsService {

  public digiquery:string = 'https://digimon-api.vercel.app/api/digimon';
  digiCheckName:string[] = [] ;
  digiModals:{name:string,img:string}[] = [];

  public digimonQuery():Observable<any>{return this.http.get<digimon[]>(this.digiquery)};

  constructor(private http:HttpClient){
    this.digimonQuery().subscribe({
      next:(resp) => {
      this.digiModals = shuffle(resp.map((x:any) => ({name:x.name,img:x.img})));
      this.digiCheckName = resp.map((x:any) => x.name.toLowerCase());
      }
  })
}

}
