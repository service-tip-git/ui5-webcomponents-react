import{j as e}from"./iframe-DYfg4QHt.js";import{useMDXComponents as n}from"./index-CVbrUuPE.js";import{I as r,F as s}from"./CommandsAndQueries-Bv0cgQmk.js";import{M as l,C as a}from"./blocks-BUAqhVj9.js";import"./Tag-DSyohh1a.js";import"./index-BmTrkp-7.js";import"./copy-D6hWl56-.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CdlnE1KK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7hJqHh2.js";import"./index-BKQsUqka.js";import"./index-Cey_WqgE.js";import"./Link-DNgH-frF.js";import"./index-DHfPdgXp.js";import"./index-DGISTYKI.js";import"./index-91p8b6xm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN-x3Tox.js";import"./addCustomCSSWithScoping-D5zE1nWM.js";import"./index-Cmi2IW4V.js";import"./information-DmJ60sG9.js";import"./sys-enter-2-DM66m4rJ.js";import"./alert-CCfcH-Mh.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vgLY-pWJ.js";import"./delete-D34_mFXP.js";import"./settings-gx1Rt1L_.js";import"./NoData-DlyRoGui.js";import"./IllustratedMessage-DRxGb1zp.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B7x9pabn.js";import"./index-DahuAuMf.js";import"./index-BeUWAGwZ.js";import"./slim-arrow-down-CW3E1SKi.js";import"./Input-iisXfHsF.js";import"./ResponsivePopoverCommon.css-CUkbRKkQ.js";import"./ValueStateMessage.css-JCR7oNs7.js";import"./Suggestions.css-CvEadgHg.js";import"./ListBoxItemGroupTemplate-CVIbduo6.js";import"./ComboBoxItemGroup-NvpVhGDp.js";import"./ListItemBaseTemplate-C8z7WXl_.js";import"./Token-XCzL_gO_.js";import"./ScrollEnablement-CNfKzKUR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard--jyjJfbY.js";import"./ToggleButton-CNFVQAAc.js";import"./SuggestionItem-evSaZZRy.js";import"./index-DZ5Gyh8u.js";import"./Option-BXSqJg_S.js";import"./index-CQqiTtty.js";import"./SegmentedButton-BjQ27BtY.js";import"./index-CVlyf3BN.js";import"./Select-CVTIiGaA.js";import"./InvisibleMessage-CgGc0QHI.js";import"./slim-arrow-down-Y-ZQwTJr.js";import"./index-C-fiAxLB.js";import"./index-B18_A3pn.js";import"./index-Co1UuDMa.js";import"./index-C0HSA-PR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CoR2QbFK.js";import"./group-2-CBo-4-zi.js";import"./sort-descending-PAYd66BW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dzn1Xrdp.js";import"./utils-9o_atc5t.js";import"./index-DGWGpo3w.js";import"./index-CObhiRst.js";import"./index-yUqfaSMu.js";import"./navigation-down-arrow-ZAYOJffR.js";import"./navigation-right-arrow-CeM1y1gw.js";import"./navigation-right-arrow-yI36QQVV.js";import"./useCurrentTheme-PNoownmV.js";import"./index-BBshEaSl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CSLDn2Wo.js";import"./paper-plane-Bj3JAkAg.js";import"./index-CWOZpVQI.js";import"./less-CeHycIPZ.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
