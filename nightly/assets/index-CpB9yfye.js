import{j as b}from"./jsx-runtime-CLpGMVip.js";import{o}from"./ValueState-Bg0UWejw.js";import{a as v,s as h,e as _}from"./sys-enter-2-XqI4eejo.js";import{i as f}from"./information-CuCY0lV7.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as y}from"./index-D23YZj_x.js";import{u as w,I as B,W as C,S as N,E as A}from"./i18n-defaults-CoZOvFer.js";import{u as I}from"./useStylesheet-DNyxTWaC.js";import{B as S}from"./index-_W3-l2LS.js";const x="@layer ui5-webcomponents-react{._btn_1y8oi_1{background:var(--sapButton_Information_Background);border-color:var(--sapButton_Information_BorderColor);color:var(--sapButton_Information_TextColor);text-shadow:var(--sapContent_TextShadow)}._btn_1y8oi_1::part(button):after{border-color:var(--sapContent_FocusColor)}._btn_1y8oi_1:hover{background:var(--sapButton_Information_Hover_Background);border-color:var(--sapButton_Information_Hover_BorderColor);color:var(--sapButton_Information_Hover_TextColor)}._btn_1y8oi_1:active{background:var(--sapButton_Information_Active_Background);border-color:var(--sapButton_Information_Active_BorderColor);color:var(--sapButton_Information_Active_TextColor)}._btn_1y8oi_1:active::part(button):after{border-color:var(--sapContent_FocusColor)}._btn_1y8oi_1[data-type=Negative]{background:var(--sapButton_Negative_Background);border-color:var(--sapButton_Negative_BorderColor);color:var(--sapButton_Negative_TextColor);text-shadow:var(--sapContent_ContrastTextShadow)}._btn_1y8oi_1[data-type=Negative]::part(button):after{border-color:var(--sapContent_ContrastFocusColor)}._btn_1y8oi_1[data-type=Negative]:hover{background:var(--sapButton_Negative_Hover_Background);border-color:var(--sapButton_Negative_Hover_BorderColor);color:var(--sapButton_Negative_Hover_TextColor)}._btn_1y8oi_1[data-type=Negative]:active{background:var(--sapButton_Negative_Active_Background);border-color:var(--sapButton_Negative_Active_BorderColor);color:var(--sapButton_Negative_Active_TextColor)}._btn_1y8oi_1[data-type=Negative]:active::part(button):after{border-color:var(--sapContent_FocusColor)}._btn_1y8oi_1[data-type=Critical]{background:var(--sapButton_Critical_Background);border-color:var(--sapButton_Critical_BorderColor);color:var(--sapButton_Critical_TextColor);text-shadow:var(--sapContent_ContrastTextShadow)}._btn_1y8oi_1[data-type=Critical]::part(button):after{border-color:var(--sapContent_ContrastFocusColor)}._btn_1y8oi_1[data-type=Critical]:hover{background:var(--sapButton_Critical_Hover_Background);border-color:var(--sapButton_Critical_Hover_BorderColor);color:var(--sapButton_Critical_Hover_TextColor)}._btn_1y8oi_1[data-type=Critical]:active{background:var(--sapButton_Critical_Active_Background);border-color:var(--sapButton_Critical_Active_BorderColor);color:var(--sapButton_Critical_Active_TextColor)}._btn_1y8oi_1[data-type=Critical]:active::part(button):after{border-color:var(--sapContent_FocusColor)}._btn_1y8oi_1[data-type=Positive]{background:var(--sapButton_Success_Background);border-color:var(--sapButton_Success_BorderColor);color:var(--sapButton_Success_TextColor);text-shadow:var(--sapContent_ContrastTextShadow)}._btn_1y8oi_1[data-type=Positive]::part(button):after{border-color:var(--sapContent_ContrastFocusColor)}._btn_1y8oi_1[data-type=Positive]:hover{background:var(--sapButton_Success_Hover_Background);border-color:var(--sapButton_Success_Hover_BorderColor);color:var(--sapButton_Success_Hover_TextColor)}._btn_1y8oi_1[data-type=Positive]:active{background:var(--sapButton_Success_Active_Background);border-color:var(--sapButton_Success_Active_BorderColor);color:var(--sapButton_Success_Active_TextColor)}._btn_1y8oi_1[data-type=Positive]:active::part(button):after{border-color:var(--sapContent_FocusColor)}}",k={btn:"_btn_1y8oi_1"},V=t=>{switch(t){case o.Negative:return{icon:_,i18nLabel:A};case o.Positive:return{icon:h,i18nLabel:N};case o.Critical:return{icon:v,i18nLabel:C};default:return{icon:f,i18nLabel:B}}},e=y.forwardRef((t,r)=>{const{type:n=o.Negative,counter:a,className:s,tooltip:l,accessibleName:c,...u}=t;I(x,e.displayName);const p=g(k.btn,s),{icon:d,i18nLabel:m}=V(n),i=w("@ui5/webcomponents-react").getText(m);return b.jsx(S,{ref:r,className:p,icon:d,...u,"data-type":n,tooltip:l??i,accessibleName:c??i,children:a>1&&a})});e.displayName="MessageViewButton";try{e.displayName="MessageViewButton",e.__docgenInfo={description:"The `MessageViewButton` can be used for opening a `Popover` containing the `MessageView` component. It should always reflect the message `type` with the highest severity.",displayName:"MessageViewButton",props:{type:{defaultValue:null,description:'Specifies the type of the button.\n\n__Note:__ `"None"` is displayed as `"Information"`.',name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'}]}},counter:{defaultValue:null,description:`Defines the number of messages for a given message type.

__Note:__ Numbers smaller than 2 are not displayed.`,name:"counter",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\`
property is set to \`true\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}}}}}catch{}try{e.displayName="MessageViewButton",e.__docgenInfo={description:"The `MessageViewButton` can be used for opening a `Popover` containing the `MessageView` component. It should always reflect the message `type` with the highest severity.",displayName:"MessageViewButton",props:{type:{defaultValue:null,description:'Specifies the type of the button.\n\n__Note:__ `"None"` is displayed as `"Information"`.',name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'}]}},counter:{defaultValue:null,description:`Defines the number of messages for a given message type.

__Note:__ Numbers smaller than 2 are not displayed.`,name:"counter",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\`
property is set to \`true\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}}}}}catch{}export{e as M};
