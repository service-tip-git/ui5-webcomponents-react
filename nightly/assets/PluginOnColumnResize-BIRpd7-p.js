import{j as o}from"./iframe-DnQpmgA6.js";import{useMDXComponents as n}from"./index-m6rQOag9.js";import{I as r,F as m}from"./CommandsAndQueries-DCeHCX1A.js";import{M as p,C as s}from"./blocks-DIAHYmsO.js";import"./Tag-CCLxzbm_.js";import"./index-BNSawElR.js";import"./copy-fbHgidly.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-9n2KIugs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqBVEfNK.js";import"./index-B_h56NIO.js";import"./index-DqLOis9Y.js";import"./Link-TucI8b8Q.js";import"./index-DqMOHWxY.js";import"./index-C-imFhL9.js";import"./index-L15nOwrJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2yHaKcn.js";import"./addCustomCSSWithScoping-DBwRz57F.js";import"./index-DxN0YEHZ.js";import"./information-Dr8YEhs5.js";import"./sys-enter-2-Bl9jtIfu.js";import"./alert-DI-0b8x_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BDBV03jP.js";import"./delete-DEaH-QMQ.js";import"./settings-Y1HrJ1Be.js";import"./NoData-CeQyUEKi.js";import"./IllustratedMessage-BmE39Sz_.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DcdliNxr.js";import"./index-DlcKtOvu.js";import"./index-DmDTWCkI.js";import"./slim-arrow-down-bqQZFEzo.js";import"./Input-CFSHOVLn.js";import"./ResponsivePopoverCommon.css-DPwPWHul.js";import"./ValueStateMessage.css-DhleDcPv.js";import"./Suggestions.css-Bt_4dqwC.js";import"./ListBoxItemGroupTemplate-OyTsfH68.js";import"./ComboBoxItemGroup-CL9AHdXR.js";import"./ListItemBaseTemplate-BENNhCLG.js";import"./Token-CCdz11AY.js";import"./ScrollEnablement-Vy5r4Z-H.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CbLH-mve.js";import"./ToggleButton-IDcSTjtk.js";import"./SuggestionItem-BJHpd9Tu.js";import"./index-CFAiARvU.js";import"./Option-q0-CYUub.js";import"./index-BVmq-K4P.js";import"./SegmentedButton-B9JgMyuK.js";import"./index-BkZL85Pv.js";import"./Select-Cz0Q93PZ.js";import"./InvisibleMessage-Cl67Ph06.js";import"./slim-arrow-down-C4oPdCY4.js";import"./index-JFfX52ZD.js";import"./index-BuVSgPW5.js";import"./index-DVQ4HkFg.js";import"./index-C89oEcpH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIL8SXRk.js";import"./group-2-D8yPI7nW.js";import"./sort-descending-Dd5yu8uD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BnUH6T6C.js";import"./utils-DvbIUQmI.js";import"./index-DBXZXDyB.js";import"./index-CxxXXamh.js";import"./index-BEE3e02q.js";import"./navigation-down-arrow-81WXcHgL.js";import"./navigation-right-arrow-ByFxVnQf.js";import"./navigation-right-arrow-C7f932cn.js";import"./useCurrentTheme-4919pBsT.js";import"./index-PqqIWEPc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-djYEqh-T.js";import"./paper-plane-_it-Hq1r.js";import"./index-Btlv6fLI.js";import"./less-ClggAEde.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
