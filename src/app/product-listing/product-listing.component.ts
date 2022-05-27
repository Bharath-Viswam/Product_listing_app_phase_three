import { ProductService } from './../product.service';
import { ProductModel } from './productmodel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  title:String = "Product List"
  // products:ProductModel[];
//Product is the model class for a  product item
//image properties
imageWidth:number=50;
imageMargin:number=3;
showImage:boolean = false;
products=[{
  productId :'',
  productName:'',
  productCode:'',
  releaseDate:'',
  description:'',
  price:'',
  starRating:'',
  imageUrl:''}]

//creating service object fro calling getProducts()
  constructor(private productService:ProductService) { 
  
  }

 
  toggleImage():void{
    this.showImage =  !this.showImage
  }
  ngOnInit(): void {
    //calling getProducts() and loading the products to products array
    this.productService.getProducts().subscribe((data)=>{
      this.products = JSON.parse(JSON.stringify(data))
    }
    )
  }

}
