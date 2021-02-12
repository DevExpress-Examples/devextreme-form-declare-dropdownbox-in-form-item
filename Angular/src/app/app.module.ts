import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxDropDownBoxModule } from 'devextreme-angular/ui/drop-down-box';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxValidatorModule } from 'devextreme-angular/ui/validator';
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
