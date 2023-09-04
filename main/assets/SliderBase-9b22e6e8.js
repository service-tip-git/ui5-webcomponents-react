import{o as D,r as z,U as F,p as A,m as w}from"./UI5Element-e590cd60.js";import{s as R,a as C,p as d,c as H,f as q}from"./withWebComponent-b4c67a1a.js";import{e as k}from"./Icon-b897d66f.js";import{F as m}from"./Float-99d99064.js";import{I as U}from"./Integer-f7f172c9.js";import{R as y}from"./ResizeHandler-34ecee99.js";import{r as B,b as x,c as I,d as E,e as S,A as h,B as v,t as p,u as f,I as T,J as V,f as M,g as P,h as b,j as g,i as j}from"./Icons-65b34360.js";const K="direction-arrows",N="M507 244q5 5 5 12 0 6-5 11L394 379q-5 5-12 5-6 0-11-5t-5-11V144q0-12 10-15 2-1 6-1 8 0 12 4zM135 129q10 3 10 15v224q0 6-4.5 11t-11.5 5q-6 0-11-5L5 267q-5-5-5-11 0-7 5-12l113-112q4-4 11-4 4 0 6 1z",$=!1,W="SAP-icons-v4",X="@ui5/webcomponents-icons";B(K,{pathData:N,ltr:$,collection:W,packageName:X});const Y="direction-arrows",L="M135 128q11 0 18 7.5t7 18.5v204q0 11-8 18.5t-18 7.5-17-7L8 275q-8-8-8-19t8-19l109-102q7-7 18-7zm369 109q8 8 8 19t-8 19L395 377q-7 7-17 7t-18-7.5-8-18.5V154q0-12 8-19t19-7q9 0 16 7z",J=!1,G="SAP-icons-v5",Q="@ui5/webcomponents-icons";B(Y,{pathData:L,ltr:J,collection:G,packageName:Q});D();z("@ui5/webcomponents-theming","sap_fiori_3",async()=>R);z("@ui5/webcomponents","sap_fiori_3",async()=>C);const Z={packageName:"@ui5/webcomponents",fileName:"themes/SliderBase.css",content:'.ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host([disabled]){cursor:default;opacity:var(--_ui5-v1-17-0_slider_disabled_opacity);pointer-events:none}:host{box-sizing:border-box;cursor:pointer;vertical-align:top;width:100%}:host(:not([hidden])){display:inline-block}.ui5-slider-root{box-sizing:border-box;height:3.3125rem;outline:none;padding:var(--_ui5-v1-17-0_slider_padding);touch-action:none}.ui5-slider-inner{background-repeat:no-repeat;height:100%;min-width:var(--_ui5-v1-17-0_slider_inner_min_width);position:relative}.ui5-slider-progress-container{background:var(--_ui5-v1-17-0_slider_progress_container_background);border:var(--_ui5-v1-17-0_slider_progress_border);border-radius:var(--_ui5-v1-17-0_slider_progress_border_radius);box-sizing:var(--_ui5-v1-17-0_slider_progress_box_sizing);height:var(--_ui5-v1-17-0_slider_inner_height);position:relative;top:var(--_ui5-v1-17-0_slider_progress_container_top);width:100%}.ui5-slider-progress-container:after,.ui5-slider-progress-container:before{border-radius:50%;content:"";display:var(--_ui5-v1-17-0_slider_progress_container_dot_display);height:var(--_ui5-v1-17-0_slider_start_end_point_size);position:absolute;top:var(--_ui5-v1-17-0_slider_start_end_point_top);width:var(--_ui5-v1-17-0_slider_start_end_point_size)}.ui5-slider-progress-container:before{background-color:var(--_ui5-v1-17-0_slider_progress_before_background);border:var(--_ui5-v1-17-0_slider_progress_before_border);inset-inline-start:var(--_ui5-v1-17-0_slider_start_end_point_left)}.ui5-slider-progress-container:after{background-color:var(--_ui5-v1-17-0_slider_progress_after_background);border:var(--_ui5-v1-17-0_slider_progress_after_border);inset-inline-end:var(--_ui5-v1-17-0_slider_start_end_point_left)}.ui5-slider-progress{background:var(--_ui5-v1-17-0_slider_progress_background);border:var(--_ui5-v1-17-0_slider_active_progress_border);border-radius:var(--_ui5-v1-17-0_slider_progress_border_radius);box-sizing:border-box;height:var(--_ui5-v1-17-0_slider_progress_height);left:var(--_ui5-v1-17-0_slider_active_progress_left);outline:none;position:relative;top:var(--_ui5-v1-17-0_slider_active_progress_top)}.ui5-slider-tickmarks{box-sizing:border-box;display:flex;justify-content:space-between;list-style:none;margin:0;padding:0;position:absolute;top:var(--_ui5-v1-17-0_slider_tickmark_top);width:100%;z-index:1}.ui5-slider-tickmarks li{border-inline-start:1px solid var(--_ui5-v1-17-0_slider_tickmark_bg);height:var(--_ui5-v1-17-0_slider_tickmark_height)}.ui5-slider-handle{align-items:center;background:var(--_ui5-v1-17-0_slider_handle_background);border:var(--_ui5-v1-17-0_slider_handle_border);border-radius:var(--_ui5-v1-17-0_slider_handle_border_radius);box-shadow:var(--_ui5-v1-17-0_slider_handle_box_shadow);box-sizing:var(--_ui5-v1-17-0_slider_handle_box_sizing);display:flex;height:var(--_ui5-v1-17-0_slider_handle_height);justify-content:center;margin-inline-start:calc(var(--_ui5-v1-17-0_slider_handle_width)*-1/2);outline:none;position:absolute;top:var(--_ui5-v1-17-0_slider_handle_top);width:var(--_ui5-v1-17-0_slider_handle_width);z-index:2}[slider-icon]{color:var(--sapContent_Selected_ForegroundColor);display:var(--_ui5-v1-17-0_slider_handle_icon_display);height:var(--_ui5-v1-17-0_slider_handle_icon_size);width:var(--_ui5-v1-17-0_slider_handle_icon_size)}.ui5-slider-handle:hover,.ui5-slider-progress-container:hover~.ui5-slider-handle:not(:focus){background:var(--_ui5-v1-17-0_slider_handle_hover_background);border:var(--_ui5-v1-17-0_slider_handle_hover_border);box-shadow:var(--_ui5-v1-17-0_slider_handle_hover_box_shadow)}.ui5-slider-handle:not(:active):focus,.ui5-slider-root:focus .ui5-slider-inner .ui5-slider-handle{background:var(--_ui5-v1-17-0_slider_handle_background_focus);border:var(--_ui5-v1-17-0_slider_handle_focus_border);box-shadow:var(--_ui5-v1-17-0_slider_handle_box_shadow_focus);outline:var(--_ui5-v1-17-0_slider_handle_outline);outline-offset:var(--_ui5-v1-17-0_slider_handle_outline_offset)}.ui5-slider-handle:focus:active,.ui5-slider-root:active .ui5-slider-handle:focus{background:var(--_ui5-v1-17-0_slider_handle_hover_background);border:var(--_ui5-v1-17-0_slider_handle_active_border);box-shadow:var(--_ui5-v1-17-0_slider_handle_active_box_shadow);outline:var(--_ui5-v1-17-0_slider_handle_active_focused_outline)}.ui5-slider-handle--end:focus,.ui5-slider-handle.ui5-slider-handle--start:focus{border:var(--_ui5-v1-17-0_slider_handle_focus_border)}.ui5-slider-handle:focus:hover,.ui5-slider-root:focus:hover .ui5-slider-handle{border:var(--_ui5-v1-17-0_slider_handle_focus_border)}.ui5-slider-tooltip{align-items:center;background:var(--_ui5-v1-17-0_slider_tooltip_background);border:var(--_ui5-v1-17-0_slider_tooltip_border);border-radius:var(--_ui5-v1-17-0_slider_tooltip_border_radius);bottom:var(--_ui5-v1-17-0_slider_tooltip_bottom);box-shadow:var(--_ui5-v1-17-0_slider_tooltip_box_shadow);box-sizing:var(--_ui5-v1-17-0_slider_tooltip_border_box);color:var(--_ui5-v1-17-0_slider_tooltip_color);display:flex;font-size:var(--_ui5-v1-17-0_slider_tooltip_fontsize);height:var(--_ui5-v1-17-0_slider_tooltip_height);justify-content:center;left:50%;line-height:1rem;min-width:var(--_ui5-v1-17-0_slider_tooltip_min_width);padding:var(--_ui5-v1-17-0_slider_tooltip_padding);pointer-events:none;position:absolute;transform:translate(-50%);visibility:hidden}.ui5-slider-tooltip-value{align-items:center;display:flex;justify-content:center;position:relative}.ui5-slider-labels{margin:0;padding:0;position:absolute;top:1.25rem;white-space:nowrap}.ui5-slider-labels li{align-items:center;box-sizing:border-box;color:var(--_ui5-v1-17-0_slider_label_color);display:inline-block;display:inline-flex;font-size:var(--_ui5-v1-17-0_slider_label_fontsize);height:1rem;justify-content:center;list-style:none;margin:0;padding-top:.3125rem;padding-top:0;position:relative;text-align:center;vertical-align:top}.ui5-slider-hidden-labels li:not(:first-child):not(:last-child){visibility:hidden}.ui5-slider-handle:focus .ui5-slider-tooltip{bottom:var(--_ui5-v1-17-0_slider_handle_focused_tooltip_distance)}.ui5-slider-tickmarks li.ui5-slider-tickmark-in-range{border-inline-start:1px solid var(--_ui5-v1-17-0_slider_tickmark_in_range_bg)}:host([show-tickmarks]) .ui5-slider-progress{border:var(--_ui5-v1-17-0_slider_no_tickmarks_active_progress_border);height:var(--_ui5-v1-17-0_slider_no_tickmarks_progress_height);left:var(--_ui5-v1-17-0_slider_no_tickmarks_active_progress_left);top:var(--_ui5-v1-17-0_slider_no_tickmarks_active_progress_top)}:host([show-tickmarks]) .ui5-slider-progress-container{top:var(--_ui5-v1-17-0_slider_no_tickmarks_progress_container_top)}.ui5-slider-handle:focus:after{border:var(--sapContent_FocusWidth) dotted var(--sapContent_FocusColor);border-radius:var(--_ui5-v1-17-0_slider_handle_border_radius);content:"";display:var(--_ui5-v1-17-0_slider_handle_focus_visibility);height:calc(100% + var(--sapContent_FocusWidth)*2 + 2px);pointer-events:none;position:absolute;width:calc(100% + var(--sapContent_FocusWidth)*2 + 2px)}'};var l=globalThis&&globalThis.__decorate||function(c,e,i,t){var s=arguments.length,r=s<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(c,e,i,t);else for(var a=c.length-1;a>=0;a--)(o=c[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},_;let n=_=class extends F{constructor(){super(),this.notResized=!1,this._isUserInteraction=!1,this._isInnerElementFocusing=!1,this._labelWidth=0,this._resizeHandler=this._handleResize.bind(this),this._moveHandler=this._handleMove.bind(this),this._upHandler=this._handleUp.bind(this),this._stateStorage={step:void 0,min:void 0,max:void 0,labelInterval:void 0};const e=i=>{this._onmousedown(i)};this._ontouchstart={handleEvent:e,passive:!0}}_handleMove(e){}_handleUp(){}_onmousedown(e){}_handleActionKeyPress(e){}static get ACTION_KEYS(){return[x,I,E,S,h,v,p,f,T,V,M,P,b,g,j]}static get MIN_SPACE_BETWEEN_TICKMARKS(){return 8}static get TOOLTIP_VISIBILITY(){return{VISIBLE:"visible",HIDDEN:"hidden"}}get classes(){return{root:{"ui5-slider-root-phone":A()},labelContainer:{"ui5-slider-hidden-labels":this._labelsOverlapping}}}onEnterDOM(){y.register(this,this._resizeHandler)}onExitDOM(){y.deregister(this,this._resizeHandler)}onAfterRendering(){this.notResized&&this._resizeHandler()}_onmouseover(){this.showTooltip&&(this._tooltipVisibility=_.TOOLTIP_VISIBILITY.VISIBLE)}_onmouseout(){this.showTooltip&&!this.shadowRoot.activeElement&&(this._tooltipVisibility=_.TOOLTIP_VISIBILITY.HIDDEN)}_onkeydown(e){this.disabled||this._effectiveStep===0||_._isActionKey(e)&&(e.preventDefault(),this._isUserInteraction=!0,this._handleActionKeyPress(e))}_onkeyup(){this.disabled||(this._isUserInteraction=!1)}_preserveFocus(e){this._isInnerElementFocusing=e}_isFocusing(){return this._isInnerElementFocusing}_preventFocusOut(){this.focusInnerElement()}focusInnerElement(){this.focus()}_handleResize(){if(!this.showTickmarks||(this.notResized=!1,this._spaceBetweenTickmarks()<_.MIN_SPACE_BETWEEN_TICKMARKS?(this._hiddenTickmarks=!0,this._labelsOverlapping=!0):this._hiddenTickmarks=!1,this.labelInterval<=0||this._hiddenTickmarks))return;const i=this.shadowRoot.querySelectorAll(".ui5-slider-labels li");this._labelsOverlapping=[...i].some(t=>t.scrollWidth>t.clientWidth)}handleDownBase(e){const i=this._effectiveMin,t=this._effectiveMax,s=this.getBoundingClientRect(),r=this.directionStart,o=this._effectiveStep,a=_.getValueFromInteraction(e,o,i,t,s,r);return this._isUserInteraction=!0,window.addEventListener("mouseup",this._upHandler),window.addEventListener("touchend",this._upHandler),w()&&e instanceof TouchEvent?window.addEventListener("touchmove",this._moveHandler):window.addEventListener("mousemove",this._moveHandler),this._handleFocusOnMouseDown(e),a}_handleFocusOnMouseDown(e){const i=this.shadowRoot.activeElement;(!i||i!==e.target)&&(this._preserveFocus(!0),this.focusInnerElement())}handleUpBase(){window.removeEventListener("mouseup",this._upHandler),window.removeEventListener("touchend",this._upHandler),window.removeEventListener("mousemove",this._moveHandler),window.removeEventListener("touchmove",this._moveHandler),this._isUserInteraction=!1,this._preserveFocus(!1)}updateStateStorageAndFireInputEvent(e){this.storePropertyState(e),this._isUserInteraction&&this.fireEvent("input")}static _isActionKey(e){return this.ACTION_KEYS.some(i=>i(e))}static clipValue(e,i,t){return e=Math.min(Math.max(e,i),t),e}static getValueFromInteraction(e,i,t,s,r,o){const a=this.getPageXValueFromEvent(e),u=this.computedValueFromPageX(a,t,s,r,o),O=this.getSteppedValue(u,i,t);return this.clipValue(O,t,s)}static getSteppedValue(e,i,t){const s=Math.abs((e-t)%i);if(i===0||s===0)return e;e=s*2>=i?e+i-s:e-s;const r=_._getDecimalPrecisionOfNumber(i);return Number(e.toFixed(r))}static getPageXValueFromEvent(e){return w()&&e instanceof TouchEvent?e.targetTouches&&e.targetTouches.length>0?e.targetTouches[0].pageX:0:e.pageX}static computedValueFromPageX(e,i,t,s,r){const a=(r==="left"?e-s[r]:s[r]-e)/s.width;return i+a*(t-i)}static _getDecimalPrecisionOfNumber(e){if(Number.isInteger(e))return 0;const i=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return!i||i.length<2?0:Math.max(0,(i[1]?i[1].length:0)-(i[2]?Number(i[2]):0))}isCurrentStateOutdated(){return Object.entries(this._stateStorage).some(([e,i])=>this[e]!==i)}getStoredPropertyState(e){return this._stateStorage[e]}isPropertyUpdated(...e){return e.some(i=>this.getStoredPropertyState(i)!==this[i])}storePropertyState(...e){e.forEach(i=>{this._stateStorage[i]=this[i]})}get directionStart(){return this.effectiveDir==="rtl"?"right":"left"}_createLabels(){if(!this.labelInterval||!this.showTickmarks)return;const e=this.labelInterval,i=this._effectiveStep,t=(this._effectiveMax-this._effectiveMin)/(i*e);if(t===this._oldNumberOfLabels)return;this._oldNumberOfLabels=t,this._labelWidth=100/t,this._labelValues=[];const s=_._getDecimalPrecisionOfNumber(i);for(let r=0;r<=t;r++){const o=(r*i*e+this._effectiveMin).toFixed(s);this._labelValues.push(o)}}_handleActionKeyPressBase(e,i){const t=_._isIncreaseValueAction(e),s=_._isBigStepAction(e),r=this[i],o=this._effectiveMin,a=this._effectiveMax;let u=this.effectiveDir==="rtl"?-this._effectiveStep:this._effectiveStep;return u=s&&(a-o)/u>10?(a-o)/10:u,P(e)?a-r:M(e)?(r-o)*-1:t?u:u*-1}static _isDecreaseValueAction(e){return S(e)||f(e)||x(e)||h(e)||V(e)||g(e)}static _isIncreaseValueAction(e){return E(e)||p(e)||I(e)||v(e)||T(e)||b(e)}static _isBigStepAction(e){return f(e)||p(e)||h(e)||v(e)||b(e)||g(e)}get _tickmarksCount(){return(this._effectiveMax-this._effectiveMin)/this._effectiveStep}_spaceBetweenTickmarks(){return this.getBoundingClientRect().width/this._tickmarksCount}_validateStep(e){e===0&&console.warn("The 'step' property must be a positive float number"),e<0&&console.warn("The 'step' property must be a positive float number. The provided negative number has been converted to its positve equivalent"),Number.isNaN(e)&&console.warn("The 'step' property must be a positive float number. It has been set to its default value of 1")}get _labels(){return this._labelValues||[]}get _effectiveStep(){let e=this.step;return e<0&&(e=Math.abs(e)),Number.isNaN(e)&&(e=1),e}get _effectiveMin(){return Math.min(this.min,this.max)}get _effectiveMax(){return Math.max(this.min,this.max)}get _tabIndex(){return this.disabled?"-1":"0"}get _ariaLabelledByHandleRefs(){return[`${this._id}-accName`,`${this._id}-sliderDesc`].join(" ").trim()}};l([d({validator:m,defaultValue:0})],n.prototype,"min",void 0);l([d({validator:m,defaultValue:100})],n.prototype,"max",void 0);l([d({validator:m,defaultValue:1})],n.prototype,"step",void 0);l([d({validator:U,defaultValue:0})],n.prototype,"labelInterval",void 0);l([d({type:Boolean})],n.prototype,"showTickmarks",void 0);l([d({type:Boolean})],n.prototype,"showTooltip",void 0);l([d({type:Boolean})],n.prototype,"disabled",void 0);l([d()],n.prototype,"accessibleName",void 0);l([d({defaultValue:"hidden"})],n.prototype,"_tooltipVisibility",void 0);l([d({type:Boolean})],n.prototype,"_labelsOverlapping",void 0);l([d({type:Boolean})],n.prototype,"_hiddenTickmarks",void 0);n=_=l([H({renderer:q,styles:Z}),k("change"),k("input")],n);const le=n;export{le as S};
//# sourceMappingURL=SliderBase-9b22e6e8.js.map
