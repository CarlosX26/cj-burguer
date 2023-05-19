import { Component, Input } from "@angular/core";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
})
export class ProductCardComponent {
  @Input() img!: string;
  @Input() name!: string;
  @Input() price!: number;
  @Input() category!: string;
}
