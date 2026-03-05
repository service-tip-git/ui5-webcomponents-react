import{j as e,E as s}from"./iframe-Yrd5HXiX.js";import{useMDXComponents as f}from"./index-DOxT51h1.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-Dvv2YIoD.js";import"./Tag-A6uWcl63.js";import"./index-BF16G_0e.js";import{C as u}from"./ControlsWithNote-Diw0D9KQ.js";import{D as S}from"./DocsHeader-B3c_A74V.js";import{F as v}from"./Footer-CkKCjd3s.js";import"./CommandsAndQueries-C2FZOFS4.js";import"./PageNotFound-kNJyDscw.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-BU6rPDAX.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-B-xJ2aef.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BDrQXgLD.js";import"./sys-enter-2-BRBYXqiH.js";import"./alert-BtI3-0Jo.js";import"./index-Sv74Bfia.js";import"./index-DA96fnb1.js";import"./Link-Cr8Oti_G.js";import"./copy-DdsKrtzd.js";import"./copy-BoNX54Ls.js";import"./GitHub-Mark-DFpWEgfA.js";import"./TableOfContent-DI8kOImB.js";import"./index-CSbojWcx.js";import"./index-Dz_82eM4.js";import"./index-CfYuYIaa.js";import"./index-BUTU-Rlc.js";import"./index-B2vsuIMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN_dVplC.js";import"./addCustomCSSWithScoping-DB8Behso.js";import"./Illustrations-D8i7Iry7.js";import"./i18n-defaults-C7ICj5-E.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./Search-mMs_W0y4.js";import"./Option-cgyjEXZH.js";import"./ListItemBaseTemplate-B4wrenP3.js";import"./Select-CXKgXvak.js";import"./InvisibleMessage-CtYhUk5a.js";import"./slim-arrow-down-CiI8zYHE.js";import"./slim-arrow-down-C66mVyft.js";import"./ResponsivePopoverCommon.css-Dhp5Q3jO.js";import"./ValueStateMessage.css-DaqWQCbh.js";import"./search-B9lyMdlm.js";import"./Input-biWYnwTr.js";import"./Suggestions.css-uVzdT4u-.js";import"./SuggestionItem-Y4FX-HD4.js";import"./Person-Bk5r7PMP.js";import"./index-BINom7PM.js";import"./less-CtIlRGB6.js";import"./index-PH0OEifs.js";import"./ListItemStandard-j7gFN2tu.js";import"./ButtonBadge-tv29oI9W.js";import"./overflow-u5o7KAvk.js";const k=`## Design-Compliant Examples

These examples demonstrate the implementation of design specifications. They primarily illustrate design concepts and mostly do not provide additional functionality. You can reference them to select the appropriate design patterns.
`;function x(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...f(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:d}),`
`,e.jsx(S,{of:d,since:"0.4.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(u,{of:h}),`
`,e.jsx(a,{children:k}),`
`,e.jsx(n.h3,{id:"all-features",children:"All Features"}),`
`,e.jsx(n.p,{children:"A comprehensive ShellBar demonstrating all available features including notifications, search, content items, and profile."}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"embedded-back-navigation",children:"Embedded Back Navigation"}),`
`,e.jsx(n.p,{children:"ShellBar with embedded back navigation button in the start area."}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(n.h3,{id:"trial-example",children:"Trial Example"}),`
`,e.jsx(n.p,{children:"ShellBar configured for trial environments with trial tags and remaining days indicator."}),`
`,e.jsx(r,{of:P}),`
`,e.jsx(n.h3,{id:"multiple-productive-instances",children:"Multiple Productive Instances"}),`
`,e.jsx(n.p,{children:"ShellBar setup for multiple productive system instances with region indicators."}),`
`,e.jsx(r,{of:C}),`
`,e.jsx(n.h3,{id:"multiple-non-productive-instances",children:"Multiple Non-Productive Instances"}),`
`,e.jsx(n.p,{children:"ShellBar setup for multiple non-productive system instances with system and region tags."}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"open-a-popover-on-shellbaritem-click",children:"Open a Popover on ShellBarItem click"}),`
`,e.jsxs(n.p,{children:["To open a popover with the ",e.jsx(n.code,{children:"ShellBarItem"})," you can use the ",e.jsx(n.code,{children:"detail.targetRef"})," property of the ",e.jsx(n.code,{children:"onClick"})," event."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const ShellBarComponent = () => {
  const popoverRef = useRef<PopoverDomRef>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const handleShellBarItemClick: ShellBarItemPropTypes['onClick'] = (e) => {
    popoverRef.current!.opener = e.detail.targetRef;
    setPopoverOpen(true);
  };
  return (
    <>
      <ShellBar>
        <ShellBarItem onClick={handleShellBarItemClick} icon="add" text="add" />
      </ShellBar>
      <Popover
        ref={popoverRef}
        open={popoverOpen}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        Hello there!
      </Popover>
    </>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"shellbar-with-shellbarbranding-slot",children:"ShellBar with ShellBarBranding slot"}),`
`,e.jsx(r,{of:M}),`
`,e.jsx(a,{children:B}),`
`,e.jsx(n.h2,{id:"shellbaritem",children:"ShellBarItem"}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,exclude:s,of:l}),`
`,e.jsx(n.h2,{id:"shellbarspacer",children:"ShellBarSpacer"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,exclude:s,of:p}),`
`,e.jsx(n.h2,{id:"shellbarsearch-experimental",children:"ShellBarSearch (experimental)"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:m}),`
`,e.jsx(n.h2,{id:"shellbarbranding-experimental",children:"ShellBarBranding (experimental)"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:c}),`
`,e.jsx(v,{})]})}function Ie(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{Ie as default};
