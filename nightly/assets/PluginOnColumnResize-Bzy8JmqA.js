import{j as o}from"./iframe-w0_MYrZh.js";import{useMDXComponents as n}from"./index-BycN9fOm.js";import{I as r,F as m}from"./CommandsAndQueries-BLQv3roD.js";import{M as p,C as s}from"./blocks-DJOHNqcV.js";import"./Tag-BpDpCVC0.js";import"./index-De2hY3Dy.js";import"./copy-D2R0vLQ4.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DBKY7q4K.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0GVc7AW.js";import"./index-URs7g74M.js";import"./index-BgtBDdHh.js";import"./Link-BZHTtj1b.js";import"./index-D2-ZQ1Lf.js";import"./index-BD0pDq5_.js";import"./index-CJZSgnB8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D4L-H8MS.js";import"./addCustomCSSWithScoping-BxnbVzCY.js";import"./index-vKqE_SS0.js";import"./information-DqXgTAXV.js";import"./sys-enter-2-BeQRv1GM.js";import"./alert-CuXO44HU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dprp07lb.js";import"./delete-BCvmEI5O.js";import"./settings-C3yqhbag.js";import"./NoData-QRZWZJd0.js";import"./IllustratedMessage-T-nSz2oL.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-5v4MWfGb.js";import"./index-DBuLBnCn.js";import"./index-ZUmmbONo.js";import"./slim-arrow-down-_tiVkR_W.js";import"./Input-B947RaFp.js";import"./ResponsivePopoverCommon.css-CIKpOnPy.js";import"./ValueStateMessage.css-DwWJ9RXg.js";import"./Suggestions.css-BNHIGeRt.js";import"./ListBoxItemGroupTemplate-BE7ZF0yd.js";import"./ComboBoxItemGroup-j-ogm9Es.js";import"./ListItemBaseTemplate-hZITbmoX.js";import"./Token-wyHKBYA3.js";import"./ScrollEnablement--wSGuTgj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-PkfEJwLh.js";import"./ToggleButton-CZdaKOxJ.js";import"./SuggestionItem-MmtuVuyI.js";import"./index-BY2KfaQI.js";import"./Option-C_lYdTgQ.js";import"./index-2BstYlQB.js";import"./SegmentedButton-FkSSjm_Z.js";import"./index-WmGREpLP.js";import"./Select-C7o0oMjf.js";import"./InvisibleMessage-RrW4HMOA.js";import"./slim-arrow-down-bs2ksNJ4.js";import"./index-BPXy1nrS.js";import"./index-BbJ5v37o.js";import"./index-Dz8tpwGV.js";import"./index-Cw510Bsp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Vokmh8yA.js";import"./group-2-DbZe8PL5.js";import"./sort-descending-BDE1i8DR.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BtYKWXyc.js";import"./utils-WBofKG4w.js";import"./index-B_sa1bRi.js";import"./index-mtpe59v8.js";import"./index-DUsoVupR.js";import"./navigation-down-arrow-Df6Mn4at.js";import"./navigation-right-arrow-Bk6HMVMe.js";import"./navigation-right-arrow-R9P1yLbk.js";import"./useCurrentTheme-B5gLxteq.js";import"./index-DqstkdJN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-YFdiD547.js";import"./paper-plane-BLf9WuxO.js";import"./index-BwZ6X2fE.js";import"./less-B5EuyQX2.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
