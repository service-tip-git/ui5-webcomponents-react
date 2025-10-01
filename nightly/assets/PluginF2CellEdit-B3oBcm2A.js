import{j as e}from"./iframe-CC5YTvQh.js";import{useMDXComponents as o}from"./index-Cq26BSP3.js";import{I as r,F as l}from"./CommandsAndQueries-CFtdiSUA.js";import{M as a,C as c}from"./blocks-BsOXarNI.js";import"./Tag-BlfrYy9_.js";import"./index-CzqjBntm.js";import"./copy-Dmf1qML3.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CQUBK3-g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BoEyxgcJ.js";import"./index-ZUwBAUQq.js";import"./index-DZNvYvST.js";import"./Link-BoZATccP.js";import"./index-CBMZmkal.js";import"./index-BSqVcJze.js";import"./index-Dnx65cB5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BdkJ8A28.js";import"./addCustomCSSWithScoping-DLLu2c7G.js";import"./index-Dtg_ecO1.js";import"./information-D0rIxsAi.js";import"./sys-enter-2-DYbT0ikl.js";import"./alert-D4tt3RNk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CT-64OOl.js";import"./delete-D2h8TM4S.js";import"./settings-afnv_1Um.js";import"./NoData-50jlYSou.js";import"./IllustratedMessage-DT3qL7vi.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Da8uvuY3.js";import"./index-2D2IVzvv.js";import"./slim-arrow-down-CXRWIFXL.js";import"./Input-Q1qp06Fs.js";import"./ResponsivePopoverCommon.css-D4bRbcp1.js";import"./ValueStateMessage.css-DZdfGl5Q.js";import"./Suggestions.css-oGOSH654.js";import"./ListBoxItemGroupTemplate-DbQMIiOT.js";import"./ComboBoxItemGroup-BHNpI85Y.js";import"./ListItemBaseTemplate-F0T_X0t2.js";import"./Token-Cm37GxNd.js";import"./ScrollEnablement-D_WinKmz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-UOq8Eb3o.js";import"./ToggleButton-DvtE59JH.js";import"./SuggestionItem-GZWE6oX3.js";import"./index-DdgZx-Mv.js";import"./Option-JMlPQoIR.js";import"./index-CR3s6vsE.js";import"./SegmentedButton-D968rhEd.js";import"./index-DR1KWNIH.js";import"./Select-Bicd3BEg.js";import"./InvisibleMessage-qwn7H305.js";import"./slim-arrow-down-mUJEFf7l.js";import"./index-wHUsYevm.js";import"./index-BmHMhL1b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BuAXIAij.js";import"./group-2-BHCyACyZ.js";import"./sort-descending-CzmEbK8x.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B_B2IdMY.js";import"./utils-DhJOckmR.js";import"./index-CClk8p2o.js";import"./index-CmBuHpMs.js";import"./index-Bvw_9-nq.js";import"./navigation-down-arrow-B4rXVi5n.js";import"./navigation-right-arrow-DsxjI3d8.js";import"./navigation-right-arrow-CxCTIBiF.js";import"./useCurrentTheme-Di3GYb_r.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DMBo-m9v.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DezL06Ik.js";import"./paper-plane-DrRGD0IK.js";import"./index-DipmRI2t.js";import"./less-BE1EluBh.js";import"./index-08aiBztu.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(l,{})]})}function Le(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Le as default};
