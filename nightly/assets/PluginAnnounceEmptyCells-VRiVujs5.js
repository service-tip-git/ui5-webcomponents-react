import{j as t}from"./iframe-Yrd5HXiX.js";import{useMDXComponents as i}from"./index-DOxT51h1.js";import{I as n}from"./CommandsAndQueries-C2FZOFS4.js";import{M as m,C as p}from"./blocks-Dvv2YIoD.js";import"./Tag-A6uWcl63.js";import"./index-BF16G_0e.js";import"./copy-BoNX54Ls.js";import{F as s}from"./Footer-CkKCjd3s.js";import"./PageNotFound-kNJyDscw.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D3z1Mx3x.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cr8Oti_G.js";import"./index-CfYuYIaa.js";import"./index-BUTU-Rlc.js";import"./index-B2vsuIMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN_dVplC.js";import"./addCustomCSSWithScoping-DB8Behso.js";import"./index-DA96fnb1.js";import"./index-Dz_82eM4.js";import"./index-Sv74Bfia.js";import"./information-BDrQXgLD.js";import"./sys-enter-2-BRBYXqiH.js";import"./alert-BtI3-0Jo.js";import"./index-CSbojWcx.js";import"./Illustrations-D8i7Iry7.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CK4uWCRt.js";import"./delete-BeVyXiYQ.js";import"./settings-sAoONwci.js";import"./NoData-hXKjP8_c.js";import"./NoFilterResults-qH3kPNMn.js";import"./index-Dmo0D1sN.js";import"./IllustratedMessage-DT11ntwf.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-C6Siqk_0.js";import"./slim-arrow-down-C66mVyft.js";import"./Input-biWYnwTr.js";import"./ResponsivePopoverCommon.css-Dhp5Q3jO.js";import"./ValueStateMessage.css-DaqWQCbh.js";import"./Suggestions.css-uVzdT4u-.js";import"./ListBoxItemGroupTemplate-0UhJkH8t.js";import"./ComboBoxItemGroup-BMqsW1Nd.js";import"./ListItemBaseTemplate-B4wrenP3.js";import"./Token-B55rgKOx.js";import"./ScrollEnablement-BBJzN_WO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-j7gFN2tu.js";import"./ToggleButton-BtobOlQE.js";import"./SuggestionItem-Y4FX-HD4.js";import"./index-CMMqyw3P.js";import"./Option-cgyjEXZH.js";import"./index-Cz-wHGnF.js";import"./SegmentedButton-3ZctE_fn.js";import"./index-DTvdeq0R.js";import"./Select-CXKgXvak.js";import"./InvisibleMessage-CtYhUk5a.js";import"./slim-arrow-down-CiI8zYHE.js";import"./index-BwT6bNsG.js";import"./index-C3srnBRe.js";import"./index-BBtrcJyj.js";import"./index-gHAbPdfd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bs4-TFnR.js";import"./group-2-DLZzwK5l.js";import"./sort-descending-BnKqQM8g.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CY9k3hyc.js";import"./utils-BLfMxc3Q.js";import"./index-BaFHnCrW.js";import"./index-3OijyU0m.js";import"./index-DZjWsdnu.js";import"./navigation-down-arrow-C1--d2l2.js";import"./navigation-right-arrow-DX6JBwhN.js";import"./navigation-right-arrow--1vFD5th.js";import"./useCurrentTheme-fwbh8NiD.js";import"./index-c0NDSFEN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DRlSD9Vi.js";import"./paper-plane-Dq5qbkzD.js";import"./index-BINom7PM.js";import"./less-CtIlRGB6.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const tableHooks = [useAnnounceEmptyCells] // this array should be memoized

<AnalyticalTable
  data={data}
  columns={columns}
  visibleRows={5}
  tableHooks={tableHooks}
/>
`})}),`
`,t.jsx(o.p,{children:t.jsx(o.strong,{children:"First data entry with empty values or undefined fields:"})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-js",children:`{
  age: undefined,
  friend: {
    name: '',
    age: 0
  },
  status: 'Error'
}
`})}),`
`,t.jsx(s,{})]})}function Lt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Lt as default};
