import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  constructor(private _productService: ProductService, private _router: Router) {}

  readonly form: FormGroup = new FormGroup({
    name: new FormControl(''),
    count: new FormControl(''),
    price: new FormControl('')
  });

  onFormSubmitted(form: FormGroup): void {
    this._productService.saveProduct({
      name: form.get('name')?.value,
      count: form.get('count')?.value,
      price: form.get('price')?.value
    })
      .subscribe({
        next: () => {
          this._router.navigate(['/'])
        },
        error: () => {
        }
      })
  }
}
