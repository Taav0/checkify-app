import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Barcode } from '../common/barcode'
import { Product } from '../common/product';
import { Fridge } from '../common/fridge';
import { map } from 'rxjs/operators';
import { Category } from '../common/category';

@Injectable({
  providedIn: 'root'
})
export class CheckifyService {

 

  constructor(private http: HttpClient) { 
  }
  private productListURL = "http://localhost:8080/api/product-list";
  private fridgeUrl = 'http://localhost:8080/api/fridge';
  private categoryUrl = 'http://localhost:8080/api/category';


  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.productListURL);
  }

  getProductListByFridge(fridgeID: number){
    return this.http.get<GetResponseProducts>(`${this.productListURL}/search/findByFridgeId/${fridgeID}`).pipe(map(response => response.content));
  }

  getFridges(): Observable<Fridge[]> {
    return this.http.get<Fridge[]>(this.fridgeUrl)

  }

getProductListByFridgeID(theFridgeId: number): Observable<Product[]> {

// need to build URL based on category id, page and size 
const searchUrl = `${this.productListURL}/search/findByFridgeId/${theFridgeId}`;
return this.http.get<GetResponseProducts>(searchUrl).pipe(map(response => response.content));
}

searchProductsByName(theKeyword: string): Observable<Product[]> {

// need to build URL based on keyword, page and size 
const searchUrl = `${this.productListURL}/search/findByNameContaining/${theKeyword}`;

return this.http.get<GetResponseProducts>(searchUrl).pipe(map(response => response.content));
}


deleteProduct(theProductId: string): Observable<any>  {

  return this.http.delete(`${this.productListURL}/${theProductId}`, { responseType: 'text' });
}

saveProduct(product: Product) {
    this.http.post(this.productListURL, product).subscribe();
  }

getProduct(theProductId: number): Observable<Product> {

  // need to build URL based on product id
  const productUrl = `${this.productListURL}/${theProductId}`;

  return this.http.get<Product>(productUrl);
}

updateProduct(data): Observable<any> {
  return this.http.put(`${this.productListURL}`, data);
}

getCategories():Observable<Category[]>{
  console.log('inside getCategories()')
  console.log(this.http.get<Category[]>(this.categoryUrl))
  return this.http.get<Category[]>(this.categoryUrl);
}


}
interface GetResponseProducts {
    content: Product[];
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
