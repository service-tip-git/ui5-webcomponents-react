import{j as t}from"./jsx-runtime-d079401a.js";import{M as m}from"./chunk-S4VUQJ4A-888d1edd.js";import{B as i}from"./index-4591927d.js";import{B as p}from"./index-716da007.js";import"./DomRefTable.module-1a1a4669.js";import"./index-f1f2c4b1.js";import{F as a}from"./Footer-af9a8ffe.js";import{u as s}from"./index-59d6410c.js";import"./iframe-c5150722.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./Bar-e19b5f8b.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-99b005ba.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./ResizeHandler-9ebe913c.js";import"./class-map-b4d8f3b0.js";import"./parameters-bundle.css-f9dc8928.js";import"./Button-cea1a8d0.js";import"./Icon-31253496.js";import"./Icons-234bf59e.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-183ab1a9.js";import"./react-jss.esm-c310038c.js";import"./index-0fba4fdd.js";import"./decline-23c167e4.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-1886de07.js";import"./index-47d0a85a.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-783dc33d.js";import"./index-706a5b34.js";import"./Integer-f7f172c9.js";import"./index-1bb205c0.js";import"./Avatar-5dbee8fc.js";import"./employee-e34ffee2.js";import"./index-a9c1cae5.js";import"./index-34c3e659.js";import"./Link-5f9413e3.js";import"./WrappingType-b81e595a.js";import"./index-56b3d57c.js";import"./index-58ef0d95.js";import"./Label-715c9061.js";import"./index-a5c7f622.js";import"./Popover-2c2db418.js";import"./PopupsCommon.css-57708035.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-56038137.js";import"./BrowserScrollbar.css-527f9f64.js";const c=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(p,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(c,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(p,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function It(n={}){const{wrapper:r}=Object.assign({},s(),n.components);return r?t.jsx(r,Object.assign({},n,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},s(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
`,t.jsx(o.h1,{id:"adding-custom-components-to-slots",children:"Adding custom components to slots"}),`
`,t.jsxs(o.p,{children:["With our wrapper we provide an easy way to consume the ",t.jsx(o.code,{children:"slots"})," of the UI5 Web Components by attaching them to a ",t.jsx(o.code,{children:"prop"}),`.
In most cases you don't have to take anything into account, and the props can be used in a typical React way. However, there is an exception with custom components:`]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const BarStart = () => {
  return <div>Start</div>;
};
const BarEnd = () => {
  return <Button>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>I'm not a custom component</div>
    </Bar>
  );
};
`})}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(l,{}),`
`,t.jsxs(o.p,{children:[`As you can see, both custom components are not displayed in the right place.
Our wrapper does add the `,t.jsx(o.code,{children:"slot"})," prop to the custom component, but the most outer HTML-Element/component (e.g. ",t.jsx(o.code,{children:"<div>Start</div>"}),") does not accept it and therefore cannot use it."]}),`
`,t.jsxs(o.p,{children:["To fix this the ",t.jsx(o.code,{children:"slot"})," prop must also be passed to the outer element of the component:"]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const BarStart = (props) => {
  return <div slot={props.slot}>Start</div>;
};
const BarEnd = (props) => {
  return <Button slot={props.slot}>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>I'm not a custom component</div>
    </Bar>
  );
};
`})}),`
`,t.jsxs(o.p,{children:["Now the ",t.jsx(o.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(x,{}),`
`,t.jsx("div",{style:{height:"var(--_ui5_bar_base_height)"}}),`
`,t.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{It as default};
//# sourceMappingURL=CustomComponentsSlots-8391f43c.js.map
