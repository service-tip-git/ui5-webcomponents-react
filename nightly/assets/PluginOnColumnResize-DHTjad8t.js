import{j as o}from"./iframe-Crk1dOR8.js";import{useMDXComponents as n}from"./index-R8jXtLED.js";import{I as r,F as m}from"./CommandsAndQueries-OnXJs0rK.js";import{M as p,C as s}from"./blocks-DC75RB67.js";import"./Tag-Bw7tKX4O.js";import"./index-CACmyy9p.js";import"./copy-D_VyToZg.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DgxkA0YY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-F2nIq42R.js";import"./index-D2r_hMST.js";import"./index-K2kHsFSd.js";import"./Link-BHKq5JFv.js";import"./index-DvoETnoE.js";import"./index-CmobNXn6.js";import"./index-BW0zluCU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCgdgzPV.js";import"./addCustomCSSWithScoping-DLDk5l5Q.js";import"./index-DhFJLS7i.js";import"./information-YuxwihY0.js";import"./sys-enter-2-DLpc5Bbk.js";import"./alert-BQrPd1lR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bxy-cfhx.js";import"./delete-CyhoR1-x.js";import"./settings-DCnlQZPD.js";import"./NoData-DsbJ2Wb3.js";import"./IllustratedMessage-nKOTDNJc.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-t_oBNwfC.js";import"./index-CCh-mHqY.js";import"./index-BPXaNDRo.js";import"./slim-arrow-down-W9MNNw_u.js";import"./Input-CdoMhJ7q.js";import"./ResponsivePopoverCommon.css-CWK0u4Wt.js";import"./ValueStateMessage.css-B6Yu1ZOd.js";import"./Suggestions.css-D9mEdZF4.js";import"./ListBoxItemGroupTemplate-CD1d_PnD.js";import"./ComboBoxItemGroup-BcvTejR3.js";import"./ListItemBaseTemplate-ChpQCm05.js";import"./Token-2Y_wwcCo.js";import"./ScrollEnablement-CgGNqNYL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-m90ft9fO.js";import"./ToggleButton-D-b4ypKX.js";import"./SuggestionItem-BW3fUUjZ.js";import"./index-C7Lon1Bh.js";import"./Option-ByUi6-KI.js";import"./index-Bh8NMrS9.js";import"./SegmentedButton-DNBQsKKg.js";import"./index-C1TKRwfK.js";import"./Select-D0g7SDMw.js";import"./InvisibleMessage-DpJUGs_4.js";import"./slim-arrow-down-CJ_Lgolz.js";import"./index-CYjSUM3h.js";import"./index-CLkqgh3m.js";import"./index-BbH0YSzC.js";import"./index-FAzfBcds.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ziA0Ay5P.js";import"./group-2-3sV-WrZR.js";import"./sort-descending-BWp52hph.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Zzwzp3a_.js";import"./utils-C0yBiuVB.js";import"./index-DgcfWpn9.js";import"./index-CgKmmuuU.js";import"./index-BD_evJiC.js";import"./navigation-down-arrow-B8WKWh1B.js";import"./navigation-right-arrow-BEBvQFEq.js";import"./navigation-right-arrow-D13mADge.js";import"./useCurrentTheme-DEz25XUz.js";import"./index-Bx1EFR65.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CEOwLdyi.js";import"./paper-plane-BiKcq-Zy.js";import"./index-B2Orb9H-.js";import"./less-B6ZC-ovs.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
