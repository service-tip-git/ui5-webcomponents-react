import{j as o,h,F as f,p as x,d as y,s as u,m as _,y as b,E as T}from"./jsx-runtime-BvNWHM6A.js";import{d as v}from"./slot-_4yKMUwC.js";import{d as w}from"./CustomElementsScope-lRvT7iCm.js";import{i as I}from"./i18n-CjR4HGlq.js";import{t as O}from"./willShowContent-CZcfsNXp.js";import{E as g,r as E}from"./i18n-defaults-B8cpOtV2.js";import{d as B}from"./parameters-bundle.css-BLEjIEH9.js";var c;(function(i){i.Off="Off",i.On="On"})(c||(c={}));function L(){return o(f,{children:o("span",{children:this._renderEmptyIndicator?h(f,{children:[o("span",{className:"empty-indicator","aria-hidden":"true",children:this._emptyIndicatorSymbol}),o("span",{className:"empty-indicator-aria-label",children:this._emptyIndicatorAriaLabel})]}):o("slot",{})})})}x("@ui5/webcomponents-theming","sap_horizon",async()=>y);x("@ui5/webcomponents","sap_horizon",async()=>B);const j=`:host{max-width:100%;font-size:var(--sapFontSize);font-family:var(--sapFontFamily);color:var(--sapTextColor);line-height:normal;cursor:text;overflow:hidden}:host([max-lines="1"]){display:inline-block;text-overflow:ellipsis;white-space:nowrap}:host(:not([max-lines="1"])){display:-webkit-box;-webkit-line-clamp:var(--_ui5-v2-9-0_text_max_lines);line-clamp:var(--_ui5-v2-9-0_text_max_lines);-webkit-box-orient:vertical;white-space:normal;word-wrap:break-word}.empty-indicator-aria-label{position:absolute!important;clip:rect(1px,1px,1px,1px);user-select:none;left:0;top:0;font-size:0}
`;var a=function(i,n,r,s){var p=arguments.length,e=p<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,r):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(i,n,r,s);else for(var d=i.length-1;d>=0;d--)(l=i[d])&&(e=(p<3?l(e):p>3?l(n,r,e):l(n,r))||e);return p>3&&e&&Object.defineProperty(n,r,e),e},m;let t=m=class extends T{constructor(){super(...arguments),this.maxLines=1/0,this.emptyIndicatorMode="Off"}onBeforeRendering(){this.style.setProperty(w("--_ui5_text_max_lines"),`${this.maxLines}`)}get hasText(){return O(this.text)}get _renderEmptyIndicator(){return!this.hasText&&this.emptyIndicatorMode===c.On}get _emptyIndicatorAriaLabel(){return m.i18nBundle.getText(g)}get _emptyIndicatorSymbol(){return m.i18nBundle.getText(E)}};a([u({type:Number})],t.prototype,"maxLines",void 0);a([u()],t.prototype,"emptyIndicatorMode",void 0);a([v({type:Node,default:!0})],t.prototype,"text",void 0);a([I("@ui5/webcomponents")],t,"i18nBundle",void 0);t=m=a([_({tag:"ui5-text",renderer:b,template:L,styles:j})],t);t.define();const P=t;export{P as T,c as a};
