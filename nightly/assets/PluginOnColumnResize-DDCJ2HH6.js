import{j as o}from"./iframe-RECRoZhV.js";import{useMDXComponents as n}from"./index-1tzPRbI6.js";import{I as r,F as m}from"./CommandsAndQueries-DPpsoP9s.js";import{M as p,C as s}from"./blocks-CH1yi1wC.js";import"./Tag-BCmfqboN.js";import"./index-CfNZ4QaZ.js";import"./copy-B_omwcq7.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BjvilGb7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CB0t3Ndr.js";import"./index-D1It_vMD.js";import"./index-DGKmMzEm.js";import"./Link-BZUDNGRG.js";import"./index-lc4LLOiH.js";import"./index-Dk8UUcOY.js";import"./index-Rgh5WsNa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bozn53qz.js";import"./addCustomCSSWithScoping-Uy-s1Hcf.js";import"./index-5drqvW0T.js";import"./information-D6UQivs-.js";import"./sys-enter-2-CMoukZNH.js";import"./alert-BjbREM6S.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bz2chLzI.js";import"./delete-DogqfZ3E.js";import"./settings-lCutP8dK.js";import"./NoData-llz9PG9F.js";import"./IllustratedMessage-CKo1bCpT.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Dc_PXms6.js";import"./index-DX4imUhW.js";import"./index-D4ozyLie.js";import"./slim-arrow-down-CT6VdoUI.js";import"./Input-DlayT0fi.js";import"./ResponsivePopoverCommon.css-D2fANVRT.js";import"./ValueStateMessage.css-D4UTir1H.js";import"./Suggestions.css-CDvWi9BJ.js";import"./ListBoxItemGroupTemplate-BBFkEoXO.js";import"./ComboBoxItemGroup-C70F9qVi.js";import"./ListItemBaseTemplate-PhRm9Z1E.js";import"./Token-BWzNh8w7.js";import"./ScrollEnablement-BRHtS9Y6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CghTaqTk.js";import"./ToggleButton-CUxngjtj.js";import"./SuggestionItem-CC-vpnLD.js";import"./index-BjlvmRlS.js";import"./Option-CUfEccr7.js";import"./index-Da_u9t8p.js";import"./SegmentedButton-Boemh7ns.js";import"./index-D3Kr9jBp.js";import"./Select-D_Yo3ITd.js";import"./InvisibleMessage-k_rSJSP0.js";import"./slim-arrow-down-kuIl5ttD.js";import"./index-BEBnT4-a.js";import"./index-KQsXY6-N.js";import"./index-CXzJLeoO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXPu933P.js";import"./group-2-jhaWfOW9.js";import"./sort-descending-BHyYxadY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DO_r9pCl.js";import"./utils-B4YULW7_.js";import"./index-DHf7Rwdf.js";import"./index-DHz2T6Sp.js";import"./index-C9_jR0jd.js";import"./navigation-down-arrow-DwtmqN-Q.js";import"./navigation-right-arrow-CIZgBpjX.js";import"./navigation-right-arrow-CoJr-ET_.js";import"./useCurrentTheme-CscTi93E.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DbY2gDlc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-U4IYdiJl.js";import"./paper-plane-Cs6XxyXF.js";import"./index-D_b6lk6Z.js";import"./less-Cg20nryA.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(r,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{sourceState:"none",of:l}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const TableComponent = (props) => {
  const handleColumResize = useCallback((e) => {
    console.log(e.columnWidth, e.header);
  }, []);

  const tableHooks = useMemo(
    () => [
      useOnColumnResize(handleColumResize, {
        liveUpdate: false,
        wait: 100,
      }),
    ],
    [handleColumResize],
  );

  return (
    <AnalyticalTable
      data={props.data}
      columns={props.columns}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,o.jsx(m,{})]})}function Xo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Xo as default};
