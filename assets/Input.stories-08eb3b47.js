import{j as c}from"./jsx-runtime-d079401a.js";import{r as V}from"./CustomElementsScopeUtils-137da8c8.js";import{l as C,m as L}from"./UI5Element-a4bd3d38.js";import{d as M}from"./ListItemBase-472e3755.js";import D from"./ResponsivePopover-1151e741.js";import{b as E,c as R,d as A,a as p,S as a}from"./index-011195cd.js";import{b as z}from"./Button-02dfef34.js";import{a as F}from"./Icon-42236945.js";import{c as $}from"./Popover-26ef4370.js";import H from"./GroupHeaderListItem-60c5bd52.js";import{at as j}from"./i18n-defaults-d5d083dd.js";import{e as G}from"./employee-05c578de.js";import{r as O}from"./Icons-74c917eb.js";import{I as k}from"./index-dd81ee61.js";import{I as w}from"./index-0cf22c59.js";import{I as N}from"./Input-aa3cf5ef.js";import{V as B}from"./ValueState-ab6838cc.js";var U=function(o,e){var t=o.toString(16);return e&&(t=t.padStart(e,"0")),t},W=/[\x00-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g,X=/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/,g={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"},J=function(o){var e=g[o];return e||(X.test(o)?e="&#xfffd;":e="&#x"+U(o.charCodeAt(0))+";",g[o]=e),e},y=function(o){return o.replace(W,J)};const K=o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function f(o,e,t,s){return o.replaceAll(new RegExp(K(e),`${s?"i":""}g`),t)}function Q(o,e){if(!o||!e)return o;const t=r=>{const[m,I]=r.split("");for(;o.indexOf(r)>=0||e.indexOf(r)>=0;)r=`${m}${r}${I}`;return r},s=t("12"),n=t("34");let i=y(f(o,e,r=>`${s}${r}${n}`,!0));return[[s,"<b>"],[n,"</b>"]].forEach(([r,m])=>{i=f(i,r,m,!1)}),i}class u{constructor(e,t,s,n){this.component=e,this.slotName=t,this.handleFocus=n,this.highlight=s,this.fnOnSuggestionItemPress=this.onItemPress.bind(this),this.fnOnSuggestionItemMouseOver=this.onItemMouseOver.bind(this),this.fnOnSuggestionItemMouseOut=this.onItemMouseOut.bind(this),this._getSuggestionPopover(),this.selectedItemIndex=-1}defaultSlotProperties(e){const t=this._getComponent().suggestionItems,s=this.highlight&&!!e,n=[];return t.map((i,r)=>{const m=s?this.getHighlightedText(i,e):this.getRowText(i),I=s?this.getHighlightedDesc(i,e):this.getRowDesc(i);return n.push({text:m,description:I,image:i.image||void 0,icon:i.icon||void 0,type:i.type||void 0,additionalText:i.additionalText||void 0,additionalTextState:i.additionalTextState,groupItem:i.groupItem,key:r})}),n}onUp(e){return e.preventDefault(),this._handleItemNavigation(!1),!0}onDown(e){return e.preventDefault(),this._handleItemNavigation(!0),!0}onSpace(e){return this._isItemOnTarget()?(e.preventDefault(),this.onItemSelected(null,!0),!0):!1}onEnter(e){return this._isGroupOrInactiveItem?(e.preventDefault(),!1):this._isItemOnTarget()?(this.onItemSelected(null,!0),!0):!1}onPageUp(e){e.preventDefault();const t=this.selectedItemIndex-10>-1;return this._hasValueState&&!t?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,t?this.selectedItemIndex-=10:this.selectedItemIndex=0),!0)}onPageDown(e){e.preventDefault();const t=this._getItems(),s=t.length-1,n=this.selectedItemIndex+10<=s;return this._hasValueState&&!t?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,n?this.selectedItemIndex+=10:this.selectedItemIndex=s),!0)}onHome(e){return e.preventDefault(),this._hasValueState?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,this.selectedItemIndex=0),!0)}onEnd(e){e.preventDefault();const t=this._getItems().length-1;return this._hasValueState&&!t?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,this.selectedItemIndex=t),!0)}onTab(){return this._isItemOnTarget()?(this.onItemSelected(null,!0),!0):!1}toggle(e,t){(e!==void 0?e:!this.isOpened())?this.open():this.close(t.preventFocusRestore)}async _isScrollable(){const e=await this._getScrollContainer();return e.offsetHeight<e.scrollHeight}open(){this._getComponent().open=!0,this._beforeOpen(),this.responsivePopover.showAt(this._getComponent())}async close(e=!1){const t=this._getItems()&&this._getItems()[this.selectedItemIndex];this._getComponent().open=!1,this.responsivePopover=await this._getSuggestionPopover(),this.responsivePopover.close(!1,!1,e),t&&t.focused&&(t.focused=!1)}updateSelectedItemPosition(e){this.selectedItemIndex=e}onItemMouseOver(e){this._getComponent().onItemMouseOver(e)}onItemMouseOut(e){this._getComponent().onItemMouseOut(e)}onItemSelected(e,t){const s=this._getItems(),n=e||s[this.selectedItemIndex];this.selectedItemIndex=s.indexOf(n),this.accInfo={currentPos:this.selectedItemIndex+1,listSize:s.length,itemText:this._getRealItems()[this.selectedItemIndex].description},!(n.type==="Inactive"||n.groupItem)&&(this._getComponent().onItemSelected(this._getRealItems()[this.selectedItemIndex],t),n.selected=!1,n.focused=!1,this._getComponent().open=!1)}onItemPreviewed(e){this._getComponent().onItemPreviewed(e)}onItemPress(e){let t;const s=e.type==="ui5-item-click";s&&!e.detail.item.selected||this._handledPress&&!s||(s&&e.detail.item.selected?(t=e.detail.item,this._handledPress=!0):t=e.detail.selectedItems[0],this.onItemSelected(t,!1))}_beforeOpen(){this._attachItemsListeners(),this._attachPopupListeners()}async _attachItemsListeners(){const e=await this._getList();e.removeEventListener("ui5-item-click",this.fnOnSuggestionItemPress),e.addEventListener("ui5-item-click",this.fnOnSuggestionItemPress),e.removeEventListener("ui5-selection-change",this.fnOnSuggestionItemPress),e.addEventListener("ui5-selection-change",this.fnOnSuggestionItemPress),e.removeEventListener("mouseover",this.fnOnSuggestionItemMouseOver),e.addEventListener("mouseover",this.fnOnSuggestionItemMouseOver),e.removeEventListener("mouseout",this.fnOnSuggestionItemMouseOut),e.addEventListener("mouseout",this.fnOnSuggestionItemMouseOut)}_attachPopupListeners(){this.handleFocus&&(this.attachedAfterOpened||(this.responsivePopover.addEventListener("ui5-after-open",this._onOpen.bind(this)),this.attachedAfterOpened=!0),this.attachedAfterClose||(this.responsivePopover.addEventListener("ui5-after-close",this._onClose.bind(this)),this.attachedAfterClose=!0))}_onOpen(){this._applyFocus()}_onClose(){this._handledPress=!1}_applyFocus(){this.selectedItemIndex&&this._getItems()[this.selectedItemIndex].focus()}_isItemOnTarget(){return this.isOpened()&&this.selectedItemIndex!==null&&this.selectedItemIndex!==-1&&!this._isGroupOrInactiveItem}get _isGroupOrInactiveItem(){const e=this._getItems();return!e||!e[this.selectedItemIndex]?!1:e[this.selectedItemIndex].groupItem||e[this.selectedItemIndex].type==="Inactive"}isOpened(){return!!(this.responsivePopover&&this.responsivePopover.opened)}_handleItemNavigation(e){this._getItems().length&&(e?this._selectNextItem():this._selectPreviousItem())}_selectNextItem(){const e=this._getItems().length,t=this.selectedItemIndex;if(this._hasValueState&&t===-1&&!this.component._isValueStateFocused){this._focusValueState();return}(t===-1&&!this._hasValueState||this.component._isValueStateFocused)&&(this._clearValueStateFocus(),this.selectedItemIndex=-1),!(t!==-1&&t+1>e-1)&&this._moveItemSelection(t,++this.selectedItemIndex)}_selectPreviousItem(){const e=this._getItems(),t=this.selectedItemIndex;if(this._hasValueState&&t===0&&!this.component._isValueStateFocused){this.component.hasSuggestionItemSelected=!1,this.component._isValueStateFocused=!0,this.selectedItemIndex=0,e[0].focused=!1,e[0].selected=!1;return}if(this.component._isValueStateFocused){this.component.focused=!0,this.component._isValueStateFocused=!1,this.selectedItemIndex=0;return}if(!(t===-1||t===null)){if(t-1<0){e[t].selected=!1,e[t].focused=!1,this.component.focused=!0,this.component.hasSuggestionItemSelected=!1,this.selectedItemIndex-=1;return}this._moveItemSelection(t,--this.selectedItemIndex)}}_moveItemSelection(e,t){const s=this._getItems(),n=s[t],i=s[e];n&&(this.component.focused=!1,this._clearValueStateFocus(),this.accInfo={currentPos:t+1,listSize:s.length,itemText:this._getRealItems()[s.indexOf(n)].description},i&&(i.selected=!1,i.focused=!1),n&&(n.focused=!0,n.type==="Active"&&(n.selected=!0),this.handleFocus&&n.focus()),this.component.hasSuggestionItemSelected=!0,this.onItemPreviewed(n),this._isItemIntoView(n)||this._scrollItemIntoView(n))}_deselectItems(){this._getItems().forEach(t=>{t.selected=!1,t.focused=!1})}_clearItemFocus(){const e=this._getItems().find(t=>t.focused);e&&(e.focused=!1)}_isItemIntoView(e){const t=e.getDomRef().getBoundingClientRect(),s=this._getComponent().getDomRef().getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return t.top+u.SCROLL_STEP<=n&&t.top>=s.top}async _scrollItemIntoView(e){const t=e.getDomRef().offsetTop,s=await this._getScrollContainer();s.scrollTop=t}async _getScrollContainer(){return this._scrollContainer||(await this._getSuggestionPopover(),this._scrollContainer=this.responsivePopover.shadowRoot.querySelector(".ui5-popup-content")),this._scrollContainer}_getItems(){return this.responsivePopover?[...this.responsivePopover.querySelector("[ui5-list]").children]:[]}_getComponent(){return this.component}async _getList(){return this.responsivePopover=await this._getSuggestionPopover(),this.responsivePopover.querySelector("[ui5-list]")}async _getListWidth(){return(await this._getList()).offsetWidth}_getRealItems(){return this._getComponent().getSlottedNodes(this.slotName)}async _getSuggestionPopover(){if(this.responsivePopover)return this.responsivePopover;const e=await this._getComponent().getStaticAreaItemDomRef();return this.responsivePopover=e.querySelector("[ui5-responsive-popover]"),this.responsivePopover}get itemSelectionAnnounce(){if(!this.accInfo)return"";const e=u.i18nBundle.getText(j,this.accInfo.currentPos,this.accInfo.listSize);return`${this.accInfo.itemText} ${e}`}getRowText(e){return this.sanitizeText(e.text||e.textContent||"")}getRowDesc(e){return this.sanitizeText(e.description||"")}getHighlightedText(e,t){const s=e.text||e.textContent||"";return this.hightlightInput(s,t)}getHighlightedDesc(e,t){const s=e.description;return this.hightlightInput(s,t)}hightlightInput(e,t){return Q(e,t)}sanitizeText(e){return y(e)}get _hasValueState(){return this.component.hasValueStateMessage}_focusValueState(){const e=this._getItems();this.component._isValueStateFocused=!0,this.component.focused=!1,this.component.hasSuggestionItemSelected=!1,this.selectedItemIndex=0,this.component.value=this.component.typedInValue,e&&this._scrollItemIntoView(e[0]),this._deselectItems()}_clearValueStateFocus(){this.component._isValueStateFocused=!1}static get dependencies(){return[E,R,D,M,A,H,z,F,$]}static async init(){u.i18nBundle=await C("@ui5/webcomponents")}}u.SCROLL_STEP=60;V("InputSuggestions",u);const Y="globe",q="M416 137l-6-9 3-9 19 21-9 9h-10l9-10zm-14 11l-3-8 4-7 5 8zm29 6q2 5 4 9.5t4 10.5l-9 8-15-3-5 16-19-8 11-17h24v-12zm3 41h9l-1 8zm-169 78l19 16v36l-47 46-2 6-7 29-1 12q0 1 .5 2t.5 2l-4 4q-4 0-5 1l-20-45q-3-11-4.5-26t-4.5-33l-28-25 25-31-11-14q-25 0-43-18l-7-5-7-8 11 20-7 3-15-30 3-26-6-20-18-11-4-11q0-6 8.5-16.5t20-20.5T134 93t17-7q9 0 19.5 6.5T189 99q-1 1-1 3 0 4 3 5l-16 36 20 4 16-16 28 2 6 15-16 17v11l9 1 5-8 18-12v8l8 13-9 9 6 5-13 1 5 10-26 13 4 17h-8l-4-17h-21l-3 6-9-4-13 14 11 12-1 14 12 8zm177-63q12 5 14 21.5t2 27.5q0 37-15 68.5T414 388q-3 0-3-7 0-9 3-26t3-34v-8l-2-9-14-23-38-9-10-21 7-33q8-2 17.5-3.5T402 206q2 2 5 2t6.5-.5 7.5-.5q5 0 10.5 1t10.5 2zM279 98q11-11 23-19t26-16q14 13 23 17-5 2-10 5.5T330 98l-18 29-9 6q-6 0-9.5-9t-3.5-8q-7 0-11 3-3-3-10-3-2 0-3 .5t-3 .5q7-10 16-19zm105 18l-11 2 4-16h12l2 8zM256 0q53 0 99.5 20T437 74.5t55 81.5 20 100-20 99.5-55 81.5-81.5 55-99.5 20-100-20-81.5-55T20 355.5 0 256t20-100 54.5-81.5T156 20 256 0zm0 480q46 0 87-17.5t71.5-48 48-71.5 17.5-87-17.5-87-48-71.5-71.5-48T256 32q-47 0-87.5 17.5t-71 48-48 71.5T32 256t17.5 87 48 71.5 71 48T256 480z",Z=!0,ee="SAP-icons-v4",te="@ui5/webcomponents-icons";O(Y,{pathData:q,ltr:Z,collection:ee,packageName:te});const se="globe",b="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm146 400q27-28 43-65t16-79q0-34-10.5-65t-29-56T377 91t-57-29v41q0 11-7 18t-18 7h-71v39q0 11-7 18t-18 7h-42l54 64h84q11 0 18 7.5t7 18.5v70h7q25 0 44.5 13.5T402 400zM51 256q0 39 14 74t38 62 57 44.5 71 22.5v-53q-26-8-43.5-28.5T167 331L56 212q-5 23-5 44z",ne=!0,oe="SAP-icons-v5",ie="@ui5/webcomponents-icons";O(se,{pathData:b,ltr:ne,collection:oe,packageName:ie});L();const l="globe",re={title:"Inputs / Input",component:w,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{type:N.Text,valueState:B.None,icon:c.jsx(k,{name:G})}},h={},d={name:"with SuggestionItem",args:{showSuggestions:!0,placeholder:"type anything to show suggestions",icon:null},render:o=>c.jsxs(w,{...o,style:{width:"400px"},children:[c.jsx(p,{text:"A Group"}),c.jsx(a,{icon:l,text:"United States",additionalText:"USA",description:"My Description"}),c.jsx(a,{icon:l,text:"Bulgaria",iconEnd:!0}),c.jsx(p,{text:"Another Group Items"}),c.jsx(a,{icon:l,text:"Argentina"}),c.jsx(a,{icon:l,text:"Germany"}),c.jsx(a,{icon:l,text:"Iceland"}),c.jsx(a,{icon:l,text:"Moldova"})]})};var S,_,x;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(x=(_=h.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var v,P,T;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'with SuggestionItem',
  args: {
    showSuggestions: true,
    placeholder: 'type anything to show suggestions',
    icon: null
  },
  render: args => {
    return <Input {...args} style={{
      width: '400px'
    }}>
        <SuggestionGroupItem text="A Group" />
        <SuggestionItem icon={globeIcon} text="United States" additionalText={'USA'} description={'My Description'} />
        <SuggestionItem icon={globeIcon} text="Bulgaria" iconEnd />
        <SuggestionGroupItem text="Another Group Items" />
        <SuggestionItem icon={globeIcon} text="Argentina" />
        <SuggestionItem icon={globeIcon} text="Germany" />
        <SuggestionItem icon={globeIcon} text="Iceland" />
        <SuggestionItem icon={globeIcon} text="Moldova" />
      </Input>;
  }
}`,...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const ce=["Default","WithSuggestionItem"],we=Object.freeze(Object.defineProperty({__proto__:null,Default:h,WithSuggestionItem:d,__namedExportsOrder:ce,default:re},Symbol.toStringTag,{value:"Module"}));export{we as C,h as D,d as W};
//# sourceMappingURL=Input.stories-08eb3b47.js.map
