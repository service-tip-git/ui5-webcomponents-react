import{j as e}from"./iframe-Yrd5HXiX.js";import{useMDXComponents as a}from"./index-DOxT51h1.js";import{M as d,C as n}from"./blocks-Dvv2YIoD.js";import"./Tag-A6uWcl63.js";import"./index-BF16G_0e.js";import{C as m}from"./ControlsWithNote-Diw0D9KQ.js";import{D as c}from"./DocsHeader-B3c_A74V.js";import{F as h}from"./Footer-CkKCjd3s.js";import"./CommandsAndQueries-C2FZOFS4.js";import"./PageNotFound-kNJyDscw.js";import{M as p,a as l}from"./LegendConfig-Dl1hhbTK.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-CjCx9MoN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BDrQXgLD.js";import"./sys-enter-2-BRBYXqiH.js";import"./alert-BtI3-0Jo.js";import"./index-Sv74Bfia.js";import"./index-DA96fnb1.js";import"./Link-Cr8Oti_G.js";import"./copy-DdsKrtzd.js";import"./copy-BoNX54Ls.js";import"./GitHub-Mark-DFpWEgfA.js";import"./TableOfContent-DI8kOImB.js";import"./index-CSbojWcx.js";import"./index-Dz_82eM4.js";import"./index-CfYuYIaa.js";import"./index-BUTU-Rlc.js";import"./index-B2vsuIMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN_dVplC.js";import"./addCustomCSSWithScoping-DB8Behso.js";import"./Illustrations-D8i7Iry7.js";import"./i18n-defaults-C7ICj5-E.js";import"./DemoProps-DQ0dSu-I.js";import"./index-DkZbiYgf.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-BXOIxShE.js";import"./ChartContainer-VUYXqZKD.js";import"./index-gHAbPdfd.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DmKw46o_.js";import"./staticProps-B2voIB4A.js";import"./ChartDataLabel-BO3A5vrh.js";import"./useLongestYAxisLabel-CPMFZ0LS.js";import"./react-content-loader.es-F6xBaOQB.js";import"./Line-DuwhQFEE.js";import"./useIsRTL-DRlSD9Vi.js";function s(o){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(c,{of:i,isChart:!0}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:t}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(r.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(r.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(r.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(r.h3,{id:"with-formatter",children:"With Formatter"}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(r.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(r.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,e.jsxs(r.p,{children:["You can set a reference line to any value by using the ",e.jsx(r.code,{children:"referenceLine"})," ",e.jsx(r.code,{children:"chartConfig"})," property. ",e.jsx(r.code,{children:"referenceLine"})," accepts all properties described ",e.jsx(r.a,{href:"https://recharts.org/en-US/api/ReferenceLine",rel:"nofollow",children:"here"}),", but it's recommended to only use ",e.jsx(r.code,{children:"label"}),",",e.jsx(r.code,{children:"value"})," and ",e.jsx(r.code,{children:"color"})," to preserve the intended design."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`<LineChart
  {...props}
  chartConfig={{
    referenceLine: {
      color: 'red',
      label: 'MAX',
      value: 650
    }
  }}
/>
`})}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(r.h3,{id:"with-linear-gradient",children:"With Linear Gradient"}),`
`,e.jsx(n,{of:L}),`
`,e.jsx(r.h4,{id:"code",children:"Code"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
  return (
    <LineChart
      dataset={bigDataSet}
      dimensions={[{ accessor: 'name' }]}
      measures={[
        {
          accessor: 'users',
          width: 2,
          color: 'url(#colorUsers)'
        }
      ]}
    >
      <defs>
        <linearGradient id="colorUsers" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
      </defs>
    </LineChart>
  );
};
`})}),`
`,e.jsx(p,{of:W}),`
`,e.jsx(l,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(h,{})]})}function fe(o={}){const{wrapper:r}={...a(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(s,{...o})}):s(o)}export{fe as default};
