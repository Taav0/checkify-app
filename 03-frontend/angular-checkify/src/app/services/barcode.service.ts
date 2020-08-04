import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Barcode } from '../common/barcode'
@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

  private baseUrl = 'http://localhost:8080/api/register';

  

  constructor(private http: HttpClient){
   }


   
   public getAll(barcode: Barcode){
    console.log("called getAll()");
    this.http.post<Barcode>("http://localhost:8080/api/register", barcode).subscribe();
    
   }

   
}
