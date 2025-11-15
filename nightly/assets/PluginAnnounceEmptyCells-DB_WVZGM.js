import{j as t}from"./iframe-RECRoZhV.js";import{useMDXComponents as n}from"./index-1tzPRbI6.js";import{I as i,F as m}from"./CommandsAndQueries-DPpsoP9s.js";import{M as p,C as s}from"./blocks-CH1yi1wC.js";import"./Tag-BCmfqboN.js";import"./index-CfNZ4QaZ.js";import"./copy-B_omwcq7.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BjvilGb7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CB0t3Ndr.js";import"./index-D1It_vMD.js";import"./index-DGKmMzEm.js";import"./Link-BZUDNGRG.js";import"./index-lc4LLOiH.js";import"./index-Dk8UUcOY.js";import"./index-Rgh5WsNa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bozn53qz.js";import"./addCustomCSSWithScoping-Uy-s1Hcf.js";import"./index-5drqvW0T.js";import"./information-D6UQivs-.js";import"./sys-enter-2-CMoukZNH.js";import"./alert-BjbREM6S.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bz2chLzI.js";import"./delete-DogqfZ3E.js";import"./settings-lCutP8dK.js";import"./NoData-llz9PG9F.js";import"./IllustratedMessage-CKo1bCpT.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Dc_PXms6.js";import"./index-DX4imUhW.js";import"./index-D4ozyLie.js";import"./slim-arrow-down-CT6VdoUI.js";import"./Input-DlayT0fi.js";import"./ResponsivePopoverCommon.css-D2fANVRT.js";import"./ValueStateMessage.css-D4UTir1H.js";import"./Suggestions.css-CDvWi9BJ.js";import"./ListBoxItemGroupTemplate-BBFkEoXO.js";import"./ComboBoxItemGroup-C70F9qVi.js";import"./ListItemBaseTemplate-PhRm9Z1E.js";import"./Token-BWzNh8w7.js";import"./ScrollEnablement-BRHtS9Y6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CghTaqTk.js";import"./ToggleButton-CUxngjtj.js";import"./SuggestionItem-CC-vpnLD.js";import"./index-BjlvmRlS.js";import"./Option-CUfEccr7.js";import"./index-Da_u9t8p.js";import"./SegmentedButton-Boemh7ns.js";import"./index-D3Kr9jBp.js";import"./Select-D_Yo3ITd.js";import"./InvisibleMessage-k_rSJSP0.js";import"./slim-arrow-down-kuIl5ttD.js";import"./index-BEBnT4-a.js";import"./index-KQsXY6-N.js";import"./index-CXzJLeoO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXPu933P.js";import"./group-2-jhaWfOW9.js";import"./sort-descending-BHyYxadY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DO_r9pCl.js";import"./utils-B4YULW7_.js";import"./index-DHf7Rwdf.js";import"./index-DHz2T6Sp.js";import"./index-C9_jR0jd.js";import"./navigation-down-arrow-DwtmqN-Q.js";import"./navigation-right-arrow-CIZgBpjX.js";import"./navigation-right-arrow-CoJr-ET_.js";import"./useCurrentTheme-CscTi93E.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DbY2gDlc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-U4IYdiJl.js";import"./paper-plane-Cs6XxyXF.js";import"./index-D_b6lk6Z.js";import"./less-Cg20nryA.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
