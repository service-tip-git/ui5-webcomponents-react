import{j as e,e as r}from"./iframe-RECRoZhV.js";import{useMDXComponents as d}from"./index-1tzPRbI6.js";import{A as s}from"./ArgTypesWithNote-DBN2dQA_.js";import{C as x}from"./ControlsWithNote-8guUQjqU.js";import{D as h}from"./DocsHeader-D00kQhrp.js";import{F as l}from"./CommandsAndQueries-DPpsoP9s.js";import{M as f,C as i,a as j,D as m}from"./blocks-CH1yi1wC.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-BvmGFkr7.js";import{M as a}from"./index-jdDMAtlA.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfNZ4QaZ.js";import"./information-D6UQivs-.js";import"./sys-enter-2-CMoukZNH.js";import"./alert-BjbREM6S.js";import"./Tag-BCmfqboN.js";import"./index-5drqvW0T.js";import"./index-DGKmMzEm.js";import"./Link-BZUDNGRG.js";import"./copy-zC_uHC7X.js";import"./copy-B_omwcq7.js";import"./GitHub-Mark-CmtAkk_i.js";import"./TableOfContent-UMLqbvXM.js";import"./index-CB0t3Ndr.js";import"./index-D1It_vMD.js";import"./index-lc4LLOiH.js";import"./index-Dk8UUcOY.js";import"./index-Rgh5WsNa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bozn53qz.js";import"./addCustomCSSWithScoping-Uy-s1Hcf.js";import"./locked-CQmFUSJS.js";import"./index-DkDKw77I.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
`,e.jsx(h,{of:t,since:"0.23.0"}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(x,{of:p}),`
`,e.jsx(n.h2,{id:"opening-menus",children:"Opening Menus"}),`
`,e.jsxs(n.p,{children:["You can open and close the ",e.jsx(n.code,{children:"Menu"})," component in a declarative way using the ",e.jsx(n.code,{children:"open"})," and ",e.jsx(n.code,{children:"opener"})," prop."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithMenu = () => {
  const buttonRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => {
          setMenuIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <Menu
        opener={buttonRef.current}
        open={menuIsOpen}
        onClose={() => {
          setMenuIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"menu-with-submenu",children:"Menu with Submenu"}),`
`,e.jsx(i,{of:M}),`
`,e.jsx(j,{children:C}),`
`,e.jsx(n.h2,{id:"menuitem",children:"MenuItem"}),`
`,e.jsx(m,{of:a}),`
`,e.jsx(s,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:a}),`
`,e.jsx(n.h2,{id:"menuitemgroup",children:"MenuItemGroup"}),`
`,e.jsx(m,{of:u}),`
`,e.jsx(s,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:u}),`
`,e.jsx(l,{})]})}function $(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{$ as default};
