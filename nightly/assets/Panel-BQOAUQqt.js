import{m as s,k as i,p as h,a as v,s as m,q as r,v as y,z as x,S as $,F as w}from"./withWebComponent-CEvNJu7C.js";import{l as B}from"./event-strict-DgQLNDEV.js";import{d as k}from"./slot-_4yKMUwC.js";import{u as A,b as T}from"./slideUp-By1UZlL6.js";import{b as f,i as g}from"./Keys-CAuuEE_3.js";import{d as H}from"./AnimationMode-CoOlqW6c.js";import{i as I}from"./i18n-DEVDpFvK.js";import"./slim-arrow-right-BHycGIJI.js";import{a as R}from"./Button-C6xYvRbu.js";import{I as L}from"./Icon-Cf72TZgw.js";import{s as N}from"./style-map-g8foa4rA.js";import{o as u}from"./class-map-CFjQlWtw.js";import{P as F}from"./i18n-defaults-DteWAmDn.js";import{s as C}from"./parameters-bundle.css-DY1ryZJt.js";function P(n,e,t){return s`<div class="ui5-panel-root" role="${i(this.accRole)}" aria-label="${i(this.effectiveAccessibleName)}" aria-labelledby="${i(this.fixedPanelAriaLabelledbyReference)}">${this.hasHeaderOrHeaderText?D.call(this,n,e,t):void 0}<div class="ui5-panel-content" id="${i(this._id)}-content" tabindex="-1" style="${N(this.styles.content)}" part="content"><slot></slot></div></div>`}function D(n,e,t){return s`<div class="ui5-panel-heading-wrapper${u(this.classes.stickyHeaderClass)}" role="${i(this.headingWrapperRole)}" aria-level="${i(this.headingWrapperAriaLevel)}"><div @click="${this._headerClick}" @keydown="${this._headerKeyDown}" @keyup="${this._headerKeyUp}" class="ui5-panel-header" tabindex="${i(this.headerTabIndex)}" role="${i(this.accInfo.role)}" aria-expanded="${i(this.accInfo.ariaExpanded)}" aria-controls="${i(this.accInfo.ariaControls)}" aria-labelledby="${i(this.accInfo.ariaLabelledby)}" part="header">${this.fixed?void 0:O.call(this,n,e,t)}${this._hasHeader?j.call(this,n,e,t):G.call(this,n,e,t)}</div></div>`}function O(n,e,t){return s`<div class="ui5-panel-header-button-root">${this._hasHeader?z.call(this,n,e,t):E.call(this,n,e,t)}</div>`}function z(n,e,t){return t?s`<${h("ui5-button",e,t)} design="Transparent" class="ui5-panel-header-button ui5-panel-header-button-with-icon" @click="${this._toggleButtonClick}" .accessibilityAttributes=${i(this.accInfo.button.accessibilityAttributes)} tooltip="${i(this.accInfo.button.title)}" accessible-name="${i(this.accInfo.button.ariaLabelButton)}"><div class="ui5-panel-header-icon-wrapper"><${h("ui5-icon",e,t)} class="ui5-panel-header-icon ${u(this.classes.headerBtn)}" name="slim-arrow-right"></${h("ui5-icon",e,t)}></div></${h("ui5-button",e,t)}>`:s`<ui5-button design="Transparent" class="ui5-panel-header-button ui5-panel-header-button-with-icon" @click="${this._toggleButtonClick}" .accessibilityAttributes=${i(this.accInfo.button.accessibilityAttributes)} tooltip="${i(this.accInfo.button.title)}" accessible-name="${i(this.accInfo.button.ariaLabelButton)}"><div class="ui5-panel-header-icon-wrapper"><ui5-icon class="ui5-panel-header-icon ${u(this.classes.headerBtn)}" name="slim-arrow-right"></ui5-icon></div></ui5-button>`}function E(n,e,t){return t?s`<${h("ui5-icon",e,t)} class="ui5-panel-header-button ui5-panel-header-icon ${u(this.classes.headerBtn)}" name="slim-arrow-right" show-tooltip accessible-name="${i(this.toggleButtonTitle)}"></${h("ui5-icon",e,t)}>`:s`<ui5-icon class="ui5-panel-header-button ui5-panel-header-icon ${u(this.classes.headerBtn)}" name="slim-arrow-right" show-tooltip accessible-name="${i(this.toggleButtonTitle)}"></ui5-icon>`}function j(n,e,t){return s`<slot name="header"></slot>`}function G(n,e,t){return s`<div id="${i(this._id)}-header-title" class="ui5-panel-header-title">${i(this.headerText)}</div>`}v("@ui5/webcomponents-theming","sap_horizon",async()=>m);v("@ui5/webcomponents","sap_horizon",async()=>C);const W={packageName:"@ui5/webcomponents",fileName:"themes/Panel.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block}:host{font-family:"72override",var(--sapFontFamily);background-color:var(--sapGroup_TitleBackground);border-radius:var(--_ui5-v2-5-1_panel_border_radius)}:host(:not([collapsed])){border-bottom:var(--_ui5-v2-5-1_panel_border_bottom)}:host([fixed]) .ui5-panel-header{padding-left:1rem}.ui5-panel-header{min-height:var(--_ui5-v2-5-1_panel_header_height);width:100%;position:relative;display:flex;justify-content:flex-start;align-items:center;outline:none;box-sizing:border-box;padding-right:var(--_ui5-v2-5-1_panel_header_padding_right);font-family:"72override",var(--sapFontHeaderFamily);font-size:var(--sapGroup_Title_FontSize);font-weight:400;color:var(--sapGroup_TitleTextColor)}.ui5-panel-header-icon{color:var(--_ui5-v2-5-1_panel_icon_color)}.ui5-panel-header-button-animated{transition:transform .4s ease-out}:host(:not([_has-header]):not([fixed])) .ui5-panel-header{cursor:pointer}:host(:not([_has-header]):not([fixed])) .ui5-panel-header:focus:after{content:"";position:absolute;pointer-events:none;z-index:2;border:var(--_ui5-v2-5-1_panel_focus_border);border-radius:var(--_ui5-v2-5-1_panel_border_radius);top:var(--_ui5-v2-5-1_panel_focus_offset);bottom:var(--_ui5-v2-5-1_panel_focus_bottom_offset);left:var(--_ui5-v2-5-1_panel_focus_offset);right:var(--_ui5-v2-5-1_panel_focus_offset)}:host(:not([collapsed]):not([_has-header]):not([fixed])) .ui5-panel-header:focus:after{border-radius:var(--_ui5-v2-5-1_panel_border_radius_expanded)}:host(:not([collapsed])) .ui5-panel-header-button:not(.ui5-panel-header-button-with-icon),:host(:not([collapsed])) .ui5-panel-header-icon-wrapper [ui5-icon]{transform:var(--_ui5-v2-5-1_panel_toggle_btn_rotation)}:host([fixed]) .ui5-panel-header-title{width:100%}.ui5-panel-heading-wrapper.ui5-panel-heading-wrapper-sticky{position:sticky;top:0;background-color:var(--_ui5-v2-5-1_panel_header_background_color);z-index:100;border-radius:var(--_ui5-v2-5-1_panel_border_radius)}.ui5-panel-header-title{width:calc(100% - var(--_ui5-v2-5-1_panel_button_root_width));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-panel-content{padding:var(--_ui5-v2-5-1_panel_content_padding);background-color:var(--sapGroup_ContentBackground);outline:none;border-bottom-left-radius:var(--_ui5-v2-5-1_panel_border_radius);border-bottom-right-radius:var(--_ui5-v2-5-1_panel_border_radius);overflow:auto}.ui5-panel-header-button-root{display:flex;justify-content:center;align-items:center;flex-shrink:0;width:var(--_ui5-v2-5-1_panel_button_root_width);height:var(--_ui5-v2-5-1_panel_button_root_height);padding:var(--_ui5-v2-5-1_panel_header_button_wrapper_padding);box-sizing:border-box}:host([fixed]:not([collapsed]):not([_has-header])) .ui5-panel-header,:host([collapsed]) .ui5-panel-header{border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor)}:host([collapsed]) .ui5-panel-header{border-bottom-left-radius:var(--_ui5-v2-5-1_panel_border_radius);border-bottom-right-radius:var(--_ui5-v2-5-1_panel_border_radius)}:host(:not([fixed]):not([collapsed])) .ui5-panel-header{border-bottom:var(--_ui5-v2-5-1_panel_default_header_border)}[ui5-button].ui5-panel-header-button{display:flex;justify-content:center;align-items:center;min-width:initial;height:100%;width:100%}.ui5-panel-header-icon-wrapper{display:flex;justify-content:center;align-items:center}.ui5-panel-header-icon-wrapper,.ui5-panel-header-icon-wrapper .ui5-panel-header-icon{color:inherit}.ui5-panel-header-icon-wrapper,[ui5-button].ui5-panel-header-button-with-icon [ui5-icon]{pointer-events:none}.ui5-panel-root{height:100%;display:flex;flex-direction:column}
`};var o=function(n,e,t,d){var c=arguments.length,l=c<3?e:d===null?d=Object.getOwnPropertyDescriptor(e,t):d,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,e,t,d);else for(var _=n.length-1;_>=0;_--)(p=n[_])&&(l=(c<3?p(l):c>3?p(e,t,l):p(e,t))||l);return c>3&&l&&Object.defineProperty(e,t,l),l},b;let a=b=class extends ${constructor(){super(...arguments),this.fixed=!1,this.collapsed=!1,this.noAnimation=!1,this.accessibleRole="Form",this.headerLevel="H2",this.stickyHeader=!1,this.useAccessibleNameForToggleButton=!1,this._hasHeader=!1,this._contentExpanded=!1,this._animationRunning=!1}onBeforeRendering(){this._animationRunning||(this._contentExpanded=!this.collapsed),this._hasHeader=!!this.header.length}shouldToggle(e){return this.header.length?e.classList.contains("ui5-panel-header-button"):!0}shouldNotAnimate(){return this.noAnimation||H()===w.None}_headerClick(e){this.shouldToggle(e.target)&&this._toggleOpen()}_toggleButtonClick(e){e.x===0&&e.y===0&&e.stopImmediatePropagation()}_headerKeyDown(e){this.shouldToggle(e.target)&&(f(e)&&e.preventDefault(),g(e)&&e.preventDefault())}_headerKeyUp(e){this.shouldToggle(e.target)&&(f(e)&&this._toggleOpen(),g(e)&&this._toggleOpen())}_toggleOpen(){if(this.fixed)return;if(this.collapsed=!this.collapsed,this.shouldNotAnimate()){this.fireDecoratorEvent("toggle");return}this._animationRunning=!0;const e=this.getDomRef().querySelectorAll(".ui5-panel-content"),t=[];[].forEach.call(e,d=>{this.collapsed?t.push(A(d).promise()):t.push(T(d).promise())}),Promise.all(t).then(()=>{this._animationRunning=!1,this._contentExpanded=!this.collapsed,this.fireDecoratorEvent("toggle")})}_headerOnTarget(e){return e.classList.contains("sapMPanelWrappingDiv")}get classes(){return{headerBtn:{"ui5-panel-header-button-animated":!this.shouldNotAnimate()},stickyHeaderClass:{"ui5-panel-heading-wrapper-sticky":this.stickyHeader}}}get toggleButtonTitle(){return b.i18nBundle.getText(F)}get expanded(){return!this.collapsed}get accRole(){return this.accessibleRole.toLowerCase()}get effectiveAccessibleName(){return typeof this.accessibleName=="string"&&this.accessibleName.length?this.accessibleName:void 0}get accInfo(){return{button:{accessibilityAttributes:{expanded:this.expanded},title:this.toggleButtonTitle,ariaLabelButton:!this.nonFocusableButton&&this.useAccessibleNameForToggleButton?this.effectiveAccessibleName:void 0},ariaExpanded:this.nonFixedInternalHeader?this.expanded:void 0,ariaControls:this.nonFixedInternalHeader?`${this._id}-content`:void 0,ariaLabelledby:this.nonFocusableButton?this.ariaLabelledbyReference:void 0,role:this.nonFixedInternalHeader?"button":void 0}}get ariaLabelledbyReference(){return this.nonFocusableButton&&this.headerText&&!this.fixed?`${this._id}-header-title`:void 0}get fixedPanelAriaLabelledbyReference(){return this.fixed&&!this.effectiveAccessibleName?`${this._id}-header-title`:void 0}get headerAriaLevel(){return this.headerLevel.slice(1)}get headerTabIndex(){return this.header.length||this.fixed?"-1":"0"}get headingWrapperAriaLevel(){return this._hasHeader?void 0:this.headerAriaLevel}get headingWrapperRole(){return this._hasHeader?void 0:"heading"}get nonFixedInternalHeader(){return!this._hasHeader&&!this.fixed}get hasHeaderOrHeaderText(){return this._hasHeader||this.headerText}get nonFocusableButton(){return!this.header.length}get styles(){return{content:{display:this._contentExpanded?"block":"none"}}}};o([r()],a.prototype,"headerText",void 0);o([r({type:Boolean})],a.prototype,"fixed",void 0);o([r({type:Boolean})],a.prototype,"collapsed",void 0);o([r({type:Boolean})],a.prototype,"noAnimation",void 0);o([r()],a.prototype,"accessibleRole",void 0);o([r()],a.prototype,"headerLevel",void 0);o([r()],a.prototype,"accessibleName",void 0);o([r({type:Boolean})],a.prototype,"stickyHeader",void 0);o([r({type:Boolean})],a.prototype,"useAccessibleNameForToggleButton",void 0);o([r({type:Boolean})],a.prototype,"_hasHeader",void 0);o([r({type:Boolean,noAttribute:!0})],a.prototype,"_contentExpanded",void 0);o([r({type:Boolean,noAttribute:!0})],a.prototype,"_animationRunning",void 0);o([k()],a.prototype,"header",void 0);o([I("@ui5/webcomponents")],a,"i18nBundle",void 0);a=b=o([y({tag:"ui5-panel",fastNavigation:!0,languageAware:!0,renderer:x,template:P,styles:W,dependencies:[R,L]}),B("toggle",{bubbles:!0})],a);a.define();const ne=a;export{ne as P};
