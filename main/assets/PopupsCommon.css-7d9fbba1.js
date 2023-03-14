import{e as L,l as f,s as g,a as b,p as n,c as S,b as B}from"./withWebComponent-e4481254.js";import{a as l,n as $,o as T,U as O,p as M}from"./UI5Element-427ec721.js";import{e as d}from"./event-97133b94.js";import{s as D}from"./slot-634e3e91.js";import{b as z}from"./Device-208919c6.js";import{g as k,a as N}from"./FocusableElements-7e25663e.js";import{g as I}from"./AriaLabelHelper-43a261ec.js";import{g as H}from"./BrowserScrollbar.css-615afd63.js";import{d as A,e as C,b as V}from"./Keys-3acbae73.js";import{a as G,b as j,c as W}from"./PopupUtils-a2e37749.js";import{R as x}from"./ResizeHandler-1fa8a094.js";import{M as P}from"./MediaRange-25b98f31.js";import{s as v}from"./style-map-77d201d2.js";import{o as F}from"./class-map-5d8e4b2b.js";var w;(function(o){o.None="None",o.Dialog="Dialog",o.AlertDialog="AlertDialog"})(w||(w={}));const m=w,me=(o,e,t)=>Math.min(Math.max(o,e),t),X=(o,e,t)=>L`<section style="${v(o.styles.root)}" class="${F(o.classes.root)}" role="${f(o._role)}" aria-modal="${f(o._ariaModal)}" aria-label="${f(o._ariaLabel)}" aria-labelledby="${f(o._ariaLabelledBy)}" @keydown=${o._onkeydown} @focusout=${o._onfocusout} @mouseup=${o._onmouseup} @mousedown=${o._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${o.forwardToLast}></span><div style="${v(o.styles.content)}" class="${F(o.classes.content)}"  @scroll="${o._scroll}" part="content"><slot></slot></div><span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${o.forwardToFirst}></span></section> `,q=(o,e,t)=>L`<div class="ui5-block-layer" ?hidden=${o._blockLayerHidden} tabindex="0" style="${v(o.styles.blockLayer)}" @keydown="${o._preventBlockLayerFocus}" @mousedown="${o._preventBlockLayerFocus}"></div>`;let a=[];const U=(o,e=[])=>{a.some(t=>t.instance===o)||a.push({instance:o,parentPopovers:e}),E(),a.length===1&&J()},Z=o=>{a=a.filter(e=>e.instance!==o),E(),a.length||K()},ge=()=>[...a],R=o=>{a.length&&A(o)&&a[a.length-1].instance.close(!0)},J=()=>{document.addEventListener("keydown",R)},K=()=>{document.removeEventListener("keydown",R)},E=()=>{let o,e=!1;for(let t=a.length-1;t>=0;t--)o=a[t].instance,!e&&o.isModal?(o.isTopModalPopup=!0,e=!0):o.isTopModalPopup=!1};l("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);l("@ui5/webcomponents","sap_fiori_3",async()=>b);const Q={packageName:"@ui5/webcomponents",fileName:"themes/Popup.css.ts",content:":host{min-width:1px;display:none;position:fixed}"};l("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);l("@ui5/webcomponents","sap_fiori_3",async()=>b);const Y={packageName:"@ui5/webcomponents",fileName:"themes/PopupStaticAreaStyles.css.ts",content:".ui5-block-layer{display:none;position:fixed;background-color:var(--sapBlockLayer_Background);opacity:.6;top:-500px;left:-500px;right:-500px;bottom:-500px;outline:none;pointer-events:all;z-index:-1}.ui5-block-layer:not([hidden]){display:inline-block}"};l("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);l("@ui5/webcomponents","sap_fiori_3",async()=>b);const ee={packageName:"@ui5/webcomponents",fileName:"themes/PopupGlobal.css.ts",content:".ui5-popup-scroll-blocker{overflow:hidden}"};var s=globalThis&&globalThis.__decorate||function(o,e,t,r){var u=arguments.length,p=u<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(o,e,t,r);else for(var y=o.length-1;y>=0;y--)(h=o[y])&&(p=(u<3?h(p):u>3?h(e,t,p):h(e,t))||p);return u>3&&p&&Object.defineProperty(e,t,p),p},c;const oe=()=>{$("data-ui5-popup-scroll-blocker")||T(ee,"data-ui5-popup-scroll-blocker")};oe();const _=new Set;let i=c=class extends O{constructor(){super(),this._resizeHandler=this._resize.bind(this)}onBeforeRendering(){this._blockLayerHidden=!this.isOpen()||!this.isTopModalPopup}onEnterDOM(){x.register(this,this._resizeHandler)}onExitDOM(){this.isOpen()&&(c.unblockPageScrolling(this),this._removeOpenedPopup()),x.deregister(this,this._resizeHandler)}get _displayProp(){return"block"}_resize(){this.mediaRange=P.getCurrentRange(P.RANGESETS.RANGE_4STEPS,this.getDomRef().offsetWidth)}_preventBlockLayerFocus(e){e.preventDefault()}static blockPageScrolling(e){_.add(e),_.size===1&&document.documentElement.classList.add("ui5-popup-scroll-blocker")}static unblockPageScrolling(e){_.delete(e),_.size===0&&document.documentElement.classList.remove("ui5-popup-scroll-blocker")}_scroll(e){this.fireEvent("scroll",{scrollTop:e.target.scrollTop,targetRef:e.target})}_onkeydown(e){const t=e.target===this._root&&C(e),r=V(e)&&!this.isOpen();(t||r)&&e.preventDefault()}_onfocusout(e){e.relatedTarget||(this._shouldFocusRoot=!0)}_onmousedown(e){this._root.removeAttribute("tabindex"),this.shadowRoot.contains(e.target)?this._shouldFocusRoot=!0:this._shouldFocusRoot=!1}_onmouseup(){this._root.tabIndex=-1,this._shouldFocusRoot&&(z()&&this._root.focus(),this._shouldFocusRoot=!1)}async forwardToFirst(){const e=await k(this);e?e.focus({focusVisible:!0}):this._root.focus()}async forwardToLast(){const e=await N(this);e?e.focus({focusVisible:!0}):this._root.focus()}async applyInitialFocus(){await this.applyFocus()}async applyFocus(){await this._waitForDomRef();const e=this.getRootNode().getElementById(this.initialFocus)||document.getElementById(this.initialFocus)||await k(this)||this._root;e&&(e===this._root&&(e.tabIndex=-1),e.focus({focusVisible:!0}))}isOpen(){return this.opened}isFocusWithin(){return G(this._root)}async _open(e){var r;this.fireEvent("before-open",{},!0,!1)&&(this.isModal&&!this.shouldHideBackdrop&&(this.getStaticAreaItemDomRef(),this._blockLayerHidden=!1,c.blockPageScrolling(this)),this._zIndex=j(),this.style.zIndex=((r=this._zIndex)==null?void 0:r.toString())||"",this._focusedElementBeforeOpen=W(),this._show(),!this._disableInitialFocus&&!e&&this.applyInitialFocus(),this._addOpenedPopup(),this.opened=!0,this.open=!0,await M(),this.fireEvent("after-open",{},!1,!1))}_addOpenedPopup(){U(this)}close(e=!1,t=!1,r=!1){!this.opened||!this.fireEvent("before-close",{escPressed:e},!0,!1)||(this.isModal&&(this._blockLayerHidden=!0,c.unblockPageScrolling(this)),this.hide(),this.opened=!1,this.open=!1,t||this._removeOpenedPopup(),!this.preventFocusRestore&&!r&&this.resetFocus(),this.fireEvent("after-close",{},!1,!1))}_removeOpenedPopup(){Z(this)}resetFocus(){this._focusedElementBeforeOpen&&(this._focusedElementBeforeOpen.focus({focusVisible:!0}),this._focusedElementBeforeOpen=null)}_show(){this.style.display=this._displayProp}hide(){this.style.display="none"}get _ariaLabel(){return I(this)}get _root(){return this.shadowRoot.querySelector(".ui5-popup-root")}get _role(){return this.accessibleRole===m.None?void 0:this.accessibleRole.toLowerCase()}get _ariaModal(){return this.accessibleRole===m.None?void 0:"true"}get contentDOM(){return this.shadowRoot.querySelector(".ui5-popup-content")}get styles(){return{root:{},content:{},blockLayer:{zIndex:this._zIndex?this._zIndex-1:""}}}get classes(){return{root:{"ui5-popup-root":!0,"ui5-content-native-scrollbars":H()},content:{"ui5-popup-content":!0}}}};s([n()],i.prototype,"initialFocus",void 0);s([n({type:Boolean})],i.prototype,"preventFocusRestore",void 0);s([n({type:Boolean})],i.prototype,"open",void 0);s([n({type:Boolean,noAttribute:!0})],i.prototype,"opened",void 0);s([n({defaultValue:void 0})],i.prototype,"accessibleName",void 0);s([n({defaultValue:""})],i.prototype,"accessibleNameRef",void 0);s([n({type:m,defaultValue:m.Dialog})],i.prototype,"accessibleRole",void 0);s([n()],i.prototype,"mediaRange",void 0);s([n({type:Boolean})],i.prototype,"_disableInitialFocus",void 0);s([n({type:Boolean})],i.prototype,"_blockLayerHidden",void 0);s([n({type:Boolean,noAttribute:!0})],i.prototype,"isTopModalPopup",void 0);s([D({type:HTMLElement,default:!0})],i.prototype,"content",void 0);i=c=s([S({renderer:B,styles:Q,template:X,staticAreaTemplate:q,staticAreaStyles:Y}),d("before-open"),d("after-open"),d("before-close",{escPressed:{type:Boolean}}),d("after-close"),d("scroll")],i);const ye=i;l("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);l("@ui5/webcomponents","sap_fiori_3",async()=>b);const ve={packageName:"@ui5/webcomponents",fileName:"themes/PopupsCommon.css.ts",content:':host{display:none;position:fixed;background:var(--sapGroup_ContentBackground);box-shadow:var(--sapContent_Shadow2);border-radius:var(--_ui5_popup_border_radius);min-height:2rem;box-sizing:border-box}.ui5-popup-root{background:inherit;border-radius:inherit;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;outline:none}.ui5-popup-root .ui5-popup-header-root{color:var(--sapPageHeader_TextColor);box-shadow:var(--sapContent_HeaderShadow);margin-bottom:.125rem}.ui5-popup-content{color:var(--sapTextColor)}.ui5-popup-footer-root{background:var(--sapPageFooter_Background);border-top:1px solid var(--sapPageFooter_BorderColor);color:var(--sapPageFooter_TextColor)}.ui5-popup-footer-root,.ui5-popup-header-root,:host([header-text]) .ui5-popup-header-text{margin:0;font-size:1rem;font-family:"72override",var(--_ui5_popup_header_font_family);display:flex;justify-content:center;align-items:center}.ui5-popup-header-root .ui5-popup-header-text{font-weight:var(--_ui5_popup_header_font_weight)}.ui5-popup-content{overflow:auto;box-sizing:border-box}:host([header-text]) .ui5-popup-header-text{text-align:center;min-height:var(--_ui5_popup_default_header_height);max-height:var(--_ui5_popup_default_header_height);line-height:var(--_ui5_popup_default_header_height);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:inline-block}:host([header-text]) .ui5-popup-header-root{justify-content:var(--_ui5_popup_header_prop_header_text_alignment)}:host(:not([header-text])) .ui5-popup-header-text{display:none}:host([disable-scrolling]) .ui5-popup-content{overflow:hidden}:host([media-range=S]) .ui5-popup-content{padding:1rem var(--_ui5_popup_content_padding_s)}:host([media-range=L]) .ui5-popup-content,:host([media-range=M]) .ui5-popup-content{padding:1rem var(--_ui5_popup_content_padding_m_l)}:host([media-range=XL]) .ui5-popup-content{padding:1rem var(--_ui5_popup_content_padding_xl)}.ui5-popup-header-root{background:var(--sapPageHeader_Background)}:host([media-range=S]) .ui5-popup-footer-root,:host([media-range=S]) .ui5-popup-header-root{padding-left:var(--_ui5_popup_header_footer_padding_s);padding-right:var(--_ui5_popup_header_footer_padding_s)}:host([media-range=L]) .ui5-popup-footer-root,:host([media-range=L]) .ui5-popup-header-root,:host([media-range=M]) .ui5-popup-footer-root,:host([media-range=M]) .ui5-popup-header-root{padding-left:var(--_ui5_popup_header_footer_padding_m_l);padding-right:var(--_ui5_popup_header_footer_padding_m_l)}:host([media-range=XL]) .ui5-popup-footer-root,:host([media-range=XL]) .ui5-popup-header-root{padding-left:var(--_ui5_popup_header_footer_padding_xl);padding-right:var(--_ui5_popup_header_footer_padding_xl)}'};export{m as P,U as a,ye as b,me as c,ge as g,Z as r,ve as s};
//# sourceMappingURL=PopupsCommon.css-7d9fbba1.js.map
