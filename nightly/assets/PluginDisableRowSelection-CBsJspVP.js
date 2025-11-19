import{j as e}from"./iframe-DOg6M_II.js";import{useMDXComponents as n}from"./index-kwVVcFLm.js";import{I as r,F as s}from"./CommandsAndQueries-wl0h9BMr.js";import{M as l,C as a}from"./blocks-CUc5S4F5.js";import"./Tag-BltckGaY.js";import"./index-bsC8MgY-.js";import"./copy-BKSrEciR.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BIWbaJdZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwpJeIal.js";import"./index-DVpre6_h.js";import"./index-B0K8C7sE.js";import"./Link-CDmjIio6.js";import"./index-DMnxNTo_.js";import"./index-BEZkwnlN.js";import"./index-BdRkl8ET.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Drkj1-4P.js";import"./addCustomCSSWithScoping-DpPx9qfb.js";import"./index-DS0sFSVa.js";import"./information-BuhVNJUa.js";import"./sys-enter-2-DbIwdKeB.js";import"./alert-BRGoaqba.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CLCBV3Xg.js";import"./delete-D-43NgF8.js";import"./settings-Delvnyut.js";import"./NoData-ByUhu_o5.js";import"./IllustratedMessage-diAipt8-.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-gN2Us1tn.js";import"./index-B9k7ELm0.js";import"./index-B_vYmLao.js";import"./slim-arrow-down-BjniYreE.js";import"./Input-C9rpsAyC.js";import"./ResponsivePopoverCommon.css-C0PtYRqH.js";import"./ValueStateMessage.css-CZYppwl8.js";import"./Suggestions.css-Ixrm98By.js";import"./ListBoxItemGroupTemplate-BDzOYuSZ.js";import"./ComboBoxItemGroup-BU19uPT9.js";import"./ListItemBaseTemplate-hoIzMUwH.js";import"./Token-iSuK3wO6.js";import"./ScrollEnablement-BMPvWcSr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrVmc6dv.js";import"./ToggleButton-CsKP69jd.js";import"./SuggestionItem-D-yPu1Sv.js";import"./index-Mf92dVtq.js";import"./Option-DNSpB8f-.js";import"./index-BCTwa-v4.js";import"./SegmentedButton-DNK1Qa2S.js";import"./index-Cs3-egX0.js";import"./Select-BDYl_oCe.js";import"./InvisibleMessage-DycTFmVM.js";import"./slim-arrow-down-DfFKFXMU.js";import"./index-VxedkpRq.js";import"./index-CH3b2kB8.js";import"./index-CISwnltl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bi2MAW2I.js";import"./group-2-MmNiSVbN.js";import"./sort-descending-CD9YT9Bk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B_KBcAtw.js";import"./utils-0ELTneL-.js";import"./index-DFQjFJ3S.js";import"./index-DM2b0yOa.js";import"./index-BeSrSbRo.js";import"./navigation-down-arrow-CyIa-Usz.js";import"./navigation-right-arrow-BLaN-JkZ.js";import"./navigation-right-arrow-CqWeCK0J.js";import"./useCurrentTheme-DESyq6Ge.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CO9CMtFr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CA7b8y0H.js";import"./paper-plane-BSmmtRX7.js";import"./index-DMnTXtcq.js";import"./less-CZFOeLNB.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
