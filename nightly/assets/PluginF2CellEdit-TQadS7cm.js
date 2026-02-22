import{j as e}from"./iframe-DnQpmgA6.js";import{useMDXComponents as o}from"./index-m6rQOag9.js";import{I as l,F as r}from"./CommandsAndQueries-DCeHCX1A.js";import{M as a,C as c}from"./blocks-DIAHYmsO.js";import"./Tag-CCLxzbm_.js";import"./index-BNSawElR.js";import"./copy-fbHgidly.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-9n2KIugs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqBVEfNK.js";import"./index-B_h56NIO.js";import"./index-DqLOis9Y.js";import"./Link-TucI8b8Q.js";import"./index-DqMOHWxY.js";import"./index-C-imFhL9.js";import"./index-L15nOwrJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2yHaKcn.js";import"./addCustomCSSWithScoping-DBwRz57F.js";import"./index-DxN0YEHZ.js";import"./information-Dr8YEhs5.js";import"./sys-enter-2-Bl9jtIfu.js";import"./alert-DI-0b8x_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BDBV03jP.js";import"./delete-DEaH-QMQ.js";import"./settings-Y1HrJ1Be.js";import"./NoData-CeQyUEKi.js";import"./IllustratedMessage-BmE39Sz_.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DcdliNxr.js";import"./index-DlcKtOvu.js";import"./index-DmDTWCkI.js";import"./slim-arrow-down-bqQZFEzo.js";import"./Input-CFSHOVLn.js";import"./ResponsivePopoverCommon.css-DPwPWHul.js";import"./ValueStateMessage.css-DhleDcPv.js";import"./Suggestions.css-Bt_4dqwC.js";import"./ListBoxItemGroupTemplate-OyTsfH68.js";import"./ComboBoxItemGroup-CL9AHdXR.js";import"./ListItemBaseTemplate-BENNhCLG.js";import"./Token-CCdz11AY.js";import"./ScrollEnablement-Vy5r4Z-H.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CbLH-mve.js";import"./ToggleButton-IDcSTjtk.js";import"./SuggestionItem-BJHpd9Tu.js";import"./index-CFAiARvU.js";import"./Option-q0-CYUub.js";import"./index-BVmq-K4P.js";import"./SegmentedButton-B9JgMyuK.js";import"./index-BkZL85Pv.js";import"./Select-Cz0Q93PZ.js";import"./InvisibleMessage-Cl67Ph06.js";import"./slim-arrow-down-C4oPdCY4.js";import"./index-JFfX52ZD.js";import"./index-BuVSgPW5.js";import"./index-DVQ4HkFg.js";import"./index-C89oEcpH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIL8SXRk.js";import"./group-2-D8yPI7nW.js";import"./sort-descending-Dd5yu8uD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BnUH6T6C.js";import"./utils-DvbIUQmI.js";import"./index-DBXZXDyB.js";import"./index-CxxXXamh.js";import"./index-BEE3e02q.js";import"./navigation-down-arrow-81WXcHgL.js";import"./navigation-right-arrow-ByFxVnQf.js";import"./navigation-right-arrow-C7f932cn.js";import"./useCurrentTheme-4919pBsT.js";import"./index-PqqIWEPc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-djYEqh-T.js";import"./paper-plane-_it-Hq1r.js";import"./index-Btlv6fLI.js";import"./less-ClggAEde.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
