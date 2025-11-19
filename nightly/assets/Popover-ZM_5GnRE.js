import{j as o}from"./iframe-DOg6M_II.js";import{useMDXComponents as s}from"./index-kwVVcFLm.js";import{M as i,C as m}from"./blocks-CUc5S4F5.js";import"./Tag-BltckGaY.js";import"./index-bsC8MgY-.js";import{C as c}from"./ControlsWithNote-DHUK-IYy.js";import{D as a}from"./DocsHeader-BrKB74dq.js";import{F as d}from"./CommandsAndQueries-wl0h9BMr.js";import{C as r,D as t}from"./Popover.stories-0b6d80Vl.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BuhVNJUa.js";import"./sys-enter-2-DbIwdKeB.js";import"./alert-BRGoaqba.js";import"./index-DS0sFSVa.js";import"./index-B0K8C7sE.js";import"./Link-CDmjIio6.js";import"./copy-B-QN2UTj.js";import"./copy-BKSrEciR.js";import"./GitHub-Mark-tIrCVMHV.js";import"./TableOfContent-CY-Swy74.js";import"./index-DwpJeIal.js";import"./index-DVpre6_h.js";import"./index-DMnxNTo_.js";import"./index-BEZkwnlN.js";import"./index-BdRkl8ET.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Drkj1-4P.js";import"./addCustomCSSWithScoping-DpPx9qfb.js";import"./settings-Delvnyut.js";import"./index-DFQjFJ3S.js";import"./index-BeSrSbRo.js";import"./ListItemStandard-CrVmc6dv.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
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
      <Popover
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
