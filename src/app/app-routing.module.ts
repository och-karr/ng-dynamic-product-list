import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: '', component: ProductFormComponent }]), ProductFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
