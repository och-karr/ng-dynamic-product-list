import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import {CompanyService} from "../../services/company.service";
import {CompanyDataModel} from "../../models/company-data.model";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-products-table',
  styleUrls: ['./products-table.component.scss'],
  templateUrl: './products-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent {
  readonly products$: Observable<ProductModel[]> = this._productService.getProducts();
  readonly companyData$: Observable<CompanyDataModel[]> = this._companyService.getCompanyData();

  constructor(private _productService: ProductService, private _companyService: CompanyService, private _router: Router) { }
}
