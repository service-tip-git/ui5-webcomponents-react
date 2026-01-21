import{j as e}from"./iframe-DYfg4QHt.js";import{useMDXComponents as o}from"./index-CVbrUuPE.js";import{I as l,F as r}from"./CommandsAndQueries-Bv0cgQmk.js";import{M as a,C as c}from"./blocks-BUAqhVj9.js";import"./Tag-DSyohh1a.js";import"./index-BmTrkp-7.js";import"./copy-D6hWl56-.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CdlnE1KK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7hJqHh2.js";import"./index-BKQsUqka.js";import"./index-Cey_WqgE.js";import"./Link-DNgH-frF.js";import"./index-DHfPdgXp.js";import"./index-DGISTYKI.js";import"./index-91p8b6xm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN-x3Tox.js";import"./addCustomCSSWithScoping-D5zE1nWM.js";import"./index-Cmi2IW4V.js";import"./information-DmJ60sG9.js";import"./sys-enter-2-DM66m4rJ.js";import"./alert-CCfcH-Mh.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vgLY-pWJ.js";import"./delete-D34_mFXP.js";import"./settings-gx1Rt1L_.js";import"./NoData-DlyRoGui.js";import"./IllustratedMessage-DRxGb1zp.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B7x9pabn.js";import"./index-DahuAuMf.js";import"./index-BeUWAGwZ.js";import"./slim-arrow-down-CW3E1SKi.js";import"./Input-iisXfHsF.js";import"./ResponsivePopoverCommon.css-CUkbRKkQ.js";import"./ValueStateMessage.css-JCR7oNs7.js";import"./Suggestions.css-CvEadgHg.js";import"./ListBoxItemGroupTemplate-CVIbduo6.js";import"./ComboBoxItemGroup-NvpVhGDp.js";import"./ListItemBaseTemplate-C8z7WXl_.js";import"./Token-XCzL_gO_.js";import"./ScrollEnablement-CNfKzKUR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard--jyjJfbY.js";import"./ToggleButton-CNFVQAAc.js";import"./SuggestionItem-evSaZZRy.js";import"./index-DZ5Gyh8u.js";import"./Option-BXSqJg_S.js";import"./index-CQqiTtty.js";import"./SegmentedButton-BjQ27BtY.js";import"./index-CVlyf3BN.js";import"./Select-CVTIiGaA.js";import"./InvisibleMessage-CgGc0QHI.js";import"./slim-arrow-down-Y-ZQwTJr.js";import"./index-C-fiAxLB.js";import"./index-B18_A3pn.js";import"./index-Co1UuDMa.js";import"./index-C0HSA-PR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CoR2QbFK.js";import"./group-2-CBo-4-zi.js";import"./sort-descending-PAYd66BW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dzn1Xrdp.js";import"./utils-9o_atc5t.js";import"./index-DGWGpo3w.js";import"./index-CObhiRst.js";import"./index-yUqfaSMu.js";import"./navigation-down-arrow-ZAYOJffR.js";import"./navigation-right-arrow-CeM1y1gw.js";import"./navigation-right-arrow-yI36QQVV.js";import"./useCurrentTheme-PNoownmV.js";import"./index-BBshEaSl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CSLDn2Wo.js";import"./paper-plane-Bj3JAkAg.js";import"./index-CWOZpVQI.js";import"./less-CeHycIPZ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
