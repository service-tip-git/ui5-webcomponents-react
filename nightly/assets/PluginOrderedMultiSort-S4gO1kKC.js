import{j as e}from"./iframe-BWDYb3Af.js";import{useMDXComponents as i}from"./index-ORMlrOnf.js";import{I as a,F as m}from"./CommandsAndQueries-CZ5MS_my.js";import{M as s,C as p}from"./blocks-B8FJqnZy.js";import"./Tag-BIMutbIq.js";import"./index-Dolwn4re.js";import{C as l}from"./ControlsWithNote-CaZJdSg_.js";import"./copy-weALSuoF.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-QDAUM4uZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3Oal-l-.js";import"./index-BHXKA4z_.js";import"./index-Dz7IZliI.js";import"./Link-DcGHp14a.js";import"./index-CxNU_raA.js";import"./index-CO7aikHi.js";import"./index-_k1TaEpY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-wjVhlBmy.js";import"./addCustomCSSWithScoping-BLKtnAI1.js";import"./index-DF6wuqqy.js";import"./information-BiNCCmk0.js";import"./sys-enter-2-D_DUss_0.js";import"./alert-mysBcZzV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B7bCkUlY.js";import"./delete-DEj14gho.js";import"./settings-DoVib3WO.js";import"./NoData-B7rkzdNs.js";import"./IllustratedMessage-CRWU2Kq3.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DvxZpi3I.js";import"./index-fEJgj2Qv.js";import"./index-DmOxMMWJ.js";import"./slim-arrow-down-BcIR6NjK.js";import"./Input-BuboHiLs.js";import"./ResponsivePopoverCommon.css-DBGwKhkV.js";import"./ValueStateMessage.css-BGu5mUtQ.js";import"./Suggestions.css-DXhv7lhm.js";import"./ListBoxItemGroupTemplate-DzjBgN9r.js";import"./ComboBoxItemGroup-De-n6S3o.js";import"./ListItemBaseTemplate-IGyQuAXK.js";import"./Token-BeAfCI2H.js";import"./ScrollEnablement-CqDxSJRv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cn1gqWK2.js";import"./ToggleButton-06oZt1wz.js";import"./SuggestionItem-6b4vyV5u.js";import"./index-B8a_sAU-.js";import"./Option-D5fi9fAF.js";import"./index-V8TD3imX.js";import"./SegmentedButton-DS-7HWK8.js";import"./index-C2jRL8Y_.js";import"./Select-jr8H4-4W.js";import"./InvisibleMessage-ub_8KxmD.js";import"./slim-arrow-down-D6HsblN4.js";import"./index-B6QSlgiQ.js";import"./index-CWl53DLC.js";import"./index-DFScramK.js";import"./index-cBcbMXT4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-qtXQdY9O.js";import"./group-2-DCUOoeaW.js";import"./sort-descending-3oWaEPr0.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-xDc2LBmD.js";import"./utils-An7ewTfO.js";import"./index-1YejsSDM.js";import"./index-CmTGtR_u.js";import"./index-BZK_a3Nn.js";import"./navigation-down-arrow-c1lYwltu.js";import"./navigation-right-arrow-hLiMkplw.js";import"./navigation-right-arrow-BBlgzrG-.js";import"./useCurrentTheme-O3A-J4fk.js";import"./index-BA5CrxYN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CUtE-sIq.js";import"./paper-plane-B4taa3Yl.js";import"./index-gTEpRQo7.js";import"./less-DKb9TyNt.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
