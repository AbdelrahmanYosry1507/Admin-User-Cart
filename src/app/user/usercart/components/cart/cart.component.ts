import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:any[]= [];
  total:any = 0;
  success:Boolean=false;
  form !: FormGroup;
itm: any;
constructor(private service:CartService){


}
  ngOnInit(){
this.GetAllCart();
  }

  GetAllCart(){
    this.service.getCart().subscribe((x:any)=>{
      this.cart = x;
    })
  }


}
