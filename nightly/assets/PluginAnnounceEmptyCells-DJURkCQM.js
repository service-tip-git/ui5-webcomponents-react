import{j as t}from"./iframe-DOg6M_II.js";import{useMDXComponents as n}from"./index-kwVVcFLm.js";import{I as i,F as m}from"./CommandsAndQueries-wl0h9BMr.js";import{M as p,C as s}from"./blocks-CUc5S4F5.js";import"./Tag-BltckGaY.js";import"./index-bsC8MgY-.js";import"./copy-BKSrEciR.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BIWbaJdZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwpJeIal.js";import"./index-DVpre6_h.js";import"./index-B0K8C7sE.js";import"./Link-CDmjIio6.js";import"./index-DMnxNTo_.js";import"./index-BEZkwnlN.js";import"./index-BdRkl8ET.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Drkj1-4P.js";import"./addCustomCSSWithScoping-DpPx9qfb.js";import"./index-DS0sFSVa.js";import"./information-BuhVNJUa.js";import"./sys-enter-2-DbIwdKeB.js";import"./alert-BRGoaqba.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CLCBV3Xg.js";import"./delete-D-43NgF8.js";import"./settings-Delvnyut.js";import"./NoData-ByUhu_o5.js";import"./IllustratedMessage-diAipt8-.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-gN2Us1tn.js";import"./index-B9k7ELm0.js";import"./index-B_vYmLao.js";import"./slim-arrow-down-BjniYreE.js";import"./Input-C9rpsAyC.js";import"./ResponsivePopoverCommon.css-C0PtYRqH.js";import"./ValueStateMessage.css-CZYppwl8.js";import"./Suggestions.css-Ixrm98By.js";import"./ListBoxItemGroupTemplate-BDzOYuSZ.js";import"./ComboBoxItemGroup-BU19uPT9.js";import"./ListItemBaseTemplate-hoIzMUwH.js";import"./Token-iSuK3wO6.js";import"./ScrollEnablement-BMPvWcSr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrVmc6dv.js";import"./ToggleButton-CsKP69jd.js";import"./SuggestionItem-D-yPu1Sv.js";import"./index-Mf92dVtq.js";import"./Option-DNSpB8f-.js";import"./index-BCTwa-v4.js";import"./SegmentedButton-DNK1Qa2S.js";import"./index-Cs3-egX0.js";import"./Select-BDYl_oCe.js";import"./InvisibleMessage-DycTFmVM.js";import"./slim-arrow-down-DfFKFXMU.js";import"./index-VxedkpRq.js";import"./index-CH3b2kB8.js";import"./index-CISwnltl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bi2MAW2I.js";import"./group-2-MmNiSVbN.js";import"./sort-descending-CD9YT9Bk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B_KBcAtw.js";import"./utils-0ELTneL-.js";import"./index-DFQjFJ3S.js";import"./index-DM2b0yOa.js";import"./index-BeSrSbRo.js";import"./navigation-down-arrow-CyIa-Usz.js";import"./navigation-right-arrow-BLaN-JkZ.js";import"./navigation-right-arrow-CqWeCK0J.js";import"./useCurrentTheme-DESyq6Ge.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CO9CMtFr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CA7b8y0H.js";import"./paper-plane-BSmmtRX7.js";import"./index-DMnTXtcq.js";import"./less-CZFOeLNB.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
