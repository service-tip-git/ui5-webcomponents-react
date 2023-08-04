import{_ as E}from"./iframe-4e2a5c10.js";import{r as N,U as A,l as x}from"./UI5Element-a4bd3d38.js";import{b as u,d,l as o,s as j,a as U,p as r,c as R,f as H,w as V}from"./withWebComponent-7d7e5133.js";import{s as q}from"./slot-76e48863.js";import{c as g,a as W,e as f}from"./Icon-42236945.js";import{D as F}from"./Popover-26ef4370.js";import{c as I,b as $,l as z}from"./Icons-74c917eb.js";import{i as _,b as S,d as K}from"./Device-6afa24d0.js";import"./slim-arrow-right-b5a9fe30.js";import{I as L}from"./Integer-f7f172c9.js";import G from"./ResponsivePopover-1151e741.js";import{b as J}from"./Button-02dfef34.js";import{d as Q}from"./ListItemBase-472e3755.js";import X from"./StandardListItem-afe74127.js";import{a as Y}from"./BusyIndicator-ce1a2cfb.js";import{aq as Z,ar as ee}from"./i18n-defaults-d5d083dd.js";function te(s,e,t){return t?u`<${d("ui5-responsive-popover",e,t)} id="${o(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Left" placement-type=${o(this.placementType)} vertical-align=${o(this.verticalAlign)} hide-arrow allow-target-overlap ?sub-menu=${this._isSubMenu} @ui5-before-open=${o(this._beforePopoverOpen)} @ui5-after-open=${o(this._afterPopoverOpen)} @ui5-before-close=${o(this._beforePopoverClose)} @ui5-after-close=${o(this._afterPopoverClose)}>${this.isPhone?w.call(this,s,e,t):void 0}<div id="${o(this._id)}-menu-main">${this._currentItems.length?T.call(this,s,e,t):B.call(this,s,e,t)}</div></${d("ui5-responsive-popover",e,t)}><div class="ui5-menu-submenus"></div>`:u`<ui5-responsive-popover id="${o(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Left" placement-type=${o(this.placementType)} vertical-align=${o(this.verticalAlign)} hide-arrow allow-target-overlap ?sub-menu=${this._isSubMenu} @ui5-before-open=${o(this._beforePopoverOpen)} @ui5-after-open=${o(this._afterPopoverOpen)} @ui5-before-close=${o(this._beforePopoverClose)} @ui5-after-close=${o(this._afterPopoverClose)}>${this.isPhone?w.call(this,s,e,t):void 0}<div id="${o(this._id)}-menu-main">${this._currentItems.length?T.call(this,s,e,t):B.call(this,s,e,t)}</div></ui5-responsive-popover><div class="ui5-menu-submenus"></div>`}function w(s,e,t){return t?u`<div slot="header" class="ui5-menu-dialog-header">${this.isSubMenuOpened?D.call(this,s,e,t):void 0}<div class="ui5-menu-dialog-title"><div>${o(this.menuHeaderTextPhone)}</div></div><${d("ui5-button",e,t)} icon="decline" design="Transparent" aria-label="${o(this.labelClose)}" @click=${this.close}></${d("ui5-button",e,t)}></div>`:u`<div slot="header" class="ui5-menu-dialog-header">${this.isSubMenuOpened?D.call(this,s,e,t):void 0}<div class="ui5-menu-dialog-title"><div>${o(this.menuHeaderTextPhone)}</div></div><ui5-button icon="decline" design="Transparent" aria-label="${o(this.labelClose)}" @click=${this.close}></ui5-button></div>`}function D(s,e,t){return t?u`<${d("ui5-button",e,t)} icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${o(this.labelBack)}" @click=${this._navigateBack}></${d("ui5-button",e,t)}>`:u`<ui5-button icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${o(this.labelBack)}" @click=${this._navigateBack}></ui5-button>`}function T(s,e,t){return t?u`<${d("ui5-list",e,t)} id="${o(this._id)}-menu-list" mode="None" ?busy="${this.busy}" busy-delay="${o(this.busyDelay)}" separators="None" accessible-role="menu" @ui5-item-click=${o(this._itemClick)} @mouseover="${this._busyMouseOver}">${g(this._currentItems,(n,i)=>n._id||i,(n,i)=>C.call(this,s,e,t,n,i))}</${d("ui5-list",e,t)}>`:u`<ui5-list id="${o(this._id)}-menu-list" mode="None" ?busy="${this.busy}" busy-delay="${o(this.busyDelay)}" separators="None" accessible-role="menu" @ui5-item-click=${o(this._itemClick)} @mouseover="${this._busyMouseOver}">${g(this._currentItems,(n,i)=>n._id||i,(n,i)=>C.call(this,s,e,t,n,i))}</ui5-list>`}function C(s,e,t,n,i){return t?u`<${d("ui5-li",e,t)} .associatedItem="${o(n.item)}" class="ui5-menu-item" id="${o(this._id)}-menu-item-${i}" .icon="${o(n.item.icon)}" accessible-name=${o(n.item.ariaLabelledByText)} accessible-role="menuitem" .additionalText="${o(n.item._additionalText)}" ._ariaHasPopup=${o(n.ariaHasPopup)} ?disabled=${n.item.disabled} ?starts-section=${n.item.startsSection} ?selected=${n.item.subMenuOpened} ?is-phone=${this.isPhone} @mouseover=${this._itemMouseOver} @mouseout=${this._itemMouseOut} @keydown=${this._itemKeyDown}>${n.item.hasDummyIcon?k.call(this,s,e,t,n,i):void 0}${o(n.item.text)}${n.item.hasSubmenu?O.call(this,s,e,t,n,i):P.call(this,s,e,t,n,i)}</${d("ui5-li",e,t)}>`:u`<ui5-li .associatedItem="${o(n.item)}" class="ui5-menu-item" id="${o(this._id)}-menu-item-${i}" .icon="${o(n.item.icon)}" accessible-name=${o(n.item.ariaLabelledByText)} accessible-role="menuitem" .additionalText="${o(n.item._additionalText)}" ._ariaHasPopup=${o(n.ariaHasPopup)} ?disabled=${n.item.disabled} ?starts-section=${n.item.startsSection} ?selected=${n.item.subMenuOpened} ?is-phone=${this.isPhone} @mouseover=${this._itemMouseOver} @mouseout=${this._itemMouseOut} @keydown=${this._itemKeyDown}>${n.item.hasDummyIcon?k.call(this,s,e,t,n,i):void 0}${o(n.item.text)}${n.item.hasSubmenu?O.call(this,s,e,t,n,i):P.call(this,s,e,t,n,i)}</ui5-li>`}function k(s,e,t,n,i){return u`<div class="ui5-menu-item-dummy-icon"></div>`}function O(s,e,t,n,i){return t?u`<${d("ui5-icon",e,t)} part="icon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></${d("ui5-icon",e,t)}>`:u`<ui5-icon part="icon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></ui5-icon>`}function P(s,e,t,n,i){return u`${n.item._siblingsWithChildren?ne.call(this,s,e,t,n,i):void 0}`}function ne(s,e,t,n,i){return u`<div class="ui5-menu-item-no-icon-end"></div>`}function B(s,e,t){return u`${this.busy?ie.call(this,s,e,t):void 0}`}function ie(s,e,t){return t?u`<${d("ui5-busy-indicator",e,t)} id="${o(this._id)}-menu-busy-indicator" delay="${o(this.busyDelay)}" class="ui5-menu-busy-indicator" @mouseover="${this._busyMouseOver}" active></${d("ui5-busy-indicator",e,t)}>`:u`<ui5-busy-indicator id="${o(this._id)}-menu-busy-indicator" delay="${o(this.busyDelay)}" class="ui5-menu-busy-indicator" @mouseover="${this._busyMouseOver}" active></ui5-busy-indicator>`}N("@ui5/webcomponents-theming","sap_fiori_3",async()=>j);N("@ui5/webcomponents","sap_fiori_3",async()=>U);const oe={packageName:"@ui5/webcomponents",fileName:"themes/Menu.css",content:`
.ui5-menu-rp[ui5-responsive-popover]::part(header),
.ui5-menu-rp[ui5-responsive-popover]::part(content),
.ui5-menu-rp[ui5-responsive-popover]::part(footer) {
	padding: 0;
}

.ui5-menu-rp[ui5-responsive-popover] {
	box-shadow: var(--sapContent_Shadow1);
	border-radius: var(--_ui5_menu_popover_border_radius);
	max-width: 20rem;
}

.ui5-menu-item-icon-end {
	display: inline-block;
	vertical-align: middle;
	padding-inline-start: 0.5rem;
	pointer-events: none;
	position: absolute;
	inset-inline-end: var(--_ui5_menu_item_submenu_icon_right);
}

.ui5-menu-item-no-icon-end {
	min-width: var(--_ui5_list_item_icon_size);
	min-height: var(--_ui5_list_item_icon_size);
	display: inline-block;
	vertical-align: middle;
	padding-inline-start: 0.5rem;
	pointer-events: none;
	inset-inline-end: var(--_ui5_menu_item_submenu_icon_right);
}

.ui5-menu-item[additional-text] .ui5-menu-item-no-icon-end {
	display: none;
}

.ui5-menu-item-dummy-icon {
	min-width: var(--_ui5_list_item_icon_size);
	min-height: var(--_ui5_list_item_icon_size);
	display: inline-block;
	vertical-align: middle;
	padding-inline-end: 0.5rem;
	pointer-events: none;
}

.ui5-menu-busy-indicator {
	width: 100%;
}

.ui5-menu-dialog-header {
	display: flex;
	height: var(--_ui5-responsive_popover_header_height);
	align-items: center;
	justify-content: space-between;
	padding: 0px 1rem;
	width: 100%;
	overflow: hidden;
}

.ui5-menu-dialog-title {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	width: calc(100% - 6.5rem);
	padding-right: 1rem;
}

.ui5-menu-dialog-title > div {
	display: inline-block;
	max-width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.ui5-menu-back-button {
	margin-right: 1rem;
}

.ui5-menu-item::part(title) {
    font-size: var(--sapFontSize);
	padding-top: 0.125rem;
}

.ui5-menu-item[icon]:not([is-phone])::part(title),
.ui5-menu-item[is-phone]:not([icon=""])::part(title) {
	padding-top: 0;
}

.ui5-menu-item:not([is-phone])::part(native-li) {
	padding: var(--_ui5_menu_item_padding);
}

.ui5-menu-item[starts-section] {
	border-top: 1px solid var(--sapGroup_ContentBorderColor);
}

.ui5-menu-item[active] .ui5-menu-item-icon-end {
	color: var(--sapList_Active_TextColor);
}

.ui5-menu-item[focused]:not([active]) {
	background-color: var(--sapList_Hover_Background);
}

.ui5-menu-rp[sub-menu] {
	margin-top: 0.25rem;
	margin-inline: var(--_ui5_menu_submenu_margin_offset);
}

.ui5-menu-rp[sub-menu][actual-placement-type="Left"] {
	margin-top: 0.25rem;
	margin-inline: var(--_ui5_menu_submenu_placement_type_left_margin_offset);
}

.ui5-menu-item::part(additional-text) {
	margin-inline-start: var(--_ui5_menu_item_additional_text_start_margin);
	color: var(--sapContent_LabelColor);
	min-width: max-content;
}`};var m=globalThis&&globalThis.__decorate||function(s,e,t,n){var i=arguments.length,a=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(s,e,t,n);else for(var b=s.length-1;b>=0;b--)(h=s[b])&&(a=(i<3?h(a):i>3?h(e,t,a):h(e,t))||a);return i>3&&a&&Object.defineProperty(e,t,a),a},v;let l=v=class extends A{static async onDefine(){v.i18nBundle=await x("@ui5/webcomponents")}get itemsWithChildren(){return!!this._currentItems.filter(e=>e.item.items.length).length}get itemsWithIcon(){return!!this._currentItems.filter(e=>e.item.icon!=="").length}get isRtl(){return this.effectiveDir==="rtl"}get placementType(){const e=this.isRtl?"Left":"Right";return this._isSubMenu?e:"Bottom"}get verticalAlign(){return this._isSubMenu?"Top":"Bottom"}get labelBack(){return v.i18nBundle.getText(Z)}get labelClose(){return v.i18nBundle.getText(ee)}get isPhone(){return _()}get isSubMenuOpened(){return!!this._parentMenuItem}get menuHeaderTextPhone(){return this._parentMenuItem?this._parentMenuItem.text:this.headerText}onBeforeRendering(){!_()&&this._prepareCurrentItems(this.items);const e=this.itemsWithChildren,t=this.itemsWithIcon;this._currentItems.forEach(n=>{n.item._siblingsWithChildren=e,n.item._siblingsWithIcon=t;const i=n.item._subMenu,a=n.item;i&&i.busy&&(i.innerHTML="",this._cloneItems(a,i)),i&&(i.busy=n.item.busy,i.busyDelay=n.item.busyDelay)})}onAfterRendering(){if(this.opener)if(this.open){const e=this.getRootNode(),t=this.opener instanceof HTMLElement?this.opener:e&&e.getElementById(this.opener);t&&this.showAt(t)}else this.close()}async showAt(e){_()&&(this._prepareCurrentItems(this.items),this._parentItemsStack=[]),this._isSubMenu||(this._parentMenuItem=void 0);const t=await this._createPopover();t.initialFocus="";for(let n=0;n<this._currentItems.length;n++)if(!this._currentItems[n].item.disabled){t.initialFocus=`${this._id}-menu-item-${n}`;break}t.showAt(e)}close(){this._popover&&(_()&&(this._parentItemsStack=[]),this._popover.close(),this._popover.resetFocus())}async _createPopover(){const e=await this.getStaticAreaItemDomRef();return this._popover=e.querySelector("[ui5-responsive-popover]"),this._popover}_navigateBack(){const e=this._parentItemsStack.pop();if(this.focus(),e){const t=e.parentElement;this._prepareCurrentItems(t.items),this._parentMenuItem=this._parentItemsStack.length?this._parentItemsStack[this._parentItemsStack.length-1]:void 0}}_prepareCurrentItems(e){this._currentItems=e.map((t,n)=>({item:t,position:n+1,ariaHasPopup:t.hasSubmenu?"menu":void 0}))}_createSubMenu(e,t){const n=this.constructor,i=document.createElement(n.getMetadata().getTag());i._isSubMenu=!0,i.setAttribute("id",`submenu-${t}`),i._parentMenuItem=e,i.busy=e.busy,i.busyDelay=e.busyDelay,this._cloneItems(e,i),this.staticAreaItem.shadowRoot.querySelector(".ui5-menu-submenus").appendChild(i),e._subMenu=i}_cloneItems(e,t){for(let n=0;n<e.items.length;++n){const i=e.items[n].cloneNode(!0);t.appendChild(i)}}_openItemSubMenu(e,t,n){this._findMainMenu(e).fireEvent("before-open",{item:e}),e._subMenu.showAt(t),e._preventSubMenuClose=!0,this._openedSubMenuItem=e,this._subMenuOpenerId=n}_closeItemSubMenu(e,t=!1){e&&(t?(e._preventSubMenuClose=!1,this._closeSubMenuPopover(e._subMenu,!0)):setTimeout(()=>this._closeSubMenuPopover(e._subMenu),0))}_closeSubMenuPopover(e,t=!1){if(e){const n=e._parentMenuItem;(t||!n._preventSubMenuClose)&&(e.close(),e.remove(),n._subMenu=void 0,this._openedSubMenuItem=void 0,this._subMenuOpenerId="")}}_prepareSubMenuDesktopTablet(e,t,n){(n!==this._subMenuOpenerId||e&&e.hasSubmenu)&&this._closeItemSubMenu(this._openedSubMenuItem,!0),e&&e.hasSubmenu&&(this._createSubMenu(e,n),this._openItemSubMenu(e,t,n)),this._parentMenuItem&&(this._parentMenuItem._preventSubMenuClose=!0)}_prepareSubMenuPhone(e){this._prepareCurrentItems(e.items),this._parentMenuItem=e,this._parentItemsStack.push(e)}_itemMouseOver(e){if(S()){const t=e.target,n=t.associatedItem,i=t.getAttribute("id");t.focus(),this._prepareSubMenuDesktopTablet(n,t,i)}}_busyMouseOver(){this._parentMenuItem&&(this._parentMenuItem._preventSubMenuClose=!0)}_itemMouseOut(e){if(S()){const n=e.target.associatedItem;n&&n.hasSubmenu&&n._subMenu&&(n._preventSubMenuClose=!1,this._closeItemSubMenu(n))}}_itemKeyDown(e){const t=this.isRtl?I(e):$(e),n=this.isRtl?$(e):I(e);if(z(e)&&e.preventDefault(),n){const i=e.target,a=i.associatedItem,h=i.getAttribute("id");a.hasSubmenu&&this._prepareSubMenuDesktopTablet(a,i,h)}else t&&this._isSubMenu&&this._parentMenuItem&&this._parentMenuItem.parentElement._closeItemSubMenu(this._parentMenuItem,!0)}_itemClick(e){const t=e.detail.item,n=t.associatedItem,i=t.getAttribute("id");n.hasSubmenu?_()?this._prepareSubMenuPhone(n):K()&&this._prepareSubMenuDesktopTablet(n,t,i):this._isSubMenu?this._findMainMenu(n)._itemClick(e):(_()&&(this._parentMenuItem=void 0),this.fireEvent("item-click",{item:n,text:n.text}),this._popover.close())}_findMainMenu(e){let t=e.parentElement;for(;t._parentMenuItem;)t._parentMenuItem._preventSubMenuClose=!1,this._closeItemSubMenu(t._parentMenuItem),t=t._parentMenuItem.parentElement;return t}_beforePopoverOpen(e){!this.fireEvent("before-open",{},!0,!1)&&(this.open=!1,e.preventDefault())}_afterPopoverOpen(){this.open=!0,this.fireEvent("after-open")}_beforePopoverClose(e){if(!this.fireEvent("before-close",{escPressed:e.detail.escPressed},!0,!1)){this.open=!0,e.preventDefault();return}this._openedSubMenuItem&&(this._openedSubMenuItem._preventSubMenuClose=!1,this._closeItemSubMenu(this._openedSubMenuItem))}_afterPopoverClose(){this.open=!1,this.fireEvent("after-close")}};m([r()],l.prototype,"headerText",void 0);m([r({type:Boolean})],l.prototype,"open",void 0);m([r({type:Boolean})],l.prototype,"busy",void 0);m([r({validator:L,defaultValue:1e3})],l.prototype,"busyDelay",void 0);m([r({validator:F,defaultValue:""})],l.prototype,"opener",void 0);m([r({type:Boolean,noAttribute:!0})],l.prototype,"_isSubMenu",void 0);m([r()],l.prototype,"_subMenuOpenerId",void 0);m([r({type:Object,multiple:!0})],l.prototype,"_currentItems",void 0);m([r({type:Object,multiple:!0})],l.prototype,"_parentItemsStack",void 0);m([r({type:Object,defaultValue:void 0})],l.prototype,"_popover",void 0);m([r({type:Object,defaultValue:void 0})],l.prototype,"_parentMenuItem",void 0);m([r({type:Object,defaultValue:void 0})],l.prototype,"_openedSubMenuItem",void 0);m([q({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],l.prototype,"items",void 0);l=v=m([R({tag:"ui5-menu",renderer:H,staticAreaStyles:oe,staticAreaTemplate:te,dependencies:[G,J,Q,X,W,Y]}),f("item-click",{detail:{item:{type:HTMLElement},text:{type:String}}}),f("before-open",{detail:{item:{type:HTMLElement}}}),f("after-open"),f("before-close",{detail:{escPressed:{type:Boolean}}}),f("after-close")],l);l.define();const se=l,re=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"})),y=V("ui5-menu",["busyDelay","headerText","opener"],["busy","open"],[],["after-close","after-open","before-close","before-open","item-click"],()=>E(()=>Promise.resolve().then(()=>re),void 0,import.meta.url));y.displayName="Menu";y.defaultProps={busyDelay:1e3,opener:""};try{y.displayName="Menu",y.__docgenInfo={description:`\`Menu\` component represents a hierarchical menu structure.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Menu)`,displayName:"Menu",props:{children:{defaultValue:null,description:"Defines the items of this component.\n\n**Note:** Use `MenuItem` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onAfterClose:{defaultValue:null,description:"Fired after the menu is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the menu is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. **This event does not bubble.** **Note:** Since 1.14.0 the event is also fired before a sub-menu opens.",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuBeforeOpenEventDetail>) => void"}},onItemClick:{defaultValue:null,description:"Fired when an item is being clicked.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuItemClickEventDetail>) => void"}},busy:{defaultValue:null,description:"Defines if a loading indicator would be displayed inside the corresponding Menu popover.",name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding Menu popover..",name:"busyDelay",required:!1,type:{name:"number"}},headerText:{defaultValue:null,description:"Defines the header text of the menu (displayed on mobile).",name:"headerText",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Indicates if the menu is open",name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:""},description:"Defines the ID of the element that the menu is shown at",name:"opener",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var c=globalThis&&globalThis.__decorate||function(s,e,t,n){var i=arguments.length,a=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(s,e,t,n);else for(var b=s.length-1;b>=0;b--)(h=s[b])&&(a=(i<3?h(a):i>3?h(e,t,a):h(e,t))||a);return i>3&&a&&Object.defineProperty(e,t,a),a};let p=class extends A{get hasSubmenu(){return!!(this.items.length||this.busy)}get hasDummyIcon(){return this._siblingsWithIcon&&!this.icon}get subMenuOpened(){return!!this._subMenu}get _additionalText(){return this.hasSubmenu?"":this.additionalText}get ariaLabelledByText(){return`${this.text} ${this.accessibleName}`.trim()}};c([r()],p.prototype,"text",void 0);c([r()],p.prototype,"additionalText",void 0);c([r()],p.prototype,"icon",void 0);c([r({type:Boolean})],p.prototype,"startsSection",void 0);c([r({type:Boolean})],p.prototype,"disabled",void 0);c([r({type:Boolean})],p.prototype,"busy",void 0);c([r({validator:L,defaultValue:1e3})],p.prototype,"busyDelay",void 0);c([r()],p.prototype,"accessibleName",void 0);c([r({type:Boolean,noAttribute:!0})],p.prototype,"_siblingsWithChildren",void 0);c([r({type:Boolean,noAttribute:!0})],p.prototype,"_siblingsWithIcon",void 0);c([r({type:Boolean,noAttribute:!0})],p.prototype,"_preventSubMenuClose",void 0);c([r({type:Object,defaultValue:void 0})],p.prototype,"_subMenu",void 0);c([q({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],p.prototype,"items",void 0);p=c([R("ui5-menu-item")],p);p.define();const ae=p,ue=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),M=V("ui5-menu-item",["accessibleName","additionalText","busyDelay","icon","text"],["busy","disabled","startsSection"],[],[],()=>E(()=>Promise.resolve().then(()=>ue),void 0,import.meta.url));M.displayName="MenuItem";M.defaultProps={busyDelay:1e3};try{M.displayName="MenuItem",M.__docgenInfo={description:"`MenuItem` is the item to use inside a `Menu`. An arbitrary hierarchy structure can be represented by recursively nesting menu items.",displayName:"MenuItem",props:{children:{defaultValue:null,description:"Defines the items of this component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},additionalText:{defaultValue:null,description:"Defines the `additionalText`, displayed in the end of the menu item. **Note:** The additional text would not be displayed if the item has a submenu.",name:"additionalText",required:!1,type:{name:"string"}},busy:{defaultValue:null,description:"Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding Menu popover. Note: If set to `true` a `BusyIndicator` component will be displayed into the related one to the current `MenuItem` sub-menu popover.",name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding Menu popover.",name:"busyDelay",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"Defines whether `MenuItem` is in disabled state.\n\n**Note:** A disabled `MenuItem` is noninteractive.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

**\\* Example:** See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,name:"icon",required:!1,type:{name:"string"}},startsSection:{defaultValue:null,description:"Defines whether a visual separator should be rendered before the item.",name:"startsSection",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the tree item.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{y as M,M as a};
//# sourceMappingURL=index-3280c3e0.js.map
