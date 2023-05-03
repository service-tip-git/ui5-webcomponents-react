import{M as u,C as c,f as d,a as h}from"./chunk-PCJTTTQV-2ddb0d2c.js";import{C as t}from"./index-1080dd52.js";import{V as r}from"./ValueState-ab6838cc.js";import{d as k}from"./DomRefTable.module-6c3d6074.js";import{D as g}from"./DocsHeader-aa256252.js";import{F as j}from"./Footer-b17124db.js";import{j as e}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{u as l}from"./index-bda0bad7.js";import"./iframe-0e2c037e.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./CheckBox-3275c87a.js";import"./Device-208919c6.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-c710bf85.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-16710c43.js";import"./Icons-5b18f7d2.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./accept-9744f30a.js";import"./Label-e22f23ee.js";import"./WrappingType-b81e595a.js";import"./class-map-eee65cb7.js";import"./i18n-defaults-254d6b69.js";import"./react-jss.esm-022ab528.js";import"./index-07d651e6.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./Button-6eea99db.js";import"./MarkedEvents-b83081e9.js";import"./index-b9e92427.js";import"./clsx.m-1229b3e0.js";import"./index-2495a9e4.js";import"./ThemingParameters-f4b4144e.js";import"./Import-4e89c4c8.js";import"./TableOfContent-6527404a.js";import"./index-e11f6a8e.js";import"./Link-a00cf029.js";import"./index-0ed26c16.js";import"./index-645fdac6.js";import"./Popover-34a43919.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-bfd93775.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-72af48b2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-eb41b602.js";const y='## Usage\n\nYou can define the checkbox text with via the `text` property. If the text exceeds the available width, it is truncated by default. In case you prefer text to wrap, set the `wrappingType` property to "Normal". The touchable area for toggling the `CheckBox` ends where the text ends.\n\nYou can disable the `CheckBox` by setting the `disabled` property to `true`, or use the `CheckBox` in read-only mode by setting the `readonly` property to `true`.\n\n## Keyboard Handling\n\nThe user can use the following keyboard shortcuts to toggle the checked state of the `CheckBox`.\n\n- \\[SPACE, ENTER\\] - Toggles between different states: checked, not checked.\n';function S(o={}){const{wrapper:s}=Object.assign({},l(),o.components);return s?e.jsx(s,{...o,children:e.jsx(i,{})}):i();function i(){const a=Object.assign({h2:"h2",h1:"h1"},l(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Inputs / CheckBox",component:t,args:{valueState:r.None,text:"CheckBox"}}),`
`,e.jsx(g,{}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{children:e.jsx(d,{name:"Default",children:p=>e.jsx(t,{...p})})}),`
`,e.jsx(a.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(k,{story:"Default"}),`
`,e.jsx(h,{children:y}),`
`,e.jsx(a.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"checkbox-states",children:"CheckBox states"}),`
`,e.jsx(c,{children:e.jsx(d,{name:"CheckBox states",children:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Error",valueState:r.Error}),e.jsx(t,{text:"Warning",valueState:r.Warning}),e.jsx(t,{text:"Disabled",disabled:!0,checked:!0}),e.jsx(t,{text:"Readonly",readonly:!0,checked:!0}),e.jsx(t,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),e.jsx(t,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]})})}),`
`,e.jsx(j,{})]})}}const x=o=>e.jsx(t,{...o});x.storyName="Default";x.parameters={storySource:{source:`args => {
  return <CheckBox {...args} />;
}`}};const m=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Error",valueState:r.Error}),e.jsx(t,{text:"Warning",valueState:r.Warning}),e.jsx(t,{text:"Disabled",disabled:!0,checked:!0}),e.jsx(t,{text:"Readonly",readonly:!0,checked:!0}),e.jsx(t,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),e.jsx(t,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]});m.storyName="CheckBox states";m.parameters={storySource:{source:`() => {
  return <>
          <CheckBox text="Error" valueState={ValueState.Error} />
          <CheckBox text="Warning" valueState={ValueState.Warning} />
          <CheckBox text="Disabled" disabled checked />
          <CheckBox text="Readonly" readonly checked />
          <CheckBox text="Error disabled" disabled valueState={ValueState.Error} checked />
          <CheckBox text="Warning disabled " disabled valueState={ValueState.Warning} checked />
          <CheckBox text="Error readonly" readonly valueState={ValueState.Error} checked />
          <CheckBox text="Warning readonly" readonly valueState={ValueState.Warning} checked />
        </>;
}`}};const n={title:"Inputs / CheckBox",component:t,args:{valueState:r.None,text:"CheckBox"},tags:["stories-mdx"],includeStories:["defaultStory","checkBoxStates"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:S};const Te=["defaultStory","checkBoxStates"];export{Te as __namedExportsOrder,m as checkBoxStates,n as default,x as defaultStory};
//# sourceMappingURL=CheckBox.stories-5fb378bc.js.map
