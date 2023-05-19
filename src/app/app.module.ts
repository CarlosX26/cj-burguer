import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ListProductsComponent } from './components/list-products/list-products.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ProductCardComponent, ListProductsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
