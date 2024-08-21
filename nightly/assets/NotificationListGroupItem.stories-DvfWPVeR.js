import{j as o}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{A as y}from"./AvatarSize-BceVhWoP.js";import{b as S,N as _,a as x}from"./index-BbOjeO7g.js";import{A as w}from"./index-CwfmfrKN.js";import{M as I}from"./index-CR2nrAl1.js";import{M as f}from"./index-DQV67HXh.js";import{_ as j}from"./iframe-Bc4Os9Yd.js";import{a as G,o as A,y as P,C as q,K as k}from"./Keys-F_3Gvx0K.js";import{m as D,h as b,j as d,f as C,s as F,a as R,w as O}from"./withWebComponent-GNT2PXey.js";import{d as E}from"./slot-_4yKMUwC.js";import{s as M}from"./event-Dq0fpeHi.js";import{b as V}from"./Button-Cvy14OjO.js";import B from"./BusyIndicator-BRwQ1wd3.js";import{I as z}from"./Icon-BhzwmwWz.js";import{f as U}from"./List-CfQVFNo9.js";import"./navigation-right-arrow-DZpUvuGu.js";import"./navigation-down-arrow-CbEUWIcH.js";import{a8 as H,a9 as W,aa as X,ab as K}from"./i18n-defaults-BMYIvm-p.js";import{l as i}from"./if-defined-B9dCEi48.js";import{s as J}from"./parameters-bundle.css-DUfIp--Q.js";var Q=function(a,e,t,s){var r=arguments.length,n=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,e,t,s);else for(var u=a.length-1;u>=0;u--)(l=a[u])&&(n=(r<3?l(n):r>3?l(e,t,n):l(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n};let g=class extends U{getEnabledItems(){return[]}_handleTabNext(){}onForwardBefore(){}onForwardAfter(){}onItemTabIndexChange(){}onItemFocused(){}focusItem(e){e.focus()}};g=Q([D("ui5-notification-group-list")],g);g.define();const Y=g;function Z(a,e,t){return t?b`<li class="ui5-nli-group-root ui5-nli-focusable" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" tabindex="${i(this.forcedTabIndex)}" aria-labelledby="${i(this.ariaLabelledBy)}" aria-description="${i(this.accInvisibleText)}" aria-level="1">${this.loading?T.call(this,a,e,t):void 0}<${d("ui5-busy-indicator",e,t)} delay="${i(this.loadingDelay)}" ?active="${this.loading}" ?inert="${this.loading}" class="ui5-nli-loading"><div class="ui5-nli-group-content-wrapper"><div class="ui5-nli-group-header" @click="${this._onHeaderToggleClick}" @keydown="${this._onkeydown}" role="button" aria-expanded="${i(this._ariaExpanded)}" aria-controls="${i(this._id)}-notificationsList" title="${i(this.toggleIconAccessibleName)}"><${d("ui5-icon",e,t)} name=${i(this.groupCollapsedIcon)} class="ui5-nli-group-toggle-icon" mode="Decorative"></${d("ui5-icon",e,t)}><div id="${i(this._id)}-title-text" class="ui5-nli-group-title-text" part="title-text" role="heading" aria-level="2">${i(this.titleText)}</div><div class="ui5-nli-group-divider"></div></div><${d("ui5-notification-group-list",e,t)} id="${i(this._id)}-notificationsList" class="ui5-nli-group-items" role="list" aria-labelledby="${i(this._id)}-title-text"><slot></slot></${d("ui5-notification-group-list",e,t)}></div></${d("ui5-busy-indicator",e,t)}></li>`:b`<li class="ui5-nli-group-root ui5-nli-focusable" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" tabindex="${i(this.forcedTabIndex)}" aria-labelledby="${i(this.ariaLabelledBy)}" aria-description="${i(this.accInvisibleText)}" aria-level="1">${this.loading?T.call(this,a,e,t):void 0}<ui5-busy-indicator delay="${i(this.loadingDelay)}" ?active="${this.loading}" ?inert="${this.loading}" class="ui5-nli-loading"><div class="ui5-nli-group-content-wrapper"><div class="ui5-nli-group-header" @click="${this._onHeaderToggleClick}" @keydown="${this._onkeydown}" role="button" aria-expanded="${i(this._ariaExpanded)}" aria-controls="${i(this._id)}-notificationsList" title="${i(this.toggleIconAccessibleName)}"><ui5-icon name=${i(this.groupCollapsedIcon)} class="ui5-nli-group-toggle-icon" mode="Decorative"></ui5-icon><div id="${i(this._id)}-title-text" class="ui5-nli-group-title-text" part="title-text" role="heading" aria-level="2">${i(this.titleText)}</div><div class="ui5-nli-group-divider"></div></div><ui5-notification-group-list id="${i(this._id)}-notificationsList" class="ui5-nli-group-items" role="list" aria-labelledby="${i(this._id)}-title-text"><slot></slot></ui5-notification-group-list></div></ui5-busy-indicator></li>`}function T(a,e,t){return b`<span id="${i(this._id)}-loading" class="ui5-hidden-text">${i(this.loadingText)}</span>`}C("@ui5/webcomponents-theming","sap_horizon",async()=>F);C("@ui5/webcomponents-fiori","sap_horizon",async()=>J);const ee={packageName:"@ui5/webcomponents-fiori",fileName:"themes/NotificationListGroupItem.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;max-width:100%;min-height:var(--_ui5-v2-1-1_list_item_base_height);background:var(--ui5-v2-1-1-listitem-background-color);cursor:pointer}.ui5-nli-focusable:focus{outline:none}:host([desktop]) .ui5-nli-focusable:focus:not(.ui5-nli-group-root):after,.ui5-nli-focusable:focus-visible:not(.ui5-nli-group-root):after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:0;pointer-events:none}.ui5-state-icon{min-width:1rem;min-height:1rem;padding-inline-end:var(--_ui5-v2-1-1-notification_item-state-icon-padding)}:host([collapsed]) .ui5-nli-group-items{display:none}:host([read]) .ui5-nli-group-title-text{font-weight:400}.ui5-nli-group-root{width:100%}.ui5-nli-group-content-wrapper{position:relative;box-sizing:border-box;width:100%;display:flex;flex-direction:column}[ui5-busy-indicator]{width:100%}.ui5-nli-group-header{height:2.75rem;position:relative;background:var(--sapList_GroupHeaderBackground);display:flex;align-items:center;margin-block:var(--_ui5-v2-1-1-notification_group_header-margin);padding-inline:var(--_ui5-v2-1-1-notification_group_header-padding);width:100%;border-bottom:var(--_ui5-v2-1-1-notification_group_header-border-bottom-width) solid var(--sapList_GroupHeaderBorderColor);box-sizing:border-box;cursor:pointer}:host([desktop]) .ui5-nli-focusable.ui5-nli-group-root:focus .ui5-nli-group-header:before,.ui5-nli-focusable.ui5-nli-group-root:focus-visible .ui5-nli-group-header:before{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:0;pointer-events:none}.ui5-nli-group-toggle-icon{min-width:1rem;min-height:1rem;margin-inline:.5rem;color:var(--sapContent_IconColor)}.ui5-nli-group-title-text{color:var(--sapGroup_TitleTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontHeader5Size);font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:2rem;margin-inline-start:.75rem}.ui5-nli-group-divider{flex:1}:host([ui5-li-notification-group]){-webkit-tap-highlight-color:transparent}
`};var v=function(a,e,t,s){var r=arguments.length,n=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,e,t,s);else for(var u=a.length-1;u>=0;u--)(l=a[u])&&(n=(r<3?l(n):r>3?l(e,t,n):l(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},p;let m=p=class extends S{constructor(){super(...arguments),this.collapsed=!1}onBeforeRendering(){super.onBeforeRendering(),this.items.forEach(e=>{e._ariaLevel="2"}),this.loading&&this.clearChildBusyIndicator(),this.actionable=!1}clearChildBusyIndicator(){this.items.forEach(e=>{e.loading=!1})}get toggleIconAccessibleName(){return p.i18nFioriBundle.getText(H)}get accInvisibleText(){return`${this.groupText} ${this.expandText}`}get expandText(){return this.collapsed?p.i18nFioriBundle.getText(W):p.i18nFioriBundle.getText(X)}get groupText(){return p.i18nFioriBundle.getText(K)}get ariaLabelledBy(){const e=this._id;if(this.loading)return`${e}-loading`;const t=[];return this.hasTitleText&&t.push(`${e}-title-text`),t.join(" ")}get _ariaExpanded(){return!this.collapsed}get _pressable(){return!1}get groupCollapsedIcon(){return this.collapsed?"navigation-right-arrow":"navigation-down-arrow"}toggleCollapsed(){this.collapsed=!this.collapsed,this.fireEvent("toggle",{item:this})}_onHeaderToggleClick(){this.toggleCollapsed()}async _onkeydown(e){if(!this.matches(":focus"))return;await super._onkeydown(e);const s=G(e),r=A(e),n=P(e),l=q(e),u=k(e);s&&this.toggleCollapsed(),(r||u)&&this.collapsed&&(this.toggleCollapsed(),e.stopImmediatePropagation()),(n||l)&&(this.collapsed||(this.toggleCollapsed(),e.stopImmediatePropagation()))}getHeaderDomRef(){var e;return(e=this.getDomRef())==null?void 0:e.querySelector(".ui5-nli-group-header")}};v([R({type:Boolean})],m.prototype,"collapsed",void 0);v([E({type:HTMLElement,default:!0})],m.prototype,"items",void 0);m=p=v([D({tag:"ui5-li-notification-group",languageAware:!0,styles:[ee],template:Z,dependencies:[Y,V,z,B]}),M("toggle")],m);m.define();const te=m,ie=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"})),c=O("ui5-li-notification-group",["loadingDelay","titleText"],["collapsed","loading","read"],[],["toggle"],()=>j(()=>Promise.resolve().then(()=>ie),void 0,import.meta.url));c.displayName="NotificationListGroupItem";try{c.displayName="NotificationListGroupItem",c.__docgenInfo={description:`The \`NotificationListGroupItem\` is a special type of list item,
that unlike others can group items within self, usually \`NotificationListItem\` items.

The component consists of:

- \`Toggle\` button to expand and collapse the group
- \`TitleText\` to entitle the group
- Items of the group

### Usage
The component can be used in a standard \`ui5-list\`.

### Keyboard Handling
The \`NotificationListGroupItem\` provides advanced keyboard handling.
This component provides fast navigation when the header is focused using the following keyboard shortcuts:

- [Space] - toggles expand / collapse of the group
- [Plus] - expands the group
- [Minus] - collapses the group
- [Right] - expands the group
- [Left] - collapses the group



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NotificationListGroupItem",props:{children:{defaultValue:null,description:"Defines the items of the `NotificationListGroupItem`,\nusually `NotificationListItem` items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onToggle:{defaultValue:null,description:"Fired when the `NotificationListGroupItem` is expanded/collapsed by user interaction.",name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListGroupItemDomRef, never>) => void"}},collapsed:{defaultValue:{value:"false"},description:"Defines if the group is collapsed or expanded.",name:"collapsed",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Defines if a busy indicator would be displayed over the item.",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"loadingDelay",required:!1,type:{name:"number"}},read:{defaultValue:{value:"false"},description:"Defines if the `notification` is new or has been already read.\n\n**Note:** if set to `false` the `titleText` has bold font,\nif set to true - it has a normal font.",name:"read",required:!1,type:{name:"boolean"}},titleText:{defaultValue:{value:"undefined"},description:"Defines the `titleText` of the item.",name:"titleText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="NotificationListGroupItem",c.__docgenInfo={description:`The \`NotificationListGroupItem\` is a special type of list item,
that unlike others can group items within self, usually \`NotificationListItem\` items.

The component consists of:

- \`Toggle\` button to expand and collapse the group
- \`TitleText\` to entitle the group
- Items of the group

### Usage
The component can be used in a standard \`ui5-list\`.

### Keyboard Handling
The \`NotificationListGroupItem\` provides advanced keyboard handling.
This component provides fast navigation when the header is focused using the following keyboard shortcuts:

- [Space] - toggles expand / collapse of the group
- [Plus] - expands the group
- [Minus] - collapses the group
- [Right] - expands the group
- [Left] - collapses the group



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NotificationListGroupItem",props:{children:{defaultValue:null,description:"Defines the items of the `NotificationListGroupItem`,\nusually `NotificationListItem` items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onToggle:{defaultValue:null,description:"Fired when the `NotificationListGroupItem` is expanded/collapsed by user interaction.",name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListGroupItemDomRef, never>) => void"}},collapsed:{defaultValue:{value:"false"},description:"Defines if the group is collapsed or expanded.",name:"collapsed",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Defines if a busy indicator would be displayed over the item.",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"loadingDelay",required:!1,type:{name:"number"}},read:{defaultValue:{value:"false"},description:"Defines if the `notification` is new or has been already read.\n\n**Note:** if set to `false` the `titleText` has bold font,\nif set to true - it has a normal font.",name:"read",required:!1,type:{name:"boolean"}},titleText:{defaultValue:{value:"undefined"},description:"Defines the `titleText` of the item.",name:"titleText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const oe={title:"Data Display / NotificationListGroupItem",component:c,argTypes:{children:{control:{disable:!0}}},args:{titleText:"Orders"},tags:["package:@ui5/webcomponents-fiori"]},h={render:a=>o.jsxs(c,{...a,children:[o.jsx(_,{importance:x.Standard,titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",avatar:o.jsx(w,{size:y.XS,children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png"})}),footnotes:o.jsxs(o.Fragment,{children:[o.jsx("span",{children:"Monique Legrand"}),o.jsx("span",{children:"2 Days"})]}),menu:o.jsxs(I,{children:[o.jsx(f,{icon:"accept",text:"Accept"}),o.jsx(f,{icon:"message-error",text:"Reject"})]}),children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."}),o.jsx(_,{showClose:!0,titleText:"New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",importance:x.Important,avatar:o.jsx(w,{size:y.XS,children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png"})}),footnotes:o.jsxs(o.Fragment,{children:[o.jsx("span",{children:"Alain Devalier"}),o.jsx("span",{children:"2 Days"})]}),menu:o.jsxs(I,{children:[o.jsx(f,{icon:"accept",text:"Accept"}),o.jsx(f,{icon:"message-error",text:"Reject"})]}),children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."})]})};var N,L,$;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    return <NotificationListGroupItem {...args}>
        <NotificationListItem importance={NotificationListItemImportance.Standard} titleText={'New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.'} avatar={<Avatar size={AvatarSize.XS}>
              <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>} footnotes={<>
              <span>Monique Legrand</span>
              <span>2 Days</span>
            </>} menu={<Menu>
              <MenuItem icon="accept" text="Accept" />
              <MenuItem icon="message-error" text="Reject" />
            </Menu>}>
          And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
          nec elementum lectus turpis at nunc.
        </NotificationListItem>
        <NotificationListItem showClose titleText="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." importance={NotificationListItemImportance.Important} avatar={<Avatar size={AvatarSize.XS}>
              <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>} footnotes={<>
              <span>Alain Devalier</span>
              <span>2 Days</span>
            </>} menu={<Menu>
              <MenuItem icon="accept" text="Accept" />
              <MenuItem icon="message-error" text="Reject" />
            </Menu>}>
          And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
          nec elementum lectus turpis at nunc.
        </NotificationListItem>
      </NotificationListGroupItem>;
  }
}`,...($=(L=h.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};const ne=["Default"],$e=Object.freeze(Object.defineProperty({__proto__:null,Default:h,__namedExportsOrder:ne,default:oe},Symbol.toStringTag,{value:"Module"}));export{$e as C,h as D};
