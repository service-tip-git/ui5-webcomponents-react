import{j as e,B as r}from"./iframe-BWDYb3Af.js";import{useMDXComponents as d}from"./index-ORMlrOnf.js";import{A as s}from"./ArgTypesWithNote-DwfKlr2j.js";import{C as x}from"./ControlsWithNote-CaZJdSg_.js";import{D as h}from"./DocsHeader-De3KFJ27.js";import{F as l}from"./CommandsAndQueries-CZ5MS_my.js";import{M as f,C as i,a as j,D as m}from"./blocks-B8FJqnZy.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-DXRArC-m.js";import{M as a}from"./index-D3oK06Ge.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dolwn4re.js";import"./information-BiNCCmk0.js";import"./sys-enter-2-D_DUss_0.js";import"./alert-mysBcZzV.js";import"./Tag-BIMutbIq.js";import"./index-DF6wuqqy.js";import"./index-Dz7IZliI.js";import"./Link-DcGHp14a.js";import"./copy-CL9gfpue.js";import"./copy-weALSuoF.js";import"./GitHub-Mark-DRcm_4FM.js";import"./TableOfContent-BwLnYJWn.js";import"./index-D3Oal-l-.js";import"./index-BHXKA4z_.js";import"./index-CxNU_raA.js";import"./index-CO7aikHi.js";import"./index-_k1TaEpY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-wjVhlBmy.js";import"./addCustomCSSWithScoping-BLKtnAI1.js";import"./locked-SX1-gsNY.js";import"./index-RUgBt45A.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
