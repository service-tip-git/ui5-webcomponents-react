import{h as m,F as v,j as i,p as f,d as x,s,m as C,y as w,b as _,B}from"./jsx-runtime-BvNWHM6A.js";import{l}from"./event-strict-DgQLNDEV.js";import{d as g}from"./slot-_4yKMUwC.js";import{i as T}from"./i18n-CjR4HGlq.js";import{n as A}from"./nav-back-BDZ94mxR.js";import{f as S,l as E,r as M}from"./ItemNavigation-hLCo6z-b.js";import{L as P,a as y}from"./ListItemTemplate-DiSrNKxL.js";import{R as k}from"./ResponsivePopover-CdzhsIi8.js";import{a as b}from"./Button-COW9sgS-.js";import{d as O}from"./List-qp8A1Yto.js";import{B as N}from"./BusyIndicator-DTKZVX1f.js";import{d as L}from"./decline-B3prtgTL.js";import{i as R}from"./slim-arrow-right-GFkGzBgQ.js";import{I}from"./Icon-Cx68SyXj.js";import{M as D,g as H,h as z}from"./i18n-defaults-B8cpOtV2.js";import{d as $}from"./parameters-bundle.css-BLEjIEH9.js";const j={listItemContent:U,iconBegin:K};function F(a){const e={...j,...a};return m(v,{children:[P.call(this,e),q.call(this)]})}function U(){return m(v,{children:[this.text&&i("div",{class:"ui5-menu-item-text",children:this.text}),W.call(this)]})}function W(){switch(!0){case this.hasSubmenu:return i("div",{class:"ui5-menu-item-submenu-icon",children:i(I,{part:"subicon",name:R,class:"ui5-menu-item-icon-end"})});case this.hasEndContent:return i("slot",{name:"endContent"});case!!this.additionalText:return i("span",{part:"additional-text",class:"ui5-li-additional-text","aria-hidden":this._accInfo.ariaHidden,children:this.additionalText})}}function K(){if(this.hasIcon)return i(I,{class:"ui5-li-icon",name:this.icon});if(this._siblingsWithIcon)return i("div",{class:"ui5-menu-item-dummy-icon"})}function q(){return this.hasSubmenu&&m(k,{id:`${this._id}-menu-rp`,class:"ui5-menu-rp ui5-menu-rp-sub-menu",preventInitialFocus:!0,preventFocusRestore:!0,hideArrow:!0,allowTargetOverlap:!0,placement:this.placement,verticalAlign:"Top",accessibleName:this.acessibleNameText,onBeforeOpen:this._beforePopoverOpen,onOpen:this._afterPopoverOpen,onBeforeClose:this._beforePopoverClose,onClose:this._afterPopoverClose,children:[this.isPhone&&i(v,{children:m("div",{slot:"header",class:"ui5-menu-dialog-header",children:[i(b,{icon:A,class:"ui5-menu-back-button",design:"Transparent","aria-label":this.labelBack,onClick:this._close}),i("div",{class:"ui5-menu-dialog-title",children:i("div",{children:this.text})}),i(b,{icon:L,design:"Transparent","aria-label":this.labelClose,onClick:this._closeAll})]})}),i("div",{id:`${this._id}-menu-main`,children:this.items.length?i(O,{id:`${this._id}-menu-list`,selectionMode:"None",separators:"None",accessibleRole:"Menu",loading:this.loading,loadingDelay:this.loadingDelay,"onui5-close-menu":this._close,children:i("slot",{})}):this.loading&&i(N,{id:`${this._id}-menu-busy-indicator`,delay:this.loadingDelay,class:"ui5-menu-busy-indicator",active:!0})})]})}f("@ui5/webcomponents-theming","sap_horizon",async()=>x);f("@ui5/webcomponents","sap_horizon",async()=>$);const V=`:host{line-height:initial}::slotted([ui5-menu-item]){line-height:inherit}.ui5-menu-rp[ui5-responsive-popover]::part(header),.ui5-menu-rp[ui5-responsive-popover]::part(content),.ui5-menu-rp[ui5-responsive-popover]::part(footer){padding:0}.ui5-menu-rp[ui5-responsive-popover]{box-shadow:var(--sapContent_Shadow1);border-radius:var(--_ui5-v2-9-0_menu_popover_border_radius)}.ui5-menu-busy-indicator{width:100%}.ui5-menu-dialog-header{display:flex;height:var(--_ui5-v2-9-0-responsive_popover_header_height);align-items:center;justify-content:space-between;padding:0px 1rem;width:100%;overflow:hidden}.ui5-menu-dialog-title{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;width:calc(100% - 6.5rem);padding-right:1rem;font-family:var(--sapFontHeaderFamily)}.ui5-menu-dialog-title>h1{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--sapFontHeader5Size)}.ui5-menu-back-button{margin-right:1rem}.ui5-menu-rp.ui5-menu-rp-sub-menu{margin-top:.25rem;margin-inline:var(--_ui5-v2-9-0_menu_submenu_margin_offset)}.ui5-menu-rp.ui5-menu-rp-sub-menu[actual-placement=Start]{margin-top:.25rem;margin-inline:var(--_ui5-v2-9-0_menu_submenu_placement_type_left_margin_offset)}:host([disabled]){pointer-events:initial;opacity:initial}:host([disabled])::part(content){opacity:var(--_ui5-v2-9-0-listitembase_disabled_opacity)}:host([disabled][actionable]:not([active]):not([selected]):hover),:host([disabled][active][actionable]){background:var(--ui5-v2-9-0-listitem-background-color)}:host([active]:not([disabled])),:host([active]:not([disabled])):hover{background-color:var(--sapList_Active_Background)}:host(:not([active]):not([selected]):not([disabled]):hover){background-color:var(--sapList_Hover_Background)}:host([disabled][active][actionable]) .ui5-li-root .ui5-li-icon{color:var(--sapContent_NonInteractiveIconColor)}:host([active]:not([disabled]))::part(content),:host([active]:not([disabled]))::part(additional-text),:host([active]:not([disabled])) .ui5-li-root .ui5-li-icon{color:var(--sapList_Active_TextColor)}:host([focused]:not([active]):not([disabled])){background-color:var(--sapList_Hover_Background)}:host::part(additional-text){margin:unset;margin-inline-start:1rem;color:var(--sapContent_LabelColor);min-width:max-content}.ui5-menu-item-text{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;display:inline-block}.ui5-menu-item-dummy-icon{visibility:hidden}:host::part(title){font-size:var(--sapFontSize);padding-top:.125rem}:host([icon]:not([is-phone]))::part(title),:host([is-phone]:not([icon=""]))::part(title){padding-top:0}:host(:not([is-phone]))::part(native-li){padding:var(--_ui5-v2-9-0_menu_item_padding)}:host::part(content){padding-inline-end:.25rem}.ui5-menu-item-submenu-icon{min-width:var(--_ui5-v2-9-0_list_item_icon_size);min-height:var(--_ui5-v2-9-0_list_item_icon_size);display:inline-block;vertical-align:middle;pointer-events:none}.ui5-menu-item-icon-end{display:inline-block;vertical-align:middle;padding-inline-start:.5rem;pointer-events:none;position:absolute;inset-inline-end:var(--_ui5-v2-9-0_menu_item_submenu_icon_right)}.ui5-menu-item-submenu-icon .ui5-menu-item-icon-end{color:var(--sapContent_NonInteractiveIconColor)}.ui5-menu-item-dummy-icon{min-width:var(--_ui5-v2-9-0_list_item_icon_size);min-height:var(--_ui5-v2-9-0_list_item_icon_size);display:inline-block;vertical-align:middle;padding-inline-end:.5rem;pointer-events:none}
`;var o=function(a,e,n,d){var c=arguments.length,r=c<3?e:d===null?d=Object.getOwnPropertyDescriptor(e,n):d,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,n,d);else for(var h=a.length-1;h>=0;h--)(p=a[h])&&(r=(c<3?p(r):c>3?p(e,n,r):p(e,n))||r);return c>3&&r&&Object.defineProperty(e,n,r),r},u;let t=u=class extends y{constructor(){super(),this.disabled=!1,this.loading=!1,this.loadingDelay=1e3,this._siblingsWithIcon=!1,this._itemNavigation=new S(this,{navigationMode:M.Horizontal,behavior:E.Static,getItemsCallback:()=>this._navigableItems})}get _navigableItems(){return[...this.endContent].filter(e=>e.hasAttribute("ui5-button")||e.hasAttribute("ui5-link")||e.hasAttribute("ui5-icon")&&e.getAttribute("mode")==="Interactive")}_navigateToEndContent(e){const n=e?this._navigableItems[this._navigableItems.length-1]:this._navigableItems[0];n&&(this._itemNavigation.setCurrentItem(n),this._itemNavigation._focusCurrentItem())}get placement(){return this.isRtl?"Start":"End"}get isRtl(){return this.effectiveDir==="rtl"}get hasSubmenu(){return!!(this.items.length||this.loading)&&!this.disabled}get hasEndContent(){return!!this.endContent.length}get hasIcon(){return!!this.icon}get isSubMenuOpen(){var e;return(e=this._popover)==null?void 0:e.open}get ariaLabelledByText(){return`${this.text} ${this.accessibleName}`.trim()}get menuHeaderTextPhone(){return this.text}get isPhone(){return _()}get labelBack(){return u.i18nBundle.getText(D)}get labelClose(){return u.i18nBundle.getText(H)}get acessibleNameText(){return u.i18nBundle.getText(z)}get isSeparator(){return!1}onBeforeRendering(){super.onBeforeRendering();const e=this._menuItems.some(n=>!!n.icon);this._menuItems.forEach(n=>{n._siblingsWithIcon=e})}async focus(e){return await B(),this.hasSubmenu&&this.isSubMenuOpen?this._menuItems[0].focus(e):super.focus(e)}get _focusable(){return!0}get _accInfo(){const e={role:this.accessibilityAttributes.role||"menuitem",ariaHaspopup:this.hasSubmenu?"menu":void 0,ariaKeyShortcuts:this.accessibilityAttributes.ariaKeyShortcuts,ariaHidden:this.additionalText&&this.accessibilityAttributes.ariaKeyShortcuts?!0:void 0};return{...super._accInfo,...e}}get _popover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}get _menuItems(){return this.items.filter(e=>!e.isSeparator)}_closeAll(){this._popover&&(this._popover.open=!1),this.selected=!1,this.fireDecoratorEvent("close-menu")}_close(){this._popover&&(this._popover.open=!1),this.selected=!1}_beforePopoverOpen(e){!this.fireDecoratorEvent("before-open",{})&&e.preventDefault()}_afterPopoverOpen(){var e;(e=this.items[0])==null||e.focus(),this.fireDecoratorEvent("open")}_beforePopoverClose(e){if(!this.fireDecoratorEvent("before-close",{escPressed:e.detail.escPressed})){e.preventDefault();return}this.selected=!1,e.detail.escPressed&&(this.focus(),_()&&this.fireDecoratorEvent("close-menu"))}_afterPopoverClose(){this.fireDecoratorEvent("close")}get isMenuItem(){return!0}};o([s()],t.prototype,"text",void 0);o([s()],t.prototype,"additionalText",void 0);o([s()],t.prototype,"icon",void 0);o([s({type:Boolean})],t.prototype,"disabled",void 0);o([s({type:Boolean})],t.prototype,"loading",void 0);o([s({type:Number})],t.prototype,"loadingDelay",void 0);o([s()],t.prototype,"accessibleName",void 0);o([s()],t.prototype,"tooltip",void 0);o([s({type:Object})],t.prototype,"accessibilityAttributes",void 0);o([s({type:Boolean,noAttribute:!0})],t.prototype,"_siblingsWithIcon",void 0);o([g({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],t.prototype,"items",void 0);o([g({type:HTMLElement})],t.prototype,"endContent",void 0);o([T("@ui5/webcomponents")],t,"i18nBundle",void 0);t=u=o([C({tag:"ui5-menu-item",renderer:w,template:F,styles:[y.styles,V]}),l("before-open",{cancelable:!0}),l("open"),l("close-menu",{bubbles:!0}),l("before-close",{cancelable:!0}),l("close")],t);t.define();const G=t,pe=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{F as M,G as a,pe as b};
