import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-products-table',
  styleUrls: ['./products-table.component.scss'],
  templateUrl: './products-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent {
  constructor(private _productService: ProductService, private _companyService: CompanyService, private _router: Router) { }

  readonly products$: Observable<any> = this._productService.getProducts();
  readonly companyData$: Observable<any> = this._companyService.getCompanyData();

}
