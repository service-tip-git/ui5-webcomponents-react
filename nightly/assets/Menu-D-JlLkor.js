import{j as e,e as r}from"./iframe-plJY_px0.js";import{useMDXComponents as d}from"./index-CNgSdSBz.js";import{A as s}from"./ArgTypesWithNote-DF43eThH.js";import{C as x}from"./ControlsWithNote-CxBuL735.js";import{D as h}from"./DocsHeader-Bbmfd1uh.js";import{F as l}from"./CommandsAndQueries-CSEdQQvR.js";import{M as f,C as i,a as j,D as m}from"./blocks-Q5gmWwgb.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-DS6fHJy6.js";import{M as a}from"./index-DVWpymbE.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DSqDyml0.js";import"./information-CFU4bu3b.js";import"./sys-enter-2-CWJ3J9PS.js";import"./alert-Cvpxudnd.js";import"./Tag-Dh3wWudw.js";import"./index-t--BkPKT.js";import"./index-D3V1C0u7.js";import"./Link-Bty8oyFV.js";import"./copy-Bu8GevAL.js";import"./copy-mR5XScRR.js";import"./GitHub-Mark-AHgO4eaB.js";import"./TableOfContent-3VAk2MsF.js";import"./index-2EbIuvCl.js";import"./index-CULtK81i.js";import"./index-Dd7Sfpx-.js";import"./index-DfokaHEY.js";import"./index-B337CKIF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQsTwQe_.js";import"./addCustomCSSWithScoping-K4GM8_aQ.js";import"./locked-CiNkMTRR.js";import"./index-Caa_O5vz.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
