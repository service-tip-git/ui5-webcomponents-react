import{j as e}from"./iframe-D9bcJVt0.js";import{useMDXComponents as i}from"./index-DEcJNjgo.js";import{I as a,F as m}from"./CommandsAndQueries-e_oDEhyZ.js";import{M as s,C as p}from"./blocks-jEcy0Ls1.js";import"./Tag-S7_09THp.js";import"./index-D7Hu_hwq.js";import{C as l}from"./ControlsWithNote-EpfSA0e_.js";import"./copy-BEICJ5u7.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DLNw0oL7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DF6sI-fG.js";import"./index-CMrwt2SW.js";import"./index-C3UoEV3F.js";import"./Link-Bg4Kb6iX.js";import"./index-o9G_R3kL.js";import"./index-Dsq5N9Gi.js";import"./index-BuSBQB3f.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-saeF9JMt.js";import"./addCustomCSSWithScoping-BvxM2LWg.js";import"./index-CqnXC52g.js";import"./information-rD16map1.js";import"./sys-enter-2-mNekXiHd.js";import"./alert-DSYk_cjm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DhXMnXqd.js";import"./delete-CuHBZVP5.js";import"./settings-DojOHTGJ.js";import"./NoData-DV_7CgAU.js";import"./IllustratedMessage-JmaURS-8.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DKg5IlHC.js";import"./index-BDwBt9OC.js";import"./index-BkkfTKSR.js";import"./slim-arrow-down-BD5IYpYe.js";import"./Input-DgD_KIuK.js";import"./ResponsivePopoverCommon.css-CpNcVGzg.js";import"./ValueStateMessage.css-7nL_K-x6.js";import"./Suggestions.css-BXIA00KI.js";import"./ListBoxItemGroupTemplate-CjlaekqL.js";import"./ComboBoxItemGroup-Pa31sPb6.js";import"./ListItemBaseTemplate-CBhJdBlB.js";import"./Token-h6BGlN2Z.js";import"./ScrollEnablement-BWuQyb0_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CfYt_15D.js";import"./ToggleButton-D9sfR6lE.js";import"./SuggestionItem-CsdeB4_z.js";import"./index-CXj5AEqi.js";import"./Option-C6arWRGE.js";import"./index-18lR1lm6.js";import"./SegmentedButton-DQtRU8vV.js";import"./index-ByPvdeD4.js";import"./Select-4TgEfMLB.js";import"./InvisibleMessage-Dar0vH_K.js";import"./slim-arrow-down-DAxhtMM2.js";import"./index-CcVbj5Dn.js";import"./index-BvhLCcwp.js";import"./index-DLqaN8TD.js";import"./index-CZq9Z5fi.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ButLvEeW.js";import"./group-2-BIkQBEt2.js";import"./sort-descending-BdlxQXMC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4ESEe8gp.js";import"./utils-uixZui5c.js";import"./index-BQ0AYfKe.js";import"./index-L7kHwJYz.js";import"./index-dIC04Ydi.js";import"./navigation-down-arrow-DNphUK2M.js";import"./navigation-right-arrow-C7E9KFb7.js";import"./navigation-right-arrow-CWcAZOwt.js";import"./useCurrentTheme-_hoQyvx4.js";import"./index-yxoGO_zr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL--5EK8X_4.js";import"./paper-plane-xqMM7h3_.js";import"./index-BtA_KE9i.js";import"./less-5iCe7j9C.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
