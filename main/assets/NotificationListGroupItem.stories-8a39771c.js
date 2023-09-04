import{j as n}from"./jsx-runtime-d079401a.js";import{A as _}from"./Avatar-60d18bb8.js";import{b as D,P as d,a as m,N as v}from"./index-48e5e307.js";import{A as T}from"./index-41f46b2e.js";import{_ as E}from"./iframe-9aa476e7.js";import{b as a,l as i,d as r,s as F,p as O,c as k,w as S}from"./withWebComponent-b4c67a1a.js";import{s as P}from"./slot-76e48863.js";import{c as j,a as G,e as R}from"./Icon-b897d66f.js";import{d as q}from"./ListItemBase-e8a1d82b.js";import{b as M}from"./Button-4505b9f6.js";import{a as z}from"./BusyIndicator-7cb729ee.js";import{c as V}from"./Popover-742c9988.js";import"./navigation-right-arrow-82c786da.js";import"./overflow-507813a3.js";import"./decline-2f6198d2.js";import{a4 as U,a5 as H,a6 as W,a7 as X,a8 as Y,a9 as J,aa as K,ab as Q,ac as Z,ad as ee,ae as te}from"./i18n-defaults-2dcf78e8.js";import{r as B}from"./UI5Element-e590cd60.js";import{s as ie}from"./parameters-bundle.css-1b860e2a.js";function oe(o,t,e){return e?a`<li class="ui5-nli-group-root ui5-nli-focusable" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" role="listitem" tabindex="${i(this._tabIndex)}" aria-expanded="${i(this._ariaExpanded)}" aria-labelledby="${i(this.ariaLabelledBy)}"><div class="ui5-nli-group-header"><${r("ui5-button",t,e)} icon="navigation-right-arrow" design="Transparent" @click="${this._onBtnToggleClick}" class="ui5-nli-group-toggle-btn" tooltip="${i(this.toggleBtnAccessibleName)}" aria-label="${i(this.toggleBtnAccessibleName)}"></${r("ui5-button",t,e)}>${this.hasPriority?I.call(this,o,t,e):void 0}<div id="${i(this._id)}-title-text" class="ui5-nli-group-title-text" part="title-text">${i(this.titleText)}</div>${this.showCounter?w.call(this,o,t,e):void 0}<div class="ui5-nli-group-divider"></div>${this.collapsed?void 0:N.call(this,o,t,e)}${this.showClose?x.call(this,o,t,e):void 0}<span id="${i(this._id)}-invisibleText" class="ui5-hidden-text">${i(this.accInvisibleText)}</span></div><${r("ui5-list",t,e)} class="ui5-nli-group-items"><slot></slot></${r("ui5-list",t,e)}>${this.busy?$.call(this,o,t,e):void 0}</li>`:a`<li class="ui5-nli-group-root ui5-nli-focusable" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" role="listitem" tabindex="${i(this._tabIndex)}" aria-expanded="${i(this._ariaExpanded)}" aria-labelledby="${i(this.ariaLabelledBy)}"><div class="ui5-nli-group-header"><ui5-button icon="navigation-right-arrow" design="Transparent" @click="${this._onBtnToggleClick}" class="ui5-nli-group-toggle-btn" tooltip="${i(this.toggleBtnAccessibleName)}" aria-label="${i(this.toggleBtnAccessibleName)}"></ui5-button>${this.hasPriority?I.call(this,o,t,e):void 0}<div id="${i(this._id)}-title-text" class="ui5-nli-group-title-text" part="title-text">${i(this.titleText)}</div>${this.showCounter?w.call(this,o,t,e):void 0}<div class="ui5-nli-group-divider"></div>${this.collapsed?void 0:N.call(this,o,t,e)}${this.showClose?x.call(this,o,t,e):void 0}<span id="${i(this._id)}-invisibleText" class="ui5-hidden-text">${i(this.accInvisibleText)}</span></div><ui5-list class="ui5-nli-group-items"><slot></slot></ui5-list>${this.busy?$.call(this,o,t,e):void 0}</li>`}function I(o,t,e){return e?a`<${r("ui5-icon",t,e)} class="ui5-prio-icon ui5-prio-icon--${i(this.priorityIcon)}" name="${i(this.priorityIcon)}"></${r("ui5-icon",t,e)}>`:a`<ui5-icon class="ui5-prio-icon ui5-prio-icon--${i(this.priorityIcon)}" name="${i(this.priorityIcon)}"></ui5-icon>`}function w(o,t,e){return a`<span class="ui5-nli-group-counter">(${i(this.itemsCount)})</span>`}function N(o,t,e){return a`${this.showOverflow?ne.call(this,o,t,e):se.call(this,o,t,e)}`}function ne(o,t,e){return e?a`<${r("ui5-button",t,e)} icon="overflow" design="Transparent" @click="${this._onBtnOverflowClick}" class="ui5-nli-overflow-btn" tooltip="${i(this.overflowBtnAccessibleName)}" aria-label="${i(this.overflowBtnAccessibleName)}"></${r("ui5-button",t,e)}>`:a`<ui5-button icon="overflow" design="Transparent" @click="${this._onBtnOverflowClick}" class="ui5-nli-overflow-btn" tooltip="${i(this.overflowBtnAccessibleName)}" aria-label="${i(this.overflowBtnAccessibleName)}"></ui5-button>`}function se(o,t,e){return a`${j(this.standardActions,(s,c)=>s._id||c,(s,c)=>ae.call(this,o,t,e,s,c))}`}function ae(o,t,e,s,c){return e?a`<${r("ui5-button",t,e)} icon="${i(s.icon)}" class="ui5-nli-action" ?disabled="${s.disabled}" design="${i(s.design)}" @click="${s.press}" data-ui5-external-action-item-id="${i(s.refItemid)}">${i(s.text)}</${r("ui5-button",t,e)}>`:a`<ui5-button icon="${i(s.icon)}" class="ui5-nli-action" ?disabled="${s.disabled}" design="${i(s.design)}" @click="${s.press}" data-ui5-external-action-item-id="${i(s.refItemid)}">${i(s.text)}</ui5-button>`}function x(o,t,e){return e?a`<${r("ui5-button",t,e)} icon="decline" design="Transparent" @click="${this._onBtnCloseClick}" tooltip="${i(this.closeBtnAccessibleName)}" aria-label="${i(this.closeBtnAccessibleName)}" close-btn></${r("ui5-button",t,e)}>`:a`<ui5-button icon="decline" design="Transparent" @click="${this._onBtnCloseClick}" tooltip="${i(this.closeBtnAccessibleName)}" aria-label="${i(this.closeBtnAccessibleName)}" close-btn></ui5-button>`}function $(o,t,e){return e?a`<${r("ui5-busy-indicator",t,e)} delay="${i(this.busyDelay)}" active size="Medium" class="ui5-nli-busy"></${r("ui5-busy-indicator",t,e)}>`:a`<ui5-busy-indicator delay="${i(this.busyDelay)}" active size="Medium" class="ui5-nli-busy"></ui5-busy-indicator>`}B("@ui5/webcomponents-theming","sap_fiori_3",async()=>F);B("@ui5/webcomponents-fiori","sap_fiori_3",async()=>ie);const re={packageName:"@ui5/webcomponents-fiori",fileName:"themes/NotificationListGroupItem.css",content:'.ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host(:not([hidden])){background:var(--ui5-v1-17-0-listitem-background-color);cursor:pointer;display:block;min-height:var(--_ui5-v1-17-0_list_item_base_height);width:100%}:host([has-border]){border-bottom:var(--ui5-v1-17-0-listitem-border-bottom)}:host([focused]) .ui5-nli-focusable{outline:none}:host([focused]) .ui5-nli-focusable:after{border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}:host([busy]){opacity:.6;pointer-events:none}:host([busy]) .ui5-nli-busy{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.ui5-nli-action{flex-shrink:0;margin-inline-end:.5rem}.ui5-nli-overflow-btn{margin-inline-end:.5rem}.ui5-prio-icon{min-height:1rem;min-width:1rem;padding-inline-end:.625rem}.ui5-prio-icon--message-error{color:var(--sapNegativeElementColor)}.ui5-prio-icon--message-warning{color:var(--sapCriticalElementColor)}.ui5-prio-icon--message-success{color:var(--sapPositiveElementColor)}:host{--_ui5-v1-17-0-notification_item-border-raius:0px}:host(:not([collapsed])) .ui5-nli-group-toggle-btn{transform:var(--_ui5-v1-17-0_li_notification_group_toggle_btn_rotation)}:host([collapsed]) .ui5-nli-group-items{display:none}:host([read]) .ui5-nli-group-title-text{font-weight:400}.ui5-nli-group-root{box-sizing:border-box;display:flex;flex-direction:column;position:relative;width:100%}.ui5-nli-group-header{align-items:center;background:var(--sapList_GroupHeaderBackground);border-bottom:.0625rem solid var(--sapList_GroupHeaderBorderColor);box-sizing:border-box;cursor:default;display:flex;padding-block:.75rem .25rem;padding-inline:.75rem .5rem;width:100%}.ui5-nli-group-toggle-btn{cursor:pointer;margin-inline-end:.75rem}.ui5-nli-group-title-text{color:var(--sapGroup_TitleTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontHeader6Size);font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-nli-group-divider{flex:1}.ui5-nli-group-counter{color:var(--sapList_TableGroupHeaderTextColor);font-family:"72override",var(--sapFontHeaderFamily);font-size:var(--sapFontHeader6Size);margin-inline-end:1rem;margin-inline-start:.25rem}:host([ui5-li-notification-group]){-webkit-tap-highlight-color:transparent}'};var b=globalThis&&globalThis.__decorate||function(o,t,e,s){var c=arguments.length,u=c<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,g;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(o,t,e,s);else for(var y=o.length-1;y>=0;y--)(g=o[y])&&(u=(c<3?g(u):c>3?g(t,e,u):g(t,e))||u);return c>3&&u&&Object.defineProperty(t,e,u),u},l;let p=l=class extends D{onBeforeRendering(){this.busy&&this.clearChildBusyIndicator()}clearChildBusyIndicator(){this.items.forEach(t=>{t.busy=!1})}get itemsCount(){return this.items.length}get overflowBtnAccessibleName(){return l.i18nFioriBundle.getText(U)}get closeBtnAccessibleName(){return l.i18nFioriBundle.getText(H)}get toggleBtnAccessibleName(){return this.collapsed?l.i18nFioriBundle.getText(W):l.i18nFioriBundle.getText(X)}get priorityText(){return this.priority===d.High?l.i18nFioriBundle.getText(Y):this.priority===d.Medium?l.i18nFioriBundle.getText(J):this.priority===d.Low?l.i18nFioriBundle.getText(K):""}get accInvisibleText(){return`${this.groupText} ${this.readText} ${this.priorityText} ${this.counterText}`}get readText(){return this.read?l.i18nFioriBundle.getText(Q):l.i18nFioriBundle.getText(Z)}get groupText(){return l.i18nFioriBundle.getText(ee)}get counterText(){const t=l.i18nFioriBundle.getText(te);return this.showCounter?`${t} ${this.itemsCount}`:""}get ariaLabelledBy(){const t=this._id,e=[];return this.hasTitleText&&e.push(`${t}-title-text`),e.push(`${t}-invisibleText`),e.join(" ")}get _ariaExpanded(){return!this.collapsed}_onBtnToggleClick(){this.collapsed=!this.collapsed,this.fireEvent("toggle",{item:this})}};b([O({type:Boolean})],p.prototype,"collapsed",void 0);b([O({type:Boolean})],p.prototype,"showCounter",void 0);b([P({type:HTMLElement,default:!0})],p.prototype,"items",void 0);p=l=b([k({tag:"ui5-li-notification-group",languageAware:!0,styles:re,template:oe,dependencies:[q,M,G,z,V]}),R("toggle")],p);p.define();const le=p,ce=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"})),h=S("ui5-li-notification-group",["busyDelay","priority","titleText"],["collapsed","showCounter","busy","read","showClose","selected"],["actions"],["toggle","close"],()=>E(()=>Promise.resolve().then(()=>ce),void 0,import.meta.url));h.displayName="NotificationListGroupItem";h.defaultProps={busyDelay:1e3,priority:d.None};try{h.displayName="NotificationListGroupItem",h.__docgenInfo={description:"The `NotificationListGroupItem` is a special type of list item, that unlike others can group items within self, usually `NotificationListItem` items.\nThe component consists of:\n\n*   `Toggle` button to expand and collapse the group\n*   `Priority` icon to display the priority of the group\n*   `TitleText` to entitle the group\n*   Custom actions - with the use of `NotificationAction`\n*   Items of the group\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-NotificationListGroupItem)",displayName:"NotificationListGroupItem",props:{children:{defaultValue:null,description:"Defines the items of the `NotificationListGroupItem`, usually `NotificationListItem` items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},actions:{defaultValue:null,description:`Defines the actions, displayed in the top-right area.

**Note:** use the \`NotificationAction\` component.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="actions"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"actions",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onToggle:{defaultValue:null,description:"Fired when the `NotificationListGroupItem` is expanded/collapsed by user interaction.",name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListGroupItemDomRef, never>) => void"}},onClose:{defaultValue:null,description:"Fired when the `Close` button is pressed.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListGroupItemDomRef, NotificationListItemBaseCloseEventDetail>) => void"}},collapsed:{defaultValue:null,description:"Defines if the group is collapsed or expanded.",name:"collapsed",required:!1,type:{name:"boolean"}},showCounter:{defaultValue:null,description:"Defines if the items `counter` would be displayed.",name:"showCounter",required:!1,type:{name:"boolean"}},busy:{defaultValue:null,description:"Defines if a busy indicator would be displayed over the item.",name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"busyDelay",required:!1,type:{name:"number"}},priority:{defaultValue:{value:"Priority.None"},description:"Defines the `priority` of the item.",name:"priority",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Medium"'},{value:'"High"'},{value:'"Medium"'},{value:'"Low"'},{value:'"None"'},{value:'"High"'},{value:'"Low"'}]}},read:{defaultValue:null,description:"Defines if the `notification` is new or has been already read.\n\n**Note:** if set to `false` the `titleText` has bold font, if set to true - it has a normal font.",name:"read",required:!1,type:{name:"boolean"}},showClose:{defaultValue:null,description:"Defines if the `close` button would be displayed.",name:"showClose",required:!1,type:{name:"boolean"}},titleText:{defaultValue:null,description:"Defines the `titleText` of the item.",name:"titleText",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"Defines the selected state of the `ListItem`.",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ue={title:"Data Display / NotificationListGroupItem",component:h,argTypes:{children:{control:{disable:!0}},actions:{control:{disable:!0}}},args:{showClose:!0,showCounter:!0,titleText:"Orders",priority:d.None,actions:n.jsxs(n.Fragment,{children:[n.jsx(m,{icon:"accept",text:"Accept all"}),n.jsx(m,{icon:"message-error",text:"Reject all"})]})}},f={render:o=>n.jsxs(h,{...o,children:[n.jsx(v,{priority:d.Medium,titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",avatar:n.jsx(T,{size:_.XS,children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_1.png"})}),footnotes:n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Monique Legrand"}),n.jsx("span",{children:"2 Days"})]}),actions:n.jsxs(n.Fragment,{children:[n.jsx(m,{icon:"accept",text:"Accept"}),n.jsx(m,{icon:"message-error",text:"Reject"})]}),children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."}),n.jsx(v,{showClose:!0,titleText:"New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",priority:d.High,avatar:n.jsx(T,{size:_.XS,children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_1.png"})}),footnotes:n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Alain Devalier"}),n.jsx("span",{children:"2 Days"})]}),actions:n.jsxs(n.Fragment,{children:[n.jsx(m,{icon:"accept",text:"Accept"}),n.jsx(m,{icon:"message-error",text:"Reject"})]}),children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."})]})};var L,C,A;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    return <NotificationListGroupItem {...args}>
        <NotificationListItem priority={Priority.Medium} titleText={'New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.'} avatar={<Avatar size={AvatarSize.XS}>
              <img src="https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_1.png" />
            </Avatar>} footnotes={<>
              <span>Monique Legrand</span>
              <span>2 Days</span>
            </>} actions={<>
              <NotificationAction icon="accept" text="Accept" />
              <NotificationAction icon="message-error" text="Reject" />
            </>}>
          And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
          nec elementum lectus turpis at nunc.
        </NotificationListItem>
        <NotificationListItem showClose titleText="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority={Priority.High} avatar={<Avatar size={AvatarSize.XS}>
              <img src="https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_1.png" />
            </Avatar>} footnotes={<>
              <span>Alain Devalier</span>
              <span>2 Days</span>
            </>} actions={<>
              <NotificationAction icon="accept" text="Accept" />
              <NotificationAction icon="message-error" text="Reject" />
            </>}>
          And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
          nec elementum lectus turpis at nunc.
        </NotificationListItem>
      </NotificationListGroupItem>;
  }
}`,...(A=(C=f.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const de=["Default"],Be=Object.freeze(Object.defineProperty({__proto__:null,Default:f,__namedExportsOrder:de,default:ue},Symbol.toStringTag,{value:"Module"}));export{Be as C,f as D};
//# sourceMappingURL=NotificationListGroupItem.stories-8a39771c.js.map
