import{j as r,a as e,F as s}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-96410000.js";import{D as h}from"./DocsHeader-217ff5c2.js";import{F as c}from"./Footer-e29e7980.js";import"./index-f1f749bf.js";import{M as d,C as o}from"./index-510f8787.js";import"./chunk-PCJTTTQV-4f9b07b4.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as u,D as n,W as f,a as g,L as b}from"./BulletChart.stories-d751788c.js";import{u as a}from"./index-4fb8b842.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-e736e1f9.js";import"./iframe-4d3249bf.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./event-97133b94.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-459702a7.js";import"./Keys-3acbae73.js";import"./Button-876771f0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-6bc67b6a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-026b5b0e.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-b6b25fc2.js";import"./TableOfContent-87a494eb.js";import"./index-3bc07860.js";import"./Link-687260e5.js";import"./WrappingType-b81e595a.js";import"./index-15955256.js";import"./Label-040efebd.js";import"./index-96c5f47c.js";import"./Footer.module-f90cad7d.js";import"./index-e7c870e8.js";import"./Popover-907d427e.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-18-2bb9dade.js";import"./DemoProps-9cd0a46b.js";import"./index-99d317a4.js";import"./YAxisTicks-cfe98aba.js";import"./ChartContainer-c223b069.js";import"./index-94593310.js";import"./i18n-defaults-9da374be.js";import"./I18nContext-bef5b452.js";import"./debounce-bc2bf61c.js";import"./isString-77c0f675.js";import"./generateCategoricalChart-f06f4754.js";import"./throttle-28509771.js";import"./index-4d501b15.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-d82a283e.js";import"./defaults-0a7e9d15.js";import"./ChartDataLabel-0fcd48a9.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-fa907005.js";import"./useOnClickInternal-d27d7c1e.js";import"./react-content-loader.es-de0c8b5a.js";import"./ComposedChart-97b343a6.js";import"./Line-1d0505b6.js";import"./Scatter-dc359587.js";import"./useIsRTL-4cfef02b.js";function it(i={}){const{wrapper:m}=Object.assign({},a(),i.components);return m?r(m,Object.assign({},i,{children:r(p,{})})):p();function p(){const t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},a(),i.components);return e(s,{children:[r(d,{of:u}),`
`,r(h,{}),`
`,r(t.h2,{children:"Example"}),`
`,r(o,{of:n}),`
`,r(t.h2,{children:"Properties"}),`
`,r(l,{of:n}),`
`,r("br",{}),`
`,r(t.h2,{children:"Usage Notes"}),`
`,e(t.p,{children:[`In order to display the "Bullet" lines in the chart, you have to configure which measure should be rendered as bullet line.
You can do this via the `,r(t.code,{children:"measures"})," array:"]}),`
`,r(t.pre,{children:r(t.code,{className:"language-jsx",children:`<BulletChart
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
`,r("br",{}),`
`,r(t.h2,{children:"More Examples"}),`
`,r(t.h3,{children:"With Custom Size"}),`
`,r(o,{of:f}),`
`,r(t.h3,{children:"With Highlighted Measures"}),`
`,r(o,{of:g}),`
`,r(t.h3,{children:"Loading Placeholder"}),`
`,r(o,{of:b}),`
`,r(c,{})]})}}export{it as default};
//# sourceMappingURL=BulletChart-99ce7a38.js.map
