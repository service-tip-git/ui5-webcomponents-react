import{j as o}from"./iframe-DQawrgT_.js";import{useMDXComponents as i}from"./index-BmmNdxGP.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CsjIrgm8.js";import"./Tag-DINZ5J-5.js";import"./index-CkLsOSwH.js";import{C as x}from"./ControlsWithNote-DRFCFxGt.js";import{D as u}from"./DocsHeader-BZiC0dpY.js";import{F as h}from"./CommandsAndQueries-8E8N5Jf5.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CY-5PETd.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-C3VPSL8Q.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DvV6iDHk.js";import"./sys-enter-2-DVOKgY3M.js";import"./alert-D1Pqx8x8.js";import"./index-DkjHlZC9.js";import"./index-lL1wxGfG.js";import"./Link-QZkGNwXr.js";import"./copy-DYwvtSGY.js";import"./copy-BfmM2Dw-.js";import"./GitHub-Mark-BdbxH_Db.js";import"./TableOfContent-BnjWWac5.js";import"./index--1fmb9ws.js";import"./index-CaSLC49k.js";import"./index-C4mOCO1v.js";import"./index-BpUdR17T.js";import"./index-DXw92D-i.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D6QKJZ6-.js";import"./addCustomCSSWithScoping-CIoyfOLu.js";import"./ResponsivePopoverCommon.css-CRDo6imn.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
`,o.jsx(u,{of:n,since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:r}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:r}),`
`,o.jsx(e.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(e.p,{children:["You can open and close the ",o.jsx(e.code,{children:"ColorPalettePopover"})," component in a declarative way using the ",o.jsx(e.code,{children:"open"})," and ",o.jsx(e.code,{children:"opener"})," prop."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const onButtonClick = (e) => {
    setShowPopover((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={onButtonClick}>
        Open ColorPalettePopover
      </Button>
      <ColorPalettePopover open={showPopover} opener={buttonRef.current}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(l,{children:f}),`
`,o.jsx(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(d,{of:p}),`
`,o.jsx(h,{})]})}function Q(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(s,{...t})}):s(t)}export{Q as default};
