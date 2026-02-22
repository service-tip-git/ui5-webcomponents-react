import{j as e}from"./iframe-DnQpmgA6.js";import{useMDXComponents as n}from"./index-m6rQOag9.js";import{I as r,F as s}from"./CommandsAndQueries-DCeHCX1A.js";import{M as l,C as a}from"./blocks-DIAHYmsO.js";import"./Tag-CCLxzbm_.js";import"./index-BNSawElR.js";import"./copy-fbHgidly.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-9n2KIugs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqBVEfNK.js";import"./index-B_h56NIO.js";import"./index-DqLOis9Y.js";import"./Link-TucI8b8Q.js";import"./index-DqMOHWxY.js";import"./index-C-imFhL9.js";import"./index-L15nOwrJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2yHaKcn.js";import"./addCustomCSSWithScoping-DBwRz57F.js";import"./index-DxN0YEHZ.js";import"./information-Dr8YEhs5.js";import"./sys-enter-2-Bl9jtIfu.js";import"./alert-DI-0b8x_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BDBV03jP.js";import"./delete-DEaH-QMQ.js";import"./settings-Y1HrJ1Be.js";import"./NoData-CeQyUEKi.js";import"./IllustratedMessage-BmE39Sz_.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DcdliNxr.js";import"./index-DlcKtOvu.js";import"./index-DmDTWCkI.js";import"./slim-arrow-down-bqQZFEzo.js";import"./Input-CFSHOVLn.js";import"./ResponsivePopoverCommon.css-DPwPWHul.js";import"./ValueStateMessage.css-DhleDcPv.js";import"./Suggestions.css-Bt_4dqwC.js";import"./ListBoxItemGroupTemplate-OyTsfH68.js";import"./ComboBoxItemGroup-CL9AHdXR.js";import"./ListItemBaseTemplate-BENNhCLG.js";import"./Token-CCdz11AY.js";import"./ScrollEnablement-Vy5r4Z-H.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CbLH-mve.js";import"./ToggleButton-IDcSTjtk.js";import"./SuggestionItem-BJHpd9Tu.js";import"./index-CFAiARvU.js";import"./Option-q0-CYUub.js";import"./index-BVmq-K4P.js";import"./SegmentedButton-B9JgMyuK.js";import"./index-BkZL85Pv.js";import"./Select-Cz0Q93PZ.js";import"./InvisibleMessage-Cl67Ph06.js";import"./slim-arrow-down-C4oPdCY4.js";import"./index-JFfX52ZD.js";import"./index-BuVSgPW5.js";import"./index-DVQ4HkFg.js";import"./index-C89oEcpH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIL8SXRk.js";import"./group-2-D8yPI7nW.js";import"./sort-descending-Dd5yu8uD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BnUH6T6C.js";import"./utils-DvbIUQmI.js";import"./index-DBXZXDyB.js";import"./index-CxxXXamh.js";import"./index-BEE3e02q.js";import"./navigation-down-arrow-81WXcHgL.js";import"./navigation-right-arrow-ByFxVnQf.js";import"./navigation-right-arrow-C7f932cn.js";import"./useCurrentTheme-4919pBsT.js";import"./index-PqqIWEPc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-djYEqh-T.js";import"./paper-plane-_it-Hq1r.js";import"./index-Btlv6fLI.js";import"./less-ClggAEde.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
