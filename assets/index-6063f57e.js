import{_ as t}from"./iframe-18a35c02.js";import"./ToggleButton-d910effc.js";import{w as n}from"./withWebComponent-d4224c1c.js";import{B as o,b as a}from"./Button-86524f67.js";const e=n("ui5-toggle-button",["accessibleName","accessibleNameRef","design","icon","tooltip","type"],["pressed","disabled","iconEnd","submits"],[],["click"],()=>t(()=>import("./ToggleButton-d910effc.js"),["./ToggleButton-d910effc.js","./withWebComponent-d4224c1c.js","./utils-69f7a0e0.js","./CustomElementsScopeUtils-137da8c8.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./Icons-f64cf5a7.js","./UI5Element-3b11b083.js","./Device-99b8bbf4.js","./Button-86524f67.js","./Icon-9aa64f88.js","./slot-76e48863.js","./AriaLabelHelper-43a261ec.js","./MarkedEvents-b83081e9.js","./i18n-defaults-f002f496.js"],import.meta.url));e.displayName="ToggleButton";e.defaultProps={design:o.Default,type:a.Button};try{e.displayName="ToggleButton",e.__docgenInfo={description:'The `ToggleButton` component is an enhanced `Button` that can be toggled between pressed and normal states. Users can use the `ToggleButton` as a switch to turn a setting on or off. It can also be used to represent an independent choice similar to a check box.\n\nClicking or tapping on a `ToggleButton` changes its state to `pressed`. The button returns to its initial state when the user clicks or taps on it again. By applying additional custom CSS-styling classes, apps can give a different style to any `ToggleButton`.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ToggleButton" target="_blank">UI5 Web Components Storybook</ui5-link>',displayName:"ToggleButton",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ToggleButtonDomRef>"}},pressed:{defaultValue:null,description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},design:{defaultValue:{value:"ButtonDesign.Default"},description:"Defines the component design.\n\n**The available values are:**\n\n*   `Default`\n*   `Emphasized`\n*   `Positive`\n*   `Negative`\n*   `Transparent`\n*   `Attention`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`Defines the icon, displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons within the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,name:"icon",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},submits:{defaultValue:null,description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:"ButtonType.Button"},description:'Defines whether the button has special form-related functionality.\n\n**The available values are:**\n\n*   `Button`\n*   `Submit`\n*   `Reset`\n\n\n\n**Note:** For the `type` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as T};
//# sourceMappingURL=index-6063f57e.js.map
