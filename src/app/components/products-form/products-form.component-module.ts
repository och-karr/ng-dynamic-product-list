import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ProductsFormComponent } from './products-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {SingleProductComponentModule} from "../single-product/single-product.component-module";

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, ReactiveFormsModule, MatButtonModule, CommonModule, SingleProductComponentModule],
  declarations: [ProductsFormComponent],
  providers: [],
  exports: [ProductsFormComponent]
})
export class ProductsFormComponentModule {
}
