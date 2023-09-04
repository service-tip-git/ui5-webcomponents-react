import{j as o}from"./jsx-runtime-d079401a.js";import{C as s}from"./DomRefTable.module-6eaea8ef.js";import{D as a}from"./DocsHeader-60c6061f.js";import{F as l}from"./Footer-bc468449.js";import"./index-f1f2c4b1.js";import{M as c,C as d,b as p,A as h}from"./chunk-S4VUQJ4A-5100a69a.js";import{D as x}from"./DomRefTable-a4833042.js";import{C as j,D as n}from"./ColorPalettePopover.stories-b165ea5d.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{C}from"./ColorPaletteItemDescription-2383d0e8.js";import{C as u}from"./index-b03bd16b.js";import{u as m}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-bead39d9.js";import"./iframe-57e6b318.js";import"../sb-preview/runtime.js";import"./UI5Element-e590cd60.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./withWebComponent-b4c67a1a.js";import"./utils-e9940b93.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b897d66f.js";import"./Icons-65b34360.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./information-e97f915a.js";import"./alert-7494fabe.js";import"./class-map-e1b423a4.js";import"./Button-4505b9f6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-203b56de.js";import"./index-0c050832.js";import"./Integer-f7f172c9.js";import"./index-dcdbed31.js";import"./Avatar-60d18bb8.js";import"./ResizeHandler-34ecee99.js";import"./employee-78fe46d2.js";import"./index-11aefe52.js";import"./index-a11ae6e8.js";import"./Link-a373b451.js";import"./WrappingType-b81e595a.js";import"./index-343af056.js";import"./TableOfContent-811e3a06.js";import"./index-aa5143cc.js";import"./Label-69062358.js";import"./index-b42968db.js";import"./index-f220b36f.js";import"./index-e8d395a3.js";import"./Popover-742c9988.js";import"./PopupUtils-f407c5e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97942203.js";import"./FocusableElements-d024bb16.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-ecc46a93.js";import"./BrowserScrollbar.css-4a87524a.js";import"./index-d203965f.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./CSSColor-f91c8158.js";import"./ResponsivePopoverCommon.css-5a4ca537.js";import"./Title-0fb688d3.js";import"./ResponsivePopover-ffa286b7.js";import"./Dialog-cf714d6a.js";import"./ValueState-2c5e5904.js";import"./ItemNavigation-52fe434f.js";const P=[{name:"openPopover",visibility:"public",since:"1.0.0-rc.16",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",deprecated:{text:"The method is deprecated in favour of <code>showAt</code>."}},{name:"showAt",visibility:"public",since:"1.1.1",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover."}];function Go(t={}){const{wrapper:r}=Object.assign({},m(),t.components);return r?o.jsx(r,Object.assign({},t,{children:o.jsx(i,{})})):i();function i(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",em:"em",pre:"pre",h3:"h3"},m(),t.components);return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:j}),`
`,o.jsx(a,{since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(d,{of:n}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:n}),`
`,o.jsx(x,{rows:P}),`
`,o.jsx(e.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"ColorPalettePopover"}),"s can only be opened by attaching a ",o.jsx(e.code,{children:"ref"})," to the component and then call the corresponding ",o.jsx(e.strong,{children:o.jsx(e.code,{children:"showAt"})})," method. The method receives the target element - ",o.jsxs(e.em,{children:["on which the ",o.jsx(e.code,{children:"ColorPalettePopover"})," is to be opened"]})," - as parameter."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const popoverRef = useRef();
  const onButtonClick = (e) => {
    popoverRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open ColorPalettePopover</Button>
      <ColorPalettePopover ref={popoverRef}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(p,{children:f}),`
`,o.jsx(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(p,{children:C}),`
`,o.jsx(e.h3,{id:"properties-1",children:"Properties"}),`
`,o.jsx(h,{of:u}),`
`,o.jsx(l,{})]})}}export{Go as default};
//# sourceMappingURL=ColorPalettePopover-1e7ac4ba.js.map
