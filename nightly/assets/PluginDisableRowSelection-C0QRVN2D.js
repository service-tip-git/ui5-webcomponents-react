import{j as e}from"./iframe-Bg524aqp.js";import{useMDXComponents as n}from"./index-B-rwzkjC.js";import{I as r,F as s}from"./CommandsAndQueries-Bxzaytg-.js";import{M as l,C as a}from"./blocks--Wel_jE1.js";import"./Tag-DNMuD7A5.js";import"./index-B9tuTECn.js";import"./copy-BgS9Q-8_.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BtcTbGIn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqYTt2r-.js";import"./index-DPNsglmV.js";import"./index-TfZZnQDd.js";import"./Link-DzzFCouB.js";import"./index-iejN5y1T.js";import"./index-r1bogqKf.js";import"./index-tDWQXHER.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkKuq7AH.js";import"./addCustomCSSWithScoping-DFbnSqfd.js";import"./index-DxUoW9XL.js";import"./information-2dCGwvE_.js";import"./sys-enter-2-CO93Qjp1.js";import"./alert-BG-ILaUe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ozcYxpI5.js";import"./delete-Bbvt8Ot-.js";import"./settings-BhmSlLPC.js";import"./NoData-Bj02WUEt.js";import"./IllustratedMessage-R2CzAWXp.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BIlaAfwD.js";import"./index-CfgOXvqI.js";import"./index-DE4ZHMUP.js";import"./slim-arrow-down-CRZdlGQF.js";import"./Input-DmAcj6-y.js";import"./ResponsivePopoverCommon.css-DvaTlIz3.js";import"./ValueStateMessage.css-qD0DeEG7.js";import"./Suggestions.css-ZRTSrlW8.js";import"./ListBoxItemGroupTemplate-DXJv0PMK.js";import"./ComboBoxItemGroup-Dsg5vEL4.js";import"./ListItemBaseTemplate-BpYqWiGX.js";import"./Token-9cJC13pc.js";import"./ScrollEnablement-C7eLNzW1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bewcenzz.js";import"./ToggleButton-DPa7jhtq.js";import"./SuggestionItem-Dpk_4CFh.js";import"./index-CdKTVzwi.js";import"./Option-ClvqOWQS.js";import"./index-qJ7YjxyU.js";import"./SegmentedButton-DE8rqkD-.js";import"./index-DYMzkGI0.js";import"./Select-B4bz0mNo.js";import"./InvisibleMessage-DXpW_GiJ.js";import"./slim-arrow-down-DwyYquXh.js";import"./index-CNB43ZnJ.js";import"./index-DIBXYbfE.js";import"./index-CPicDcbf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMn6lE9G.js";import"./group-2--_rJdnmk.js";import"./sort-descending-CAbRK7tC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BecMM91E.js";import"./utils-Cud8cjsY.js";import"./index-Cw39ZeIw.js";import"./index-C0z4qlZR.js";import"./index-aDnJKja3.js";import"./navigation-down-arrow-BzyymRLp.js";import"./navigation-right-arrow-CUK1IzT8.js";import"./navigation-right-arrow-BPrwIZ8M.js";import"./useCurrentTheme-CR40IPum.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B5Tp7z0D.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DiCPj2HI.js";import"./paper-plane-BaN203_j.js";import"./index-MM_7rShN.js";import"./less-Bs9eXWxF.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
