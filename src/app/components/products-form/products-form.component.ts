import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { SingleProductFormComponent } from '../single-product-form/single-product-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-form',
  styleUrls: ['./products-form.component.scss'],
  templateUrl: './products-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductsFormComponent {
  public productsForm: FormGroup | any;

  private _isFormValidSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public isFormValid$: Observable<boolean> = this._isFormValidSubject.asObservable();

  constructor(private _productService: ProductService, private _router: Router) {
    this.generateProductsForm();
  }

  get productsArray(): FormArray {
    return this.productsForm?.get('singleProductForms') as FormArray;
  }

  public generateProductsForm(): void {
    this.productsForm = new FormGroup({
      singleProductForms: new FormArray([
        SingleProductFormComponent.addSingleProduct()
      ])
    })
  }

  public addSingleProductForm(): void {
    this.productsArray?.push(SingleProductFormComponent.addSingleProduct())
  }

  public deleteSingleProductForm(index: number): void {
    this.productsArray?.removeAt(index);
  }

  public submitProductsForm(form: FormGroup): void {
    this._isFormValidSubject.next(false);

    if (form.valid) {
      this._isFormValidSubject.next(true);
      this._productService.saveProduct(form.value.singleProductForms)
        .subscribe({
          next: () => {
            this._router.navigate(['/products'])
          },
          error: () => {}
        })
    } else {
      this._isFormValidSubject.next(false);
    }
  }
}
