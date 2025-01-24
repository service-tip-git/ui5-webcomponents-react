import{j as n,c as E,F as B,p as L,d as O,s as f,m as I}from"./withWebComponent-DfVDXLfc.js";import{d as S}from"./slot-_4yKMUwC.js";import{a as W,b as T,c as $,P as m,m as c}from"./PopupsCommon.css-BjjP0aIP.js";import{a as k}from"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import{D as v,P as w,K as D,c as z,O as x,u as H,w as R,T as M}from"./Keys-Df3IBHp2.js";import{o as _}from"./ValueState-Bg0UWejw.js";import{i as N}from"./i18n-DEVDpFvK.js";import{n as y}from"./toLowercaseEnumValue-C_8o5td_.js";import"./sys-enter-2-Dcza6can.js";import"./information-Cak16zSA.js";import{av as P,aw as j,ax as F,ay as q}from"./i18n-defaults-Cyg2J0QB.js";import{f as A,I as C}from"./Icon-DVzRT9Bg.js";import{a as X}from"./Title-D0oe8JHs.js";import{d as Y}from"./parameters-bundle.css-BzaqQttB.js";const U="resize-corner",G="M384 160v32q0 12-10 22L182 406q-10 10-22 10h-32zM224 416l160-160v32q0 12-10 22l-96 96q-10 10-22 10h-32zm160-64v32q0 12-10 22t-22 10h-32z",K=!1,Z="SAP-icons-v4",V="@ui5/webcomponents-icons";A(U,{pathData:G,ltr:K,collection:Z,packageName:V});const J="resize-corner",Q="M282 416q-11 0-18.5-7.5T256 390t7-18l109-109q7-7 18-7t18.5 7.5T416 282t-7 18L300 409q-7 7-18 7zm-160 0q-11 0-18.5-7.5T96 390t7-18l269-269q7-7 18-7t18.5 7.5T416 122t-7 18L140 409q-7 7-18 7z",ee=!1,te="SAP-icons-v5",ie="@ui5/webcomponents-icons";A(J,{pathData:Q,ltr:ee,collection:te,packageName:ie});const oe="resize-corner";function re(){return W.call(this,{beforeContent:se,afterContent:ae})}function se(){return n(B,{children:this._displayHeader&&n("header",{children:E("div",{class:"ui5-popup-header-root",id:"ui5-popup-header",role:"group","aria-describedby":this.effectiveAriaDescribedBy,"aria-roledescription":this.ariaRoleDescriptionHeaderText,tabIndex:this._headerTabIndex,onKeyDown:this._onDragOrResizeKeyDown,onMouseDown:this._onDragMouseDown,part:"header",children:[this.hasValueState&&n(C,{class:"ui5-dialog-value-state-icon",name:this._dialogStateIcon}),this.header.length?n("slot",{name:"header"}):n(X,{level:"H1",id:"ui5-popup-header-text",class:"ui5-popup-header-text",children:this.headerText}),this.resizable?this.draggable?n("span",{id:`${this._id}-descr`,"aria-hidden":"true",class:"ui5-hidden-text",children:this.ariaDescribedByHeaderTextDraggableAndResizable}):n("span",{id:`${this._id}-descr`,"aria-hidden":"true",class:"ui5-hidden-text",children:this.ariaDescribedByHeaderTextResizable}):this.draggable&&n("span",{id:`${this._id}-descr`,"aria-hidden":"true",class:"ui5-hidden-text",children:this.ariaDescribedByHeaderTextDraggable})]})})})}function ae(){return E(B,{children:[!!this.footer.length&&n("footer",{class:"ui5-popup-footer-root",part:"footer",children:n("slot",{name:"footer"})}),this._showResizeHandle&&n("div",{class:"ui5-popup-resize-handle",onMouseDown:this._onResizeMouseDown,children:n(C,{name:oe})})]})}L("@ui5/webcomponents-theming","sap_horizon",async()=>O);L("@ui5/webcomponents","sap_horizon",async()=>Y);const ne=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{min-width:20rem;min-height:6rem;max-height:94%;max-width:90%;flex-direction:column;box-shadow:var(--sapContent_Shadow3);border-radius:var(--sapElement_BorderCornerRadius)}:host([stretch]){width:90%;height:94%}:host([stretch][on-phone]){width:100%;height:100%;max-height:100%;max-width:100%;border-radius:0;min-width:0}:host([draggable]) .ui5-popup-header-root,:host([draggable]) ::slotted([slot="header"]){cursor:move}:host([draggable]) .ui5-popup-header-root *{cursor:auto}:host([draggable]) .ui5-popup-root{user-select:text}::slotted([slot="header"]){max-width:100%}.ui5-popup-root{display:flex;flex-direction:column;max-width:100vw}.ui5-popup-header-root{position:relative}.ui5-popup-header-root:before{content:"";position:absolute;inset-block-start:auto;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;height:var(--_ui5-v2-6-2_dialog_header_state_line_height);background:var(--sapObjectHeader_BorderColor)}:host([state="Negative"]) .ui5-popup-header-root:before{background:var(--sapErrorBorderColor)}:host([state="Information"]) .ui5-popup-header-root:before{background:var(--sapInformationBorderColor)}:host([state="Positive"]) .ui5-popup-header-root:before{background:var(--sapSuccessBorderColor)}:host([state="Critical"]) .ui5-popup-header-root:before{background:var(--sapWarningBorderColor)}.ui5-dialog-value-state-icon{margin-inline-end:.5rem;flex-shrink:0}:host([state="Negative"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-6-2_dialog_header_error_state_icon_color)}:host([state="Information"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-6-2_dialog_header_information_state_icon_color)}:host([state="Positive"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-6-2_dialog_header_success_state_icon_color)}:host([state="Critical"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-6-2_dialog_header_warning_state_icon_color)}.ui5-popup-header-root{outline:none}:host([desktop]) .ui5-popup-header-root:focus:after,.ui5-popup-header-root:focus-visible:after{content:"";position:absolute;left:var(--_ui5-v2-6-2_dialog_header_focus_left_offset);bottom:var(--_ui5-v2-6-2_dialog_header_focus_bottom_offset);right:var(--_ui5-v2-6-2_dialog_header_focus_right_offset);top:var(--_ui5-v2-6-2_dialog_header_focus_top_offset);border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-6-2_dialog_header_border_radius) var(--_ui5-v2-6-2_dialog_header_border_radius) 0 0;pointer-events:none}:host([stretch]) .ui5-popup-content{width:100%;height:100%}.ui5-popup-content{min-height:var(--_ui5-v2-6-2_dialog_content_min_height);flex:1 1 auto}.ui5-popup-resize-handle{position:absolute;bottom:-.5rem;inset-inline-end:-.5rem;cursor:var(--_ui5-v2-6-2_dialog_resize_cursor);width:1.5rem;height:1.5rem;border-radius:50%}.ui5-popup-resize-handle [ui5-icon]{color:var(--sapButton_Lite_TextColor)}::slotted([slot="footer"]){height:var(--_ui5-v2-6-2_dialog_footer_height)}::slotted([slot="footer"][ui5-bar][design="Footer"]){border-top:none}::slotted([slot="header"][ui5-bar]){box-shadow:none}::slotted([slot="footer"][ui5-toolbar]){border:0}:host::backdrop{background-color:var(--_ui5-v2-6-2_popup_block_layer_background);opacity:var(--_ui5-v2-6-2_popup_block_layer_opacity)}.ui5-block-layer{display:block}
`;var h=function(b,e,t,i){var r=arguments.length,o=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(b,e,t,i);else for(var a=b.length-1;a>=0;a--)(s=b[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o},u;const l=16,de={[_.Negative]:"error",[_.Critical]:"alert",[_.Positive]:"sys-enter-2",[_.Information]:"information"};let d=u=class extends T{constructor(){super(),this.stretch=!1,this.draggable=!1,this.resizable=!1,this.state="None",this._draggedOrResized=!1,this._revertSize=()=>{Object.assign(this.style,{top:"",left:"",width:"",height:""})},this._screenResizeHandler=this._screenResize.bind(this),this._dragMouseMoveHandler=this._onDragMouseMove.bind(this),this._dragMouseUpHandler=this._onDragMouseUp.bind(this),this._resizeMouseMoveHandler=this._onResizeMouseMove.bind(this),this._resizeMouseUpHandler=this._onResizeMouseUp.bind(this),this._dragStartHandler=this._handleDragStart.bind(this)}static _isHeader(e){return e.classList.contains("ui5-popup-header-root")||e.getAttribute("slot")==="header"}get isModal(){return!0}get _ariaLabelledBy(){let e;return this.headerText&&!this._ariaLabel&&(e="ui5-popup-header-text"),e}get ariaRoleDescriptionHeaderText(){return this.resizable||this.draggable?u.i18nBundle.getText(P):void 0}get effectiveAriaDescribedBy(){return this.resizable||this.draggable?`${this._id}-descr`:void 0}get ariaDescribedByHeaderTextResizable(){return u.i18nBundle.getText(j)}get ariaDescribedByHeaderTextDraggable(){return u.i18nBundle.getText(F)}get ariaDescribedByHeaderTextDraggableAndResizable(){return u.i18nBundle.getText(q)}get _displayHeader(){return this.header.length||this.headerText||this.draggable||this.resizable}get _movable(){return!this.stretch&&this.onDesktop&&(this.draggable||this.resizable)}get _headerTabIndex(){return this._movable?0:void 0}get _showResizeHandle(){return this.resizable&&this.onDesktop}get _minHeight(){let e=Number.parseInt(window.getComputedStyle(this.contentDOM).minHeight);const t=this._root.querySelector(".ui5-popup-header-root");t&&(e+=t.offsetHeight);const i=this._root.querySelector(".ui5-popup-footer-root");return i&&(e+=i.offsetHeight),e}get hasValueState(){return this.state!==_.None}get _dialogStateIcon(){return de[this.state]}get _role(){if(this.accessibleRole!==m.None)return this.state===_.Negative||this.state===_.Critical?y(m.AlertDialog):y(this.accessibleRole)}_show(){super._show(),this._center()}onBeforeRendering(){super.onBeforeRendering(),this._isRTL=this.effectiveDir==="rtl"}onEnterDOM(){super.onEnterDOM(),this._attachScreenResizeHandler(),this.addEventListener("dragstart",this._dragStartHandler)}onExitDOM(){super.onExitDOM(),this._detachScreenResizeHandler(),this.removeEventListener("dragstart",this._dragStartHandler)}_resize(){super._resize(),this._draggedOrResized||this._center()}_screenResize(){this._center()}_attachScreenResizeHandler(){this._screenResizeHandlerAttached||(window.addEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!0)}_detachScreenResizeHandler(){this._screenResizeHandlerAttached&&(window.removeEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!1)}_center(){const e=window.innerHeight-this.offsetHeight,t=window.innerWidth-this.offsetWidth;Object.assign(this.style,{top:`${Math.round(e/2)}px`,left:`${Math.round(t/2)}px`})}_onDragMouseDown(e){if(!this._movable||!this.draggable||!u._isHeader(e.target))return;const{top:t,left:i}=this.getBoundingClientRect(),{width:r,height:o}=window.getComputedStyle(this);Object.assign(this.style,{top:`${t}px`,left:`${i}px`,width:`${Math.round(Number.parseFloat(r)*100)/100}px`,height:`${Math.round(Number.parseFloat(o)*100)/100}px`}),this._x=e.clientX,this._y=e.clientY,this._draggedOrResized=!0,this._attachMouseDragHandlers()}_onDragMouseMove(e){e.preventDefault();const{clientX:t,clientY:i}=e,r=this._x-t,o=this._y-i,{left:s,top:a}=this.getBoundingClientRect();Object.assign(this.style,{left:`${Math.floor(s-r)}px`,top:`${Math.floor(a-o)}px`}),this._x=t,this._y=i}_onDragMouseUp(){delete this._x,delete this._y,this._detachMouseDragHandlers()}_onDragOrResizeKeyDown(e){if(!(!this._movable||!u._isHeader(e.target))){if(this.draggable&&[v,w,D,z].some(t=>t(e))){this._dragWithEvent(e);return}this.resizable&&[x,H,R,M].some(t=>t(e))&&this._resizeWithEvent(e)}}_dragWithEvent(e){const{top:t,left:i,width:r,height:o}=this.getBoundingClientRect();let s=0,a="top";switch(!0){case v(e):s=t-l,a="top";break;case w(e):s=t+l,a="top";break;case D(e):s=i-l,a="left";break;case z(e):s=i+l,a="left";break}s=c(s,0,a==="left"?window.innerWidth-r:window.innerHeight-o),this.style[a]=`${s}px`}_resizeWithEvent(e){this._draggedOrResized=!0,this.addEventListener("ui5-before-close",this._revertSize,{once:!0});const{top:t,left:i}=this.getBoundingClientRect(),r=window.getComputedStyle(this),o=Number.parseFloat(r.minWidth),s=window.innerWidth-i,a=window.innerHeight-t;let p=Number.parseFloat(r.width),g=Number.parseFloat(r.height);switch(!0){case x(e):g-=l;break;case H(e):g+=l;break;case R(e):p-=l;break;case M(e):p+=l;break}p=c(p,o,s),g=c(g,this._minHeight,a),Object.assign(this.style,{width:`${p}px`,height:`${g}px`})}_attachMouseDragHandlers(){window.addEventListener("mousemove",this._dragMouseMoveHandler),window.addEventListener("mouseup",this._dragMouseUpHandler)}_detachMouseDragHandlers(){window.removeEventListener("mousemove",this._dragMouseMoveHandler),window.removeEventListener("mouseup",this._dragMouseUpHandler)}_onResizeMouseDown(e){if(!this._movable||!this.resizable)return;e.preventDefault();const{top:t,left:i}=this.getBoundingClientRect(),{width:r,height:o,minWidth:s}=window.getComputedStyle(this);this._initialX=e.clientX,this._initialY=e.clientY,this._initialWidth=Number.parseFloat(r),this._initialHeight=Number.parseFloat(o),this._initialTop=t,this._initialLeft=i,this._minWidth=Number.parseFloat(s),this._cachedMinHeight=this._minHeight,Object.assign(this.style,{top:`${t}px`,left:`${i}px`}),this._draggedOrResized=!0,this._attachMouseResizeHandlers()}_onResizeMouseMove(e){const{clientX:t,clientY:i}=e;let r,o;this._isRTL?(r=c(this._initialWidth-(t-this._initialX),this._minWidth,this._initialLeft+this._initialWidth),o=c(this._initialLeft+(t-this._initialX),0,this._initialX+this._initialWidth-this._minWidth)):r=c(this._initialWidth+(t-this._initialX),this._minWidth,window.innerWidth-this._initialLeft);const s=c(this._initialHeight+(i-this._initialY),this._cachedMinHeight,window.innerHeight-this._initialTop);Object.assign(this.style,{height:`${s}px`,width:`${r}px`,left:o?`${o}px`:void 0})}_onResizeMouseUp(){delete this._initialX,delete this._initialY,delete this._initialWidth,delete this._initialHeight,delete this._initialTop,delete this._initialLeft,delete this._minWidth,delete this._cachedMinHeight,this._detachMouseResizeHandlers()}_handleDragStart(e){this.draggable&&e.preventDefault()}_attachMouseResizeHandlers(){window.addEventListener("mousemove",this._resizeMouseMoveHandler),window.addEventListener("mouseup",this._resizeMouseUpHandler),this.addEventListener("ui5-before-close",this._revertSize,{once:!0})}_detachMouseResizeHandlers(){window.removeEventListener("mousemove",this._resizeMouseMoveHandler),window.removeEventListener("mouseup",this._resizeMouseUpHandler)}};h([f()],d.prototype,"headerText",void 0);h([f({type:Boolean})],d.prototype,"stretch",void 0);h([f({type:Boolean})],d.prototype,"draggable",void 0);h([f({type:Boolean})],d.prototype,"resizable",void 0);h([f()],d.prototype,"state",void 0);h([S()],d.prototype,"header",void 0);h([S()],d.prototype,"footer",void 0);h([N("@ui5/webcomponents")],d,"i18nBundle",void 0);d=u=h([I({tag:"ui5-dialog",template:re,styles:[T.styles,$,ne,k()]})],d);d.define();const He=d;export{He as D};
