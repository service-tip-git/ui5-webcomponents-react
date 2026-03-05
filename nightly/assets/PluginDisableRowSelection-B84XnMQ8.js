import{j as e}from"./iframe-Yrd5HXiX.js";import{useMDXComponents as n}from"./index-DOxT51h1.js";import{I as r}from"./CommandsAndQueries-C2FZOFS4.js";import{M as s,C as l}from"./blocks-Dvv2YIoD.js";import"./Tag-A6uWcl63.js";import"./index-BF16G_0e.js";import"./copy-BoNX54Ls.js";import{F as a}from"./Footer-CkKCjd3s.js";import"./PageNotFound-kNJyDscw.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D3z1Mx3x.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cr8Oti_G.js";import"./index-CfYuYIaa.js";import"./index-BUTU-Rlc.js";import"./index-B2vsuIMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN_dVplC.js";import"./addCustomCSSWithScoping-DB8Behso.js";import"./index-DA96fnb1.js";import"./index-Dz_82eM4.js";import"./index-Sv74Bfia.js";import"./information-BDrQXgLD.js";import"./sys-enter-2-BRBYXqiH.js";import"./alert-BtI3-0Jo.js";import"./index-CSbojWcx.js";import"./Illustrations-D8i7Iry7.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CK4uWCRt.js";import"./delete-BeVyXiYQ.js";import"./settings-sAoONwci.js";import"./NoData-hXKjP8_c.js";import"./NoFilterResults-qH3kPNMn.js";import"./index-Dmo0D1sN.js";import"./IllustratedMessage-DT11ntwf.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-C6Siqk_0.js";import"./slim-arrow-down-C66mVyft.js";import"./Input-biWYnwTr.js";import"./ResponsivePopoverCommon.css-Dhp5Q3jO.js";import"./ValueStateMessage.css-DaqWQCbh.js";import"./Suggestions.css-uVzdT4u-.js";import"./ListBoxItemGroupTemplate-0UhJkH8t.js";import"./ComboBoxItemGroup-BMqsW1Nd.js";import"./ListItemBaseTemplate-B4wrenP3.js";import"./Token-B55rgKOx.js";import"./ScrollEnablement-BBJzN_WO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-j7gFN2tu.js";import"./ToggleButton-BtobOlQE.js";import"./SuggestionItem-Y4FX-HD4.js";import"./index-CMMqyw3P.js";import"./Option-cgyjEXZH.js";import"./index-Cz-wHGnF.js";import"./SegmentedButton-3ZctE_fn.js";import"./index-DTvdeq0R.js";import"./Select-CXKgXvak.js";import"./InvisibleMessage-CtYhUk5a.js";import"./slim-arrow-down-CiI8zYHE.js";import"./index-BwT6bNsG.js";import"./index-C3srnBRe.js";import"./index-BBtrcJyj.js";import"./index-gHAbPdfd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bs4-TFnR.js";import"./group-2-DLZzwK5l.js";import"./sort-descending-BnKqQM8g.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CY9k3hyc.js";import"./utils-BLfMxc3Q.js";import"./index-BaFHnCrW.js";import"./index-3OijyU0m.js";import"./index-DZjWsdnu.js";import"./navigation-down-arrow-C1--d2l2.js";import"./navigation-right-arrow-DX6JBwhN.js";import"./navigation-right-arrow--1vFD5th.js";import"./useCurrentTheme-fwbh8NiD.js";import"./index-c0NDSFEN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DRlSD9Vi.js";import"./paper-plane-Dq5qbkzD.js";import"./index-BINom7PM.js";import"./less-CtIlRGB6.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};
