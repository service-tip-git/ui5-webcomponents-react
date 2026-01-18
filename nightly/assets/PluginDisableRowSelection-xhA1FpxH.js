import{j as e}from"./iframe-BayyK-Sd.js";import{useMDXComponents as n}from"./index-Bzssb8Xd.js";import{I as r,F as s}from"./CommandsAndQueries-BWULVlsD.js";import{M as l,C as a}from"./blocks-C_Hnd7fg.js";import"./Tag-BpBS-AuZ.js";import"./index-CvYFyR11.js";import"./copy-DZZbIDUz.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-QbrzZX1h.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiVk4GbQ.js";import"./index-DV2g_43r.js";import"./index-D_W1qX2w.js";import"./Link-DsRy4Mnv.js";import"./index-CTxam_11.js";import"./index-CvVYJJGO.js";import"./index-DGVYbyp5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CiI3G7zh.js";import"./addCustomCSSWithScoping-BRKADkGf.js";import"./index-CK9HJhHW.js";import"./information-D5ng3oI8.js";import"./sys-enter-2-C1yPBG5C.js";import"./alert-C5buViQ-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-OE18-JdZ.js";import"./delete-BbgUJXGi.js";import"./settings-BmyXWHXN.js";import"./NoData-CId8to51.js";import"./IllustratedMessage-DrJiWY3J.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-C-7XSeeS.js";import"./index-C_SEzddK.js";import"./index-Cfv719qF.js";import"./slim-arrow-down-CYWrhP8K.js";import"./Input-JXz_mghp.js";import"./ResponsivePopoverCommon.css-BE3AHcrB.js";import"./ValueStateMessage.css-CPPmdzjG.js";import"./Suggestions.css-DMbMSnFv.js";import"./ListBoxItemGroupTemplate-YGlaa4-L.js";import"./ComboBoxItemGroup-B66yYzM_.js";import"./ListItemBaseTemplate-C2wpCpOj.js";import"./Token-DJPiW-9k.js";import"./ScrollEnablement-b9VRk5D0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Qcq6pFUS.js";import"./ToggleButton-DNEd488t.js";import"./SuggestionItem-Ce7Hn2Zx.js";import"./index-CMGyAd1y.js";import"./Option-DsNeIMXC.js";import"./index-BKzi5p7m.js";import"./SegmentedButton-CjIp9jgc.js";import"./index-CGNi-nkR.js";import"./Select-W3YZdL-T.js";import"./InvisibleMessage-CV5ENGws.js";import"./slim-arrow-down-BfT4kuc7.js";import"./index-c6l7EBuN.js";import"./index-CphH-Mq2.js";import"./index-BovCb11M.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BItiagYO.js";import"./group-2-BYV4hW0u.js";import"./sort-descending-D8jO5ZBY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWjYcQuY.js";import"./utils-BxDZ9J52.js";import"./index-Ca_HsQoM.js";import"./index-BFBr5osT.js";import"./index-DIe0Mc4Y.js";import"./navigation-down-arrow-SKyq9Gew.js";import"./navigation-right-arrow-BNZl5xyh.js";import"./navigation-right-arrow-D0AjCoAk.js";import"./useCurrentTheme-BgQwIHp1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cy8kD9Ns.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlVbLN3l.js";import"./paper-plane-C7yKcpS7.js";import"./index-BCW3PpbP.js";import"./less-Dn7O_2zP.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
