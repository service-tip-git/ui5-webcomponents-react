import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import{ae as n}from"./index-CdQ3Lu2m.js";import"./index-wg23HC6X.js";import"./index-BMxeeZ9B.js";import"./TagDesign-Dou_yO3g.js";import"./index-RYns6xqu.js";import"./index-sbqOYYIm.js";import"./chunk-NUUEMKO5-qXLTtDz7.js";import"./Button-CN-iJYg4.js";import"./withWebComponent-m_Fq5lNf.js";import"./copy-9aGvoyGQ.js";import{F as p}from"./CommandsAndQueries-NVTw9gOp.js";import{T as m}from"./TableOfContent-DB04WaQs.js";import"./WrappingType-CW8URInd.js";import"./Title-CbLKT2ZM.js";import"./iframe-jdvR9iII.js";import"../sb-preview/runtime.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-C1nyYXx8.js";import"./Icon-CqlVqIII.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./Keys-DoZifIQ_.js";import"./utils-DzvJSare.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-BCemT9Q2.js";import"./alert-RTfmNTjg.js";import"./class-map-De2mf49U.js";import"./i18n-defaults-NO4RLLYJ.js";import"./client-BzooOYO_.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-RVqvTAYx.js";import"./Popover-CSyvOuD4.js";import"./PopupsCommon.css-C0UbsxGP.js";import"./FocusableElements-3aC5Xvwv.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DIO-YqVA.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-TzMr6uTh.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-atmFgQVQ.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DPBS0l4j.js";import"./index-CHC2M3KR.js";import"./Label-9bI6U8uT.js";import"./index-DaJvuRnK.js";import"./index-Ci7P8uUK.js";import"./Link-BieF31O5.js";import"./index-DRQZYbIB.js";import"./index-Nq8WqOTU.js";import"./addCustomCSSWithScoping-D6Q9hDjm.js";import"./index-BHJpfsCV.js";import"./BusyIndicator-DyFdFCo7.js";import"./index-PL__NMMH.js";import"./index-CnaX4kM6.js";import"./Avatar-ClyMV4d2.js";import"./employee-q-Be_VIK.js";import"./index-9By0FEcc.js";import"./I18nStore-C2pCP-g5.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{title:"Legacy Components / Docs"}),`
`,o.jsx(m,{}),`
`,o.jsx(e.h1,{id:"ui5webcomponents-react-compat",children:"@ui5/webcomponents-react-compat"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"compat"})," (compatibility) package provides components that were removed in the v2 release but are still available for backwards compatibility."]}),`
`,o.jsx(e.p,{children:"Some of these components lack accessibility or design support, while others have been replaced by UI5 web components. In general, we recommend using components from this package only as a temporary solution."}),`
`,o.jsx(e.h2,{id:"component-support",children:"Component Support"}),`
`,o.jsx(e.p,{children:"Components in this package will not receive any new features. Only critical bugs, that are outside the component's inherent limitations, will be addressed. This package will be maintained until the next major release (which is not currently on our roadmap)."}),`
`,o.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-bash",children:`npm install @ui5/webcomponents-react-compat
`})}),`
`,o.jsx(e.h2,{id:"importing-components",children:"Importing Components"}),`
`,o.jsxs(e.p,{children:["As the v1 ",o.jsx(e.code,{children:"ui5-table"})," (",o.jsx(e.code,{children:"Table"}),") component is part of this package and some custom element names are equal to the new v2 ",o.jsx(e.code,{children:"ui5-table"}),", importing components from the root (",o.jsx(e.code,{children:'import { Table } from "@ui5/webcomponents-react-compat"'}),`) is discouraged.
The primary reason is that tree-shaking capabilities are limited in the default configurations of most bundlers. As a result, custom elements for the v1 table will still be defined, even if only the `,o.jsx(e.code,{children:"Toolbar"})," is imported. This can cause unexpected behavior if the v2 table is also used in the same app."]}),`
`,o.jsx(e.p,{children:o.jsx(e.strong,{children:"Please only import components from the file path!"})}),`
`,o.jsx(e.p,{children:"E.g.:"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"import { Table } from '@ui5/webcomponents-react-compat/dist/components/Table/index.js';"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"import { Toolbar } from '@ui5/webcomponents-react-compat/dist/components/Toolbar/index.js';"})}),`
`]}),`
`,o.jsx(e.p,{children:o.jsxs(e.strong,{children:["It is not supported using the v1 ",o.jsx(e.code,{children:"Table"})," and the v2 ",o.jsx(e.code,{children:"Table"})," in the same application!"]})}),`
`,o.jsx(p,{})]})}function ko(t={}){const{wrapper:e}={...r(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{ko as default};
