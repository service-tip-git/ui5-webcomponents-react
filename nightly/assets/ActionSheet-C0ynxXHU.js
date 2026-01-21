import{j as n}from"./iframe-DYfg4QHt.js";import{useMDXComponents as i}from"./index-CVbrUuPE.js";import{M as p,C as c}from"./blocks-BUAqhVj9.js";import"./Tag-DSyohh1a.js";import"./index-BmTrkp-7.js";import{C as a}from"./ControlsWithNote-EDQgd2pc.js";import{D as m}from"./DocsHeader-CVLgmQgj.js";import{F as h}from"./CommandsAndQueries-Bv0cgQmk.js";import{C as o,D as r}from"./ActionSheet.stories-DXS5AaN6.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DmJ60sG9.js";import"./sys-enter-2-DM66m4rJ.js";import"./alert-CCfcH-Mh.js";import"./index-Cmi2IW4V.js";import"./index-Cey_WqgE.js";import"./Link-DNgH-frF.js";import"./copy-WupyHJ3D.js";import"./copy-D6hWl56-.js";import"./GitHub-Mark-Cyh0S-Yk.js";import"./TableOfContent-nE7A35u3.js";import"./index-B7hJqHh2.js";import"./index-BKQsUqka.js";import"./index-DHfPdgXp.js";import"./index-DGISTYKI.js";import"./index-91p8b6xm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN-x3Tox.js";import"./addCustomCSSWithScoping-D5zE1nWM.js";import"./delete-D34_mFXP.js";import"./utils-9o_atc5t.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
`,n.jsx(m,{of:o,subComponents:["Button"]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(c,{of:r}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(e.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,n.jsx("br",{}),`
`,n.jsxs(e.p,{children:["You can open and close the ",n.jsx(e.code,{children:"ActionSheet"})," component in a declarative way using the ",n.jsx(e.code,{children:"open"})," and ",n.jsx(e.code,{children:"opener"})," prop."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MyComponentWithActionSheet = () => {
  const [actionSheetIsOpen, setActionSheetIsOpen] = useState(false);
  return (
    <>
      <Button
        id={'openActionSheetBtn'}
        onClick={() => {
          setActionSheetIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <ActionSheet
        opener={'openActionSheetBtn'}
        open={actionSheetIsOpen}
        onClose={() => {
          setActionSheetIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Opening an ",n.jsx(e.code,{children:"ActionSheet"})," by reference"]})}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"ActionSheet"})," exposes a way to pass a reference of an element instead of an ",n.jsx(e.code,{children:"id"})," to the ",n.jsx(e.code,{children:"opener"}),` prop.
You can do that by e.g. leveraging a React Ref.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpenerClick = (e) => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={handleOpenerClick}>
        Opener
      </Button>
      <ActionSheet opener={buttonRef.current} open={open}>
        {/* Content */}
      </ActionSheet>
    </>
  );
};
`})}),`
`,n.jsx(h,{})]})}function P(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{P as default};
