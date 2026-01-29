import{j as e}from"./iframe-OB3gpUrt.js";import{useMDXComponents as i}from"./index-tYZXwc8M.js";import{I as a,F as m}from"./CommandsAndQueries-DdKCqOgb.js";import{M as s,C as p}from"./blocks-W1zrio7-.js";import"./Tag-BYZWsksY.js";import"./index-DTbk-QpW.js";import{C as l}from"./ControlsWithNote-C3g8pWjY.js";import"./copy-Cn9jluxF.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Dj2Ui42u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YBnae26q.js";import"./index-DJjROlPg.js";import"./index-KwKt-eeL.js";import"./Link-04tQrlfI.js";import"./index-DeGKliVC.js";import"./index-CGtjIa9c.js";import"./index-BZk-qSok.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B6If5ETY.js";import"./addCustomCSSWithScoping-DcUbYumu.js";import"./index-DSe1Jsyu.js";import"./information-EFB093TQ.js";import"./sys-enter-2-BDVh3TOJ.js";import"./alert-kdfQmJam.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPHD3nDA.js";import"./delete-BIeDl-Ta.js";import"./settings-CTUquDVY.js";import"./NoData-n8Nq-IT5.js";import"./IllustratedMessage-t7HTQHsk.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DIPdowOu.js";import"./index-CanaeHWT.js";import"./index-RQHb4HK-.js";import"./slim-arrow-down-DYGYxXVh.js";import"./Input-DK8mjIq4.js";import"./ResponsivePopoverCommon.css-D14pwlR9.js";import"./ValueStateMessage.css-BhAYjEKZ.js";import"./Suggestions.css-HKZ3bD8M.js";import"./ListBoxItemGroupTemplate-CeZ64DwH.js";import"./ComboBoxItemGroup-DdcF-j7O.js";import"./ListItemBaseTemplate-BKr4_BQZ.js";import"./Token-BI74ljUx.js";import"./ScrollEnablement-FujgOftY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cF0IxW3X.js";import"./ToggleButton-fgX17mlx.js";import"./SuggestionItem-C0SAz8sz.js";import"./index-Btplke0T.js";import"./Option-CflwkonD.js";import"./index-pcXHjSUb.js";import"./SegmentedButton-om5uqAak.js";import"./index-CHsEA-_K.js";import"./Select-2koy19zz.js";import"./InvisibleMessage-B3GDFN-r.js";import"./slim-arrow-down-_hqmKTXT.js";import"./index-NoU0USPq.js";import"./index-DWl07NkK.js";import"./index-CFAbp54K.js";import"./index-BI78Dgdb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pNoIBhlO.js";import"./group-2-6ULYOJW8.js";import"./sort-descending-DnjMAKvJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-98n-Rp.js";import"./utils-BkqRVCAz.js";import"./index-ezjhGbTq.js";import"./index-DLl3Lmz6.js";import"./index-DTksDkVP.js";import"./navigation-down-arrow-veqq6R5P.js";import"./navigation-right-arrow-BpamG8Wu.js";import"./navigation-right-arrow-5Ow3qQi6.js";import"./useCurrentTheme-CxwmJY3a.js";import"./index-owm7Dkhx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-MRQZvrlb.js";import"./paper-plane-zFWohFwR.js";import"./index-B189vp1A.js";import"./less-BuCilNou.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
