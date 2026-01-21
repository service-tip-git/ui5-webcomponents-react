import{j as e}from"./iframe-Crk1dOR8.js";import{useMDXComponents as o}from"./index-R8jXtLED.js";import{I as l,F as r}from"./CommandsAndQueries-OnXJs0rK.js";import{M as a,C as c}from"./blocks-DC75RB67.js";import"./Tag-Bw7tKX4O.js";import"./index-CACmyy9p.js";import"./copy-D_VyToZg.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DgxkA0YY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-F2nIq42R.js";import"./index-D2r_hMST.js";import"./index-K2kHsFSd.js";import"./Link-BHKq5JFv.js";import"./index-DvoETnoE.js";import"./index-CmobNXn6.js";import"./index-BW0zluCU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCgdgzPV.js";import"./addCustomCSSWithScoping-DLDk5l5Q.js";import"./index-DhFJLS7i.js";import"./information-YuxwihY0.js";import"./sys-enter-2-DLpc5Bbk.js";import"./alert-BQrPd1lR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bxy-cfhx.js";import"./delete-CyhoR1-x.js";import"./settings-DCnlQZPD.js";import"./NoData-DsbJ2Wb3.js";import"./IllustratedMessage-nKOTDNJc.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-t_oBNwfC.js";import"./index-CCh-mHqY.js";import"./index-BPXaNDRo.js";import"./slim-arrow-down-W9MNNw_u.js";import"./Input-CdoMhJ7q.js";import"./ResponsivePopoverCommon.css-CWK0u4Wt.js";import"./ValueStateMessage.css-B6Yu1ZOd.js";import"./Suggestions.css-D9mEdZF4.js";import"./ListBoxItemGroupTemplate-CD1d_PnD.js";import"./ComboBoxItemGroup-BcvTejR3.js";import"./ListItemBaseTemplate-ChpQCm05.js";import"./Token-2Y_wwcCo.js";import"./ScrollEnablement-CgGNqNYL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-m90ft9fO.js";import"./ToggleButton-D-b4ypKX.js";import"./SuggestionItem-BW3fUUjZ.js";import"./index-C7Lon1Bh.js";import"./Option-ByUi6-KI.js";import"./index-Bh8NMrS9.js";import"./SegmentedButton-DNBQsKKg.js";import"./index-C1TKRwfK.js";import"./Select-D0g7SDMw.js";import"./InvisibleMessage-DpJUGs_4.js";import"./slim-arrow-down-CJ_Lgolz.js";import"./index-CYjSUM3h.js";import"./index-CLkqgh3m.js";import"./index-BbH0YSzC.js";import"./index-FAzfBcds.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ziA0Ay5P.js";import"./group-2-3sV-WrZR.js";import"./sort-descending-BWp52hph.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Zzwzp3a_.js";import"./utils-C0yBiuVB.js";import"./index-DgcfWpn9.js";import"./index-CgKmmuuU.js";import"./index-BD_evJiC.js";import"./navigation-down-arrow-B8WKWh1B.js";import"./navigation-right-arrow-BEBvQFEq.js";import"./navigation-right-arrow-D13mADge.js";import"./useCurrentTheme-DEz25XUz.js";import"./index-Bx1EFR65.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CEOwLdyi.js";import"./paper-plane-BiKcq-Zy.js";import"./index-B2Orb9H-.js";import"./less-B6ZC-ovs.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
