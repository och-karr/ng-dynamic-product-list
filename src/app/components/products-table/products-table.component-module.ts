import { NgModule } from '@angular/core';
import { ProductsTableComponent } from './products-table.component';
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule
    ],
  declarations: [ProductsTableComponent],
  providers: [],
  exports: [ProductsTableComponent]
})
export class ProductsTableComponentModule {
}
