import{j as t}from"./iframe-DGGZytBJ.js";import{useMDXComponents as i}from"./index-D8y7UPZ7.js";import{I as n}from"./CommandsAndQueries-D_r1Ov46.js";import{M as m,C as p}from"./blocks-C1QAXsZr.js";import"./Tag-ClZ3M_pH.js";import"./index-v17LESiz.js";import"./copy-BPr0Zg61.js";import{F as s}from"./Footer-BZbEK1zw.js";import"./PageNotFound-3fOtIs4_.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CUL54hGv.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BtfuXmst.js";import"./index-DJziCtzG.js";import"./index-CeBSKfFB.js";import"./index-b7sAROVa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEpKqDTh.js";import"./addCustomCSSWithScoping-DahugnlS.js";import"./index-4SX8_eNa.js";import"./index-ctFb2r21.js";import"./index-DZeitEZj.js";import"./information-D_lZSOlz.js";import"./sys-enter-2-DzyKamY9.js";import"./alert--InUH-4I.js";import"./index-B54b-1ni.js";import"./Illustrations-BSUAI0rE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B84HYl_E.js";import"./delete-SJdH7pQ4.js";import"./settings-CAJyZbbd.js";import"./NoData-C4BqacGP.js";import"./NoFilterResults-BL8qBwn1.js";import"./index-BU5FNxMY.js";import"./IllustratedMessage-_jEEabQa.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-JDHBBDHb.js";import"./Input-BOYCocWs.js";import"./ResponsivePopoverCommon.css-CuamSE7y.js";import"./ValueStateMessage.css-DuNfrXP7.js";import"./Suggestions.css-COf1yHSo.js";import"./ListBoxItemGroupTemplate-2xWZNDwK.js";import"./ComboBoxItemGroup-D5uN8nOJ.js";import"./ListItemBaseTemplate-oQlxc1lO.js";import"./Token-cQg9GVNS.js";import"./ScrollEnablement-DwIhDXw6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-R9GFPOIC.js";import"./ToggleButton-CgFbbSab.js";import"./multiselect-all-Njl7KSgU.js";import"./SuggestionItem-vp3O8px8.js";import"./index-CJkDWZAj.js";import"./Option-l5eTmgDe.js";import"./index-BA5YYjZc.js";import"./SegmentedButton-DQ6hDiRi.js";import"./index-EXDyYm2C.js";import"./Select-C1jqGXCC.js";import"./InvisibleMessage-D_iVEZ-h.js";import"./index-BTLt7o1c.js";import"./index-0M7GCjcp.js";import"./index-CRnXDqjI.js";import"./index-n1TR-N6l.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pGciUh9e.js";import"./group-2-BfNzp3f2.js";import"./sort-descending-D9abY-SU.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DuFRV_vn.js";import"./utils-BfyCZP0-.js";import"./index-CR_QxdVU.js";import"./index-Dpn5zcT7.js";import"./index-Dp-mv8t6.js";import"./navigation-down-arrow-Tmk039L5.js";import"./navigation-right-arrow-BYzIZaOi.js";import"./navigation-right-arrow-cBTAD0Yi.js";import"./useCurrentTheme-BkGgWsWg.js";import"./index-BZwsWFyc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BEA5tLHH.js";import"./paper-plane-lDy3rZNF.js";import"./index-D64P37aV.js";import"./less-CQhJ4OcE.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
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
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
