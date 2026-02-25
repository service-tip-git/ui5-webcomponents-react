import{j as o}from"./iframe-CY8s9yjy.js";import{useMDXComponents as n}from"./index-CNb6gACG.js";import{I as r,F as m}from"./CommandsAndQueries-UPrDuurl.js";import{M as p,C as s}from"./blocks-Ce5kV5iJ.js";import"./Tag-DQ3Uhj_I.js";import"./index-Bm5ZTkBt.js";import"./copy-VMbFnyY_.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BUZh1mio.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVORMKlE.js";import"./index-D-EFcDV0.js";import"./index-DrB3kUVO.js";import"./Link-CNsdB8sn.js";import"./index-BsBxNorJ.js";import"./index-C8Olm4ve.js";import"./index-BaNzLEPi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CvwjvMI1.js";import"./addCustomCSSWithScoping-D-8_Iy3e.js";import"./index-BXgCJyYO.js";import"./information-DZii-Bqd.js";import"./sys-enter-2-BpeJBTAl.js";import"./alert-C5YyaVlR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bny-Pdhf.js";import"./delete-TuR8g7sp.js";import"./settings-CjD8ZkRG.js";import"./NoData-uheMpmqh.js";import"./IllustratedMessage-G815HeqE.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CvEi3g2q.js";import"./index-Dkwzq5SZ.js";import"./index-Bh4g5tnq.js";import"./slim-arrow-down-DdRsipKq.js";import"./Input-BZHTrO1F.js";import"./ResponsivePopoverCommon.css-Bh7teeL-.js";import"./ValueStateMessage.css-DVpu6R7_.js";import"./Suggestions.css-Clh_Tnq_.js";import"./ListBoxItemGroupTemplate-CWpHhO8W.js";import"./ComboBoxItemGroup-jnpv8-tH.js";import"./ListItemBaseTemplate-CVp3QqSu.js";import"./Token-C5TzIgJN.js";import"./ScrollEnablement-O8zUITM6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BGy_E5-P.js";import"./ToggleButton-Dy9m84az.js";import"./SuggestionItem-Dcp6MIw0.js";import"./index-NsWuls4K.js";import"./Option-BIMhrmf4.js";import"./index-COeRM4Xs.js";import"./SegmentedButton-D8Cz_xX2.js";import"./index-ClkFJ-SZ.js";import"./Select-DTUqqWH-.js";import"./InvisibleMessage-BvC4dXGq.js";import"./slim-arrow-down-Dy1XtcbW.js";import"./index-C3IdQyJ6.js";import"./index-CEyFD8KV.js";import"./index-D2p9cLf0.js";import"./index-yIH5v1dU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CrfR7UAR.js";import"./group-2-BfItZo2m.js";import"./sort-descending-D7yIAAHe.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7xCLMVi.js";import"./utils-CKARIPzs.js";import"./index-DALNk86A.js";import"./index-9xX_MzSp.js";import"./index-BmKRgNaZ.js";import"./navigation-down-arrow-BOgmv9Ad.js";import"./navigation-right-arrow-D61AbNUx.js";import"./navigation-right-arrow-BXCLLO3r.js";import"./useCurrentTheme-hFUuDzjB.js";import"./index-B2ztva4l.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CYf-OBV8.js";import"./paper-plane-Cl6Ob4s-.js";import"./index-BClGlfJV.js";import"./less-B8IL0Icb.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
