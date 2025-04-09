import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{i as g}from"./Person-Bk5r7PMP.js";import{a as v}from"./add-CxlYyNlV.js";import{s as w}from"./search-moseU2-o.js";import{S}from"./index-DnPHDOfe.js";import{s as p,m as I,E as _,w as x}from"./jsx-runtime-BvNWHM6A.js";import{l as D}from"./event-strict-DgQLNDEV.js";import{I as C}from"./index-CKougW6p.js";import{I as A}from"./index-elx_RAHi.js";import{L as h}from"./index-6hO-k-1p.js";import{A as B}from"./index-DGjbv2L7.js";var l=function(i,t,s,c){var u=arguments.length,n=u<3?t:c===null?c=Object.getOwnPropertyDescriptor(t,s):c,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,s,c);else for(var d=i.length-1;d>=0;d--)(m=i[d])&&(n=(u<3?m(n):u>3?m(t,s,n):m(t,s))||n);return u>3&&n&&Object.defineProperty(t,s,n),n};let o=class extends _{constructor(){super(...arguments),this.accessibilityAttributes={}}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}fireClickEvent(t){return this.fireDecoratorEvent("click",{targetRef:t.target})}};l([p()],o.prototype,"icon",void 0);l([p()],o.prototype,"text",void 0);l([p()],o.prototype,"count",void 0);l([p({type:Object})],o.prototype,"accessibilityAttributes",void 0);o=l([I("ui5-shellbar-item"),D("click",{bubbles:!0,cancelable:!0})],o);o.define();const r=x("ui5-shellbar-item",["accessibilityAttributes","count","icon","text"],[],[],["click"]);r.displayName="ShellBarItem";try{r.displayName="ShellBarItem",r.__docgenInfo={description:`The \`ShellBarItem\` represents a custom item, that
might be added to the \`ShellBar\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ShellBarItem",props:{onClick:{defaultValue:null,description:`Fired, when the item is pressed.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarItemDomRef, ShellBarItemClickEventDetail>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines additional accessibility attributes on Shellbar Items.

The accessibility attributes support the following values:

- **expanded**: Indicates whether the button, or another grouping element it controls,
is currently expanded or collapsed.
Accepts the following string values: \`true\` or \`false\`.

- **hasPopup**: Indicates the availability and type of interactive popup element,
such as menu or dialog, that can be triggered by the button.

- **controls**: Identifies the element (or elements) whose contents
or presence are controlled by the component.
Accepts a lowercase string value, referencing the ID of the element it controls.

**Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-fiori**.`,name:"accessibilityAttributes",required:!1,type:{name:"ShellBarItemAccessibilityAttributes"}},count:{defaultValue:{value:"undefined"},description:"Defines the count displayed in the top-right corner.",name:"count",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:"Defines the name of the item's icon.",name:"icon",required:!1,type:{name:"string"}},text:{defaultValue:{value:"undefined"},description:`Defines the item text.

  **Note:** The text is only displayed inside the overflow popover list view.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="ShellBarItem",r.__docgenInfo={description:`The \`ShellBarItem\` represents a custom item, that
might be added to the \`ShellBar\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ShellBarItem",props:{onClick:{defaultValue:null,description:`Fired, when the item is pressed.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarItemDomRef, ShellBarItemClickEventDetail>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines additional accessibility attributes on Shellbar Items.

The accessibility attributes support the following values:

- **expanded**: Indicates whether the button, or another grouping element it controls,
is currently expanded or collapsed.
Accepts the following string values: \`true\` or \`false\`.

- **hasPopup**: Indicates the availability and type of interactive popup element,
such as menu or dialog, that can be triggered by the button.

- **controls**: Identifies the element (or elements) whose contents
or presence are controlled by the component.
Accepts a lowercase string value, referencing the ID of the element it controls.

**Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-fiori**.`,name:"accessibilityAttributes",required:!1,type:{name:"ShellBarItemAccessibilityAttributes"}},count:{defaultValue:{value:"undefined"},description:"Defines the count displayed in the top-right corner.",name:"count",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:"Defines the name of the item's icon.",name:"icon",required:!1,type:{name:"string"}},text:{defaultValue:{value:"undefined"},description:`Defines the item text.

  **Note:** The text is only displayed inside the overflow popover list view.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Layouts & Floorplans / ShellBar",component:S,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(B,{children:e.jsx("img",{src:g})}),menuItems:e.jsxs(e.Fragment,{children:[e.jsx(h,{"data-key":"1",children:"Menu Item 1"}),e.jsx(h,{"data-key":"2",children:"Menu Item 2"}),e.jsx(h,{"data-key":"3",children:"Menu Item 3"})]}),searchField:e.jsx(C,{showClearIcon:!0,icon:e.jsx(A,{name:w})}),notificationsCount:"10",primaryTitle:"Shell Bar",secondaryTitle:"Secondary Title",showNotifications:!0,showProductSwitch:!0,children:e.jsx(r,{count:"3",text:"ShellBarItem",icon:v})},tags:["package:@ui5/webcomponents-fiori"]},a={};var f,b,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const j=["Default"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:j,default:N},Symbol.toStringTag,{value:"Module"}));export{W as C,a as D,r as S};
