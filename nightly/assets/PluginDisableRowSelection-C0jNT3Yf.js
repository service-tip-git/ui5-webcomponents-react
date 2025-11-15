import{j as e}from"./iframe-RECRoZhV.js";import{useMDXComponents as n}from"./index-1tzPRbI6.js";import{I as r,F as s}from"./CommandsAndQueries-DPpsoP9s.js";import{M as l,C as a}from"./blocks-CH1yi1wC.js";import"./Tag-BCmfqboN.js";import"./index-CfNZ4QaZ.js";import"./copy-B_omwcq7.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BjvilGb7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CB0t3Ndr.js";import"./index-D1It_vMD.js";import"./index-DGKmMzEm.js";import"./Link-BZUDNGRG.js";import"./index-lc4LLOiH.js";import"./index-Dk8UUcOY.js";import"./index-Rgh5WsNa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bozn53qz.js";import"./addCustomCSSWithScoping-Uy-s1Hcf.js";import"./index-5drqvW0T.js";import"./information-D6UQivs-.js";import"./sys-enter-2-CMoukZNH.js";import"./alert-BjbREM6S.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bz2chLzI.js";import"./delete-DogqfZ3E.js";import"./settings-lCutP8dK.js";import"./NoData-llz9PG9F.js";import"./IllustratedMessage-CKo1bCpT.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Dc_PXms6.js";import"./index-DX4imUhW.js";import"./index-D4ozyLie.js";import"./slim-arrow-down-CT6VdoUI.js";import"./Input-DlayT0fi.js";import"./ResponsivePopoverCommon.css-D2fANVRT.js";import"./ValueStateMessage.css-D4UTir1H.js";import"./Suggestions.css-CDvWi9BJ.js";import"./ListBoxItemGroupTemplate-BBFkEoXO.js";import"./ComboBoxItemGroup-C70F9qVi.js";import"./ListItemBaseTemplate-PhRm9Z1E.js";import"./Token-BWzNh8w7.js";import"./ScrollEnablement-BRHtS9Y6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CghTaqTk.js";import"./ToggleButton-CUxngjtj.js";import"./SuggestionItem-CC-vpnLD.js";import"./index-BjlvmRlS.js";import"./Option-CUfEccr7.js";import"./index-Da_u9t8p.js";import"./SegmentedButton-Boemh7ns.js";import"./index-D3Kr9jBp.js";import"./Select-D_Yo3ITd.js";import"./InvisibleMessage-k_rSJSP0.js";import"./slim-arrow-down-kuIl5ttD.js";import"./index-BEBnT4-a.js";import"./index-KQsXY6-N.js";import"./index-CXzJLeoO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXPu933P.js";import"./group-2-jhaWfOW9.js";import"./sort-descending-BHyYxadY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DO_r9pCl.js";import"./utils-B4YULW7_.js";import"./index-DHf7Rwdf.js";import"./index-DHz2T6Sp.js";import"./index-C9_jR0jd.js";import"./navigation-down-arrow-DwtmqN-Q.js";import"./navigation-right-arrow-CIZgBpjX.js";import"./navigation-right-arrow-CoJr-ET_.js";import"./useCurrentTheme-CscTi93E.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DbY2gDlc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-U4IYdiJl.js";import"./paper-plane-Cs6XxyXF.js";import"./index-D_b6lk6Z.js";import"./less-Cg20nryA.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
