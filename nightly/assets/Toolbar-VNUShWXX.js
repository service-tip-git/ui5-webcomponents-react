import{j as o}from"./iframe-w0_MYrZh.js";import{useMDXComponents as h}from"./index-BycN9fOm.js";import{A as n}from"./ArgTypesWithNote-CdNpMStf.js";import{C as x}from"./ControlsWithNote-CVj_NA8J.js";import{D as j}from"./DocsHeader-De--8brR.js";import{F as b}from"./CommandsAndQueries-BLQv3roD.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-DJOHNqcV.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-BAvAITKe.js";import{T as d}from"./index-BnUEbXWb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-De2hY3Dy.js";import"./information-DqXgTAXV.js";import"./sys-enter-2-BeQRv1GM.js";import"./alert-CuXO44HU.js";import"./Tag-BpDpCVC0.js";import"./index-vKqE_SS0.js";import"./index-BgtBDdHh.js";import"./Link-BZHTtj1b.js";import"./copy-D6tn0azK.js";import"./copy-D2R0vLQ4.js";import"./GitHub-Mark-BZEFkw-3.js";import"./TableOfContent-DGfn8FxH.js";import"./index-D0GVc7AW.js";import"./index-URs7g74M.js";import"./index-D2-ZQ1Lf.js";import"./index-BD0pDq5_.js";import"./index-CJZSgnB8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D4L-H8MS.js";import"./addCustomCSSWithScoping-BxnbVzCY.js";import"./Select-C7o0oMjf.js";import"./InvisibleMessage-RrW4HMOA.js";import"./slim-arrow-down-bs2ksNJ4.js";import"./slim-arrow-down-_tiVkR_W.js";import"./ResponsivePopoverCommon.css-CIKpOnPy.js";import"./ValueStateMessage.css-DwWJ9RXg.js";import"./Option-C_lYdTgQ.js";import"./ListItemBaseTemplate-hZITbmoX.js";import"./ToolbarButton-DxGg9wgG.js";import"./overflow-A8QeF5tG.js";import"./ToolbarSpacer-VKysTc8w.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
`,o.jsx(j,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:i}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsx(s,{of:O}),`
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
`,o.jsx(T,{children:u}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(p,{of:d}),`
`,o.jsx(n,{metaOf:r,of:d}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(p,{of:a}),`
`,o.jsx(n,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(n,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(n,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(n,{metaOf:r,of:m}),`
`,o.jsx(b,{})]})}function lo(t={}){const{wrapper:e}={...h(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{lo as default};
