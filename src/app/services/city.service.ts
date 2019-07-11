import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

constructor(private httpClient:HttpClient) { }
  path="https://localhost:44391/api/";

  getCities():Observable<City[]>{
    return this.httpClient.get<City[]>(this.path+"cities");
  }
}
