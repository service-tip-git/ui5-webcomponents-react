import{r as S,U as T,E,n as H}from"./UI5Element-9ae3ac4a.js";import{e as P,i as j,t as F,b as M,l as _,g as $,s as U,a as L,p as v,c as V,f as q}from"./withWebComponent-70ea33bf.js";import{l as Y,k as D,R as z,S as G}from"./Icons-aa504494.js";import{L as J,x as Q}from"./utils-eb830979.js";var I;(function(e){e.Contrast="Contrast",e.Critical="Critical",e.Default="Default",e.Information="Information",e.Negative="Negative",e.Neutral="Neutral",e.NonInteractive="NonInteractive",e.Positive="Positive"})(I||(I={}));const k=I,W=(e,i={})=>t=>{Object.prototype.hasOwnProperty.call(t,"metadata")||(t.metadata={});const n=t.metadata;n.events||(n.events={});const s=n.events;s[e]||(s[e]=i)};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:K}=J,O=()=>document.createComment(""),A=(e,i,t)=>{var n;const s=e._$AA.parentNode,o=i===void 0?e._$AB:i._$AA;if(t===void 0){const a=s.insertBefore(O(),o),r=s.insertBefore(O(),o);t=new K(a,r,e,e.options)}else{const a=t._$AB.nextSibling,r=t._$AM,m=r!==e;if(m){let u;(n=t._$AQ)===null||n===void 0||n.call(t,e),t._$AM=e,t._$AP!==void 0&&(u=e._$AU)!==r._$AU&&t._$AP(u)}if(a!==o||m){let u=t._$AA;for(;u!==a;){const y=u.nextSibling;s.insertBefore(u,o),u=y}}}return t},g=(e,i,t=e)=>(e._$AI(i,t),e),X={},Z=(e,i=X)=>e._$AH=i,ee=e=>e._$AH,w=e=>{var i;(i=e._$AP)===null||i===void 0||i.call(e,!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const s=t.nextSibling;t.remove(),t=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=(e,i,t)=>{const n=new Map;for(let s=i;s<=t;s++)n.set(e[s],s);return n},te=P(class extends j{constructor(e){if(super(e),e.type!==F.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,i,t){let n;t===void 0?t=i:i!==void 0&&(n=i);const s=[],o=[];let a=0;for(const r of e)s[a]=n?n(r,a):a,o[a]=t(r,a),a++;return{values:o,keys:s}}render(e,i,t){return this.ht(e,i,t).values}update(e,[i,t,n]){var s;const o=ee(e),{values:a,keys:r}=this.ht(i,t,n);if(!Array.isArray(o))return this.ut=r,a;const m=(s=this.ut)!==null&&s!==void 0?s:this.ut=[],u=[];let y,C,l=0,f=o.length-1,c=0,h=a.length-1;for(;l<=f&&c<=h;)if(o[l]===null)l++;else if(o[f]===null)f--;else if(m[l]===r[c])u[c]=g(o[l],a[c]),l++,c++;else if(m[f]===r[h])u[h]=g(o[f],a[h]),f--,h--;else if(m[l]===r[h])u[h]=g(o[l],a[h]),A(e,u[h+1],o[l]),l++,h--;else if(m[f]===r[c])u[c]=g(o[f],a[c]),A(e,o[l],o[f]),f--,c++;else if(y===void 0&&(y=B(r,c,h),C=B(m,l,f)),y.has(m[l]))if(y.has(m[f])){const b=C.get(r[c]),N=b!==void 0?o[b]:null;if(N===null){const x=A(e,o[l]);g(x,a[c]),u[c]=x}else u[c]=g(N,a[c]),A(e,o[l],N),o[b]=null;c++}else w(o[f]),f--;else w(o[l]),l++;for(;c<=h;){const b=A(e,u[h+1]);g(b,a[c]),u[c++]=b}for(;l<=f;){const b=o[l++];b!==null&&w(b)}return this.ut=r,Z(e,u),Q}});function ie(e,i,t){return M`<svg class="ui5-icon-root" part="root" tabindex="${_(this._tabIndex)}" dir="${_(this._dir)}" viewBox="${_(this.viewBox)}" role="${_(this.effectiveAccessibleRole)}" focusable="false" preserveAspectRatio="xMidYMid meet" aria-label="${_(this.effectiveAccessibleName)}" aria-hidden=${_(this.effectiveAriaHidden)} xmlns="http://www.w3.org/2000/svg" @focusin=${this._onfocusin} @focusout=${this._onfocusout} @keydown=${this._onkeydown} @keyup=${this._onkeyup}>${ae.call(this,e,i,t)}</svg>`}function oe(e,i,t){return $`<title id="${_(this._id)}-tooltip">${_(this.effectiveAccessibleName)}</title>`}function ne(e,i,t){return $`${_(this.customSvg)}`}function se(e,i,t,n,s){return $`<path d="${_(n)}"></path>`}function ae(e,i,t){return $`${this.hasIconTooltip?oe.call(this,e,i,t):void 0}<g role="presentation">${this.customSvg?ne.call(this,e,i,t):void 0}${te(this.pathData,(n,s)=>n._id||s,(n,s)=>se.call(this,e,i,t,n,s))}</g>`}S("@ui5/webcomponents-theming","sap_fiori_3",async()=>U);S("@ui5/webcomponents","sap_fiori_3",async()=>L);const re={packageName:"@ui5/webcomponents",fileName:"themes/Icon.css",content:":host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([hidden]){display:none}:host([invalid]){display:none}:host(:not([hidden]).ui5_hovered){opacity:.7}:host{fill:currentColor;color:var(--sapContent_NonInteractiveIconColor);display:inline-block;height:1rem;outline:none;width:1rem}:host([design=Contrast]){color:var(--sapContent_ContrastIconColor)}:host([design=Critical]){color:var(--sapCriticalElementColor)}:host([design=Default]){color:var(--sapContent_IconColor)}:host([design=Information]){color:var(--sapInformativeElementColor)}:host([design=Negative]){color:var(--sapNegativeElementColor)}:host([design=Neutral]){color:var(--sapNeutralElementColor)}:host([design=NonInteractive]){color:var(--sapContent_NonInteractiveIconColor)}:host([design=Positive]){color:var(--sapPositiveElementColor)}:host([interactive][focused]) .ui5-icon-root{border-radius:var(--ui5-v1-18-0-icon-focus-border-radius);outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor)}.ui5-icon-root{display:flex;height:100%;outline:none;vertical-align:top;width:100%}:host([interactive]){cursor:pointer}.ui5-icon-root:not([dir=ltr]){transform:var(--_ui5-v1-18-0_icon_transform_scale);transform-origin:center}"};var p=globalThis&&globalThis.__decorate||function(e,i,t,n){var s=arguments.length,o=s<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,i,t,n);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(o=(s<3?a(o):s>3?a(i,t,o):a(i,t))||o);return s>3&&o&&Object.defineProperty(i,t,o),o};const le="ICON_NOT_FOUND",R="presentation";let d=class extends T{_onFocusInHandler(){this.interactive&&(this.focused=!0)}_onFocusOutHandler(){this.focused=!1}_onkeydown(i){this.interactive&&(Y(i)&&this.fireEvent("click"),D(i)&&i.preventDefault())}_onkeyup(i){this.interactive&&D(i)&&this.fireEvent("click")}get _dir(){return this.ltr?"ltr":void 0}get effectiveAriaHidden(){return this.ariaHidden===""?this.isDecorative?!0:void 0:this.ariaHidden}get _tabIndex(){return this.interactive?"0":void 0}get isDecorative(){return this.effectiveAccessibleRole===R}get effectiveAccessibleRole(){return this.accessibleRole?this.accessibleRole:this.interactive?"button":this.effectiveAccessibleName?"img":R}async onBeforeRendering(){const i=this.name;if(!i)return console.warn("Icon name property is required",this);let t=z(i);if(t||(t=await G(i)),!t)return this.invalid=!0,console.warn(`Required icon is not registered. Invalid icon name: ${this.name}`);if(t===le)return this.invalid=!0,console.warn(`Required icon is not registered. You can either import the icon as a module in order to use it e.g. "@ui5/webcomponents-icons/dist/${i.replace("sap-icon://","")}.js", or setup a JSON build step and import "@ui5/webcomponents-icons/dist/AllIcons.js".`);if(this.viewBox=t.viewBox||"0 0 512 512",t.customTemplate&&(t.pathData=[],this.customSvg=E(t.customTemplate,this)),this.invalid=!1,this.pathData=Array.isArray(t.pathData)?t.pathData:[t.pathData],this.accData=t.accData,this.ltr=t.ltr,this.packageName=t.packageName,this._onfocusout=this.interactive?this._onFocusOutHandler.bind(this):void 0,this._onfocusin=this.interactive?this._onFocusInHandler.bind(this):void 0,this.accessibleName)this.effectiveAccessibleName=this.accessibleName;else if(this.accData){const n=await H(this.packageName);this.effectiveAccessibleName=n.getText(this.accData)||void 0}else this.effectiveAccessibleName=void 0}get hasIconTooltip(){return this.showTooltip&&this.effectiveAccessibleName}};p([v({type:k,defaultValue:k.Default})],d.prototype,"design",void 0);p([v({type:Boolean})],d.prototype,"interactive",void 0);p([v()],d.prototype,"name",void 0);p([v()],d.prototype,"accessibleName",void 0);p([v({type:Boolean})],d.prototype,"showTooltip",void 0);p([v()],d.prototype,"accessibleRole",void 0);p([v()],d.prototype,"ariaHidden",void 0);p([v({multiple:!0})],d.prototype,"pathData",void 0);p([v({type:Object,defaultValue:void 0,noAttribute:!0})],d.prototype,"accData",void 0);p([v({type:Boolean})],d.prototype,"focused",void 0);p([v({type:Boolean})],d.prototype,"invalid",void 0);p([v({noAttribute:!0,defaultValue:void 0})],d.prototype,"effectiveAccessibleName",void 0);d=p([V({tag:"ui5-icon",languageAware:!0,themeAware:!0,renderer:q,template:ie,styles:re}),W("click")],d);d.define();const ce=d,ve=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));export{k as I,ce as a,ve as b,te as c,W as e};
//# sourceMappingURL=Icon-085ae741.js.map
