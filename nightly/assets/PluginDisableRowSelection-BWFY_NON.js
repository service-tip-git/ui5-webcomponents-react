import{j as e}from"./iframe-plJY_px0.js";import{useMDXComponents as n}from"./index-CNgSdSBz.js";import{I as r,F as s}from"./CommandsAndQueries-CSEdQQvR.js";import{M as l,C as a}from"./blocks-Q5gmWwgb.js";import"./Tag-Dh3wWudw.js";import"./index-DSqDyml0.js";import"./copy-mR5XScRR.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-OXoTGLJY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2EbIuvCl.js";import"./index-CULtK81i.js";import"./index-D3V1C0u7.js";import"./Link-Bty8oyFV.js";import"./index-Dd7Sfpx-.js";import"./index-DfokaHEY.js";import"./index-B337CKIF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQsTwQe_.js";import"./addCustomCSSWithScoping-K4GM8_aQ.js";import"./index-t--BkPKT.js";import"./information-CFU4bu3b.js";import"./sys-enter-2-CWJ3J9PS.js";import"./alert-Cvpxudnd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DS99HCgK.js";import"./delete-eXKtkG1a.js";import"./settings-B4zUkila.js";import"./NoData-vjKh1Mr_.js";import"./IllustratedMessage-B3aadiAZ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-4tlbkylG.js";import"./index-DkneJmbW.js";import"./index-brt5d6po.js";import"./slim-arrow-down-BTqVQDWC.js";import"./Input-qu-i9z2w.js";import"./ResponsivePopoverCommon.css-C--dNoH7.js";import"./ValueStateMessage.css-65I0H3x5.js";import"./Suggestions.css-C34DaZQw.js";import"./ListBoxItemGroupTemplate--HwHHtzG.js";import"./ComboBoxItemGroup-CJJD_zkv.js";import"./ListItemBaseTemplate-DPXdBI9X.js";import"./Token-CtYzp5bp.js";import"./ScrollEnablement-C3kxd9Sb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Du-JodLR.js";import"./ToggleButton-BVbL9ept.js";import"./SuggestionItem-CSeK9fns.js";import"./index-BfNy1JVl.js";import"./Option-kaAYALSt.js";import"./index-C1pDbGHC.js";import"./SegmentedButton-CoeXh0KC.js";import"./index-B1eO7s43.js";import"./Select-BOpGp0Rm.js";import"./InvisibleMessage-fL3jWeDc.js";import"./slim-arrow-down-2gbZmUST.js";import"./index-B6yr2B_f.js";import"./index-k_dsVjf7.js";import"./index-CmDLye-F.js";import"./index-CKdbXzvk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Qq0nKm9O.js";import"./group-2-DmjkdZiv.js";import"./sort-descending-G3a3Bk4A.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BJvTlN0-.js";import"./utils-BmYl7bBX.js";import"./index-CuirFJHi.js";import"./index-jIxgqskF.js";import"./index-DnBhArpB.js";import"./navigation-down-arrow-CPK2vVem.js";import"./navigation-right-arrow-DzWp8vrQ.js";import"./navigation-right-arrow-CbRKCuia.js";import"./useCurrentTheme-CPuhdXAo.js";import"./index-CfCdmgBi.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmQyw8RD.js";import"./paper-plane-BzpUcvaz.js";import"./index-_e_VAWTV.js";import"./less-Cv2JCqO3.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
