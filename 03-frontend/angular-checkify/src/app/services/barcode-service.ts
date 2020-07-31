import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';


@Injectable()
export class BarcodeService {

  private productURL: string;

  constructor(private http: HttpClient){
    this.productURL='http://localhost:8080/*\'make this in backend\'';
  }

  public findProductByBarcode(barcode:string): Observable<Product>
  {
    return this.http.get<Product>(this.productURL);
  }

  public createProduct(product:Product){
      return this.http.post<Product>(this.productURL, Product);
  }

  


}