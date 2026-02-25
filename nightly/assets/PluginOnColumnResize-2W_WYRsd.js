import{j as o}from"./iframe-BQI8iJtZ.js";import{useMDXComponents as n}from"./index-l_Dh7Y-d.js";import{I as r,F as m}from"./CommandsAndQueries-BH0I_jDK.js";import{M as p,C as s}from"./blocks-Dm7btFzZ.js";import"./Tag-D2JKRyPD.js";import"./index-Bd5bxmR8.js";import"./copy-Wr9Hnpdu.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Co6ciUmv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDHutJWz.js";import"./index-CdGithLr.js";import"./index-y23wvc_L.js";import"./Link-C9lbVSnw.js";import"./index-CP42RXg5.js";import"./index-CixO9GRI.js";import"./index-CjJMvaDa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DMLN5SEy.js";import"./addCustomCSSWithScoping-C30TCMVD.js";import"./index-CC6FubQ3.js";import"./information-DhTwMCvW.js";import"./sys-enter-2-B4_axdEE.js";import"./alert-D_lKNn7T.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DqBLgsFv.js";import"./delete-DN8wM4l0.js";import"./settings-vSGnaQMo.js";import"./NoData-BqNhr66z.js";import"./IllustratedMessage-qImrSjau.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CwkhrkCY.js";import"./index-C7KjXWDM.js";import"./index-zxMVpEDh.js";import"./slim-arrow-down-QOUojnnL.js";import"./Input-2UrWgipO.js";import"./ResponsivePopoverCommon.css-gVvV0tmb.js";import"./ValueStateMessage.css-BxkCLEc_.js";import"./Suggestions.css-CPeYy0BW.js";import"./ListBoxItemGroupTemplate-BBLM1Bt8.js";import"./ComboBoxItemGroup-CoFNAlZu.js";import"./ListItemBaseTemplate-2jk2aB8o.js";import"./Token-B68uFNrG.js";import"./ScrollEnablement-B8byLzsv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDy0Ge3B.js";import"./ToggleButton-B2NYYGfM.js";import"./SuggestionItem-Cc3ypeyC.js";import"./index-D8bEAmHz.js";import"./Option-CGYv30eN.js";import"./index-BrnoUve9.js";import"./SegmentedButton-QT7W_oDj.js";import"./index-fa2Z_Y62.js";import"./Select-C87V-1kl.js";import"./InvisibleMessage-CMW2idQ1.js";import"./slim-arrow-down-DeKj_Omp.js";import"./index-DuxSBgoz.js";import"./index-BGidFgA2.js";import"./index-DqUqhbMA.js";import"./index-Bqbzj0yD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLilwRFH.js";import"./group-2-CGyqUumC.js";import"./sort-descending-BOci2nTe.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-zQYKv0o9.js";import"./utils-Di9AT2dj.js";import"./index-C-AEjq-0.js";import"./index-CxGXb5fb.js";import"./index-DD2enJoe.js";import"./navigation-down-arrow-CCbQ8F9I.js";import"./navigation-right-arrow-DX-uF-k2.js";import"./navigation-right-arrow-Blea1uTb.js";import"./useCurrentTheme-BkZ7cZzQ.js";import"./index-nUwBPQlT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bvd5TkXY.js";import"./paper-plane-q7ULz0vY.js";import"./index-Yy2MGehE.js";import"./less-B94jky_m.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
