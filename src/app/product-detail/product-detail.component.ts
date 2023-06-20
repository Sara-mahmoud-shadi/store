import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{IngoProductsService} from '../info-products.service'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id:any;
  productDetail:any;
  constructor(private _ActivatedRoute:ActivatedRoute,private _IngoProductsService:IngoProductsService) { 
   this.id= this._ActivatedRoute.snapshot.paramMap.get('id');

   this._IngoProductsService.getSingleproduct(this.id).subscribe(data=>{
    console.log(data);
    this.productDetail=data;

   });
  }

  ngOnInit(): void {
  }
  


}
