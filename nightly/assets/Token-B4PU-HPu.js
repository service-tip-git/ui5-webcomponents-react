import{p as h,q as r,v as _,a as g,s as $,b as d,m as Z,y as U,S as G,x as T,z as ne}from"./withWebComponent-v3aPz19k.js";import{d as Q}from"./slot-_4yKMUwC.js";import{b as m}from"./event-BX8i4Y_x.js";import{f as C}from"./ResizeHandler-40ebLclU.js";import{f as ie}from"./ItemNavigation-Cpw3mMvK.js";import{v as E}from"./AriaLabelHelper-C5uDZewF.js";import{t as se}from"./getActiveElement-kltGt_DR.js";import{r as re}from"./PopupsCommon.css-WLQXQ1BG.js";import{v as le}from"./ScrollEnablement-6Met_mOA.js";import{i as X}from"./i18n-DEVDpFvK.js";import{e as ae}from"./Popover-DNjdezPs.js";import{Q as B,J as de,A as ce,i as Y,C as ee,G as he,j as ue,n as pe,z as _e,H as fe,R as ke,_ as I,S as z,U as ve,w as me,T as S,O as ge,u as O,h as be,I as N,F as Te,W as A,M as ye,k as R,K as xe,c as L,D as $e,P,x as we,V as De}from"./Keys-DoZifIQ_.js";import{R as Ce}from"./ResponsivePopover-DHTYZaBG.js";import{f as Ee,g as Be,L as M}from"./List-CVE8axbO.js";import{a as Ie}from"./Title-acGyIFev.js";import{a as ze}from"./Button-BOw4gYNT.js";import{c as y,I as te}from"./Icon-Bq3V4Dpj.js";import{s as K}from"./style-map-D4Rgk784.js";import{aG as Se,aH as Oe,aI as F,aJ as Ne,aK as Ae,aL as Re,aM as Le,aN as H,aO as Pe}from"./i18n-defaults-CMHHS2wK.js";import{s as w}from"./parameters-bundle.css-R51uC6BG.js";import{s as Me}from"./ResponsivePopoverCommon.css-D-A5aToF.js";import{s as Ke}from"./Suggestions.css-Dj9ke65d.js";import"./decline-m373cvJP.js";import"./sys-cancel-BBVsgOP8.js";function Fe(s,e,t){return t?h`<div class="ui5-tokenizer-root"><div class="ui5-tokenizer--content" @ui5-delete="${r(this._delete)}" @click="${this._click}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" @ui5-select="${r(this.onTokenSelect)}" role="listbox" aria-label="${r(this.tokenizerLabel)}" aria-description="${r(this.tokenizerAriaDescription)}" aria-disabled="${r(this._ariaDisabled)}" aria-readonly="${r(this._ariaReadonly)}">${y(this.tokens,(o,n)=>o._id||n,(o,n)=>V.call(this,s,e,t,o,n))}</div>${this.showNMore?W.call(this,s,e,t):void 0}</div><${_("ui5-responsive-popover",e,t)} tokenizer-popover="true" ?open="${this.open}" .opener="${r(this.morePopoverOpener)}" style=${K(this.styles.popover)} content-only-on-desktop prevent-focus-restore ?hide-arrow="${this.hidePopoverArrow}" placement="Bottom" horizontal-align="Start" @ui5-before-close="${r(this.handleBeforeClose)}" @ui5-close="${r(this.handleAfterClose)}" @ui5-before-open="${r(this.handleBeforeOpen)}">${this._isPhone?j.call(this,s,e,t):void 0}<${_("ui5-list",e,t)} class="ui5-tokenizer-list" selection-mode=${r(this._nMoreListMode)} separators="None" @keydown="${this._onPopoverListKeydown}" @ui5-item-delete=${r(this.itemDelete)}>${y(this._tokens,(o,n)=>o._id||n,(o,n)=>q.call(this,s,e,t,o,n))}</${_("ui5-list",e,t)}>${this._isPhone?J.call(this,s,e,t):void 0}</${_("ui5-responsive-popover",e,t)}>`:h`<div class="ui5-tokenizer-root"><div class="ui5-tokenizer--content" @ui5-delete="${r(this._delete)}" @click="${this._click}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" @ui5-select="${r(this.onTokenSelect)}" role="listbox" aria-label="${r(this.tokenizerLabel)}" aria-description="${r(this.tokenizerAriaDescription)}" aria-disabled="${r(this._ariaDisabled)}" aria-readonly="${r(this._ariaReadonly)}">${y(this.tokens,(o,n)=>o._id||n,(o,n)=>V.call(this,s,e,t,o,n))}</div>${this.showNMore?W.call(this,s,e,t):void 0}</div><ui5-responsive-popover tokenizer-popover="true" ?open="${this.open}" .opener="${r(this.morePopoverOpener)}" style=${K(this.styles.popover)} content-only-on-desktop prevent-focus-restore ?hide-arrow="${this.hidePopoverArrow}" placement="Bottom" horizontal-align="Start" @ui5-before-close="${r(this.handleBeforeClose)}" @ui5-close="${r(this.handleAfterClose)}" @ui5-before-open="${r(this.handleBeforeOpen)}">${this._isPhone?j.call(this,s,e,t):void 0}<ui5-list class="ui5-tokenizer-list" selection-mode=${r(this._nMoreListMode)} separators="None" @keydown="${this._onPopoverListKeydown}" @ui5-item-delete=${r(this.itemDelete)}>${y(this._tokens,(o,n)=>o._id||n,(o,n)=>q.call(this,s,e,t,o,n))}</ui5-list>${this._isPhone?J.call(this,s,e,t):void 0}</ui5-responsive-popover>`}function V(s,e,t,o,n){return h`<slot name="${r(o._individualSlot)}"></slot>`}function W(s,e,t){return h`<span role="button" aria-haspopup="dialog" @click="${this._handleNMoreClick}" class="ui5-tokenizer-more-text" part="n-more-text">${r(this._nMoreText)}</span>`}function j(s,e,t){return t?h`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><${_("ui5-title",e,t)} level="H1" wrapping-type="None" class="ui5-responsive-popover-header-text">${r(this.morePopoverTitle)}</${_("ui5-title",e,t)}></div></div>`:h`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><ui5-title level="H1" wrapping-type="None" class="ui5-responsive-popover-header-text">${r(this.morePopoverTitle)}</ui5-title></div></div>`}function q(s,e,t,o,n){return h`${o._isVisible?He.call(this,s,e,t,o,n):void 0}`}function He(s,e,t,o,n){return t?h`<${_("ui5-li",e,t)} .tokenRef=${r(o)} wrapping-type="Normal">${r(o.text)}</${_("ui5-li",e,t)}>`:h`<ui5-li .tokenRef=${r(o)} wrapping-type="Normal">${r(o.text)}</ui5-li>`}function J(s,e,t){return t?h`<div slot="footer" class="ui5-responsive-popover-footer"><${_("ui5-button",e,t)} design="Emphasized" data-ui5-tokenizer-dialog-ok-button @click="${this.handleDialogButtonPress}">OK</${_("ui5-button",e,t)}><${_("ui5-button",e,t)} design="Transparent" @click="${this.handleDialogButtonPress}">Cancel</${_("ui5-button",e,t)}></div>`:h`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Emphasized" data-ui5-tokenizer-dialog-ok-button @click="${this.handleDialogButtonPress}">OK</ui5-button><ui5-button design="Transparent" @click="${this.handleDialogButtonPress}">Cancel</ui5-button></div>`}g("@ui5/webcomponents-theming","sap_horizon",async()=>$);g("@ui5/webcomponents","sap_horizon",async()=>w);const Ve={packageName:"@ui5/webcomponents",fileName:"themes/Tokenizer.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{display:inline-block;box-sizing:border-box;border:none;height:2.25rem}:host([disabled]){opacity:40%;pointer-events:none}:host(:not([expanded])) .ui5-tokenizer-root{overflow:hidden}:host([_tokens-count="0"]) .ui5-tokenizer-root{padding:0}.ui5-tokenizer-root{height:100%;display:flex;align-items:center;box-sizing:border-box;touch-action:none;font-family:"72override",var(--sapFontFamily)}.ui5-tokenizer--token--wrapper{display:inline-flex;align-items:center;box-sizing:border-box;height:100%}:host([expanded]) .ui5-tokenizer--content{display:inline-flex;white-space:nowrap;overflow:hidden}.ui5-tokenizer--content{display:flex;flex-wrap:nowrap;align-items:center;overflow:hidden;padding-inline-start:var(--_ui5-v2-4-0_tokenizer_padding);height:100%;box-sizing:border-box}:host([_tokens-count="1"]) .ui5-tokenizer--content{padding-inline-end:4px;box-sizing:border-box;max-width:100%;flex:1}.ui5-tokenizer-more-text{display:inline-block;margin-inline-start:.25rem;cursor:pointer;white-space:nowrap;font-size:var(--sapFontSize);font-weight:400;color:var(--_ui5-v2-4-0_tokenizer_n_more_text_color)}.ui5-tokenizer-more-text:hover{text-decoration:underline}.ui5-tokenizer-more-text:active{text-decoration:none}
`};g("@ui5/webcomponents-theming","sap_horizon",async()=>$);g("@ui5/webcomponents","sap_horizon",async()=>w);const We={packageName:"@ui5/webcomponents",fileName:"themes/TokenizerPopover.css.ts",content:`[ui5-responsive-popover]::part(header),[ui5-responsive-popover]::part(content){padding:0}[ui5-responsive-popover] .ui5-responsive-popover-header{min-height:2rem}[ui5-responsive-popover] .ui5-responsive-popover-header .row{justify-content:left}[ui5-responsive-popover] [ui5-button]{height:100%;min-width:4rem}[ui5-responsive-popover]{margin-top:var(--_ui5-v2-4-0_tokenizer-popover_offset);margin-inline-start:calc(-1 * var(--_ui5-v2-4-0_tokenizer_padding))}.ui5-responsive-popover-footer [ui5-button]:first-child{margin-right:1rem}
`};var u=function(s,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var a=s.length-1;a>=0;a--)(l=s[a])&&(i=(n<3?l(i):n>3?l(e,t,i):l(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},v,x;(function(s){s.cut="cut",s.copy="copy"})(x||(x={}));let c=v=class extends G{_handleResize(){this._nMoreCount=this.overflownTokens.length}constructor(){super(),this.readonly=!1,this.disabled=!1,this.expanded=!1,this.open=!1,this.preventInitialFocus=!1,this.preventPopoverOpen=!1,this.hidePopoverArrow=!1,this._nMoreCount=0,this._tokensCount=0,this._tokenDeleting=!1,this._preventCollapse=!1,this._skipTabIndex=!1,this._previousToken=null,this._resizeHandler=this._handleResize.bind(this),this._itemNav=new ie(this,{currentIndex:-1,getItemsCallback:this._getVisibleTokens.bind(this)}),this._scrollEnablement=new le(this),this._deletedDialogItems=[]}onBeforeRendering(){const e=this._tokens.length;this._tokensCount=e,this._tokens.forEach(t=>{t.singleToken=e===1,t.readonly=this.readonly})}onEnterDOM(){C.register(this.contentDom,this._resizeHandler)}onExitDOM(){C.deregister(this.contentDom,this._resizeHandler)}_handleNMoreClick(){this.disabled||(this.expanded=!0,this.preventPopoverOpen||(this.open=!0,this.scrollToEnd()),this._tokens.forEach(e=>{e.forcedTabIndex="-1"}),this._skipTabIndex=!0,this.fireDecoratorEvent("show-more-items-press"))}_onmousedown(e){if(e.target.hasAttribute("ui5-token")){const t=e.target;this.expanded=!0,this.open&&(this._preventCollapse=!0),t.toBeDeleted||(this._itemNav.setCurrentItem(t),this._scrollToToken(t))}}onTokenSelect(){const e=this._tokens,t=e[0];e.length===1&&t.isTruncatable&&(this.open=t.selected)}_getVisibleTokens(){return this.disabled?[]:this._tokens.filter((e,t)=>t<this._tokens.length-this._nMoreCount)}onAfterRendering(){const t=this._tokens[0];this._nMoreCount=this.overflownTokens.length,t&&!this.disabled&&!this.preventInitialFocus&&!this._skipTabIndex&&(t.forcedTabIndex="0"),this._scrollEnablement.scrollContainer=this.contentDom,this.expanded&&(this._expandedScrollWidth=this.contentDom.scrollWidth),this._tokenDeleting=!1}_delete(e){const t=e.target;if(!e.detail){this._tokenClickDelete(e,t),this.open=!1;return}this.deleteToken(t,e.detail.backSpace)}_tokenClickDelete(e,t){const o=this._getVisibleTokens(),n=e.target,i=t?o.indexOf(t):o.indexOf(n),l=i===o.length-1?i-1:i+1,a=o[l];this._handleCurrentItemAfterDeletion(a),this._tokenDeleting=!0,this.fireDecoratorEvent("token-delete",{tokens:[t]})}_handleCurrentItemAfterDeletion(e){e&&!T()&&setTimeout(()=>{e.focus()},0)}deleteToken(e,t){const o=this._getVisibleTokens(),n=o.indexOf(e);let i=n===o.length-1?n-1:n+1;const l=o.filter(k=>!k.selected);t?i=n===0?n+1:n-1:i=n===o.length-1?n-1:n+1;let a=o[i];if(l.length>1)for(;a&&a.selected;)i=t?--i:++i,i<0&&(a=l[0]),i>l.length&&(a=l[l.length-1]);else a=l[0];this._handleCurrentItemAfterDeletion(a),this._tokenDeleting=!0,this._selectedTokens.length?this.fireDecoratorEvent("token-delete",{tokens:this._selectedTokens}):this.fireDecoratorEvent("token-delete",{tokens:[e]})}async itemDelete(e){const t=e.detail.item.tokenRef;if(this._tokens.length===1)this.getPopover().addEventListener("ui5-close",()=>{this.fireDecoratorEvent("token-delete",{tokens:[t]})},{once:!0}),this.open=!1;else{T()?(t._isVisible=!1,this._deletedDialogItems.push(t)):this.fireDecoratorEvent("token-delete",{tokens:[t]});const n=e.detail.item,i=n.nextElementSibling,l=n.previousElementSibling,a=i||l;a&&(await ne(),a.focus())}}handleBeforeClose(){const e=this._tokens;T()&&e.forEach(t=>{t.selected=!1}),!this._tokenDeleting&&!this._preventCollapse&&(this._preventCollapse=!1,this.expanded=!1)}handleBeforeOpen(){this._tokens.forEach(o=>{o._isVisible=!0});const e=this._getList(),t=e.querySelectorAll("[ui5-li]")[0];e._itemNavigation.setCurrentItem(t),this.fireDecoratorEvent("before-more-popover-open")}handleAfterClose(){this.open=!1,this._preventCollapse=!1,this._focusedElementBeforeOpen=null,this._tokens.forEach(e=>{e._isVisible=!0})}handleDialogButtonPress(e){!!e.target.hasAttribute("data-ui5-tokenizer-dialog-ok-button")&&this._deletedDialogItems.length&&this.fireDecoratorEvent("token-delete",{tokens:this._deletedDialogItems}),this.open=!1}_onkeydown(e){const t=!!(e.metaKey||e.ctrlKey);if(t&&["c","x"].includes(e.key.toLowerCase())||B(e)||de(e)){e.preventDefault();const o=e.key.toLowerCase()==="x"||B(e),n=this._tokens.filter(l=>l.selected),i=n.find(l=>l.focused);if(o){const l=this._fillClipboard(x.cut,n);return i&&this.deleteToken(i),l}return this._fillClipboard(x.copy,n)}if(t&&e.key.toLowerCase()==="i"&&this._tokens.length>0&&(e.preventDefault(),this._preventCollapse=!0,this._focusedElementBeforeOpen=re(),this.open=!0),ce(e)&&e.preventDefault(),Y(e)||ee(e))return e.preventDefault(),this._handleTokenSelection(e,!1);(he(e)||ue(e))&&this._handleHomeShift(e),(pe(e)||_e(e))&&this._handleEndShift(e),this._handleItemNavigation(e,this._tokens)}_onPopoverListKeydown(e){if((!!(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="i"||fe(e))&&(e.preventDefault(),this.open=!1,this._preventCollapse=!0,this._focusedElementBeforeOpen&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen||this._focusLastToken()),e.key.toLowerCase()==="f7"){e.preventDefault();const o=e.target,n=se();(n==null?void 0:n.part.value)==="native-li"?o.shadowRoot.querySelector("[part=delete-button]").focus():o.focus()}}_handleItemNavigation(e,t){const o=!!(e.metaKey||e.ctrlKey),n=e.target;if(ke(e)||I(e)||z(e)||ve(e))return this._handleArrowCtrl(e,n,t,I(e)||z(e));if(me(e)||S(e)||ge(e)||O(e)||be(e)||N(e))return e.preventDefault(),this._handleArrowShift(n,t,S(e)||N(e)||O(e));if(Te(e)||A(e)||ye(e)||R(e))return e.preventDefault(),this._handleHome(t,A(e)||R(e));if(o&&e.key.toLowerCase()==="a")return e.preventDefault(),this._toggleTokenSelection(t);if(xe(e)||L(e)||$e(e)||P(e)){e.preventDefault();const i=this._calcNextTokenIndex(this._tokens.find(l=>l.focused),t,L(e)||P(e));this._scrollToToken(t[i])}}_handleHome(e,t){if(!e||!e.length)return-1;const o=t?e.length-1:0;e[o].focus()}_handleHomeShift(e){const t=this._tokens,o=e.target,n=t.indexOf(o),i=[...this._selectedTokens];t.filter((a,k)=>k<=n).forEach(a=>{a.selected=!0}),JSON.stringify(i)!==JSON.stringify(this._selectedTokens)&&this.fireDecoratorEvent("selection-change",{tokens:this._selectedTokens}),t[0].focus()}_handleEndShift(e){const t=this._tokens,o=e.target,n=t.indexOf(o),i=[...this._selectedTokens];t.filter((a,k)=>k>=n).forEach(a=>{a.selected=!0}),JSON.stringify(i)!==JSON.stringify(this._selectedTokens)&&this.fireDecoratorEvent("selection-change",{tokens:this._selectedTokens}),t[t.length-1].focus()}_calcNextTokenIndex(e,t,o){if(!t.length)return-1;const n=t.indexOf(e);let i=o?n+1:n-1;return i>=t.length&&(i=t.length-1),i<0&&(i=0),i}_handleArrowCtrl(e,t,o,n){const i=this._calcNextTokenIndex(t,o,n);e.preventDefault(),i!==-1&&(setTimeout(()=>{o[i].focus()},0),this._scrollToToken(o[i]))}_handleArrowShift(e,t,o){const n=t.indexOf(e),i=o?n+1:n-1,l=[...this._selectedTokens];if(i===-1||i===t.length)return;e.selected=!0,t[i].selected=!0,JSON.stringify(l)!==JSON.stringify(this._selectedTokens)&&this.fireDecoratorEvent("selection-change",{tokens:this._selectedTokens}),t[i].focus(),this._scrollToToken(t[i])}_click(e){if(e.metaKey||e.ctrlKey){this.fireDecoratorEvent("selection-change",{tokens:this._selectedTokens});return}const t=e.target;e.shiftKey||(this._previousToken=t);let o=t;if(this._previousToken?o=this._previousToken:this._previousToken=o,e.shiftKey){const n=this._tokens,i=n.indexOf(t),l=n.indexOf(o),a=Math.min(i,l),k=Math.max(i,l);i!==-1&&n.forEach((oe,D)=>{oe.selected=D>=a&&D<=k}),this.fireDecoratorEvent("selection-change",{tokens:this._selectedTokens});return}this._handleTokenSelection(e)}_onfocusin(e){const t=e.target;this.open=!1,this._itemNav.setCurrentItem(t),this.expanded||(this.expanded=!0)}_onfocusout(e){const t=e.relatedTarget;this._tokens.forEach(o=>{o.forcedTabIndex="-1"}),this._itemNav._currentIndex=-1,this._skipTabIndex=!0,this.contains(t)||(this._tokens[0].forcedTabIndex="0",this._skipTabIndex=!1),!this._tokenDeleting&&!this._preventCollapse&&(this._preventCollapse=!1,this.expanded=!1)}_toggleTokenSelection(e){if(!e||!e.length)return;const t=e.every(o=>o.selected);e.forEach(o=>{o.selected=!t}),this.fireDecoratorEvent("selection-change",{tokens:this._selectedTokens})}_handleTokenSelection(e,t=!0){const o=e.target;o.hasAttribute("ui5-token")&&((t?this._tokens:[]).forEach(i=>{i!==o&&(i.selected=!1)}),this.fireDecoratorEvent("selection-change",{tokens:this._selectedTokens}))}_fillClipboard(e,t){const o=t.filter(i=>i.selected).map(i=>i.text).join(`\r
`),n=i=>{i.clipboardData&&i.clipboardData.setData("text/plain",o),i.preventDefault()};document.addEventListener(e,n),document.execCommand(e),document.removeEventListener(e,n)}scrollToStart(){this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(0,0)}scrollToEnd(){const e=this.contentDom&&(this.effectiveDir!=="rtl"?this.contentDom.scrollWidth:-this.contentDom.scrollWidth);this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(e,0,5,10)}_scrollToToken(e){if(!this.contentDom)return;const t=e.getBoundingClientRect(),o=this.contentDom.getBoundingClientRect();t.left<o.left?this._scrollEnablement.scrollTo(this.contentDom.scrollLeft-(o.left-t.left+5),0):t.right>o.right&&this._scrollEnablement.scrollTo(this.contentDom.scrollLeft+(t.right-o.right+5),0)}_getList(){return this.getPopover().querySelector("[ui5-list]")}get _tokens(){return this.getSlottedNodes("tokens")}get morePopoverOpener(){return this.opener?this.opener:this}get _nMoreText(){if(this._nMoreCount)return this._getVisibleTokens().length?v.i18nBundle.getText(Se,this._nMoreCount):v.i18nBundle.getText(Oe,this._nMoreCount)}get showNMore(){return!this.expanded&&!!this.overflownTokens.length}get contentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer--content")}get moreLink(){return this.shadowRoot.querySelector(".ui5-tokenizer-more-text")}get tokenizerLabel(){return E(this)||v.i18nBundle.getText(F)}get tokenizerAriaDescription(){return E(this)?v.i18nBundle.getText(F):void 0}get _ariaDisabled(){return this.disabled||void 0}get _ariaReadonly(){return this.readonly||void 0}get morePopoverTitle(){return v.i18nBundle.getText(Ne)}get overflownTokens(){if(!this.contentDom)return[];const e=this._tokens;return e.forEach(t=>{t.overflows=!1}),e.filter(t=>{const o=this.contentDom.getBoundingClientRect(),n=t.getBoundingClientRect(),i=Number(n.right.toFixed(2)),l=Number(o.right.toFixed(2)),a=Number(n.left.toFixed(2)),k=Number(o.left.toFixed(2));return t.overflows=!this.expanded&&(a<k||i>l),t.overflows})}get _isPhone(){return T()}get _selectedTokens(){return this._tokens.filter(e=>e.selected)}get _nMoreListMode(){return this.readonly||this.disabled?M.None:M.Delete}get styles(){return{popover:{"min-width":this.popoverMinWidth?`${this.popoverMinWidth}px`:`${this.getBoundingClientRect().width}px`}}}_focusLastToken(){const e=this._tokens;if(e.length===0)return;e[e.length-1].focus()}getPopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}};u([d({type:Boolean})],c.prototype,"readonly",void 0);u([d({type:Boolean})],c.prototype,"disabled",void 0);u([d()],c.prototype,"accessibleName",void 0);u([d()],c.prototype,"accessibleNameRef",void 0);u([d({type:Boolean})],c.prototype,"expanded",void 0);u([d({type:Boolean})],c.prototype,"open",void 0);u([d({converter:ae})],c.prototype,"opener",void 0);u([d({type:Number})],c.prototype,"popoverMinWidth",void 0);u([d({type:Boolean})],c.prototype,"preventInitialFocus",void 0);u([d({type:Boolean})],c.prototype,"preventPopoverOpen",void 0);u([d({type:Boolean})],c.prototype,"hidePopoverArrow",void 0);u([d({type:Number})],c.prototype,"_nMoreCount",void 0);u([d({type:Number})],c.prototype,"_tokensCount",void 0);u([Q({type:HTMLElement,default:!0,individualSlots:!0,invalidateOnChildChange:{properties:["_isVisible"],slots:!1}})],c.prototype,"tokens",void 0);u([X("@ui5/webcomponents")],c,"i18nBundle",void 0);c=v=u([Z({tag:"ui5-tokenizer",languageAware:!0,renderer:U,template:Fe,styles:[Ve,Me,Ke,We],dependencies:[Ce,Ee,Be,Ie,ze,te]}),m("token-delete",{detail:{tokens:{type:Array}},bubbles:!0}),m("selection-change",{detail:{tokens:{type:Array}},bubbles:!0}),m("show-more-items-press",{bubbles:!0}),m("before-more-popover-open",{bubbles:!0})],c);const Tt=s=>{const e={0:Re,1:Le};return s in e?c.i18nBundle.getText(e[s]):c.i18nBundle.getText(Ae,s)};c.define();const yt=c;function je(s,e,t){return h`<div tabindex="${r(this.forcedTabIndex)}" @click="${this._handleSelect}" @focusin="${this._focusin}" @focusout="${this._focusout}" @keydown="${this._keydown}" class="ui5-token--wrapper" role="option" aria-description="${r(this.ariaDescription)}" aria-selected="${r(this.selected)}"><span class="ui5-token--text">${r(this.text)}</span>${this.readonly?void 0:qe.call(this,s,e,t)}</div>`}function qe(s,e,t){return h`<div class="ui5-token--icon">${this.closeIcon.length?Je.call(this,s,e,t):Ze.call(this,s,e,t)}</div>`}function Je(s,e,t){return h`<slot name="closeIcon" @click="${this._delete}"></slot>`}function Ze(s,e,t){return t?h`<${_("ui5-icon",e,t)} name="decline" mode="Decorative" accessible-name="${r(this.tokenDeletableText)}" show-tooltip @click="${this._delete}"></${_("ui5-icon",e,t)}>`:h`<ui5-icon name="decline" mode="Decorative" accessible-name="${r(this.tokenDeletableText)}" show-tooltip @click="${this._delete}"></ui5-icon>`}g("@ui5/webcomponents-theming","sap_horizon",async()=>$);g("@ui5/webcomponents","sap_horizon",async()=>w);const Ue={packageName:"@ui5/webcomponents",fileName:"themes/Token.css.ts",content:`:host{display:inline-block;background:var(--_ui5-v2-4-0_token_background);border:var(--sapButton_BorderWidth) solid var(--sapButton_TokenBorderColor);border-radius:var(--_ui5-v2-4-0_token_border_radius);color:var(--_ui5-v2-4-0_token_text_color);height:var(--_ui5-v2-4-0_token_height);box-sizing:border-box}:host(:not([single-token])){margin-inline-end:var(--_ui5-v2-4-0_token_right_margin)}:host([overflows]){display:none}:host(:not([readonly]):hover){background:var(--sapButton_Hover_Background)}:host([selected]){background:var(--sapButton_Selected_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([selected]) .ui5-token--wrapper{border-bottom:var(--_ui5-v2-4-0_token_selected_internal_border_bottom);border-bottom-left-radius:var(--_ui5-v2-4-0_token_selected_internal_border_bottom_radius);border-bottom-right-radius:var(--_ui5-v2-4-0_token_selected_internal_border_bottom_radius)}:host([selected]:hover){background:var(--sapButton_Selected_Hover_Background)}:host([readonly]:not([selected])){background:var(--_ui5-v2-4-0_token_readonly_background);border-color:var(--sapField_ReadOnly_BorderColor);color:var(--_ui5-v2-4-0_token_readonly_color)}:host([readonly]) .ui5-token--wrapper{padding:var(--_ui5-v2-4-0_token_readonly_padding)}:host([selected]) .ui5-token--wrapper:focus{outline:var(--_ui5-v2-4-0_token_selected_focus_outline)}:host([selected]) .ui5-token--text,:host([selected]) .ui5-token--icon{top:var(--_ui5-v2-4-0_token_text_icon_top);position:relative}:host([focused][selected]:not(:hover)){background:var(--sapButton_Selected_Background);color:var(--sapButton_Selected_TextColor);border:var(--_ui5-v2-4-0_token_focused_selected_border)}.ui5-token--wrapper{display:flex;align-items:center;height:100%;width:100%;cursor:pointer;padding-inline-start:var(--_ui5-v2-4-0_token_left_padding);box-sizing:border-box;font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);user-select:none}.ui5-token--wrapper{position:relative}:host([selected]) .ui5-token--wrapper{font-family:var(--_ui5-v2-4-0_token_selected_text_font_family)}.ui5-token--wrapper:focus{outline-offset:var(--_ui5-v2-4-0_token_outline_offset);outline:var(--_ui5-v2-4-0_token_focus_outline)}.ui5-token--wrapper:focus:after{content:var(--ui5-v2-4-0_token_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-4-0_token_focus_outline_border_radius);top:var(--_ui5-v2-4-0_token_focus_offset);bottom:var(--_ui5-v2-4-0_token_focus_offset);left:var(--_ui5-v2-4-0_token_focus_offset);right:var(--_ui5-v2-4-0_token_focus_offset)}:host([focused][selected]) .ui5-token--wrapper:focus:after{bottom:var(--_ui5-v2-4-0_token_selected_focused_offset_bottom)}.ui5-token--text{white-space:nowrap}.ui5-token--icon{display:flex}:host([selected]) .ui5-token--icon>[ui5-icon],:host([selected]) ::slotted([ui5-icon]){color:var(--sapButton_Selected_TextColor)}.ui5-token--icon>[ui5-icon],::slotted([ui5-icon]){color:inherit;cursor:pointer;width:var(--_ui5-v2-4-0_token_icon_size);height:var(--_ui5-v2-4-0_token_icon_size);padding:var(--_ui5-v2-4-0_token_icon_padding);color:var(--sapContent_IconColor)}:host([single-token]){max-width:100%}:host([single-token]) .ui5-token--wrapper{max-width:100%}:host([single-token]) .ui5-token--text{overflow:hidden;text-overflow:ellipsis;max-width:100%}
`};var f=function(s,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var a=s.length-1;a>=0;a--)(l=s[a])&&(i=(n<3?l(i):n>3?l(e,t,i):l(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},b;let p=b=class extends G{constructor(){super(...arguments),this.selected=!1,this.readonly=!1,this.overflows=!1,this.singleToken=!1,this.focused=!1,this.toBeDeleted=!1,this.forcedTabIndex="-1",this._isVisible=!1}_handleSelect(){this.toBeDeleted||(this.selected=!this.selected,this.fireDecoratorEvent("select"))}_focusin(){this.focused=!0}_focusout(){this.focused=!this.focused}_delete(){this.toBeDeleted=!0,this.fireDecoratorEvent("delete")}_keydown(e){const t=we(e),o=De(e);!this.readonly&&(t||o)&&(e.preventDefault(),this.fireDecoratorEvent("delete",{backSpace:t,delete:o})),(Y(e)||ee(e))&&(e.preventDefault(),this._handleSelect())}onBeforeRendering(){this.toBeDeleted=!1}get tokenDeletableText(){return b.i18nBundle.getText(H)}get textDom(){var e;return(e=this.getDomRef())==null?void 0:e.querySelector(".ui5-token--text")}get isTruncatable(){return this.textDom?Math.ceil(this.textDom.getBoundingClientRect().width)<Math.ceil(this.textDom.scrollWidth):!1}get ariaDescription(){let e=b.i18nBundle.getText(Pe);return this.readonly||(e+=` ${b.i18nBundle.getText(H)}`),e}};f([d()],p.prototype,"text",void 0);f([d({type:Boolean})],p.prototype,"selected",void 0);f([d({type:Boolean})],p.prototype,"readonly",void 0);f([d({type:Boolean})],p.prototype,"overflows",void 0);f([d({type:Boolean})],p.prototype,"singleToken",void 0);f([d({type:Boolean})],p.prototype,"focused",void 0);f([d({type:Boolean})],p.prototype,"toBeDeleted",void 0);f([d({noAttribute:!0})],p.prototype,"forcedTabIndex",void 0);f([d({type:Boolean,noAttribute:!0})],p.prototype,"_isVisible",void 0);f([Q()],p.prototype,"closeIcon",void 0);f([X("@ui5/webcomponents")],p,"i18nBundle",void 0);p=b=f([Z({tag:"ui5-token",languageAware:!0,renderer:U,template:je,styles:Ue,dependencies:[te]}),m("select",{bubbles:!0}),m("delete",{detail:{backSpace:{type:Boolean},delete:{type:Boolean}},bubbles:!0})],p);p.define();const $t=p;export{yt as T,$t as a,Tt as g};
