import{j as e}from"./iframe-BclzIqLN.js";import{useMDXComponents as o}from"./index-C905Yc-m.js";import{I as l,F as r}from"./CommandsAndQueries-C-6YnLjZ.js";import{M as a,C as c}from"./blocks-B5DwqLl1.js";import"./Tag-BOdn4VYm.js";import"./index-DMn-V0Tk.js";import"./copy-D_MUueeP.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C9L8Guqw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-uVgUJkPs.js";import"./index-OKRhEBZf.js";import"./index-xMZLjYER.js";import"./Link-DPzQ2XbU.js";import"./index-C8ShhJNW.js";import"./index-5TTuORsb.js";import"./index-CJHMJsmF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cdo2Ur2Z.js";import"./addCustomCSSWithScoping-Dte7M2sk.js";import"./index-CnVdbwVS.js";import"./information-BdMHs198.js";import"./sys-enter-2-C5ziAGW-.js";import"./alert-BWh7aIvC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-5uGOFpph.js";import"./delete-Ch7YLa0V.js";import"./settings-BkOrUldx.js";import"./NoData-CfYSMo8M.js";import"./IllustratedMessage-DQgOxUn_.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BzUJY8Ac.js";import"./index-6F36v5VW.js";import"./index-D9jIvk-q.js";import"./slim-arrow-down-C1U4NX7H.js";import"./Input-C4okqpUf.js";import"./ResponsivePopoverCommon.css-ClkbcXC1.js";import"./ValueStateMessage.css-C3ePSvc8.js";import"./Suggestions.css-CUzKAV-7.js";import"./ListBoxItemGroupTemplate-CFqH3D8Q.js";import"./ComboBoxItemGroup-2Y-8-MYS.js";import"./ListItemBaseTemplate-CNmdHhwQ.js";import"./Token-B7V4WzzV.js";import"./ScrollEnablement-B33MvuIW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-tHNIwCbY.js";import"./ToggleButton-D72VLeFZ.js";import"./SuggestionItem-Cz2Vq1ey.js";import"./index-DSAIMpS1.js";import"./Option-CI6fqOL0.js";import"./index-CvCO9G33.js";import"./SegmentedButton-DOVaKk4o.js";import"./index-CS4FFq1R.js";import"./Select-Cwlz9_o0.js";import"./InvisibleMessage-D5CfVB6Z.js";import"./slim-arrow-down-BwnzdiOy.js";import"./index-vSHFeP63.js";import"./index-HdZD7NhL.js";import"./index-Byw1M1w0.js";import"./index-B-2M8oTR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CprbOLAW.js";import"./group-2-CQahafe6.js";import"./sort-descending-CxK_741y.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B8T8PvLa.js";import"./utils-CzDDLq5x.js";import"./index-YJUbNZXC.js";import"./index-DaX0lkO8.js";import"./index-Dfxpc54q.js";import"./navigation-down-arrow-9qHA5EUE.js";import"./navigation-right-arrow-C_dGSAC8.js";import"./navigation-right-arrow-C2F-yOS_.js";import"./useCurrentTheme-B0s-uCVG.js";import"./index-0NhHA-ih.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BUkTWivW.js";import"./paper-plane-D-v0DWGa.js";import"./index-Cbkmi62k.js";import"./less-B_W3_4w8.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
