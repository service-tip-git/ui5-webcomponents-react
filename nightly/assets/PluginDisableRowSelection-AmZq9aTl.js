import{j as e}from"./iframe-Crk1dOR8.js";import{useMDXComponents as n}from"./index-R8jXtLED.js";import{I as r,F as s}from"./CommandsAndQueries-OnXJs0rK.js";import{M as l,C as a}from"./blocks-DC75RB67.js";import"./Tag-Bw7tKX4O.js";import"./index-CACmyy9p.js";import"./copy-D_VyToZg.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DgxkA0YY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-F2nIq42R.js";import"./index-D2r_hMST.js";import"./index-K2kHsFSd.js";import"./Link-BHKq5JFv.js";import"./index-DvoETnoE.js";import"./index-CmobNXn6.js";import"./index-BW0zluCU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCgdgzPV.js";import"./addCustomCSSWithScoping-DLDk5l5Q.js";import"./index-DhFJLS7i.js";import"./information-YuxwihY0.js";import"./sys-enter-2-DLpc5Bbk.js";import"./alert-BQrPd1lR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bxy-cfhx.js";import"./delete-CyhoR1-x.js";import"./settings-DCnlQZPD.js";import"./NoData-DsbJ2Wb3.js";import"./IllustratedMessage-nKOTDNJc.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-t_oBNwfC.js";import"./index-CCh-mHqY.js";import"./index-BPXaNDRo.js";import"./slim-arrow-down-W9MNNw_u.js";import"./Input-CdoMhJ7q.js";import"./ResponsivePopoverCommon.css-CWK0u4Wt.js";import"./ValueStateMessage.css-B6Yu1ZOd.js";import"./Suggestions.css-D9mEdZF4.js";import"./ListBoxItemGroupTemplate-CD1d_PnD.js";import"./ComboBoxItemGroup-BcvTejR3.js";import"./ListItemBaseTemplate-ChpQCm05.js";import"./Token-2Y_wwcCo.js";import"./ScrollEnablement-CgGNqNYL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-m90ft9fO.js";import"./ToggleButton-D-b4ypKX.js";import"./SuggestionItem-BW3fUUjZ.js";import"./index-C7Lon1Bh.js";import"./Option-ByUi6-KI.js";import"./index-Bh8NMrS9.js";import"./SegmentedButton-DNBQsKKg.js";import"./index-C1TKRwfK.js";import"./Select-D0g7SDMw.js";import"./InvisibleMessage-DpJUGs_4.js";import"./slim-arrow-down-CJ_Lgolz.js";import"./index-CYjSUM3h.js";import"./index-CLkqgh3m.js";import"./index-BbH0YSzC.js";import"./index-FAzfBcds.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ziA0Ay5P.js";import"./group-2-3sV-WrZR.js";import"./sort-descending-BWp52hph.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Zzwzp3a_.js";import"./utils-C0yBiuVB.js";import"./index-DgcfWpn9.js";import"./index-CgKmmuuU.js";import"./index-BD_evJiC.js";import"./navigation-down-arrow-B8WKWh1B.js";import"./navigation-right-arrow-BEBvQFEq.js";import"./navigation-right-arrow-D13mADge.js";import"./useCurrentTheme-DEz25XUz.js";import"./index-Bx1EFR65.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CEOwLdyi.js";import"./paper-plane-BiKcq-Zy.js";import"./index-B2Orb9H-.js";import"./less-B6ZC-ovs.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(r,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Users are not informed why items cannot be selected."}),`
`,e.jsx(o.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,e.jsx(o.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",e.jsx(o.code,{children:"true"}),", then the row will not be selectable."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Using this hook in combination with the ",e.jsx(o.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,e.jsx(a,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

const WithFunctionParameter = () => {

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};

`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

const WithStringParameter = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(s,{})]})}function Xe(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
