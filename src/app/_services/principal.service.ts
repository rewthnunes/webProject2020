import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Car } from './../_models/car'

@Injectable({
  providedIn: 'root',
})
export class PrincipalService {

  constructor(private http: HttpClient) { }


  getCarsSmall() {
    return this.http.get<any>('./../../assets/files/car-small.json')
    .toPromise()
    .then(res => <Car[]>res.data)
    .then(data => { return data; });
}








}
