import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  saveProduct(data: any): Observable<any> {
    const observables: Observable<any>[] = [];
    data.forEach((item: any) => {
      observables.push(this._httpClient.post<any>('http://localhost:3000/products', item));
    });
    return forkJoin(observables);
  }

  getProduct(): Observable<any> {
    return this._httpClient.get<any>('http://localhost:3000/products')
  }
}
