import{A as b}from"./DomRefTable.module-d0fcaa63.js";import{D as T}from"./DocsHeader-654dc5c9.js";import{F as L}from"./Footer-5124faad.js";import{j as e}from"./jsx-runtime-d079401a.js";import{r as c}from"./index-f1f2c4b1.js";import{M as N,C as x,e as u,b as A}from"./chunk-S4VUQJ4A-6b5e5c4b.js";import{D as M}from"./DomRefTable-bc82b916.js";import"./settings-3b6e095e.js";import{P as f,a as j,b as g}from"./Popover-f88acbeb.js";import{B as l}from"./index-ceac9c46.js";import{B as p}from"./index-c907e45c.js";import{I as R}from"./index-938ed19c.js";import{L as C}from"./index-ded6b814.js";import{L as B}from"./index-d8554384.js";import{S as i}from"./index-f94f4452.js";import{T as O}from"./index-f34dce9a.js";import{R as w}from"./index-d104fa66.js";import{R as d}from"./CodeGen-2eb46620.js";import{R as D}from"./ResponsivePopoverDomRef-b2da8c70.js";import{M as E}from"./index-666f761c.js";import{c as I}from"./clsx-1229b3e0.js";import{u as P}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-743fc8f1.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./utils-eb830979.js";import"./index-928768e1.js";import"./iframe-1710758a.js";import"../sb-preview/runtime.js";import"./withWebComponent-70ea33bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./Integer-f7f172c9.js";import"./class-map-a35dc276.js";import"./i18n-defaults-edeeca68.js";import"./index-1f6b2f48.js";import"./Avatar-54e46144.js";import"./ResizeHandler-a1ba39c5.js";import"./employee-bd01b92f.js";import"./alert-f95f2d2e.js";import"./index-0073d292.js";import"./AriaLabelHelper-43a261ec.js";import"./index-289b09ec.js";import"./Link-27f41eeb.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-927d5e3d.js";import"./index-c74c9f7f.js";import"./Button-bda40b74.js";import"./index-e4585aec.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./BrowserScrollbar.css-35e4e851.js";import"./Bar-a5fb143c.js";import"./parameters-bundle.css-1bee123e.js";import"./Label-2351773c.js";import"./ListItemBase-7c3bbca9.js";import"./ItemNavigation-53cee471.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-6d3cbaa3.js";import"./StandardListItem-a534f611.js";import"./ValueState-2c5e5904.js";import"./ListItem-8f7be23d.js";import"./RadioButton-0df5d1bd.js";import"./CheckBox-05effb75.js";import"./accept-a3b0d940.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-562fbac6.js";import"./ValueState-ab6838cc.js";import"./Title-9e1fec85.js";import"./ResponsivePopover-3603f824.js";import"./Dialog-6ca0f060.js";import"./information-31cb56bb.js";const F=`## Usage

