import{j as e}from"./iframe-plJY_px0.js";import{useMDXComponents as i}from"./index-CNgSdSBz.js";import{I as a,F as m}from"./CommandsAndQueries-CSEdQQvR.js";import{M as s,C as p}from"./blocks-Q5gmWwgb.js";import"./Tag-Dh3wWudw.js";import"./index-DSqDyml0.js";import{C as l}from"./ControlsWithNote-CxBuL735.js";import"./copy-mR5XScRR.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-OXoTGLJY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2EbIuvCl.js";import"./index-CULtK81i.js";import"./index-D3V1C0u7.js";import"./Link-Bty8oyFV.js";import"./index-Dd7Sfpx-.js";import"./index-DfokaHEY.js";import"./index-B337CKIF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQsTwQe_.js";import"./addCustomCSSWithScoping-K4GM8_aQ.js";import"./index-t--BkPKT.js";import"./information-CFU4bu3b.js";import"./sys-enter-2-CWJ3J9PS.js";import"./alert-Cvpxudnd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DS99HCgK.js";import"./delete-eXKtkG1a.js";import"./settings-B4zUkila.js";import"./NoData-vjKh1Mr_.js";import"./IllustratedMessage-B3aadiAZ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-4tlbkylG.js";import"./index-DkneJmbW.js";import"./index-brt5d6po.js";import"./slim-arrow-down-BTqVQDWC.js";import"./Input-qu-i9z2w.js";import"./ResponsivePopoverCommon.css-C--dNoH7.js";import"./ValueStateMessage.css-65I0H3x5.js";import"./Suggestions.css-C34DaZQw.js";import"./ListBoxItemGroupTemplate--HwHHtzG.js";import"./ComboBoxItemGroup-CJJD_zkv.js";import"./ListItemBaseTemplate-DPXdBI9X.js";import"./Token-CtYzp5bp.js";import"./ScrollEnablement-C3kxd9Sb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Du-JodLR.js";import"./ToggleButton-BVbL9ept.js";import"./SuggestionItem-CSeK9fns.js";import"./index-BfNy1JVl.js";import"./Option-kaAYALSt.js";import"./index-C1pDbGHC.js";import"./SegmentedButton-CoeXh0KC.js";import"./index-B1eO7s43.js";import"./Select-BOpGp0Rm.js";import"./InvisibleMessage-fL3jWeDc.js";import"./slim-arrow-down-2gbZmUST.js";import"./index-B6yr2B_f.js";import"./index-k_dsVjf7.js";import"./index-CmDLye-F.js";import"./index-CKdbXzvk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Qq0nKm9O.js";import"./group-2-DmjkdZiv.js";import"./sort-descending-G3a3Bk4A.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BJvTlN0-.js";import"./utils-BmYl7bBX.js";import"./index-CuirFJHi.js";import"./index-jIxgqskF.js";import"./index-DnBhArpB.js";import"./navigation-down-arrow-CPK2vVem.js";import"./navigation-right-arrow-DzWp8vrQ.js";import"./navigation-right-arrow-CbRKCuia.js";import"./useCurrentTheme-CPuhdXAo.js";import"./index-CfCdmgBi.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmQyw8RD.js";import"./paper-plane-BzpUcvaz.js";import"./index-_e_VAWTV.js";import"./less-Cv2JCqO3.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
