import{j as o}from"./iframe-Yrd5HXiX.js";import{useMDXComponents as i}from"./index-DOxT51h1.js";import{M as p,C as m}from"./blocks-Dvv2YIoD.js";import"./Tag-A6uWcl63.js";import"./index-BF16G_0e.js";import{C as a}from"./ControlsWithNote-Diw0D9KQ.js";import{D as c}from"./DocsHeader-B3c_A74V.js";import{F as h}from"./Footer-CkKCjd3s.js";import"./CommandsAndQueries-C2FZOFS4.js";import"./PageNotFound-kNJyDscw.js";import{C as r,D as s}from"./Toast.stories-BJmkq9AO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BDrQXgLD.js";import"./sys-enter-2-BRBYXqiH.js";import"./alert-BtI3-0Jo.js";import"./index-Sv74Bfia.js";import"./index-DA96fnb1.js";import"./Link-Cr8Oti_G.js";import"./copy-DdsKrtzd.js";import"./copy-BoNX54Ls.js";import"./GitHub-Mark-DFpWEgfA.js";import"./TableOfContent-DI8kOImB.js";import"./index-CSbojWcx.js";import"./index-Dz_82eM4.js";import"./index-CfYuYIaa.js";import"./index-BUTU-Rlc.js";import"./index-B2vsuIMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN_dVplC.js";import"./addCustomCSSWithScoping-DB8Behso.js";import"./Illustrations-D8i7Iry7.js";import"./i18n-defaults-C7ICj5-E.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
`,o.jsx(c,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:s}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(a,{of:s}),`
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
`,o.jsx(h,{})]})}function G(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(e,{...n})}):e(n)}export{G as default};
