import{j as e}from"./iframe-DGGZytBJ.js";import{useMDXComponents as o}from"./index-D8y7UPZ7.js";import{I as r}from"./CommandsAndQueries-D_r1Ov46.js";import{M as l,C as a}from"./blocks-C1QAXsZr.js";import"./Tag-ClZ3M_pH.js";import"./index-v17LESiz.js";import"./copy-BPr0Zg61.js";import{F as c}from"./Footer-BZbEK1zw.js";import"./PageNotFound-3fOtIs4_.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CUL54hGv.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BtfuXmst.js";import"./index-DJziCtzG.js";import"./index-CeBSKfFB.js";import"./index-b7sAROVa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEpKqDTh.js";import"./addCustomCSSWithScoping-DahugnlS.js";import"./index-4SX8_eNa.js";import"./index-ctFb2r21.js";import"./index-DZeitEZj.js";import"./information-D_lZSOlz.js";import"./sys-enter-2-DzyKamY9.js";import"./alert--InUH-4I.js";import"./index-B54b-1ni.js";import"./Illustrations-BSUAI0rE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B84HYl_E.js";import"./delete-SJdH7pQ4.js";import"./settings-CAJyZbbd.js";import"./NoData-C4BqacGP.js";import"./NoFilterResults-BL8qBwn1.js";import"./index-BU5FNxMY.js";import"./IllustratedMessage-_jEEabQa.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-JDHBBDHb.js";import"./Input-BOYCocWs.js";import"./ResponsivePopoverCommon.css-CuamSE7y.js";import"./ValueStateMessage.css-DuNfrXP7.js";import"./Suggestions.css-COf1yHSo.js";import"./ListBoxItemGroupTemplate-2xWZNDwK.js";import"./ComboBoxItemGroup-D5uN8nOJ.js";import"./ListItemBaseTemplate-oQlxc1lO.js";import"./Token-cQg9GVNS.js";import"./ScrollEnablement-DwIhDXw6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-R9GFPOIC.js";import"./ToggleButton-CgFbbSab.js";import"./multiselect-all-Njl7KSgU.js";import"./SuggestionItem-vp3O8px8.js";import"./index-CJkDWZAj.js";import"./Option-l5eTmgDe.js";import"./index-BA5YYjZc.js";import"./SegmentedButton-DQ6hDiRi.js";import"./index-EXDyYm2C.js";import"./Select-C1jqGXCC.js";import"./InvisibleMessage-D_iVEZ-h.js";import"./index-BTLt7o1c.js";import"./index-0M7GCjcp.js";import"./index-CRnXDqjI.js";import"./index-n1TR-N6l.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pGciUh9e.js";import"./group-2-BfNzp3f2.js";import"./sort-descending-D9abY-SU.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DuFRV_vn.js";import"./utils-BfyCZP0-.js";import"./index-CR_QxdVU.js";import"./index-Dpn5zcT7.js";import"./index-Dp-mv8t6.js";import"./navigation-down-arrow-Tmk039L5.js";import"./navigation-right-arrow-BYzIZaOi.js";import"./navigation-right-arrow-cBTAD0Yi.js";import"./useCurrentTheme-BkGgWsWg.js";import"./index-BZwsWFyc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BEA5tLHH.js";import"./paper-plane-lDy3rZNF.js";import"./index-D64P37aV.js";import"./less-CQhJ4OcE.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(r,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(a,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
