import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import {BarcodeService} from './services/barcode.service';
import { Routes, RouterModule} from '@angular/router';
import { BarcodeReaderComponent } from './components/barcode-reader/barcode-reader.component'
import Quagga from 'quagga';
import { from } from 'rxjs';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FridgeMenuComponent } from './components/fridge-menu/fridge-menu.component';
import { SearchComponent } from './components/search/search.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: 'products/:id' , component : ProductDetailsComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'fridge/:id' , component : ProductListComponent},
  {path: 'fridge' , component : ProductListComponent},
  {path: 'products' , component : ProductListComponent},
  {path: 'barcode', component : BarcodeReaderComponent},
  {path: '' , redirectTo: '/products', pathMatch: 'full'},
  {path: '**' , redirectTo: '/products', pathMatch: 'full'},
  

];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BarcodeReaderComponent,
    ProductDetailsComponent,
    FridgeMenuComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [ProductService, BarcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
