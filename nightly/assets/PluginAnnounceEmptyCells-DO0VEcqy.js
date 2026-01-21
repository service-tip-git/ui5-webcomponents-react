import{j as t}from"./iframe-D9bcJVt0.js";import{useMDXComponents as n}from"./index-DEcJNjgo.js";import{I as i,F as m}from"./CommandsAndQueries-e_oDEhyZ.js";import{M as p,C as s}from"./blocks-jEcy0Ls1.js";import"./Tag-S7_09THp.js";import"./index-D7Hu_hwq.js";import"./copy-BEICJ5u7.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DLNw0oL7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DF6sI-fG.js";import"./index-CMrwt2SW.js";import"./index-C3UoEV3F.js";import"./Link-Bg4Kb6iX.js";import"./index-o9G_R3kL.js";import"./index-Dsq5N9Gi.js";import"./index-BuSBQB3f.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-saeF9JMt.js";import"./addCustomCSSWithScoping-BvxM2LWg.js";import"./index-CqnXC52g.js";import"./information-rD16map1.js";import"./sys-enter-2-mNekXiHd.js";import"./alert-DSYk_cjm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DhXMnXqd.js";import"./delete-CuHBZVP5.js";import"./settings-DojOHTGJ.js";import"./NoData-DV_7CgAU.js";import"./IllustratedMessage-JmaURS-8.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DKg5IlHC.js";import"./index-BDwBt9OC.js";import"./index-BkkfTKSR.js";import"./slim-arrow-down-BD5IYpYe.js";import"./Input-DgD_KIuK.js";import"./ResponsivePopoverCommon.css-CpNcVGzg.js";import"./ValueStateMessage.css-7nL_K-x6.js";import"./Suggestions.css-BXIA00KI.js";import"./ListBoxItemGroupTemplate-CjlaekqL.js";import"./ComboBoxItemGroup-Pa31sPb6.js";import"./ListItemBaseTemplate-CBhJdBlB.js";import"./Token-h6BGlN2Z.js";import"./ScrollEnablement-BWuQyb0_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CfYt_15D.js";import"./ToggleButton-D9sfR6lE.js";import"./SuggestionItem-CsdeB4_z.js";import"./index-CXj5AEqi.js";import"./Option-C6arWRGE.js";import"./index-18lR1lm6.js";import"./SegmentedButton-DQtRU8vV.js";import"./index-ByPvdeD4.js";import"./Select-4TgEfMLB.js";import"./InvisibleMessage-Dar0vH_K.js";import"./slim-arrow-down-DAxhtMM2.js";import"./index-CcVbj5Dn.js";import"./index-BvhLCcwp.js";import"./index-DLqaN8TD.js";import"./index-CZq9Z5fi.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ButLvEeW.js";import"./group-2-BIkQBEt2.js";import"./sort-descending-BdlxQXMC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4ESEe8gp.js";import"./utils-uixZui5c.js";import"./index-BQ0AYfKe.js";import"./index-L7kHwJYz.js";import"./index-dIC04Ydi.js";import"./navigation-down-arrow-DNphUK2M.js";import"./navigation-right-arrow-C7E9KFb7.js";import"./navigation-right-arrow-CWcAZOwt.js";import"./useCurrentTheme-_hoQyvx4.js";import"./index-yxoGO_zr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL--5EK8X_4.js";import"./paper-plane-xqMM7h3_.js";import"./index-BtA_KE9i.js";import"./less-5iCe7j9C.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
