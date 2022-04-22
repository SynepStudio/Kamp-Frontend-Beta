import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';
import { CartService } from '../Services/cart.Service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private toastrService:ToastrService) {}

    
  ngOnInit(): void {
    this.removeFromCard
    this.getCart()
   };

  getCart() {
    this.cartItems = this.cartService.list();

  }
  removeFromCard(product:Product){
    console.log("başlangıç")
this.cartService.removeFromCard(product);
console.log("Orta")
this.toastrService.error("Sepetten Silindi.",product.productName + "Silindi.")
console.log("Son")
}
}
 