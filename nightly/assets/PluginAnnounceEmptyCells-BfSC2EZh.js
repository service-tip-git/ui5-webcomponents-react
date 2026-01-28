import{j as t}from"./iframe-w0_MYrZh.js";import{useMDXComponents as n}from"./index-BycN9fOm.js";import{I as i,F as m}from"./CommandsAndQueries-BLQv3roD.js";import{M as p,C as s}from"./blocks-DJOHNqcV.js";import"./Tag-BpDpCVC0.js";import"./index-De2hY3Dy.js";import"./copy-D2R0vLQ4.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DBKY7q4K.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0GVc7AW.js";import"./index-URs7g74M.js";import"./index-BgtBDdHh.js";import"./Link-BZHTtj1b.js";import"./index-D2-ZQ1Lf.js";import"./index-BD0pDq5_.js";import"./index-CJZSgnB8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D4L-H8MS.js";import"./addCustomCSSWithScoping-BxnbVzCY.js";import"./index-vKqE_SS0.js";import"./information-DqXgTAXV.js";import"./sys-enter-2-BeQRv1GM.js";import"./alert-CuXO44HU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dprp07lb.js";import"./delete-BCvmEI5O.js";import"./settings-C3yqhbag.js";import"./NoData-QRZWZJd0.js";import"./IllustratedMessage-T-nSz2oL.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-5v4MWfGb.js";import"./index-DBuLBnCn.js";import"./index-ZUmmbONo.js";import"./slim-arrow-down-_tiVkR_W.js";import"./Input-B947RaFp.js";import"./ResponsivePopoverCommon.css-CIKpOnPy.js";import"./ValueStateMessage.css-DwWJ9RXg.js";import"./Suggestions.css-BNHIGeRt.js";import"./ListBoxItemGroupTemplate-BE7ZF0yd.js";import"./ComboBoxItemGroup-j-ogm9Es.js";import"./ListItemBaseTemplate-hZITbmoX.js";import"./Token-wyHKBYA3.js";import"./ScrollEnablement--wSGuTgj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-PkfEJwLh.js";import"./ToggleButton-CZdaKOxJ.js";import"./SuggestionItem-MmtuVuyI.js";import"./index-BY2KfaQI.js";import"./Option-C_lYdTgQ.js";import"./index-2BstYlQB.js";import"./SegmentedButton-FkSSjm_Z.js";import"./index-WmGREpLP.js";import"./Select-C7o0oMjf.js";import"./InvisibleMessage-RrW4HMOA.js";import"./slim-arrow-down-bs2ksNJ4.js";import"./index-BPXy1nrS.js";import"./index-BbJ5v37o.js";import"./index-Dz8tpwGV.js";import"./index-Cw510Bsp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Vokmh8yA.js";import"./group-2-DbZe8PL5.js";import"./sort-descending-BDE1i8DR.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BtYKWXyc.js";import"./utils-WBofKG4w.js";import"./index-B_sa1bRi.js";import"./index-mtpe59v8.js";import"./index-DUsoVupR.js";import"./navigation-down-arrow-Df6Mn4at.js";import"./navigation-right-arrow-Bk6HMVMe.js";import"./navigation-right-arrow-R9P1yLbk.js";import"./useCurrentTheme-B5gLxteq.js";import"./index-DqstkdJN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-YFdiD547.js";import"./paper-plane-BLf9WuxO.js";import"./index-BwZ6X2fE.js";import"./less-B5EuyQX2.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
