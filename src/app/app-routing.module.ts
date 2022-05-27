import { NewProductComponent } from './new-product/new-product.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"",component:ProductListingComponent},
{path:"add",component:NewProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
