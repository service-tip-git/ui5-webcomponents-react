import{j as t}from"./iframe-OB3gpUrt.js";import{useMDXComponents as n}from"./index-tYZXwc8M.js";import{I as i,F as m}from"./CommandsAndQueries-DdKCqOgb.js";import{M as p,C as s}from"./blocks-W1zrio7-.js";import"./Tag-BYZWsksY.js";import"./index-DTbk-QpW.js";import"./copy-Cn9jluxF.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dj2Ui42u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YBnae26q.js";import"./index-DJjROlPg.js";import"./index-KwKt-eeL.js";import"./Link-04tQrlfI.js";import"./index-DeGKliVC.js";import"./index-CGtjIa9c.js";import"./index-BZk-qSok.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B6If5ETY.js";import"./addCustomCSSWithScoping-DcUbYumu.js";import"./index-DSe1Jsyu.js";import"./information-EFB093TQ.js";import"./sys-enter-2-BDVh3TOJ.js";import"./alert-kdfQmJam.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPHD3nDA.js";import"./delete-BIeDl-Ta.js";import"./settings-CTUquDVY.js";import"./NoData-n8Nq-IT5.js";import"./IllustratedMessage-t7HTQHsk.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DIPdowOu.js";import"./index-CanaeHWT.js";import"./index-RQHb4HK-.js";import"./slim-arrow-down-DYGYxXVh.js";import"./Input-DK8mjIq4.js";import"./ResponsivePopoverCommon.css-D14pwlR9.js";import"./ValueStateMessage.css-BhAYjEKZ.js";import"./Suggestions.css-HKZ3bD8M.js";import"./ListBoxItemGroupTemplate-CeZ64DwH.js";import"./ComboBoxItemGroup-DdcF-j7O.js";import"./ListItemBaseTemplate-BKr4_BQZ.js";import"./Token-BI74ljUx.js";import"./ScrollEnablement-FujgOftY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cF0IxW3X.js";import"./ToggleButton-fgX17mlx.js";import"./SuggestionItem-C0SAz8sz.js";import"./index-Btplke0T.js";import"./Option-CflwkonD.js";import"./index-pcXHjSUb.js";import"./SegmentedButton-om5uqAak.js";import"./index-CHsEA-_K.js";import"./Select-2koy19zz.js";import"./InvisibleMessage-B3GDFN-r.js";import"./slim-arrow-down-_hqmKTXT.js";import"./index-NoU0USPq.js";import"./index-DWl07NkK.js";import"./index-CFAbp54K.js";import"./index-BI78Dgdb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pNoIBhlO.js";import"./group-2-6ULYOJW8.js";import"./sort-descending-DnjMAKvJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-98n-Rp.js";import"./utils-BkqRVCAz.js";import"./index-ezjhGbTq.js";import"./index-DLl3Lmz6.js";import"./index-DTksDkVP.js";import"./navigation-down-arrow-veqq6R5P.js";import"./navigation-right-arrow-BpamG8Wu.js";import"./navigation-right-arrow-5Ow3qQi6.js";import"./useCurrentTheme-CxwmJY3a.js";import"./index-owm7Dkhx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-MRQZvrlb.js";import"./paper-plane-zFWohFwR.js";import"./index-B189vp1A.js";import"./less-BuCilNou.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
