import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {
  private productURL: string;

  constructor(private http: HttpClientModule){
    //this.productURL='http://localhost:8080/*\'make this in backend\'';
  }

  public findProductByBarcode(barcode:string): Observable<Product>
  {
    return new Observable<Product>();
  }

  public createProduct(product:Product){
      //return this.http.post<Product>(this.productURL, Product);
  }
}
