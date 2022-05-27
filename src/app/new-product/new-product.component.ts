import { ProductModel } from './../product-listing/productmodel';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
title:String="Add Product"
  
  productItem:any;

  constructor(private productService:ProductService, private router:Router) { 
    
     this.productItem= {
      productId :'',
      productName:'',
      productCode:'',
      releaseDate:'',
      description:'',
      price:'',
      starRating:'',
      imageUrl:''}

  }
  

  ngOnInit(){
  }
Add_Product(){
  this.productService.newProduct(this.productItem)
  console.log("Called")
  alert('success')
  this.router.navigate(['/'])

}
//   productItem(productItem: any) {
//     throw new Error('Method not implemented.');
//   }
// 
}
