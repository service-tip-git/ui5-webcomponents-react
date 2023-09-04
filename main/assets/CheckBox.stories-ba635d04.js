import{M as h,C as d,e as c,b as u}from"./chunk-S4VUQJ4A-3ef37798.js";import{C as t}from"./index-65398051.js";import{V as r}from"./ValueState-ab6838cc.js";import{A as k}from"./DomRefTable.module-0ee03dcb.js";import{D as S}from"./DocsHeader-e04382aa.js";import{F as g}from"./Footer-a5c640ad.js";import{j as e}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u as l}from"./index-59d6410c.js";import"./iframe-de4da0be.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./CheckBox-c32e2a79.js";import"./UI5Element-e590cd60.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./withWebComponent-b4c67a1a.js";import"./utils-e9940b93.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b897d66f.js";import"./Icons-65b34360.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./accept-92104380.js";import"./Label-69062358.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-d5195a49.js";import"./class-map-e1b423a4.js";import"./react-jss.esm-2e5f50f2.js";import"./index-d8e4b22e.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./information-e97f915a.js";import"./alert-7494fabe.js";import"./Button-4505b9f6.js";import"./MarkedEvents-b83081e9.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-203b56de.js";import"./index-5707a3c1.js";import"./Integer-f7f172c9.js";import"./index-ca035c3f.js";import"./Avatar-60d18bb8.js";import"./ResizeHandler-34ecee99.js";import"./employee-78fe46d2.js";import"./index-134c15e4.js";import"./index-57c516a2.js";import"./Link-a373b451.js";import"./index-7ebe0f2b.js";import"./TableOfContent-0af9c05c.js";import"./index-3557c047.js";import"./index-7ece2641.js";import"./index-4c3c5ec7.js";import"./Popover-742c9988.js";import"./PopupUtils-f407c5e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97942203.js";import"./FocusableElements-d024bb16.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-ecc46a93.js";import"./BrowserScrollbar.css-4a87524a.js";const y='## Usage\n\nYou can define the checkbox text with via the `text` property. If the text exceeds the available width, it is truncated by default. In case you prefer text to wrap, set the `wrappingType` property to "Normal". The touchable area for toggling the `CheckBox` ends where the text ends.\n\nYou can disable the `CheckBox` by setting the `disabled` property to `true`, or use the `CheckBox` in read-only mode by setting the `readonly` property to `true`.\n\n## CSS Shadow Parts\n\n<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  \nThe `CheckBox` exposes the following CSS Shadow Parts:\n\n- root - Used to style the outermost wrapper of the `CheckBox`\n\n## Keyboard Handling\n\nThe user can use the following keyboard shortcuts to toggle the checked state of the `CheckBox`.\n\n- \\[SPACE, ENTER\\] - Toggles between different states: checked, not checked.\n';function j(o={}){const{wrapper:s}=Object.assign({},l(),o.components);return s?e.jsx(s,{...o,children:e.jsx(i,{})}):i();function i(){const a=Object.assign({h2:"h2",h1:"h1"},l(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Inputs / CheckBox",component:t,args:{valueState:r.None,text:"CheckBox"}}),`
`,e.jsx(S,{}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"example",children:"Example"}),`
`,e.jsx(d,{children:e.jsx(c,{name:"Default",children:x=>e.jsx(t,{...x})})}),`
`,e.jsx(a.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(k,{story:"Default"}),`
`,e.jsx(u,{children:y}),`
`,e.jsx(a.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"checkbox-states",children:"CheckBox states"}),`
`,e.jsx(d,{children:e.jsx(c,{name:"CheckBox states",children:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Error",valueState:r.Error}),e.jsx(t,{text:"Warning",valueState:r.Warning}),e.jsx(t,{text:"Disabled",disabled:!0,checked:!0}),e.jsx(t,{text:"Readonly",readonly:!0,checked:!0}),e.jsx(t,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),e.jsx(t,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]})})}),`
`,e.jsx(g,{})]})}}const p=o=>e.jsx(t,{...o});p.storyName="Default";p.parameters={storySource:{source:`args => {
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
}`}};const n={title:"Inputs / CheckBox",component:t,args:{valueState:r.None,text:"CheckBox"},tags:["stories-mdx"],includeStories:["defaultStory","checkBoxStates"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:j};const _e=["defaultStory","checkBoxStates"];export{_e as __namedExportsOrder,m as checkBoxStates,n as default,p as defaultStory};
//# sourceMappingURL=CheckBox.stories-ba635d04.js.map
