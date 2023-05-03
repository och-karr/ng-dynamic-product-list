import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-table',
  styleUrls: ['./products-table.component.scss'],
  templateUrl: './products-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent {
  constructor(private _productService: ProductService, private _router: Router) { }

  readonly products$: Observable<any> = this._productService.getProduct();
}
