import{j as e}from"./iframe-OB3gpUrt.js";import{useMDXComponents as o}from"./index-tYZXwc8M.js";import{I as l,F as r}from"./CommandsAndQueries-DdKCqOgb.js";import{M as a,C as c}from"./blocks-W1zrio7-.js";import"./Tag-BYZWsksY.js";import"./index-DTbk-QpW.js";import"./copy-Cn9jluxF.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Dj2Ui42u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YBnae26q.js";import"./index-DJjROlPg.js";import"./index-KwKt-eeL.js";import"./Link-04tQrlfI.js";import"./index-DeGKliVC.js";import"./index-CGtjIa9c.js";import"./index-BZk-qSok.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B6If5ETY.js";import"./addCustomCSSWithScoping-DcUbYumu.js";import"./index-DSe1Jsyu.js";import"./information-EFB093TQ.js";import"./sys-enter-2-BDVh3TOJ.js";import"./alert-kdfQmJam.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPHD3nDA.js";import"./delete-BIeDl-Ta.js";import"./settings-CTUquDVY.js";import"./NoData-n8Nq-IT5.js";import"./IllustratedMessage-t7HTQHsk.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DIPdowOu.js";import"./index-CanaeHWT.js";import"./index-RQHb4HK-.js";import"./slim-arrow-down-DYGYxXVh.js";import"./Input-DK8mjIq4.js";import"./ResponsivePopoverCommon.css-D14pwlR9.js";import"./ValueStateMessage.css-BhAYjEKZ.js";import"./Suggestions.css-HKZ3bD8M.js";import"./ListBoxItemGroupTemplate-CeZ64DwH.js";import"./ComboBoxItemGroup-DdcF-j7O.js";import"./ListItemBaseTemplate-BKr4_BQZ.js";import"./Token-BI74ljUx.js";import"./ScrollEnablement-FujgOftY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cF0IxW3X.js";import"./ToggleButton-fgX17mlx.js";import"./SuggestionItem-C0SAz8sz.js";import"./index-Btplke0T.js";import"./Option-CflwkonD.js";import"./index-pcXHjSUb.js";import"./SegmentedButton-om5uqAak.js";import"./index-CHsEA-_K.js";import"./Select-2koy19zz.js";import"./InvisibleMessage-B3GDFN-r.js";import"./slim-arrow-down-_hqmKTXT.js";import"./index-NoU0USPq.js";import"./index-DWl07NkK.js";import"./index-CFAbp54K.js";import"./index-BI78Dgdb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pNoIBhlO.js";import"./group-2-6ULYOJW8.js";import"./sort-descending-DnjMAKvJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-98n-Rp.js";import"./utils-BkqRVCAz.js";import"./index-ezjhGbTq.js";import"./index-DLl3Lmz6.js";import"./index-DTksDkVP.js";import"./navigation-down-arrow-veqq6R5P.js";import"./navigation-right-arrow-BpamG8Wu.js";import"./navigation-right-arrow-5Ow3qQi6.js";import"./useCurrentTheme-CxwmJY3a.js";import"./index-owm7Dkhx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-MRQZvrlb.js";import"./paper-plane-zFWohFwR.js";import"./index-B189vp1A.js";import"./less-BuCilNou.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
