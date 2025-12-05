import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

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
  private filter: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public filter$ = this.filter.asObservable();

  constructor(private http: HttpClient) {}

  getFoodList(): Observable<IFoodList[]> {
    return this.http.get<IFoodList[]>('/assets/mock-products.json');
  }

  setFilter(filter: string): void {
    this.filter.next(filter);
  }

  clearFilter(): void {
    this.filter.next("");
  }
}
