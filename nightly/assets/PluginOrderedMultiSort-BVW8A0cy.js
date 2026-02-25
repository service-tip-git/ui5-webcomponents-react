import{j as e}from"./iframe-CY8s9yjy.js";import{useMDXComponents as i}from"./index-CNb6gACG.js";import{I as a,F as m}from"./CommandsAndQueries-UPrDuurl.js";import{M as s,C as p}from"./blocks-Ce5kV5iJ.js";import"./Tag-DQ3Uhj_I.js";import"./index-Bm5ZTkBt.js";import{C as l}from"./ControlsWithNote-B0houuJI.js";import"./copy-VMbFnyY_.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BUZh1mio.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVORMKlE.js";import"./index-D-EFcDV0.js";import"./index-DrB3kUVO.js";import"./Link-CNsdB8sn.js";import"./index-BsBxNorJ.js";import"./index-C8Olm4ve.js";import"./index-BaNzLEPi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CvwjvMI1.js";import"./addCustomCSSWithScoping-D-8_Iy3e.js";import"./index-BXgCJyYO.js";import"./information-DZii-Bqd.js";import"./sys-enter-2-BpeJBTAl.js";import"./alert-C5YyaVlR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bny-Pdhf.js";import"./delete-TuR8g7sp.js";import"./settings-CjD8ZkRG.js";import"./NoData-uheMpmqh.js";import"./IllustratedMessage-G815HeqE.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CvEi3g2q.js";import"./index-Dkwzq5SZ.js";import"./index-Bh4g5tnq.js";import"./slim-arrow-down-DdRsipKq.js";import"./Input-BZHTrO1F.js";import"./ResponsivePopoverCommon.css-Bh7teeL-.js";import"./ValueStateMessage.css-DVpu6R7_.js";import"./Suggestions.css-Clh_Tnq_.js";import"./ListBoxItemGroupTemplate-CWpHhO8W.js";import"./ComboBoxItemGroup-jnpv8-tH.js";import"./ListItemBaseTemplate-CVp3QqSu.js";import"./Token-C5TzIgJN.js";import"./ScrollEnablement-O8zUITM6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BGy_E5-P.js";import"./ToggleButton-Dy9m84az.js";import"./SuggestionItem-Dcp6MIw0.js";import"./index-NsWuls4K.js";import"./Option-BIMhrmf4.js";import"./index-COeRM4Xs.js";import"./SegmentedButton-D8Cz_xX2.js";import"./index-ClkFJ-SZ.js";import"./Select-DTUqqWH-.js";import"./InvisibleMessage-BvC4dXGq.js";import"./slim-arrow-down-Dy1XtcbW.js";import"./index-C3IdQyJ6.js";import"./index-CEyFD8KV.js";import"./index-D2p9cLf0.js";import"./index-yIH5v1dU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CrfR7UAR.js";import"./group-2-BfItZo2m.js";import"./sort-descending-D7yIAAHe.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7xCLMVi.js";import"./utils-CKARIPzs.js";import"./index-DALNk86A.js";import"./index-9xX_MzSp.js";import"./index-BmKRgNaZ.js";import"./navigation-down-arrow-BOgmv9Ad.js";import"./navigation-right-arrow-D61AbNUx.js";import"./navigation-right-arrow-BXCLLO3r.js";import"./useCurrentTheme-hFUuDzjB.js";import"./index-B2ztva4l.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CYf-OBV8.js";import"./paper-plane-Cl6Ob4s-.js";import"./index-BClGlfJV.js";import"./less-B8IL0Icb.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
