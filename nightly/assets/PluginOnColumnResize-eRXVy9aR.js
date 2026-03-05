import{j as o}from"./iframe-Yrd5HXiX.js";import{useMDXComponents as r}from"./index-DOxT51h1.js";import{I as n}from"./CommandsAndQueries-C2FZOFS4.js";import{M as m,C as p}from"./blocks-Dvv2YIoD.js";import"./Tag-A6uWcl63.js";import"./index-BF16G_0e.js";import"./copy-BoNX54Ls.js";import{F as s}from"./Footer-CkKCjd3s.js";import"./PageNotFound-kNJyDscw.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D3z1Mx3x.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cr8Oti_G.js";import"./index-CfYuYIaa.js";import"./index-BUTU-Rlc.js";import"./index-B2vsuIMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN_dVplC.js";import"./addCustomCSSWithScoping-DB8Behso.js";import"./index-DA96fnb1.js";import"./index-Dz_82eM4.js";import"./index-Sv74Bfia.js";import"./information-BDrQXgLD.js";import"./sys-enter-2-BRBYXqiH.js";import"./alert-BtI3-0Jo.js";import"./index-CSbojWcx.js";import"./Illustrations-D8i7Iry7.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CK4uWCRt.js";import"./delete-BeVyXiYQ.js";import"./settings-sAoONwci.js";import"./NoData-hXKjP8_c.js";import"./NoFilterResults-qH3kPNMn.js";import"./index-Dmo0D1sN.js";import"./IllustratedMessage-DT11ntwf.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-C6Siqk_0.js";import"./slim-arrow-down-C66mVyft.js";import"./Input-biWYnwTr.js";import"./ResponsivePopoverCommon.css-Dhp5Q3jO.js";import"./ValueStateMessage.css-DaqWQCbh.js";import"./Suggestions.css-uVzdT4u-.js";import"./ListBoxItemGroupTemplate-0UhJkH8t.js";import"./ComboBoxItemGroup-BMqsW1Nd.js";import"./ListItemBaseTemplate-B4wrenP3.js";import"./Token-B55rgKOx.js";import"./ScrollEnablement-BBJzN_WO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-j7gFN2tu.js";import"./ToggleButton-BtobOlQE.js";import"./SuggestionItem-Y4FX-HD4.js";import"./index-CMMqyw3P.js";import"./Option-cgyjEXZH.js";import"./index-Cz-wHGnF.js";import"./SegmentedButton-3ZctE_fn.js";import"./index-DTvdeq0R.js";import"./Select-CXKgXvak.js";import"./InvisibleMessage-CtYhUk5a.js";import"./slim-arrow-down-CiI8zYHE.js";import"./index-BwT6bNsG.js";import"./index-C3srnBRe.js";import"./index-BBtrcJyj.js";import"./index-gHAbPdfd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bs4-TFnR.js";import"./group-2-DLZzwK5l.js";import"./sort-descending-BnKqQM8g.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CY9k3hyc.js";import"./utils-BLfMxc3Q.js";import"./index-BaFHnCrW.js";import"./index-3OijyU0m.js";import"./index-DZjWsdnu.js";import"./navigation-down-arrow-C1--d2l2.js";import"./navigation-right-arrow-DX6JBwhN.js";import"./navigation-right-arrow--1vFD5th.js";import"./useCurrentTheme-fwbh8NiD.js";import"./index-c0NDSFEN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DRlSD9Vi.js";import"./paper-plane-Dq5qbkzD.js";import"./index-BINom7PM.js";import"./less-CtIlRGB6.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(p,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
