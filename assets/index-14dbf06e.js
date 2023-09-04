import{_ as T}from"./iframe-57e6b318.js";import{r as x,U as $,A as H,n as k}from"./UI5Element-e590cd60.js";import{b as l,l as n,d as p,s as A,a as B,p as r,c as N,f as R,w as I}from"./withWebComponent-b4c67a1a.js";import{a as C,e as P}from"./Icon-b897d66f.js";import{s as L}from"./slot-76e48863.js";import{s as F,a as D}from"./slideUp-745debd3.js";import{l as y,k as w}from"./Icons-65b34360.js";import{g as V}from"./AnimationMode-ce584f41.js";import"./slim-arrow-right-7a309837.js";import{b as E}from"./Button-4505b9f6.js";import{T as _}from"./Title-0fb688d3.js";import{s as S}from"./style-map-ecc46a93.js";import{o as c}from"./class-map-e1b423a4.js";import{U as q}from"./i18n-defaults-d5195a49.js";var g;(function(a){a.Complementary="Complementary",a.Form="Form",a.Region="Region"})(g||(g={}));const v=g;function O(a,e,t){return l`<div class="ui5-panel-root" role="${n(this.accRole)}" aria-label="${n(this.effectiveAccessibleName)}" aria-labelledby="${n(this.fixedPanelAriaLabelledbyReference)}">${this.hasHeaderOrHeaderText?U.call(this,a,e,t):void 0}<div class="ui5-panel-content" id="${n(this._id)}-content" tabindex="-1" style="${S(this.styles.content)}" part="content"><slot></slot></div></div>`}function U(a,e,t){return l`<div class="ui5-panel-heading-wrapper${c(this.classes.stickyHeaderClass)}" role="${n(this.headingWrapperRole)}" aria-level="${n(this.headingWrapperAriaLevel)}"><div @click="${this._headerClick}" @keydown="${this._headerKeyDown}" @keyup="${this._headerKeyUp}" class="ui5-panel-header" tabindex="${n(this.headerTabIndex)}" role="${n(this.accInfo.role)}" aria-expanded="${n(this.accInfo.ariaExpanded)}" aria-controls="${n(this.accInfo.ariaControls)}" aria-labelledby="${n(this.accInfo.ariaLabelledby)}" part="header">${this.fixed?void 0:W.call(this,a,e,t)}${this._hasHeader?M.call(this,a,e,t):G.call(this,a,e,t)}</div></div>`}function W(a,e,t){return l`<div class="ui5-panel-header-button-root">${this._hasHeader?j.call(this,a,e,t):z.call(this,a,e,t)}</div>`}function j(a,e,t){return t?l`<${p("ui5-button",e,t)} design="Transparent" class="ui5-panel-header-button ui5-panel-header-button-with-icon" @click="${this._toggleButtonClick}" .accessibilityAttributes=${n(this.accInfo.button.accessibilityAttributes)} tooltip="${n(this.accInfo.button.title)}" accessible-name="${n(this.accInfo.button.ariaLabelButton)}"><div class="ui5-panel-header-icon-wrapper"><${p("ui5-icon",e,t)} class="ui5-panel-header-icon ${c(this.classes.headerBtn)}" name="slim-arrow-right"></${p("ui5-icon",e,t)}></div></${p("ui5-button",e,t)}>`:l`<ui5-button design="Transparent" class="ui5-panel-header-button ui5-panel-header-button-with-icon" @click="${this._toggleButtonClick}" .accessibilityAttributes=${n(this.accInfo.button.accessibilityAttributes)} tooltip="${n(this.accInfo.button.title)}" accessible-name="${n(this.accInfo.button.ariaLabelButton)}"><div class="ui5-panel-header-icon-wrapper"><ui5-icon class="ui5-panel-header-icon ${c(this.classes.headerBtn)}" name="slim-arrow-right"></ui5-icon></div></ui5-button>`}function z(a,e,t){return t?l`<${p("ui5-icon",e,t)} class="ui5-panel-header-button ui5-panel-header-icon ${c(this.classes.headerBtn)}" name="slim-arrow-right" show-tooltip accessible-name="${n(this.toggleButtonTitle)}"></${p("ui5-icon",e,t)}>`:l`<ui5-icon class="ui5-panel-header-button ui5-panel-header-icon ${c(this.classes.headerBtn)}" name="slim-arrow-right" show-tooltip accessible-name="${n(this.toggleButtonTitle)}"></ui5-icon>`}function M(a,e,t){return l`<slot name="header"></slot>`}function G(a,e,t){return l`<div id="${n(this._id)}-header-title" class="ui5-panel-header-title">${n(this.headerText)}</div>`}x("@ui5/webcomponents-theming","sap_fiori_3",async()=>A);x("@ui5/webcomponents","sap_fiori_3",async()=>B);const K={packageName:"@ui5/webcomponents",fileName:"themes/Panel.css",content:'.ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host(:not([hidden])){display:block}:host{background-color:var(--sapGroup_TitleBackground);border-radius:var(--_ui5-v1-17-0_panel_border_radius);font-family:"72override",var(--sapFontFamily)}:host(:not([collapsed])){border-bottom:var(--_ui5-v1-17-0_panel_border_bottom)}:host([fixed]) .ui5-panel-header{padding-left:1rem}.ui5-panel-header{align-items:center;box-sizing:border-box;display:flex;justify-content:flex-start;min-height:var(--_ui5-v1-17-0_panel_header_height);outline:none;padding-right:var(--_ui5-v1-17-0_panel_header_padding_right);position:relative;width:100%}.ui5-panel-header-icon{color:var(--_ui5-v1-17-0_panel_icon_color)}.ui5-panel-header-button-animated{transition:transform .4s ease-out}:host(:not([_has-header]):not([fixed])) .ui5-panel-header{cursor:pointer}:host(:not([_has-header]):not([fixed])) .ui5-panel-header:focus:after{border:var(--_ui5-v1-17-0_panel_focus_border);border-radius:var(--_ui5-v1-17-0_panel_border_radius);bottom:var(--_ui5-v1-17-0_panel_focus_offset);content:"";left:var(--_ui5-v1-17-0_panel_focus_offset);pointer-events:none;position:absolute;right:var(--_ui5-v1-17-0_panel_focus_offset);top:var(--_ui5-v1-17-0_panel_focus_offset);z-index:2}:host(:not([collapsed]):not([_has-header]):not([fixed])) .ui5-panel-header:focus:after{border-radius:var(--_ui5-v1-17-0_panel_border_radius_expanded)}:host(:not([collapsed])) .ui5-panel-header-button:not(.ui5-panel-header-button-with-icon),:host(:not([collapsed])) .ui5-panel-header-icon-wrapper [ui5-icon]{transform:var(--_ui5-v1-17-0_panel_toggle_btn_rotation)}:host([fixed]) .ui5-panel-header-title{width:100%}.ui5-panel-heading-wrapper.ui5-panel-heading-wrapper-sticky{background-color:var(--_ui5-v1-17-0_panel_header_background_color);border-radius:var(--_ui5-v1-17-0_panel_border_radius);position:sticky;top:0;z-index:100}.ui5-panel-header-title{color:var(--sapGroup_TitleTextColor);font-family:"72override",var(--sapFontHeaderFamily);font-size:var(--sapGroup_Title_FontSize);font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:calc(100% - var(--_ui5-v1-17-0_panel_button_root_width))}.ui5-panel-content{background-color:var(--sapGroup_ContentBackground);border-bottom-left-radius:var(--_ui5-v1-17-0_panel_border_radius);border-bottom-right-radius:var(--_ui5-v1-17-0_panel_border_radius);outline:none;overflow:auto;padding:var(--_ui5-v1-17-0_panel_content_padding)}.ui5-panel-header-button-root{align-items:center;box-sizing:border-box;display:flex;flex-shrink:0;height:var(--_ui5-v1-17-0_panel_button_root_width);justify-content:center;padding:var(--_ui5-v1-17-0_panel_header_button_wrapper_padding);width:var(--_ui5-v1-17-0_panel_button_root_width)}:host([collapsed]) .ui5-panel-header,:host([fixed]:not([collapsed]):not([_has-header])) .ui5-panel-header{border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor)}:host([collapsed]) .ui5-panel-header{border-bottom-left-radius:var(--_ui5-v1-17-0_panel_border_radius);border-bottom-right-radius:var(--_ui5-v1-17-0_panel_border_radius)}:host(:not([fixed]):not([collapsed])) .ui5-panel-header{border-bottom:var(--_ui5-v1-17-0_panel_default_header_border)}[ui5-button].ui5-panel-header-button{align-items:center;display:flex;height:100%;justify-content:center;min-width:auto;width:100%}.ui5-panel-header-icon-wrapper{align-items:center;display:flex;justify-content:center}.ui5-panel-header-icon-wrapper,.ui5-panel-header-icon-wrapper .ui5-panel-header-icon{color:inherit}.ui5-panel-header-icon-wrapper,[ui5-button].ui5-panel-header-button-with-icon [ui5-icon]{pointer-events:none}.ui5-panel-root{display:flex;flex-direction:column;height:100%}'};var i=globalThis&&globalThis.__decorate||function(a,e,t,d){var h=arguments.length,s=h<3?e:d===null?d=Object.getOwnPropertyDescriptor(e,t):d,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,e,t,d);else for(var b=a.length-1;b>=0;b--)(u=a[b])&&(s=(h<3?u(s):h>3?u(e,t,s):u(e,t))||s);return h>3&&s&&Object.defineProperty(e,t,s),s},m;let o=m=class extends ${onBeforeRendering(){this._animationRunning||(this._contentExpanded=!this.collapsed),this._hasHeader=!!this.header.length}shouldToggle(e){return this.header.length?e.classList.contains("ui5-panel-header-button"):!0}shouldNotAnimate(){return this.noAnimation||V()===H.None}_headerClick(e){this.shouldToggle(e.target)&&this._toggleOpen()}_toggleButtonClick(e){e.x===0&&e.y===0&&e.stopImmediatePropagation()}_headerKeyDown(e){this.shouldToggle(e.target)&&(y(e)&&e.preventDefault(),w(e)&&e.preventDefault())}_headerKeyUp(e){this.shouldToggle(e.target)&&(y(e)&&this._toggleOpen(),w(e)&&this._toggleOpen())}_toggleOpen(){if(this.fixed)return;if(this.collapsed=!this.collapsed,this.shouldNotAnimate()){this.fireEvent("toggle");return}this._animationRunning=!0;const e=this.getDomRef().querySelectorAll(".ui5-panel-content"),t=[];[].forEach.call(e,d=>{this.collapsed?t.push(F(d).promise()):t.push(D(d).promise())}),Promise.all(t).then(()=>{this._animationRunning=!1,this._contentExpanded=!this.collapsed,this.fireEvent("toggle")})}_headerOnTarget(e){return e.classList.contains("sapMPanelWrappingDiv")}get classes(){return{headerBtn:{"ui5-panel-header-button-animated":!this.shouldNotAnimate()},stickyHeaderClass:{"ui5-panel-heading-wrapper-sticky":this.stickyHeader}}}get toggleButtonTitle(){return m.i18nBundle.getText(q)}get expanded(){return!this.collapsed}get accRole(){return this.accessibleRole.toLowerCase()}get effectiveAccessibleName(){return typeof this.accessibleName=="string"&&this.accessibleName.length?this.accessibleName:void 0}get accInfo(){return{button:{accessibilityAttributes:{expanded:this.expanded},title:this.toggleButtonTitle,ariaLabelButton:!this.nonFocusableButton&&this.useAccessibleNameForToggleButton?this.effectiveAccessibleName:void 0},ariaExpanded:this.nonFixedInternalHeader?this.expanded:void 0,ariaControls:this.nonFixedInternalHeader?`${this._id}-content`:void 0,ariaLabelledby:this.nonFocusableButton?this.ariaLabelledbyReference:void 0,role:this.nonFixedInternalHeader?"button":void 0}}get ariaLabelledbyReference(){return this.nonFocusableButton&&this.headerText&&!this.fixed?`${this._id}-header-title`:void 0}get fixedPanelAriaLabelledbyReference(){return this.fixed&&!this.effectiveAccessibleName?`${this._id}-header-title`:void 0}get headerAriaLevel(){return this.headerLevel.slice(1)}get headerTabIndex(){return this.header.length||this.fixed?"-1":"0"}get headingWrapperAriaLevel(){return this._hasHeader?void 0:this.headerAriaLevel}get headingWrapperRole(){return this._hasHeader?void 0:"heading"}get nonFixedInternalHeader(){return!this._hasHeader&&!this.fixed}get hasHeaderOrHeaderText(){return this._hasHeader||this.headerText}get nonFocusableButton(){return!this.header.length}get styles(){return{content:{display:this._contentExpanded?"block":"none"}}}static async onDefine(){m.i18nBundle=await k("@ui5/webcomponents")}};i([r()],o.prototype,"headerText",void 0);i([r({type:Boolean})],o.prototype,"fixed",void 0);i([r({type:Boolean})],o.prototype,"collapsed",void 0);i([r({type:Boolean})],o.prototype,"noAnimation",void 0);i([r({type:v,defaultValue:v.Form})],o.prototype,"accessibleRole",void 0);i([r({type:_,defaultValue:_.H2})],o.prototype,"headerLevel",void 0);i([r()],o.prototype,"accessibleName",void 0);i([r({type:Boolean})],o.prototype,"stickyHeader",void 0);i([r({type:Boolean})],o.prototype,"useAccessibleNameForToggleButton",void 0);i([r({type:Boolean})],o.prototype,"_hasHeader",void 0);i([r({type:Boolean,noAttribute:!0})],o.prototype,"_contentExpanded",void 0);i([r({type:Boolean,noAttribute:!0})],o.prototype,"_animationRunning",void 0);i([L()],o.prototype,"header",void 0);o=m=i([N({tag:"ui5-panel",fastNavigation:!0,languageAware:!0,renderer:R,template:O,styles:K,dependencies:[E,C]}),P("toggle")],o);o.define();const J=o,Q=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),f=I("ui5-panel",["accessibleName","accessibleRole","headerLevel","headerText"],["collapsed","fixed","noAnimation","stickyHeader"],["header"],["toggle"],()=>T(()=>Promise.resolve().then(()=>Q),void 0,import.meta.url));f.displayName="Panel";f.defaultProps={accessibleRole:v.Form,headerLevel:_.H2};try{f.displayName="Panel",f.__docgenInfo={description:`The \`Panel\` component is a container which has a header and a content area and is used for grouping and displaying information. It can be collapsed to save space on the screen.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Panel)`,displayName:"Panel",props:{children:{defaultValue:null,description:"Defines the content of the component. The content is visible only when the component is expanded.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header area.

**Note:** When a header is provided, the \`headerText\` property is ignored.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onToggle:{defaultValue:null,description:"Fired when the component is expanded/collapsed by user interaction.",name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<PanelDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:"PanelAccessibleRole.Form"},description:"Sets the accessible ARIA role of the component. Depending on the usage, you can change the role from the default `Form` to `Region` or `Complementary`.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Complementary"'},{value:'"Form"'},{value:'"Region"'},{value:'"Complementary"'},{value:'"Form"'},{value:'"Region"'}]}},collapsed:{defaultValue:null,description:"Indicates whether the component is collapsed and only the header is displayed.",name:"collapsed",required:!1,type:{name:"boolean"}},fixed:{defaultValue:null,description:"Determines whether the component is in a fixed state that is not expandable/collapsible by user interaction.",name:"fixed",required:!1,type:{name:"boolean"}},headerLevel:{defaultValue:{value:"TitleLevel.H2"},description:'Defines the "aria-level" of component heading, set by the `headerText`.\n\nAvailable options are: `"H6"` to `"H1"`.',name:"headerLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},headerText:{defaultValue:null,description:"This property is used to set the header text of the component. The text is visible in both expanded and collapsed states.\n\n**Note:** This property is overridden by the `header` slot.",name:"headerText",required:!1,type:{name:"string"}},noAnimation:{defaultValue:null,description:"Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.",name:"noAnimation",required:!1,type:{name:"boolean"}},stickyHeader:{defaultValue:null,description:"Indicates whether the Panel header is sticky or not. If stickyHeader is set to true, then whenever you scroll the content or the application, the header of the panel will be always visible and a solid color will be used for its design.",name:"stickyHeader",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{f as P,v as a};
//# sourceMappingURL=index-14dbf06e.js.map
