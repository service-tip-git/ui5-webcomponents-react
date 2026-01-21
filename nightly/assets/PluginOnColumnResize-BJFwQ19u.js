import{j as o}from"./iframe-DYfg4QHt.js";import{useMDXComponents as n}from"./index-CVbrUuPE.js";import{I as r,F as m}from"./CommandsAndQueries-Bv0cgQmk.js";import{M as p,C as s}from"./blocks-BUAqhVj9.js";import"./Tag-DSyohh1a.js";import"./index-BmTrkp-7.js";import"./copy-D6hWl56-.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CdlnE1KK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7hJqHh2.js";import"./index-BKQsUqka.js";import"./index-Cey_WqgE.js";import"./Link-DNgH-frF.js";import"./index-DHfPdgXp.js";import"./index-DGISTYKI.js";import"./index-91p8b6xm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN-x3Tox.js";import"./addCustomCSSWithScoping-D5zE1nWM.js";import"./index-Cmi2IW4V.js";import"./information-DmJ60sG9.js";import"./sys-enter-2-DM66m4rJ.js";import"./alert-CCfcH-Mh.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vgLY-pWJ.js";import"./delete-D34_mFXP.js";import"./settings-gx1Rt1L_.js";import"./NoData-DlyRoGui.js";import"./IllustratedMessage-DRxGb1zp.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B7x9pabn.js";import"./index-DahuAuMf.js";import"./index-BeUWAGwZ.js";import"./slim-arrow-down-CW3E1SKi.js";import"./Input-iisXfHsF.js";import"./ResponsivePopoverCommon.css-CUkbRKkQ.js";import"./ValueStateMessage.css-JCR7oNs7.js";import"./Suggestions.css-CvEadgHg.js";import"./ListBoxItemGroupTemplate-CVIbduo6.js";import"./ComboBoxItemGroup-NvpVhGDp.js";import"./ListItemBaseTemplate-C8z7WXl_.js";import"./Token-XCzL_gO_.js";import"./ScrollEnablement-CNfKzKUR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard--jyjJfbY.js";import"./ToggleButton-CNFVQAAc.js";import"./SuggestionItem-evSaZZRy.js";import"./index-DZ5Gyh8u.js";import"./Option-BXSqJg_S.js";import"./index-CQqiTtty.js";import"./SegmentedButton-BjQ27BtY.js";import"./index-CVlyf3BN.js";import"./Select-CVTIiGaA.js";import"./InvisibleMessage-CgGc0QHI.js";import"./slim-arrow-down-Y-ZQwTJr.js";import"./index-C-fiAxLB.js";import"./index-B18_A3pn.js";import"./index-Co1UuDMa.js";import"./index-C0HSA-PR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CoR2QbFK.js";import"./group-2-CBo-4-zi.js";import"./sort-descending-PAYd66BW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dzn1Xrdp.js";import"./utils-9o_atc5t.js";import"./index-DGWGpo3w.js";import"./index-CObhiRst.js";import"./index-yUqfaSMu.js";import"./navigation-down-arrow-ZAYOJffR.js";import"./navigation-right-arrow-CeM1y1gw.js";import"./navigation-right-arrow-yI36QQVV.js";import"./useCurrentTheme-PNoownmV.js";import"./index-BBshEaSl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CSLDn2Wo.js";import"./paper-plane-Bj3JAkAg.js";import"./index-CWOZpVQI.js";import"./less-CeHycIPZ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
