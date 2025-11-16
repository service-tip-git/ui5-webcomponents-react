import{j as t}from"./iframe-DQawrgT_.js";import{useMDXComponents as n}from"./index-BmmNdxGP.js";import{I as i,F as m}from"./CommandsAndQueries-8E8N5Jf5.js";import{M as p,C as s}from"./blocks-CsjIrgm8.js";import"./Tag-DINZ5J-5.js";import"./index-CkLsOSwH.js";import"./copy-BfmM2Dw-.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-W25A3oS9.js";import"./preload-helper-PPVm8Dsz.js";import"./index--1fmb9ws.js";import"./index-CaSLC49k.js";import"./index-lL1wxGfG.js";import"./Link-QZkGNwXr.js";import"./index-C4mOCO1v.js";import"./index-BpUdR17T.js";import"./index-DXw92D-i.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D6QKJZ6-.js";import"./addCustomCSSWithScoping-CIoyfOLu.js";import"./index-DkjHlZC9.js";import"./information-DvV6iDHk.js";import"./sys-enter-2-DVOKgY3M.js";import"./alert-D1Pqx8x8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-X9zi8Na2.js";import"./delete-C6HzY21G.js";import"./settings-CWp1p9X4.js";import"./NoData-CDBUvfvl.js";import"./IllustratedMessage-uso3zTnf.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BsZDo7Xz.js";import"./index--kps9BoF.js";import"./index-Cu2d-9NT.js";import"./slim-arrow-down-CrV_EoZ-.js";import"./Input-C1pWyBfA.js";import"./ResponsivePopoverCommon.css-CRDo6imn.js";import"./ValueStateMessage.css-yU9YlQTC.js";import"./Suggestions.css-DGIsZFtp.js";import"./ListBoxItemGroupTemplate-Qgb7Il2A.js";import"./ComboBoxItemGroup-DDKZCgRF.js";import"./ListItemBaseTemplate-CYGq7w02.js";import"./Token-Bd0t7DDi.js";import"./ScrollEnablement-CFUBLAVD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRn-lKzQ.js";import"./ToggleButton-B-hCXMIV.js";import"./SuggestionItem-m6DAn-I2.js";import"./index-BSgkgR9j.js";import"./Option-C4LQWtvA.js";import"./index-msmsJC20.js";import"./SegmentedButton-CERSbuxP.js";import"./index-cFycgftA.js";import"./Select-UWywW-TM.js";import"./InvisibleMessage-B4vU3xgw.js";import"./slim-arrow-down-ZC2auWSc.js";import"./index-BpZszSRc.js";import"./index-DJB11urr.js";import"./index-B7bKPaYO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DgoHoVwF.js";import"./group-2-Do0Gpjo4.js";import"./sort-descending-CnWvzCuF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DTd36afj.js";import"./utils-B9VO5sCv.js";import"./index-Cd39OiMQ.js";import"./index-hk4pV2sf.js";import"./index-DOxhRrM_.js";import"./navigation-down-arrow-B6UI6hGh.js";import"./navigation-right-arrow-D1f_1Cvf.js";import"./navigation-right-arrow-Dbgs5rW1.js";import"./useCurrentTheme-Mk8c19Xo.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DMMeBvKD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B1ti3bb-.js";import"./paper-plane-CJkMjDJU.js";import"./index-DehgxQHc.js";import"./less-Djjr01dD.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(i,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{sourceState:"none",of:l}),`
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
`,t.jsx(m,{})]})}function Rt(r={}){const{wrapper:o}={...n(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Rt as default};
