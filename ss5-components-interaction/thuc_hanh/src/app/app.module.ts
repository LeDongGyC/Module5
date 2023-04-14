import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardNameComponent } from './component/card-name/card-name.component';
import { ProcessBarComponent } from './component/process-bar/process-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardNameComponent,
    ProcessBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
