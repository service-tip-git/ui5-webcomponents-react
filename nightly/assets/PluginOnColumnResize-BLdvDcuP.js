import{j as o}from"./iframe-CPcs5bjw.js";import{useMDXComponents as n}from"./index-D3pCSUGP.js";import{I as r,F as m}from"./CommandsAndQueries-BRqm99_0.js";import{M as p,C as s}from"./blocks-CciAsFaW.js";import"./Tag-BRzUE0pu.js";import"./index-DdCyPygk.js";import"./copy-DrEgra2j.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CNNMu7oZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sAPOTiYQ.js";import"./index-DSqRs7NE.js";import"./index-CE-f9LSp.js";import"./Link-CvciZabG.js";import"./index-DbiDsCRE.js";import"./index-DlX2UYU-.js";import"./index-B7pfH-Zg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-MvtR7iaQ.js";import"./addCustomCSSWithScoping-CWQJntcH.js";import"./index-Cumht0xF.js";import"./information-DGDTMoga.js";import"./sys-enter-2-DPq_4UKR.js";import"./alert-CqgikgLY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DcSLL8pw.js";import"./delete-6FPl9hw2.js";import"./settings-BkIX4e0f.js";import"./NoData-DX4tqYkJ.js";import"./IllustratedMessage-DW30GHVf.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BXiYTazg.js";import"./index-DyO1TDcH.js";import"./index-Be2buheR.js";import"./slim-arrow-down-fC08silo.js";import"./Input-BBd04gJ3.js";import"./ResponsivePopoverCommon.css-BRxBb6R7.js";import"./ValueStateMessage.css-BuHdH1UG.js";import"./Suggestions.css-bhLISna5.js";import"./ListBoxItemGroupTemplate-CNbeaoIX.js";import"./ComboBoxItemGroup-CAE0Duax.js";import"./ListItemBaseTemplate-TuOpbkNi.js";import"./Token-BhhlWiIl.js";import"./ScrollEnablement-C5TvNcLx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cf_RZ7_h.js";import"./ToggleButton-C-FM17-B.js";import"./SuggestionItem-SZn9Bgxa.js";import"./index-BTI3rLEY.js";import"./Option-CRy1QaR1.js";import"./index-CRCGoRGr.js";import"./SegmentedButton-DFyf0ped.js";import"./index-CQM2nEnH.js";import"./Select-D_8TYVG-.js";import"./InvisibleMessage-CS2hWN9Q.js";import"./slim-arrow-down-glTmVVU-.js";import"./index-Cq0d6RS0.js";import"./index-DLYHnpAo.js";import"./index-DHUEZhQD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DSJPsRuT.js";import"./group-2-De5mHDN4.js";import"./sort-descending--PDnUrf_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BcjHawbS.js";import"./utils-Cq29d2Kw.js";import"./index-CLVFcZa8.js";import"./index-DMMibOaO.js";import"./index-DKvhJ5Kx.js";import"./navigation-down-arrow-gfYqVZC2.js";import"./navigation-right-arrow-DCXuPhhE.js";import"./navigation-right-arrow-BUporjHX.js";import"./useCurrentTheme-EJjKiAvs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CmCCvj8I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CfoWS_vt.js";import"./paper-plane-VGT_jBYF.js";import"./index-Brz3_XP5.js";import"./less-_gVUTZDL.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
