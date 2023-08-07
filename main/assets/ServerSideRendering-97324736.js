import{j as e}from"./jsx-runtime-d079401a.js";import"./DomRefTable.module-de77c72c.js";import{M as s}from"./chunk-S4VUQJ4A-25ff5c00.js";import"./index-f1f2c4b1.js";import{T as p}from"./TableOfContent-a5fa6179.js";import{F as a}from"./Footer-6d299d46.js";import{M as m,a as c}from"./index-a6997f47.js";import{u as i}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-bb1f9706.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-d9b40dee.js";import"./UI5Element-a4bd3d38.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-626dc1bf.js";import"./index-b8a1bebb.js";import"./iframe-21fdf03a.js";import"../sb-preview/runtime.js";import"./withWebComponent-7d7e5133.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-42236945.js";import"./Icons-74c917eb.js";import"./Device-6afa24d0.js";import"./Integer-f7f172c9.js";import"./class-map-0ab40ab9.js";import"./i18n-defaults-d5d083dd.js";import"./index-0a1c8df2.js";import"./Avatar-6c09069b.js";import"./ResizeHandler-0af4416f.js";import"./employee-05c578de.js";import"./index-eec0d5d4.js";import"./AriaLabelHelper-43a261ec.js";import"./index-49e1b289.js";import"./Link-498d09c2.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./index-d203965f.js";import"./index-b42968db.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./index-fb6e8b5e.js";import"./index-822e3d4e.js";import"./Label-287c3220.js";import"./index-3cda8e0c.js";import"./Button-02dfef34.js";import"./index-5b10a6c9.js";import"./Popover-26ef4370.js";import"./PopupsCommon.css-f12c9479.js";import"./FocusableElements-66623361.js";import"./isElementHidden-01c07146.js";import"./decline-3cb804de.js";import"./i18n-defaults-2d2bf0b6.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-309143b9.js";import"./information-dbbb1c9a.js";function h(){return e.jsx(m,{design:c.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Known Limitations"}),e.jsxs("ul",{children:[e.jsx("li",{children:"As custom elements need to be defined on the client, UI5 Web Components for React is only rendering the outer markup of the UI5 Web Component on the server. The rendering of the Web Component is still happening on the client."}),e.jsxs("li",{children:["The Next.js ",e.jsx("code",{children:"app"})," directory shows some hydration warnings on the client. These warnings seem not to affect the runtime."]})]})]})})}function ye(r={}){const{wrapper:o}=Object.assign({},i(),r.components);return o?e.jsx(o,Object.assign({},r,{children:e.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",h3:"h3",code:"code"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Server Side Rendering"}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h1,{id:"server-side-rendering",children:"Server Side Rendering"}),`
`,e.jsxs(t.p,{children:["We're happy to announce that starting from ",e.jsx(t.strong,{children:"v1.17.0"}),", UI5 Web Components for React is supporting Server Side Rendering Frameworks like ",e.jsx(t.a,{href:"https://nextjs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Next.js"})," 🎉."]}),`
`,e.jsx(h,{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"nextjs",children:"Next.js"}),`
`,e.jsx(t.h3,{id:"create-a-new-project",children:"Create a new project"}),`
`,e.jsxs(t.p,{children:["The best way to start using UI5 Web Components in Next.js is using one of our ",e.jsx(t.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/project-templates--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"templates"}),`.
We have templates available for both the pages and the app router.`]}),`
`,e.jsx(t.h3,{id:"add-to-existing-project",children:"Add to existing project"}),`
`,e.jsxs(t.p,{children:["In case you already have an existing Next.js project and want to add UI5 Web Components for React to it, you first need to follow our ",e.jsx(t.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/getting-started--docs#add-ui5webcomponents-react-to-an-existing-app",target:"_blank",rel:"nofollow noopener noreferrer",children:"general Getting Started Guide"}),"."]}),`
`,e.jsxs(t.p,{children:["As UI5 Web Components for React is using ",e.jsx(t.code,{children:"react-jss"})," internally, you need to apply some changes to your ",e.jsx(t.code,{children:"_app"})," and ",e.jsx(t.code,{children:"_document"}),` file (in case you are using the pages router).
You can copy these changes either from the official `,e.jsx(t.a,{href:"https://github.com/vercel/next.js/tree/canary/examples/with-react-jss",target:"_blank",rel:"nofollow noopener noreferrer",children:"next.js-react-jss example"})," or from our ",e.jsx(t.a,{href:"https://github.com/SAP/ui5-webcomponents-react/tree/main/examples/nextjs-pages",target:"_blank",rel:"nofollow noopener noreferrer",children:"pages router template"}),"."]}),`
`,e.jsxs(t.p,{children:["In case you are already using the app router, you can copy the ",e.jsx(t.code,{children:"react-jss"})," setup from the ",e.jsx(t.code,{children:"app/CssRegistry.tsx"})," in our ",e.jsx(t.a,{href:"https://github.com/SAP/ui5-webcomponents-react/tree/main/examples/nextjs-app",target:"_blank",rel:"nofollow noopener noreferrer",children:"app router template"}),". Make sure to add this component to your root layout!"]}),`
`,e.jsx(t.h2,{id:"other-frameworks",children:"Other frameworks"}),`
`,e.jsxs(t.p,{children:["Your favorite framework is missing here? Feel free to ",e.jsx(t.a,{href:"https://github.com/SAP/ui5-webcomponents-react/blob/main/docs/knowledge-base/ServerSideRendering.mdx",target:"_blank",rel:"nofollow noopener noreferrer",children:"edit this page"})," and submit a pull request to get it added!"]}),`
`,e.jsx(a,{})]})}}export{ye as default};
//# sourceMappingURL=ServerSideRendering-97324736.js.map
