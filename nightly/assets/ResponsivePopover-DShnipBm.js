import{j as o}from"./iframe-BQI8iJtZ.js";import{useMDXComponents as s}from"./index-l_Dh7Y-d.js";import{M as i,C as m}from"./blocks-Dm7btFzZ.js";import"./Tag-D2JKRyPD.js";import"./index-Bd5bxmR8.js";import{C as c}from"./ControlsWithNote-Oja_q1_6.js";import{D as a}from"./DocsHeader-Cfdt4u-X.js";import{F as d}from"./CommandsAndQueries-BH0I_jDK.js";import{C as r,D as t}from"./ResponsivePopover.stories-DbV3t11U.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DhTwMCvW.js";import"./sys-enter-2-B4_axdEE.js";import"./alert-D_lKNn7T.js";import"./index-CC6FubQ3.js";import"./index-y23wvc_L.js";import"./Link-C9lbVSnw.js";import"./copy-BI19XNof.js";import"./copy-Wr9Hnpdu.js";import"./GitHub-Mark-BFvuJcMq.js";import"./TableOfContent-Cprc8k2f.js";import"./index-CDHutJWz.js";import"./index-CdGithLr.js";import"./index-CP42RXg5.js";import"./index-CixO9GRI.js";import"./index-CjJMvaDa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DMLN5SEy.js";import"./addCustomCSSWithScoping-C30TCMVD.js";import"./index-C-AEjq-0.js";import"./index-DD2enJoe.js";import"./ListItemStandard-BDy0Ge3B.js";import"./settings-vSGnaQMo.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
