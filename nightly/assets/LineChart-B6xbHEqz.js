import{j as e}from"./iframe-D9bcJVt0.js";import{useMDXComponents as a}from"./index-DEcJNjgo.js";import{M as d,C as r}from"./blocks-jEcy0Ls1.js";import"./Tag-S7_09THp.js";import"./index-D7Hu_hwq.js";import{C as c}from"./ControlsWithNote-EpfSA0e_.js";import{D as h}from"./DocsHeader-19nnlu-X.js";import{F as m}from"./CommandsAndQueries-e_oDEhyZ.js";import{M as l,a as p}from"./LegendConfig-Bbn2hlyy.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-CjSLLKPU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-rD16map1.js";import"./sys-enter-2-mNekXiHd.js";import"./alert-DSYk_cjm.js";import"./index-CqnXC52g.js";import"./index-C3UoEV3F.js";import"./Link-Bg4Kb6iX.js";import"./copy-Bqt6bguH.js";import"./copy-BEICJ5u7.js";import"./GitHub-Mark-B8f3i_7Y.js";import"./TableOfContent-De7YMCoa.js";import"./index-DF6sI-fG.js";import"./index-CMrwt2SW.js";import"./index-o9G_R3kL.js";import"./index-Dsq5N9Gi.js";import"./index-BuSBQB3f.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-saeF9JMt.js";import"./addCustomCSSWithScoping-BvxM2LWg.js";import"./DemoProps-BsU3CKhk.js";import"./index-DFFWmqbu.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-BHiZmwun.js";import"./ChartContainer-Be_RDsOx.js";import"./index-CZq9Z5fi.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Lo4QNKTr.js";import"./staticProps-OAEhYb57.js";import"./ChartDataLabel-CSPw9u_4.js";import"./useLongestYAxisLabel-BJolZi5p.js";import"./react-content-loader.es-C_0N1Vxv.js";import"./Line-DxTFC9to.js";import"./useIsRTL--5EK8X_4.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(h,{of:i,isChart:!0}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(n.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(n.h3,{id:"with-formatter",children:"With Formatter"}),`
`,e.jsx(r,{of:C}),`
`,e.jsx(n.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,e.jsxs(n.p,{children:["You can set a reference line to any value by using the ",e.jsx(n.code,{children:"referenceLine"})," ",e.jsx(n.code,{children:"chartConfig"})," property. ",e.jsx(n.code,{children:"referenceLine"})," accepts all properties described ",e.jsx(n.a,{href:"https://recharts.org/en-US/api/ReferenceLine",rel:"nofollow",children:"here"}),", but it's recommended to only use ",e.jsx(n.code,{children:"label"}),",",e.jsx(n.code,{children:"value"})," and ",e.jsx(n.code,{children:"color"})," to preserve the intended design."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<LineChart
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
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"with-linear-gradient",children:"With Linear Gradient"}),`
`,e.jsx(r,{of:L}),`
`,e.jsx(n.h4,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
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
`,e.jsx(l,{of:W}),`
`,e.jsx(p,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(m,{})]})}function le(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{le as default};
