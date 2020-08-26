import { Component } from '@angular/core';
import { Service, Status } from './app.service';

import validationEngine from "devextreme/ui/validation_engine";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
  employee: any;
  editorOptions: object;
  statuses: Status[];

  constructor(service: Service) {
    this.employee = {
        owner: "John Heart",
        status: 1
    }

    this.statuses = service.getStatuses();
  }

  validateClick(){
    let validationResult = validationEngine.validateGroup("formGroup");

    if (!validationResult.isValid)
        alert("dxForm is invalid");
  }
}
