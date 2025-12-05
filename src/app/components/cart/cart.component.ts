import { Component } from '@angular/core';
import { CartService, ICartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  cartItems$ = this.cartService.cartItems$;

  constructor(private cartService: CartService) {}

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}