import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

  private baseUrl = 'http://localhost:8080/api/products/register';
 

  constructor(private http: HttpClient) {
   }

   
   getAll(barcode: string) {
    const apiURL = `${this.baseUrl}/${barcode}`;
    this.http.post<string>(apiURL, String);
   }
}
