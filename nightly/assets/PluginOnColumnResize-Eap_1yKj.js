import{j as o}from"./iframe-BWDYb3Af.js";import{useMDXComponents as n}from"./index-ORMlrOnf.js";import{I as r,F as m}from"./CommandsAndQueries-CZ5MS_my.js";import{M as p,C as s}from"./blocks-B8FJqnZy.js";import"./Tag-BIMutbIq.js";import"./index-Dolwn4re.js";import"./copy-weALSuoF.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-QDAUM4uZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3Oal-l-.js";import"./index-BHXKA4z_.js";import"./index-Dz7IZliI.js";import"./Link-DcGHp14a.js";import"./index-CxNU_raA.js";import"./index-CO7aikHi.js";import"./index-_k1TaEpY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-wjVhlBmy.js";import"./addCustomCSSWithScoping-BLKtnAI1.js";import"./index-DF6wuqqy.js";import"./information-BiNCCmk0.js";import"./sys-enter-2-D_DUss_0.js";import"./alert-mysBcZzV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B7bCkUlY.js";import"./delete-DEj14gho.js";import"./settings-DoVib3WO.js";import"./NoData-B7rkzdNs.js";import"./IllustratedMessage-CRWU2Kq3.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DvxZpi3I.js";import"./index-fEJgj2Qv.js";import"./index-DmOxMMWJ.js";import"./slim-arrow-down-BcIR6NjK.js";import"./Input-BuboHiLs.js";import"./ResponsivePopoverCommon.css-DBGwKhkV.js";import"./ValueStateMessage.css-BGu5mUtQ.js";import"./Suggestions.css-DXhv7lhm.js";import"./ListBoxItemGroupTemplate-DzjBgN9r.js";import"./ComboBoxItemGroup-De-n6S3o.js";import"./ListItemBaseTemplate-IGyQuAXK.js";import"./Token-BeAfCI2H.js";import"./ScrollEnablement-CqDxSJRv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cn1gqWK2.js";import"./ToggleButton-06oZt1wz.js";import"./SuggestionItem-6b4vyV5u.js";import"./index-B8a_sAU-.js";import"./Option-D5fi9fAF.js";import"./index-V8TD3imX.js";import"./SegmentedButton-DS-7HWK8.js";import"./index-C2jRL8Y_.js";import"./Select-jr8H4-4W.js";import"./InvisibleMessage-ub_8KxmD.js";import"./slim-arrow-down-D6HsblN4.js";import"./index-B6QSlgiQ.js";import"./index-CWl53DLC.js";import"./index-DFScramK.js";import"./index-cBcbMXT4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-qtXQdY9O.js";import"./group-2-DCUOoeaW.js";import"./sort-descending-3oWaEPr0.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-xDc2LBmD.js";import"./utils-An7ewTfO.js";import"./index-1YejsSDM.js";import"./index-CmTGtR_u.js";import"./index-BZK_a3Nn.js";import"./navigation-down-arrow-c1lYwltu.js";import"./navigation-right-arrow-hLiMkplw.js";import"./navigation-right-arrow-BBlgzrG-.js";import"./useCurrentTheme-O3A-J4fk.js";import"./index-BA5CrxYN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CUtE-sIq.js";import"./paper-plane-B4taa3Yl.js";import"./index-gTEpRQo7.js";import"./less-DKb9TyNt.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
