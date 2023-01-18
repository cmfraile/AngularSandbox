import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface digimon {name:string,img:string,level:string}

@Injectable({
  providedIn: 'root'
})
export class FormAsyncValidatorsService {

  digiList:string[] = [] ; digiquery:string = 'https://digimon-api.vercel.app/api/digimon';

  private async digimonQuery():Promise<string[]>{
    return new Promise<string[]>((rs,rj) => {
      this.http.get<digimon[]>(this.digiquery).subscribe({
        next:(resp) => {return rs( resp.map(x => x.name))},
        error:(err) => {rj(err)},
        //complete:() => {},
      });
      return rj()
    })
  }

  constructor(private http:HttpClient){}

}
