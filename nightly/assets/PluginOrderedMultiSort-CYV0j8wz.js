import{j as e}from"./iframe-BayyK-Sd.js";import{useMDXComponents as i}from"./index-Bzssb8Xd.js";import{I as a,F as m}from"./CommandsAndQueries-BWULVlsD.js";import{M as s,C as p}from"./blocks-C_Hnd7fg.js";import"./Tag-BpBS-AuZ.js";import"./index-CvYFyR11.js";import{C as l}from"./ControlsWithNote-DhBxeExL.js";import"./copy-DZZbIDUz.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-QbrzZX1h.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiVk4GbQ.js";import"./index-DV2g_43r.js";import"./index-D_W1qX2w.js";import"./Link-DsRy4Mnv.js";import"./index-CTxam_11.js";import"./index-CvVYJJGO.js";import"./index-DGVYbyp5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CiI3G7zh.js";import"./addCustomCSSWithScoping-BRKADkGf.js";import"./index-CK9HJhHW.js";import"./information-D5ng3oI8.js";import"./sys-enter-2-C1yPBG5C.js";import"./alert-C5buViQ-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-OE18-JdZ.js";import"./delete-BbgUJXGi.js";import"./settings-BmyXWHXN.js";import"./NoData-CId8to51.js";import"./IllustratedMessage-DrJiWY3J.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-C-7XSeeS.js";import"./index-C_SEzddK.js";import"./index-Cfv719qF.js";import"./slim-arrow-down-CYWrhP8K.js";import"./Input-JXz_mghp.js";import"./ResponsivePopoverCommon.css-BE3AHcrB.js";import"./ValueStateMessage.css-CPPmdzjG.js";import"./Suggestions.css-DMbMSnFv.js";import"./ListBoxItemGroupTemplate-YGlaa4-L.js";import"./ComboBoxItemGroup-B66yYzM_.js";import"./ListItemBaseTemplate-C2wpCpOj.js";import"./Token-DJPiW-9k.js";import"./ScrollEnablement-b9VRk5D0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Qcq6pFUS.js";import"./ToggleButton-DNEd488t.js";import"./SuggestionItem-Ce7Hn2Zx.js";import"./index-CMGyAd1y.js";import"./Option-DsNeIMXC.js";import"./index-BKzi5p7m.js";import"./SegmentedButton-CjIp9jgc.js";import"./index-CGNi-nkR.js";import"./Select-W3YZdL-T.js";import"./InvisibleMessage-CV5ENGws.js";import"./slim-arrow-down-BfT4kuc7.js";import"./index-c6l7EBuN.js";import"./index-CphH-Mq2.js";import"./index-BovCb11M.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BItiagYO.js";import"./group-2-BYV4hW0u.js";import"./sort-descending-D8jO5ZBY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWjYcQuY.js";import"./utils-BxDZ9J52.js";import"./index-Ca_HsQoM.js";import"./index-BFBr5osT.js";import"./index-DIe0Mc4Y.js";import"./navigation-down-arrow-SKyq9Gew.js";import"./navigation-right-arrow-BNZl5xyh.js";import"./navigation-right-arrow-D0AjCoAk.js";import"./useCurrentTheme-BgQwIHp1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cy8kD9Ns.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlVbLN3l.js";import"./paper-plane-C7yKcpS7.js";import"./index-BCW3PpbP.js";import"./less-Dn7O_2zP.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
