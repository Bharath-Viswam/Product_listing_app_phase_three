import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListingComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
