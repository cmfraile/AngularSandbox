import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface digimon {name:string,img:string,level:string}

@Injectable({
  providedIn: 'root'
})
export class FormAsyncValidatorsService {

  digiList:string[] = [] ; digiquery:string = 'https://digimon-api.vercel.app/api/digimon';

  private digimonQuery():Observable<digimon[]>{return this.http.get<digimon[]>(this.digiquery)}

  constructor(private http:HttpClient){
    this.digimonQuery().subscribe(resp => {this.digiList = resp.map(x => x.name)})
  }

}
