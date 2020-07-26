import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Routes, RouterModule} from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FridgeMenuComponent } from './components/fridge-menu/fridge-menu.component';
import { InviteMenuComponent } from './components/invite-menu/invite-menu.component'

const routes: Routes = [
  {path: 'products/:id' , component : ProductDetailsComponent},
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
    ProductDetailsComponent,
    FridgeMenuComponent,
    InviteMenuComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
