import{j as o}from"./iframe-DQawrgT_.js";import{useMDXComponents as s}from"./index-BmmNdxGP.js";import{M as i,C as m}from"./blocks-CsjIrgm8.js";import"./Tag-DINZ5J-5.js";import"./index-CkLsOSwH.js";import{C as c}from"./ControlsWithNote-DRFCFxGt.js";import{D as a}from"./DocsHeader-BZiC0dpY.js";import{F as d}from"./CommandsAndQueries-8E8N5Jf5.js";import{C as r,D as t}from"./ResponsivePopover.stories-fO20hQhF.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DvV6iDHk.js";import"./sys-enter-2-DVOKgY3M.js";import"./alert-D1Pqx8x8.js";import"./index-DkjHlZC9.js";import"./index-lL1wxGfG.js";import"./Link-QZkGNwXr.js";import"./copy-DYwvtSGY.js";import"./copy-BfmM2Dw-.js";import"./GitHub-Mark-BdbxH_Db.js";import"./TableOfContent-BnjWWac5.js";import"./index--1fmb9ws.js";import"./index-CaSLC49k.js";import"./index-C4mOCO1v.js";import"./index-BpUdR17T.js";import"./index-DXw92D-i.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D6QKJZ6-.js";import"./addCustomCSSWithScoping-CIoyfOLu.js";import"./index-Cd39OiMQ.js";import"./index-DOxhRrM_.js";import"./ListItemStandard-DRn-lKzQ.js";import"./settings-CWp1p9X4.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"ResponsivePopover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <ResponsivePopover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(d,{})]})}function A(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{A as default};
