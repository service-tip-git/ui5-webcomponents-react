import{j as e}from"./iframe-Crk1dOR8.js";import{useMDXComponents as i}from"./index-R8jXtLED.js";import{I as a,F as m}from"./CommandsAndQueries-OnXJs0rK.js";import{M as s,C as p}from"./blocks-DC75RB67.js";import"./Tag-Bw7tKX4O.js";import"./index-CACmyy9p.js";import{C as l}from"./ControlsWithNote-DVTn8clp.js";import"./copy-D_VyToZg.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DgxkA0YY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-F2nIq42R.js";import"./index-D2r_hMST.js";import"./index-K2kHsFSd.js";import"./Link-BHKq5JFv.js";import"./index-DvoETnoE.js";import"./index-CmobNXn6.js";import"./index-BW0zluCU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCgdgzPV.js";import"./addCustomCSSWithScoping-DLDk5l5Q.js";import"./index-DhFJLS7i.js";import"./information-YuxwihY0.js";import"./sys-enter-2-DLpc5Bbk.js";import"./alert-BQrPd1lR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bxy-cfhx.js";import"./delete-CyhoR1-x.js";import"./settings-DCnlQZPD.js";import"./NoData-DsbJ2Wb3.js";import"./IllustratedMessage-nKOTDNJc.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-t_oBNwfC.js";import"./index-CCh-mHqY.js";import"./index-BPXaNDRo.js";import"./slim-arrow-down-W9MNNw_u.js";import"./Input-CdoMhJ7q.js";import"./ResponsivePopoverCommon.css-CWK0u4Wt.js";import"./ValueStateMessage.css-B6Yu1ZOd.js";import"./Suggestions.css-D9mEdZF4.js";import"./ListBoxItemGroupTemplate-CD1d_PnD.js";import"./ComboBoxItemGroup-BcvTejR3.js";import"./ListItemBaseTemplate-ChpQCm05.js";import"./Token-2Y_wwcCo.js";import"./ScrollEnablement-CgGNqNYL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-m90ft9fO.js";import"./ToggleButton-D-b4ypKX.js";import"./SuggestionItem-BW3fUUjZ.js";import"./index-C7Lon1Bh.js";import"./Option-ByUi6-KI.js";import"./index-Bh8NMrS9.js";import"./SegmentedButton-DNBQsKKg.js";import"./index-C1TKRwfK.js";import"./Select-D0g7SDMw.js";import"./InvisibleMessage-DpJUGs_4.js";import"./slim-arrow-down-CJ_Lgolz.js";import"./index-CYjSUM3h.js";import"./index-CLkqgh3m.js";import"./index-BbH0YSzC.js";import"./index-FAzfBcds.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ziA0Ay5P.js";import"./group-2-3sV-WrZR.js";import"./sort-descending-BWp52hph.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Zzwzp3a_.js";import"./utils-C0yBiuVB.js";import"./index-DgcfWpn9.js";import"./index-CgKmmuuU.js";import"./index-BD_evJiC.js";import"./navigation-down-arrow-B8WKWh1B.js";import"./navigation-right-arrow-BEBvQFEq.js";import"./navigation-right-arrow-D13mADge.js";import"./useCurrentTheme-DEz25XUz.js";import"./index-Bx1EFR65.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CEOwLdyi.js";import"./paper-plane-BiKcq-Zy.js";import"./index-B2Orb9H-.js";import"./less-B6ZC-ovs.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(a,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(p,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(l,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    enableMultiSort: true
  },
  {
    Header: 'Age',
    accessor: 'age',
    enableMultiSort: true
  },
  {
    Header: 'Name 2',
    accessor: 'name2',
    enableMultiSort: true
  },
  {
    Header: 'Age 2',
    accessor: 'age2',
    enableMultiSort: true
  }
];
const data = [
  { name: 'Peter', age: 40, name2: 'Alissa', age2: 18 },
  { name: 'Kristen', age: 40, name2: 'Randolph', age2: 21 },
  { name: 'Peter', age: 30, name2: 'Rose', age2: 90 },
  { name: 'Peter', age: 70, name2: 'Rose', age2: 22 },
  { name: 'Kristen', age: 60, name2: 'Willis', age2: 80 },
  { name: 'Kristen', age: 20, name2: 'Alissa', age2: 80 },
  { name: 'Graham', age: 40, name2: 'Alissa', age2: 80 },
  { name: 'Peter', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Willis', age2: 26 },
  { name: 'Graham', age: 62, name2: 'Willis', age2: 26 }
];
const orderedIds = ['name', 'name2', 'age', 'age2'];
const tableHooks = [useOrderedMultiSort(orderedIds)]; // should be memoized
const TableComponent = () => {
  return (
    <AnalyticalTable
      columns={columns}
      data={data}
      sortable
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(m,{})]})}function Ke(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Ke as default};
