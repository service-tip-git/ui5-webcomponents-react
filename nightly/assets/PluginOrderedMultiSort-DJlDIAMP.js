import{j as e}from"./iframe-DOg6M_II.js";import{useMDXComponents as i}from"./index-kwVVcFLm.js";import{I as a,F as m}from"./CommandsAndQueries-wl0h9BMr.js";import{M as s,C as p}from"./blocks-CUc5S4F5.js";import"./Tag-BltckGaY.js";import"./index-bsC8MgY-.js";import{C as l}from"./ControlsWithNote-DHUK-IYy.js";import"./copy-BKSrEciR.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BIWbaJdZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwpJeIal.js";import"./index-DVpre6_h.js";import"./index-B0K8C7sE.js";import"./Link-CDmjIio6.js";import"./index-DMnxNTo_.js";import"./index-BEZkwnlN.js";import"./index-BdRkl8ET.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Drkj1-4P.js";import"./addCustomCSSWithScoping-DpPx9qfb.js";import"./index-DS0sFSVa.js";import"./information-BuhVNJUa.js";import"./sys-enter-2-DbIwdKeB.js";import"./alert-BRGoaqba.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CLCBV3Xg.js";import"./delete-D-43NgF8.js";import"./settings-Delvnyut.js";import"./NoData-ByUhu_o5.js";import"./IllustratedMessage-diAipt8-.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-gN2Us1tn.js";import"./index-B9k7ELm0.js";import"./index-B_vYmLao.js";import"./slim-arrow-down-BjniYreE.js";import"./Input-C9rpsAyC.js";import"./ResponsivePopoverCommon.css-C0PtYRqH.js";import"./ValueStateMessage.css-CZYppwl8.js";import"./Suggestions.css-Ixrm98By.js";import"./ListBoxItemGroupTemplate-BDzOYuSZ.js";import"./ComboBoxItemGroup-BU19uPT9.js";import"./ListItemBaseTemplate-hoIzMUwH.js";import"./Token-iSuK3wO6.js";import"./ScrollEnablement-BMPvWcSr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrVmc6dv.js";import"./ToggleButton-CsKP69jd.js";import"./SuggestionItem-D-yPu1Sv.js";import"./index-Mf92dVtq.js";import"./Option-DNSpB8f-.js";import"./index-BCTwa-v4.js";import"./SegmentedButton-DNK1Qa2S.js";import"./index-Cs3-egX0.js";import"./Select-BDYl_oCe.js";import"./InvisibleMessage-DycTFmVM.js";import"./slim-arrow-down-DfFKFXMU.js";import"./index-VxedkpRq.js";import"./index-CH3b2kB8.js";import"./index-CISwnltl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bi2MAW2I.js";import"./group-2-MmNiSVbN.js";import"./sort-descending-CD9YT9Bk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B_KBcAtw.js";import"./utils-0ELTneL-.js";import"./index-DFQjFJ3S.js";import"./index-DM2b0yOa.js";import"./index-BeSrSbRo.js";import"./navigation-down-arrow-CyIa-Usz.js";import"./navigation-right-arrow-BLaN-JkZ.js";import"./navigation-right-arrow-CqWeCK0J.js";import"./useCurrentTheme-DESyq6Ge.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CO9CMtFr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CA7b8y0H.js";import"./paper-plane-BSmmtRX7.js";import"./index-DMnTXtcq.js";import"./less-CZFOeLNB.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
