import{j as o}from"./iframe-plJY_px0.js";import{useMDXComponents as i}from"./index-CNgSdSBz.js";import{M as p,C as a}from"./blocks-Q5gmWwgb.js";import"./Tag-Dh3wWudw.js";import"./index-DSqDyml0.js";import{C as m}from"./ControlsWithNote-CxBuL735.js";import{D as c}from"./DocsHeader-Bbmfd1uh.js";import{F as h}from"./CommandsAndQueries-CSEdQQvR.js";import{C as s,D as e}from"./Toast.stories-XKqyy_-l.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CFU4bu3b.js";import"./sys-enter-2-CWJ3J9PS.js";import"./alert-Cvpxudnd.js";import"./index-t--BkPKT.js";import"./index-D3V1C0u7.js";import"./Link-Bty8oyFV.js";import"./copy-Bu8GevAL.js";import"./copy-mR5XScRR.js";import"./GitHub-Mark-AHgO4eaB.js";import"./TableOfContent-3VAk2MsF.js";import"./index-2EbIuvCl.js";import"./index-CULtK81i.js";import"./index-Dd7Sfpx-.js";import"./index-DfokaHEY.js";import"./index-B337CKIF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQsTwQe_.js";import"./addCustomCSSWithScoping-K4GM8_aQ.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
`,o.jsx(c,{of:s,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:e}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(m,{of:e}),`
`,o.jsx(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"Toaast"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," prop."]}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`export function MyComponentWithAToast() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowToast(true);
        }}
      >
        Show Toast
      </Button>
      <Toast
        open={showToast}
        onClose={() => {
          setShowToast(false);
        }}
      >
        This is my Toast!
      </Toast>
    </>
  );
}
`})}),`
`,o.jsx(h,{})]})}function R(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{R as default};
