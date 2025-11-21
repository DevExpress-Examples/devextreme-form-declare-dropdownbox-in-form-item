import {
  useCallback, useMemo, useRef, useState,
} from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Form, { SimpleItem, RequiredRule, ButtonItem } from 'devextreme-react/form';
import DropDownBox, { type DropDownBoxRef, type DropDownBoxTypes } from 'devextreme-react/drop-down-box';
import { type ButtonTypes } from 'devextreme-react/button';
import DataGrid, { Selection, type DataGridTypes } from 'devextreme-react/data-grid';
import Validator from 'devextreme-react/validator';
import validationEngine from 'devextreme/ui/validation_engine';
import notify from 'devextreme/ui/notify';
import { employee as initEmployee, statuses, type Employee } from './data';

const validateBtnOptions: ButtonTypes.Properties = {
  text: 'Validate',
  elementAttr: { id: 'button' },
  type: 'success',
  onClick: () => {
    const validationResult = validationEngine.validateGroup('formGroup');
    if (validationResult.isValid) {
      notify('Validation successful!', 'success');
    } else if (validationResult.brokenRules) {
      const errorText = validationResult.brokenRules
        .map((rule) => rule.message)
        .join('; ');
      notify(`The form is invalid: ${errorText}`, 'error');
    }
  },
};

function App(): JSX.Element {
  const dropDownBoxRef = useRef<DropDownBoxRef>(null);

  const [employee, setEmployee] = useState<Employee>(initEmployee);

  const selectedRowKeys = useMemo(() => (employee.status !== null && employee.status !== undefined ? [employee.status] : []), [employee]);

  const onDropDownValueChanged = useCallback((e: DropDownBoxTypes.ValueChangedEvent): void => {
    setEmployee((prevState) => ({
      ...prevState,
      status: e.value,
    }));
  }, [setEmployee]);

  const onGridSelectionChanged = useCallback((e: DataGridTypes.SelectionChangedEvent): void => {
    setEmployee((prevState) => ({
      ...prevState,
      status: e.selectedRowKeys[0],
    }));
    dropDownBoxRef.current?.instance().close();
  }, [setEmployee]);

  return (
    <div className='main'>
      <Form id='form' formData={employee} validationGroup='formGroup'>
        <SimpleItem dataField='owner' isRequired={true}>
        </SimpleItem>
        <SimpleItem dataField='status' isRequired={true}>
          <DropDownBox
            ref={dropDownBoxRef}
            dataSource={statuses}
            value={employee.status}
            showClearButton={true}
            valueExpr='id'
            displayExpr='name'
            onValueChanged={onDropDownValueChanged}>
            <DataGrid
              dataSource={statuses}
              height={250}
              keyExpr='id'
              selectedRowKeys={selectedRowKeys}
              onSelectionChanged={onGridSelectionChanged}>
              <Selection mode='single' />
            </DataGrid>
            <Validator validationGroup='formGroup'>
              <RequiredRule message='Status is required' />
            </Validator>
          </DropDownBox>
        </SimpleItem>
        <ButtonItem horizontalAlignment='left' buttonOptions={validateBtnOptions} />
      </Form>
    </div>
  );
}

export default App;
