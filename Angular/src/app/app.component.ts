import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  DxDataGridModule,
  DxDropDownBoxComponent,
  DxDropDownBoxModule,
  DxFormModule,
  DxValidatorModule,
} from 'devextreme-angular';
import validationEngine from 'devextreme/ui/validation_engine';
import notify from 'devextreme/ui/notify';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { DxFormTypes } from 'devextreme-angular/ui/form';
import { Employee, Service, Status } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [DxFormModule, DxDropDownBoxModule, DxDataGridModule, DxValidatorModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [Service],
})
export class AppComponent {
  employee: Employee;

  statuses: Status[];

  constructor(service: Service) {
    this.employee = service.getEmployee();
    this.statuses = service.getStatuses();
  }

  validateClick(): void {
    const validationResult = validationEngine.validateGroup('formGroup');
    if (validationResult.isValid) {
      notify('Validation successful!', 'success');
    } else if (validationResult.brokenRules) {
      const errorText = validationResult.brokenRules
        .map((rule) => rule.message)
        .join('; ');
      notify(`The form is invalid: ${errorText}`, 'error');
    }
  }

  getSelectedRowKeys<T>(value: T): T[] {
    return value !== null && value !== undefined ? [value] : [];
  }

  gridSelectionChanged(e: DxDataGridTypes.SelectionChangedEvent, editor: DxDropDownBoxComponent, itemInfo: DxFormTypes.SimpleItemTemplateData): void {
    if (itemInfo.dataField && e.selectedRowKeys.length > 0) {
      itemInfo.component.instance().updateData(itemInfo.dataField, e.selectedRowKeys[0]);
    }
    editor.instance.close();
  }
}
