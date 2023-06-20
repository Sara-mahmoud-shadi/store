import { Component, OnInit } from '@angular/core';
import{IngoProductsService} from '../info-products.service';
import{AuthService} from '../auth.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProduct:any[];
  store_product:any[]=[];
  success:boolean=false;
  constructor(private _IngoProductsService:IngoProductsService,private _AuthService:AuthService) { 
    this.cartProduct=JSON.parse(localStorage.getItem("cart")!)

  }

  ngOnInit(): void {
  }

  plusQuantity(index:number){
    this.cartProduct[index].quantity++;
    localStorage.setItem("cart",JSON.stringify(this.cartProduct));

  }
  minsQuantity(index:number){
    if(this.cartProduct[index].quantity>=2){

      this.cartProduct[index].quantity--;
    localStorage.setItem("cart",JSON.stringify(this.cartProduct));
    }
    else{
      this.cartProduct[index].quantity=1
    }
    

  }
  detectQuantity(){
    localStorage.setItem("cart",JSON.stringify(this.cartProduct));
  }
  delete_order(){
    this.cartProduct=[]
    localStorage.setItem("cart",JSON.stringify(this.cartProduct));
  }
  store(){
    for(let i of this.cartProduct){
         this.store_product.push({productId:i.item.id,quantity:i.quantity});
       }}
  order(){
   this.store();
   let storeProduct={
    userId:this._AuthService.storedata.id,
    date:new Date(),
    products:this.store_product
   }
   this._IngoProductsService.save_order(storeProduct)
   localStorage.setItem("cart",JSON.stringify([]));
   this.success=true
  }
  deleteSingleProduct(index:number){

    this.cartProduct.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(this.cartProduct));

  }
}
