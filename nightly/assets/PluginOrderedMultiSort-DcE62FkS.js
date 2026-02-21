import{j as e}from"./iframe-BclzIqLN.js";import{useMDXComponents as i}from"./index-C905Yc-m.js";import{I as a,F as m}from"./CommandsAndQueries-C-6YnLjZ.js";import{M as s,C as p}from"./blocks-B5DwqLl1.js";import"./Tag-BOdn4VYm.js";import"./index-DMn-V0Tk.js";import{C as l}from"./ControlsWithNote-CmUQIF7m.js";import"./copy-D_MUueeP.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-C9L8Guqw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-uVgUJkPs.js";import"./index-OKRhEBZf.js";import"./index-xMZLjYER.js";import"./Link-DPzQ2XbU.js";import"./index-C8ShhJNW.js";import"./index-5TTuORsb.js";import"./index-CJHMJsmF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cdo2Ur2Z.js";import"./addCustomCSSWithScoping-Dte7M2sk.js";import"./index-CnVdbwVS.js";import"./information-BdMHs198.js";import"./sys-enter-2-C5ziAGW-.js";import"./alert-BWh7aIvC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-5uGOFpph.js";import"./delete-Ch7YLa0V.js";import"./settings-BkOrUldx.js";import"./NoData-CfYSMo8M.js";import"./IllustratedMessage-DQgOxUn_.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BzUJY8Ac.js";import"./index-6F36v5VW.js";import"./index-D9jIvk-q.js";import"./slim-arrow-down-C1U4NX7H.js";import"./Input-C4okqpUf.js";import"./ResponsivePopoverCommon.css-ClkbcXC1.js";import"./ValueStateMessage.css-C3ePSvc8.js";import"./Suggestions.css-CUzKAV-7.js";import"./ListBoxItemGroupTemplate-CFqH3D8Q.js";import"./ComboBoxItemGroup-2Y-8-MYS.js";import"./ListItemBaseTemplate-CNmdHhwQ.js";import"./Token-B7V4WzzV.js";import"./ScrollEnablement-B33MvuIW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-tHNIwCbY.js";import"./ToggleButton-D72VLeFZ.js";import"./SuggestionItem-Cz2Vq1ey.js";import"./index-DSAIMpS1.js";import"./Option-CI6fqOL0.js";import"./index-CvCO9G33.js";import"./SegmentedButton-DOVaKk4o.js";import"./index-CS4FFq1R.js";import"./Select-Cwlz9_o0.js";import"./InvisibleMessage-D5CfVB6Z.js";import"./slim-arrow-down-BwnzdiOy.js";import"./index-vSHFeP63.js";import"./index-HdZD7NhL.js";import"./index-Byw1M1w0.js";import"./index-B-2M8oTR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CprbOLAW.js";import"./group-2-CQahafe6.js";import"./sort-descending-CxK_741y.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B8T8PvLa.js";import"./utils-CzDDLq5x.js";import"./index-YJUbNZXC.js";import"./index-DaX0lkO8.js";import"./index-Dfxpc54q.js";import"./navigation-down-arrow-9qHA5EUE.js";import"./navigation-right-arrow-C_dGSAC8.js";import"./navigation-right-arrow-C2F-yOS_.js";import"./useCurrentTheme-B0s-uCVG.js";import"./index-0NhHA-ih.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BUkTWivW.js";import"./paper-plane-D-v0DWGa.js";import"./index-Cbkmi62k.js";import"./less-B_W3_4w8.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
