import{j as t}from"./iframe-Bg524aqp.js";import{useMDXComponents as n}from"./index-B-rwzkjC.js";import{I as i,F as m}from"./CommandsAndQueries-Bxzaytg-.js";import{M as p,C as s}from"./blocks--Wel_jE1.js";import"./Tag-DNMuD7A5.js";import"./index-B9tuTECn.js";import"./copy-BgS9Q-8_.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BtcTbGIn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqYTt2r-.js";import"./index-DPNsglmV.js";import"./index-TfZZnQDd.js";import"./Link-DzzFCouB.js";import"./index-iejN5y1T.js";import"./index-r1bogqKf.js";import"./index-tDWQXHER.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkKuq7AH.js";import"./addCustomCSSWithScoping-DFbnSqfd.js";import"./index-DxUoW9XL.js";import"./information-2dCGwvE_.js";import"./sys-enter-2-CO93Qjp1.js";import"./alert-BG-ILaUe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ozcYxpI5.js";import"./delete-Bbvt8Ot-.js";import"./settings-BhmSlLPC.js";import"./NoData-Bj02WUEt.js";import"./IllustratedMessage-R2CzAWXp.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BIlaAfwD.js";import"./index-CfgOXvqI.js";import"./index-DE4ZHMUP.js";import"./slim-arrow-down-CRZdlGQF.js";import"./Input-DmAcj6-y.js";import"./ResponsivePopoverCommon.css-DvaTlIz3.js";import"./ValueStateMessage.css-qD0DeEG7.js";import"./Suggestions.css-ZRTSrlW8.js";import"./ListBoxItemGroupTemplate-DXJv0PMK.js";import"./ComboBoxItemGroup-Dsg5vEL4.js";import"./ListItemBaseTemplate-BpYqWiGX.js";import"./Token-9cJC13pc.js";import"./ScrollEnablement-C7eLNzW1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bewcenzz.js";import"./ToggleButton-DPa7jhtq.js";import"./SuggestionItem-Dpk_4CFh.js";import"./index-CdKTVzwi.js";import"./Option-ClvqOWQS.js";import"./index-qJ7YjxyU.js";import"./SegmentedButton-DE8rqkD-.js";import"./index-DYMzkGI0.js";import"./Select-B4bz0mNo.js";import"./InvisibleMessage-DXpW_GiJ.js";import"./slim-arrow-down-DwyYquXh.js";import"./index-CNB43ZnJ.js";import"./index-DIBXYbfE.js";import"./index-CPicDcbf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMn6lE9G.js";import"./group-2--_rJdnmk.js";import"./sort-descending-CAbRK7tC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BecMM91E.js";import"./utils-Cud8cjsY.js";import"./index-Cw39ZeIw.js";import"./index-C0z4qlZR.js";import"./index-aDnJKja3.js";import"./navigation-down-arrow-BzyymRLp.js";import"./navigation-right-arrow-CUK1IzT8.js";import"./navigation-right-arrow-BPrwIZ8M.js";import"./useCurrentTheme-CR40IPum.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B5Tp7z0D.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DiCPj2HI.js";import"./paper-plane-BaN203_j.js";import"./index-MM_7rShN.js";import"./less-Bs9eXWxF.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
