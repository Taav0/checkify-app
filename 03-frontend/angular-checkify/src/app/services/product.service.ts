import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../common/product';
import { Fridge } from './../common/fridge';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl = 'http://localhost:8080/api/productList';

  private fridgeUrl = 'http://localhost:8080/api/fridge';

  constructor(private httpClient: HttpClient) { }

  getProductList(theFridgeId: number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByFridgeId?id=${theFridgeId}`;

    return this.getProducts(searchUrl);
  }

  // list products according to fridges with pagination
  getProductListPaginate(thePage: number, 
                          thePageSize: number, 
                          theFridgeId: number): Observable<GetResponseProducts> {

// need to build URL based on category id, page and size 
  const searchUrl = `${this.baseUrl}/search/findByFridgeId?id=${theFridgeId}`
                  + `&page=${thePage}&size=${thePageSize}`;

  return this.httpClient.get<GetResponseProducts>(searchUrl);
}

// search products according to keyword using searchbar
searchProductsPaginate(thePage: number, 
                      thePageSize: number, 
                      theKeyword: string): Observable<GetResponseProducts> {

// need to build URL based on keyword, page and size 
const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
                + `&page=${thePage}&size=${thePageSize}`;

return this.httpClient.get<GetResponseProducts>(searchUrl);
}

  getProduct(theProductId: number): Observable<Product> {

    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }

  deleteProduct(theProductId: string): Observable<any>  {

    return this.httpClient.delete(`${this.baseUrl}/${theProductId}`, { responseType: 'text' });
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
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseFridge {
  _embedded: {
    fridge: Fridge[];
  }
}
