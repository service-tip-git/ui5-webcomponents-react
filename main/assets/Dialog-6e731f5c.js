import{j as o}from"./jsx-runtime-d079401a.js";import{C as l}from"./DomRefTable.module-d0fcaa63.js";import{D as p}from"./DocsHeader-654dc5c9.js";import{F as c}from"./Footer-5124faad.js";import"./index-f1f2c4b1.js";import{M as m,C as r,b as d}from"./chunk-S4VUQJ4A-6b5e5c4b.js";import{D as h}from"./DomRefTable-bc82b916.js";import{C as g,D as s,W as u}from"./Dialog.stories-12e3dec2.js";import{D as f}from"./DialogDomRef-ffa73df1.js";import{u as a}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-666f761c.js";import"./iframe-1710758a.js";import"../sb-preview/runtime.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./withWebComponent-70ea33bf.js";import"./utils-eb830979.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./class-map-a35dc276.js";import"./Button-bda40b74.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-edeeca68.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-928768e1.js";import"./Integer-f7f172c9.js";import"./index-1f6b2f48.js";import"./Avatar-54e46144.js";import"./ResizeHandler-a1ba39c5.js";import"./employee-bd01b92f.js";import"./index-0073d292.js";import"./index-289b09ec.js";import"./Link-27f41eeb.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-927d5e3d.js";import"./index-ded6b814.js";import"./Label-2351773c.js";import"./index-c74c9f7f.js";import"./index-c907e45c.js";import"./index-e4585aec.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./BrowserScrollbar.css-35e4e851.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./settings-3b6e095e.js";import"./CodeGen-d742d468.js";import"./index-5a75b16a.js";import"./Dialog-6ca0f060.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-ceac9c46.js";import"./Bar-a5fb143c.js";import"./parameters-bundle.css-1bee123e.js";import"./index-938ed19c.js";import"./index-f34dce9a.js";import"./Title-9e1fec85.js";import"./index-d8554384.js";import"./ListItemBase-7c3bbca9.js";import"./ItemNavigation-53cee471.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-6d3cbaa3.js";import"./index-f94f4452.js";import"./StandardListItem-a534f611.js";import"./ListItem-8f7be23d.js";import"./RadioButton-0df5d1bd.js";import"./CheckBox-05effb75.js";import"./accept-a3b0d940.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-562fbac6.js";const x=`## Structure

A \`Dialog\` consists of a header, content, and a footer for action buttons. The \`Dialog\` is usually displayed at the center of the screen. Its position can be changed by the user. To enable this, you need to set the property \`draggable\` accordingly.

## Responsive Behavior

The \`stretch\` property can be used to stretch the \`Dialog\` on full screen.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Dialog\` exposes the following CSS Shadow Parts:

- header - Used to style the header of the component
- content - Used to style the content of the component
- footer - Used to style the footer of the component

**Note:** When a \`Bar\` is used in the header or in the footer, you should remove the default dialog's paddings.  
For more information see the sample "Bar in Header/Footer".
`;function re(n={}){const{wrapper:t}=Object.assign({},a(),n.components);return t?o.jsx(t,Object.assign({},n,{children:o.jsx(i,{})})):i();function i(){const e=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",a:"a",h1:"h1"},a(),n.components);return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:g}),`
`,o.jsx(p,{}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(r,{of:s}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(l,{of:s}),`
`,o.jsx(d,{children:x}),`
`,o.jsx(h,{rows:f}),`
`,o.jsx(e.h2,{id:"opening-dialogs",children:"Opening Dialogs"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h4,{id:"since-0220",children:"since 0.22.0"}),`
`,o.jsxs(e.p,{children:["We recommend opening and closing the ",o.jsx(e.code,{children:"Dialog"})," component in a declarative way using the ",o.jsx(e.code,{children:"open"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const MyComponentWithDialog = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setDialogIsOpen(true);
        }}
      >
        Open Dialog
      </Button>
      <Dialog open={dialogIsOpen} />
    </>
  );
};
`})}),`
`,o.jsx(e.h4,{id:"before-0220",children:"before 0.22.0"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"Dialogs"})," can be opened by attaching a ",o.jsx(e.code,{children:"ref"})," to the component and then calling the corresponding ",o.jsx(e.strong,{children:o.jsx(e.code,{children:"show"})})," method."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const DialogComponent = () => {
  const dialogRef = useRef(null);
  const onButtonClick = () => {
    dialogRef.current.show();
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Dialog</Button>
      <Dialog ref={dialogRef}>Some Content</Dialog>
    </>
  );
};
`})}),`
`,o.jsx(e.h2,{id:"using-dialogs-inside-other-components",children:"Using Dialogs inside other components"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"Dialogs"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,o.jsx(e.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"createPortal"})," to mount the ",o.jsx(e.code,{children:"Dialog"})," outside of the DOM hierarchy of the parent component."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const DialogComponent = () => {
  const dialogRef = useRef(null);
  const onButtonClick = () => {
    dialogRef.current.show();
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Dialog</Button>
      {createPortal(<Dialog ref={dialogRef} />, document.body)}
    </>
  );
};
`})}),`
`,o.jsx(e.h2,{id:"closing-dialogs",children:"Closing Dialogs"}),`
`,o.jsxs(e.p,{children:["Closing ",o.jsx(e.code,{children:"Dialogs"}),` works in the same way as opening them.
You can either set the `,o.jsx(e.code,{children:"open"})," prop to ",o.jsx(e.code,{children:"false"})," or attaching a ",o.jsx(e.code,{children:"ref"})," on which the corresponding ",o.jsx(e.code,{children:"close"})," method is called."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const DialogComponent = () => {
  const dialogRef = useRef(null);
  const handleOpen = (e) => {
    dialogRef.current.show();
  };
  const handleClose = () => {
    dialogRef.current.close();
  };
  return (
    <>
      <Button onClick={handleOpen}>Open Dialog</Button>
      <Dialog ref={dialogRef}>
        <Button onClick={handleClose}>Close Dialog</Button>
      </Dialog>
    </>
  );
};
`})}),`
`,o.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,o.jsx(e.h2,{id:"dialog-with-content",children:"Dialog with content"}),`
`,o.jsx(r,{of:u}),`
`,o.jsx(c,{})]})}}export{re as default};
//# sourceMappingURL=Dialog-6e731f5c.js.map
