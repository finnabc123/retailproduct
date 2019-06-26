import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryListComponent } from './category-list/category-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './category-list/product-list/product/product.component';
import { ProductDescriptionComponent } from './category-list/product-list/product-description/product-description.component';

const routes: Routes = [
  { path: '', component: CategoryListComponent }
];

@NgModule({
  declarations: [CategoryListComponent, ProductComponent, ProductDescriptionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductCategoriesModule { }
