import{j as e}from"./iframe-BclzIqLN.js";import{useMDXComponents as n}from"./index-C905Yc-m.js";import{I as r,F as s}from"./CommandsAndQueries-C-6YnLjZ.js";import{M as l,C as a}from"./blocks-B5DwqLl1.js";import"./Tag-BOdn4VYm.js";import"./index-DMn-V0Tk.js";import"./copy-D_MUueeP.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C9L8Guqw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-uVgUJkPs.js";import"./index-OKRhEBZf.js";import"./index-xMZLjYER.js";import"./Link-DPzQ2XbU.js";import"./index-C8ShhJNW.js";import"./index-5TTuORsb.js";import"./index-CJHMJsmF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cdo2Ur2Z.js";import"./addCustomCSSWithScoping-Dte7M2sk.js";import"./index-CnVdbwVS.js";import"./information-BdMHs198.js";import"./sys-enter-2-C5ziAGW-.js";import"./alert-BWh7aIvC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-5uGOFpph.js";import"./delete-Ch7YLa0V.js";import"./settings-BkOrUldx.js";import"./NoData-CfYSMo8M.js";import"./IllustratedMessage-DQgOxUn_.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BzUJY8Ac.js";import"./index-6F36v5VW.js";import"./index-D9jIvk-q.js";import"./slim-arrow-down-C1U4NX7H.js";import"./Input-C4okqpUf.js";import"./ResponsivePopoverCommon.css-ClkbcXC1.js";import"./ValueStateMessage.css-C3ePSvc8.js";import"./Suggestions.css-CUzKAV-7.js";import"./ListBoxItemGroupTemplate-CFqH3D8Q.js";import"./ComboBoxItemGroup-2Y-8-MYS.js";import"./ListItemBaseTemplate-CNmdHhwQ.js";import"./Token-B7V4WzzV.js";import"./ScrollEnablement-B33MvuIW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-tHNIwCbY.js";import"./ToggleButton-D72VLeFZ.js";import"./SuggestionItem-Cz2Vq1ey.js";import"./index-DSAIMpS1.js";import"./Option-CI6fqOL0.js";import"./index-CvCO9G33.js";import"./SegmentedButton-DOVaKk4o.js";import"./index-CS4FFq1R.js";import"./Select-Cwlz9_o0.js";import"./InvisibleMessage-D5CfVB6Z.js";import"./slim-arrow-down-BwnzdiOy.js";import"./index-vSHFeP63.js";import"./index-HdZD7NhL.js";import"./index-Byw1M1w0.js";import"./index-B-2M8oTR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CprbOLAW.js";import"./group-2-CQahafe6.js";import"./sort-descending-CxK_741y.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B8T8PvLa.js";import"./utils-CzDDLq5x.js";import"./index-YJUbNZXC.js";import"./index-DaX0lkO8.js";import"./index-Dfxpc54q.js";import"./navigation-down-arrow-9qHA5EUE.js";import"./navigation-right-arrow-C_dGSAC8.js";import"./navigation-right-arrow-C2F-yOS_.js";import"./useCurrentTheme-B0s-uCVG.js";import"./index-0NhHA-ih.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BUkTWivW.js";import"./paper-plane-D-v0DWGa.js";import"./index-Cbkmi62k.js";import"./less-B_W3_4w8.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
