import{j as m,h,p as d,d as g,s as p,m as f,e as _}from"./jsx-runtime-BvNWHM6A.js";import{c}from"./ListItemGroup-C3tzOU6R.js";import{L as x}from"./ListItemBaseTemplate-DA38wX0G.js";import{d as b}from"./parameters-bundle.css-BLEjIEH9.js";function v(){return[x.call(this,{listItemContent:T},{role:"option"})]}function T(){return m("div",{part:"content",id:"content",class:"ui5-li-content",children:h("div",{class:"ui5-li-text-wrapper",children:[m("span",{part:"title",className:"ui5-li-title",dangerouslySetInnerHTML:{__html:this.markupText}}),this.additionalText&&m("span",{part:"additional-text",class:"ui5-li-additional-text",children:this.additionalText})]})})}d("@ui5/webcomponents-theming","sap_horizon",async()=>g);d("@ui5/webcomponents","sap_horizon",async()=>b);const y=`:host([ui5-suggestion-item]){height:auto;min-height:var(--_ui5-v2-9-0_list_item_base_height)}:host([ui5-suggestion-item]) .ui5-li-root{min-height:var(--_ui5-v2-9-0_list_item_base_height)}:host([ui5-suggestion-item]) .ui5-li-content{padding-bottom:.875rem;padding-top:.875rem;box-sizing:border-box}
`;var l=function(o,i,n,s){var a=arguments.length,t=a<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,i,n,s);else for(var u=o.length-1;u>=0;u--)(r=o[u])&&(t=(a<3?r(t):a>3?r(i,n,t):r(i,n))||t);return a>3&&t&&Object.defineProperty(i,n,t),t};let e=class extends c{constructor(){super(...arguments),this.markupText=""}onEnterDOM(){_()&&this.setAttribute("desktop","")}get _effectiveTabIndex(){return-1}};l([p()],e.prototype,"text",void 0);l([p()],e.prototype,"additionalText",void 0);l([p()],e.prototype,"markupText",void 0);e=l([f({tag:"ui5-suggestion-item",template:v,styles:[c.styles,y]})],e);e.define();const O=e;export{O as S};
