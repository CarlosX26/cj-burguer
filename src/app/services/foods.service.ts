import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface IFoodList {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

@Injectable({
  providedIn: "root",
})
export class FoodsService {
  baseURL = "https://hamburgueria-kenzie-json-serve.herokuapp.com";

  constructor(private http: HttpClient) {}

  getFoodList(): Observable<IFoodList[]> {
    return this.http.get<IFoodList[]>(`${this.baseURL}/products`);
  }
}
