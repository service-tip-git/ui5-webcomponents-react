import{b as f,l as p,s as h,a as g,p as b,c as _}from"./withWebComponent-b4c67a1a.js";import{r as u,n as x}from"./UI5Element-e590cd60.js";import{c}from"./ListItemBase-e8a1d82b.js";import{G as v}from"./i18n-defaults-d5195a49.js";import{o as w}from"./class-map-e1b423a4.js";import"./utils-e9940b93.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./index-f1f2c4b1.js";import"./jsx-runtime-d079401a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./ResizeHandler-34ecee99.js";import"./ItemNavigation-52fe434f.js";import"./Icons-65b34360.js";import"./getActiveElement-bcae01ed.js";import"./Icon-b897d66f.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./AriaLabelHelper-43a261ec.js";import"./TabbableElements-8e49b367.js";import"./isElementHidden-01c07146.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-7cb729ee.js";import"./Label-69062358.js";import"./WrappingType-b81e595a.js";import"./style-map-ecc46a93.js";import"./BrowserScrollbar.css-4a87524a.js";function y(i,t,o){return f`<ul part="native-li" tabindex="${p(this._tabIndex)}" class="ui5-ghli-root ${w(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" aria-label="${p(this.ariaLabelText)}" aria-roledescription="${p(this.groupHeaderText)}" role="group"><div id="${p(this._id)}-content" class="ui5-li-content"><span class="ui5-ghli-title"><slot></slot></span></div></ul>`}u("@ui5/webcomponents-theming","sap_fiori_3",async()=>h);u("@ui5/webcomponents","sap_fiori_3",async()=>g);const H={packageName:"@ui5/webcomponents",fileName:"themes/GroupHeaderListItem.css",content:".ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host{background:var(--ui5-v1-17-0-group-header-listitem-background-color);color:var(--sapList_TableGroupHeaderTextColor);height:var(--_ui5-v1-17-0_group_header_list_item_height)}:host([has-border]){border-bottom:1px solid var(--sapList_GroupHeaderBorderColor)}.ui5-li-root.ui5-ghli-root{color:currentColor;font-size:var(--sapFontHeader6Size);font-weight:400;line-height:2rem;margin:0;padding-top:.5rem}.ui5-ghli-title{display:block;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"};var d=globalThis&&globalThis.__decorate||function(i,t,o,s){var a=arguments.length,e=a<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,o):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(i,t,o,s);else for(var m=i.length-1;m>=0;m--)(n=i[m])&&(e=(a<3?n(e):a>3?n(t,o,e):n(t,o))||e);return a>3&&e&&Object.defineProperty(t,o,e),e},l;let r=l=class extends c{get groupItem(){return!0}get groupHeaderText(){return l.i18nBundle.getText(v)}get ariaLabelText(){return[this.textContent,this.accessibleName].filter(Boolean).join(" ")}static async onDefine(){l.i18nBundle=await x("@ui5/webcomponents")}};d([b()],r.prototype,"accessibleName",void 0);r=l=d([_({tag:"ui5-li-groupheader",languageAware:!0,template:y,styles:[c.styles,H]})],r);r.define();const Z=r;export{Z as default};
//# sourceMappingURL=GroupHeaderListItem-667d01bb.js.map
