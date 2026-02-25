import{j as t}from"./iframe-BQI8iJtZ.js";import{useMDXComponents as n}from"./index-l_Dh7Y-d.js";import{I as i,F as m}from"./CommandsAndQueries-BH0I_jDK.js";import{M as p,C as s}from"./blocks-Dm7btFzZ.js";import"./Tag-D2JKRyPD.js";import"./index-Bd5bxmR8.js";import"./copy-Wr9Hnpdu.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Co6ciUmv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDHutJWz.js";import"./index-CdGithLr.js";import"./index-y23wvc_L.js";import"./Link-C9lbVSnw.js";import"./index-CP42RXg5.js";import"./index-CixO9GRI.js";import"./index-CjJMvaDa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DMLN5SEy.js";import"./addCustomCSSWithScoping-C30TCMVD.js";import"./index-CC6FubQ3.js";import"./information-DhTwMCvW.js";import"./sys-enter-2-B4_axdEE.js";import"./alert-D_lKNn7T.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DqBLgsFv.js";import"./delete-DN8wM4l0.js";import"./settings-vSGnaQMo.js";import"./NoData-BqNhr66z.js";import"./IllustratedMessage-qImrSjau.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CwkhrkCY.js";import"./index-C7KjXWDM.js";import"./index-zxMVpEDh.js";import"./slim-arrow-down-QOUojnnL.js";import"./Input-2UrWgipO.js";import"./ResponsivePopoverCommon.css-gVvV0tmb.js";import"./ValueStateMessage.css-BxkCLEc_.js";import"./Suggestions.css-CPeYy0BW.js";import"./ListBoxItemGroupTemplate-BBLM1Bt8.js";import"./ComboBoxItemGroup-CoFNAlZu.js";import"./ListItemBaseTemplate-2jk2aB8o.js";import"./Token-B68uFNrG.js";import"./ScrollEnablement-B8byLzsv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDy0Ge3B.js";import"./ToggleButton-B2NYYGfM.js";import"./SuggestionItem-Cc3ypeyC.js";import"./index-D8bEAmHz.js";import"./Option-CGYv30eN.js";import"./index-BrnoUve9.js";import"./SegmentedButton-QT7W_oDj.js";import"./index-fa2Z_Y62.js";import"./Select-C87V-1kl.js";import"./InvisibleMessage-CMW2idQ1.js";import"./slim-arrow-down-DeKj_Omp.js";import"./index-DuxSBgoz.js";import"./index-BGidFgA2.js";import"./index-DqUqhbMA.js";import"./index-Bqbzj0yD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLilwRFH.js";import"./group-2-CGyqUumC.js";import"./sort-descending-BOci2nTe.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-zQYKv0o9.js";import"./utils-Di9AT2dj.js";import"./index-C-AEjq-0.js";import"./index-CxGXb5fb.js";import"./index-DD2enJoe.js";import"./navigation-down-arrow-CCbQ8F9I.js";import"./navigation-right-arrow-DX-uF-k2.js";import"./navigation-right-arrow-Blea1uTb.js";import"./useCurrentTheme-BkZ7cZzQ.js";import"./index-nUwBPQlT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bvd5TkXY.js";import"./paper-plane-q7ULz0vY.js";import"./index-Yy2MGehE.js";import"./less-B94jky_m.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
