import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {SingleProductComponent} from "../single-product/single-product.component";

@Component({
  selector: 'app-products-form',
  styleUrls: ['./products-form.component.scss'],
  templateUrl: './products-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductsFormComponent {
  public emptyValues = false;

  public productsForm: FormGroup | any;

  get productsArray(): FormArray {
    return this.productsForm?.get('singleProductForms') as FormArray;
  }

  constructor(private _productService: ProductService, private _router: Router) {}

  ngOnInit(): void {
    this.generateProductsForm();
  }

  public generateProductsForm (): void {
    this.productsForm = new FormGroup({
      singleProductForms: new FormArray([
        SingleProductComponent.addSingleProduct()
      ])
    })
  }

  public addSingleProductForm(): void {
    this.productsArray?.push(SingleProductComponent.addSingleProduct())
  }

  public deleteSingleProductForm(index: number): void {
    this.productsArray?.removeAt(index);
  }

  public submitProductsForm(): void {
    console.log(this.productsForm?.value.products)
    this._productService.saveProduct(this.productsForm!.value.products).subscribe()
  }
}
