import{j as o}from"./iframe-CC5YTvQh.js";import{useMDXComponents as r}from"./index-Cq26BSP3.js";import{I as n,F as m}from"./CommandsAndQueries-CFtdiSUA.js";import{M as p,C as s}from"./blocks-BsOXarNI.js";import"./Tag-BlfrYy9_.js";import"./index-CzqjBntm.js";import"./copy-Dmf1qML3.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CQUBK3-g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BoEyxgcJ.js";import"./index-ZUwBAUQq.js";import"./index-DZNvYvST.js";import"./Link-BoZATccP.js";import"./index-CBMZmkal.js";import"./index-BSqVcJze.js";import"./index-Dnx65cB5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BdkJ8A28.js";import"./addCustomCSSWithScoping-DLLu2c7G.js";import"./index-Dtg_ecO1.js";import"./information-D0rIxsAi.js";import"./sys-enter-2-DYbT0ikl.js";import"./alert-D4tt3RNk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CT-64OOl.js";import"./delete-D2h8TM4S.js";import"./settings-afnv_1Um.js";import"./NoData-50jlYSou.js";import"./IllustratedMessage-DT3qL7vi.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Da8uvuY3.js";import"./index-2D2IVzvv.js";import"./slim-arrow-down-CXRWIFXL.js";import"./Input-Q1qp06Fs.js";import"./ResponsivePopoverCommon.css-D4bRbcp1.js";import"./ValueStateMessage.css-DZdfGl5Q.js";import"./Suggestions.css-oGOSH654.js";import"./ListBoxItemGroupTemplate-DbQMIiOT.js";import"./ComboBoxItemGroup-BHNpI85Y.js";import"./ListItemBaseTemplate-F0T_X0t2.js";import"./Token-Cm37GxNd.js";import"./ScrollEnablement-D_WinKmz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-UOq8Eb3o.js";import"./ToggleButton-DvtE59JH.js";import"./SuggestionItem-GZWE6oX3.js";import"./index-DdgZx-Mv.js";import"./Option-JMlPQoIR.js";import"./index-CR3s6vsE.js";import"./SegmentedButton-D968rhEd.js";import"./index-DR1KWNIH.js";import"./Select-Bicd3BEg.js";import"./InvisibleMessage-qwn7H305.js";import"./slim-arrow-down-mUJEFf7l.js";import"./index-wHUsYevm.js";import"./index-BmHMhL1b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BuAXIAij.js";import"./group-2-BHCyACyZ.js";import"./sort-descending-CzmEbK8x.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B_B2IdMY.js";import"./utils-DhJOckmR.js";import"./index-CClk8p2o.js";import"./index-CmBuHpMs.js";import"./index-Bvw_9-nq.js";import"./navigation-down-arrow-B4rXVi5n.js";import"./navigation-right-arrow-DsxjI3d8.js";import"./navigation-right-arrow-CxCTIBiF.js";import"./useCurrentTheme-Di3GYb_r.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DMBo-m9v.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DezL06Ik.js";import"./paper-plane-DrRGD0IK.js";import"./index-DipmRI2t.js";import"./less-BE1EluBh.js";import"./index-08aiBztu.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,o.jsx(m,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
