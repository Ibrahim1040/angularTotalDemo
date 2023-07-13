import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  public products : Array<Product> = [];
  public keyword : string = "";
  constructor(private productService:ProductService){

  }
  ngOnInit(){
    
    this.getProducts();
  }

  getProducts(){
    this.productService.getProduct(1,4)
      .subscribe({
        next : data => {
          this.products = data 
        },
        error : err => {
          console.log(err);
        }
      })
      
     //this.products$ = this.productService.getProduct();
  }

  handleCheckProduct(product:Product){
    this.productService.checkProduct(product)
    .subscribe({
      next : updatedProduct => {
        product.checked=!product.checked;
      }
    })
  }
  handleDelete(product:Product){
    if(confirm("Etes-vous sûre de vouloir supprimer ? "))
    this.productService.deleteproduct(product).subscribe({
      next:value => {
        this.products.filter(p=>p.id!=product.id);
      }
    })
  }

  searchProduct(){
    this.productService.searchProducts(this.keyword).subscribe({
      next : value => {
        this.products = value;
      }
    })
  }

}
