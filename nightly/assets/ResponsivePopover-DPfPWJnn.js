import{j as o}from"./iframe-CY8s9yjy.js";import{useMDXComponents as s}from"./index-CNb6gACG.js";import{M as i,C as m}from"./blocks-Ce5kV5iJ.js";import"./Tag-DQ3Uhj_I.js";import"./index-Bm5ZTkBt.js";import{C as c}from"./ControlsWithNote-B0houuJI.js";import{D as a}from"./DocsHeader-D5K6Cl4j.js";import{F as d}from"./CommandsAndQueries-UPrDuurl.js";import{C as r,D as t}from"./ResponsivePopover.stories-jEgDtWWY.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DZii-Bqd.js";import"./sys-enter-2-BpeJBTAl.js";import"./alert-C5YyaVlR.js";import"./index-BXgCJyYO.js";import"./index-DrB3kUVO.js";import"./Link-CNsdB8sn.js";import"./copy-UXeu2vhH.js";import"./copy-VMbFnyY_.js";import"./GitHub-Mark-CqhkpLMH.js";import"./TableOfContent-DTx8VjPa.js";import"./index-CVORMKlE.js";import"./index-D-EFcDV0.js";import"./index-BsBxNorJ.js";import"./index-C8Olm4ve.js";import"./index-BaNzLEPi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CvwjvMI1.js";import"./addCustomCSSWithScoping-D-8_Iy3e.js";import"./index-DALNk86A.js";import"./index-BmKRgNaZ.js";import"./ListItemStandard-BGy_E5-P.js";import"./settings-CjD8ZkRG.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
