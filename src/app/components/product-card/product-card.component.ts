import { Component, Input } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { IFoodList } from "../../services/foods.service";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
})
export class ProductCardComponent {
  @Input() product!: IFoodList;

  constructor(private cartService: CartService) {}

  addToCart(): void {
    this.cartService.addToCart(this.product);
  }

  get img(): string { return this.product?.img || ''; }
  get name(): string { return this.product?.name || ''; }
  get price(): number { return this.product?.price || 0; }
  get category(): string { return this.product?.category || ''; }
}
