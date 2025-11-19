import{j as e}from"./iframe-CPcs5bjw.js";import{useMDXComponents as i}from"./index-D3pCSUGP.js";import{I as a,F as m}from"./CommandsAndQueries-BRqm99_0.js";import{M as s,C as p}from"./blocks-CciAsFaW.js";import"./Tag-BRzUE0pu.js";import"./index-DdCyPygk.js";import{C as l}from"./ControlsWithNote-DRNf35oL.js";import"./copy-DrEgra2j.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CNNMu7oZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sAPOTiYQ.js";import"./index-DSqRs7NE.js";import"./index-CE-f9LSp.js";import"./Link-CvciZabG.js";import"./index-DbiDsCRE.js";import"./index-DlX2UYU-.js";import"./index-B7pfH-Zg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-MvtR7iaQ.js";import"./addCustomCSSWithScoping-CWQJntcH.js";import"./index-Cumht0xF.js";import"./information-DGDTMoga.js";import"./sys-enter-2-DPq_4UKR.js";import"./alert-CqgikgLY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DcSLL8pw.js";import"./delete-6FPl9hw2.js";import"./settings-BkIX4e0f.js";import"./NoData-DX4tqYkJ.js";import"./IllustratedMessage-DW30GHVf.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BXiYTazg.js";import"./index-DyO1TDcH.js";import"./index-Be2buheR.js";import"./slim-arrow-down-fC08silo.js";import"./Input-BBd04gJ3.js";import"./ResponsivePopoverCommon.css-BRxBb6R7.js";import"./ValueStateMessage.css-BuHdH1UG.js";import"./Suggestions.css-bhLISna5.js";import"./ListBoxItemGroupTemplate-CNbeaoIX.js";import"./ComboBoxItemGroup-CAE0Duax.js";import"./ListItemBaseTemplate-TuOpbkNi.js";import"./Token-BhhlWiIl.js";import"./ScrollEnablement-C5TvNcLx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cf_RZ7_h.js";import"./ToggleButton-C-FM17-B.js";import"./SuggestionItem-SZn9Bgxa.js";import"./index-BTI3rLEY.js";import"./Option-CRy1QaR1.js";import"./index-CRCGoRGr.js";import"./SegmentedButton-DFyf0ped.js";import"./index-CQM2nEnH.js";import"./Select-D_8TYVG-.js";import"./InvisibleMessage-CS2hWN9Q.js";import"./slim-arrow-down-glTmVVU-.js";import"./index-Cq0d6RS0.js";import"./index-DLYHnpAo.js";import"./index-DHUEZhQD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DSJPsRuT.js";import"./group-2-De5mHDN4.js";import"./sort-descending--PDnUrf_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BcjHawbS.js";import"./utils-Cq29d2Kw.js";import"./index-CLVFcZa8.js";import"./index-DMMibOaO.js";import"./index-DKvhJ5Kx.js";import"./navigation-down-arrow-gfYqVZC2.js";import"./navigation-right-arrow-DCXuPhhE.js";import"./navigation-right-arrow-BUporjHX.js";import"./useCurrentTheme-EJjKiAvs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CmCCvj8I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CfoWS_vt.js";import"./paper-plane-VGT_jBYF.js";import"./index-Brz3_XP5.js";import"./less-_gVUTZDL.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
