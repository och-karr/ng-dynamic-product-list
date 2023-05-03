import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  saveProduct(data: any): Observable<any> {
    return this._httpClient.post<any>('http://localhost:3000/products', data)
  }
}
