import{j as a}from"./jsx-runtime-d079401a.js";import{e as I}from"./employee-bd01b92f.js";import{r as G,U as ie,p as ae,o as le}from"./UI5Element-9ae3ac4a.js";import{r as K}from"./Icons-aa504494.js";import{r as Q}from"./index-f1f2c4b1.js";import{F as M,c as C,a as j}from"./index-12e0da73.js";import{T as B}from"./index-743fc8f1.js";import{I as S}from"./index-938ed19c.js";import{O as g}from"./index-48edf065.js";import{_ as X}from"./iframe-1710758a.js";import{b as c,d as h,l as r,s as re,a as ce,p as u,c as Y,f as Z,w as ee}from"./withWebComponent-70ea33bf.js";import{C as te,b as pe}from"./CustomListItem-14ca47e4.js";import{L as k}from"./ListItem-8f7be23d.js";import{r as ue}from"./index-c74c9f7f.js";import{I as P}from"./Integer-f7f172c9.js";import{s as de}from"./slot-76e48863.js";import{c as oe,e as b}from"./Icon-085ae741.js";import{V as y}from"./ValueState-2c5e5904.js";import{s as w}from"./style-map-0570471d.js";import{o as N}from"./class-map-a35dc276.js";import{s as me}from"./ValueStateMessage.css-29f8f350.js";import{s as he}from"./ResponsivePopoverCommon.css-f284520a.js";import fe from"./ResponsivePopover-3603f824.js";import{d as ye}from"./ListItemBase-7c3bbca9.js";import{b as Se}from"./Button-bda40b74.js";import{S as q}from"./index-fb50962d.js";import{V as ve}from"./ValueState-ab6838cc.js";function _e(o,e,t){return t?c`<${h("ui5-responsive-popover",e,t)} class="ui5-select-menu" placement-type="Bottom" horizontal-align="Left" @ui5-after-open="${r(this._onAfterOpen)}" @ui5-after-close="${r(this._onAfterClose)}" @ui5-before-open="${r(this._onBeforeOpen)}" hide-arrow _disable-initial-focus style=${w(this.styles.responsivePopover)}>${this._isPhone?D.call(this,o,e,t):void 0}${this._isPhone?void 0:F.call(this,o,e,t)}<${h("ui5-list",e,t)} mode="SingleSelect" separators="None" @ui5-item-click="${r(this._onOptionClick)}"><slot></slot></${h("ui5-list",e,t)}></${h("ui5-responsive-popover",e,t)}>`:c`<ui5-responsive-popover class="ui5-select-menu" placement-type="Bottom" horizontal-align="Left" @ui5-after-open="${r(this._onAfterOpen)}" @ui5-after-close="${r(this._onAfterClose)}" @ui5-before-open="${r(this._onBeforeOpen)}" hide-arrow _disable-initial-focus style=${w(this.styles.responsivePopover)}>${this._isPhone?D.call(this,o,e,t):void 0}${this._isPhone?void 0:F.call(this,o,e,t)}<ui5-list mode="SingleSelect" separators="None" @ui5-item-click="${r(this._onOptionClick)}"><slot></slot></ui5-list></ui5-responsive-popover>`}function D(o,e,t){return t?c`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${r(this._headerTitleText)}</span><${h("ui5-button",e,t)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._onCloseBtnClick}"></${h("ui5-button",e,t)}></div>${this.hasValueState?E.call(this,o,e,t):void 0}</div>`:c`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${r(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._onCloseBtnClick}"></ui5-button></div>${this.hasValueState?E.call(this,o,e,t):void 0}</div>`}function E(o,e,t){return c`<div class="${N(this.classes.popoverValueState)} row ui5-select-value-state-dialog-header">${this.hasValueStateSlot?ge.call(this,o,e,t):xe.call(this,o,e,t)}</div>`}function ge(o,e,t){return c`${oe(this.valueStateMessageText,(n,s)=>n._id||s,(n,s)=>be.call(this,o,e,t,n,s))}`}function be(o,e,t,n,s){return c`${r(n)}`}function xe(o,e,t){return c`${r(this.valueStateText)}`}function F(o,e,t){return c`${this.hasValueState?Te.call(this,o,e,t):void 0}`}function Te(o,e,t){return t?c`<div class="${N(this.classes.popoverValueState)}" style=${w(this.styles.responsivePopoverHeader)}><${h("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${r(this._valueStateMessageInputIcon)}"></${h("ui5-icon",e,t)}>${this.hasValueStateSlot?R.call(this,o,e,t):A.call(this,o,e,t)}</div>`:c`<div class="${N(this.classes.popoverValueState)}" style=${w(this.styles.responsivePopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${r(this._valueStateMessageInputIcon)}"></ui5-icon>${this.hasValueStateSlot?R.call(this,o,e,t):A.call(this,o,e,t)}</div>`}function R(o,e,t){return c`${oe(this.valueStateMessageText,(n,s)=>n._id||s,(n,s)=>we.call(this,o,e,t,n,s))}`}function we(o,e,t,n,s){return c`${r(n)}`}function A(o,e,t){return c`${r(this.valueStateText)}`}G("@ui5/webcomponents-theming","sap_fiori_3",async()=>re);G("@ui5/webcomponents","sap_fiori_3",async()=>ce);const Oe={packageName:"@ui5/webcomponents",fileName:"themes/SelectMenu.css",content:".ui5-select-menu::part(content),.ui5-select-menu::part(header){padding:0}.ui5-select-menu [ui5-li-custom]{height:var(--_ui5-v1-18-0_list_item_dropdown_base_height)}.ui5-select-menu [ui5-li-custom]::part(native-li){padding:0}.ui5-select-menu [ui5-icon]{color:var(--sapList_TextColor)}"};var f=globalThis&&globalThis.__decorate||function(o,e,t,n){var s=arguments.length,l=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,e,t,n);else for(var d=o.length-1;d>=0;d--)(i=o[d])&&(l=(s<3?i(l):s>3?i(e,t,l):i(e,t))||l);return s>3&&l&&Object.defineProperty(e,t,l),l};let p=class extends ie{constructor(){super(),this.valueStateMessageText=[]}showAt(e,t){this.selectWidth=t,this.respPopover.open=!0,this.respPopover.opener=e,this.hasValueState=!!e.hasValueState,this.hasValueStateSlot=e.valueStateMessageText.length>0,this.valueStateText=e.valueStateText,this.valueStateMessageText=e.valueStateMessageText,this.valueState=e.valueState,this._headerTitleText=e._headerTitleText}close(e=!1,t=!1,n=!1){this.respPopover.close(e,t,n)}onBeforeRendering(){this._syncSelection()}_syncSelection(){let e=-1,t=-1,n,s;const l=this.options;if(l.forEach((i,d)=>((i.selected||i.textContent===this.value)&&(e=d),t===-1&&(t=d),i.selected=!1,i.focused=!1,i)),e>-1){const i=l[e];i.selected=!0,i.focused=!0,n=i.displayText||String(i.textContent),s=e}else{n="",s=-1;const i=l[t];i&&(i.selected=!0,i.focused=!0,s=t,n=i.displayText||String(i.textContent))}this.fireEvent("menu-change",{text:n,selectedIndex:s})}_onOptionClick(e){const t=e.detail.item,n=this.options.findIndex(s=>t.__id===s.__id);this.fireEvent("option-click",{option:t,optionIndex:n})}_onBeforeOpen(){this.fireEvent("before-open")}_onAfterOpen(){this.fireEvent("after-open")}_onAfterClose(){this.fireEvent("after-close")}_onCloseBtnClick(){this.close()}get open(){var e;return!!((e=this.respPopover)!=null&&e.open)}get respPopover(){return this.shadowRoot.querySelector(".ui5-select-menu")}get classes(){return{popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage--success":this.valueState===y.Success,"ui5-valuestatemessage--error":this.valueState===y.Error,"ui5-valuestatemessage--warning":this.valueState===y.Warning,"ui5-valuestatemessage--information":this.valueState===y.Information},popover:{"ui5-select-popover-valuestate":this.hasValueState}}}get styles(){var e;return{responsivePopoverHeader:{display:this.options.length&&((e=this.respPopover)==null?void 0:e.offsetWidth)===0?"none":"inline-block",width:`${this.selectWidth}px`},responsivePopover:{"min-width":`${this.selectWidth}px`}}}get _valueStateMessageInputIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==y.None?e[this.valueState]:""}get _isPhone(){return ae()}};f([de({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],p.prototype,"options",void 0);f([u({validator:P})],p.prototype,"selectWidth",void 0);f([u({type:Boolean})],p.prototype,"hasValueState",void 0);f([u({type:Boolean})],p.prototype,"hasValueStateSlot",void 0);f([u({type:y,defaultValue:y.None})],p.prototype,"valueState",void 0);f([u()],p.prototype,"valueStateText",void 0);f([u()],p.prototype,"value",void 0);p=f([Y({tag:"ui5-select-menu",renderer:Z,styles:[Oe,me,he],template:_e,dependencies:[fe,ye,Se]}),b("option-click",{detail:{option:{type:HTMLElement},optionIndex:{type:P}}}),b("before-open"),b("after-open"),b("after-close"),b("menu-change",{detail:{text:{type:String},selectedIndex:{type:P}}})],p);p.define();const $e=p,Ie=Object.freeze(Object.defineProperty({__proto__:null,default:$e},Symbol.toStringTag,{value:"Module"})),O=ee("ui5-select-menu",[],[],[],[],()=>X(()=>Promise.resolve().then(()=>Ie),void 0,import.meta.url));O.displayName="SelectMenu";try{O.displayName="SelectMenu",O.__docgenInfo={description:"The `SelectMenu` is meant to be used together with the `Select` component as alternative to define the select's dropdown. It acts as a popover on desktop and tablet, and as a Dialog on phone.\n\nThe component gives the possibility to the user to customize the `Select`'s dropdown by slotting custom options and adding custom styles.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-SelectMenu)",displayName:"SelectMenu",props:{children:{defaultValue:null,description:"Defines the options of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var _=globalThis&&globalThis.__decorate||function(o,e,t,n){var s=arguments.length,l=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,e,t,n);else for(var d=o.length-1;d>=0;d--)(i=o[d])&&(l=(s<3?i(l):s>3?i(e,t,l):i(e,t))||l);return s>3&&l&&Object.defineProperty(e,t,l),l};let m=class extends te{get _accInfo(){const e={ariaSelected:this.selected};return{...super._accInfo,...e}}};_([u()],m.prototype,"displayText",void 0);_([u()],m.prototype,"value",void 0);_([u({type:k,defaultValue:k.Active})],m.prototype,"type",void 0);_([u({type:Object})],m.prototype,"accessibilityAttributes",void 0);_([u({type:Boolean})],m.prototype,"navigated",void 0);m=_([Y({tag:"ui5-select-menu-option",renderer:Z,styles:te.styles,template:pe,dependencies:[]})],m);m.define();const Me=m,Ce=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"})),v=ee("ui5-select-menu-option",["displayText","value"],[],[],[],()=>X(()=>Promise.resolve().then(()=>Ce),void 0,import.meta.url));v.displayName="SelectMenuOption";try{v.displayName="SelectMenuOption",v.__docgenInfo={description:`The code>SelectMenuOption component represents an option in the \`SelectMenu\`.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-SelectMenuOption)`,displayName:"SelectMenuOption",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},displayText:{defaultValue:null,description:"Defines the text, displayed inside the `Select` input filed when the option gets selected.",name:"displayText",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Defines the value of the `Select` inside an HTML Form element when this component is selected. For more information on HTML Form support, see the `name` property of `Select`.",name:"value",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const je="soccer",ne="M201.5 258l18 90-73 37-74-55 37-92zm146-185l55 55-38 75-90-20V93zm-91-72q53 0 99.5 20.5t81 55 54.5 81 20 100.5q0 53-20 99T437 437.5 356 492t-99.5 20q-54 0-100.5-20t-81.5-54.5T20 357 .5 258q0-54 19.5-100.5t54.5-81 81.5-55T256.5 1zm201 374q16-27 26-57t10-60l-31-111q-34-55-88.5-92T257.5 18q-47 0-93 23v32l-73 75h-42q-14 25-23 53t-9 57 9.5 58 25 55 37.5 48.5 48 38.5h9l110 37q34 0 66.5-12t61.5-32l-37-11-18-55 73-74 55 37v27z",Be=!1,Ve="SAP-icons-v4",Pe="@ui5/webcomponents-icons";K(je,{pathData:ne,ltr:Be,collection:Ve,packageName:Pe});const Ne="soccer",se="M254.503.998q52.897 0 99.805 19.462t81.84 53.895 55.392 81.34T512 256.5t-20.46 100.304-55.392 80.842-81.84 53.895-99.805 19.462h-9.98q-50.901-5.988-95.813-26.448t-77.848-52.897-51.899-75.852T0 260.491q0-53.895 19.462-101.302t53.895-82.34 80.842-55.39T254.503.998zm160.686 125.754q-34.932-41.918-84.834-61.879l-47.907 34.932v79.844l40.92 29.942 71.86-21.957zM183.641 64.873q-50.9 18.963-84.834 61.88l18.963 60.88 71.86 21.958 40.92-29.942V99.805zm1.996 247.517l-18.963-55.891-69.863-21.957-43.914 31.938q0 51.898 31.937 98.807h62.878zm242.527 52.897q28.943-43.915 31.937-98.807l-42.916-31.938-70.861 21.957-17.965 54.893 39.922 53.895h59.883zm-100.803 30.94l-36.928-49.903H224.56l-37.926 52.896 17.965 53.895q13.973 2.994 25.95 4.99t24.951 1.996 25.95-1.996 26.947-4.99z",qe=!1,ke="SAP-icons-v5",De="@ui5/webcomponents-icons";K(Ne,{pathData:se,ltr:qe,collection:ke,packageName:De});le();const V="soccer",$=Q.forwardRef((o,e)=>ue.createPortal(a.jsx(O,{...o,ref:e}),document.body));$.displayName="SelectMenu";try{$.displayName="SelectMenu",$.__docgenInfo={description:"",displayName:"SelectMenu",props:{children:{defaultValue:null,description:"Defines the options of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ee={title:"Inputs / Select",component:q,argTypes:{children:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:ve.None}},x={render:o=>a.jsxs(q,{...o,children:[a.jsx(g,{children:"Option 1"}),a.jsx(g,{children:"Option 2"}),a.jsx(g,{children:"Option 3"}),a.jsx(g,{children:"Option 4"}),a.jsx(g,{children:"Option 5"})]})},T={name:"with SelectMenu",args:{menu:"selectMenu"},render:o=>(Q.useState(!1),a.jsxs(a.Fragment,{children:[a.jsx(q,{...o}),a.jsxs($,{id:o.menu,children:[a.jsx(v,{displayText:"AR",children:a.jsxs(M,{alignItems:C.Center,justifyContent:j.SpaceBetween,style:{width:"100%"},children:[a.jsx(S,{name:V}),a.jsx(B,{children:"Argentina"}),a.jsx(S,{name:I})]})}),a.jsx(v,{displayText:"BE",children:a.jsxs(M,{alignItems:C.Center,justifyContent:j.SpaceBetween,style:{width:"100%"},children:[a.jsx(S,{name:V}),a.jsx(B,{children:"Belgium"}),a.jsx(S,{name:I})]})}),a.jsx(v,{displayText:"BR",children:a.jsxs(M,{alignItems:C.Center,justifyContent:j.SpaceBetween,style:{width:"100%"},children:[a.jsx(S,{name:V}),a.jsx(B,{children:"Brazil"}),a.jsx(S,{name:I})]})})]})]}))};var z,L,W;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    return <Select {...args}>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
        <Option>Option 3</Option>
        <Option>Option 4</Option>
        <Option>Option 5</Option>
      </Select>;
  }
}`,...(W=(L=x.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var U,H,J;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'with SelectMenu',
  args: {
    menu: 'selectMenu'
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Select {...args} />
        <SelectMenu id={args.menu}>
          <SelectMenuOption displayText="AR">
            <FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.SpaceBetween} style={{
            width: '100%'
          }}>
              <Icon name={soccerIcon} />
              <Text>Argentina</Text>
              <Icon name={employeeIcon} />
            </FlexBox>
          </SelectMenuOption>
          <SelectMenuOption displayText="BE">
            <FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.SpaceBetween} style={{
            width: '100%'
          }}>
              <Icon name={soccerIcon} />
              <Text>Belgium</Text>
              <Icon name={employeeIcon} />
            </FlexBox>
          </SelectMenuOption>
          <SelectMenuOption displayText="BR">
            <FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.SpaceBetween} style={{
            width: '100%'
          }}>
              <Icon name={soccerIcon} />
              <Text>Brazil</Text>
              <Icon name={employeeIcon} />
            </FlexBox>
          </SelectMenuOption>
        </SelectMenu>
      </>;
  }
}`,...(J=(H=T.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const Fe=["Default","WithSelectMenu"],ft=Object.freeze(Object.defineProperty({__proto__:null,Default:x,WithSelectMenu:T,__namedExportsOrder:Fe,default:Ee},Symbol.toStringTag,{value:"Module"}));export{ft as C,x as D,O as S,T as W,v as a};
//# sourceMappingURL=Select.stories-99607249.js.map
