import{j as o}from"./iframe-BayyK-Sd.js";import{useMDXComponents as n}from"./index-Bzssb8Xd.js";import{I as r,F as m}from"./CommandsAndQueries-BWULVlsD.js";import{M as p,C as s}from"./blocks-C_Hnd7fg.js";import"./Tag-BpBS-AuZ.js";import"./index-CvYFyR11.js";import"./copy-DZZbIDUz.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-QbrzZX1h.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiVk4GbQ.js";import"./index-DV2g_43r.js";import"./index-D_W1qX2w.js";import"./Link-DsRy4Mnv.js";import"./index-CTxam_11.js";import"./index-CvVYJJGO.js";import"./index-DGVYbyp5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CiI3G7zh.js";import"./addCustomCSSWithScoping-BRKADkGf.js";import"./index-CK9HJhHW.js";import"./information-D5ng3oI8.js";import"./sys-enter-2-C1yPBG5C.js";import"./alert-C5buViQ-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-OE18-JdZ.js";import"./delete-BbgUJXGi.js";import"./settings-BmyXWHXN.js";import"./NoData-CId8to51.js";import"./IllustratedMessage-DrJiWY3J.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-C-7XSeeS.js";import"./index-C_SEzddK.js";import"./index-Cfv719qF.js";import"./slim-arrow-down-CYWrhP8K.js";import"./Input-JXz_mghp.js";import"./ResponsivePopoverCommon.css-BE3AHcrB.js";import"./ValueStateMessage.css-CPPmdzjG.js";import"./Suggestions.css-DMbMSnFv.js";import"./ListBoxItemGroupTemplate-YGlaa4-L.js";import"./ComboBoxItemGroup-B66yYzM_.js";import"./ListItemBaseTemplate-C2wpCpOj.js";import"./Token-DJPiW-9k.js";import"./ScrollEnablement-b9VRk5D0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Qcq6pFUS.js";import"./ToggleButton-DNEd488t.js";import"./SuggestionItem-Ce7Hn2Zx.js";import"./index-CMGyAd1y.js";import"./Option-DsNeIMXC.js";import"./index-BKzi5p7m.js";import"./SegmentedButton-CjIp9jgc.js";import"./index-CGNi-nkR.js";import"./Select-W3YZdL-T.js";import"./InvisibleMessage-CV5ENGws.js";import"./slim-arrow-down-BfT4kuc7.js";import"./index-c6l7EBuN.js";import"./index-CphH-Mq2.js";import"./index-BovCb11M.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BItiagYO.js";import"./group-2-BYV4hW0u.js";import"./sort-descending-D8jO5ZBY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWjYcQuY.js";import"./utils-BxDZ9J52.js";import"./index-Ca_HsQoM.js";import"./index-BFBr5osT.js";import"./index-DIe0Mc4Y.js";import"./navigation-down-arrow-SKyq9Gew.js";import"./navigation-right-arrow-BNZl5xyh.js";import"./navigation-right-arrow-D0AjCoAk.js";import"./useCurrentTheme-BgQwIHp1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cy8kD9Ns.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlVbLN3l.js";import"./paper-plane-C7yKcpS7.js";import"./index-BCW3PpbP.js";import"./less-Dn7O_2zP.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
