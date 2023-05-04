import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CompanyService {
  constructor(private _httpClient: HttpClient) {
  }

  getCompanyData(): Observable<any> {
    return this._httpClient.get<any>('http://localhost:3000/companyData')
  }
}
