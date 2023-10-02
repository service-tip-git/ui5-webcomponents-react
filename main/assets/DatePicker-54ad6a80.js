import{b as u,d,l as t,s as V,a as S,p,c as H}from"./withWebComponent-70ea33bf.js";import{s as I}from"./slot-76e48863.js";import{c as y,a as E,e as b}from"./Icon-085ae741.js";import{g as M}from"./CustomElementsScopeUtils-a6667bf6.js";import{c as O,d as N,D as R,g as z,m as B,a as x,b as g}from"./Calendar-b7ebd0a7.js";import{V as m}from"./ValueState-2c5e5904.js";import{g as L}from"./AriaLabelHelper-43a261ec.js";import{r as F,T as U,P as Y,m as j,n as G,V as W,W as J,l as K,X,o as Q,h as Z,Y as ee,q as te,j as ie}from"./Icons-aa504494.js";import{o as re,r as v,p as f,t as ae}from"./UI5Element-9ae3ac4a.js";import"./decline-06bf09c2.js";import{H as oe}from"./HasPopup-47461347.js";import{a4 as ne,aG as se,aH as le}from"./i18n-defaults-edeeca68.js";import{b as pe}from"./Button-bda40b74.js";import de from"./ResponsivePopover-3603f824.js";import{a as ue,I as he}from"./Input-bfce6809.js";import{s as $}from"./style-map-0570471d.js";import"./Gregorian-0c2e63b9.js";import{s as ce}from"./ResponsivePopoverCommon.css-f284520a.js";import"./utils-eb830979.js";import"./index-f1f2c4b1.js";import"./jsx-runtime-d079401a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./Integer-f7f172c9.js";import"./LocaleData-11ff68d9.js";import"./slim-arrow-left-21a1b625.js";import"./slim-arrow-right-562fbac6.js";import"./class-map-a35dc276.js";import"./i18n-defaults-bdef1cce.js";import"./MarkedEvents-b83081e9.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./Popover-f88acbeb.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-a1ba39c5.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-35e4e851.js";import"./Dialog-6ca0f060.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./Title-9e1fec85.js";import"./WrappingType-b81e595a.js";import"./Suggestions.css-07dccdad.js";import"./ValueStateMessage.css-29f8f350.js";const _e=r=>(r||(r=new Date().getTime()),(r-r%(24*60*60*1e3))/1e3),me="appointment-2",C="M32 481V65q0-14 9.5-23T64 33h64V1h32v32h192V1h32v32h64q14 0 23 9t9 23v416q0 14-9 23t-23 9H64q-13 0-22.5-9T32 481zm416 0V129H64v352h384zM256 193q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM128 321q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm256-128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm0 128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm-128 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM96 225q0-14 9-23t23-9 23 9 9 23-9 23-23 9-23-9-9-23zM384 97V65h-32v32h32zM128 65v32h32V65h-32z",ve=!1,ge="SAP-icons-v4",fe="@ui5/webcomponents-icons";F(me,{pathData:C,ltr:ve,collection:ge,packageName:fe});const ye="appointment-2",A="M403 64q32 0 54.5 22.5T480 141v294q0 32-22.5 54.5T403 512H109q-32 0-54.5-22.5T32 435V141q0-32 22.5-54.5T109 64h25V26q0-11 7.5-18.5T160 0t18.5 7.5T186 26v38h140V26q0-11 7.5-18.5T352 0t18.5 7.5T378 26v38h25zm-294 51q-11 0-18.5 7.5T83 141v64h346v-64q0-11-7.5-18.5T403 115h-25v19q0 11-7.5 18.5T352 160t-18.5-7.5T326 134v-19H186v19q0 11-7.5 18.5T160 160t-18.5-7.5T134 134v-19h-25zm294 346q11 0 18.5-7.5T429 435V256H83v179q0 11 7.5 18.5T109 461h294zM160 320q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm96 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm96 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9z",be=!1,$e="SAP-icons-v5",ke="@ui5/webcomponents-icons";F(ye,{pathData:A,ltr:be,collection:$e,packageName:ke});re();function we(r,e,i){return i?u`<div class="ui5-date-picker-root" style="${$(this.styles.main)}"><${d("ui5-input",e,i)} id="${t(this._id)}-inner" class="ui5-date-picker-input" placeholder="${t(this._placeholder)}" type="${t(this.type)}" value="${t(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${t(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${t(this.accInfo)}" @ui5-change="${t(this._onInputChange)}" @ui5-input="${t(this._onInputInput)}" @ui5-submit="${t(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length?k.call(this,r,e,i):void 0}${this.readonly?void 0:w.call(this,r,e,i)}</${d("ui5-input",e,i)}><slot name="formSupport"></slot></div>`:u`<div class="ui5-date-picker-root" style="${$(this.styles.main)}"><ui5-input id="${t(this._id)}-inner" class="ui5-date-picker-input" placeholder="${t(this._placeholder)}" type="${t(this.type)}" value="${t(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${t(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${t(this.accInfo)}" @ui5-change="${t(this._onInputChange)}" @ui5-input="${t(this._onInputInput)}" @ui5-submit="${t(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length?k.call(this,r,e,i):void 0}${this.readonly?void 0:w.call(this,r,e,i)}</ui5-input><slot name="formSupport"></slot></div>`}function k(r,e,i){return u`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`}function w(r,e,i){return i?u`<${d("ui5-icon",e,i)} slot="icon" name="${t(this.openIconName)}" tabindex="-1" accessible-name="${t(this.openIconTitle)}" accessible-role="button" aria-hidden="${t(this._ariaHidden)}" show-tooltip @click="${this.togglePicker}" input-icon ?pressed="${this._isPickerOpen}"></${d("ui5-icon",e,i)}>`:u`<ui5-icon slot="icon" name="${t(this.openIconName)}" tabindex="-1" accessible-name="${t(this.openIconTitle)}" accessible-role="button" aria-hidden="${t(this._ariaHidden)}" show-tooltip @click="${this.togglePicker}" input-icon ?pressed="${this._isPickerOpen}"></ui5-icon>`}function Pe(r,e,i){return i?u`<${d("ui5-responsive-popover",e,i)} id="${t(this._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" hide-arrow ?_hide-header=${t(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-after-close="${t(this.onResponsivePopoverAfterClose)}">${this.showHeader?P.call(this,r,e,i):void 0}<${d("ui5-calendar",e,i)} id="${t(this._id)}-calendar" primary-calendar-type="${t(this._primaryCalendarType)}" secondary-calendar-type="${t(this.secondaryCalendarType)}" format-pattern="${t(this._formatPattern)}" timestamp="${t(this._calendarTimestamp)}" .selectionMode="${t(this._calendarSelectionMode)}" .minDate="${t(this.minDate)}" .maxDate="${t(this.maxDate)}" @ui5-selected-dates-change="${t(this.onSelectedDatesChange)}" @ui5-show-month-press="${t(this.onHeaderShowMonthPress)}" @ui5-show-year-press="${t(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${t(this._calendarCurrentPicker)}" ._pickersMode="${t(this._calendarPickersMode)}">${y(this._calendarSelectedDates,(a,n)=>a._id||n,(a,n)=>D.call(this,r,e,i,a,n))}</${d("ui5-calendar",e,i)}>${this.showFooter?T.call(this,r,e,i):void 0}</${d("ui5-responsive-popover",e,i)}> `:u`<ui5-responsive-popover id="${t(this._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" hide-arrow ?_hide-header=${t(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-after-close="${t(this.onResponsivePopoverAfterClose)}">${this.showHeader?P.call(this,r,e,i):void 0}<ui5-calendar id="${t(this._id)}-calendar" primary-calendar-type="${t(this._primaryCalendarType)}" secondary-calendar-type="${t(this.secondaryCalendarType)}" format-pattern="${t(this._formatPattern)}" timestamp="${t(this._calendarTimestamp)}" .selectionMode="${t(this._calendarSelectionMode)}" .minDate="${t(this.minDate)}" .maxDate="${t(this.maxDate)}" @ui5-selected-dates-change="${t(this.onSelectedDatesChange)}" @ui5-show-month-press="${t(this.onHeaderShowMonthPress)}" @ui5-show-year-press="${t(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${t(this._calendarCurrentPicker)}" ._pickersMode="${t(this._calendarPickersMode)}">${y(this._calendarSelectedDates,(a,n)=>a._id||n,(a,n)=>D.call(this,r,e,i,a,n))}</ui5-calendar>${this.showFooter?T.call(this,r,e,i):void 0}</ui5-responsive-popover> `}function P(r,e,i){return i?u`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${t(this._headerTitleText)}</span><${d("ui5-button",e,i)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closePicker}"></${d("ui5-button",e,i)}></div></div>`:u`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${t(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closePicker}"></ui5-button></div></div>`}function D(r,e,i,a,n){return i?u`<${d("ui5-date",e,i)} value="${t(a)}"></${d("ui5-date",e,i)}>`:u`<ui5-date value="${t(a)}"></ui5-date>`}function T(r,e,i){return u``}v("@ui5/webcomponents-theming","sap_fiori_3",async()=>V);v("@ui5/webcomponents","sap_fiori_3",async()=>S);const De={packageName:"@ui5/webcomponents",fileName:"themes/DatePicker.css",content:".ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}[input-icon]{border-inline-start:var(--_ui5-v1-18-0_input_icon_border);border-radius:var(--_ui5-v1-18-0_input_icon_border_radius);color:var(--_ui5-v1-18-0_input_icon_color);cursor:pointer;min-height:1rem;min-width:1rem;outline:none;padding:var(--_ui5-v1-18-0_input_icon_padding)}[input-icon][pressed]{background:var(--_ui5-v1-18-0_input_icon_pressed_bg);border-inline-start:var(--_ui5-v1-18-0_select_hover_icon_left_border);box-shadow:var(--_ui5-v1-18-0_input_icon_box_shadow);color:var(--_ui5-v1-18-0_input_icon_pressed_color)}[input-icon]:active{background-color:var(--sapButton_Active_Background);border-inline-start:var(--_ui5-v1-18-0_select_hover_icon_left_border);box-shadow:var(--_ui5-v1-18-0_input_icon_box_shadow);color:var(--_ui5-v1-18-0_input_icon_pressed_color)}[input-icon]:not([pressed]):not(:active):hover{background:var(--_ui5-v1-18-0_input_icon_hover_bg);box-shadow:var(--_ui5-v1-18-0_input_icon_box_shadow)}[input-icon]:hover{border-inline-start:var(--_ui5-v1-18-0_select_hover_icon_left_border);box-shadow:var(--_ui5-v1-18-0_input_icon_box_shadow)}:host(:not([hidden])){border-radius:var(--_ui5-v1-18-0_input_border_radius);display:inline-block;height:var(--_ui5-v1-18-0_input_height);letter-spacing:normal;line-height:normal;word-spacing:normal}:host{background-color:var(--sapField_Background);border-radius:var(--_ui5-v1-18-0-datepicker_border_radius);color:var(--sapField_TextColor);margin:var(--_ui5-v1-18-0_input_margin_top_bottom) 0;min-width:calc(var(--_ui5-v1-18-0_input_min_width) + var(--_ui5-v1-18-0_input_icon_width))}:host([value-state=Error]:not([readonly]):not([disabled])){background-color:var(--sapField_InvalidBackground)}:host(:not([disabled]):not([readonly]):active){background:var(--_ui5-v1-18-0-datepicker-hover-background)}:host(:not([disabled]):not([readonly]):hover){background:var(--_ui5-v1-18-0-datepicker-hover-background)}.ui5-date-picker-root{border-radius:inherit;height:inherit;letter-spacing:inherit;line-height:inherit;word-spacing:inherit}:host .ui5-date-picker-input{background-color:inherit;border-radius:inherit;color:inherit;height:inherit;letter-spacing:inherit;line-height:inherit;margin:inherit;min-width:12.5625rem;width:100%;word-spacing:inherit}:host(:not([disabled]):not([readonly])) .ui5-date-picker-input[focused]{background-color:var(--_ui5-v1-18-0-datepicker-hover-background)}:host([readonly]){background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v1-18-0_input_readonly_background);border-color:var(--_ui5-v1-18-0_input_readonly_border_color)}[slot=icon]{border-bottom-right-radius:var(--_ui5-v1-18-0-datepicker_icon_border_radius);border-top-right-radius:var(--_ui5-v1-18-0-datepicker_icon_border_radius)}"};v("@ui5/webcomponents-theming","sap_fiori_3",async()=>V);v("@ui5/webcomponents","sap_fiori_3",async()=>S);const Te={packageName:"@ui5/webcomponents",fileName:"themes/DatePickerPopover.css",content:"[ui5-calendar]{display:flex;justify-content:center;width:100%}[ui5-responsive-popover]::part(content){padding:0}"};var s=globalThis&&globalThis.__decorate||function(r,e,i,a){var n=arguments.length,l=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,e,i,a);else for(var c=r.length-1;c>=0;c--)(h=r[c])&&(l=(n<3?h(l):n>3?h(e,i,l):h(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l},_;let o=_=class extends R{onResponsivePopoverAfterClose(){var e;this._isPickerOpen=!1,f()?this.blur():(e=this._getInput())==null||e.focus()}onBeforeRendering(){this.FormSupport=M("FormSupport"),["minDate","maxDate"].forEach(e=>{const i=this[e];this.isValid(i)||console.warn(`Invalid value for property "${e}": ${i} is not compatible with the configured format pattern: "${this._displayFormat}"`)}),this.FormSupport?this.FormSupport.syncNativeHiddenInput(this):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.value=this.normalizeValue(this.value)||this.value,this.liveValue=this.value}get _calendarSelectionMode(){return"Single"}get _calendarTimestamp(){if(this.value&&this.dateValueUTC&&this._checkValueValidity(this.value)){const e=this.dateValueUTC.getTime();return _e(e)}return z(this._primaryCalendarType)}get _calendarSelectedDates(){return this.value&&this._checkValueValidity(this.value)?[this.value]:[]}_onkeydown(e){U(e)&&(e.preventDefault(),this.isOpen()?Y(e)||this._toggleAndFocusInput():this._toggleAndFocusInput()),this._getInput().isEqualNode(e.target)&&this.isOpen()&&(j(e)||G(e)||W(e)||J(e))&&this.closePicker(),!this.isOpen()&&(K(e)?this.FormSupport&&this.FormSupport.triggerFormSubmit(this):X(e)?(e.preventDefault(),this._modifyDateValue(1,"year")):Q(e)?(e.preventDefault(),this._modifyDateValue(1,"month")):Z(e)?(e.preventDefault(),this._modifyDateValue(1,"day")):ee(e)?(e.preventDefault(),this._modifyDateValue(-1,"year")):te(e)?(e.preventDefault(),this._modifyDateValue(-1,"month")):ie(e)&&(e.preventDefault(),this._modifyDateValue(-1,"day")))}_modifyDateValue(e,i,a){if(!this.dateValue)return;const n=B(x.fromLocalJSDate(this.dateValue),e,i,a,this._minDate,this._maxDate),l=this.formatValue(n.toUTCJSDate());this._updateValueAndFireEvents(l,!0,["change","value-changed"])}_updateValueAndFireEvents(e,i,a,n=!0){const l=this._checkValueValidity(e);l&&i&&(e=this.normalizeValue(e));let h=!0;this.liveValue=e;const c=this.value;if(n&&(this._getInput().value=e,this.value=e,this._updateValueState()),a.forEach(q=>{this.fireEvent(q,{value:e,valid:l},!0)||(h=!1)}),!h&&n){if(this.value!==c&&this.value!==this._getInput().value)return;this._getInput().value=c,this.value=c}}_updateValueState(){const e=this._checkValueValidity(this.value);e&&this.valueState===m.Error?this.valueState=m.None:e||(this.valueState=m.Error)}_toggleAndFocusInput(){this.togglePicker(),this._getInput().focus()}_getInput(){return this.shadowRoot.querySelector("[ui5-input]")}_onInputSubmit(){}_onInputChange(e){this._updateValueAndFireEvents(e.target.value,!0,["change","value-changed"])}_onInputInput(e){this._updateValueAndFireEvents(e.target.value,!1,["input"],!1)}_checkValueValidity(e){return e===""?!0:this.isValid(e)&&this.isInValidRange(e)}_click(e){f()&&(this.responsivePopover.showAt(this),e.preventDefault())}isValid(e=""){return e===""?!0:!!this.getFormat().parse(e)}isInValidRange(e=""){if(e==="")return!0;const i=this._getCalendarDateFromString(e);return!i||!this._minDate||!this._maxDate?!1:i.valueOf()>=this._minDate.valueOf()&&i.valueOf()<=this._maxDate.valueOf()}normalizeValue(e){return e===""?e:this.getFormat().format(this.getFormat().parse(e,!0),!0)}get _displayFormat(){return this.getFormat().oFormatOptions.pattern}get _placeholder(){return this.placeholder!==void 0?this.placeholder:this._displayFormat}get _headerTitleText(){return _.i18nBundle.getText(ne)}get phone(){return f()}get showHeader(){return this.phone}get showFooter(){return this.phone}get accInfo(){return{ariaRoledescription:this.dateAriaDescription,ariaHasPopup:oe.Grid,ariaAutoComplete:"none",ariaRequired:this.required,ariaLabel:L(this)}}get openIconTitle(){return _.i18nBundle.getText(se)}get openIconName(){return"appointment-2"}get dateAriaDescription(){return _.i18nBundle.getText(le)}get _shouldHideHeader(){return!1}get _ariaHidden(){return ae()}async _respPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}_canOpenPicker(){return!this.disabled&&!this.readonly}get _calendarPickersMode(){const i=this.getFormat().aFormatArray.map(a=>a.type.toLowerCase());return i.includes("day")?g.DAY_MONTH_YEAR:i.includes("month")||i.includes("monthstandalone")?g.MONTH_YEAR:g.YEAR}onSelectedDatesChange(e){e.preventDefault();const i=e.detail.values&&e.detail.values[0];this._updateValueAndFireEvents(i,!0,["change","value-changed"]),this.closePicker()}onHeaderShowMonthPress(){this._calendarCurrentPicker="month"}onHeaderShowYearPress(){this._calendarCurrentPicker="year"}formatValue(e){return this.getFormat().format(e)}closePicker(){this.responsivePopover.close()}async openPicker(){this._isPickerOpen=!0,this._calendarCurrentPicker="day",this.responsivePopover=await this._respPopover(),this.responsivePopover.showAt(this)}togglePicker(){this.isOpen()?this.closePicker():this._canOpenPicker()&&this.openPicker()}isOpen(){return!!this._isPickerOpen}get dateValue(){return this.liveValue?this.getFormat().parse(this.liveValue):this.getFormat().parse(this.value)}get dateValueUTC(){return this.liveValue?this.getFormat().parse(this.liveValue,!0):this.getFormat().parse(this.value)}get styles(){return{main:{width:"100%"}}}get type(){return he.Text}};s([p()],o.prototype,"value",void 0);s([p({type:m,defaultValue:m.None})],o.prototype,"valueState",void 0);s([p({type:Boolean})],o.prototype,"required",void 0);s([p({type:Boolean})],o.prototype,"disabled",void 0);s([p({type:Boolean})],o.prototype,"readonly",void 0);s([p({defaultValue:void 0})],o.prototype,"placeholder",void 0);s([p()],o.prototype,"name",void 0);s([p({type:Boolean})],o.prototype,"hideWeekNumbers",void 0);s([p()],o.prototype,"accessibleName",void 0);s([p({defaultValue:""})],o.prototype,"accessibleNameRef",void 0);s([p({type:Boolean,noAttribute:!0})],o.prototype,"_isPickerOpen",void 0);s([p({type:Object})],o.prototype,"_respPopoverConfig",void 0);s([p({defaultValue:"day"})],o.prototype,"_calendarCurrentPicker",void 0);s([I({type:HTMLElement})],o.prototype,"valueStateMessage",void 0);s([I({type:HTMLElement})],o.prototype,"formSupport",void 0);o=_=s([H({tag:"ui5-date-picker",languageAware:!0,template:we,staticAreaTemplate:Pe,styles:De,staticAreaStyles:[ce,Te],dependencies:[E,de,O,N,ue,pe]}),b("change",{detail:{value:{type:String},valid:{type:Boolean}}}),b("input",{detail:{value:{type:String},valid:{type:Boolean}}})],o);o.define();const yt=o;export{yt as default};
//# sourceMappingURL=DatePicker-54ad6a80.js.map
