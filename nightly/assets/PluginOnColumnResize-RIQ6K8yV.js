import{j as o}from"./iframe-plJY_px0.js";import{useMDXComponents as n}from"./index-CNgSdSBz.js";import{I as r,F as m}from"./CommandsAndQueries-CSEdQQvR.js";import{M as p,C as s}from"./blocks-Q5gmWwgb.js";import"./Tag-Dh3wWudw.js";import"./index-DSqDyml0.js";import"./copy-mR5XScRR.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-OXoTGLJY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2EbIuvCl.js";import"./index-CULtK81i.js";import"./index-D3V1C0u7.js";import"./Link-Bty8oyFV.js";import"./index-Dd7Sfpx-.js";import"./index-DfokaHEY.js";import"./index-B337CKIF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQsTwQe_.js";import"./addCustomCSSWithScoping-K4GM8_aQ.js";import"./index-t--BkPKT.js";import"./information-CFU4bu3b.js";import"./sys-enter-2-CWJ3J9PS.js";import"./alert-Cvpxudnd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DS99HCgK.js";import"./delete-eXKtkG1a.js";import"./settings-B4zUkila.js";import"./NoData-vjKh1Mr_.js";import"./IllustratedMessage-B3aadiAZ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-4tlbkylG.js";import"./index-DkneJmbW.js";import"./index-brt5d6po.js";import"./slim-arrow-down-BTqVQDWC.js";import"./Input-qu-i9z2w.js";import"./ResponsivePopoverCommon.css-C--dNoH7.js";import"./ValueStateMessage.css-65I0H3x5.js";import"./Suggestions.css-C34DaZQw.js";import"./ListBoxItemGroupTemplate--HwHHtzG.js";import"./ComboBoxItemGroup-CJJD_zkv.js";import"./ListItemBaseTemplate-DPXdBI9X.js";import"./Token-CtYzp5bp.js";import"./ScrollEnablement-C3kxd9Sb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Du-JodLR.js";import"./ToggleButton-BVbL9ept.js";import"./SuggestionItem-CSeK9fns.js";import"./index-BfNy1JVl.js";import"./Option-kaAYALSt.js";import"./index-C1pDbGHC.js";import"./SegmentedButton-CoeXh0KC.js";import"./index-B1eO7s43.js";import"./Select-BOpGp0Rm.js";import"./InvisibleMessage-fL3jWeDc.js";import"./slim-arrow-down-2gbZmUST.js";import"./index-B6yr2B_f.js";import"./index-k_dsVjf7.js";import"./index-CmDLye-F.js";import"./index-CKdbXzvk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Qq0nKm9O.js";import"./group-2-DmjkdZiv.js";import"./sort-descending-G3a3Bk4A.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BJvTlN0-.js";import"./utils-BmYl7bBX.js";import"./index-CuirFJHi.js";import"./index-jIxgqskF.js";import"./index-DnBhArpB.js";import"./navigation-down-arrow-CPK2vVem.js";import"./navigation-right-arrow-DzWp8vrQ.js";import"./navigation-right-arrow-CbRKCuia.js";import"./useCurrentTheme-CPuhdXAo.js";import"./index-CfCdmgBi.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmQyw8RD.js";import"./paper-plane-BzpUcvaz.js";import"./index-_e_VAWTV.js";import"./less-Cv2JCqO3.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
