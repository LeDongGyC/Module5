import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryPageComponent } from './component/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './component/dictionary-detail/dictionary-detail.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductCreateComponent } from './component/product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductDeleteComponent } from './component/product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
