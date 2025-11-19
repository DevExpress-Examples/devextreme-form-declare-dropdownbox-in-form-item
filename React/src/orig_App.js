import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, { useState } from 'react';
import './App.css';
import service from './service'
import Form, { SimpleItem, RequiredRule, ButtonItem } from 'devextreme-react/form';
import DropDownBox from 'devextreme-react/drop-down-box';
import DataGrid, { Selection } from 'devextreme-react/data-grid';
import Validator from 'devextreme-react/validator'

import validationEngine from "devextreme/ui/validation_engine";
import notify from 'devextreme/ui/notify';

const statuses = service.getStatuses();
const initEmployee = {
  owner: "John Heart",
  status: 1
}
const validateBtnOptions = { 
  text: 'Validate', 
  ype: 'success', 
  onClick: validateClick 
}

function App() {
  const [employee, setEmployee] = useState(initEmployee)
  
  function onDropDownValueChanged(e) {
    const value = e.hasOwnProperty("value") ? e.value : e.selectedRowKeys[0];
    setEmployee(prevState => {
      return {
        ...prevState, 
        status: value
      }
    })
  }

  return (
    <div className="App">
      <Form formData={employee} validationGroup="formGroup">
        <SimpleItem dataField="owner">
          <RequiredRule />
        </SimpleItem>
        <SimpleItem dataField="status" isRequired={true}>
          <DropDownBox 
            dataSource={statuses} 
            value={employee.status} 
            showClearButton={true}
            valueExpr="id"
            displayExpr="name"
            onValueChanged={onDropDownValueChanged}>
              <DataGrid 
                dataSource={statuses}
                height={250}
                keyExpr="id"
                selectedRowKeys={[employee.status]}
                onSelectionChanged={onDropDownValueChanged}>
                  <Selection mode="single" />
              </DataGrid>
              <Validator validationGroup="formGroup">
                <RequiredRule message="Status is required" />
              </Validator>
          </DropDownBox>
        </SimpleItem>
        <ButtonItem horizontalAlignment="left" buttonOptions={validateBtnOptions}/>
      </Form>
    </div>
  );
}

export default App;

function validateClick(){
  let validationResult = validationEngine.validateGroup("formGroup");

  if (!validationResult.isValid)
    notify("The Form is invalid.", "error");
  else
    notify("Validation successful!", "success")
}
