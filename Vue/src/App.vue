<template>
  <DxForm :form-data="employee" validation-group="formGroup">
      <DxItem data-field="Owner" />
      <DxItem data-field="Status" :is-required="true" template="statusTemplate" />
      <DxItem item-type="button" horizontal-alignment="left"
        :button-options="{ text: 'Validate', type: 'success', onClick: validateClick }" />

      <template #statusTemplate>
        <DxDropDownBox
          :data-source="statuses"
          :value.sync="employee.Status"
          :show-clear-button="true"
          value-expr="Id"
          display-expr="Name"
        >
          <template #content>
            <DxDataGrid
              :data-source="statuses"
              :height="250"
              key-expr="Id"
              :selected-row-keys.sync="employee.Status"
            >
              <DxSelection mode="single"/>
            </DxDataGrid>
          </template>

          <DxValidator validation-group="formGroup">
            <DxRequiredRule message="Status is required"/>
          </DxValidator>
        </DxDropDownBox>
      </template>
    </DxForm>
</template>

<script>
import { DxForm, DxItem } from 'devextreme-vue/form';
import DxDropDownBox from 'devextreme-vue/drop-down-box';
import { DxDataGrid, DxSelection } from 'devextreme-vue/data-grid';
import {
  DxValidator,
  DxRequiredRule,
} from 'devextreme-vue/validator';
import validationEngine from "devextreme/ui/validation_engine";
import service from './data.js';

export default  {
  name: "App",
  components: {
    DxForm,
    DxItem,
    DxValidator,
    DxRequiredRule,
    DxDataGrid, 
    DxSelection,
    DxDropDownBox
  },
  data() {
    return {
      employee: service.getEmployee(),
      statuses: service.getStatuses()
    };
  },
  methods: {
    validateClick() {
      let validationResult = validationEngine.validateGroup("formGroup");
      if (!validationResult.isValid)
          alert("dxForm is invalid");
      }
  }
};
</script>