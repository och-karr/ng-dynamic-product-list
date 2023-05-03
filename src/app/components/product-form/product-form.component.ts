import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  form: any;

  onFormSubmitted(form: any) {
    
  }
}
