import { Component, OnInit } from "@angular/core";
import { FoodsService, IFoodList } from "src/app/services/foods.service";

@Component({
  selector: "app-list-products",
  templateUrl: "./list-products.component.html",
})
export class ListProductsComponent implements OnInit {
  foodList!: IFoodList[];
  filteredFoodList: IFoodList[] = [];
  filter!: string;

  constructor(private foodsService: FoodsService) {}

  ngOnInit(): void {
    this.foodsService.getFoodList().subscribe((data) => {
      this.foodList = data;
      this.filteredFoodList = data;
    });
    this.foodsService.filter$.subscribe((filter) => {
      this.filter = filter;
      this.addFilter(filter);
    });
  }

  addFilter(filter: string): void {
    this.filteredFoodList = this.filteredFoodList.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  removeFilter(): void {
    this.foodsService.clearFilter();
    this.filteredFoodList = this.foodList;
  }
}
