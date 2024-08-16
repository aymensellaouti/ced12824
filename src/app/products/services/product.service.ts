import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Settings } from '../dto/product-settings.dto';
import { ProductApiResponse } from '../dto/product-api-response.dto';
import { APP_API } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}
  getProducts(setting: Settings) {
    const { limit, skip } = setting;
    return this.http.get<ProductApiResponse>(`${APP_API.products}?limit=${limit}&skip=${skip}`);
  }
}