Use it when you want to make sure that all the content is visible on any device.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`ResponsivePopover\` exposes the following CSS Shadow Parts:

- header - Used to style the header of the component
- content - Used to style the content of the component
- footer - Used to style the footer of the component
`;function U(n={}){const{wrapper:s}=Object.assign({},P(),n.components);return s?e.jsx(s,{...n,children:e.jsx(t,{})}):t();function t(){const o=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",a:"a",h1:"h1"},P(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Modals & Popovers / ResponsivePopover",component:w,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsx(C,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:f.Center,placementType:j.Right,verticalAlign:g.Center,opener:"openPopoverBtn",className:"footerPartNoPadding"}}),`
`,e.jsx(T,{since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(x,{children:e.jsx(u,{name:"Default",children:r=>{const[m,a]=c.useState(r.open);return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"openResponsivePopoverBtn",onClick:()=>{a(!0)},children:"Open Popover"}),e.jsx(d,{...r,onAfterClose:()=>{a(!1)},opener:"openResponsivePopoverBtn",open:m})]})}})}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(b,{story:"Default"}),`
`,e.jsx(A,{children:F}),`
`,e.jsx(M,{rows:D}),`
`,e.jsx(o.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h4,{id:"since-0220",children:"since 0.22.0"}),`
`,e.jsxs(o.p,{children:["We recommend opening and closing the ",e.jsx(o.code,{children:"ResponsivePopover"})," component in a declarative way using the ",e.jsx(o.code,{children:"open"})," and ",e.jsx(o.code,{children:"opener"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        id={'openPopoverBtn'}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <ResponsivePopover
        opener={'openPopoverBtn'}
        open={popoverIsOpen}
        onAfterClose={() => {
          setResponsivePopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,e.jsx(o.p,{children:e.jsxs(o.strong,{children:["Opening a ",e.jsx(o.code,{children:"ResponsivePopover"})," by reference and not by ",e.jsx(o.code,{children:"id"})]})}),`
`,e.jsxs(o.p,{children:["This web component exposes a way to pass a reference of an element instead of an ",e.jsx(o.code,{children:"id"})," to the ",e.jsx(o.code,{children:"opener"})," prop. Since this is not supported when passing the reference in a declarative way to a React ",e.jsx(o.code,{children:"prop"}),`, you have to attach the ref directly on the web component.
You can do that by e.g. leveraging a React Ref, and then set the corresponding property there.`]}),`
`,e.jsx(E,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
using this approach!`}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const PopoverComponent = () => {
  const popoverRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpenerClick = (e) => {
    if (popoverRef.current) {
      popoverRef.current.opener = e.target;
      setOpen((prev) => !prev);
    }
  };
  return (
    <>
      <Button onClick={handleOpenerClick}>Opener</Button>
      <ResponsivePopover ref={popoverRef} open={open}>
        {/* Content */}
      </ResponsivePopover>
    </>
  );
};
`})}),`
`,e.jsx(o.h4,{id:"before-0220",children:"before 0.22.0"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"ResponsivePopovers"})," can only be opened by attaching a ",e.jsx(o.code,{children:"ref"})," to the component and then call the corresponding ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"showAt"})})," method. The method receives the target element - ",e.jsxs(o.em,{children:["on which the ",e.jsx(o.code,{children:"ResponsivePopover"})," is to be opened"]})," - as parameter."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`  const PopoverComponent = () => {
    const popoverRef = useRef(null);
    const onButtonClick = (e) => {
        popoverRef.current.showAt(e.target);
    };
    return (
      <>
        <Button onClick={onButtonClick}>Open Popover</Button>
        <ResponsivePopover ref={popoverRef}>Some Content</ResponsivePopovers>
      </>
    );
  };
`})}),`
`,e.jsx(o.h2,{id:"using-responsivepopovers-inside-other-components",children:"Using ResponsivePopovers inside other components"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"ResponsivePopovers"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e.jsx(o.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"createPortal"})," to mount the ",e.jsx(o.code,{children:"ResponsivePopover"})," outside of the DOM hierarchy of the parent component."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const PopoverComponent = () => {
  const popoverRef = useRef(null);
  const onButtonClick = (e) => {
    popoverRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Popover</Button>
      {createPortal(<ResponsivePopovers ref={popoverRef} />, document.body)}
    </>
  );
};
`})}),`
`,e.jsx(o.h2,{id:"closing-responsivepopovers",children:"Closing ResponsivePopovers"}),`
`,e.jsxs(o.p,{children:["Closing ",e.jsx(o.code,{children:"ResponsivePopovers"}),` works in the same way as opening them.
You can either set the `,e.jsx(o.code,{children:"open"})," prop to ",e.jsx(o.code,{children:"false"})," or attaching a ",e.jsx(o.code,{children:"ref"})," on which the corresponding ",e.jsx(o.code,{children:"close"})," method is called."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const PopoverComponent = () => {
  const popoverRef = useRef(null);
  const handleOpen = (e) => {
    popoverRef.current.showAt(e.target);
  };
  const handleClose = () => {
    popoverRef.current.close();
  };
  return (
    <>
      <Button onClick={handleOpen}>Open Popover</Button>
      <ResponsivePopovers ref={popoverRef}>
        <Button onClick={handleClose}>Close Popover</Button>
      </ResponsivePopovers>
    </>
  );
};
`})}),`
`,e.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(o.h2,{id:"responsivepopover-with-content",children:"ResponsivePopover with content"}),`
`,e.jsx(x,{children:e.jsx(u,{name:"with content",children:r=>{const[m,a]=c.useState(!1),k=()=>{a(!0)},v=()=>{a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"respPopoverBtn2",onClick:k,children:"Open Responsive Popover"}),e.jsx(d,{...r,className:I("headerPartNoPadding",r.className),opener:"respPopoverBtn2",open:m,onAfterClose:v,header:e.jsx(l,{endContent:e.jsx(R,{name:"settings"}),children:e.jsx(O,{children:"Popover"})}),footer:e.jsx(l,{endContent:e.jsx(p,{onClick:v,children:"Close"})}),children:e.jsxs(B,{style:{width:"200px"},children:[e.jsx(i,{additionalText:"3",children:"List Item 1"}),e.jsx(i,{additionalText:"2",children:"List Item 2"}),e.jsx(i,{additionalText:"1",children:"List Item 3"})]})})]})}})}),`
`,e.jsx(L,{})]})}}const y=n=>{const[s,t]=c.useState(n.open);return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"openResponsivePopoverBtn",onClick:()=>{t(!0)},children:"Open Popover"}),e.jsx(d,{...n,onAfterClose:()=>{t(!1)},opener:"openResponsivePopoverBtn",open:s})]})};y.storyName="Default";y.parameters={storySource:{source:`args => {
  const [responsivePopoverIsOpen, setResponsivePopoverIsOpen] = useState(isChromatic || args.open);
  return <>
          <Button id={"openResponsivePopoverBtn"} onClick={() => {
      setResponsivePopoverIsOpen(true);
    }}>
            Open Popover
          </Button>
          <ResponsivePopover {...args} onAfterClose={() => {
      setResponsivePopoverIsOpen(false);
    }} opener="openResponsivePopoverBtn" open={responsivePopoverIsOpen} />
        </>;
}`}};const S=n=>{const[s,t]=c.useState(!1),o=()=>{t(!0)},r=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"respPopoverBtn2",onClick:o,children:"Open Responsive Popover"}),e.jsx(d,{...n,className:I("headerPartNoPadding",n.className),opener:"respPopoverBtn2",open:s,onAfterClose:r,header:e.jsx(l,{endContent:e.jsx(R,{name:"settings"}),children:e.jsx(O,{children:"Popover"})}),footer:e.jsx(l,{endContent:e.jsx(p,{onClick:r,children:"Close"})}),children:e.jsxs(B,{style:{width:"200px"},children:[e.jsx(i,{additionalText:"3",children:"List Item 1"}),e.jsx(i,{additionalText:"2",children:"List Item 2"}),e.jsx(i,{additionalText:"1",children:"List Item 3"})]})})]})};S.storyName="with content";S.parameters={storySource:{source:`args => {
  const [responsivePopoverIsOpen, setResponsivePopoverIsOpen] = useState(false);

  const onButtonClick = () => {
    setResponsivePopoverIsOpen(true);
  };

  const handleClose = () => {
    setResponsivePopoverIsOpen(false);
  };

  return <>
          <Button id="respPopoverBtn2" onClick={onButtonClick}>
            Open Responsive Popover
          </Button>
          <ResponsivePopover {...args} className={clsx("headerPartNoPadding", args.className)} opener="respPopoverBtn2" open={responsivePopoverIsOpen} onAfterClose={handleClose} header={<Bar endContent={<Icon name="settings" />}>
                <Title>Popover</Title>
              </Bar>} footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} />}>
            <List style={{
        width: "200px"
      }}>
              <StandardListItem additionalText="3">List Item 1</StandardListItem>
              <StandardListItem additionalText="2">List Item 2</StandardListItem>
              <StandardListItem additionalText="1">List Item 3</StandardListItem>
            </List>
          </ResponsivePopover>
        </>;
}`}};const h={title:"Modals & Popovers / ResponsivePopover",component:w,args:{children:e.jsx(C,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:f.Center,placementType:j.Right,verticalAlign:g.Center,opener:"openPopoverBtn",className:"footerPartNoPadding"},argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withContent"]};h.parameters=h.parameters||{};h.parameters.docs={...h.parameters.docs||{},page:U};const yo=["defaultStory","withContent"];export{yo as __namedExportsOrder,h as default,y as defaultStory,S as withContent};
//# sourceMappingURL=ResponsivePopover.stories-df483e7b.js.map
