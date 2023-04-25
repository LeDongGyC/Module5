import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryPageComponent} from './component/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './component/dictionary-detail/dictionary-detail.component';
import {ProductListComponent} from './component/product-list/product-list.component';
import {ProductCreateComponent} from './component/product-create/product-create.component';
import {ProductEditComponent} from './component/product-edit/product-edit.component';
import {ProductDeleteComponent} from './component/product-delete/product-delete.component';


const routes: Routes = [
  {path: 'dictionary', component: DictionaryPageComponent},
  {path: 'dictionary/detail/:id', component: DictionaryDetailComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},
  {path: 'product/delete/:id', component: ProductDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
