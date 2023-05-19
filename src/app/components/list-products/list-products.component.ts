import { Component, OnInit } from "@angular/core";
import { FoodsService, IFoodList } from "src/app/services/foods.service";

@Component({
  selector: "app-list-products",
  templateUrl: "./list-products.component.html",
})
export class ListProductsComponent implements OnInit {
  foodList!: IFoodList[];

  constructor(private foodsService: FoodsService) {}

  ngOnInit(): void {
    this.foodsService.getFoodList().subscribe((data) => (this.foodList = data));
  }
}
