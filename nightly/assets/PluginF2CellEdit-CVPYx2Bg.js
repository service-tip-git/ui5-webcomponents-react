import{j as e}from"./iframe-D9bcJVt0.js";import{useMDXComponents as o}from"./index-DEcJNjgo.js";import{I as l,F as r}from"./CommandsAndQueries-e_oDEhyZ.js";import{M as a,C as c}from"./blocks-jEcy0Ls1.js";import"./Tag-S7_09THp.js";import"./index-D7Hu_hwq.js";import"./copy-BEICJ5u7.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DLNw0oL7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DF6sI-fG.js";import"./index-CMrwt2SW.js";import"./index-C3UoEV3F.js";import"./Link-Bg4Kb6iX.js";import"./index-o9G_R3kL.js";import"./index-Dsq5N9Gi.js";import"./index-BuSBQB3f.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-saeF9JMt.js";import"./addCustomCSSWithScoping-BvxM2LWg.js";import"./index-CqnXC52g.js";import"./information-rD16map1.js";import"./sys-enter-2-mNekXiHd.js";import"./alert-DSYk_cjm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DhXMnXqd.js";import"./delete-CuHBZVP5.js";import"./settings-DojOHTGJ.js";import"./NoData-DV_7CgAU.js";import"./IllustratedMessage-JmaURS-8.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DKg5IlHC.js";import"./index-BDwBt9OC.js";import"./index-BkkfTKSR.js";import"./slim-arrow-down-BD5IYpYe.js";import"./Input-DgD_KIuK.js";import"./ResponsivePopoverCommon.css-CpNcVGzg.js";import"./ValueStateMessage.css-7nL_K-x6.js";import"./Suggestions.css-BXIA00KI.js";import"./ListBoxItemGroupTemplate-CjlaekqL.js";import"./ComboBoxItemGroup-Pa31sPb6.js";import"./ListItemBaseTemplate-CBhJdBlB.js";import"./Token-h6BGlN2Z.js";import"./ScrollEnablement-BWuQyb0_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CfYt_15D.js";import"./ToggleButton-D9sfR6lE.js";import"./SuggestionItem-CsdeB4_z.js";import"./index-CXj5AEqi.js";import"./Option-C6arWRGE.js";import"./index-18lR1lm6.js";import"./SegmentedButton-DQtRU8vV.js";import"./index-ByPvdeD4.js";import"./Select-4TgEfMLB.js";import"./InvisibleMessage-Dar0vH_K.js";import"./slim-arrow-down-DAxhtMM2.js";import"./index-CcVbj5Dn.js";import"./index-BvhLCcwp.js";import"./index-DLqaN8TD.js";import"./index-CZq9Z5fi.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ButLvEeW.js";import"./group-2-BIkQBEt2.js";import"./sort-descending-BdlxQXMC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4ESEe8gp.js";import"./utils-uixZui5c.js";import"./index-BQ0AYfKe.js";import"./index-L7kHwJYz.js";import"./index-dIC04Ydi.js";import"./navigation-down-arrow-DNphUK2M.js";import"./navigation-right-arrow-C7E9KFb7.js";import"./navigation-right-arrow-CWcAZOwt.js";import"./useCurrentTheme-_hoQyvx4.js";import"./index-yxoGO_zr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL--5EK8X_4.js";import"./paper-plane-xqMM7h3_.js";import"./index-BtA_KE9i.js";import"./less-5iCe7j9C.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
