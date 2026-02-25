import{j as e}from"./iframe-CY8s9yjy.js";import{useMDXComponents as o}from"./index-CNb6gACG.js";import{I as l,F as r}from"./CommandsAndQueries-UPrDuurl.js";import{M as a,C as c}from"./blocks-Ce5kV5iJ.js";import"./Tag-DQ3Uhj_I.js";import"./index-Bm5ZTkBt.js";import"./copy-VMbFnyY_.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BUZh1mio.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVORMKlE.js";import"./index-D-EFcDV0.js";import"./index-DrB3kUVO.js";import"./Link-CNsdB8sn.js";import"./index-BsBxNorJ.js";import"./index-C8Olm4ve.js";import"./index-BaNzLEPi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CvwjvMI1.js";import"./addCustomCSSWithScoping-D-8_Iy3e.js";import"./index-BXgCJyYO.js";import"./information-DZii-Bqd.js";import"./sys-enter-2-BpeJBTAl.js";import"./alert-C5YyaVlR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bny-Pdhf.js";import"./delete-TuR8g7sp.js";import"./settings-CjD8ZkRG.js";import"./NoData-uheMpmqh.js";import"./IllustratedMessage-G815HeqE.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CvEi3g2q.js";import"./index-Dkwzq5SZ.js";import"./index-Bh4g5tnq.js";import"./slim-arrow-down-DdRsipKq.js";import"./Input-BZHTrO1F.js";import"./ResponsivePopoverCommon.css-Bh7teeL-.js";import"./ValueStateMessage.css-DVpu6R7_.js";import"./Suggestions.css-Clh_Tnq_.js";import"./ListBoxItemGroupTemplate-CWpHhO8W.js";import"./ComboBoxItemGroup-jnpv8-tH.js";import"./ListItemBaseTemplate-CVp3QqSu.js";import"./Token-C5TzIgJN.js";import"./ScrollEnablement-O8zUITM6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BGy_E5-P.js";import"./ToggleButton-Dy9m84az.js";import"./SuggestionItem-Dcp6MIw0.js";import"./index-NsWuls4K.js";import"./Option-BIMhrmf4.js";import"./index-COeRM4Xs.js";import"./SegmentedButton-D8Cz_xX2.js";import"./index-ClkFJ-SZ.js";import"./Select-DTUqqWH-.js";import"./InvisibleMessage-BvC4dXGq.js";import"./slim-arrow-down-Dy1XtcbW.js";import"./index-C3IdQyJ6.js";import"./index-CEyFD8KV.js";import"./index-D2p9cLf0.js";import"./index-yIH5v1dU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CrfR7UAR.js";import"./group-2-BfItZo2m.js";import"./sort-descending-D7yIAAHe.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7xCLMVi.js";import"./utils-CKARIPzs.js";import"./index-DALNk86A.js";import"./index-9xX_MzSp.js";import"./index-BmKRgNaZ.js";import"./navigation-down-arrow-BOgmv9Ad.js";import"./navigation-right-arrow-D61AbNUx.js";import"./navigation-right-arrow-BXCLLO3r.js";import"./useCurrentTheme-hFUuDzjB.js";import"./index-B2ztva4l.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CYf-OBV8.js";import"./paper-plane-Cl6Ob4s-.js";import"./index-BClGlfJV.js";import"./less-B8IL0Icb.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
