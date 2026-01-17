import{j as t}from"./iframe-plJY_px0.js";import{useMDXComponents as n}from"./index-CNgSdSBz.js";import{I as i,F as m}from"./CommandsAndQueries-CSEdQQvR.js";import{M as p,C as s}from"./blocks-Q5gmWwgb.js";import"./Tag-Dh3wWudw.js";import"./index-DSqDyml0.js";import"./copy-mR5XScRR.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-OXoTGLJY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2EbIuvCl.js";import"./index-CULtK81i.js";import"./index-D3V1C0u7.js";import"./Link-Bty8oyFV.js";import"./index-Dd7Sfpx-.js";import"./index-DfokaHEY.js";import"./index-B337CKIF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQsTwQe_.js";import"./addCustomCSSWithScoping-K4GM8_aQ.js";import"./index-t--BkPKT.js";import"./information-CFU4bu3b.js";import"./sys-enter-2-CWJ3J9PS.js";import"./alert-Cvpxudnd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DS99HCgK.js";import"./delete-eXKtkG1a.js";import"./settings-B4zUkila.js";import"./NoData-vjKh1Mr_.js";import"./IllustratedMessage-B3aadiAZ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-4tlbkylG.js";import"./index-DkneJmbW.js";import"./index-brt5d6po.js";import"./slim-arrow-down-BTqVQDWC.js";import"./Input-qu-i9z2w.js";import"./ResponsivePopoverCommon.css-C--dNoH7.js";import"./ValueStateMessage.css-65I0H3x5.js";import"./Suggestions.css-C34DaZQw.js";import"./ListBoxItemGroupTemplate--HwHHtzG.js";import"./ComboBoxItemGroup-CJJD_zkv.js";import"./ListItemBaseTemplate-DPXdBI9X.js";import"./Token-CtYzp5bp.js";import"./ScrollEnablement-C3kxd9Sb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Du-JodLR.js";import"./ToggleButton-BVbL9ept.js";import"./SuggestionItem-CSeK9fns.js";import"./index-BfNy1JVl.js";import"./Option-kaAYALSt.js";import"./index-C1pDbGHC.js";import"./SegmentedButton-CoeXh0KC.js";import"./index-B1eO7s43.js";import"./Select-BOpGp0Rm.js";import"./InvisibleMessage-fL3jWeDc.js";import"./slim-arrow-down-2gbZmUST.js";import"./index-B6yr2B_f.js";import"./index-k_dsVjf7.js";import"./index-CmDLye-F.js";import"./index-CKdbXzvk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Qq0nKm9O.js";import"./group-2-DmjkdZiv.js";import"./sort-descending-G3a3Bk4A.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BJvTlN0-.js";import"./utils-BmYl7bBX.js";import"./index-CuirFJHi.js";import"./index-jIxgqskF.js";import"./index-DnBhArpB.js";import"./navigation-down-arrow-CPK2vVem.js";import"./navigation-right-arrow-DzWp8vrQ.js";import"./navigation-right-arrow-CbRKCuia.js";import"./useCurrentTheme-CPuhdXAo.js";import"./index-CfCdmgBi.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmQyw8RD.js";import"./paper-plane-BzpUcvaz.js";import"./index-_e_VAWTV.js";import"./less-Cv2JCqO3.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
