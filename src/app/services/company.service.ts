import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CompanyDataModel} from "../models/company-data.model";

@Injectable()
export class CompanyService {
  constructor(private _httpClient: HttpClient) {
  }

  getCompanyData(): Observable<CompanyDataModel[]> {
    return this._httpClient.get<any>('http://localhost:3000/companyData')
  }
}
