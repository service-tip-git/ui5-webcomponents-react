import{j as e}from"./iframe-CPcs5bjw.js";import{useMDXComponents as n}from"./index-D3pCSUGP.js";import{I as r,F as s}from"./CommandsAndQueries-BRqm99_0.js";import{M as l,C as a}from"./blocks-CciAsFaW.js";import"./Tag-BRzUE0pu.js";import"./index-DdCyPygk.js";import"./copy-DrEgra2j.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CNNMu7oZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sAPOTiYQ.js";import"./index-DSqRs7NE.js";import"./index-CE-f9LSp.js";import"./Link-CvciZabG.js";import"./index-DbiDsCRE.js";import"./index-DlX2UYU-.js";import"./index-B7pfH-Zg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-MvtR7iaQ.js";import"./addCustomCSSWithScoping-CWQJntcH.js";import"./index-Cumht0xF.js";import"./information-DGDTMoga.js";import"./sys-enter-2-DPq_4UKR.js";import"./alert-CqgikgLY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DcSLL8pw.js";import"./delete-6FPl9hw2.js";import"./settings-BkIX4e0f.js";import"./NoData-DX4tqYkJ.js";import"./IllustratedMessage-DW30GHVf.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BXiYTazg.js";import"./index-DyO1TDcH.js";import"./index-Be2buheR.js";import"./slim-arrow-down-fC08silo.js";import"./Input-BBd04gJ3.js";import"./ResponsivePopoverCommon.css-BRxBb6R7.js";import"./ValueStateMessage.css-BuHdH1UG.js";import"./Suggestions.css-bhLISna5.js";import"./ListBoxItemGroupTemplate-CNbeaoIX.js";import"./ComboBoxItemGroup-CAE0Duax.js";import"./ListItemBaseTemplate-TuOpbkNi.js";import"./Token-BhhlWiIl.js";import"./ScrollEnablement-C5TvNcLx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cf_RZ7_h.js";import"./ToggleButton-C-FM17-B.js";import"./SuggestionItem-SZn9Bgxa.js";import"./index-BTI3rLEY.js";import"./Option-CRy1QaR1.js";import"./index-CRCGoRGr.js";import"./SegmentedButton-DFyf0ped.js";import"./index-CQM2nEnH.js";import"./Select-D_8TYVG-.js";import"./InvisibleMessage-CS2hWN9Q.js";import"./slim-arrow-down-glTmVVU-.js";import"./index-Cq0d6RS0.js";import"./index-DLYHnpAo.js";import"./index-DHUEZhQD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DSJPsRuT.js";import"./group-2-De5mHDN4.js";import"./sort-descending--PDnUrf_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BcjHawbS.js";import"./utils-Cq29d2Kw.js";import"./index-CLVFcZa8.js";import"./index-DMMibOaO.js";import"./index-DKvhJ5Kx.js";import"./navigation-down-arrow-gfYqVZC2.js";import"./navigation-right-arrow-DCXuPhhE.js";import"./navigation-right-arrow-BUporjHX.js";import"./useCurrentTheme-EJjKiAvs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CmCCvj8I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CfoWS_vt.js";import"./paper-plane-VGT_jBYF.js";import"./index-Brz3_XP5.js";import"./less-_gVUTZDL.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
