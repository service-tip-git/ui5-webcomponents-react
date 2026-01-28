import{j as e}from"./iframe-w0_MYrZh.js";import{useMDXComponents as n}from"./index-BycN9fOm.js";import{I as r,F as s}from"./CommandsAndQueries-BLQv3roD.js";import{M as l,C as a}from"./blocks-DJOHNqcV.js";import"./Tag-BpDpCVC0.js";import"./index-De2hY3Dy.js";import"./copy-D2R0vLQ4.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DBKY7q4K.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0GVc7AW.js";import"./index-URs7g74M.js";import"./index-BgtBDdHh.js";import"./Link-BZHTtj1b.js";import"./index-D2-ZQ1Lf.js";import"./index-BD0pDq5_.js";import"./index-CJZSgnB8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D4L-H8MS.js";import"./addCustomCSSWithScoping-BxnbVzCY.js";import"./index-vKqE_SS0.js";import"./information-DqXgTAXV.js";import"./sys-enter-2-BeQRv1GM.js";import"./alert-CuXO44HU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dprp07lb.js";import"./delete-BCvmEI5O.js";import"./settings-C3yqhbag.js";import"./NoData-QRZWZJd0.js";import"./IllustratedMessage-T-nSz2oL.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-5v4MWfGb.js";import"./index-DBuLBnCn.js";import"./index-ZUmmbONo.js";import"./slim-arrow-down-_tiVkR_W.js";import"./Input-B947RaFp.js";import"./ResponsivePopoverCommon.css-CIKpOnPy.js";import"./ValueStateMessage.css-DwWJ9RXg.js";import"./Suggestions.css-BNHIGeRt.js";import"./ListBoxItemGroupTemplate-BE7ZF0yd.js";import"./ComboBoxItemGroup-j-ogm9Es.js";import"./ListItemBaseTemplate-hZITbmoX.js";import"./Token-wyHKBYA3.js";import"./ScrollEnablement--wSGuTgj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-PkfEJwLh.js";import"./ToggleButton-CZdaKOxJ.js";import"./SuggestionItem-MmtuVuyI.js";import"./index-BY2KfaQI.js";import"./Option-C_lYdTgQ.js";import"./index-2BstYlQB.js";import"./SegmentedButton-FkSSjm_Z.js";import"./index-WmGREpLP.js";import"./Select-C7o0oMjf.js";import"./InvisibleMessage-RrW4HMOA.js";import"./slim-arrow-down-bs2ksNJ4.js";import"./index-BPXy1nrS.js";import"./index-BbJ5v37o.js";import"./index-Dz8tpwGV.js";import"./index-Cw510Bsp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Vokmh8yA.js";import"./group-2-DbZe8PL5.js";import"./sort-descending-BDE1i8DR.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BtYKWXyc.js";import"./utils-WBofKG4w.js";import"./index-B_sa1bRi.js";import"./index-mtpe59v8.js";import"./index-DUsoVupR.js";import"./navigation-down-arrow-Df6Mn4at.js";import"./navigation-right-arrow-Bk6HMVMe.js";import"./navigation-right-arrow-R9P1yLbk.js";import"./useCurrentTheme-B5gLxteq.js";import"./index-DqstkdJN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-YFdiD547.js";import"./paper-plane-BLf9WuxO.js";import"./index-BwZ6X2fE.js";import"./less-B5EuyQX2.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
