import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ProductsFormComponent } from './products-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {SingleProductFormComponentModule} from "../single-product-form/single-product-form.component-module";

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, ReactiveFormsModule, MatButtonModule, CommonModule, SingleProductFormComponentModule],
  declarations: [ProductsFormComponent],
  providers: [],
  exports: [ProductsFormComponent]
})
export class ProductsFormComponentModule {
}
