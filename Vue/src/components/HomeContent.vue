<script setup lang="ts">
import { ref, computed } from 'vue';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { type ButtonTypes } from 'devextreme-vue/button';
import { DxForm, DxItem } from 'devextreme-vue/form';
import DxDropDownBox from 'devextreme-vue/drop-down-box';
import { DxDataGrid, DxSelection, type DxDataGridTypes } from 'devextreme-vue/data-grid';
import {
  DxValidator,
  DxRequiredRule,
} from 'devextreme-vue/validator';
import validationEngine from 'devextreme/ui/validation_engine';
import { employee, statuses, type Employee } from '../data';
import notify from 'devextreme/ui/notify';

const dropDownBoxRef = ref<DxDropDownBox>(null);

const formData = ref<Employee>(employee);

const selectedRowKeys = computed(() => {
  const value = formData.value.status;
  return value !== null && value !== undefined ? [value] : [];
});

const onSelectionChanged = (e: DxDataGridTypes.SelectionChangedEvent) => {
  formData.value.status = e.selectedRowKeys[0];
  if (e.selectedRowKeys.length > 0) {
    dropDownBoxRef.value?.instance.close();
  }
};

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

</script>
<template>
  <div>
    <div class="long-title">
      <h3>Employee Details</h3>
    </div>
    <DxForm
      id="form"
      :form-data="formData"
      validation-group="formGroup"
    >
      <DxItem
        data-field="owner"
        :is-required="true"
      />
      <DxItem
        data-field="status"
        :is-required="true"
        template="statusTemplate"
      />
      <DxItem
        item-type="button"
        horizontal-alignment="left"
        :button-options="validateBtnOptions"
      />

      <template #statusTemplate>
        <DxDropDownBox
          ref="dropDownBoxRef"
          :data-source="statuses"
          v-model:value="formData.status"
          :show-clear-button="true"
          value-expr="id"
          display-expr="name"
        >
          <template #content>
            <DxDataGrid
              :data-source="statuses"
              :height="250"
              key-expr="id"
              :selected-row-keys="selectedRowKeys"
              :on-selection-changed="onSelectionChanged"
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
  </div>
</template>
