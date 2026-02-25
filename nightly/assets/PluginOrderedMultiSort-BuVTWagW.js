import{j as e}from"./iframe-BQI8iJtZ.js";import{useMDXComponents as i}from"./index-l_Dh7Y-d.js";import{I as a,F as m}from"./CommandsAndQueries-BH0I_jDK.js";import{M as s,C as p}from"./blocks-Dm7btFzZ.js";import"./Tag-D2JKRyPD.js";import"./index-Bd5bxmR8.js";import{C as l}from"./ControlsWithNote-Oja_q1_6.js";import"./copy-Wr9Hnpdu.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Co6ciUmv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDHutJWz.js";import"./index-CdGithLr.js";import"./index-y23wvc_L.js";import"./Link-C9lbVSnw.js";import"./index-CP42RXg5.js";import"./index-CixO9GRI.js";import"./index-CjJMvaDa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DMLN5SEy.js";import"./addCustomCSSWithScoping-C30TCMVD.js";import"./index-CC6FubQ3.js";import"./information-DhTwMCvW.js";import"./sys-enter-2-B4_axdEE.js";import"./alert-D_lKNn7T.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DqBLgsFv.js";import"./delete-DN8wM4l0.js";import"./settings-vSGnaQMo.js";import"./NoData-BqNhr66z.js";import"./IllustratedMessage-qImrSjau.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CwkhrkCY.js";import"./index-C7KjXWDM.js";import"./index-zxMVpEDh.js";import"./slim-arrow-down-QOUojnnL.js";import"./Input-2UrWgipO.js";import"./ResponsivePopoverCommon.css-gVvV0tmb.js";import"./ValueStateMessage.css-BxkCLEc_.js";import"./Suggestions.css-CPeYy0BW.js";import"./ListBoxItemGroupTemplate-BBLM1Bt8.js";import"./ComboBoxItemGroup-CoFNAlZu.js";import"./ListItemBaseTemplate-2jk2aB8o.js";import"./Token-B68uFNrG.js";import"./ScrollEnablement-B8byLzsv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDy0Ge3B.js";import"./ToggleButton-B2NYYGfM.js";import"./SuggestionItem-Cc3ypeyC.js";import"./index-D8bEAmHz.js";import"./Option-CGYv30eN.js";import"./index-BrnoUve9.js";import"./SegmentedButton-QT7W_oDj.js";import"./index-fa2Z_Y62.js";import"./Select-C87V-1kl.js";import"./InvisibleMessage-CMW2idQ1.js";import"./slim-arrow-down-DeKj_Omp.js";import"./index-DuxSBgoz.js";import"./index-BGidFgA2.js";import"./index-DqUqhbMA.js";import"./index-Bqbzj0yD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLilwRFH.js";import"./group-2-CGyqUumC.js";import"./sort-descending-BOci2nTe.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-zQYKv0o9.js";import"./utils-Di9AT2dj.js";import"./index-C-AEjq-0.js";import"./index-CxGXb5fb.js";import"./index-DD2enJoe.js";import"./navigation-down-arrow-CCbQ8F9I.js";import"./navigation-right-arrow-DX-uF-k2.js";import"./navigation-right-arrow-Blea1uTb.js";import"./useCurrentTheme-BkZ7cZzQ.js";import"./index-nUwBPQlT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bvd5TkXY.js";import"./paper-plane-q7ULz0vY.js";import"./index-Yy2MGehE.js";import"./less-B94jky_m.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
