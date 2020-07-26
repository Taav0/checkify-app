import { Fridge } from './../common/fridge';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl = 'http://localhost:8080/api/products';

  private fridgeUrl = 'http://localhost:8080/api/fridge';

  constructor(private httpClient: HttpClient) { }

  getProductList(theFridgeId : number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByFridgeId?id=${theFridgeId}`;
    
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getFridges(): Observable<Fridge[]> {

      return this.httpClient.get<GetResponseFridge>(this.fridgeUrl).pipe(
      map(response => response._embedded.fridge)
      );
  }

}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  }
}

interface GetResponseFridge {
  _embedded: {
    fridge: Fridge[];
  }
}