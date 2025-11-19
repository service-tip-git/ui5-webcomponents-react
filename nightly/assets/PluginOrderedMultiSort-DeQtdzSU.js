import{j as e}from"./iframe-Bg524aqp.js";import{useMDXComponents as i}from"./index-B-rwzkjC.js";import{I as a,F as m}from"./CommandsAndQueries-Bxzaytg-.js";import{M as s,C as p}from"./blocks--Wel_jE1.js";import"./Tag-DNMuD7A5.js";import"./index-B9tuTECn.js";import{C as l}from"./ControlsWithNote-mASCmhtx.js";import"./copy-BgS9Q-8_.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BtcTbGIn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqYTt2r-.js";import"./index-DPNsglmV.js";import"./index-TfZZnQDd.js";import"./Link-DzzFCouB.js";import"./index-iejN5y1T.js";import"./index-r1bogqKf.js";import"./index-tDWQXHER.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkKuq7AH.js";import"./addCustomCSSWithScoping-DFbnSqfd.js";import"./index-DxUoW9XL.js";import"./information-2dCGwvE_.js";import"./sys-enter-2-CO93Qjp1.js";import"./alert-BG-ILaUe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ozcYxpI5.js";import"./delete-Bbvt8Ot-.js";import"./settings-BhmSlLPC.js";import"./NoData-Bj02WUEt.js";import"./IllustratedMessage-R2CzAWXp.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BIlaAfwD.js";import"./index-CfgOXvqI.js";import"./index-DE4ZHMUP.js";import"./slim-arrow-down-CRZdlGQF.js";import"./Input-DmAcj6-y.js";import"./ResponsivePopoverCommon.css-DvaTlIz3.js";import"./ValueStateMessage.css-qD0DeEG7.js";import"./Suggestions.css-ZRTSrlW8.js";import"./ListBoxItemGroupTemplate-DXJv0PMK.js";import"./ComboBoxItemGroup-Dsg5vEL4.js";import"./ListItemBaseTemplate-BpYqWiGX.js";import"./Token-9cJC13pc.js";import"./ScrollEnablement-C7eLNzW1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bewcenzz.js";import"./ToggleButton-DPa7jhtq.js";import"./SuggestionItem-Dpk_4CFh.js";import"./index-CdKTVzwi.js";import"./Option-ClvqOWQS.js";import"./index-qJ7YjxyU.js";import"./SegmentedButton-DE8rqkD-.js";import"./index-DYMzkGI0.js";import"./Select-B4bz0mNo.js";import"./InvisibleMessage-DXpW_GiJ.js";import"./slim-arrow-down-DwyYquXh.js";import"./index-CNB43ZnJ.js";import"./index-DIBXYbfE.js";import"./index-CPicDcbf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMn6lE9G.js";import"./group-2--_rJdnmk.js";import"./sort-descending-CAbRK7tC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BecMM91E.js";import"./utils-Cud8cjsY.js";import"./index-Cw39ZeIw.js";import"./index-C0z4qlZR.js";import"./index-aDnJKja3.js";import"./navigation-down-arrow-BzyymRLp.js";import"./navigation-right-arrow-CUK1IzT8.js";import"./navigation-right-arrow-BPrwIZ8M.js";import"./useCurrentTheme-CR40IPum.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B5Tp7z0D.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DiCPj2HI.js";import"./paper-plane-BaN203_j.js";import"./index-MM_7rShN.js";import"./less-Bs9eXWxF.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
