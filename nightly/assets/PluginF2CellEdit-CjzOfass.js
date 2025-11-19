import{j as e}from"./iframe-CPcs5bjw.js";import{useMDXComponents as o}from"./index-D3pCSUGP.js";import{I as l,F as r}from"./CommandsAndQueries-BRqm99_0.js";import{M as a,C as c}from"./blocks-CciAsFaW.js";import"./Tag-BRzUE0pu.js";import"./index-DdCyPygk.js";import"./copy-DrEgra2j.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CNNMu7oZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sAPOTiYQ.js";import"./index-DSqRs7NE.js";import"./index-CE-f9LSp.js";import"./Link-CvciZabG.js";import"./index-DbiDsCRE.js";import"./index-DlX2UYU-.js";import"./index-B7pfH-Zg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-MvtR7iaQ.js";import"./addCustomCSSWithScoping-CWQJntcH.js";import"./index-Cumht0xF.js";import"./information-DGDTMoga.js";import"./sys-enter-2-DPq_4UKR.js";import"./alert-CqgikgLY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DcSLL8pw.js";import"./delete-6FPl9hw2.js";import"./settings-BkIX4e0f.js";import"./NoData-DX4tqYkJ.js";import"./IllustratedMessage-DW30GHVf.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BXiYTazg.js";import"./index-DyO1TDcH.js";import"./index-Be2buheR.js";import"./slim-arrow-down-fC08silo.js";import"./Input-BBd04gJ3.js";import"./ResponsivePopoverCommon.css-BRxBb6R7.js";import"./ValueStateMessage.css-BuHdH1UG.js";import"./Suggestions.css-bhLISna5.js";import"./ListBoxItemGroupTemplate-CNbeaoIX.js";import"./ComboBoxItemGroup-CAE0Duax.js";import"./ListItemBaseTemplate-TuOpbkNi.js";import"./Token-BhhlWiIl.js";import"./ScrollEnablement-C5TvNcLx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cf_RZ7_h.js";import"./ToggleButton-C-FM17-B.js";import"./SuggestionItem-SZn9Bgxa.js";import"./index-BTI3rLEY.js";import"./Option-CRy1QaR1.js";import"./index-CRCGoRGr.js";import"./SegmentedButton-DFyf0ped.js";import"./index-CQM2nEnH.js";import"./Select-D_8TYVG-.js";import"./InvisibleMessage-CS2hWN9Q.js";import"./slim-arrow-down-glTmVVU-.js";import"./index-Cq0d6RS0.js";import"./index-DLYHnpAo.js";import"./index-DHUEZhQD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DSJPsRuT.js";import"./group-2-De5mHDN4.js";import"./sort-descending--PDnUrf_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BcjHawbS.js";import"./utils-Cq29d2Kw.js";import"./index-CLVFcZa8.js";import"./index-DMMibOaO.js";import"./index-DKvhJ5Kx.js";import"./navigation-down-arrow-gfYqVZC2.js";import"./navigation-right-arrow-DCXuPhhE.js";import"./navigation-right-arrow-BUporjHX.js";import"./useCurrentTheme-EJjKiAvs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CmCCvj8I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CfoWS_vt.js";import"./paper-plane-VGT_jBYF.js";import"./index-Brz3_XP5.js";import"./less-_gVUTZDL.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
