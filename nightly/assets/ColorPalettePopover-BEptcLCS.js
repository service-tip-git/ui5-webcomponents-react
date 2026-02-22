import{j as o}from"./iframe-DnQpmgA6.js";import{useMDXComponents as i}from"./index-m6rQOag9.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DIAHYmsO.js";import"./Tag-CCLxzbm_.js";import"./index-BNSawElR.js";import{C as x}from"./ControlsWithNote-Bq534o6H.js";import{D as u}from"./DocsHeader-C-CYCqxJ.js";import{F as h}from"./CommandsAndQueries-DCeHCX1A.js";import{C as n,D as r}from"./ColorPalettePopover.stories-cGpP3ivh.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-wuyB69l6.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Dr8YEhs5.js";import"./sys-enter-2-Bl9jtIfu.js";import"./alert-DI-0b8x_.js";import"./index-DxN0YEHZ.js";import"./index-DqLOis9Y.js";import"./Link-TucI8b8Q.js";import"./copy-X3g7ZXkK.js";import"./copy-fbHgidly.js";import"./GitHub-Mark-KB5oR3WW.js";import"./TableOfContent-Q5nbcx9A.js";import"./index-BqBVEfNK.js";import"./index-B_h56NIO.js";import"./index-DqMOHWxY.js";import"./index-C-imFhL9.js";import"./index-L15nOwrJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2yHaKcn.js";import"./addCustomCSSWithScoping-DBwRz57F.js";import"./ResponsivePopoverCommon.css-DPwPWHul.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
