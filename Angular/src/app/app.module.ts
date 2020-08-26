import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  DxDropDownBoxModule,
  DxFormModule,
  DxDataGridModule,
  DxValidatorModule
} from 'devextreme-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxDropDownBoxModule,
    DxFormModule,
    DxDataGridModule,
    DxValidatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
