import{_ as b}from"./iframe-57e6b318.js";import{r as u,U as g,n as v}from"./UI5Element-e590cd60.js";import{b as m,l as p,s as y,a as w,p as f,c as C,f as N,w as x}from"./withWebComponent-b4c67a1a.js";import{s as _}from"./slot-76e48863.js";import{g as T}from"./AriaLabelHelper-43a261ec.js";import{o as R}from"./class-map-e1b423a4.js";import{a as D}from"./Icon-b897d66f.js";import{h as L,i as A}from"./i18n-defaults-d5195a49.js";function I(o,e,t){return m`<div class="${R(this.classes.root)}" role="region" aria-label="${p(this._getAriaLabel)}">${this._hasHeader?S.call(this,o,e,t):void 0}<div role="group" aria-label="${p(this._ariaCardContentLabel)}"><slot></slot></div></div>`}function S(o,e,t){return m`<div class="ui5-card-header-root"><slot name="header"></slot></div>`}u("@ui5/webcomponents-theming","sap_fiori_3",async()=>y);u("@ui5/webcomponents","sap_fiori_3",async()=>w);const E={packageName:"@ui5/webcomponents",fileName:"themes/Card.css",content:'.ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host(:not([hidden])){display:inline-block;width:100%}.ui5-card-root{background:var(--sapTile_Background);border:var(--_ui5-v1-17-0_card_border);border-radius:var(--_ui5-v1-17-0_card_border-radius);box-shadow:var(--_ui5-v1-17-0_card_box_shadow);box-sizing:border-box;color:var(--sapGroup_TitleTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);height:100%;overflow:hidden;width:100%}.ui5-card-root.ui5-card--interactive:hover{box-shadow:var(--_ui5-v1-17-0_card_hover_box_shadow)}.ui5-card-root.ui5-card--interactive:active{box-shadow:var(--_ui5-v1-17-0_card_box_shadow)}.ui5-card-root.ui5-card--nocontent{height:auto}.ui5-card-root.ui5-card--nocontent .ui5-card-header-root{border-bottom:none}.ui5-card--nocontent ::slotted([ui5-card-header]){--_ui5-v1-17-0_card_header_focus_bottom_radius:var(--_ui5-v1-17-0_card_header_focus_radius)}.ui5-card-root .ui5-card-header-root{border-bottom:var(--_ui5-v1-17-0_card_header_border)}'};var i=globalThis&&globalThis.__decorate||function(o,e,t,s){var d=arguments.length,a=d<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,e,t,s);else for(var c=o.length-1;c>=0;c--)(l=o[c])&&(a=(d<3?l(a):d>3?l(e,t,a):l(e,t))||a);return d>3&&a&&Object.defineProperty(e,t,a),a},n;let r=n=class extends g{get classes(){return{root:{"ui5-card-root":!0,"ui5-card--interactive":this._hasHeader&&this.header[0].interactive,"ui5-card--nocontent":!this.content.length}}}get _hasHeader(){return!!this.header.length}get _getAriaLabel(){const e=T(this),t=e?` ${e}`:"";return n.i18nBundle.getText(L)+t}get _ariaCardContentLabel(){return n.i18nBundle.getText(A)}static async onDefine(){n.i18nBundle=await v("@ui5/webcomponents")}};i([f()],r.prototype,"accessibleName",void 0);i([f()],r.prototype,"accessibleNameRef",void 0);i([_({type:HTMLElement,default:!0})],r.prototype,"content",void 0);i([_({type:HTMLElement,invalidateOnChildChange:!0})],r.prototype,"header",void 0);r=n=i([C({tag:"ui5-card",languageAware:!0,renderer:N,template:I,styles:E,dependencies:[D]})],r);r.define();const O=r,k=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),h=x("ui5-card",["accessibleName","accessibleNameRef"],[],["header"],[],()=>b(()=>Promise.resolve().then(()=>k),void 0,import.meta.url));h.displayName="Card";try{h.displayName="Card",h.__docgenInfo={description:"The `Card` is a component that represents information in the form of a tile with separate header and content areas. The content area of a `Card` can be arbitrary HTML content. The header can be used through slot `header`. For which there is a `Card-header` component to achieve the card look and feel. Note: We recommend the usage of `Card-header` for the header slot, so advantage can be taken for keyboard handling, styling and accessibility.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Card)",displayName:"Card",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Use \`CardHeader\` for the intended design.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component, which is used as the name of the card region and should be unique per card. **Note:** `accessibleName` should be always set, unless `accessibleNameRef` is set.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{h as C};
//# sourceMappingURL=index-11aefe52.js.map
