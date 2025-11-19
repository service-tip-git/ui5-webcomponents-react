import{j as o}from"./iframe-Bg524aqp.js";import{useMDXComponents as i}from"./index-B-rwzkjC.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks--Wel_jE1.js";import"./Tag-DNMuD7A5.js";import"./index-B9tuTECn.js";import{C as x}from"./ControlsWithNote-mASCmhtx.js";import{D as u}from"./DocsHeader-CrRuZK8O.js";import{F as h}from"./CommandsAndQueries-Bxzaytg-.js";import{C as n,D as r}from"./ColorPalettePopover.stories-B8633J9J.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-D185oQrp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-2dCGwvE_.js";import"./sys-enter-2-CO93Qjp1.js";import"./alert-BG-ILaUe.js";import"./index-DxUoW9XL.js";import"./index-TfZZnQDd.js";import"./Link-DzzFCouB.js";import"./copy-BFkS0l-f.js";import"./copy-BgS9Q-8_.js";import"./GitHub-Mark-Bwa4giqR.js";import"./TableOfContent-Cn8NCVE9.js";import"./index-BqYTt2r-.js";import"./index-DPNsglmV.js";import"./index-iejN5y1T.js";import"./index-r1bogqKf.js";import"./index-tDWQXHER.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkKuq7AH.js";import"./addCustomCSSWithScoping-DFbnSqfd.js";import"./ResponsivePopoverCommon.css-DvaTlIz3.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
