import{j as e}from"./iframe-D9bcJVt0.js";import{useMDXComponents as n}from"./index-DEcJNjgo.js";import{I as r,F as s}from"./CommandsAndQueries-e_oDEhyZ.js";import{M as l,C as a}from"./blocks-jEcy0Ls1.js";import"./Tag-S7_09THp.js";import"./index-D7Hu_hwq.js";import"./copy-BEICJ5u7.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DLNw0oL7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DF6sI-fG.js";import"./index-CMrwt2SW.js";import"./index-C3UoEV3F.js";import"./Link-Bg4Kb6iX.js";import"./index-o9G_R3kL.js";import"./index-Dsq5N9Gi.js";import"./index-BuSBQB3f.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-saeF9JMt.js";import"./addCustomCSSWithScoping-BvxM2LWg.js";import"./index-CqnXC52g.js";import"./information-rD16map1.js";import"./sys-enter-2-mNekXiHd.js";import"./alert-DSYk_cjm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DhXMnXqd.js";import"./delete-CuHBZVP5.js";import"./settings-DojOHTGJ.js";import"./NoData-DV_7CgAU.js";import"./IllustratedMessage-JmaURS-8.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DKg5IlHC.js";import"./index-BDwBt9OC.js";import"./index-BkkfTKSR.js";import"./slim-arrow-down-BD5IYpYe.js";import"./Input-DgD_KIuK.js";import"./ResponsivePopoverCommon.css-CpNcVGzg.js";import"./ValueStateMessage.css-7nL_K-x6.js";import"./Suggestions.css-BXIA00KI.js";import"./ListBoxItemGroupTemplate-CjlaekqL.js";import"./ComboBoxItemGroup-Pa31sPb6.js";import"./ListItemBaseTemplate-CBhJdBlB.js";import"./Token-h6BGlN2Z.js";import"./ScrollEnablement-BWuQyb0_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CfYt_15D.js";import"./ToggleButton-D9sfR6lE.js";import"./SuggestionItem-CsdeB4_z.js";import"./index-CXj5AEqi.js";import"./Option-C6arWRGE.js";import"./index-18lR1lm6.js";import"./SegmentedButton-DQtRU8vV.js";import"./index-ByPvdeD4.js";import"./Select-4TgEfMLB.js";import"./InvisibleMessage-Dar0vH_K.js";import"./slim-arrow-down-DAxhtMM2.js";import"./index-CcVbj5Dn.js";import"./index-BvhLCcwp.js";import"./index-DLqaN8TD.js";import"./index-CZq9Z5fi.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ButLvEeW.js";import"./group-2-BIkQBEt2.js";import"./sort-descending-BdlxQXMC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4ESEe8gp.js";import"./utils-uixZui5c.js";import"./index-BQ0AYfKe.js";import"./index-L7kHwJYz.js";import"./index-dIC04Ydi.js";import"./navigation-down-arrow-DNphUK2M.js";import"./navigation-right-arrow-C7E9KFb7.js";import"./navigation-right-arrow-CWcAZOwt.js";import"./useCurrentTheme-_hoQyvx4.js";import"./index-yxoGO_zr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL--5EK8X_4.js";import"./paper-plane-xqMM7h3_.js";import"./index-BtA_KE9i.js";import"./less-5iCe7j9C.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
