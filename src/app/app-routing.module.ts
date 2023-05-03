import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductsTableComponentModule } from './components/products-table/products-table.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: '', component: ProductFormComponent }, { path: 'products', component: ProductsTableComponent }]), ProductFormComponentModule, ProductsTableComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
