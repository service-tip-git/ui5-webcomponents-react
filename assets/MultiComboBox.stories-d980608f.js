import{j as t}from"./jsx-runtime-d079401a.js";import{_ as b}from"./iframe-4e2a5c10.js";import{M as i,a as e}from"./index-66baa604.js";import{w as d}from"./withWebComponent-7d7e5133.js";import{V as c}from"./ValueState-ab6838cc.js";const m=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-66baa604.js").then(o=>o.b),["./index-66baa604.js","./iframe-4e2a5c10.js","./UI5Element-a4bd3d38.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-7d7e5133.js","./utils-626dc1bf.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./slot-76e48863.js","./Icon-42236945.js","./Icons-74c917eb.js","./ResizeHandler-0af4416f.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-9459236f.js","./Device-6afa24d0.js","./decline-3cb804de.js","./i18n-defaults-2d2bf0b6.js","./Suggestions.css-8d6efd26.js","./information-dbbb1c9a.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-60c5bd52.js","./ListItemBase-472e3755.js","./ItemNavigation-0734b7c0.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./debounce-9c2fb7dd.js","./BusyIndicator-ce1a2cfb.js","./Label-287c3220.js","./WrappingType-b81e595a.js","./i18n-defaults-d5d083dd.js","./class-map-0ab40ab9.js","./style-map-132a30d8.js","./BrowserScrollbar.css-309143b9.js","./Tokenizer-ee572d4f.js","./ScrollEnablement-dd3a6392.js","./animate-1a16ba20.js","./ResponsivePopover-1151e741.js","./Popover-26ef4370.js","./PopupsCommon.css-f12c9479.js","./FocusableElements-66623361.js","./MediaRange-25b98f31.js","./Dialog-3eddfe98.js","./Button-02dfef34.js","./MarkedEvents-b83081e9.js","./Title-f7b3e876.js","./StandardListItem-afe74127.js","./ListItem-86bc8c51.js","./RadioButton-082fd9c9.js","./CheckBox-355e2cb2.js","./accept-aa607c05.js","./HasPopup-47461347.js","./slim-arrow-right-b5a9fe30.js","./Avatar-6c09069b.js","./employee-05c578de.js","./ResponsivePopoverCommon.css-870f7136.js","./ValueStateMessage.css-044f6113.js","./Token-b1762f8c.js","./ToggleButton-4c5cf92d.js","./ComboBoxItem-677d5363.js","./ValueState-ab6838cc.js"],import.meta.url));m.displayName="MultiComboBoxGroupItem";try{m.displayName="MultiComboBoxGroupItem",m.__docgenInfo={description:"The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups",displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const I={title:"Inputs / MultiComboBox",component:i,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:c.None}},n={render:o=>t.jsxs(i,{...o,children:[t.jsx(e,{text:"Item 1"}),t.jsx(e,{text:"Item 2"}),t.jsx(e,{text:"Item 3"}),t.jsx(e,{text:"Item 4"}),t.jsx(e,{text:"Item 5"})]})},r={render:o=>t.jsxs(i,{...o,children:[t.jsx(m,{text:"Asia"}),t.jsx(e,{text:"Afghanistan"}),t.jsx(e,{text:"China"}),t.jsx(e,{text:"India"}),t.jsx(e,{text:"Indonesia"}),t.jsx(m,{text:"Europe"}),t.jsx(e,{text:"Austria"}),t.jsx(e,{text:"Bulgaria"}),t.jsx(e,{text:"Germany"}),t.jsx(e,{text:"Italy"}),t.jsx(m,{text:"North America"}),t.jsx(e,{text:"Canada"}),t.jsx(e,{text:"Granada"}),t.jsx(e,{text:"Haiti"}),t.jsx(e,{text:"United States"})]})};var a,s,u;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxItem text="Item 1" />
        <MultiComboBoxItem text="Item 2" />
        <MultiComboBoxItem text="Item 3" />
        <MultiComboBoxItem text="Item 4" />
        <MultiComboBoxItem text="Item 5" />
      </MultiComboBox>;
  }
}`,...(u=(s=n.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var l,x,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxGroupItem text="Asia"></MultiComboBoxGroupItem>
        <MultiComboBoxItem text="Afghanistan"></MultiComboBoxItem>
        <MultiComboBoxItem text="China"></MultiComboBoxItem>
        <MultiComboBoxItem text="India"></MultiComboBoxItem>
        <MultiComboBoxItem text="Indonesia"></MultiComboBoxItem>
        <MultiComboBoxGroupItem text="Europe"></MultiComboBoxGroupItem>
        <MultiComboBoxItem text="Austria"></MultiComboBoxItem>
        <MultiComboBoxItem text="Bulgaria"></MultiComboBoxItem>
        <MultiComboBoxItem text="Germany"></MultiComboBoxItem>
        <MultiComboBoxItem text="Italy"></MultiComboBoxItem>
        <MultiComboBoxGroupItem text="North America"></MultiComboBoxGroupItem>
        <MultiComboBoxItem text="Canada"></MultiComboBoxItem>
        <MultiComboBoxItem text="Granada"></MultiComboBoxItem>
        <MultiComboBoxItem text="Haiti"></MultiComboBoxItem>
        <MultiComboBoxItem text="United States"></MultiComboBoxItem>
      </MultiComboBox>;
  }
}`,...(p=(x=r.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const C=["Default","Grouping"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Grouping:r,__namedExportsOrder:C,default:I},Symbol.toStringTag,{value:"Module"}));export{j as C,n as D,r as G,m as M};
//# sourceMappingURL=MultiComboBox.stories-d980608f.js.map
