import{j as o}from"./iframe-DGGZytBJ.js";import{useMDXComponents as r}from"./index-D8y7UPZ7.js";import{I as n}from"./CommandsAndQueries-D_r1Ov46.js";import{M as m,C as p}from"./blocks-C1QAXsZr.js";import"./Tag-ClZ3M_pH.js";import"./index-v17LESiz.js";import"./copy-BPr0Zg61.js";import{F as s}from"./Footer-BZbEK1zw.js";import"./PageNotFound-3fOtIs4_.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CUL54hGv.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BtfuXmst.js";import"./index-DJziCtzG.js";import"./index-CeBSKfFB.js";import"./index-b7sAROVa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEpKqDTh.js";import"./addCustomCSSWithScoping-DahugnlS.js";import"./index-4SX8_eNa.js";import"./index-ctFb2r21.js";import"./index-DZeitEZj.js";import"./information-D_lZSOlz.js";import"./sys-enter-2-DzyKamY9.js";import"./alert--InUH-4I.js";import"./index-B54b-1ni.js";import"./Illustrations-BSUAI0rE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B84HYl_E.js";import"./delete-SJdH7pQ4.js";import"./settings-CAJyZbbd.js";import"./NoData-C4BqacGP.js";import"./NoFilterResults-BL8qBwn1.js";import"./index-BU5FNxMY.js";import"./IllustratedMessage-_jEEabQa.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-JDHBBDHb.js";import"./Input-BOYCocWs.js";import"./ResponsivePopoverCommon.css-CuamSE7y.js";import"./ValueStateMessage.css-DuNfrXP7.js";import"./Suggestions.css-COf1yHSo.js";import"./ListBoxItemGroupTemplate-2xWZNDwK.js";import"./ComboBoxItemGroup-D5uN8nOJ.js";import"./ListItemBaseTemplate-oQlxc1lO.js";import"./Token-cQg9GVNS.js";import"./ScrollEnablement-DwIhDXw6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-R9GFPOIC.js";import"./ToggleButton-CgFbbSab.js";import"./multiselect-all-Njl7KSgU.js";import"./SuggestionItem-vp3O8px8.js";import"./index-CJkDWZAj.js";import"./Option-l5eTmgDe.js";import"./index-BA5YYjZc.js";import"./SegmentedButton-DQ6hDiRi.js";import"./index-EXDyYm2C.js";import"./Select-C1jqGXCC.js";import"./InvisibleMessage-D_iVEZ-h.js";import"./index-BTLt7o1c.js";import"./index-0M7GCjcp.js";import"./index-CRnXDqjI.js";import"./index-n1TR-N6l.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pGciUh9e.js";import"./group-2-BfNzp3f2.js";import"./sort-descending-D9abY-SU.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DuFRV_vn.js";import"./utils-BfyCZP0-.js";import"./index-CR_QxdVU.js";import"./index-Dpn5zcT7.js";import"./index-Dp-mv8t6.js";import"./navigation-down-arrow-Tmk039L5.js";import"./navigation-right-arrow-BYzIZaOi.js";import"./navigation-right-arrow-cBTAD0Yi.js";import"./useCurrentTheme-BkGgWsWg.js";import"./index-BZwsWFyc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BEA5tLHH.js";import"./paper-plane-lDy3rZNF.js";import"./index-D64P37aV.js";import"./less-CQhJ4OcE.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
