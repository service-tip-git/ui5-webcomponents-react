import{j as t}from"./jsx-runtime-d079401a.js";import{C as s}from"./DomRefTable.module-de77c72c.js";import{D as a}from"./DocsHeader-0180a3b7.js";import{F as l}from"./Footer-6d299d46.js";import"./index-f1f2c4b1.js";import{M as h,C as o}from"./chunk-S4VUQJ4A-25ff5c00.js";import{C as d,D as p,W as c,a as u,L as x}from"./BulletChart.stories-ecf062ae.js";import{u as n}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-a6997f47.js";import"./iframe-21fdf03a.js";import"../sb-preview/runtime.js";import"./UI5Element-a4bd3d38.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-42236945.js";import"./Icons-74c917eb.js";import"./decline-3cb804de.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-dbbb1c9a.js";import"./class-map-0ab40ab9.js";import"./Button-02dfef34.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-d5d083dd.js";import"./index-bb1f9706.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-d9b40dee.js";import"./index-b8a1bebb.js";import"./Integer-f7f172c9.js";import"./index-0a1c8df2.js";import"./Avatar-6c09069b.js";import"./ResizeHandler-0af4416f.js";import"./employee-05c578de.js";import"./index-eec0d5d4.js";import"./index-49e1b289.js";import"./Link-498d09c2.js";import"./WrappingType-b81e595a.js";import"./index-fb6e8b5e.js";import"./TableOfContent-a5fa6179.js";import"./index-822e3d4e.js";import"./Label-287c3220.js";import"./index-b42968db.js";import"./index-3cda8e0c.js";import"./index-5b10a6c9.js";import"./Popover-26ef4370.js";import"./PopupsCommon.css-f12c9479.js";import"./FocusableElements-66623361.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-309143b9.js";import"./index-d203965f.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./DemoProps-4c4a52a7.js";import"./index-99d317a4.js";import"./YAxisTicks-20cdca83.js";import"./ChartContainer-8729f46a.js";import"./index-b28d3bd3.js";import"./i18n-defaults-456fcfbf.js";import"./I18nContext-dd74d568.js";import"./throttle-369be843.js";import"./isString-88f57f17.js";import"./generateCategoricalChart-aac54360.js";import"./index-b580f7e8.js";import"./debounce-afefed63.js";import"./useTooltipFormatter-9dc70184.js";import"./defaults-833e1be8.js";import"./ChartDataLabel-86a0c5f7.js";import"./staticProps-d8b65b3f.js";import"./useLongestYAxisLabel-f028bd1e.js";import"./useOnClickInternal-7ffac7fa.js";import"./react-content-loader.es-27eb8e7e.js";import"./ComposedChart-e291c4d3.js";import"./Line-569eec08.js";import"./Scatter-7171e4b2.js";function Kt(i={}){const{wrapper:e}=Object.assign({},n(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const r=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},n(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:d}),`
`,t.jsx(a,{}),`
`,t.jsx(r.h2,{id:"example",children:"Example"}),`
`,t.jsx(o,{of:p}),`
`,t.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(s,{of:p}),`
`,t.jsx("br",{}),`
`,t.jsx(r.h2,{id:"usage-notes",children:"Usage Notes"}),`
`,t.jsxs(r.p,{children:[`In order to display the "Bullet" lines in the chart, you have to configure which measure should be rendered as bullet line.
You can do this via the `,t.jsx(r.code,{children:"measures"})," array:"]}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-jsx",children:`<BulletChart
  data={
    [
      /* data */
    ]
  }
  dimensions={
    [
      /* dimensions */
    ]
  }
  measures={[
    {
      accessor: 'actuals',
      label: 'Actual Revenue',
      type: 'primary' // this will be the primary bar
    },
    {
      accessor: 'target',
      label: 'Planned Target Revenue',
      type: 'comparison' // this will be the bullet line
    }
  ]}
/>
`})}),`
`,t.jsx("br",{}),`
`,t.jsx(r.h2,{id:"more-examples",children:"More Examples"}),`
`,t.jsx(r.h3,{id:"with-custom-size",children:"With Custom Size"}),`
`,t.jsx(o,{of:c}),`
`,t.jsx(r.h3,{id:"with-highlighted-measures",children:"With Highlighted Measures"}),`
`,t.jsx(o,{of:u}),`
`,t.jsx(r.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,t.jsx(o,{of:x}),`
`,t.jsx(l,{})]})}}export{Kt as default};
//# sourceMappingURL=BulletChart-8d3f709b.js.map
