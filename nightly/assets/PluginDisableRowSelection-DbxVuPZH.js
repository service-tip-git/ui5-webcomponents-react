import{j as e}from"./iframe-OB3gpUrt.js";import{useMDXComponents as n}from"./index-tYZXwc8M.js";import{I as r,F as s}from"./CommandsAndQueries-DdKCqOgb.js";import{M as l,C as a}from"./blocks-W1zrio7-.js";import"./Tag-BYZWsksY.js";import"./index-DTbk-QpW.js";import"./copy-Cn9jluxF.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dj2Ui42u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YBnae26q.js";import"./index-DJjROlPg.js";import"./index-KwKt-eeL.js";import"./Link-04tQrlfI.js";import"./index-DeGKliVC.js";import"./index-CGtjIa9c.js";import"./index-BZk-qSok.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B6If5ETY.js";import"./addCustomCSSWithScoping-DcUbYumu.js";import"./index-DSe1Jsyu.js";import"./information-EFB093TQ.js";import"./sys-enter-2-BDVh3TOJ.js";import"./alert-kdfQmJam.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPHD3nDA.js";import"./delete-BIeDl-Ta.js";import"./settings-CTUquDVY.js";import"./NoData-n8Nq-IT5.js";import"./IllustratedMessage-t7HTQHsk.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DIPdowOu.js";import"./index-CanaeHWT.js";import"./index-RQHb4HK-.js";import"./slim-arrow-down-DYGYxXVh.js";import"./Input-DK8mjIq4.js";import"./ResponsivePopoverCommon.css-D14pwlR9.js";import"./ValueStateMessage.css-BhAYjEKZ.js";import"./Suggestions.css-HKZ3bD8M.js";import"./ListBoxItemGroupTemplate-CeZ64DwH.js";import"./ComboBoxItemGroup-DdcF-j7O.js";import"./ListItemBaseTemplate-BKr4_BQZ.js";import"./Token-BI74ljUx.js";import"./ScrollEnablement-FujgOftY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cF0IxW3X.js";import"./ToggleButton-fgX17mlx.js";import"./SuggestionItem-C0SAz8sz.js";import"./index-Btplke0T.js";import"./Option-CflwkonD.js";import"./index-pcXHjSUb.js";import"./SegmentedButton-om5uqAak.js";import"./index-CHsEA-_K.js";import"./Select-2koy19zz.js";import"./InvisibleMessage-B3GDFN-r.js";import"./slim-arrow-down-_hqmKTXT.js";import"./index-NoU0USPq.js";import"./index-DWl07NkK.js";import"./index-CFAbp54K.js";import"./index-BI78Dgdb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pNoIBhlO.js";import"./group-2-6ULYOJW8.js";import"./sort-descending-DnjMAKvJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-98n-Rp.js";import"./utils-BkqRVCAz.js";import"./index-ezjhGbTq.js";import"./index-DLl3Lmz6.js";import"./index-DTksDkVP.js";import"./navigation-down-arrow-veqq6R5P.js";import"./navigation-right-arrow-BpamG8Wu.js";import"./navigation-right-arrow-5Ow3qQi6.js";import"./useCurrentTheme-CxwmJY3a.js";import"./index-owm7Dkhx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-MRQZvrlb.js";import"./paper-plane-zFWohFwR.js";import"./index-B189vp1A.js";import"./less-BuCilNou.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
