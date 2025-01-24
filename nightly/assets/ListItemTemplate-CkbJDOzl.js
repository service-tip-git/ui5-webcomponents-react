import{p as y,d as D,s as r,m as E,e as L,c as _,j as s}from"./withWebComponent-DfVDXLfc.js";import{b as p,i as f,s as w,V as B}from"./Keys-Df3IBHp2.js";import{t as A}from"./getActiveElement-kltGt_DR.js";import{c as N}from"./FocusableElements-DmMpNXMH.js";import{l as x}from"./event-strict-DgQLNDEV.js";import{d as k}from"./slot-_4yKMUwC.js";import{i as M}from"./i18n-DEVDpFvK.js";import{d as R}from"./decline-BOQDYlzc.js";import{d as I,L as a}from"./List-DgtIRlaK.js";import{aT as P,aU as z,aV as $,aW as q,aX as O}from"./i18n-defaults-Cyg2J0QB.js";import{d as j}from"./parameters-bundle.css-BzaqQttB.js";import{l as F}from"./ListItemAdditionalText.css-q0vIM3Y4.js";import{i as K}from"./slim-arrow-right-BGBY6--0.js";import{a as S}from"./Button-Bn6Q5CAy.js";import{f as T,I as H}from"./Icon-DVzRT9Bg.js";import{R as U}from"./RadioButton-lJWCrQxa.js";import{C as V}from"./CheckBox-DnHecQN2.js";const X="edit",W="M475 104q5 7 5 12 0 6-5 11L150 453q-4 4-8 4L32 480l22-110q0-5 4-9L384 36q4-4 11-4t11 4zm-34 11l-46-44-64 64 45 45zm-87 88l-46-45L84 381l46 46z",G=!1,J="SAP-icons-v4",Q="@ui5/webcomponents-icons";T(X,{pathData:W,ltr:G,collection:J,packageName:Q});const Y="edit",Z="M505 94q7 9 7 18 0 11-6 17L130 505q-7 7-18 7H26q-11 0-18.5-7.5T0 486v-86q1-5 1.5-8.5T6 384L382 7q9-7 18-7t18 7zM364 198l-50-50L62 400l50 50zm86-86l-50-50-50 50 50 50z",ee=!1,te="SAP-icons-v5",ie="@ui5/webcomponents-icons";T(Y,{pathData:Z,ltr:ee,collection:te,packageName:ie});const oe="edit";var v;(function(t){t.None="None",t.Positive="Positive",t.Critical="Critical",t.Negative="Negative",t.Information="Information"})(v||(v={}));const ne=v;var b;(function(t){t.Inactive="Inactive",t.Active="Active",t.Detail="Detail",t.Navigation="Navigation"})(b||(b={}));const l=b;y("@ui5/webcomponents-theming","sap_horizon",async()=>D);y("@ui5/webcomponents","sap_horizon",async()=>j);const se=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host([navigated]) .ui5-li-root .ui5-li-navigated{width:.1875rem;position:absolute;right:0;top:0;bottom:0;background-color:var(--sapList_SelectionBorderColor)}:host([active][actionable]) .ui5-li-root .ui5-li-icon{color:var(--sapList_Active_TextColor)}:host([active][actionable]) .ui5-li-title,:host([active][actionable]) .ui5-li-desc,:host([active][actionable]) .ui5-li-additional-text{color:var(--sapList_Active_TextColor)}:host([active][actionable]) .ui5-li-additional-text{text-shadow:none}:host([additional-text-state="Critical"]) .ui5-li-additional-text{color:var(--sapCriticalTextColor)}:host([additional-text-state="Positive"]) .ui5-li-additional-text{color:var(--sapPositiveTextColor)}:host([additional-text-state="Negative"]) .ui5-li-additional-text{color:var(--sapNegativeTextColor)}:host([additional-text-state="Information"]) .ui5-li-additional-text{color:var(--sapInformativeTextColor)}:host([has-title][description]){height:5rem}:host([has-title][image]){height:5rem}:host([_has-image]){height:5rem}:host([image]) .ui5-li-content{height:3rem}::slotted(img[slot="image"]){width:var(--_ui5-v2-6-2_list_item_img_size);height:var(--_ui5-v2-6-2_list_item_img_size);border-radius:var(--ui5-v2-6-2-avatar-border-radius);object-fit:contain}:host([description]) .ui5-li-root{padding:1rem}:host([description]) .ui5-li-content{height:3rem}:host([has-title][description]) .ui5-li-title{padding-bottom:.375rem}.ui5-li-text-wrapper{flex-direction:column}:host([description]) .ui5-li-text-wrapper{height:100%;justify-content:space-between;padding:.125rem 0}.ui5-li-description-info-wrapper{display:flex;justify-content:space-between}.ui5-li-additional-text,:host(:not([wrapping-type="Normal"])) .ui5-li-title,.ui5-li-desc{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host([wrapping-type="Normal"]){height:auto}:host([wrapping-type="Normal"]) .ui5-li-content{margin:var(--_ui5-v2-6-2_list_item_content_vertical_offset) 0}.ui5-li-desc{color:var(--sapContent_LabelColor);font-size:var(--sapFontSize)}:host([description]) .ui5-li-additional-text{align-self:flex-end}.ui5-li-image{min-width:var(--_ui5-v2-6-2_list_item_img_size);min-height:var(--_ui5-v2-6-2_list_item_img_size);margin-top:var(--_ui5-v2-6-2_list_item_img_top_margin);margin-bottom:var(--_ui5-v2-6-2_list_item_img_bottom_margin);margin-inline-end:var(--_ui5-v2-6-2_list_item_img_hn_margin)}.ui5-li-icon{min-width:var(--_ui5-v2-6-2_list_item_icon_size);min-height:var(--_ui5-v2-6-2_list_item_icon_size);color:var(--sapContent_NonInteractiveIconColor);padding-inline-end:var(--_ui5-v2-6-2_list_item_icon_padding-inline-end)}.ui5-li-detailbtn,.ui5-li-deletebtn{display:flex;align-items:center;margin-left:var(--_ui5-v2-6-2_list_buttons_left_space)}.ui5-li-multisel-cb,.ui5-li-singlesel-radiobtn{flex-shrink:0}:host([description]) .ui5-li-singlesel-radiobtn{align-self:flex-start;margin-top:var(--_ui5-v2-6-2_list_item_selection_btn_margin_top)}:host([description]) .ui5-li-multisel-cb{align-self:flex-start;margin-top:var(--_ui5-v2-6-2_list_item_selection_btn_margin_top)}:host([_selection-mode="SingleStart"]) .ui5-li-root{padding-inline:0 1rem}:host([_selection-mode="Multiple"]) .ui5-li-root{padding-inline:0 1rem}:host([_selection-mode="SingleEnd"]) .ui5-li-root{padding-inline:1rem 0}:host [ui5-checkbox].ui5-li-singlesel-radiobtn{margin-right:var(--_ui5-v2-6-2_list_item_cb_margin_right)}.ui5-li-highlight{position:absolute;width:.375rem;bottom:0;left:0;top:0;border-inline-end:.0625rem solid var(--ui5-v2-6-2-listitem-background-color);box-sizing:border-box}:host([highlight="Negative"]) .ui5-li-highlight{background:var(--sapNegativeTextColor)}:host([highlight="Critical"]) .ui5-li-highlight{background:var(--sapCriticalTextColor)}:host([highlight="Positive"]) .ui5-li-highlight{background:var(--sapPositiveTextColor)}:host([highlight="Information"]) .ui5-li-highlight{background:var(--sapInformativeTextColor)}
`;var o=function(t,e,c,d){var m=arguments.length,n=m<3?e:d===null?d=Object.getOwnPropertyDescriptor(e,c):d,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,c,d);else for(var g=t.length-1;g>=0;g--)(h=t[g])&&(n=(m<3?h(n):m>3?h(e,c,n):h(e,c))||n);return m>3&&n&&Object.defineProperty(e,c,n),n},u;let i=u=class extends I{constructor(){super(),this.type="Active",this.accessibilityAttributes={},this.navigated=!1,this.active=!1,this.highlight="None",this.accessibleRole="ListItem",this._selectionMode="None",this.deactivateByKey=e=>{p(e)&&this.deactivate()},this.deactivate=()=>{this.active&&(this.active=!1)}}onBeforeRendering(){super.onBeforeRendering(),this.actionable=(this.type===l.Active||this.type===l.Navigation)&&this._selectionMode!==a.Delete}onEnterDOM(){super.onEnterDOM(),document.addEventListener("mouseup",this.deactivate),document.addEventListener("touchend",this.deactivate),document.addEventListener("keyup",this.deactivateByKey)}onExitDOM(){document.removeEventListener("mouseup",this.deactivate),document.removeEventListener("keyup",this.deactivateByKey),document.removeEventListener("touchend",this.deactivate)}async _onkeydown(e){if((f(e)||p(e))&&this._isTargetSelfFocusDomRef(e))return;super._onkeydown(e);const c=this.type===l.Active,d=this.typeNavigation;if((f(e)||p(e))&&(c||d)&&this.activate(),w(e)){const m=A(),n=this.getFocusDomRef();if(m===n){const h=await N(n);h==null||h.focus()}else n.focus()}}_onkeyup(e){super._onkeyup(e),(f(e)||p(e))&&this.deactivate(),this.modeDelete&&B(e)&&this.onDelete()}_onmousedown(){this.activate()}_onmouseup(){this.getFocusDomRef().matches(":has(:focus-within)")||this.deactivate()}_ontouchend(){this._onmouseup()}_onfocusin(e){super._onfocusin(e),e.target!==this.getFocusDomRef()&&this.deactivate()}_onfocusout(e){e.target===this.getFocusDomRef()&&this.deactivate()}_ondragstart(e){e.dataTransfer&&e.target===this._listItem&&(this.setAttribute("data-moving",""),e.dataTransfer.dropEffect="move",e.dataTransfer.effectAllowed="move")}_ondragend(e){e.target===this._listItem&&this.removeAttribute("data-moving")}_isTargetSelfFocusDomRef(e){const c=e.target,d=this.getFocusDomRef();return c!==d}onMultiSelectionComponentPress(e){this.isInactive||this.fireDecoratorEvent("selection-requested",{item:this,selected:e.target.checked,selectionComponentPressed:!0})}onSingleSelectionComponentPress(e){this.isInactive||this.fireDecoratorEvent("selection-requested",{item:this,selected:!e.target.checked,selectionComponentPressed:!0})}activate(){(this.type===l.Active||this.type===l.Navigation)&&(this.active=!0)}onDelete(){this.fireDecoratorEvent("selection-requested",{item:this,selectionComponentPressed:!1})}onDetailClick(){this.fireDecoratorEvent("detail-click",{item:this,selected:this.selected})}fireItemPress(e){this.isInactive||(super.fireItemPress(e),document.activeElement!==this&&this.focus())}get isInactive(){return this.type===l.Inactive||this.type===l.Detail}get placeSelectionElementBefore(){return this._selectionMode===a.Multiple||this._selectionMode===a.SingleStart}get placeSelectionElementAfter(){return!this.placeSelectionElementBefore&&(this._selectionMode===a.SingleEnd||this._selectionMode===a.Delete)}get modeSingleSelect(){return[a.SingleStart,a.SingleEnd,a.Single].includes(this._selectionMode)}get modeMultiple(){return this._selectionMode===a.Multiple}get modeDelete(){return this._selectionMode===a.Delete}get renderDeleteButton(){return this.modeDelete}get typeDetail(){return this.type===l.Detail}get typeNavigation(){return this.type===l.Navigation}get typeActive(){return this.type===l.Active}get _ariaSelected(){if(this.modeMultiple||this.modeSingleSelect)return this.selected}get listItemAccessibleRole(){return this._forcedAccessibleRole||this.accessibleRole.toLowerCase()}get ariaSelectedText(){let e;return this._ariaSelected!==void 0&&(e=this._ariaSelected?u.i18nBundle.getText(P):u.i18nBundle.getText(z)),e}get deleteText(){return u.i18nBundle.getText($)}get hasDeleteButtonSlot(){return!!this.deleteButton.length}get _accessibleNameRef(){return this.accessibleName?`${this._id}-invisibleText`:`${this._id}-content ${this._id}-invisibleText`}get _accInfo(){return{role:this.listItemAccessibleRole,ariaExpanded:void 0,ariaLevel:void 0,ariaLabel:u.i18nBundle.getText(q),ariaLabelRadioButton:u.i18nBundle.getText(O),ariaSelectedText:this.ariaSelectedText,ariaHaspopup:this.accessibilityAttributes.hasPopup,setsize:this.accessibilityAttributes.ariaSetsize,posinset:this.accessibilityAttributes.ariaPosinset,tooltip:this.tooltip}}get _hasHighlightColor(){return this.highlight!==ne.None}get hasConfigurableMode(){return!0}get _listItem(){return this.shadowRoot.querySelector("li")}};o([r()],i.prototype,"type",void 0);o([r({type:Object})],i.prototype,"accessibilityAttributes",void 0);o([r({type:Boolean})],i.prototype,"navigated",void 0);o([r()],i.prototype,"tooltip",void 0);o([r({type:Boolean})],i.prototype,"active",void 0);o([r()],i.prototype,"highlight",void 0);o([r({type:Boolean})],i.prototype,"selected",void 0);o([r()],i.prototype,"accessibleRole",void 0);o([r()],i.prototype,"_forcedAccessibleRole",void 0);o([r()],i.prototype,"_selectionMode",void 0);o([k()],i.prototype,"deleteButton",void 0);o([M("@ui5/webcomponents")],i,"i18nBundle",void 0);i=u=o([E({languageAware:!0,renderer:L,styles:[I.styles,F,se]}),x("detail-click",{bubbles:!0}),x("selection-requested",{bubbles:!0})],i);const Be=i,ae={listItemPreContent:le,listItemContent:re,imageBegin:ce,iconBegin:de,iconEnd:he,selectionElement:C};function Ae(t){const e={...ae,...t};return _("li",{part:"native-li","data-sap-focus-ref":!0,tabindex:this._effectiveTabIndex,class:this.classes.main,onFocusIn:this._onfocusin,onFocusOut:this._onfocusout,onKeyUp:this._onkeyup,onKeyDown:this._onkeydown,onMouseUp:this._onmouseup,onMouseDown:this._onmousedown,onTouchStart:this._onmousedown,onTouchEnd:this._ontouchend,onClick:this._onclick,draggable:this.movable,onDragStart:this._ondragstart,onDragEnd:this._ondragend,role:this._accInfo.role,title:this._accInfo.tooltip,"aria-expanded":this._accInfo.ariaExpanded,"aria-level":this._accInfo.ariaLevel,"aria-haspopup":this._accInfo.ariaHaspopup,"aria-posinset":this._accInfo.posinset,"aria-setsize":this._accInfo.setsize,"aria-describedby":`${this._id}-invisibleText-describedby`,"aria-labelledby":this._accessibleNameRef,"aria-disabled":this._ariaDisabled,"aria-selected":this._accInfo.ariaSelected,"aria-checked":this._accInfo.ariaChecked,"aria-owns":this._accInfo.ariaOwns,"aria-keyshortcuts":this._accInfo.ariaKeyShortcuts,children:[e.listItemPreContent.call(this),this.placeSelectionElementBefore&&C.call(this),this._hasHighlightColor&&s("div",{class:"ui5-li-highlight"}),_("div",{part:"content",id:`${this._id}-content`,class:"ui5-li-content",children:[e.imageBegin.call(this),e.iconBegin.call(this),e.listItemContent.call(this)]}),e.iconEnd.call(this),this.typeDetail&&s("div",{class:"ui5-li-detailbtn",children:s(S,{part:"detail-button",design:"Transparent",onClick:this.onDetailClick,icon:oe})}),this.typeNavigation&&s(H,{name:K}),this.navigated&&s("div",{class:"ui5-li-navigated"}),this.placeSelectionElementAfter&&e.selectionElement.call(this),_("span",{id:`${this._id}-invisibleText`,class:"ui5-hidden-text",children:[this._accInfo.listItemAriaLabel,this.accessibleName]}),s("span",{id:`${this._id}-invisibleText-describedby`,class:"ui5-hidden-text",children:this._accInfo.ariaSelectedText})]})}function le(){}function re(){}function ce(){}function de(){}function he(){}function C(){switch(!0){case this.modeSingleSelect:return s(U,{part:"radio",disabled:this.isInactive,accessibleName:this._accInfo.ariaLabelRadioButton,tabindex:-1,id:`${this._id}-singleSelectionElement`,class:"ui5-li-singlesel-radiobtn",checked:this.selected,onChange:this.onSingleSelectionComponentPress});case this.modeMultiple:return s(V,{part:"checkbox",disabled:this.isInactive,indeterminate:this.indeterminate,tabindex:-1,id:`${this._id}-multiSelectionElement`,class:"ui5-li-multisel-cb",checked:this.selected,accessibleName:this._accInfo.ariaLabel,onChange:this.onMultiSelectionComponentPress});case this.renderDeleteButton:return s("div",{class:"ui5-li-deletebtn",children:this.hasDeleteButtonSlot?s("slot",{name:"deleteButton"}):s(S,{part:"delete-button",tabindex:-1,"data-sap-no-tab-ref":!0,id:`${this._id}-deleteSelectionElement`,design:"Transparent",icon:R,disabled:this.disableDeleteButton,onClick:this.onDelete,tooltip:this.deleteText})})}}export{Ae as L,Be as a,l as b,oe as e};
