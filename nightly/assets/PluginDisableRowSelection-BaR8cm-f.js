import{j as e}from"./iframe-DQawrgT_.js";import{useMDXComponents as n}from"./index-BmmNdxGP.js";import{I as r,F as s}from"./CommandsAndQueries-8E8N5Jf5.js";import{M as l,C as a}from"./blocks-CsjIrgm8.js";import"./Tag-DINZ5J-5.js";import"./index-CkLsOSwH.js";import"./copy-BfmM2Dw-.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-W25A3oS9.js";import"./preload-helper-PPVm8Dsz.js";import"./index--1fmb9ws.js";import"./index-CaSLC49k.js";import"./index-lL1wxGfG.js";import"./Link-QZkGNwXr.js";import"./index-C4mOCO1v.js";import"./index-BpUdR17T.js";import"./index-DXw92D-i.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D6QKJZ6-.js";import"./addCustomCSSWithScoping-CIoyfOLu.js";import"./index-DkjHlZC9.js";import"./information-DvV6iDHk.js";import"./sys-enter-2-DVOKgY3M.js";import"./alert-D1Pqx8x8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-X9zi8Na2.js";import"./delete-C6HzY21G.js";import"./settings-CWp1p9X4.js";import"./NoData-CDBUvfvl.js";import"./IllustratedMessage-uso3zTnf.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BsZDo7Xz.js";import"./index--kps9BoF.js";import"./index-Cu2d-9NT.js";import"./slim-arrow-down-CrV_EoZ-.js";import"./Input-C1pWyBfA.js";import"./ResponsivePopoverCommon.css-CRDo6imn.js";import"./ValueStateMessage.css-yU9YlQTC.js";import"./Suggestions.css-DGIsZFtp.js";import"./ListBoxItemGroupTemplate-Qgb7Il2A.js";import"./ComboBoxItemGroup-DDKZCgRF.js";import"./ListItemBaseTemplate-CYGq7w02.js";import"./Token-Bd0t7DDi.js";import"./ScrollEnablement-CFUBLAVD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRn-lKzQ.js";import"./ToggleButton-B-hCXMIV.js";import"./SuggestionItem-m6DAn-I2.js";import"./index-BSgkgR9j.js";import"./Option-C4LQWtvA.js";import"./index-msmsJC20.js";import"./SegmentedButton-CERSbuxP.js";import"./index-cFycgftA.js";import"./Select-UWywW-TM.js";import"./InvisibleMessage-B4vU3xgw.js";import"./slim-arrow-down-ZC2auWSc.js";import"./index-BpZszSRc.js";import"./index-DJB11urr.js";import"./index-B7bKPaYO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DgoHoVwF.js";import"./group-2-Do0Gpjo4.js";import"./sort-descending-CnWvzCuF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DTd36afj.js";import"./utils-B9VO5sCv.js";import"./index-Cd39OiMQ.js";import"./index-hk4pV2sf.js";import"./index-DOxhRrM_.js";import"./navigation-down-arrow-B6UI6hGh.js";import"./navigation-right-arrow-D1f_1Cvf.js";import"./navigation-right-arrow-Dbgs5rW1.js";import"./useCurrentTheme-Mk8c19Xo.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DMMeBvKD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B1ti3bb-.js";import"./paper-plane-CJkMjDJU.js";import"./index-DehgxQHc.js";import"./less-Djjr01dD.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
