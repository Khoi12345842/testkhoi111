import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page/page1/page1.component';
import { Page2Component } from './page/page2/page2.component';
import { Page3Component } from './page/page3/page3.component';
import { Page1EditComponent } from './page/page1-edit/page1-edit.component';
import { Page1UpdateComponent } from './page/page1-update/page1-update.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page1EditComponent,
    Page1UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [Page1Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
