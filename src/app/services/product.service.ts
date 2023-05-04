import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {ProductModel} from "../models/product.model";

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  saveProduct(data: ProductModel): Observable<void> {
    return this._httpClient.post<void>('http://localhost:3000/products', data)
  }

  saveProducts(data: ProductModel[]): Observable<void[]> {
    const observables: Observable<void>[] = [];
    data.forEach((item: ProductModel) => {
      observables.push(this.saveProduct(item));
    });
    return forkJoin(observables);
  }

  getProducts(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('http://localhost:3000/products')
  }
}
