import{j as e}from"./iframe-BWDYb3Af.js";import{useMDXComponents as n}from"./index-ORMlrOnf.js";import{I as r,F as s}from"./CommandsAndQueries-CZ5MS_my.js";import{M as l,C as a}from"./blocks-B8FJqnZy.js";import"./Tag-BIMutbIq.js";import"./index-Dolwn4re.js";import"./copy-weALSuoF.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-QDAUM4uZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3Oal-l-.js";import"./index-BHXKA4z_.js";import"./index-Dz7IZliI.js";import"./Link-DcGHp14a.js";import"./index-CxNU_raA.js";import"./index-CO7aikHi.js";import"./index-_k1TaEpY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-wjVhlBmy.js";import"./addCustomCSSWithScoping-BLKtnAI1.js";import"./index-DF6wuqqy.js";import"./information-BiNCCmk0.js";import"./sys-enter-2-D_DUss_0.js";import"./alert-mysBcZzV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B7bCkUlY.js";import"./delete-DEj14gho.js";import"./settings-DoVib3WO.js";import"./NoData-B7rkzdNs.js";import"./IllustratedMessage-CRWU2Kq3.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DvxZpi3I.js";import"./index-fEJgj2Qv.js";import"./index-DmOxMMWJ.js";import"./slim-arrow-down-BcIR6NjK.js";import"./Input-BuboHiLs.js";import"./ResponsivePopoverCommon.css-DBGwKhkV.js";import"./ValueStateMessage.css-BGu5mUtQ.js";import"./Suggestions.css-DXhv7lhm.js";import"./ListBoxItemGroupTemplate-DzjBgN9r.js";import"./ComboBoxItemGroup-De-n6S3o.js";import"./ListItemBaseTemplate-IGyQuAXK.js";import"./Token-BeAfCI2H.js";import"./ScrollEnablement-CqDxSJRv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cn1gqWK2.js";import"./ToggleButton-06oZt1wz.js";import"./SuggestionItem-6b4vyV5u.js";import"./index-B8a_sAU-.js";import"./Option-D5fi9fAF.js";import"./index-V8TD3imX.js";import"./SegmentedButton-DS-7HWK8.js";import"./index-C2jRL8Y_.js";import"./Select-jr8H4-4W.js";import"./InvisibleMessage-ub_8KxmD.js";import"./slim-arrow-down-D6HsblN4.js";import"./index-B6QSlgiQ.js";import"./index-CWl53DLC.js";import"./index-DFScramK.js";import"./index-cBcbMXT4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-qtXQdY9O.js";import"./group-2-DCUOoeaW.js";import"./sort-descending-3oWaEPr0.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-xDc2LBmD.js";import"./utils-An7ewTfO.js";import"./index-1YejsSDM.js";import"./index-CmTGtR_u.js";import"./index-BZK_a3Nn.js";import"./navigation-down-arrow-c1lYwltu.js";import"./navigation-right-arrow-hLiMkplw.js";import"./navigation-right-arrow-BBlgzrG-.js";import"./useCurrentTheme-O3A-J4fk.js";import"./index-BA5CrxYN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CUtE-sIq.js";import"./paper-plane-B4taa3Yl.js";import"./index-gTEpRQo7.js";import"./less-DKb9TyNt.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
