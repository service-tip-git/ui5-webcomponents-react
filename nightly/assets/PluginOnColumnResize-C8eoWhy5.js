import{j as o}from"./iframe-OB3gpUrt.js";import{useMDXComponents as n}from"./index-tYZXwc8M.js";import{I as r,F as m}from"./CommandsAndQueries-DdKCqOgb.js";import{M as p,C as s}from"./blocks-W1zrio7-.js";import"./Tag-BYZWsksY.js";import"./index-DTbk-QpW.js";import"./copy-Cn9jluxF.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dj2Ui42u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YBnae26q.js";import"./index-DJjROlPg.js";import"./index-KwKt-eeL.js";import"./Link-04tQrlfI.js";import"./index-DeGKliVC.js";import"./index-CGtjIa9c.js";import"./index-BZk-qSok.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B6If5ETY.js";import"./addCustomCSSWithScoping-DcUbYumu.js";import"./index-DSe1Jsyu.js";import"./information-EFB093TQ.js";import"./sys-enter-2-BDVh3TOJ.js";import"./alert-kdfQmJam.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPHD3nDA.js";import"./delete-BIeDl-Ta.js";import"./settings-CTUquDVY.js";import"./NoData-n8Nq-IT5.js";import"./IllustratedMessage-t7HTQHsk.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DIPdowOu.js";import"./index-CanaeHWT.js";import"./index-RQHb4HK-.js";import"./slim-arrow-down-DYGYxXVh.js";import"./Input-DK8mjIq4.js";import"./ResponsivePopoverCommon.css-D14pwlR9.js";import"./ValueStateMessage.css-BhAYjEKZ.js";import"./Suggestions.css-HKZ3bD8M.js";import"./ListBoxItemGroupTemplate-CeZ64DwH.js";import"./ComboBoxItemGroup-DdcF-j7O.js";import"./ListItemBaseTemplate-BKr4_BQZ.js";import"./Token-BI74ljUx.js";import"./ScrollEnablement-FujgOftY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cF0IxW3X.js";import"./ToggleButton-fgX17mlx.js";import"./SuggestionItem-C0SAz8sz.js";import"./index-Btplke0T.js";import"./Option-CflwkonD.js";import"./index-pcXHjSUb.js";import"./SegmentedButton-om5uqAak.js";import"./index-CHsEA-_K.js";import"./Select-2koy19zz.js";import"./InvisibleMessage-B3GDFN-r.js";import"./slim-arrow-down-_hqmKTXT.js";import"./index-NoU0USPq.js";import"./index-DWl07NkK.js";import"./index-CFAbp54K.js";import"./index-BI78Dgdb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pNoIBhlO.js";import"./group-2-6ULYOJW8.js";import"./sort-descending-DnjMAKvJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-98n-Rp.js";import"./utils-BkqRVCAz.js";import"./index-ezjhGbTq.js";import"./index-DLl3Lmz6.js";import"./index-DTksDkVP.js";import"./navigation-down-arrow-veqq6R5P.js";import"./navigation-right-arrow-BpamG8Wu.js";import"./navigation-right-arrow-5Ow3qQi6.js";import"./useCurrentTheme-CxwmJY3a.js";import"./index-owm7Dkhx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-MRQZvrlb.js";import"./paper-plane-zFWohFwR.js";import"./index-B189vp1A.js";import"./less-BuCilNou.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
