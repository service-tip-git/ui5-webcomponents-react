import{j as o}from"./iframe-DGGZytBJ.js";import{useMDXComponents as x}from"./index-D8y7UPZ7.js";import{A as n}from"./ArgTypesWithNote-BiFIt5tH.js";import{C as j}from"./ControlsWithNote-W6r4yoXK.js";import{D as b}from"./DocsHeader-CHxf4bQz.js";import{F as u}from"./Footer-BZbEK1zw.js";import"./CommandsAndQueries-D_r1Ov46.js";import"./PageNotFound-3fOtIs4_.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-C1QAXsZr.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-MVDj4TOR.js";import{T as h}from"./index-D9BMEMIG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-v17LESiz.js";import"./information-D_lZSOlz.js";import"./sys-enter-2-DzyKamY9.js";import"./alert--InUH-4I.js";import"./Tag-ClZ3M_pH.js";import"./index-DZeitEZj.js";import"./index-4SX8_eNa.js";import"./Link-BtfuXmst.js";import"./copy-DDBgqbO4.js";import"./copy-BPr0Zg61.js";import"./GitHub-Mark-BqmtATMm.js";import"./TableOfContent-BSrVScMj.js";import"./index-B54b-1ni.js";import"./index-ctFb2r21.js";import"./index-DJziCtzG.js";import"./index-CeBSKfFB.js";import"./index-b7sAROVa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEpKqDTh.js";import"./addCustomCSSWithScoping-DahugnlS.js";import"./Illustrations-BSUAI0rE.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-BZwsWFyc.js";import"./index-CjxFaMXX.js";import"./InvisibleMessage-D_iVEZ-h.js";import"./Input-BOYCocWs.js";import"./ResponsivePopoverCommon.css-CuamSE7y.js";import"./ValueStateMessage.css-DuNfrXP7.js";import"./Suggestions.css-COf1yHSo.js";import"./SuggestionItem-vp3O8px8.js";import"./ListItemBaseTemplate-oQlxc1lO.js";import"./ComboBoxItemGroup-D5uN8nOJ.js";import"./ListBoxItemGroupTemplate-2xWZNDwK.js";import"./index-Bc2O57hc.js";import"./DatePicker-RVs0o3j1.js";import"./query-CzSBusdE.js";import"./Calendar-Dd1J0OQ7.js";import"./Gregorian-D_7gz119.js";import"./FormatUtils-DjFUOwD0.js";import"./slim-arrow-left-CDJ8E91u.js";import"./appointment-2-BD9JCaIl.js";import"./DateTimeInput-CLtDA6q5.js";import"./index-DuFRV_vn.js";import"./index-JDHBBDHb.js";import"./Token-cQg9GVNS.js";import"./ScrollEnablement-DwIhDXw6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-R9GFPOIC.js";import"./ToggleButton-CgFbbSab.js";import"./multiselect-all-Njl7KSgU.js";import"./index-DPF7a_uy.js";import"./index-D64P37aV.js";import"./less-CQhJ4OcE.js";import"./ToolbarSpacer-nKK8U6MY.js";import"./ToolbarButton-C9rV2khC.js";import"./overflow-ssOrx3jG.js";import"./Select-C1jqGXCC.js";import"./Option-l5eTmgDe.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
`,o.jsx(b,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{of:s}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(j,{of:s}),`
`,o.jsx(e.h2,{id:"toolbaritem",children:"ToolbarItem"}),`
`,o.jsx(e.p,{children:"ToolbarItem wrapper used to add any component to Toolbar."}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To display the radio buttons and checkboxes in a column in the overflow popover, the ",o.jsx(e.code,{children:"toolbar-item-group"})," CSS class is used:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-css",children:`/* Use :state(overflowed) to style items differently when in overflow popover */
[ui5-toolbar-item]:state(overflowed) .toolbar-item-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`})}),`
`,o.jsx(p,{of:w}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To prevent the overflow popover from closing when the opener ",o.jsx(e.code,{children:"ToolbarButton"})," of the Popover is clicked, you can call ",o.jsx(e.code,{children:"event.preventDefault()"})," in the ",o.jsx(e.code,{children:"onClick"})," event handler."]}),`
`,o.jsx(p,{of:O}),`
`,o.jsx(e.h3,{id:"example-code",children:"Example Code"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`function ToolbarWithPopover() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<PopoverDomRef>(null);
  return (
    <>
      <Toolbar>
        <ToolbarButton
          onClick={(e) => {
            const { targetRef } = e.detail;
            e.preventDefault();
            if (popoverRef.current) {
              popoverRef.current.opener = targetRef;
              setPopoverOpen(true);
            }
          }}
          text="Open Popover"
        />
      </Toolbar>
      <Popover
        open={popoverOpen}
        ref={popoverRef}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        Content
      </Popover>
    </>
  );
}
`})}),`
`,o.jsx(g,{children:v}),`
`,o.jsx(e.h2,{id:"toolbaritem-1",children:"ToolbarItem"}),`
`,o.jsxs(e.p,{children:[o.jsx(i,{of:a}),'"']}),`
`,o.jsx(n,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(i,{of:h}),`
`,o.jsx(n,{metaOf:r,of:h}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(i,{of:l}),`
`,o.jsx(n,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(i,{of:m}),`
`,o.jsx(n,{metaOf:r,of:m}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(i,{of:c}),`
`,o.jsx(n,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(i,{of:d}),`
`,o.jsx(n,{metaOf:r,of:d}),`
`,o.jsx(u,{})]})}function qo(t={}){const{wrapper:e}={...x(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{qo as default};
