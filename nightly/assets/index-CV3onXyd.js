import{p as d,q as i,v as p,a as N,s as V,b as a,m as x,y as k,S as $,w as C}from"./withWebComponent-m_Fq5lNf.js";import{d as T}from"./slot-_4yKMUwC.js";import{s as f}from"./event-Dq0fpeHi.js";import{b as D,D as F,P as q,H as P,j as A,L as B,z as R,p as E,U as W,S as O,O as M,u as U}from"./Keys-DoZifIQ_.js";import{i as L}from"./i18n-DEVDpFvK.js";import{o as m}from"./ValueState-Bg0UWejw.js";import{v as z}from"./AriaLabelHelper-C5uDZewF.js";import{q as H,r as j}from"./i18n-defaults-NO4RLLYJ.js";import"./less-CWZucnBW.js";import"./add-pCl0yz1R.js";import{I as G}from"./Icon-CqlVqIII.js";import{a as J,I as K}from"./Input-CAl2HCPe.js";import{s as Q}from"./parameters-bundle.css-BOSi_lPd.js";function X(r,e,t){return t?d`<div id="${i(this._id)}" class="ui5-step-input-root" @keydown="${this._onkeydown}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${this.readonly?void 0:b.call(this,r,e,t)}<${p("ui5-input",e,t)} id="${i(this._id)}-inner" class="ui5-step-input-input" placeholder="${i(this.placeholder)}" type="${i(this.type)}" value="${i(this._displayValue)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${i(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${i(this.accInfo)}" ._nativeInputAttributes="${i(this.inputAttributes)}" @ui5-change="${i(this._onInputChange)}" @focusout="${this._onInputFocusOut}" @focusin="${this._onInputFocusIn}">${this.valueStateMessage.length?g.call(this,r,e,t):void 0}</${p("ui5-input",e,t)}>${this.readonly?void 0:y.call(this,r,e,t)}</div>`:d`<div id="${i(this._id)}" class="ui5-step-input-root" @keydown="${this._onkeydown}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${this.readonly?void 0:b.call(this,r,e,t)}<ui5-input id="${i(this._id)}-inner" class="ui5-step-input-input" placeholder="${i(this.placeholder)}" type="${i(this.type)}" value="${i(this._displayValue)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${i(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${i(this.accInfo)}" ._nativeInputAttributes="${i(this.inputAttributes)}" @ui5-change="${i(this._onInputChange)}" @focusout="${this._onInputFocusOut}" @focusin="${this._onInputFocusIn}">${this.valueStateMessage.length?g.call(this,r,e,t):void 0}</ui5-input>${this.readonly?void 0:y.call(this,r,e,t)}</div>`}function b(r,e,t){return t?d`<div class="ui5-step-icon ui5-step-dec" title="${i(this.decIconTitle)}"><${p("ui5-icon",e,t)} id="${i(this._id)}-dec" name="${i(this.decIconName)}" tabindex="-1" accessible-name="${i(this.decIconTitle)}" @click="${this._decValue}" @focusout="${this._onButtonFocusOut}" @mousedown="${this._decSpin}" @mouseup="${this._resetSpin}" @mouseout="${this._resetSpinOut}" class="inputIcon" show-tooltip ?clickable="${this._decIconClickable}"></${p("ui5-icon",e,t)}></div>`:d`<div class="ui5-step-icon ui5-step-dec" title="${i(this.decIconTitle)}"><ui5-icon id="${i(this._id)}-dec" name="${i(this.decIconName)}" tabindex="-1" accessible-name="${i(this.decIconTitle)}" @click="${this._decValue}" @focusout="${this._onButtonFocusOut}" @mousedown="${this._decSpin}" @mouseup="${this._resetSpin}" @mouseout="${this._resetSpinOut}" class="inputIcon" show-tooltip ?clickable="${this._decIconClickable}"></ui5-icon></div>`}function g(r,e,t){return d`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`}function y(r,e,t){return t?d`<div class="ui5-step-icon ui5-step-inc" title="${i(this.incIconTitle)}"><${p("ui5-icon",e,t)} id="${i(this._id)}-inc" name="${i(this.incIconName)}" tabindex="-1" accessible-name="${i(this.incIconTitle)}" @click="${this._incValue}" @focusout="${this._onButtonFocusOut}" @mousedown="${this._incSpin}" @mouseup="${this._resetSpin}" @mouseout="${this._resetSpinOut}" class="inputIcon" show-tooltip ?clickable="${this._incIconClickable}"></${p("ui5-icon",e,t)}></div>`:d`<div class="ui5-step-icon ui5-step-inc" title="${i(this.incIconTitle)}"><ui5-icon id="${i(this._id)}-inc" name="${i(this.incIconName)}" tabindex="-1" accessible-name="${i(this.incIconTitle)}" @click="${this._incValue}" @focusout="${this._onButtonFocusOut}" @mousedown="${this._incSpin}" @mouseup="${this._resetSpin}" @mouseout="${this._resetSpinOut}" class="inputIcon" show-tooltip ?clickable="${this._incIconClickable}"></ui5-icon></div>`}N("@ui5/webcomponents-theming","sap_horizon",async()=>V);N("@ui5/webcomponents","sap_horizon",async()=>Q);const Y={packageName:"@ui5/webcomponents",fileName:"themes/StepInput.css.ts",content:`:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.inputIcon{color:var(--_ui5-v2-3-0_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v2-3-0_input_icon_padding);border-inline-start:var(--_ui5-v2-3-0_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v2-3-0_input_icon_border_radius)}.inputIcon[pressed]{background:var(--_ui5-v2-3-0_input_icon_pressed_bg);box-shadow:var(--_ui5-v2-3-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-3-0_select_hover_icon_left_border);color:var(--_ui5-v2-3-0_input_icon_pressed_color)}.inputIcon:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v2-3-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-3-0_select_hover_icon_left_border);color:var(--_ui5-v2-3-0_input_icon_pressed_color)}.inputIcon:not([pressed]):not(:active):hover{background:var(--_ui5-v2-3-0_input_icon_hover_bg);box-shadow:var(--_ui5-v2-3-0_input_icon_box_shadow)}.inputIcon:hover{border-inline-start:var(--_ui5-v2-3-0_select_hover_icon_left_border);box-shadow:var(--_ui5-v2-3-0_input_icon_box_shadow)}:host([readonly]:not([disabled])){border-color:var(--_ui5-v2-3-0_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v2-3-0_input_readonly_background)}:host([disabled]){opacity:var(--_ui5-v2-3-0_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v2-3-0-input_disabled_background);border-color:var(--_ui5-v2-3-0_input_disabled_border_color)}:host([value-state="Negative"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-3-0_input_error_icon_box_shadow)}:host([value-state="Critical"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-3-0_input_warning_icon_box_shadow)}:host([value-state="Information"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-3-0_input_information_icon_box_shadow)}:host([value-state="Positive"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-3-0_input_success_icon_box_shadow)}:host([value-state="Negative"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v2-3-0_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Critical"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v2-3-0_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Positive"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v2-3-0_input_value_state_success_border_color);border-width:var(--_ui5-v2-3-0_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v2-3-0_input_value_state_information_border_color);border-width:var(--_ui5-v2-3-0_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Negative"]) .inputIcon:active,:host([value-state="Negative"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-3-0_input_error_icon_box_shadow);color:var(--_ui5-v2-3-0_input_icon_error_pressed_color)}:host([value-state="Critical"]) .inputIcon:active,:host([value-state="Critical"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-3-0_input_warning_icon_box_shadow);color:var(--_ui5-v2-3-0_input_icon_warning_pressed_color)}:host([value-state="Information"]) .inputIcon:active,:host([value-state="Information"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-3-0_input_information_icon_box_shadow);color:var(--_ui5-v2-3-0_input_icon_information_pressed_color)}:host([value-state="Positive"]) .inputIcon:active,:host([value-state="Positive"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-3-0_input_success_icon_box_shadow);color:var(--_ui5-v2-3-0_input_icon_success_pressed_color)}:host([value-state="Negative"]) .inputIcon,:host([value-state="Critical"]) .inputIcon{padding:var(--_ui5-v2-3-0_input_error_warning_icon_padding)}:host([value-state="Information"]) .inputIcon{padding:var(--_ui5-v2-3-0_input_information_icon_padding)}:host(:not([hidden])){display:inline-block;width:100%;line-height:normal;letter-spacing:normal;word-spacing:normal}:host{--ui5-v2-3-0_input_focus_pseudo_element_content: none;color:var(--sapField_TextColor);background-color:var(--sapField_Background);border:var(--_ui5-v2-3-0_step_input_border_style);border-radius:var(--sapField_BorderCornerRadius);box-sizing:border-box;height:var(--_ui5-v2-3-0_input_height);position:relative;margin:var(--_ui5-v2-3-0_input_margin_top_bottom) 0;min-width:var(--_ui5-v2-3-0_step_input_min_width);text-align:right;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}:host .ui5-step-input-input{text-align:inherit;height:inherit}:host(:not([value-state]):not([readonly]):not([disabled])){box-shadow:none}:host(:not([value-state]):not([readonly]):not([disabled]):hover),:host([value-state="None"]:not([readonly]):not([disabled]):hover){background-color:var(--_ui5-v2-3-0_step_input_border_color_hover);border:var(--_ui5-v2-3-0_step_input_border_hover)}:host(:not([value-state]):not([readonly]):not([disabled]):not([focused]):hover),:host([value-state="None"]:not([readonly]):not([disabled]):not([focused]):hover){background-color:var(--sapField_Hover_Background);border:var(--_ui5-v2-3-0_step_input_border_style_hover);box-shadow:var(--sapField_Hover_Shadow)}:host([value-state="Positive"]:not([readonly]):not([disabled]):not([focused]):hover){box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled]):not([focused]):hover){box-shadow:var(--sapField_Hover_InformationShadow)}:host([value-state="Critical"]:not([readonly]):not([disabled]):not([focused]):hover){box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Negative"]:not([readonly]):not([disabled]):not([focused]):hover){box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Positive"]:not([readonly]):not([disabled]):hover),:host([value-state="Negative"]:not([readonly]):not([disabled]):hover),:host([value-state="Information"]:not([readonly]):not([disabled]):hover),:host([value-state="Critical"]:not([readonly]):not([disabled]):hover){background-color:var(--_ui5-v2-3-0-step_input_button_state_hover_background_color)}:host(:not([value-state]):not([readonly]):not([disabled])[focused]),:host([value-state="None"]:not([readonly]):not([disabled])[focused]),:host([value-state="Positive"]:not([readonly]):not([disabled])[focused]),:host([value-state="Negative"]:not([readonly]):not([disabled])[focused]),:host([value-state="Information"]:not([readonly]):not([disabled])[focused]),:host([value-state="Critical"]:not([readonly]):not([disabled])[focused]){background-color:var(--sapField_Focus_Background)}:host([value-state="Positive"]:not([readonly]):not([disabled])):after,:host([value-state="Negative"]:not([readonly]):not([disabled])):after,:host([value-state="None"]:not([readonly]):not([disabled])):after,:host([value-state="Information"]:not([readonly]):not([disabled])):after,:host([value-state="Critical"]:not([readonly]):not([disabled])):after{position:absolute;content:"";inset:-1px;outline:none;pointer-events:none;border-radius:var(--sapField_BorderCornerRadius);border-style:var(--_ui5-v2-3-0_input_error_warning_border_style);z-index:1;border-width:0px}:host([value-state="Information"]:not([readonly]):not([disabled])):after{border-color:var(--sapField_InformationColor);border-width:var(--_ui5-v2-3-0_input_information_border_width)}:host([value-state="Critical"]:not([readonly]):not([disabled])):after{border-color:var(--sapField_WarningColor);border-width:2px}:host([value-state="Positive"]:not([readonly]):not([disabled])):after{border-color:var(--sapField_SuccessColor);border-width:1px}:host([value-state="Negative"]:not([readonly]):not([disabled])):after{border-color:var(--sapField_InvalidColor);border-width:var(--_ui5-v2-3-0_input_information_border_width)}:host([value-state]):after{border-width:var(--_ui5-v2-3-0_input_state_border_width)}:host([value-state="Negative"]:not([readonly]):not([disabled])) .ui5-step-input-input{background-color:var(--_ui5-v2-3-0_input_input_background_color)}:host([value-state="Negative"]:not([readonly]):not([disabled])) .ui5-step-input-input:hover{background-color:var(--_ui5-v2-3-0_step_input_input_error_background_color)}:host([value-state]:not([value-state="None"]) .ui5-step-input-input[focused]){outline:none}:host .ui5-step-input-input{width:100%;color:inherit;background-color:inherit;border:var(--_ui5-v2-3-0_step_input_input_border);box-sizing:border-box;vertical-align:top;margin-top:var(--_ui5-v2-3-0_step_input_input_margin_top);min-width:var(--_ui5-v2-3-0_step_input_min_width);padding-inline-start:var(--_ui5-v2-3-0_step_input_padding);padding-inline-end:var(--_ui5-v2-3-0_step_input_padding);position:relative;outline:none;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}:host .ui5-step-input-input[readonly]{padding:0}:host .ui5-step-input-input:hover,:host .ui5-step-input-input[focused]{box-shadow:none}:host .ui5-step-input-root{white-space:nowrap;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;height:inherit}:host .ui5-step-input-input[text-align=left]{text-align:left}:host .ui5-step-input-input[text-align=center]{text-align:center}:host .ui5-step-input-input[text-align=right]{text-align:right}:host .ui5-step-icon{position:absolute;display:var(--_ui5-v2-3-0_step_input_button_display);height:2rem;height:100%;background-color:var(--_ui5-v2-3-0_step_input_button_background_color);z-index:0}:host .ui5-step-icon[focused]{border:none;outline:none}:host .ui5-step-icon.ui5-step-dec{left:var(--_ui5-v2-3-0_step_input_button_left);z-index:1}:host .ui5-step-icon.ui5-step-inc{right:var(--_ui5-v2-3-0_step_input_button_right)}:host .ui5-step-icon *:not([clickable]),:host .ui5-step-icon *:not([clickable]):active,:host .ui5-step-icon *:not([clickable]):hover{opacity:.5;background-color:transparent;color:var(--sapContent_IconColor)}:host .ui5-step-icon :not([clickable]) *:hover,:host .ui5-step-icon :not([clickable]) *:active{background-color:var(--sapField_Background);color:var(--sapContent_IconColor)}:host .ui5-step-input-input[focused]:after{position:absolute;content:"";border:var(--_ui5-v2-3-0_step_input_input_border_focused_after);top:var(--_ui5-v2-3-0_step_input_input_border_top_bottom_focused_after);right:0;bottom:var(--_ui5-v2-3-0_step_input_input_border_top_bottom_focused_after);border-radius:var(--_ui5-v2-3-0_step_input_input_border_radius_focused_after);left:0;outline:none;pointer-events:none;z-index:1}:host .ui5-step-input-input[focused]{outline:none}:host([value-state="Information"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]:after{border-color:var(--_ui5-v2-3-0_step_input_input_information_border_color_focused_after)}:host([value-state="Critical"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]:after{border-color:var(--_ui5-v2-3-0_step_input_input_warning_border_color_focused_after)}:host([value-state="Positive"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]:after{border-color:var(--_ui5-v2-3-0_step_input_input_success_border_color_focused_after)}:host([value-state="Negative"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]:after{border-color:var(--_ui5-v2-3-0_step_input_input_error_border_color_focused_after)}:host .ui5-step-input-input::-webkit-outer-spin-button,:host .ui5-step-input-input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}:host([disabled]) .ui5-step-icon{background-color:var(--_ui5-v2-3-0_step_input_disabled_button_background)}:host([disabled]) .ui5-step-icon [ui5-icon]{color:var(--sapField_ReadOnly_BorderColor)}
`};var o=function(r,e,t,s){var l=arguments.length,u=l<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(r,e,t,s);else for(var v=r.length-1;v>=0;v--)(h=r[v])&&(u=(l<3?h(u):l>3?h(e,t,u):h(e,t))||u);return l>3&&u&&Object.defineProperty(e,t,u),u},_;const w=500,Z=.8,I=50,S=120;let n=_=class extends ${constructor(){super(...arguments),this.value=0,this.step=1,this.valueState="None",this.required=!1,this.disabled=!1,this.readonly=!1,this.valuePrecision=0,this._decIconDisabled=!1,this._incIconDisabled=!1,this.focused=!1,this._inputFocused=!1,this._previousValue=this.value,this._waitTimeout=w,this._speed=S,this._spinStarted=!1}async formElementAnchor(){var e;return(e=await this.getFocusDomRefAsync())==null?void 0:e.getFocusDomRefAsync()}get formFormattedValue(){return this.value.toString()}get type(){return K.Number}get decIconTitle(){return _.i18nBundle.getText(H)}get decIconName(){return"less"}get incIconTitle(){return _.i18nBundle.getText(j)}get incIconName(){return"add"}get _decIconClickable(){return!this._decIconDisabled&&!this.readonly&&!this.disabled}get _incIconClickable(){return!this._incIconDisabled&&!this.readonly&&!this.disabled}get _isFocused(){return this.focused}get _displayValue(){return this.value===0||Number.isInteger(this.value)?this.value.toFixed(this.valuePrecision):this.input&&this.value===Number(this.input.value)?this.input.value:this.value.toString()}get accInfo(){return{ariaRequired:this.required,ariaLabel:z(this)}}get inputAttributes(){return{min:this.min===void 0?void 0:this.min,max:this.max===void 0?void 0:this.max,step:this.step}}onBeforeRendering(){this._setButtonState(),this._previousValue===void 0&&(this._previousValue=this.value)}get input(){return this.shadowRoot.querySelector("[ui5-input]")}get innerInput(){return this.input.shadowRoot.querySelector("input")}get inputOuter(){return this.shadowRoot.querySelector(".ui5-step-input-input")}_onButtonFocusOut(){setTimeout(()=>{this._inputFocused||this.inputOuter.removeAttribute("focused")},0)}_onInputFocusIn(){this._inputFocused=!0,this.value!==this._previousValue&&(this._previousValue=this.value)}_onInputFocusOut(){this._inputFocused=!1,this._onInputChange()}_setButtonState(){this._decIconDisabled=this.min!==void 0&&this.value<=this.min,this._incIconDisabled=this.max!==void 0&&this.value>=this.max}_validate(){this._initialValueState===void 0&&(this._initialValueState=this.valueState),this._updateValueState()}_updateValueState(){const e=(this.min===void 0||Number(this.input.value)>=this.min)&&(this.max===void 0||Number(this.input.value)<=this.max),t=this._isValueWithCorrectPrecision,s=this.valueState,l=e&&t;this.valueState=l?m.None:m.Negative,!this.fireEvent("value-state-change",{valueState:this.valueState,valid:l},!0)&&(this.valueState=s)}_preciseValue(e){const t=10**this.valuePrecision;return Math.round(e*t)/t}_fireChangeEvent(){this._previousValue!==this.value&&(this._previousValue=this.value,this.fireEvent("change",{value:this.value}))}_modifyValue(e,t=!1){let s;s=this.value+e,this.min!==void 0&&s<this.min&&(s=this.min),this.max!==void 0&&s>this.max&&(s=this.max),s=this._preciseValue(s),s!==this.value&&(this.value=s,this.input.value=s.toFixed(this.valuePrecision),this._validate(),this._setButtonState(),this.focused=!0,this.inputOuter.setAttribute("focused",""),t?this._fireChangeEvent():this.input.focus())}_incValue(e){this._incIconClickable&&e.isTrusted&&!this.disabled&&!this.readonly&&(this._modifyValue(this.step,!0),this._previousValue=this.value)}_decValue(e){this._decIconClickable&&e.isTrusted&&!this.disabled&&!this.readonly&&(this._modifyValue(-this.step,!0),this._previousValue=this.value)}get _isValueWithCorrectPrecision(){const e=this.input.value.includes(".")?".":",",t=this.input.value.split(e);return(t.length>1?t[1].length:0)===this.valuePrecision}_onInputChange(){this._setDefaultInputValueIfNeeded();const e=Number(this.input.value);this._isValueChanged(e)&&this._updateValueAndValidate(e)}_setDefaultInputValueIfNeeded(){if(this.input.value===""){const e=(this.min||0).toFixed(this.valuePrecision);this.input.value=e,this.innerInput.value=e}}_isValueChanged(e){const t=this._isValueWithCorrectPrecision,s=t&&this.valueState===m.Negative;return this.value!==this._previousValue||this.value!==e||e===0||!t||s}_updateValueAndValidate(e){this.value=e,this._validate(),this._setButtonState(),this._fireChangeEvent()}_onfocusin(){this.focused=!0}_onfocusout(){this.focused=!1}_onkeydown(e){let t=!0;if(!(this.disabled||this.readonly)){if(D(e)){this._onInputChange();return}F(e)?this._modifyValue(this.step):q(e)?this._modifyValue(-this.step):P(e)?(this.value=this._previousValue,this.input.value=this.value.toFixed(this.valuePrecision)):this.max!==void 0&&(A(e)||B(e))?this._modifyValue(this.max-this.value):this.min!==void 0&&(R(e)||E(e))?this._modifyValue(this.min-this.value):!W(e)&&!O(e)&&!M(e)&&!U(e)&&(t=!1),t&&e.preventDefault()}}_decSpin(){this._decIconDisabled||this._spinValue(!1,!0)}_incSpin(){this._incIconDisabled||this._spinValue(!0,!0)}_calcWaitTimeout(){return this._speed*=Z,this._waitTimeout=this._waitTimeout-this._speed<I?I:this._waitTimeout-this._speed,this._waitTimeout}_spinValue(e,t=!1){t&&(this._waitTimeout=w,this._speed=S,this._btnDown=!0),this._spinTimeoutId=setTimeout(()=>{this._btnDown&&(this._spinStarted=!0,this._modifyValue(e?this.step:-this.step),this._setButtonState(),!this._incIconDisabled&&e||!this._decIconDisabled&&!e?this._spinValue(e):(this._resetSpin(),this._fireChangeEvent()))},this._calcWaitTimeout())}_resetSpin(){clearTimeout(this._spinTimeoutId),this._btnDown=!1,this._spinStarted=!1}_resetSpinOut(){this._btnDown&&(this._resetSpin(),this._fireChangeEvent())}};o([a({type:Number})],n.prototype,"value",void 0);o([a({type:Number})],n.prototype,"min",void 0);o([a({type:Number})],n.prototype,"max",void 0);o([a({type:Number})],n.prototype,"step",void 0);o([a()],n.prototype,"valueState",void 0);o([a({type:Boolean})],n.prototype,"required",void 0);o([a({type:Boolean})],n.prototype,"disabled",void 0);o([a({type:Boolean})],n.prototype,"readonly",void 0);o([a()],n.prototype,"placeholder",void 0);o([a()],n.prototype,"name",void 0);o([a({type:Number})],n.prototype,"valuePrecision",void 0);o([a()],n.prototype,"accessibleName",void 0);o([a()],n.prototype,"accessibleNameRef",void 0);o([a({noAttribute:!0})],n.prototype,"_decIconDisabled",void 0);o([a({noAttribute:!0})],n.prototype,"_incIconDisabled",void 0);o([a({type:Boolean})],n.prototype,"focused",void 0);o([a({noAttribute:!0})],n.prototype,"_inputFocused",void 0);o([a({noAttribute:!0})],n.prototype,"_previousValue",void 0);o([a({noAttribute:!0})],n.prototype,"_waitTimeout",void 0);o([a({noAttribute:!0})],n.prototype,"_speed",void 0);o([a({noAttribute:!0})],n.prototype,"_btnDown",void 0);o([a({noAttribute:!0})],n.prototype,"_spinTimeoutId",void 0);o([a({noAttribute:!0})],n.prototype,"_spinStarted",void 0);o([T()],n.prototype,"valueStateMessage",void 0);o([L("@ui5/webcomponents")],n,"i18nBundle",void 0);n=_=o([x({tag:"ui5-step-input",formAssociated:!0,renderer:k,styles:Y,template:X,dependencies:[G,J]}),f("change"),f("value-state-change",{detail:{valueState:{type:String},valid:{type:Boolean}}})],n);n.define();const c=C("ui5-step-input",["accessibleName","accessibleNameRef","max","min","name","placeholder","step","value","valuePrecision","valueState"],["disabled","readonly","required"],["valueStateMessage"],["change","value-state-change"]);c.displayName="StepInput";try{c.displayName="StepInput",c.__docgenInfo={description:`The \`StepInput\` consists of an input field and buttons with icons to increase/decrease the value
with the predefined step.

The user can change the value of the component by pressing the increase/decrease buttons,
by typing a number directly, by using the keyboard up/down and page up/down,
or by using the mouse scroll wheel. Decimal values are supported.

### Usage

The default step is 1 but the app developer can set a different one.

App developers can set a maximum and minimum value for the \`StepInput\`.
The increase/decrease button and the up/down keyboard navigation become disabled when
the value reaches the max/min or a new value is entered from the input which is greater/less than the max/min.

#### When to use:

- To adjust amounts, quantities, or other values quickly.
- To adjust values for a specific step.

#### When not to use:

- To enter a static number (for example, postal code, phone number, or ID). In this case,
use the regular \`Input\` instead.
- To display a value that rarely needs to be adjusted and does not pertain to a particular step.
In this case, use the regular \`Input\` instead.
- To enter dates and times. In this case, use date/time related components instead.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"StepInput",props:{valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<StepInputDomRef, never>) => void"}},onValueStateChange:{defaultValue:null,description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<StepInputDomRef, StepInputValueStateChangeEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"undefined"},description:"Defines a maximum value of the component.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"undefined"},description:"Defines a minimum value of the component.",name:"min",required:!1,type:{name:"number"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},step:{defaultValue:{value:"1"},description:"Defines a step of increasing/decreasing the value of the component.",name:"step",required:!1,type:{name:"number"}},value:{defaultValue:{value:"0"},description:"Defines a value of the component.",name:"value",required:!1,type:{name:"number"}},valuePrecision:{defaultValue:{value:"0"},description:"Determines the number of digits after the decimal point of the component.",name:"valuePrecision",required:!1,type:{name:"number"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="StepInput",c.__docgenInfo={description:`The \`StepInput\` consists of an input field and buttons with icons to increase/decrease the value
with the predefined step.

The user can change the value of the component by pressing the increase/decrease buttons,
by typing a number directly, by using the keyboard up/down and page up/down,
or by using the mouse scroll wheel. Decimal values are supported.

### Usage

The default step is 1 but the app developer can set a different one.

App developers can set a maximum and minimum value for the \`StepInput\`.
The increase/decrease button and the up/down keyboard navigation become disabled when
the value reaches the max/min or a new value is entered from the input which is greater/less than the max/min.

#### When to use:

- To adjust amounts, quantities, or other values quickly.
- To adjust values for a specific step.

#### When not to use:

- To enter a static number (for example, postal code, phone number, or ID). In this case,
use the regular \`Input\` instead.
- To display a value that rarely needs to be adjusted and does not pertain to a particular step.
In this case, use the regular \`Input\` instead.
- To enter dates and times. In this case, use date/time related components instead.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"StepInput",props:{valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<StepInputDomRef, never>) => void"}},onValueStateChange:{defaultValue:null,description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<StepInputDomRef, StepInputValueStateChangeEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"undefined"},description:"Defines a maximum value of the component.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"undefined"},description:"Defines a minimum value of the component.",name:"min",required:!1,type:{name:"number"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},step:{defaultValue:{value:"1"},description:"Defines a step of increasing/decreasing the value of the component.",name:"step",required:!1,type:{name:"number"}},value:{defaultValue:{value:"0"},description:"Defines a value of the component.",name:"value",required:!1,type:{name:"number"}},valuePrecision:{defaultValue:{value:"0"},description:"Determines the number of digits after the decimal point of the component.",name:"valuePrecision",required:!1,type:{name:"number"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{c as S};
