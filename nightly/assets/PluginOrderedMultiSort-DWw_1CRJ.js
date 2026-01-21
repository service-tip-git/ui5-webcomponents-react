import{j as e}from"./iframe-DYfg4QHt.js";import{useMDXComponents as i}from"./index-CVbrUuPE.js";import{I as a,F as m}from"./CommandsAndQueries-Bv0cgQmk.js";import{M as s,C as p}from"./blocks-BUAqhVj9.js";import"./Tag-DSyohh1a.js";import"./index-BmTrkp-7.js";import{C as l}from"./ControlsWithNote-EDQgd2pc.js";import"./copy-D6hWl56-.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CdlnE1KK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7hJqHh2.js";import"./index-BKQsUqka.js";import"./index-Cey_WqgE.js";import"./Link-DNgH-frF.js";import"./index-DHfPdgXp.js";import"./index-DGISTYKI.js";import"./index-91p8b6xm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN-x3Tox.js";import"./addCustomCSSWithScoping-D5zE1nWM.js";import"./index-Cmi2IW4V.js";import"./information-DmJ60sG9.js";import"./sys-enter-2-DM66m4rJ.js";import"./alert-CCfcH-Mh.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vgLY-pWJ.js";import"./delete-D34_mFXP.js";import"./settings-gx1Rt1L_.js";import"./NoData-DlyRoGui.js";import"./IllustratedMessage-DRxGb1zp.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B7x9pabn.js";import"./index-DahuAuMf.js";import"./index-BeUWAGwZ.js";import"./slim-arrow-down-CW3E1SKi.js";import"./Input-iisXfHsF.js";import"./ResponsivePopoverCommon.css-CUkbRKkQ.js";import"./ValueStateMessage.css-JCR7oNs7.js";import"./Suggestions.css-CvEadgHg.js";import"./ListBoxItemGroupTemplate-CVIbduo6.js";import"./ComboBoxItemGroup-NvpVhGDp.js";import"./ListItemBaseTemplate-C8z7WXl_.js";import"./Token-XCzL_gO_.js";import"./ScrollEnablement-CNfKzKUR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard--jyjJfbY.js";import"./ToggleButton-CNFVQAAc.js";import"./SuggestionItem-evSaZZRy.js";import"./index-DZ5Gyh8u.js";import"./Option-BXSqJg_S.js";import"./index-CQqiTtty.js";import"./SegmentedButton-BjQ27BtY.js";import"./index-CVlyf3BN.js";import"./Select-CVTIiGaA.js";import"./InvisibleMessage-CgGc0QHI.js";import"./slim-arrow-down-Y-ZQwTJr.js";import"./index-C-fiAxLB.js";import"./index-B18_A3pn.js";import"./index-Co1UuDMa.js";import"./index-C0HSA-PR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CoR2QbFK.js";import"./group-2-CBo-4-zi.js";import"./sort-descending-PAYd66BW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dzn1Xrdp.js";import"./utils-9o_atc5t.js";import"./index-DGWGpo3w.js";import"./index-CObhiRst.js";import"./index-yUqfaSMu.js";import"./navigation-down-arrow-ZAYOJffR.js";import"./navigation-right-arrow-CeM1y1gw.js";import"./navigation-right-arrow-yI36QQVV.js";import"./useCurrentTheme-PNoownmV.js";import"./index-BBshEaSl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CSLDn2Wo.js";import"./paper-plane-Bj3JAkAg.js";import"./index-CWOZpVQI.js";import"./less-CeHycIPZ.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
