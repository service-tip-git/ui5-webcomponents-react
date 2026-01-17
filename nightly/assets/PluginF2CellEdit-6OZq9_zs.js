import{j as e}from"./iframe-plJY_px0.js";import{useMDXComponents as o}from"./index-CNgSdSBz.js";import{I as l,F as r}from"./CommandsAndQueries-CSEdQQvR.js";import{M as a,C as c}from"./blocks-Q5gmWwgb.js";import"./Tag-Dh3wWudw.js";import"./index-DSqDyml0.js";import"./copy-mR5XScRR.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-OXoTGLJY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2EbIuvCl.js";import"./index-CULtK81i.js";import"./index-D3V1C0u7.js";import"./Link-Bty8oyFV.js";import"./index-Dd7Sfpx-.js";import"./index-DfokaHEY.js";import"./index-B337CKIF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQsTwQe_.js";import"./addCustomCSSWithScoping-K4GM8_aQ.js";import"./index-t--BkPKT.js";import"./information-CFU4bu3b.js";import"./sys-enter-2-CWJ3J9PS.js";import"./alert-Cvpxudnd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DS99HCgK.js";import"./delete-eXKtkG1a.js";import"./settings-B4zUkila.js";import"./NoData-vjKh1Mr_.js";import"./IllustratedMessage-B3aadiAZ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-4tlbkylG.js";import"./index-DkneJmbW.js";import"./index-brt5d6po.js";import"./slim-arrow-down-BTqVQDWC.js";import"./Input-qu-i9z2w.js";import"./ResponsivePopoverCommon.css-C--dNoH7.js";import"./ValueStateMessage.css-65I0H3x5.js";import"./Suggestions.css-C34DaZQw.js";import"./ListBoxItemGroupTemplate--HwHHtzG.js";import"./ComboBoxItemGroup-CJJD_zkv.js";import"./ListItemBaseTemplate-DPXdBI9X.js";import"./Token-CtYzp5bp.js";import"./ScrollEnablement-C3kxd9Sb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Du-JodLR.js";import"./ToggleButton-BVbL9ept.js";import"./SuggestionItem-CSeK9fns.js";import"./index-BfNy1JVl.js";import"./Option-kaAYALSt.js";import"./index-C1pDbGHC.js";import"./SegmentedButton-CoeXh0KC.js";import"./index-B1eO7s43.js";import"./Select-BOpGp0Rm.js";import"./InvisibleMessage-fL3jWeDc.js";import"./slim-arrow-down-2gbZmUST.js";import"./index-B6yr2B_f.js";import"./index-k_dsVjf7.js";import"./index-CmDLye-F.js";import"./index-CKdbXzvk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Qq0nKm9O.js";import"./group-2-DmjkdZiv.js";import"./sort-descending-G3a3Bk4A.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BJvTlN0-.js";import"./utils-BmYl7bBX.js";import"./index-CuirFJHi.js";import"./index-jIxgqskF.js";import"./index-DnBhArpB.js";import"./navigation-down-arrow-CPK2vVem.js";import"./navigation-right-arrow-DzWp8vrQ.js";import"./navigation-right-arrow-CbRKCuia.js";import"./useCurrentTheme-CPuhdXAo.js";import"./index-CfCdmgBi.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmQyw8RD.js";import"./paper-plane-BzpUcvaz.js";import"./index-_e_VAWTV.js";import"./less-Cv2JCqO3.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
