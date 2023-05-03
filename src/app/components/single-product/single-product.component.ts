import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-single-product',
  styleUrls: ['./single-product.component.scss'],
  templateUrl: './single-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleProductComponent {

  @Input()
  public childForm: FormGroup | any;

  @Input()
  public arrayIndex: number | any;

  @Input()
  public totalProducts: number | any;

  @Output()
  public deleteProductFormEvent: EventEmitter<number> = new EventEmitter<number>();

  get nameField(): FormControl {
    return this.childForm?.get('name') as FormControl;
  }

  get countField(): FormControl {
    return this.childForm?.get('count') as FormControl;
  }

  get priceField(): FormControl {
    return this.childForm?.get('price') as FormControl;
  }

  static addSingleProduct(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      count: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern('^[0-9]+$')]),
      price: new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000000), Validators.pattern('^[0-9]+$')])
    })
  }

  public deleteProductForm(index: number): void {
    this.deleteProductFormEvent.next(index);
  }
}
