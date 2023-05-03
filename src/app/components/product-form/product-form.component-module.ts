import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ProductFormComponent } from './product-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, ReactiveFormsModule],
  declarations: [ProductFormComponent],
  providers: [],
  exports: [ProductFormComponent]
})
export class ProductFormComponentModule {
}
