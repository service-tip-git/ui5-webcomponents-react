import{j as e}from"./iframe-CC5YTvQh.js";import{useMDXComponents as n}from"./index-Cq26BSP3.js";import{I as r,F as s}from"./CommandsAndQueries-CFtdiSUA.js";import{M as l,C as a}from"./blocks-BsOXarNI.js";import"./Tag-BlfrYy9_.js";import"./index-CzqjBntm.js";import"./copy-Dmf1qML3.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CQUBK3-g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BoEyxgcJ.js";import"./index-ZUwBAUQq.js";import"./index-DZNvYvST.js";import"./Link-BoZATccP.js";import"./index-CBMZmkal.js";import"./index-BSqVcJze.js";import"./index-Dnx65cB5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BdkJ8A28.js";import"./addCustomCSSWithScoping-DLLu2c7G.js";import"./index-Dtg_ecO1.js";import"./information-D0rIxsAi.js";import"./sys-enter-2-DYbT0ikl.js";import"./alert-D4tt3RNk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CT-64OOl.js";import"./delete-D2h8TM4S.js";import"./settings-afnv_1Um.js";import"./NoData-50jlYSou.js";import"./IllustratedMessage-DT3qL7vi.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Da8uvuY3.js";import"./index-2D2IVzvv.js";import"./slim-arrow-down-CXRWIFXL.js";import"./Input-Q1qp06Fs.js";import"./ResponsivePopoverCommon.css-D4bRbcp1.js";import"./ValueStateMessage.css-DZdfGl5Q.js";import"./Suggestions.css-oGOSH654.js";import"./ListBoxItemGroupTemplate-DbQMIiOT.js";import"./ComboBoxItemGroup-BHNpI85Y.js";import"./ListItemBaseTemplate-F0T_X0t2.js";import"./Token-Cm37GxNd.js";import"./ScrollEnablement-D_WinKmz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-UOq8Eb3o.js";import"./ToggleButton-DvtE59JH.js";import"./SuggestionItem-GZWE6oX3.js";import"./index-DdgZx-Mv.js";import"./Option-JMlPQoIR.js";import"./index-CR3s6vsE.js";import"./SegmentedButton-D968rhEd.js";import"./index-DR1KWNIH.js";import"./Select-Bicd3BEg.js";import"./InvisibleMessage-qwn7H305.js";import"./slim-arrow-down-mUJEFf7l.js";import"./index-wHUsYevm.js";import"./index-BmHMhL1b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BuAXIAij.js";import"./group-2-BHCyACyZ.js";import"./sort-descending-CzmEbK8x.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B_B2IdMY.js";import"./utils-DhJOckmR.js";import"./index-CClk8p2o.js";import"./index-CmBuHpMs.js";import"./index-Bvw_9-nq.js";import"./navigation-down-arrow-B4rXVi5n.js";import"./navigation-right-arrow-DsxjI3d8.js";import"./navigation-right-arrow-CxCTIBiF.js";import"./useCurrentTheme-Di3GYb_r.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DMBo-m9v.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DezL06Ik.js";import"./paper-plane-DrRGD0IK.js";import"./index-DipmRI2t.js";import"./less-BE1EluBh.js";import"./index-08aiBztu.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};
