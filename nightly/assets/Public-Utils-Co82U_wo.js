import{j as e}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{useMDXComponents as p}from"./index-CcnH5Kt0.js";import{ae as v,aj as s}from"./index-1kQ8XqVH.js";import{M as y,a as C}from"./index-DCnPANcU.js";import"./TagDesign-Dou_yO3g.js";import{r as c}from"./index-RYns6xqu.js";import"./index-sbqOYYIm.js";import"./chunk-HLWAVYOI-BZgyIB3K.js";import{b as D,u as S}from"./withWebComponent-GNT2PXey.js";import"./copy-BGQQIC81.js";import"./Button-Cvy14OjO.js";import{F as T}from"./CommandsAndQueries-DNTj9iS5.js";import{T as k}from"./TableOfContent-B6vxzEs5.js";import"./WrappingType-CW8URInd.js";import{M as P}from"./utils-gz0UBSMj.js";import{F as R,a as F}from"./index-CLe8_13Z.js";import{T as M}from"./index-DCYhXUzl.js";import{T as o}from"./ThemingParameters-DOkJX3Ed.js";import{S as B}from"./index-CyHz8WRq.js";import{O as E}from"./index-BZ60Ewmc.js";import{P as l}from"./index-lzWDEUoA.js";import{T as O}from"./index-D_85Dc-w.js";import{L as V}from"./index-CySIBtOy.js";import"./iframe-Bc4Os9Yd.js";import"../sb-preview/runtime.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BqO_ndMU.js";import"./utils-CcgiHsei.js";import"./decline-Bc8xWa4t.js";import"./Icon-BhzwmwWz.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B9dCEi48.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-CO9BdrhZ.js";import"./alert-DWttAQXl.js";import"./class-map-_G2Y84x0.js";import"./i18n-defaults-BaleIpCT.js";import"./client-BZNFO7bv.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Popover-BcjI4r72.js";import"./PopupsCommon.css-DE8Wza_j.js";import"./getEffectiveScrollbarStyle-UFcPsH0e.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-XK3zSnEF.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-B2Pwek_1.js";import"./style-map-DYn2sBEk.js";import"./BrowserScrollbar.css-LN7L1p37.js";import"./index-CbB55c25.js";import"./index-DC6I4G55.js";import"./Link-YAV9tZDK.js";import"./index-BZbjj9L4.js";import"./clsx-B-dksMZM.js";import"./addCustomCSSWithScoping-BR-0f_u5.js";import"./index-6guCCsNT.js";import"./BusyIndicator-BRwQ1wd3.js";import"./Label-emsTVYba.js";import"./index-DzV5Ipw0.js";import"./index-CwfmfrKN.js";import"./Avatar-BNYvS_OM.js";import"./employee-DAkvclYj.js";import"./main-BPTHlokf.js";import"./useStylesheet-BgRQTyXM.js";import"./I18nStore-CGmCejYo.js";import"./Select-HpLFyEcQ.js";import"./InvisibleMessage-CTllBJk6.js";import"./ValueState-Bg0UWejw.js";import"./slim-arrow-down-BscBy-Vv.js";import"./List-CfQVFNo9.js";import"./ItemNavigation-BwSWEgwf.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-BV3cTl0-.js";import"./CheckBox-BTLn07Vz.js";import"./accept-B-hwLd1L.js";import"./slim-arrow-right-Dx8ng0oy.js";import"./ResponsivePopover-CxQpx28n.js";import"./Dialog-DhoJQnEE.js";import"./ResponsivePopoverCommon.css-Bxeaj0oY.js";import"./ValueStateMessage.css-CD856WHH.js";import"./Option-CbVUmRcJ.js";import"./slideUp-By1UZlL6.js";import"./animate-DF-0g--S.js";import"./AnimationMode-B8al3v1_.js";const a={display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",rowGap:"1rem",columnGap:"1rem"},u=[],x=[],z=Object.entries(o).filter(([i,r])=>i.includes("Font")?i.includes("FontUrl")?!0:(u.push([i,r]),!1):i.includes("Color")||i.includes("Shadow")||i.includes("Background")||i.includes("Chart")?(x.push([i,r]),!1):!0),I=i=>{const r={};return i.includes("Family")||i.includes("FontUrl")?r.fontFamily=i:i.includes("Size")?r.fontSize=i:i.includes("Weight"),r},L=i=>{const r={};return i.includes("Shadow")?r.boxShadow=i:r.backgroundColor=i,r},j=({value:i,varKey:r,theme:n,style:t={}})=>{const[d,b]=c.useReducer(w=>!w,!1),[g,f]=c.useState(getComputedStyle(document.documentElement).getPropertyValue(`--${r}`));return c.useEffect(()=>{setTimeout(()=>{f(getComputedStyle(document.documentElement).getPropertyValue(`--${r}`))},200)},[n]),e.jsxs(R,{direction:F.Column,style:{width:"85%"},children:[e.jsx(O,{title:"Click to show CSS Variable",style:{cursor:"pointer",...t},onClick:b,children:d?i:r}),e.jsx(V,{children:g})]},r)},H=i=>{const{varKey:r,value:n,theme:t}=i;return e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(j,{value:n,varKey:r,theme:t}),e.jsx("div",{style:{...L(n),borderRadius:"50%",width:"2rem",height:"2rem",minWidth:"2rem",border:`1px solid ${o.sapField_BorderColor}`}})]})},h=i=>{const{varKey:r,value:n,theme:t,style:d={}}=i;return e.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:e.jsx(j,{value:n,varKey:r,style:d,them:t})})},A=()=>{const[i,r]=c.useState(D());return e.jsx(M,{children:e.jsxs("div",{style:{backgroundColor:o.sapBackgroundColor,padding:"1rem",borderRadius:o.sapElement_BorderCornerRadius,boxShadow:o.sapContent_Shadow0},children:[e.jsx(B,{onChange:n=>{const t=n.detail.selectedOption.dataset.value;r(t),S(t)},children:P.map(({title:n,value:t})=>e.jsx(E,{"data-value":t,selected:t===i,children:n},t))}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(l,{headerText:"Colors & Shadows",collapsed:!0,children:e.jsx("div",{style:a,children:x.map(([n,t])=>e.jsx(H,{varKey:n,value:t,theme:i},n))})}),e.jsx(l,{headerText:"Fonts",collapsed:!0,children:e.jsx("div",{style:{...a,gridTemplateColumns:"repeat(1, minmax(0, 1fr))"},children:u.map(([n,t])=>e.jsx(h,{varKey:n,value:t,style:{...I(t)},theme:i},n))})}),e.jsx(l,{headerText:"Others",collapsed:!0,children:e.jsx("div",{style:a,children:z.map(([n,t])=>e.jsx(h,{varKey:n,value:t,theme:i},n))})})]})})};function m(i){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...p(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Public Utils"}),`
`,e.jsx(r.h1,{id:"public-utils",children:"Public Utils"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"@ui5/webcomponents-react-base"})," package is providing a couple of utils, which can be used in your application as well."]}),`
`,e.jsx(y,{design:C.Critical,hideCloseButton:!0,children:`Please only use the utils mentioned in this document in your application. All other exports are intended for internal
  use and are not subject to semantic versioning!`}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(k,{}),`
`,e.jsx(r.h2,{id:"device",children:"Device"}),`
`,e.jsx(s,{code:"import { Device } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"Device"})," allows you to detect information about the environment where your app is running:"]}),`
`,e.jsx(r.h3,{id:"general-device-information",children:"General Device Information"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.isIE()"})," - returns ",e.jsx(r.code,{children:"true"})," if running in Internet Explorer"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.isSafari()"})," - returns ",e.jsx(r.code,{children:"true"})," if running in Safari"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.isDesktop()"})," - returns ",e.jsx(r.code,{children:"true"})," if running on desktop devices"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.isTablet()"})," - returns ",e.jsx(r.code,{children:"true"})," if running on tablet devices"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.isPhone()"})," - returns ",e.jsx(r.code,{children:"true"})," if running on mobile phone devices"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.supportsTouch()"})," - returns ",e.jsx(r.code,{children:"true"})," if device supports touch"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.getCurrentRange(width?: number)"})," ",e.jsx("br",{}),`
Returns the current media range of the window, or the optionally passed width. `,e.jsx("br",{}),`
Returns: `,e.jsx(r.code,{children:"{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.getOrientation()"})," ",e.jsx("br",{}),`
Returns the current orientation of the device, `,e.jsx(r.code,{children:"{ landscape: boolean, portrait: boolean }"}),"."]}),`
`]}),`
`,e.jsx(r.h3,{id:"event-listeners",children:"Event Listeners"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.attachResizeHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler which will be invoked whenever the window size has changed.
`,e.jsx(r.code,{children:"callback"})," is a function which will be called with ",e.jsx(r.code,{children:"{ height: number, width: number }"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.detachResizeHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached resize handler`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.attachOrientationChangeHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler which will be invoked the orientation of the device has changed e.g., through rotation.
`,e.jsx(r.code,{children:"callback"})," is a function which will be called with ",e.jsx(r.code,{children:"{ landscape: boolean, portrait: boolean }"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.detachOrientationChangeHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached orientation change handler`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.attachMediaHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler whenever the window size is matching another media query. `,e.jsx("br",{}),`
The current window size will be matched against the standard SAP Responsive Breakpoints:`]}),`
`]}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Media Query"}),e.jsx(r.th,{children:"Name"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"(max-width:599px)"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"Phone"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"(min-width:600px) and (max-width:1023px)"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"Tablet"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"(min-width:1024px) and (max-width:1439px)"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"Desktop"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"(min-width:1440px)"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"LargeDesktop"})})]})]})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"callback"}),` is a function which will be called with
`,e.jsx(r.code,{children:"{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }"}),"."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"Device.detachMediaHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached media handler`]}),`
`]}),`
`,e.jsx(r.h2,{id:"theming-parameters",children:"Theming Parameters"}),`
`,e.jsx(s,{code:"import { ThemingParameters } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(r.p,{children:["By using our ",e.jsx(r.code,{children:"ThemingParameters"}),`, you can define the look and feel of your application without the need to hard-code any
colors. You can e.g. set `,e.jsx(r.code,{children:"ThemingParameters.sapBackgroundColor"})," as a ",e.jsx(r.code,{children:"background-color"}),` and you'll always get the correct
background color for your current theme.`]}),`
`,e.jsx(A,{}),`
`,e.jsx(r.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsx(r.h3,{id:"usei18nbundle",children:e.jsx(r.code,{children:"useI18nBundle"})}),`
`,e.jsx(s,{code:"import { useI18nBundle } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"useI18nBundle"}),` hook can be used for adding internationalization to your application. Learn more about it in our
`,e.jsx(r.a,{href:"?path=/docs/knowledge-base-internationalization--docs",children:"Internationalization Guide"}),"."]}),`
`,e.jsx(r.h3,{id:"useviewportrange",children:e.jsx(r.code,{children:"useViewportRange"})}),`
`,e.jsx(s,{code:"import { useViewportRange } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"useViewportRange"})," hook is a utility hook based on the ",e.jsx(r.code,{children:"Device.getCurrentRange()"})," and ",e.jsx(r.code,{children:"Device.attachMediaHandler"}),` API.
It will always return a string with the name of the currently active range.`]}),`
`,e.jsx(T,{})]})}function Fr(i={}){const{wrapper:r}={...p(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(m,{...i})}):m(i)}export{Fr as default};
