import{j as e}from"./iframe-DQawrgT_.js";import{useMDXComponents as o}from"./index-BmmNdxGP.js";import{I as l,F as r}from"./CommandsAndQueries-8E8N5Jf5.js";import{M as a,C as c}from"./blocks-CsjIrgm8.js";import"./Tag-DINZ5J-5.js";import"./index-CkLsOSwH.js";import"./copy-BfmM2Dw-.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-W25A3oS9.js";import"./preload-helper-PPVm8Dsz.js";import"./index--1fmb9ws.js";import"./index-CaSLC49k.js";import"./index-lL1wxGfG.js";import"./Link-QZkGNwXr.js";import"./index-C4mOCO1v.js";import"./index-BpUdR17T.js";import"./index-DXw92D-i.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D6QKJZ6-.js";import"./addCustomCSSWithScoping-CIoyfOLu.js";import"./index-DkjHlZC9.js";import"./information-DvV6iDHk.js";import"./sys-enter-2-DVOKgY3M.js";import"./alert-D1Pqx8x8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-X9zi8Na2.js";import"./delete-C6HzY21G.js";import"./settings-CWp1p9X4.js";import"./NoData-CDBUvfvl.js";import"./IllustratedMessage-uso3zTnf.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BsZDo7Xz.js";import"./index--kps9BoF.js";import"./index-Cu2d-9NT.js";import"./slim-arrow-down-CrV_EoZ-.js";import"./Input-C1pWyBfA.js";import"./ResponsivePopoverCommon.css-CRDo6imn.js";import"./ValueStateMessage.css-yU9YlQTC.js";import"./Suggestions.css-DGIsZFtp.js";import"./ListBoxItemGroupTemplate-Qgb7Il2A.js";import"./ComboBoxItemGroup-DDKZCgRF.js";import"./ListItemBaseTemplate-CYGq7w02.js";import"./Token-Bd0t7DDi.js";import"./ScrollEnablement-CFUBLAVD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRn-lKzQ.js";import"./ToggleButton-B-hCXMIV.js";import"./SuggestionItem-m6DAn-I2.js";import"./index-BSgkgR9j.js";import"./Option-C4LQWtvA.js";import"./index-msmsJC20.js";import"./SegmentedButton-CERSbuxP.js";import"./index-cFycgftA.js";import"./Select-UWywW-TM.js";import"./InvisibleMessage-B4vU3xgw.js";import"./slim-arrow-down-ZC2auWSc.js";import"./index-BpZszSRc.js";import"./index-DJB11urr.js";import"./index-B7bKPaYO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DgoHoVwF.js";import"./group-2-Do0Gpjo4.js";import"./sort-descending-CnWvzCuF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DTd36afj.js";import"./utils-B9VO5sCv.js";import"./index-Cd39OiMQ.js";import"./index-hk4pV2sf.js";import"./index-DOxhRrM_.js";import"./navigation-down-arrow-B6UI6hGh.js";import"./navigation-right-arrow-D1f_1Cvf.js";import"./navigation-right-arrow-Dbgs5rW1.js";import"./useCurrentTheme-Mk8c19Xo.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DMMeBvKD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B1ti3bb-.js";import"./paper-plane-CJkMjDJU.js";import"./index-DehgxQHc.js";import"./less-Djjr01dD.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
