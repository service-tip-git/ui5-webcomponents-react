import{j as n}from"./iframe-BclzIqLN.js";import{useMDXComponents as i}from"./index-C905Yc-m.js";import{M as p,C as c}from"./blocks-B5DwqLl1.js";import"./Tag-BOdn4VYm.js";import"./index-DMn-V0Tk.js";import{C as a}from"./ControlsWithNote-CmUQIF7m.js";import{D as m}from"./DocsHeader-Bv9mYQAO.js";import{F as h}from"./CommandsAndQueries-C-6YnLjZ.js";import{C as o,D as r}from"./ActionSheet.stories-W4Yzx60C.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BdMHs198.js";import"./sys-enter-2-C5ziAGW-.js";import"./alert-BWh7aIvC.js";import"./index-CnVdbwVS.js";import"./index-xMZLjYER.js";import"./Link-DPzQ2XbU.js";import"./copy-0OOzyCzB.js";import"./copy-D_MUueeP.js";import"./GitHub-Mark-ZtjZqui5.js";import"./TableOfContent-CBpvimzU.js";import"./index-uVgUJkPs.js";import"./index-OKRhEBZf.js";import"./index-C8ShhJNW.js";import"./index-5TTuORsb.js";import"./index-CJHMJsmF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cdo2Ur2Z.js";import"./addCustomCSSWithScoping-Dte7M2sk.js";import"./delete-Ch7YLa0V.js";import"./utils-CzDDLq5x.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
