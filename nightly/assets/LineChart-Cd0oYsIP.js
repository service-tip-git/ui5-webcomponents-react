import{j as e}from"./iframe-BayyK-Sd.js";import{useMDXComponents as a}from"./index-Bzssb8Xd.js";import{M as d,C as r}from"./blocks-C_Hnd7fg.js";import"./Tag-BpBS-AuZ.js";import"./index-CvYFyR11.js";import{C as c}from"./ControlsWithNote-DhBxeExL.js";import{D as h}from"./DocsHeader-DBZe3-DN.js";import{F as m}from"./CommandsAndQueries-BWULVlsD.js";import{M as l,a as p}from"./LegendConfig-BwS1cynT.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-Bl1457oH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D5ng3oI8.js";import"./sys-enter-2-C1yPBG5C.js";import"./alert-C5buViQ-.js";import"./index-CK9HJhHW.js";import"./index-D_W1qX2w.js";import"./Link-DsRy4Mnv.js";import"./copy-BUs4XFwD.js";import"./copy-DZZbIDUz.js";import"./GitHub-Mark-DlJR_M_v.js";import"./TableOfContent-DpbYW4FS.js";import"./index-BiVk4GbQ.js";import"./index-DV2g_43r.js";import"./index-CTxam_11.js";import"./index-CvVYJJGO.js";import"./index-DGVYbyp5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CiI3G7zh.js";import"./addCustomCSSWithScoping-BRKADkGf.js";import"./DemoProps-LmghqOK2.js";import"./index-DA6dqC1L.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-ZkvPTUjW.js";import"./ChartContainer-BkIvWUy1.js";import"./index-BovCb11M.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BysV88Au.js";import"./staticProps-BQY8CZjt.js";import"./ChartDataLabel-BoUQruSM.js";import"./useLongestYAxisLabel-h1X0uVIz.js";import"./react-content-loader.es-B_h3WJ5T.js";import"./Line-DOvqlSr3.js";import"./useIsRTL-DlVbLN3l.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
