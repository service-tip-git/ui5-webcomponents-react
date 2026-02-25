import{j as e}from"./iframe-BQI8iJtZ.js";import{useMDXComponents as n}from"./index-l_Dh7Y-d.js";import{I as r,F as s}from"./CommandsAndQueries-BH0I_jDK.js";import{M as l,C as a}from"./blocks-Dm7btFzZ.js";import"./Tag-D2JKRyPD.js";import"./index-Bd5bxmR8.js";import"./copy-Wr9Hnpdu.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Co6ciUmv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDHutJWz.js";import"./index-CdGithLr.js";import"./index-y23wvc_L.js";import"./Link-C9lbVSnw.js";import"./index-CP42RXg5.js";import"./index-CixO9GRI.js";import"./index-CjJMvaDa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DMLN5SEy.js";import"./addCustomCSSWithScoping-C30TCMVD.js";import"./index-CC6FubQ3.js";import"./information-DhTwMCvW.js";import"./sys-enter-2-B4_axdEE.js";import"./alert-D_lKNn7T.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DqBLgsFv.js";import"./delete-DN8wM4l0.js";import"./settings-vSGnaQMo.js";import"./NoData-BqNhr66z.js";import"./IllustratedMessage-qImrSjau.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CwkhrkCY.js";import"./index-C7KjXWDM.js";import"./index-zxMVpEDh.js";import"./slim-arrow-down-QOUojnnL.js";import"./Input-2UrWgipO.js";import"./ResponsivePopoverCommon.css-gVvV0tmb.js";import"./ValueStateMessage.css-BxkCLEc_.js";import"./Suggestions.css-CPeYy0BW.js";import"./ListBoxItemGroupTemplate-BBLM1Bt8.js";import"./ComboBoxItemGroup-CoFNAlZu.js";import"./ListItemBaseTemplate-2jk2aB8o.js";import"./Token-B68uFNrG.js";import"./ScrollEnablement-B8byLzsv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDy0Ge3B.js";import"./ToggleButton-B2NYYGfM.js";import"./SuggestionItem-Cc3ypeyC.js";import"./index-D8bEAmHz.js";import"./Option-CGYv30eN.js";import"./index-BrnoUve9.js";import"./SegmentedButton-QT7W_oDj.js";import"./index-fa2Z_Y62.js";import"./Select-C87V-1kl.js";import"./InvisibleMessage-CMW2idQ1.js";import"./slim-arrow-down-DeKj_Omp.js";import"./index-DuxSBgoz.js";import"./index-BGidFgA2.js";import"./index-DqUqhbMA.js";import"./index-Bqbzj0yD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLilwRFH.js";import"./group-2-CGyqUumC.js";import"./sort-descending-BOci2nTe.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-zQYKv0o9.js";import"./utils-Di9AT2dj.js";import"./index-C-AEjq-0.js";import"./index-CxGXb5fb.js";import"./index-DD2enJoe.js";import"./navigation-down-arrow-CCbQ8F9I.js";import"./navigation-right-arrow-DX-uF-k2.js";import"./navigation-right-arrow-Blea1uTb.js";import"./useCurrentTheme-BkZ7cZzQ.js";import"./index-nUwBPQlT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bvd5TkXY.js";import"./paper-plane-q7ULz0vY.js";import"./index-Yy2MGehE.js";import"./less-B94jky_m.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
