<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/290388689/25.1.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T926024)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# Form for DevExtreme - Declare DropDownBox in a Form item

This example illustrates how to declare a DropDownBox in an item using [templates](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template):

Here, a Form item includes a DropDownBox editor with an embedded DataGrid. To implement validation for the editor and the Form, add the following logic:
- Assign the same validationGroup to the Form and the DropDownBox's Validator. See [dxForm.validationGroup](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#validationGroup) and [dxValidator.validationGroup](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationGroup)
- Then, call the [DevExpress.validationEngine.validateGroup(group)](https://js.devexpress.com/Documentation/ApiReference/Common/Utils/validationEngine/#validateGroupgroup) method to validate the Form and the DropDownBox.

<div align="center"><img alt="Form for DevExtreme - Declare DropDownBox in a Form item" src="dx-form-declare-dropdownbox-in-a-form-item.png" /></div>

## Files to Review

- **Angular**
    - [app.component.html](Angular/src/app/app.component.html)
    - [app.component.ts](Angular/src/app/app.component.ts)
- **jQuery**
    - [index.html](jQuery/src/index.html)
    - [index.js](jQuery/src/index.js)
- **React**
    - [App.tsx](React/src/App.tsx)
- **Vue**
    - [HomeContent.vue](Vue/src/components/HomeContent.vue)
- **ASP.NET Core**    
    - [Index.cshtml](ASP.NET%20Core/Views/Home/Index.cshtml)

## Documentation

- [Getting Started with Form](https://js.devexpress.com/Documentation/Guide/UI_Components/Form/Getting_Started_with_Form/)

- [Form - API Reference](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxForm/)
 
- [Data Validation](https://js.devexpress.com/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/)
<!-- feedback -->
## Does This Example Address Your Development Requirements/Objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=devextreme-form-declare-dropdownbox-in-form-item&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=devextreme-form-declare-dropdownbox-in-form-item&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
