import{j as o}from"./iframe-Bg524aqp.js";import{useMDXComponents as n}from"./index-B-rwzkjC.js";import{I as r,F as m}from"./CommandsAndQueries-Bxzaytg-.js";import{M as p,C as s}from"./blocks--Wel_jE1.js";import"./Tag-DNMuD7A5.js";import"./index-B9tuTECn.js";import"./copy-BgS9Q-8_.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BtcTbGIn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqYTt2r-.js";import"./index-DPNsglmV.js";import"./index-TfZZnQDd.js";import"./Link-DzzFCouB.js";import"./index-iejN5y1T.js";import"./index-r1bogqKf.js";import"./index-tDWQXHER.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkKuq7AH.js";import"./addCustomCSSWithScoping-DFbnSqfd.js";import"./index-DxUoW9XL.js";import"./information-2dCGwvE_.js";import"./sys-enter-2-CO93Qjp1.js";import"./alert-BG-ILaUe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ozcYxpI5.js";import"./delete-Bbvt8Ot-.js";import"./settings-BhmSlLPC.js";import"./NoData-Bj02WUEt.js";import"./IllustratedMessage-R2CzAWXp.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BIlaAfwD.js";import"./index-CfgOXvqI.js";import"./index-DE4ZHMUP.js";import"./slim-arrow-down-CRZdlGQF.js";import"./Input-DmAcj6-y.js";import"./ResponsivePopoverCommon.css-DvaTlIz3.js";import"./ValueStateMessage.css-qD0DeEG7.js";import"./Suggestions.css-ZRTSrlW8.js";import"./ListBoxItemGroupTemplate-DXJv0PMK.js";import"./ComboBoxItemGroup-Dsg5vEL4.js";import"./ListItemBaseTemplate-BpYqWiGX.js";import"./Token-9cJC13pc.js";import"./ScrollEnablement-C7eLNzW1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bewcenzz.js";import"./ToggleButton-DPa7jhtq.js";import"./SuggestionItem-Dpk_4CFh.js";import"./index-CdKTVzwi.js";import"./Option-ClvqOWQS.js";import"./index-qJ7YjxyU.js";import"./SegmentedButton-DE8rqkD-.js";import"./index-DYMzkGI0.js";import"./Select-B4bz0mNo.js";import"./InvisibleMessage-DXpW_GiJ.js";import"./slim-arrow-down-DwyYquXh.js";import"./index-CNB43ZnJ.js";import"./index-DIBXYbfE.js";import"./index-CPicDcbf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMn6lE9G.js";import"./group-2--_rJdnmk.js";import"./sort-descending-CAbRK7tC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BecMM91E.js";import"./utils-Cud8cjsY.js";import"./index-Cw39ZeIw.js";import"./index-C0z4qlZR.js";import"./index-aDnJKja3.js";import"./navigation-down-arrow-BzyymRLp.js";import"./navigation-right-arrow-CUK1IzT8.js";import"./navigation-right-arrow-BPrwIZ8M.js";import"./useCurrentTheme-CR40IPum.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B5Tp7z0D.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DiCPj2HI.js";import"./paper-plane-BaN203_j.js";import"./index-MM_7rShN.js";import"./less-Bs9eXWxF.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
