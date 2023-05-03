import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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

  public emptyValues = false;

  readonly form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    count: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern('^[0-9]+$')]),
    price: new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000000), Validators.pattern('^[0-9]+$')])
  });

  onFormSubmitted(form: FormGroup): void {
    this.emptyValues = form.get('name')?.value === '' && form.get('count')?.value === '' && form.get('price')?.value === '';

    if (!this.emptyValues && form.valid) {
      this._productService.saveProduct({
        name: form.get('name')?.value,
        count: form.get('count')?.value,
        price: form.get('price')?.value
      })
        .subscribe({
          next: () => {
            this._router.navigate(['/products'])
          },
          error: () => {
          }
        })
    }
  }
}
