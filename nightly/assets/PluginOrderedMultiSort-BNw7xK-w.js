import{j as e}from"./iframe-w0_MYrZh.js";import{useMDXComponents as i}from"./index-BycN9fOm.js";import{I as a,F as m}from"./CommandsAndQueries-BLQv3roD.js";import{M as s,C as p}from"./blocks-DJOHNqcV.js";import"./Tag-BpDpCVC0.js";import"./index-De2hY3Dy.js";import{C as l}from"./ControlsWithNote-CVj_NA8J.js";import"./copy-D2R0vLQ4.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DBKY7q4K.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0GVc7AW.js";import"./index-URs7g74M.js";import"./index-BgtBDdHh.js";import"./Link-BZHTtj1b.js";import"./index-D2-ZQ1Lf.js";import"./index-BD0pDq5_.js";import"./index-CJZSgnB8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D4L-H8MS.js";import"./addCustomCSSWithScoping-BxnbVzCY.js";import"./index-vKqE_SS0.js";import"./information-DqXgTAXV.js";import"./sys-enter-2-BeQRv1GM.js";import"./alert-CuXO44HU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dprp07lb.js";import"./delete-BCvmEI5O.js";import"./settings-C3yqhbag.js";import"./NoData-QRZWZJd0.js";import"./IllustratedMessage-T-nSz2oL.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-5v4MWfGb.js";import"./index-DBuLBnCn.js";import"./index-ZUmmbONo.js";import"./slim-arrow-down-_tiVkR_W.js";import"./Input-B947RaFp.js";import"./ResponsivePopoverCommon.css-CIKpOnPy.js";import"./ValueStateMessage.css-DwWJ9RXg.js";import"./Suggestions.css-BNHIGeRt.js";import"./ListBoxItemGroupTemplate-BE7ZF0yd.js";import"./ComboBoxItemGroup-j-ogm9Es.js";import"./ListItemBaseTemplate-hZITbmoX.js";import"./Token-wyHKBYA3.js";import"./ScrollEnablement--wSGuTgj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-PkfEJwLh.js";import"./ToggleButton-CZdaKOxJ.js";import"./SuggestionItem-MmtuVuyI.js";import"./index-BY2KfaQI.js";import"./Option-C_lYdTgQ.js";import"./index-2BstYlQB.js";import"./SegmentedButton-FkSSjm_Z.js";import"./index-WmGREpLP.js";import"./Select-C7o0oMjf.js";import"./InvisibleMessage-RrW4HMOA.js";import"./slim-arrow-down-bs2ksNJ4.js";import"./index-BPXy1nrS.js";import"./index-BbJ5v37o.js";import"./index-Dz8tpwGV.js";import"./index-Cw510Bsp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Vokmh8yA.js";import"./group-2-DbZe8PL5.js";import"./sort-descending-BDE1i8DR.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BtYKWXyc.js";import"./utils-WBofKG4w.js";import"./index-B_sa1bRi.js";import"./index-mtpe59v8.js";import"./index-DUsoVupR.js";import"./navigation-down-arrow-Df6Mn4at.js";import"./navigation-right-arrow-Bk6HMVMe.js";import"./navigation-right-arrow-R9P1yLbk.js";import"./useCurrentTheme-B5gLxteq.js";import"./index-DqstkdJN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-YFdiD547.js";import"./paper-plane-BLf9WuxO.js";import"./index-BwZ6X2fE.js";import"./less-B5EuyQX2.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
