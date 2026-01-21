import{j as t}from"./iframe-Crk1dOR8.js";import{useMDXComponents as n}from"./index-R8jXtLED.js";import{I as i,F as m}from"./CommandsAndQueries-OnXJs0rK.js";import{M as p,C as s}from"./blocks-DC75RB67.js";import"./Tag-Bw7tKX4O.js";import"./index-CACmyy9p.js";import"./copy-D_VyToZg.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DgxkA0YY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-F2nIq42R.js";import"./index-D2r_hMST.js";import"./index-K2kHsFSd.js";import"./Link-BHKq5JFv.js";import"./index-DvoETnoE.js";import"./index-CmobNXn6.js";import"./index-BW0zluCU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCgdgzPV.js";import"./addCustomCSSWithScoping-DLDk5l5Q.js";import"./index-DhFJLS7i.js";import"./information-YuxwihY0.js";import"./sys-enter-2-DLpc5Bbk.js";import"./alert-BQrPd1lR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bxy-cfhx.js";import"./delete-CyhoR1-x.js";import"./settings-DCnlQZPD.js";import"./NoData-DsbJ2Wb3.js";import"./IllustratedMessage-nKOTDNJc.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-t_oBNwfC.js";import"./index-CCh-mHqY.js";import"./index-BPXaNDRo.js";import"./slim-arrow-down-W9MNNw_u.js";import"./Input-CdoMhJ7q.js";import"./ResponsivePopoverCommon.css-CWK0u4Wt.js";import"./ValueStateMessage.css-B6Yu1ZOd.js";import"./Suggestions.css-D9mEdZF4.js";import"./ListBoxItemGroupTemplate-CD1d_PnD.js";import"./ComboBoxItemGroup-BcvTejR3.js";import"./ListItemBaseTemplate-ChpQCm05.js";import"./Token-2Y_wwcCo.js";import"./ScrollEnablement-CgGNqNYL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-m90ft9fO.js";import"./ToggleButton-D-b4ypKX.js";import"./SuggestionItem-BW3fUUjZ.js";import"./index-C7Lon1Bh.js";import"./Option-ByUi6-KI.js";import"./index-Bh8NMrS9.js";import"./SegmentedButton-DNBQsKKg.js";import"./index-C1TKRwfK.js";import"./Select-D0g7SDMw.js";import"./InvisibleMessage-DpJUGs_4.js";import"./slim-arrow-down-CJ_Lgolz.js";import"./index-CYjSUM3h.js";import"./index-CLkqgh3m.js";import"./index-BbH0YSzC.js";import"./index-FAzfBcds.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ziA0Ay5P.js";import"./group-2-3sV-WrZR.js";import"./sort-descending-BWp52hph.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Zzwzp3a_.js";import"./utils-C0yBiuVB.js";import"./index-DgcfWpn9.js";import"./index-CgKmmuuU.js";import"./index-BD_evJiC.js";import"./navigation-down-arrow-B8WKWh1B.js";import"./navigation-right-arrow-BEBvQFEq.js";import"./navigation-right-arrow-D13mADge.js";import"./useCurrentTheme-DEz25XUz.js";import"./index-Bx1EFR65.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CEOwLdyi.js";import"./paper-plane-BiKcq-Zy.js";import"./index-B2Orb9H-.js";import"./less-B6ZC-ovs.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
