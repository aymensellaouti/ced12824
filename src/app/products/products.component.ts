import { Component } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  concatMap,
  map,
  takeWhile,
  scan,
  tap,
  skip,
  takeUntil,
} from 'rxjs';
import { Product } from './dto/product.dto';
import { ProductService } from './services/product.service';
import { Settings } from './dto/product-settings.dto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  setting: Settings = { limit: 12, skip: 0 };
  moreProducts = true;
  settings$ = new BehaviorSubject(this.setting);
  products$: Observable<Product[]> = this.settings$.pipe(
    // setting1 setting2 setting3 setting4
    //tap((settings) => console.log(settings)),
    concatMap((setting) => this.productService.getProducts(setting)),
    // ApiResponse1, ApiResponse2
    //tap((apiResponse) => console.log(apiResponse)),
    map(apiResponse => apiResponse.products),
    // products1, products2
    //tap((products) => console.log(products)),
    takeWhile(products => {
      if (!products.length) {
        this.moreProducts=false;
        return false;
      }
      return true;
    }),
    scan((oldProducts, newProducts) => [...oldProducts, ...newProducts])
  );
  constructor(private productService: ProductService) {}
  more() {
    this.setting = {
      ...this.setting,
      skip: this.setting.skip + this.setting.limit
    }
    this.settings$.next(this.setting);
  }
}
