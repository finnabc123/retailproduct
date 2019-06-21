import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

@NgModule({
  declarations: [ProductComponent, ProductDescriptionComponent],
  imports: [
    CommonModule
  ]
})
export class ProductListModule { }
