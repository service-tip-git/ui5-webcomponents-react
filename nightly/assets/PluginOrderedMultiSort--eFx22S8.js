import{j as e}from"./iframe-DnQpmgA6.js";import{useMDXComponents as i}from"./index-m6rQOag9.js";import{I as a,F as m}from"./CommandsAndQueries-DCeHCX1A.js";import{M as s,C as p}from"./blocks-DIAHYmsO.js";import"./Tag-CCLxzbm_.js";import"./index-BNSawElR.js";import{C as l}from"./ControlsWithNote-Bq534o6H.js";import"./copy-fbHgidly.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-9n2KIugs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqBVEfNK.js";import"./index-B_h56NIO.js";import"./index-DqLOis9Y.js";import"./Link-TucI8b8Q.js";import"./index-DqMOHWxY.js";import"./index-C-imFhL9.js";import"./index-L15nOwrJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2yHaKcn.js";import"./addCustomCSSWithScoping-DBwRz57F.js";import"./index-DxN0YEHZ.js";import"./information-Dr8YEhs5.js";import"./sys-enter-2-Bl9jtIfu.js";import"./alert-DI-0b8x_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BDBV03jP.js";import"./delete-DEaH-QMQ.js";import"./settings-Y1HrJ1Be.js";import"./NoData-CeQyUEKi.js";import"./IllustratedMessage-BmE39Sz_.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DcdliNxr.js";import"./index-DlcKtOvu.js";import"./index-DmDTWCkI.js";import"./slim-arrow-down-bqQZFEzo.js";import"./Input-CFSHOVLn.js";import"./ResponsivePopoverCommon.css-DPwPWHul.js";import"./ValueStateMessage.css-DhleDcPv.js";import"./Suggestions.css-Bt_4dqwC.js";import"./ListBoxItemGroupTemplate-OyTsfH68.js";import"./ComboBoxItemGroup-CL9AHdXR.js";import"./ListItemBaseTemplate-BENNhCLG.js";import"./Token-CCdz11AY.js";import"./ScrollEnablement-Vy5r4Z-H.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CbLH-mve.js";import"./ToggleButton-IDcSTjtk.js";import"./SuggestionItem-BJHpd9Tu.js";import"./index-CFAiARvU.js";import"./Option-q0-CYUub.js";import"./index-BVmq-K4P.js";import"./SegmentedButton-B9JgMyuK.js";import"./index-BkZL85Pv.js";import"./Select-Cz0Q93PZ.js";import"./InvisibleMessage-Cl67Ph06.js";import"./slim-arrow-down-C4oPdCY4.js";import"./index-JFfX52ZD.js";import"./index-BuVSgPW5.js";import"./index-DVQ4HkFg.js";import"./index-C89oEcpH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIL8SXRk.js";import"./group-2-D8yPI7nW.js";import"./sort-descending-Dd5yu8uD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BnUH6T6C.js";import"./utils-DvbIUQmI.js";import"./index-DBXZXDyB.js";import"./index-CxxXXamh.js";import"./index-BEE3e02q.js";import"./navigation-down-arrow-81WXcHgL.js";import"./navigation-right-arrow-ByFxVnQf.js";import"./navigation-right-arrow-C7f932cn.js";import"./useCurrentTheme-4919pBsT.js";import"./index-PqqIWEPc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-djYEqh-T.js";import"./paper-plane-_it-Hq1r.js";import"./index-Btlv6fLI.js";import"./less-ClggAEde.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
