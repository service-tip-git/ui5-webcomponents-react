import{j as o}from"./iframe-CPcs5bjw.js";import{useMDXComponents as i}from"./index-D3pCSUGP.js";import{M as p,C as a}from"./blocks-CciAsFaW.js";import"./Tag-BRzUE0pu.js";import"./index-DdCyPygk.js";import{C as m}from"./ControlsWithNote-DRNf35oL.js";import{D as c}from"./DocsHeader-ByWQIjS1.js";import{F as h}from"./CommandsAndQueries-BRqm99_0.js";import{C as s,D as e}from"./Toast.stories-20XNiYRl.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DGDTMoga.js";import"./sys-enter-2-DPq_4UKR.js";import"./alert-CqgikgLY.js";import"./index-Cumht0xF.js";import"./index-CE-f9LSp.js";import"./Link-CvciZabG.js";import"./copy-Db72BetN.js";import"./copy-DrEgra2j.js";import"./GitHub-Mark-CxYUDkOM.js";import"./TableOfContent-PWCR5IjP.js";import"./index-sAPOTiYQ.js";import"./index-DSqRs7NE.js";import"./index-DbiDsCRE.js";import"./index-DlX2UYU-.js";import"./index-B7pfH-Zg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-MvtR7iaQ.js";import"./addCustomCSSWithScoping-CWQJntcH.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
