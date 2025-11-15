import{j as e}from"./iframe-RECRoZhV.js";import{useMDXComponents as i}from"./index-1tzPRbI6.js";import{I as a,F as m}from"./CommandsAndQueries-DPpsoP9s.js";import{M as s,C as p}from"./blocks-CH1yi1wC.js";import"./Tag-BCmfqboN.js";import"./index-CfNZ4QaZ.js";import{C as l}from"./ControlsWithNote-8guUQjqU.js";import"./copy-B_omwcq7.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BjvilGb7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CB0t3Ndr.js";import"./index-D1It_vMD.js";import"./index-DGKmMzEm.js";import"./Link-BZUDNGRG.js";import"./index-lc4LLOiH.js";import"./index-Dk8UUcOY.js";import"./index-Rgh5WsNa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bozn53qz.js";import"./addCustomCSSWithScoping-Uy-s1Hcf.js";import"./index-5drqvW0T.js";import"./information-D6UQivs-.js";import"./sys-enter-2-CMoukZNH.js";import"./alert-BjbREM6S.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bz2chLzI.js";import"./delete-DogqfZ3E.js";import"./settings-lCutP8dK.js";import"./NoData-llz9PG9F.js";import"./IllustratedMessage-CKo1bCpT.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Dc_PXms6.js";import"./index-DX4imUhW.js";import"./index-D4ozyLie.js";import"./slim-arrow-down-CT6VdoUI.js";import"./Input-DlayT0fi.js";import"./ResponsivePopoverCommon.css-D2fANVRT.js";import"./ValueStateMessage.css-D4UTir1H.js";import"./Suggestions.css-CDvWi9BJ.js";import"./ListBoxItemGroupTemplate-BBFkEoXO.js";import"./ComboBoxItemGroup-C70F9qVi.js";import"./ListItemBaseTemplate-PhRm9Z1E.js";import"./Token-BWzNh8w7.js";import"./ScrollEnablement-BRHtS9Y6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CghTaqTk.js";import"./ToggleButton-CUxngjtj.js";import"./SuggestionItem-CC-vpnLD.js";import"./index-BjlvmRlS.js";import"./Option-CUfEccr7.js";import"./index-Da_u9t8p.js";import"./SegmentedButton-Boemh7ns.js";import"./index-D3Kr9jBp.js";import"./Select-D_Yo3ITd.js";import"./InvisibleMessage-k_rSJSP0.js";import"./slim-arrow-down-kuIl5ttD.js";import"./index-BEBnT4-a.js";import"./index-KQsXY6-N.js";import"./index-CXzJLeoO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXPu933P.js";import"./group-2-jhaWfOW9.js";import"./sort-descending-BHyYxadY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DO_r9pCl.js";import"./utils-B4YULW7_.js";import"./index-DHf7Rwdf.js";import"./index-DHz2T6Sp.js";import"./index-C9_jR0jd.js";import"./navigation-down-arrow-DwtmqN-Q.js";import"./navigation-right-arrow-CIZgBpjX.js";import"./navigation-right-arrow-CoJr-ET_.js";import"./useCurrentTheme-CscTi93E.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DbY2gDlc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-U4IYdiJl.js";import"./paper-plane-Cs6XxyXF.js";import"./index-D_b6lk6Z.js";import"./less-Cg20nryA.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
