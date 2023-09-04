import{j as e}from"./jsx-runtime-d079401a.js";import{M as w,h as s}from"./chunk-S4VUQJ4A-439e91d3.js";import"./DomRefTable.module-5f7d4bb9.js";import{r as d}from"./index-f1f2c4b1.js";import{T as v}from"./TableOfContent-f9caa56d.js";import{F as y}from"./Footer-db4cba16.js";import{h as C,s as S}from"./UI5Element-e590cd60.js";import{M as D}from"./utils-b1ef2149.js";import{F as T,b as P}from"./index-fb6e8b5e.js";import{T as R}from"./index-743fc8f1.js";import{T as k}from"./index-8f8b2b4b.js";import{T as o}from"./ThemingParameters-7e2e4e30.js";import{S as M}from"./index-4fe962fd.js";import{O}from"./index-4f2d1fa8.js";import{P as a}from"./index-a03e3604.js";import{L as F}from"./index-e0ea9518.js";import{u as h}from"./index-59d6410c.js";import{M as I,a as B}from"./index-a597240d.js";import"./iframe-9aa476e7.js";import"../sb-preview/runtime.js";import"./index-d203965f.js";import"./index-b42968db.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./react-jss.esm-2e5f50f2.js";import"./addCustomCSSWithScoping-203b56de.js";import"./utils-e9940b93.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./index-036d6662.js";import"./withWebComponent-b4c67a1a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b897d66f.js";import"./Icons-65b34360.js";import"./Integer-f7f172c9.js";import"./class-map-e1b423a4.js";import"./i18n-defaults-d5195a49.js";import"./index-41f46b2e.js";import"./Avatar-60d18bb8.js";import"./ResizeHandler-34ecee99.js";import"./employee-78fe46d2.js";import"./alert-7494fabe.js";import"./index-36550905.js";import"./AriaLabelHelper-43a261ec.js";import"./index-cea49163.js";import"./Link-a373b451.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./index-f7f79d36.js";import"./Button-4505b9f6.js";import"./index-b0dfbba4.js";import"./Popover-742c9988.js";import"./PopupUtils-f407c5e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97942203.js";import"./FocusableElements-d024bb16.js";import"./isElementHidden-01c07146.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./MediaRange-25b98f31.js";import"./style-map-ecc46a93.js";import"./BrowserScrollbar.css-4a87524a.js";import"./clsx-1229b3e0.js";import"./I18nContext-dd74d568.js";import"./ModalsContext-c6c22f4c.js";import"./CssSizeVariables-596b7aba.js";import"./CustomVariables-f4d4caba.js";import"./GlobalStyleClasses-7209358d.js";import"./Select-bafc0df3.js";import"./InvisibleMessage-71605293.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-16231f47.js";import"./information-e97f915a.js";import"./ListItemBase-e8a1d82b.js";import"./ItemNavigation-52fe434f.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-7cb729ee.js";import"./Label-69062358.js";import"./ResponsivePopover-ffa286b7.js";import"./Dialog-cf714d6a.js";import"./Title-0fb688d3.js";import"./StandardListItem-32d37e59.js";import"./ListItem-65b5ee84.js";import"./RadioButton-bfff4944.js";import"./CheckBox-c32e2a79.js";import"./accept-92104380.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-7a309837.js";import"./ResponsivePopoverCommon.css-5a4ca537.js";import"./ValueStateMessage.css-ca082762.js";import"./ValueState-ab6838cc.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-ce584f41.js";const l={display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",rowGap:"1rem",columnGap:"1rem"},m=[],u=[],E=Object.entries(o).filter(([r,t])=>r.includes("Font")?r.includes("FontUrl")?!0:(m.push([r,t]),!1):r.includes("Color")||r.includes("Shadow")||r.includes("Background")||r.includes("Chart")?(u.push([r,t]),!1):!0),V=r=>{const t={};return r.includes("Family")||r.includes("FontUrl")?t.fontFamily=r:r.includes("Size")?t.fontSize=r:r.includes("Weight"),t},z=r=>{const t={};return r.includes("Shadow")?t.boxShadow=r:t.backgroundColor=r,t},x=({value:r,varKey:t,theme:i,style:n={}})=>{const[c,j]=d.useReducer(f=>!f,!1),[g,b]=d.useState(getComputedStyle(document.documentElement).getPropertyValue(`--${t}`));return d.useEffect(()=>{setTimeout(()=>{b(getComputedStyle(document.documentElement).getPropertyValue(`--${t}`))},200)},[i]),e.jsxs(T,{direction:P.Column,style:{width:"85%"},children:[e.jsx(R,{title:"Click to show CSS Variable",style:{cursor:"pointer",...n},onClick:j,children:c?r:t}),e.jsx(F,{children:g})]},t)},L=r=>{const{varKey:t,value:i,theme:n}=r;return e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(x,{value:i,varKey:t,theme:n}),e.jsx("div",{style:{...z(i),borderRadius:"50%",width:"2rem",height:"2rem",minWidth:"2rem",border:`1px solid ${o.sapField_BorderColor}`}})]})},p=r=>{const{varKey:t,value:i,theme:n,style:c={}}=r;return e.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:e.jsx(x,{value:i,varKey:t,style:c,them:n})})},H=()=>{const[r,t]=d.useState(C());return e.jsx(k,{children:e.jsxs("div",{style:{backgroundColor:o.sapBackgroundColor,padding:"1rem",borderRadius:o.sapElement_BorderCornerRadius,boxShadow:o.sapContent_Shadow0},children:[e.jsx(M,{onChange:i=>{const n=i.detail.selectedOption.dataset.value;t(n),S(n)},children:D.map(({title:i,value:n})=>e.jsx(O,{"data-value":n,selected:n===r,children:i},n))}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(a,{headerText:"Colors & Shadows",collapsed:!0,children:e.jsx("div",{style:l,children:u.map(([i,n])=>e.jsx(L,{varKey:i,value:n,theme:r},i))})}),e.jsx(a,{headerText:"Fonts",collapsed:!0,children:e.jsx("div",{style:{...l,gridTemplateColumns:"repeat(1, minmax(0, 1fr))"},children:m.map(([i,n])=>e.jsx(p,{varKey:i,value:n,style:{...V(n)},theme:r},i))})}),e.jsx(a,{headerText:"Others",collapsed:!0,children:e.jsx("div",{style:l,children:E.map(([i,n])=>e.jsx(p,{varKey:i,value:n,theme:r},i))})})]})})};function In(r={}){const{wrapper:t}=Object.assign({},h(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",pre:"pre"},h(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Public Utils"}),`
`,e.jsx(n.h1,{id:"public-utils",children:"Public Utils"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@ui5/webcomponents-react-base"})," package is providing a couple of utils, which can be used in your application as well."]}),`
`,e.jsx(I,{design:B.Warning,hideCloseButton:!0,children:`Please only use the utils mentioned in this document in your application. All other exports are intended for internal
  use and are not subject to semantic versioning!`}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(v,{}),`
`,e.jsx(n.h2,{id:"device",children:"Device"}),`
`,e.jsx(s,{code:"import { Device } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Device"})," allows you to detect information about the environment where your app is running:"]}),`
`,e.jsx(n.h3,{id:"general-device-information",children:"General Device Information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isIE()"})," - returns ",e.jsx(n.code,{children:"true"})," if running in Internet Explorer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isSafari()"})," - returns ",e.jsx(n.code,{children:"true"})," if running in Safari"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isDesktop()"})," - returns ",e.jsx(n.code,{children:"true"})," if running on desktop devices"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isTablet()"})," - returns ",e.jsx(n.code,{children:"true"})," if running on tablet devices"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isPhone()"})," - returns ",e.jsx(n.code,{children:"true"})," if running on mobile phone devices"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.supportsTouch()"})," - returns ",e.jsx(n.code,{children:"true"})," if device supports touch"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.getCurrentRange(width?: number)"})," ",e.jsx("br",{}),`
Returns the current media range of the window, or the optionally passed width. `,e.jsx("br",{}),`
Returns: `,e.jsx(n.code,{children:"{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.getOrientation()"})," ",e.jsx("br",{}),`
Returns the current orientation of the device, `,e.jsx(n.code,{children:"{ landscape: boolean, portrait: boolean }"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"event-listeners",children:"Event Listeners"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.attachResizeHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler which will be invoked whenever the window size has changed.
`,e.jsx(n.code,{children:"callback"})," is a function which will be called with ",e.jsx(n.code,{children:"{ height: number, width: number }"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.detachResizeHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached resize handler`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.attachOrientationChangeHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler which will be invoked the orientation of the device has changed e.g., through rotation.
`,e.jsx(n.code,{children:"callback"})," is a function which will be called with ",e.jsx(n.code,{children:"{ landscape: boolean, portrait: boolean }"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.detachOrientationChangeHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached orientation change handler`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.attachMediaHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler whenever the window size is matching another media query. `,e.jsx("br",{}),`
The current window size will be matched against the standard SAP Responsive Breakpoints:`]}),`
`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Media Query"}),e.jsx(n.th,{children:"Name"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"(max-width:599px)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Phone"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"(min-width:600px) and (max-width:1023px)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Tablet"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"(min-width:1024px) and (max-width:1439px)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Desktop"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"(min-width:1440px)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"LargeDesktop"})})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"callback"}),` is a function which will be called with
`,e.jsx(n.code,{children:"{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.detachMediaHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached media handler`]}),`
`]}),`
`,e.jsx(n.h2,{id:"theming-parameters",children:"Theming Parameters"}),`
`,e.jsx(s,{code:"import { ThemingParameters } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["By using our ",e.jsx(n.code,{children:"ThemingParameters"}),`, you can define the look and feel of your application without the need to hard-code any
colors. You can e.g. set `,e.jsx(n.code,{children:"ThemingParameters.sapBackgroundColor"})," as a ",e.jsx(n.code,{children:"background-color"}),` and you'll always get the correct
background color for your current theme.`]}),`
`,e.jsx(H,{}),`
`,e.jsx(n.h2,{id:"spacing",children:"Spacing"}),`
`,e.jsx(s,{code:"import { spacing } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"spacing"}),` file is containing all standard margins and paddings that are used in SAP Applications.
You can explore them via the `,e.jsx(n.a,{href:"https://ui5.sap.com/#/entity/sap.ui.core.StandardMargins",target:"_blank",rel:"nofollow noopener noreferrer",children:"UI5 Standard Margins Demo Kit"}),`
and the `,e.jsx(n.a,{href:"https://ui5.sap.com/#/entity/sap.ui.core.ContainerPadding",target:"_blank",rel:"nofollow noopener noreferrer",children:"UI5 Standard Paddings Demo Kit"}),"."]}),`
`,e.jsx(n.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsx(n.h3,{id:"usei18nbundle",children:e.jsx(n.code,{children:"useI18nBundle"})}),`
`,e.jsx(s,{code:"import { useI18nBundle } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useI18nBundle"}),` hook can be used for adding internationalization to your application. Learn more about it in our
`,e.jsx(n.a,{href:"?path=/docs/internationalization--page",children:"Internationalization Guide"}),"."]}),`
`,e.jsx(n.h3,{id:"useviewportrange",children:e.jsx(n.code,{children:"useViewportRange"})}),`
`,e.jsx(s,{code:"import { useViewportRange } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useViewportRange"})," hook is a utility hook based on the ",e.jsx(n.code,{children:"Device.getCurrentRange()"})," and ",e.jsx(n.code,{children:"Device.attachMediaHandler"}),` API.
It will always return a string with the name of the currently active range.`]}),`
`,e.jsx(n.h3,{id:"useresponsivecontentpadding",children:e.jsx(n.code,{children:"useResponsiveContentPadding"})}),`
`,e.jsx(s,{code:"import { useResponsiveContentPadding } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useResponsiveContentPadding"})," hook is a hook generating a style class or a tuple containing the style class and the current range if ",e.jsx(n.code,{children:"returnRangeString"})," is set to ",e.jsx(n.code,{children:"true"}),`.
It adds `,e.jsx(n.code,{children:"padding-left"})," and ",e.jsx(n.code,{children:"padding-right"})," corresponding to the range (retrieved with ",e.jsx(n.code,{children:"Device.getCurrentRange()"}),") of the element."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const YourComponent = (props) => {
  const elementRef = useRef(null);
  const responsivePaddingClass = useResponsiveContentPadding(elementRef.current);
  return (
    <div ref={elementRef} className={responsivePaddingClass}>
      Content
    </div>
  );
};
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// returns the style class as string
const responsivePaddingClass = useResponsiveContentPadding(elementRef.current);
// returns a tuple - the first entry is the style class, the second the current range string
const [responsivePaddingClass, currentRange] = useResponsiveContentPadding(elementRef.current, true);
`})}),`
`,e.jsx(y,{})]})}}export{In as default};
//# sourceMappingURL=Public-Utils-3d7042a1.js.map
