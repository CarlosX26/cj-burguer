import { Component, OnInit } from "@angular/core";
import { FoodsService } from "src/app/services/foods.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  foodName = "";

  constructor(private foodsService: FoodsService) {}

  ngOnInit(): void {
    this.foodsService.filter$.subscribe((filter) => (this.foodName = filter));
  }

  getFoodName(): void {
    this.foodsService.setFilter(this.foodName);
  }
}
