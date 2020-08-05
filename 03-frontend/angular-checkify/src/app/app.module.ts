import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Routes, RouterModule} from '@angular/router';
import { BarcodeReaderComponent } from './barcode-reader/barcode-reader.component'
import Quagga from 'quagga';
import { from } from 'rxjs';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FridgeMenuComponent } from './components/fridge-menu/fridge-menu.component';
import { SearchComponent } from './components/search/search.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditProductViewComponent } from './components/edit-product-view/edit-product-view.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';




const routes: Routes = [
  {path: 'products/:id/editProduct' , component : EditProductViewComponent},
  {path: 'products/:id' , component : ProductDetailsComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'fridge/:id' , component : ProductListComponent},
  {path: 'fridge' , component : ProductListComponent},
  {path: 'products' , component : ProductListComponent},
  {path: '' , redirectTo: '/products', pathMatch: 'full'},
  {path: '**' , redirectTo: '/products', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BarcodeReaderComponent,
    ProductDetailsComponent,
    FridgeMenuComponent,
    SearchComponent,
    EditProductViewComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [ProductService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
