import{j as t}from"./iframe-BclzIqLN.js";import{useMDXComponents as n}from"./index-C905Yc-m.js";import{I as i,F as m}from"./CommandsAndQueries-C-6YnLjZ.js";import{M as p,C as s}from"./blocks-B5DwqLl1.js";import"./Tag-BOdn4VYm.js";import"./index-DMn-V0Tk.js";import"./copy-D_MUueeP.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C9L8Guqw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-uVgUJkPs.js";import"./index-OKRhEBZf.js";import"./index-xMZLjYER.js";import"./Link-DPzQ2XbU.js";import"./index-C8ShhJNW.js";import"./index-5TTuORsb.js";import"./index-CJHMJsmF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cdo2Ur2Z.js";import"./addCustomCSSWithScoping-Dte7M2sk.js";import"./index-CnVdbwVS.js";import"./information-BdMHs198.js";import"./sys-enter-2-C5ziAGW-.js";import"./alert-BWh7aIvC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-5uGOFpph.js";import"./delete-Ch7YLa0V.js";import"./settings-BkOrUldx.js";import"./NoData-CfYSMo8M.js";import"./IllustratedMessage-DQgOxUn_.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BzUJY8Ac.js";import"./index-6F36v5VW.js";import"./index-D9jIvk-q.js";import"./slim-arrow-down-C1U4NX7H.js";import"./Input-C4okqpUf.js";import"./ResponsivePopoverCommon.css-ClkbcXC1.js";import"./ValueStateMessage.css-C3ePSvc8.js";import"./Suggestions.css-CUzKAV-7.js";import"./ListBoxItemGroupTemplate-CFqH3D8Q.js";import"./ComboBoxItemGroup-2Y-8-MYS.js";import"./ListItemBaseTemplate-CNmdHhwQ.js";import"./Token-B7V4WzzV.js";import"./ScrollEnablement-B33MvuIW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-tHNIwCbY.js";import"./ToggleButton-D72VLeFZ.js";import"./SuggestionItem-Cz2Vq1ey.js";import"./index-DSAIMpS1.js";import"./Option-CI6fqOL0.js";import"./index-CvCO9G33.js";import"./SegmentedButton-DOVaKk4o.js";import"./index-CS4FFq1R.js";import"./Select-Cwlz9_o0.js";import"./InvisibleMessage-D5CfVB6Z.js";import"./slim-arrow-down-BwnzdiOy.js";import"./index-vSHFeP63.js";import"./index-HdZD7NhL.js";import"./index-Byw1M1w0.js";import"./index-B-2M8oTR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CprbOLAW.js";import"./group-2-CQahafe6.js";import"./sort-descending-CxK_741y.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B8T8PvLa.js";import"./utils-CzDDLq5x.js";import"./index-YJUbNZXC.js";import"./index-DaX0lkO8.js";import"./index-Dfxpc54q.js";import"./navigation-down-arrow-9qHA5EUE.js";import"./navigation-right-arrow-C_dGSAC8.js";import"./navigation-right-arrow-C2F-yOS_.js";import"./useCurrentTheme-B0s-uCVG.js";import"./index-0NhHA-ih.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BUkTWivW.js";import"./paper-plane-D-v0DWGa.js";import"./index-Cbkmi62k.js";import"./less-B_W3_4w8.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
