import{h as o,j as s,f as v,s as C,a as u,m as P,k as R,I as U}from"./withWebComponent-GNT2PXey.js";import{d as T}from"./slot-_4yKMUwC.js";import{s as _}from"./event-Dq0fpeHi.js";import{d as S,f as q,C as y,K as k,b as F}from"./Keys-F_3Gvx0K.js";import{f as x}from"./i18nBundle-BqO_ndMU.js";import"./useIsomorphicLayoutEffect-7J8kFyWS.js";import"./slim-arrow-right-Dx8ng0oy.js";import{e as G}from"./Popover-BcjI4r72.js";import A from"./ResponsivePopover-CxQpx28n.js";import{b as Y}from"./Button-Cvy14OjO.js";import{c as w,f as j,d as J}from"./List-CfQVFNo9.js";import z from"./BusyIndicator-BRwQ1wd3.js";import{t as Q}from"./AriaHasPopup-BTjm9d28.js";import"./nav-back-DhkmKZG9.js";import{I as V}from"./Icon-BhzwmwWz.js";import{l as t}from"./if-defined-B9dCEi48.js";import{o as I}from"./class-map-_G2Y84x0.js";import{b1 as X,b2 as H}from"./i18n-defaults-BaleIpCT.js";import{s as M}from"./parameters-bundle.css-DJWIHzS2.js";import Z from"./ListItemCustom-DqfXiPIc.js";function ee(n,e,i){return o`<li part="native-li" data-sap-focus-ref tabindex="${t(this._effectiveTabIndex)}" class="${I(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" draggable="${t(this.movable)}" @dragstart="${this._ondragstart}" @dragend="${this._ondragend}" role="${t(this._accInfo.role)}" aria-expanded="${t(this._accInfo.ariaExpanded)}" title="${t(this._accInfo.tooltip)}" aria-level="${t(this._accInfo.ariaLevel)}" aria-haspopup="${t(this._accInfo.ariaHaspopup)}" aria-posinset="${t(this._accInfo.posinset)}" aria-setsize="${t(this._accInfo.setsize)}" aria-describedby="${t(this._id)}-invisibleText-describedby" aria-labelledby="${t(this._accessibleNameRef)}" aria-disabled="${t(this._ariaDisabled)}" aria-selected="${t(this._accInfo.ariaSelected)}" aria-checked="${t(this._accInfo.ariaChecked)}" aria-owns="${t(this._accInfo.ariaOwns)}" aria-keyshortcuts="${t(this._accInfo.ariaKeyShortcuts)}">${this.placeSelectionElementBefore?ie.call(this,n,e,i):void 0}${this._hasHighlightColor?le.call(this,n,e,i):void 0}<div part="content" id="${t(this._id)}-content" class="ui5-li-content">${this.hasIcon?re.call(this,n,e,i):ce.call(this,n,e,i)}${this.text?ue.call(this,n,e,i):void 0}${this.hasSubmenu?pe.call(this,n,e,i):he.call(this,n,e,i)}</div>${this.typeDetail?_e.call(this,n,e,i):void 0}${this.typeNavigation?$e.call(this,n,e,i):void 0}${this.navigated?fe.call(this,n,e,i):void 0}${this.placeSelectionElementAfter?ge.call(this,n,e,i):void 0}<span id="${t(this._id)}-invisibleText" class="ui5-hidden-text">${t(this._accInfo.listItemAriaLabel)}${t(this.accessibleName)}</span><span id="${t(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${t(this._accInfo.ariaSelectedText)}</span></li>${this.hasSubmenu?Ce.call(this,n,e,i):void 0}`}function ie(n,e,i){return o`${this.modeSingleSelect?te.call(this,n,e,i):void 0}${this.modeMultiple?ne.call(this,n,e,i):void 0}${this.renderDeleteButton?oe.call(this,n,e,i):void 0}`}function te(n,e,i){return i?o`<${s("ui5-radio-button",e,i)} part="radio" ?disabled="${this.isInactive}" accessible-name="${t(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${s("ui5-radio-button",e,i)}>`:o`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${t(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function ne(n,e,i){return i?o`<${s("ui5-checkbox",e,i)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${t(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${t(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${s("ui5-checkbox",e,i)}>`:o`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${t(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${t(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function oe(n,e,i){return o`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?se.call(this,n,e,i):ae.call(this,n,e,i)}</div>`}function se(n,e,i){return o`<slot name="deleteButton"></slot>`}function ae(n,e,i){return i?o`<${s("ui5-button",e,i)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${t(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${t(this.deleteText)}"></${s("ui5-button",e,i)}>`:o`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${t(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${t(this.deleteText)}"></ui5-button>`}function le(n,e,i){return o`<div class="ui5-li-highlight"></div>`}function re(n,e,i){return i?o`<${s("ui5-icon",e,i)} class="ui5-li-icon" name="${t(this.icon)}"></${s("ui5-icon",e,i)}>`:o`<ui5-icon class="ui5-li-icon" name="${t(this.icon)}"></ui5-icon>`}function ce(n,e,i){return o`${this._siblingsWithIcon?de.call(this,n,e,i):void 0}`}function de(n,e,i){return o`<div class="ui5-menu-item-dummy-icon"></div>`}function ue(n,e,i){return o`<div class="ui5-menu-item-text">${t(this.text)}</div>`}function pe(n,e,i){return i?o`<div class="ui5-menu-item-submenu-icon"><${s("ui5-icon",e,i)} part="subicon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></${s("ui5-icon",e,i)}></div>`:o`<div class="ui5-menu-item-submenu-icon"><ui5-icon part="subicon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></ui5-icon></div>`}function he(n,e,i){return o`${this.hasEndContent?me.call(this,n,e,i):be.call(this,n,e,i)}`}function me(n,e,i){return o`<slot name="endContent"></slot>`}function be(n,e,i){return o`${this.additionalText?ve.call(this,n,e,i):void 0}`}function ve(n,e,i){return o`<span part="additional-text" class="ui5-li-additional-text" aria-hidden="${t(this._accInfo.ariaHidden)}">${t(this.additionalText)}</span>`}function _e(n,e,i){return i?o`<div class="ui5-li-detailbtn"><${s("ui5-button",e,i)} part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></${s("ui5-button",e,i)}></div>`:o`<div class="ui5-li-detailbtn"><ui5-button part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`}function $e(n,e,i){return i?o`<${s("ui5-icon",e,i)} name ="slim-arrow-right"></${s("ui5-icon",e,i)}>`:o`<ui5-icon name ="slim-arrow-right"></ui5-icon>`}function fe(n,e,i){return o`<div class="ui5-li-navigated"></div>`}function ge(n,e,i){return o`${this.modeSingleSelect?ye.call(this,n,e,i):void 0}${this.modeMultiple?ke.call(this,n,e,i):void 0}${this.renderDeleteButton?Se.call(this,n,e,i):void 0}`}function ye(n,e,i){return i?o`<${s("ui5-radio-button",e,i)} part="radio" ?disabled="${this.isInactive}" accessible-name="${t(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${s("ui5-radio-button",e,i)}>`:o`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${t(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function ke(n,e,i){return i?o`<${s("ui5-checkbox",e,i)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${t(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${t(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${s("ui5-checkbox",e,i)}>`:o`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${t(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${t(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function Se(n,e,i){return o`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?we.call(this,n,e,i):Ie.call(this,n,e,i)}</div>`}function we(n,e,i){return o`<slot name="deleteButton"></slot>`}function Ie(n,e,i){return i?o`<${s("ui5-button",e,i)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${t(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${t(this.deleteText)}"></${s("ui5-button",e,i)}>`:o`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${t(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${t(this.deleteText)}"></ui5-button>`}function Ce(n,e,i){return i?o`<${s("ui5-responsive-popover",e,i)} id="${t(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Start" prevent-initial-focus prevent-focus-restore hide-arrow allow-target-overlap sub-menu placement=${t(this.placement)} vertical-align="Top" @ui5-before-open=${t(this._beforePopoverOpen)} @ui5-open=${t(this._afterPopoverOpen)} @ui5-before-close=${t(this._beforePopoverClose)} @ui5-close=${t(this._afterPopoverClose)}>${this.isPhone?D.call(this,n,e,i):void 0}<div id="${t(this._id)}-menu-main">${this.items.length?E.call(this,n,e,i):B.call(this,n,e,i)}</div></${s("ui5-responsive-popover",e,i)}>`:o`<ui5-responsive-popover id="${t(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Start" prevent-initial-focus prevent-focus-restore hide-arrow allow-target-overlap sub-menu placement=${t(this.placement)} vertical-align="Top" @ui5-before-open=${t(this._beforePopoverOpen)} @ui5-open=${t(this._afterPopoverOpen)} @ui5-before-close=${t(this._beforePopoverClose)} @ui5-close=${t(this._afterPopoverClose)}>${this.isPhone?D.call(this,n,e,i):void 0}<div id="${t(this._id)}-menu-main">${this.items.length?E.call(this,n,e,i):B.call(this,n,e,i)}</div></ui5-responsive-popover>`}function D(n,e,i){return i?o`<div slot="header" class="ui5-menu-dialog-header"><${s("ui5-button",e,i)} icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${t(this.labelBack)}" @click=${this._close}></${s("ui5-button",e,i)}><div class="ui5-menu-dialog-title"><div>${t(this.text)}</div></div><${s("ui5-button",e,i)} icon="decline" design="Transparent" aria-label="${t(this.labelClose)}" @click=${this._closeAll}></${s("ui5-button",e,i)}></div>`:o`<div slot="header" class="ui5-menu-dialog-header"><ui5-button icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${t(this.labelBack)}" @click=${this._close}></ui5-button><div class="ui5-menu-dialog-title"><div>${t(this.text)}</div></div><ui5-button icon="decline" design="Transparent" aria-label="${t(this.labelClose)}" @click=${this._closeAll}></ui5-button></div>`}function E(n,e,i){return i?o`<${s("ui5-list",e,i)} id="${t(this._id)}-menu-list" selection-mode="None" separators="None" accessible-role="menu" ?loading="${this.loading}" loading-delay="${t(this.loadingDelay)}" @ui5-close-menu=${t(this._close)}><slot></slot></${s("ui5-list",e,i)}>`:o`<ui5-list id="${t(this._id)}-menu-list" selection-mode="None" separators="None" accessible-role="menu" ?loading="${this.loading}" loading-delay="${t(this.loadingDelay)}" @ui5-close-menu=${t(this._close)}><slot></slot></ui5-list>`}function B(n,e,i){return o`${this.loading?Pe.call(this,n,e,i):void 0}`}function Pe(n,e,i){return i?o`<${s("ui5-busy-indicator",e,i)} id="${t(this._id)}-menu-busy-indicator" delay="${t(this.loadingDelay)}" class="ui5-menu-busy-indicator" active></${s("ui5-busy-indicator",e,i)}>`:o`<ui5-busy-indicator id="${t(this._id)}-menu-busy-indicator" delay="${t(this.loadingDelay)}" class="ui5-menu-busy-indicator" active></ui5-busy-indicator>`}v("@ui5/webcomponents-theming","sap_horizon",async()=>C);v("@ui5/webcomponents","sap_horizon",async()=>M);const Te={packageName:"@ui5/webcomponents",fileName:"themes/MenuItem.css.ts",content:`.ui5-menu-rp[ui5-responsive-popover]::part(header),.ui5-menu-rp[ui5-responsive-popover]::part(content),.ui5-menu-rp[ui5-responsive-popover]::part(footer){padding:0}.ui5-menu-rp[ui5-responsive-popover]{box-shadow:var(--sapContent_Shadow1);border-radius:var(--_ui5-v2-1-1_menu_popover_border_radius)}.ui5-menu-busy-indicator{width:100%}.ui5-menu-dialog-header{display:flex;height:var(--_ui5-v2-1-1-responsive_popover_header_height);align-items:center;justify-content:space-between;padding:0px 1rem;width:100%;overflow:hidden}.ui5-menu-dialog-title{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;width:calc(100% - 6.5rem);padding-right:1rem}.ui5-menu-dialog-title>div{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-menu-back-button{margin-right:1rem}.ui5-menu-rp[sub-menu]{margin-top:.25rem;margin-inline:var(--_ui5-v2-1-1_menu_submenu_margin_offset)}.ui5-menu-rp[sub-menu][actual-placement=Start]{margin-top:.25rem;margin-inline:var(--_ui5-v2-1-1_menu_submenu_placement_type_left_margin_offset)}:host([disabled]){pointer-events:initial;opacity:initial}:host([disabled])::part(content){opacity:var(--_ui5-v2-1-1-listitembase_disabled_opacity)}:host([disabled][actionable]:not([active]):not([selected]):hover),:host([disabled][active][actionable]){background:var(--ui5-v2-1-1-listitem-background-color)}:host([disabled][active][actionable]) .ui5-li-root .ui5-li-icon{color:var(--sapContent_NonInteractiveIconColor)}:host([active][actionable]:not([disabled]))::part(content),:host([active][actionable]:not([disabled]))::part(additional-text){color:var(--sapList_Active_TextColor)}:host([focused]:not([active]):not([disabled])){background-color:var(--sapList_Hover_Background)}:host::part(additional-text){margin:unset;margin-inline-start:1rem;color:var(--sapContent_LabelColor);min-width:max-content}.ui5-menu-item-text{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;display:inline-block}.ui5-menu-item-dummy-icon{visibility:hidden}:host::part(title){font-size:var(--sapFontSize);padding-top:.125rem}:host([icon]:not([is-phone]))::part(title),:host([is-phone]:not([icon=""]))::part(title){padding-top:0}:host(:not([is-phone]))::part(native-li){padding:var(--_ui5-v2-1-1_menu_item_padding)}:host::part(content){padding-inline-end:.25rem}.ui5-menu-item-submenu-icon{min-width:var(--_ui5-v2-1-1_list_item_icon_size);min-height:var(--_ui5-v2-1-1_list_item_icon_size);display:inline-block;vertical-align:middle;pointer-events:none}.ui5-menu-item-icon-end{display:inline-block;vertical-align:middle;padding-inline-start:.5rem;pointer-events:none;position:absolute;inset-inline-end:var(--_ui5-v2-1-1_menu_item_submenu_icon_right)}.ui5-menu-item-dummy-icon{min-width:var(--_ui5-v2-1-1_list_item_icon_size);min-height:var(--_ui5-v2-1-1_list_item_icon_size);display:inline-block;vertical-align:middle;padding-inline-end:.5rem;pointer-events:none}
`};var p=function(n,e,i,l){var r=arguments.length,a=r<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,i):l,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,e,i,l);else for(var h=n.length-1;h>=0;h--)(c=n[h])&&(a=(r<3?c(a):r>3?c(e,i,a):c(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},$;let d=$=class extends w{constructor(){super(...arguments),this.disabled=!1,this.loading=!1,this.loadingDelay=1e3,this.accessibilityAttributes={},this._siblingsWithIcon=!1}static async onDefine(){$.i18nBundle=await x("@ui5/webcomponents")}get placement(){return this.isRtl?"Start":"End"}get isRtl(){return this.effectiveDir==="rtl"}get hasSubmenu(){return!!(this.items.length||this.loading)&&!this.disabled}get hasEndContent(){return!!this.endContent.length}get hasIcon(){return!!this.icon}get isSubMenuOpen(){var e;return(e=this._popover)==null?void 0:e.open}get ariaLabelledByText(){return`${this.text} ${this.accessibleName}`.trim()}get menuHeaderTextPhone(){return this.text}get isPhone(){return S()}get labelBack(){return $.i18nBundle.getText(X)}get labelClose(){return $.i18nBundle.getText(H)}get isSeparator(){return!1}onBeforeRendering(){const e=this._menuItems.some(i=>!!i.icon);this._menuItems.forEach(i=>{i._siblingsWithIcon=e})}get _focusable(){return!0}get _accInfo(){const e={role:this.accessibilityAttributes.role||"menuitem",ariaHaspopup:this.hasSubmenu?Q.Menu.toLowerCase():void 0,ariaKeyShortcuts:this.accessibilityAttributes.ariaKeyShortcuts,ariaHidden:this.additionalText&&this.accessibilityAttributes.ariaKeyShortcuts?!0:void 0};return{...super._accInfo,...e}}get _popover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}get _menuItems(){return this.items.filter(e=>!e.isSeparator)}_closeAll(){this._popover&&(this._popover.open=!1),this.selected=!1,this.fireEvent("close-menu",{})}_close(){this._popover&&(this._popover.open=!1),this.selected=!1}_beforePopoverOpen(e){!this.fireEvent("before-open",{},!0,!1)&&e.preventDefault()}_afterPopoverOpen(){var e;(e=this.items[0])==null||e.focus(),this.fireEvent("open",{},!1,!1)}_beforePopoverClose(e){if(!this.fireEvent("before-close",{escPressed:e.detail.escPressed},!0,!1)){e.preventDefault();return}this.selected=!1,e.detail.escPressed&&(this.focus(),S()&&this.fireEvent("close-menu",{}))}_afterPopoverClose(){this.fireEvent("close",{},!1,!1)}};p([u()],d.prototype,"text",void 0);p([u()],d.prototype,"additionalText",void 0);p([u()],d.prototype,"icon",void 0);p([u({type:Boolean})],d.prototype,"disabled",void 0);p([u({type:Boolean})],d.prototype,"loading",void 0);p([u({type:Number})],d.prototype,"loadingDelay",void 0);p([u()],d.prototype,"accessibleName",void 0);p([u()],d.prototype,"tooltip",void 0);p([u({type:Object})],d.prototype,"accessibilityAttributes",void 0);p([u({type:Boolean,noAttribute:!0})],d.prototype,"_siblingsWithIcon",void 0);p([T({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],d.prototype,"items",void 0);p([T({type:HTMLElement})],d.prototype,"endContent",void 0);d=$=p([P({tag:"ui5-menu-item",template:ee,styles:[w.styles,Te],dependencies:[...w.dependencies,A,j,z,V]})],d);d.define();const K=d,oi=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));function Me(n,e,i){return i?o`<${s("ui5-li-custom",e,i)} class="${I(this.classes.main)}" role="separator" disabled></${s("ui5-li-custom",e,i)}>`:o`<ui5-li-custom class="${I(this.classes.main)}" role="separator" disabled></ui5-li-custom>`}v("@ui5/webcomponents-theming","sap_horizon",async()=>C);v("@ui5/webcomponents","sap_horizon",async()=>M);const De={packageName:"@ui5/webcomponents",fileName:"themes/MenuSeparator.css.ts",content:`:host{border-top:.0625rem solid var(--sapGroup_ContentBorderColor);min-height:.125rem}.ui5-menu-separator{border:inherit;min-height:inherit;background:inherit;opacity:1}
`};var Ee=function(n,e,i,l){var r=arguments.length,a=r<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,i):l,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,e,i,l);else for(var h=n.length-1;h>=0;h--)(c=n[h])&&(a=(r<3?c(a):r>3?c(e,i,a):c(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let g=class extends J{get isSeparator(){return!0}get classes(){return{main:{"ui5-menu-separator":!0}}}get _focusable(){return!1}get _pressable(){return!1}};g=Ee([P({tag:"ui5-menu-separator",renderer:R,styles:[De],template:Me,dependencies:[Z]})],g);g.define();const W=g,ai=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));function Be(n,e,i){return i?o`<${s("ui5-responsive-popover",e,i)} id="${t(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Start" placement="Bottom" vertical-align="Bottom" .opener=${t(this.opener)} ?open=${this.open} prevent-initial-focus hide-arrow allow-target-overlap @ui5-before-open=${t(this._beforePopoverOpen)} @ui5-open=${t(this._afterPopoverOpen)} @ui5-before-close=${t(this._beforePopoverClose)} @ui5-close=${t(this._afterPopoverClose)}>${this.isPhone?O.call(this,n,e,i):void 0}<div id="${t(this._id)}-menu-main">${this.items.length?L.call(this,n,e,i):N.call(this,n,e,i)}</div></${s("ui5-responsive-popover",e,i)}>`:o`<ui5-responsive-popover id="${t(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Start" placement="Bottom" vertical-align="Bottom" .opener=${t(this.opener)} ?open=${this.open} prevent-initial-focus hide-arrow allow-target-overlap @ui5-before-open=${t(this._beforePopoverOpen)} @ui5-open=${t(this._afterPopoverOpen)} @ui5-before-close=${t(this._beforePopoverClose)} @ui5-close=${t(this._afterPopoverClose)}>${this.isPhone?O.call(this,n,e,i):void 0}<div id="${t(this._id)}-menu-main">${this.items.length?L.call(this,n,e,i):N.call(this,n,e,i)}</div></ui5-responsive-popover>`}function O(n,e,i){return i?o`<div slot="header" class="ui5-menu-dialog-header"><div class="ui5-menu-dialog-title"><div>${t(this.headerText)}</div></div><${s("ui5-button",e,i)} icon="decline" design="Transparent" aria-label="${t(this.labelClose)}" @click=${this._close}></${s("ui5-button",e,i)}></div>`:o`<div slot="header" class="ui5-menu-dialog-header"><div class="ui5-menu-dialog-title"><div>${t(this.headerText)}</div></div><ui5-button icon="decline" design="Transparent" aria-label="${t(this.labelClose)}" @click=${this._close}></ui5-button></div>`}function L(n,e,i){return i?o`<${s("ui5-list",e,i)} id="${t(this._id)}-menu-list" selection-mode="None" ?loading="${this.loading}" loading-delay="${t(this.loadingDelay)}" separators="None" accessible-role="Menu" @ui5-item-click=${t(this._itemClick)} @ui5-close-menu=${t(this._close)} @mouseover=${this._itemMouseOver} @keydown=${this._itemKeyDown}><slot></slot></${s("ui5-list",e,i)}>`:o`<ui5-list id="${t(this._id)}-menu-list" selection-mode="None" ?loading="${this.loading}" loading-delay="${t(this.loadingDelay)}" separators="None" accessible-role="Menu" @ui5-item-click=${t(this._itemClick)} @ui5-close-menu=${t(this._close)} @mouseover=${this._itemMouseOver} @keydown=${this._itemKeyDown}><slot></slot></ui5-list>`}function N(n,e,i){return o`${this.loading?Oe.call(this,n,e,i):void 0}`}function Oe(n,e,i){return i?o`<${s("ui5-busy-indicator",e,i)} id="${t(this._id)}-menu-busy-indicator" delay="${t(this.loadingDelay)}" class="ui5-menu-busy-indicator" active></${s("ui5-busy-indicator",e,i)}>`:o`<ui5-busy-indicator id="${t(this._id)}-menu-busy-indicator" delay="${t(this.loadingDelay)}" class="ui5-menu-busy-indicator" active></ui5-busy-indicator>`}v("@ui5/webcomponents-theming","sap_horizon",async()=>C);v("@ui5/webcomponents","sap_horizon",async()=>M);const Le={packageName:"@ui5/webcomponents",fileName:"themes/Menu.css.ts",content:`.ui5-menu-rp[ui5-responsive-popover]::part(header),.ui5-menu-rp[ui5-responsive-popover]::part(content),.ui5-menu-rp[ui5-responsive-popover]::part(footer){padding:0}.ui5-menu-rp[ui5-responsive-popover]{box-shadow:var(--sapContent_Shadow1);border-radius:var(--_ui5-v2-1-1_menu_popover_border_radius)}.ui5-menu-busy-indicator{width:100%}.ui5-menu-dialog-header{display:flex;height:var(--_ui5-v2-1-1-responsive_popover_header_height);align-items:center;justify-content:space-between;padding:0px 1rem;width:100%;overflow:hidden}.ui5-menu-dialog-title{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;width:calc(100% - 6.5rem);padding-right:1rem}.ui5-menu-dialog-title>div{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-menu-back-button{margin-right:1rem}
`};var b=function(n,e,i,l){var r=arguments.length,a=r<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,i):l,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,e,i,l);else for(var h=n.length-1;h>=0;h--)(c=n[h])&&(a=(r<3?c(a):r>3?c(e,i,a):c(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},f;const Ne=300;let m=f=class extends U{constructor(){super(...arguments),this.open=!1,this.loading=!1,this.loadingDelay=1e3}static async onDefine(){f.i18nBundle=await x("@ui5/webcomponents")}get isRtl(){return this.effectiveDir==="rtl"}get labelClose(){return f.i18nBundle.getText(H)}get isPhone(){return S()}get _popover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}get _menuItems(){return this.items.filter(e=>!e.isSeparator)}onBeforeRendering(){const e=this._menuItems.some(i=>!!i.icon);this._menuItems.forEach(i=>{i._siblingsWithIcon=e})}_close(){this.open=!1}_openItemSubMenu(e){clearTimeout(this._timeout),!(!e._popover||e._popover.open)&&(this.fireEvent("before-open",{item:e},!1,!1),e._popover.opener=e,e._popover.open=!0,e.selected=!0)}_closeItemSubMenu(e){if(e&&e._popover){const i=e._menuItems.find(l=>l._popover&&l._popover.open);i&&this._closeItemSubMenu(i),e._popover.open=!1,e.selected=!1}}_itemMouseOver(e){if(q()){const i=e.target;i.hasAttribute("ui5-menu-item")&&(i.focus(),this._startOpenTimeout(i))}}_startOpenTimeout(e){clearTimeout(this._timeout),this._timeout=setTimeout(()=>{const i=e.parentElement,l=i&&i._menuItems.find(r=>r._popover&&r._popover.open);l&&this._closeItemSubMenu(l),this._openItemSubMenu(e)},Ne)}_itemClick(e){const i=e.detail.item;i._popover?this._openItemSubMenu(i):this.fireEvent("item-click",{item:i,text:i.text||""},!0,!1)&&this._popover&&i.fireEvent("close-menu",{})}_itemKeyDown(e){var c;if(!y(e)&&!k(e))return;const i=this.isRtl?k(e):y(e),l=this.isRtl?y(e):k(e),r=e.target,a=r.parentElement;F(e)&&e.preventDefault(),l?this._openItemSubMenu(r):i&&a.hasAttribute("ui5-menu-item")&&a._popover&&(a._popover.open=!1,a.selected=!1,(c=a._popover.opener)==null||c.focus())}_beforePopoverOpen(e){!this.fireEvent("before-open",{},!0,!0)&&(this.open=!1,e.preventDefault())}_afterPopoverOpen(){var e;(e=this._menuItems[0])==null||e.focus(),this.fireEvent("open",{},!1,!0)}_beforePopoverClose(e){!this.fireEvent("before-close",{escPressed:e.detail.escPressed},!0,!0)&&(this.open=!0,e.preventDefault())}_afterPopoverClose(){this.open=!1,this.fireEvent("close",{},!1,!0)}};b([u()],m.prototype,"headerText",void 0);b([u({type:Boolean})],m.prototype,"open",void 0);b([u({type:Boolean})],m.prototype,"loading",void 0);b([u({type:Number})],m.prototype,"loadingDelay",void 0);b([u({converter:G})],m.prototype,"opener",void 0);b([T({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],m.prototype,"items",void 0);m=f=b([P({tag:"ui5-menu",renderer:R,styles:Le,template:Be,dependencies:[A,Y,j,K,W,z]}),_("item-click",{detail:{item:{type:HTMLElement},text:{type:String}}}),_("before-open",{detail:{item:{type:HTMLElement}}}),_("open"),_("before-close",{detail:{escPressed:{type:Boolean}}}),_("close")],m);m.define();const Re=m,ri=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"}));export{Re as M,oi as a,ai as b,ri as c,Le as s};
