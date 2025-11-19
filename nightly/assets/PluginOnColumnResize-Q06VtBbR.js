import{j as o}from"./iframe-DOg6M_II.js";import{useMDXComponents as n}from"./index-kwVVcFLm.js";import{I as r,F as m}from"./CommandsAndQueries-wl0h9BMr.js";import{M as p,C as s}from"./blocks-CUc5S4F5.js";import"./Tag-BltckGaY.js";import"./index-bsC8MgY-.js";import"./copy-BKSrEciR.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BIWbaJdZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwpJeIal.js";import"./index-DVpre6_h.js";import"./index-B0K8C7sE.js";import"./Link-CDmjIio6.js";import"./index-DMnxNTo_.js";import"./index-BEZkwnlN.js";import"./index-BdRkl8ET.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Drkj1-4P.js";import"./addCustomCSSWithScoping-DpPx9qfb.js";import"./index-DS0sFSVa.js";import"./information-BuhVNJUa.js";import"./sys-enter-2-DbIwdKeB.js";import"./alert-BRGoaqba.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CLCBV3Xg.js";import"./delete-D-43NgF8.js";import"./settings-Delvnyut.js";import"./NoData-ByUhu_o5.js";import"./IllustratedMessage-diAipt8-.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-gN2Us1tn.js";import"./index-B9k7ELm0.js";import"./index-B_vYmLao.js";import"./slim-arrow-down-BjniYreE.js";import"./Input-C9rpsAyC.js";import"./ResponsivePopoverCommon.css-C0PtYRqH.js";import"./ValueStateMessage.css-CZYppwl8.js";import"./Suggestions.css-Ixrm98By.js";import"./ListBoxItemGroupTemplate-BDzOYuSZ.js";import"./ComboBoxItemGroup-BU19uPT9.js";import"./ListItemBaseTemplate-hoIzMUwH.js";import"./Token-iSuK3wO6.js";import"./ScrollEnablement-BMPvWcSr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrVmc6dv.js";import"./ToggleButton-CsKP69jd.js";import"./SuggestionItem-D-yPu1Sv.js";import"./index-Mf92dVtq.js";import"./Option-DNSpB8f-.js";import"./index-BCTwa-v4.js";import"./SegmentedButton-DNK1Qa2S.js";import"./index-Cs3-egX0.js";import"./Select-BDYl_oCe.js";import"./InvisibleMessage-DycTFmVM.js";import"./slim-arrow-down-DfFKFXMU.js";import"./index-VxedkpRq.js";import"./index-CH3b2kB8.js";import"./index-CISwnltl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bi2MAW2I.js";import"./group-2-MmNiSVbN.js";import"./sort-descending-CD9YT9Bk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B_KBcAtw.js";import"./utils-0ELTneL-.js";import"./index-DFQjFJ3S.js";import"./index-DM2b0yOa.js";import"./index-BeSrSbRo.js";import"./navigation-down-arrow-CyIa-Usz.js";import"./navigation-right-arrow-BLaN-JkZ.js";import"./navigation-right-arrow-CqWeCK0J.js";import"./useCurrentTheme-DESyq6Ge.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CO9CMtFr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CA7b8y0H.js";import"./paper-plane-BSmmtRX7.js";import"./index-DMnTXtcq.js";import"./less-CZFOeLNB.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
