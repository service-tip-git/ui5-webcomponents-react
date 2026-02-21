import{j as o}from"./iframe-BclzIqLN.js";import{useMDXComponents as i}from"./index-C905Yc-m.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-B5DwqLl1.js";import"./Tag-BOdn4VYm.js";import"./index-DMn-V0Tk.js";import{C as x}from"./ControlsWithNote-CmUQIF7m.js";import{D as u}from"./DocsHeader-Bv9mYQAO.js";import{F as h}from"./CommandsAndQueries-C-6YnLjZ.js";import{C as n,D as r}from"./ColorPalettePopover.stories-D-wvZgPG.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DXJV1y9C.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BdMHs198.js";import"./sys-enter-2-C5ziAGW-.js";import"./alert-BWh7aIvC.js";import"./index-CnVdbwVS.js";import"./index-xMZLjYER.js";import"./Link-DPzQ2XbU.js";import"./copy-0OOzyCzB.js";import"./copy-D_MUueeP.js";import"./GitHub-Mark-ZtjZqui5.js";import"./TableOfContent-CBpvimzU.js";import"./index-uVgUJkPs.js";import"./index-OKRhEBZf.js";import"./index-C8ShhJNW.js";import"./index-5TTuORsb.js";import"./index-CJHMJsmF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cdo2Ur2Z.js";import"./addCustomCSSWithScoping-Dte7M2sk.js";import"./ResponsivePopoverCommon.css-ClkbcXC1.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
