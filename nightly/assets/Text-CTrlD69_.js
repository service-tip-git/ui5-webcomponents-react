import{m as d,k as f,a as u,s as y,q as x,v as _,z as h,S as b}from"./withWebComponent-CEvNJu7C.js";import{d as v}from"./slot-_4yKMUwC.js";import"./utils-BPMdnTU-.js";import{i as T}from"./i18n-DEVDpFvK.js";import{t as I}from"./willShowContent-CZcfsNXp.js";import{E as w,o as g}from"./i18n-defaults-DteWAmDn.js";import{s as O}from"./parameters-bundle.css-DY1ryZJt.js";import{d as $}from"./useIsomorphicLayoutEffect-BE7Iif4x.js";var m;(function(t){t.Off="Off",t.On="On"})(m||(m={}));const E=m;function L(t,e,n){return d`<span>${this._renderEmptyIndicator?M.call(this,t,e,n):S.call(this,t,e,n)}</span>`}function M(t,e,n){return d`<span class="empty-indicator" aria-hidden="true">${f(this._emptyIndicatorSymbol)}</span><span class="empty-indicator-aria-label">${f(this._emptyIndicatorAriaLabel)}</span>`}function S(t,e,n){return d`<slot></slot>`}u("@ui5/webcomponents-theming","sap_horizon",async()=>y);u("@ui5/webcomponents","sap_horizon",async()=>O);const k={packageName:"@ui5/webcomponents",fileName:"themes/Text.css.ts",content:`:host{display:inline-block;max-width:100%;font-size:var(--sapFontSize);font-family:var(--sapFontFamily);color:var(--sapTextColor);line-height:normal;white-space:pre-line;word-wrap:break-word;cursor:text}:host([max-lines]){display:-webkit-box;-webkit-line-clamp:var(--_ui5-v2-5-1_text_max_lines);line-clamp:var(--_ui5-v2-5-1_text_max_lines);-webkit-box-orient:vertical;overflow:hidden;white-space:normal}.empty-indicator-aria-label{position:absolute!important;clip:rect(1px,1px,1px,1px);user-select:none;left:0;top:0;font-size:0}
`};var r=function(t,e,n,a){var s=arguments.length,o=s<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(p=t[c])&&(o=(s<3?p(o):s>3?p(e,n,o):p(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},l;let i=l=class extends b{constructor(){super(...arguments),this.maxLines=1/0,this.emptyIndicatorMode="Off"}onBeforeRendering(){this.style.setProperty($("--_ui5_text_max_lines"),`${this.maxLines}`)}get hasText(){return I(this.text)}get _renderEmptyIndicator(){return!this.hasText&&this.emptyIndicatorMode===E.On}get _emptyIndicatorAriaLabel(){return l.i18nBundle.getText(w)}get _emptyIndicatorSymbol(){return l.i18nBundle.getText(g)}};r([x({type:Number})],i.prototype,"maxLines",void 0);r([x()],i.prototype,"emptyIndicatorMode",void 0);r([v({type:Node,default:!0})],i.prototype,"text",void 0);r([T("@ui5/webcomponents")],i,"i18nBundle",void 0);i=l=r([_({tag:"ui5-text",renderer:h,template:L,styles:k})],i);i.define();const F=i;export{F as T};
