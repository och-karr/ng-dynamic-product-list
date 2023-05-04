import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsFormComponentModule } from './components/products-form/products-form.component-module';
import { ProductsTableComponentModule } from './components/products-table/products-table.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: '', component: ProductsFormComponent }, { path: 'products', component: ProductsTableComponent }]), ProductsFormComponentModule, ProductsTableComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
