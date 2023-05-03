import { NgModule } from '@angular/core';
import { SingleProductComponent } from './single-product.component';
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
  declarations: [SingleProductComponent],
  providers: [],
  exports: [SingleProductComponent]
})
export class SingleProductComponentModule {
}
