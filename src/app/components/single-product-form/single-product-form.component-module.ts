import { NgModule } from '@angular/core';
import { SingleProductFormComponent } from './single-product-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule
  ],
  declarations: [SingleProductFormComponent],
  providers: [],
  exports: [SingleProductFormComponent]
})
export class SingleProductFormComponentModule {
}
