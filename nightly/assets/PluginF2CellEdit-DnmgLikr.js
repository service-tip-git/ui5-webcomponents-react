import{j as e}from"./iframe-BQI8iJtZ.js";import{useMDXComponents as o}from"./index-l_Dh7Y-d.js";import{I as l,F as r}from"./CommandsAndQueries-BH0I_jDK.js";import{M as a,C as c}from"./blocks-Dm7btFzZ.js";import"./Tag-D2JKRyPD.js";import"./index-Bd5bxmR8.js";import"./copy-Wr9Hnpdu.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Co6ciUmv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDHutJWz.js";import"./index-CdGithLr.js";import"./index-y23wvc_L.js";import"./Link-C9lbVSnw.js";import"./index-CP42RXg5.js";import"./index-CixO9GRI.js";import"./index-CjJMvaDa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DMLN5SEy.js";import"./addCustomCSSWithScoping-C30TCMVD.js";import"./index-CC6FubQ3.js";import"./information-DhTwMCvW.js";import"./sys-enter-2-B4_axdEE.js";import"./alert-D_lKNn7T.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DqBLgsFv.js";import"./delete-DN8wM4l0.js";import"./settings-vSGnaQMo.js";import"./NoData-BqNhr66z.js";import"./IllustratedMessage-qImrSjau.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CwkhrkCY.js";import"./index-C7KjXWDM.js";import"./index-zxMVpEDh.js";import"./slim-arrow-down-QOUojnnL.js";import"./Input-2UrWgipO.js";import"./ResponsivePopoverCommon.css-gVvV0tmb.js";import"./ValueStateMessage.css-BxkCLEc_.js";import"./Suggestions.css-CPeYy0BW.js";import"./ListBoxItemGroupTemplate-BBLM1Bt8.js";import"./ComboBoxItemGroup-CoFNAlZu.js";import"./ListItemBaseTemplate-2jk2aB8o.js";import"./Token-B68uFNrG.js";import"./ScrollEnablement-B8byLzsv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDy0Ge3B.js";import"./ToggleButton-B2NYYGfM.js";import"./SuggestionItem-Cc3ypeyC.js";import"./index-D8bEAmHz.js";import"./Option-CGYv30eN.js";import"./index-BrnoUve9.js";import"./SegmentedButton-QT7W_oDj.js";import"./index-fa2Z_Y62.js";import"./Select-C87V-1kl.js";import"./InvisibleMessage-CMW2idQ1.js";import"./slim-arrow-down-DeKj_Omp.js";import"./index-DuxSBgoz.js";import"./index-BGidFgA2.js";import"./index-DqUqhbMA.js";import"./index-Bqbzj0yD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLilwRFH.js";import"./group-2-CGyqUumC.js";import"./sort-descending-BOci2nTe.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-zQYKv0o9.js";import"./utils-Di9AT2dj.js";import"./index-C-AEjq-0.js";import"./index-CxGXb5fb.js";import"./index-DD2enJoe.js";import"./navigation-down-arrow-CCbQ8F9I.js";import"./navigation-right-arrow-DX-uF-k2.js";import"./navigation-right-arrow-Blea1uTb.js";import"./useCurrentTheme-BkZ7cZzQ.js";import"./index-nUwBPQlT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bvd5TkXY.js";import"./paper-plane-q7ULz0vY.js";import"./index-Yy2MGehE.js";import"./less-B94jky_m.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(l,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Since: v2.14.0"})}),`
`,e.jsx(n.p,{children:"A plugin hook that enables F2-based cell editing for interactive elements inside a cell."}),`
`,e.jsxs(n.p,{children:["To ",e.jsx(n.strong,{children:"ensure the hook works correctly"}),", make sure that:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Each column containing interactive elements has the ",e.jsx(n.code,{children:"interactiveElementName"})," property set. ",e.jsx(n.strong,{children:"Note:"})," This property is also used to describe the cell's content for screen readers."]}),`
`,e.jsxs(n.li,{children:["The callback Ref returned by ",e.jsx(n.code,{children:"useF2CellEdit.useCallbackRef"})," is attached to every interactive element within the cell."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The hook manages focus, keyboard navigation, and ",e.jsx(n.code,{children:"tabindex"})," for cells with interactive content:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"F2"})," moves focus between the cell container and its first interactive element."]}),`
`,e.jsxs(n.li,{children:["Updates the cell's ",e.jsx(n.code,{children:"aria-label"})," with the interactive element's name for accessibility."]}),`
`,e.jsx(n.li,{children:"Prevents standard navigation keys from interfering when editing a cell."}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:s,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type {
  AnalyticalTableCellInstance,
  AnalyticalTableColumnDefinition,
  InputDomRef,
  AnalyticalTablePropTypes,
} from '@ui5/webcomponents-react';
import { AnalyticalTableHooks, AnalyticalTable, Button, CheckBox, Input, Switch, Tag } from '@ui5/webcomponents-react';
import paperPlaneIcon from '@ui5/webcomponents-icons/dist/paper-plane';

const { useF2CellEdit } = AnalyticalTableHooks;

const columns: AnalyticalTableColumnDefinition[] = [
  {
    Header: 'Input',
    id: 'input',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<InputDomRef>(props);
      return <Input ref={callbackRef} />;
    },
    interactiveElementName: 'Input',
  },
  {
    Header: 'Input & Button',
    id: 'input_btn',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      return (
        <>
          <Input ref={callbackRef} />
          <Button ref={callbackRef} icon={paperPlaneIcon} tooltip="Submit" accessibleName="Submit" />
        </>
      );
    },
    interactiveElementName: 'Input and Button',
  },
  {
    Header: 'Text',
    accessor: 'name',
  },
  {
    Header: 'Button',
    id: 'btn',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      return <Button ref={callbackRef}>Button</Button>;
    },
    interactiveElementName: () => 'Button',
  },
  {
    Header: 'Non-interactive custom content',
    accessor: 'friend.name',
    Cell: (props: AnalyticalTableCellInstance) => {
      return <Tag>{props.value}</Tag>;
    },
  },
  {
    Header: 'Switch or CheckBox',
    id: 'switch_checkbox',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      if (props.row.index % 2) {
        return <CheckBox ref={callbackRef} accessibleName="Dummy CheckBox" />;
      }
      return <Switch ref={callbackRef} accessibleName="Dummy Switch" />;
    },
    interactiveElementName: (props: AnalyticalTableCellInstance) => {
      if (props.row.index % 2) {
        return 'CheckBox';
      }
      return 'Switch';
    },
  },
];

const tableHooks: AnalyticalTablePropTypes['tableHooks'] = [useF2CellEdit];

function TableWithInputs({ data }) {
  return <AnalyticalTable data={data} columns={columns} tableHooks={tableHooks} visibleRows={5} />;
}
`})}),`
`,e.jsx(r,{})]})}function Me(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Me as default};
