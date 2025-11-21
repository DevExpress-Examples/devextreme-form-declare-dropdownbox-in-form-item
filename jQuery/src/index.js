$(() => {
  $('#form').dxForm({
    formData: employee,
    validationGroup: 'formGroup',
    items: [{
      dataField: 'owner',
      isRequired: true,
    }, {
      dataField: 'status',
      isRequired: true,
      template: (data, itemElement) => {
        $('<div>')
          .dxDropDownBox({
            dataSource: statuses,
            value: data.component.option('formData')[data.dataField],
            showClearButton: true,
            onValueChanged: (e) => {
              data.component.updateData(data.dataField, e.value);
            },
            contentTemplate: ({ component, value }) => $('<div>').dxDataGrid({
              dataSource: component.option('dataSource'),
              height: 250,
              keyExpr: 'id',
              selection: { mode: 'single' },
              selectedRowKeys: [value],
              onSelectionChanged: (e) => {
                component.option('value', e.selectedRowKeys[0]);
                component.close();
              },
            }),
            valueExpr: 'id',
            displayExpr: 'name',
          })
          .dxValidator({
            validationGroup: 'formGroup',
            validationRules: [{ type: 'required', message: 'Status is required' }],
          })
          .appendTo(itemElement);
      },
    },
    {
      itemType: 'button',
      horizontalAlignment: 'left',
      buttonOptions: {
        text: 'Validate',
        type: 'success',
        onClick: (e) => {
          const validationResult = DevExpress.validationEngine.validateGroup('formGroup');
          if (validationResult.isValid) {
            DevExpress.ui.notify('Validation successful!', 'success');
          } else {
            const errorText = validationResult.brokenRules
              .map((rule) => rule.message)
              .join('; ');
            DevExpress.ui.notify(`The form is invalid: ${errorText}`, 'error');
          }
        },
      },
    }],
  });
});
