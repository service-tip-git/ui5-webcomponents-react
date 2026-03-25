import{j as e}from"./iframe-DGGZytBJ.js";import{useMDXComponents as n}from"./index-D8y7UPZ7.js";import{I as r}from"./CommandsAndQueries-D_r1Ov46.js";import{M as s,C as l}from"./blocks-C1QAXsZr.js";import"./Tag-ClZ3M_pH.js";import"./index-v17LESiz.js";import"./copy-BPr0Zg61.js";import{F as a}from"./Footer-BZbEK1zw.js";import"./PageNotFound-3fOtIs4_.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CUL54hGv.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BtfuXmst.js";import"./index-DJziCtzG.js";import"./index-CeBSKfFB.js";import"./index-b7sAROVa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEpKqDTh.js";import"./addCustomCSSWithScoping-DahugnlS.js";import"./index-4SX8_eNa.js";import"./index-ctFb2r21.js";import"./index-DZeitEZj.js";import"./information-D_lZSOlz.js";import"./sys-enter-2-DzyKamY9.js";import"./alert--InUH-4I.js";import"./index-B54b-1ni.js";import"./Illustrations-BSUAI0rE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B84HYl_E.js";import"./delete-SJdH7pQ4.js";import"./settings-CAJyZbbd.js";import"./NoData-C4BqacGP.js";import"./NoFilterResults-BL8qBwn1.js";import"./index-BU5FNxMY.js";import"./IllustratedMessage-_jEEabQa.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-JDHBBDHb.js";import"./Input-BOYCocWs.js";import"./ResponsivePopoverCommon.css-CuamSE7y.js";import"./ValueStateMessage.css-DuNfrXP7.js";import"./Suggestions.css-COf1yHSo.js";import"./ListBoxItemGroupTemplate-2xWZNDwK.js";import"./ComboBoxItemGroup-D5uN8nOJ.js";import"./ListItemBaseTemplate-oQlxc1lO.js";import"./Token-cQg9GVNS.js";import"./ScrollEnablement-DwIhDXw6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-R9GFPOIC.js";import"./ToggleButton-CgFbbSab.js";import"./multiselect-all-Njl7KSgU.js";import"./SuggestionItem-vp3O8px8.js";import"./index-CJkDWZAj.js";import"./Option-l5eTmgDe.js";import"./index-BA5YYjZc.js";import"./SegmentedButton-DQ6hDiRi.js";import"./index-EXDyYm2C.js";import"./Select-C1jqGXCC.js";import"./InvisibleMessage-D_iVEZ-h.js";import"./index-BTLt7o1c.js";import"./index-0M7GCjcp.js";import"./index-CRnXDqjI.js";import"./index-n1TR-N6l.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pGciUh9e.js";import"./group-2-BfNzp3f2.js";import"./sort-descending-D9abY-SU.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DuFRV_vn.js";import"./utils-BfyCZP0-.js";import"./index-CR_QxdVU.js";import"./index-Dpn5zcT7.js";import"./index-Dp-mv8t6.js";import"./navigation-down-arrow-Tmk039L5.js";import"./navigation-right-arrow-BYzIZaOi.js";import"./navigation-right-arrow-cBTAD0Yi.js";import"./useCurrentTheme-BkGgWsWg.js";import"./index-BZwsWFyc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BEA5tLHH.js";import"./paper-plane-lDy3rZNF.js";import"./index-D64P37aV.js";import"./less-CQhJ4OcE.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
