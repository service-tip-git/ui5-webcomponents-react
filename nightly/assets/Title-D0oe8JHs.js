import{j as t,F as m,p as H,d as z,s as f,m as v,I as w,e as g}from"./withWebComponent-DfVDXLfc.js";import{d as b}from"./parameters-bundle.css-BzaqQttB.js";var u;(function(e){e.H1="H1",e.H2="H2",e.H3="H3",e.H4="H4",e.H5="H5",e.H6="H6"})(u||(u={}));const o=u;function y(){return t(m,{children:x.call(this,this.level)})}function x(e){switch(e){case"H1":return t("h1",{class:"ui5-title-root",children:r.call(this)});case"H2":return t("h2",{class:"ui5-title-root",children:r.call(this)});case"H3":return t("h3",{class:"ui5-title-root",children:r.call(this)});case"H4":return t("h4",{class:"ui5-title-root",children:r.call(this)});case"H5":return t("h5",{class:"ui5-title-root",children:r.call(this)});case"H6":return t("h6",{id:`${this._id}-inner`,class:"ui5-title-root",children:r.call(this)});default:return t("h2",{class:"ui5-title-root",children:r.call(this)})}}function r(){return t("span",{id:`${this._id}-inner`,children:t("slot",{})})}H("@ui5/webcomponents-theming","sap_horizon",async()=>z);H("@ui5/webcomponents","sap_horizon",async()=>b);const F=`:host(:not([hidden])){display:block;cursor:text}:host{max-width:100%;color:var(--sapGroup_TitleTextColor);font-size:var(--sapFontHeader5Size);font-family:"72override",var(--sapFontHeaderFamily);text-shadow:var(--sapContent_TextShadow)}.ui5-title-root{display:inline-block;position:relative;font-weight:400;font-size:inherit;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;max-width:100%;vertical-align:bottom;-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0;margin:0;cursor:inherit}:host{white-space:pre-line}:host([wrapping-type="None"]){white-space:nowrap}.ui5-title-root,:host ::slotted(*){white-space:inherit}::slotted(*){font-size:inherit;font-family:inherit;text-shadow:inherit}:host([size="H1"]){font-size:var(--sapFontHeader1Size)}:host([size="H2"]){font-size:var(--sapFontHeader2Size)}:host([size="H3"]){font-size:var(--sapFontHeader3Size)}:host([size="H4"]){font-size:var(--sapFontHeader4Size)}:host([size="H5"]){font-size:var(--sapFontHeader5Size)}:host([size="H6"]){font-size:var(--sapFontHeader6Size)}
`;var d=function(e,s,a,l){var h=arguments.length,i=h<3?s:l===null?l=Object.getOwnPropertyDescriptor(s,a):l,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,s,a,l);else for(var p=e.length-1;p>=0;p--)(c=e[p])&&(i=(h<3?c(i):h>3?c(s,a,i):c(s,a))||i);return h>3&&i&&Object.defineProperty(s,a,i),i};let n=class extends w{constructor(){super(...arguments),this.wrappingType="Normal",this.level="H2",this.size="H5"}get h1(){return this.level===o.H1}get h2(){return this.level===o.H2}get h3(){return this.level===o.H3}get h4(){return this.level===o.H4}get h5(){return this.level===o.H5}get h6(){return this.level===o.H6}};d([f()],n.prototype,"wrappingType",void 0);d([f()],n.prototype,"level",void 0);d([f()],n.prototype,"size",void 0);n=d([v({tag:"ui5-title",renderer:g,template:y,styles:F})],n);n.define();const j=n;export{o as T,j as a};
