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

  getProductList(theFridgeId: number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByFridgeId?id=${theFridgeId}`;

    return this.getProducts(searchUrl);
  }

  getProduct(theProductId: number): Observable<Product> {

    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }

  searchProducts(theKeyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
      return this.getProducts(searchUrl);
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(map(response => response._embedded.products));
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
