import{j as o}from"./jsx-runtime-d079401a.js";import{C as l,A as s}from"./DomRefTable.module-1a1a4669.js";import{D as c}from"./DocsHeader-0d1c11df.js";import{F as h}from"./Footer-af9a8ffe.js";import"./index-f1f2c4b1.js";import{D as d}from"./DomRefTable-9ad9a134.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as b,C as p,b as e}from"./chunk-S4VUQJ4A-888d1edd.js";import{C as x,D as m,G as f,M as w}from"./MultiComboBox.stories-ed5d68fc.js";import{a as C}from"./index-416290e4.js";import{u as a}from"./index-59d6410c.js";import"./react-jss.esm-c310038c.js";import"./inheritsLoose-93e09647.js";import"./index-0fba4fdd.js";import"./iframe-c5150722.js";import"../sb-preview/runtime.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-99b005ba.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-31253496.js";import"./Icons-234bf59e.js";import"./decline-23c167e4.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-1886de07.js";import"./class-map-b4d8f3b0.js";import"./Button-cea1a8d0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-183ab1a9.js";import"./index-47d0a85a.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-783dc33d.js";import"./index-706a5b34.js";import"./Integer-f7f172c9.js";import"./index-1bb205c0.js";import"./Avatar-5dbee8fc.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-a9c1cae5.js";import"./index-34c3e659.js";import"./Link-5f9413e3.js";import"./WrappingType-b81e595a.js";import"./index-56b3d57c.js";import"./TableOfContent-1848aa4c.js";import"./index-58ef0d95.js";import"./Label-715c9061.js";import"./index-c74c9f7f.js";import"./index-716da007.js";import"./index-a5c7f622.js";import"./Popover-2c2db418.js";import"./PopupsCommon.css-57708035.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-56038137.js";import"./BrowserScrollbar.css-527f9f64.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-f82584de.js";import"./Suggestions.css-a2899748.js";import"./GroupHeaderListItem-db07ab19.js";import"./ListItemBase-2bee9969.js";import"./ItemNavigation-a882fb90.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-9c77b370.js";import"./Tokenizer-670aa3fd.js";import"./ScrollEnablement-dd3a6392.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-5dd29d2d.js";import"./Dialog-b8b389fd.js";import"./Title-3276c542.js";import"./StandardListItem-63c10fff.js";import"./ListItem-e17fcfe4.js";import"./RadioButton-dc3e74e5.js";import"./CheckBox-bea14c51.js";import"./accept-6c83709e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-c0f59065.js";import"./ResponsivePopoverCommon.css-c96ec8b5.js";import"./ValueStateMessage.css-e53cdf31.js";import"./Token-b56bad05.js";import"./ToggleButton-b3781d96.js";import"./ComboBoxItem-1b805b0a.js";const g="**Since:** 0.25.0  \n**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",j="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",M=`## Structure

The \`MultiComboBox\` consists of the following elements:

- Tokenizer - a list of tokens with selected options.
- Input field - displays the selected option/s as token/s. Users can type to filter the list.
- Drop-down arrow - expands\\\\collapses the option list.
- Option list - the list of available options.

## Keyboard Handling

The \`MultiComboBox\` provides advanced keyboard handling.

### Picker

If the \`MultiComboBox\` is focused, you can open or close the drop-down by pressing \`F4\`, \`ALT+UP\` or \`ALT+DOWN\` keys. Once the drop-down is opened, you can use the \`UP\` and \`DOWN\` arrow keys to navigate through the available options and select one by pressing the \`Space\` or \`Enter\` keys.

### Tokens

- Left/Right arrow keys - moves the focus selection form the currently focused token to the previous/next one (if available).
- Delete - deletes the token and focuses the previous token.
- Backspace - deletes the token and focus the next token.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`MultiComboBox\` exposes the following CSS Shadow Parts:

- token-{index} - Used to style each token(where \`token-0\` corresponds to the first item)
`,k=[{name:"open",readonly:"true",visibility:"public",since:"1.0.0-rc.5",type:"boolean",description:"Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.",defaultValue:"false"}];function ut(i={}){const{wrapper:r}=Object.assign({},a(),i.components);return r?o.jsx(r,Object.assign({},i,{children:o.jsx(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h1:"h1"},a(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(b,{of:x}),`
`,o.jsx(c,{since:"0.4.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(l,{of:m}),`
`,o.jsx(e,{children:M}),`
`,o.jsx(d,{rows:k}),`
`,o.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,o.jsx(t.h2,{id:"multicombobox-with-grouping-of-items",children:"MultiComboBox with Grouping of Items"}),`
`,o.jsx(p,{of:f}),`
`,o.jsx(e,{children:u}),`
`,o.jsx(t.h2,{id:"multicomboboxitem",children:"MultiComboBoxItem"}),`
`,o.jsx(s,{hideHTMLPropsNote:!0,of:C}),`
`,o.jsx(e,{children:j}),`
`,o.jsx(t.h2,{id:"multicomboboxgroupitem",children:"MultiComboBoxGroupItem"}),`
`,o.jsx(s,{hideHTMLPropsNote:!0,of:w}),`
`,o.jsx(e,{children:g}),`
`,o.jsx(h,{})]})}}export{ut as default};
//# sourceMappingURL=MultiComboBox-ec68ba54.js.map
