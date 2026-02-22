import{j as t}from"./iframe-DnQpmgA6.js";import{useMDXComponents as n}from"./index-m6rQOag9.js";import{I as i,F as m}from"./CommandsAndQueries-DCeHCX1A.js";import{M as p,C as s}from"./blocks-DIAHYmsO.js";import"./Tag-CCLxzbm_.js";import"./index-BNSawElR.js";import"./copy-fbHgidly.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-9n2KIugs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqBVEfNK.js";import"./index-B_h56NIO.js";import"./index-DqLOis9Y.js";import"./Link-TucI8b8Q.js";import"./index-DqMOHWxY.js";import"./index-C-imFhL9.js";import"./index-L15nOwrJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2yHaKcn.js";import"./addCustomCSSWithScoping-DBwRz57F.js";import"./index-DxN0YEHZ.js";import"./information-Dr8YEhs5.js";import"./sys-enter-2-Bl9jtIfu.js";import"./alert-DI-0b8x_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BDBV03jP.js";import"./delete-DEaH-QMQ.js";import"./settings-Y1HrJ1Be.js";import"./NoData-CeQyUEKi.js";import"./IllustratedMessage-BmE39Sz_.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DcdliNxr.js";import"./index-DlcKtOvu.js";import"./index-DmDTWCkI.js";import"./slim-arrow-down-bqQZFEzo.js";import"./Input-CFSHOVLn.js";import"./ResponsivePopoverCommon.css-DPwPWHul.js";import"./ValueStateMessage.css-DhleDcPv.js";import"./Suggestions.css-Bt_4dqwC.js";import"./ListBoxItemGroupTemplate-OyTsfH68.js";import"./ComboBoxItemGroup-CL9AHdXR.js";import"./ListItemBaseTemplate-BENNhCLG.js";import"./Token-CCdz11AY.js";import"./ScrollEnablement-Vy5r4Z-H.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CbLH-mve.js";import"./ToggleButton-IDcSTjtk.js";import"./SuggestionItem-BJHpd9Tu.js";import"./index-CFAiARvU.js";import"./Option-q0-CYUub.js";import"./index-BVmq-K4P.js";import"./SegmentedButton-B9JgMyuK.js";import"./index-BkZL85Pv.js";import"./Select-Cz0Q93PZ.js";import"./InvisibleMessage-Cl67Ph06.js";import"./slim-arrow-down-C4oPdCY4.js";import"./index-JFfX52ZD.js";import"./index-BuVSgPW5.js";import"./index-DVQ4HkFg.js";import"./index-C89oEcpH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIL8SXRk.js";import"./group-2-D8yPI7nW.js";import"./sort-descending-Dd5yu8uD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BnUH6T6C.js";import"./utils-DvbIUQmI.js";import"./index-DBXZXDyB.js";import"./index-CxxXXamh.js";import"./index-BEE3e02q.js";import"./navigation-down-arrow-81WXcHgL.js";import"./navigation-right-arrow-ByFxVnQf.js";import"./navigation-right-arrow-C7f932cn.js";import"./useCurrentTheme-4919pBsT.js";import"./index-PqqIWEPc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-djYEqh-T.js";import"./paper-plane-_it-Hq1r.js";import"./index-Btlv6fLI.js";import"./less-ClggAEde.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
