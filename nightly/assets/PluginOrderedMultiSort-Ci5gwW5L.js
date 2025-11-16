import{j as e}from"./iframe-DQawrgT_.js";import{useMDXComponents as i}from"./index-BmmNdxGP.js";import{I as a,F as m}from"./CommandsAndQueries-8E8N5Jf5.js";import{M as s,C as p}from"./blocks-CsjIrgm8.js";import"./Tag-DINZ5J-5.js";import"./index-CkLsOSwH.js";import{C as l}from"./ControlsWithNote-DRFCFxGt.js";import"./copy-BfmM2Dw-.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-W25A3oS9.js";import"./preload-helper-PPVm8Dsz.js";import"./index--1fmb9ws.js";import"./index-CaSLC49k.js";import"./index-lL1wxGfG.js";import"./Link-QZkGNwXr.js";import"./index-C4mOCO1v.js";import"./index-BpUdR17T.js";import"./index-DXw92D-i.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D6QKJZ6-.js";import"./addCustomCSSWithScoping-CIoyfOLu.js";import"./index-DkjHlZC9.js";import"./information-DvV6iDHk.js";import"./sys-enter-2-DVOKgY3M.js";import"./alert-D1Pqx8x8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-X9zi8Na2.js";import"./delete-C6HzY21G.js";import"./settings-CWp1p9X4.js";import"./NoData-CDBUvfvl.js";import"./IllustratedMessage-uso3zTnf.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BsZDo7Xz.js";import"./index--kps9BoF.js";import"./index-Cu2d-9NT.js";import"./slim-arrow-down-CrV_EoZ-.js";import"./Input-C1pWyBfA.js";import"./ResponsivePopoverCommon.css-CRDo6imn.js";import"./ValueStateMessage.css-yU9YlQTC.js";import"./Suggestions.css-DGIsZFtp.js";import"./ListBoxItemGroupTemplate-Qgb7Il2A.js";import"./ComboBoxItemGroup-DDKZCgRF.js";import"./ListItemBaseTemplate-CYGq7w02.js";import"./Token-Bd0t7DDi.js";import"./ScrollEnablement-CFUBLAVD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRn-lKzQ.js";import"./ToggleButton-B-hCXMIV.js";import"./SuggestionItem-m6DAn-I2.js";import"./index-BSgkgR9j.js";import"./Option-C4LQWtvA.js";import"./index-msmsJC20.js";import"./SegmentedButton-CERSbuxP.js";import"./index-cFycgftA.js";import"./Select-UWywW-TM.js";import"./InvisibleMessage-B4vU3xgw.js";import"./slim-arrow-down-ZC2auWSc.js";import"./index-BpZszSRc.js";import"./index-DJB11urr.js";import"./index-B7bKPaYO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DgoHoVwF.js";import"./group-2-Do0Gpjo4.js";import"./sort-descending-CnWvzCuF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DTd36afj.js";import"./utils-B9VO5sCv.js";import"./index-Cd39OiMQ.js";import"./index-hk4pV2sf.js";import"./index-DOxhRrM_.js";import"./navigation-down-arrow-B6UI6hGh.js";import"./navigation-right-arrow-D1f_1Cvf.js";import"./navigation-right-arrow-Dbgs5rW1.js";import"./useCurrentTheme-Mk8c19Xo.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DMMeBvKD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B1ti3bb-.js";import"./paper-plane-CJkMjDJU.js";import"./index-DehgxQHc.js";import"./less-Djjr01dD.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
