import{j as o}from"./iframe-D9bcJVt0.js";import{useMDXComponents as s}from"./index-DEcJNjgo.js";import{M as i,C as m}from"./blocks-jEcy0Ls1.js";import"./Tag-S7_09THp.js";import"./index-D7Hu_hwq.js";import{C as c}from"./ControlsWithNote-EpfSA0e_.js";import{D as a}from"./DocsHeader-19nnlu-X.js";import{F as d}from"./CommandsAndQueries-e_oDEhyZ.js";import{C as r,D as t}from"./Popover.stories-CBI5DrJa.js";import"./preload-helper-PPVm8Dsz.js";import"./information-rD16map1.js";import"./sys-enter-2-mNekXiHd.js";import"./alert-DSYk_cjm.js";import"./index-CqnXC52g.js";import"./index-C3UoEV3F.js";import"./Link-Bg4Kb6iX.js";import"./copy-Bqt6bguH.js";import"./copy-BEICJ5u7.js";import"./GitHub-Mark-B8f3i_7Y.js";import"./TableOfContent-De7YMCoa.js";import"./index-DF6sI-fG.js";import"./index-CMrwt2SW.js";import"./index-o9G_R3kL.js";import"./index-Dsq5N9Gi.js";import"./index-BuSBQB3f.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-saeF9JMt.js";import"./addCustomCSSWithScoping-BvxM2LWg.js";import"./settings-DojOHTGJ.js";import"./index-BQ0AYfKe.js";import"./index-dIC04Ydi.js";import"./ListItemStandard-CfYt_15D.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
