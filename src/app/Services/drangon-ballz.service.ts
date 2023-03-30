import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from '../Models/icharacter';

@Injectable({
  providedIn: 'root'
})
export class DrangonBallzService {

  private readonly url : string = "https://dragon-ballz-super-api.site/api"

  characters : ICharacter[] = []

  constructor(private _client : HttpClient) { }

  getAll(url : string) : Observable<ICharacter> {
    return this._client.get<ICharacter>(url)
  }


  getDetail(url : string): Observable<ICharacter> {
    return this._client.get<ICharacter>(url)
  }

  // get() : Observable<ICharacter> {
  //   return this._client.get<ICharacter>("https://dragon-ballz-super-api.site/api")
  //   // .subscribe({
  //   //   next : (data : any) => console.log(data)
  //   // })
  //}







}
