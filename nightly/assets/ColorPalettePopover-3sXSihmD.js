import{j as o}from"./iframe-w0_MYrZh.js";import{useMDXComponents as i}from"./index-BycN9fOm.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DJOHNqcV.js";import"./Tag-BpDpCVC0.js";import"./index-De2hY3Dy.js";import{C as x}from"./ControlsWithNote-CVj_NA8J.js";import{D as u}from"./DocsHeader-De--8brR.js";import{F as h}from"./CommandsAndQueries-BLQv3roD.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DyGNi5NT.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BAJcZlgB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DqXgTAXV.js";import"./sys-enter-2-BeQRv1GM.js";import"./alert-CuXO44HU.js";import"./index-vKqE_SS0.js";import"./index-BgtBDdHh.js";import"./Link-BZHTtj1b.js";import"./copy-D6tn0azK.js";import"./copy-D2R0vLQ4.js";import"./GitHub-Mark-BZEFkw-3.js";import"./TableOfContent-DGfn8FxH.js";import"./index-D0GVc7AW.js";import"./index-URs7g74M.js";import"./index-D2-ZQ1Lf.js";import"./index-BD0pDq5_.js";import"./index-CJZSgnB8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D4L-H8MS.js";import"./addCustomCSSWithScoping-BxnbVzCY.js";import"./ResponsivePopoverCommon.css-CIKpOnPy.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
