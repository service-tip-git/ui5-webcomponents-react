import{j as e}from"./iframe-BayyK-Sd.js";import{useMDXComponents as o}from"./index-Bzssb8Xd.js";import{I as l,F as r}from"./CommandsAndQueries-BWULVlsD.js";import{M as a,C as c}from"./blocks-C_Hnd7fg.js";import"./Tag-BpBS-AuZ.js";import"./index-CvYFyR11.js";import"./copy-DZZbIDUz.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-QbrzZX1h.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiVk4GbQ.js";import"./index-DV2g_43r.js";import"./index-D_W1qX2w.js";import"./Link-DsRy4Mnv.js";import"./index-CTxam_11.js";import"./index-CvVYJJGO.js";import"./index-DGVYbyp5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CiI3G7zh.js";import"./addCustomCSSWithScoping-BRKADkGf.js";import"./index-CK9HJhHW.js";import"./information-D5ng3oI8.js";import"./sys-enter-2-C1yPBG5C.js";import"./alert-C5buViQ-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-OE18-JdZ.js";import"./delete-BbgUJXGi.js";import"./settings-BmyXWHXN.js";import"./NoData-CId8to51.js";import"./IllustratedMessage-DrJiWY3J.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-C-7XSeeS.js";import"./index-C_SEzddK.js";import"./index-Cfv719qF.js";import"./slim-arrow-down-CYWrhP8K.js";import"./Input-JXz_mghp.js";import"./ResponsivePopoverCommon.css-BE3AHcrB.js";import"./ValueStateMessage.css-CPPmdzjG.js";import"./Suggestions.css-DMbMSnFv.js";import"./ListBoxItemGroupTemplate-YGlaa4-L.js";import"./ComboBoxItemGroup-B66yYzM_.js";import"./ListItemBaseTemplate-C2wpCpOj.js";import"./Token-DJPiW-9k.js";import"./ScrollEnablement-b9VRk5D0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Qcq6pFUS.js";import"./ToggleButton-DNEd488t.js";import"./SuggestionItem-Ce7Hn2Zx.js";import"./index-CMGyAd1y.js";import"./Option-DsNeIMXC.js";import"./index-BKzi5p7m.js";import"./SegmentedButton-CjIp9jgc.js";import"./index-CGNi-nkR.js";import"./Select-W3YZdL-T.js";import"./InvisibleMessage-CV5ENGws.js";import"./slim-arrow-down-BfT4kuc7.js";import"./index-c6l7EBuN.js";import"./index-CphH-Mq2.js";import"./index-BovCb11M.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BItiagYO.js";import"./group-2-BYV4hW0u.js";import"./sort-descending-D8jO5ZBY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWjYcQuY.js";import"./utils-BxDZ9J52.js";import"./index-Ca_HsQoM.js";import"./index-BFBr5osT.js";import"./index-DIe0Mc4Y.js";import"./navigation-down-arrow-SKyq9Gew.js";import"./navigation-right-arrow-BNZl5xyh.js";import"./navigation-right-arrow-D0AjCoAk.js";import"./useCurrentTheme-BgQwIHp1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cy8kD9Ns.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlVbLN3l.js";import"./paper-plane-C7yKcpS7.js";import"./index-BCW3PpbP.js";import"./less-Dn7O_2zP.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
