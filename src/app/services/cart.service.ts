import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFoodList } from './foods.service';

export interface ICartItem extends IFoodList {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: BehaviorSubject<ICartItem[]> = new BehaviorSubject<ICartItem[]>([]);
  public cartItems$ = this.cartItems.asObservable();

  addToCart(product: IFoodList): void {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      currentItems.push({ ...product, quantity: 1 });
    }

    this.cartItems.next([...currentItems]);
  }

  removeFromCart(productId: number): void {
    const currentItems = this.cartItems.value.filter(item => item.id !== productId);
    this.cartItems.next(currentItems);
  }

  updateQuantity(productId: number, quantity: number): void {
    const currentItems = this.cartItems.value;
    const item = currentItems.find(item => item.id === productId);

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.cartItems.next([...currentItems]);
      }
    }
  }

  getTotal(): number {
    return this.cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getItemCount(): number {
    return this.cartItems.value.reduce((count, item) => count + item.quantity, 0);
  }

  clearCart(): void {
    this.cartItems.next([]);
  }
}