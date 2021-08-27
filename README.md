<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/290388689/20.1.6%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T926024)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# Form - Declare DropDownBox in a Form item

This example illustrates how to declare a DropDownBox in an item using [templates](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template):

Here, a Form item includes a DropDownBox editor with an embedded DataGrid. To implement validation for the editor and the Form, add the following logic:
- Assign the same validationGroup to the Form and the DropDownBox's Validator. See [dxForm.validationGroup](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#validationGroup) and [dxValidator.validationGroup](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationGroup)
- Then, call the [DevExpress.validationEngine.validateGroup(group)](https://js.devexpress.com/Documentation/ApiReference/Common/Utils/validationEngine/#validateGroupgroup) method to validate the Form and the DropDownBox.

See also: 
[Data Validation](https://js.devexpress.com/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/)
