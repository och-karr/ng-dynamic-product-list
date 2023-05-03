import { NgModule } from '@angular/core';
import { ProductsTableComponent } from './products-table.component';
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  declarations: [ProductsTableComponent],
  providers: [],
  exports: [ProductsTableComponent]
})
export class ProductsTableComponentModule {
}
