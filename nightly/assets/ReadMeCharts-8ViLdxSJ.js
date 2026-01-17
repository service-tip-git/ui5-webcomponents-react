import{r as i,j as t,T as l}from"./iframe-plJY_px0.js";import{useMDXComponents as p}from"./index-CNgSdSBz.js";import{M as u,a as h,n as f}from"./blocks-Q5gmWwgb.js";import"./Tag-Dh3wWudw.js";import"./index-DSqDyml0.js";import{F as d}from"./CommandsAndQueries-CSEdQQvR.js";import"./copy-mR5XScRR.js";import{T as b}from"./TableOfContent-3VAk2MsF.js";import{C}from"./index-C49DtWC1.js";import{D}from"./BarChart.stories-Cy-CkmZS.js";import{D as y}from"./BulletChart.stories-B-XxxcWv.js";import{D as g}from"./ColumnChart.stories-qml-ECVT.js";import{D as v}from"./ColumnChartWithTrend.stories-ss_DGSw7.js";import{D as x}from"./ComposedChart.stories-celfs3d0.js";import{D as j}from"./DonutChart.stories-Wn0C7kxb.js";import{D as w}from"./LineChart.stories-B7oxOCOw.js";import{D as R}from"./PieChart.stories-BHPZbfp_.js";import{D as I}from"./RadarChart.stories-kzyjloyp.js";import{D as S}from"./RadialChart.stories-BHvAaTZI.js";import{D as T}from"./ScatterChart.stories-C8dy2TOz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CFU4bu3b.js";import"./sys-enter-2-CWJ3J9PS.js";import"./alert-Cvpxudnd.js";import"./index-2EbIuvCl.js";import"./index-CULtK81i.js";import"./index-D3V1C0u7.js";import"./Link-Bty8oyFV.js";import"./index-Dd7Sfpx-.js";import"./index-DfokaHEY.js";import"./index-B337CKIF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQsTwQe_.js";import"./addCustomCSSWithScoping-K4GM8_aQ.js";import"./index-t--BkPKT.js";import"./Carousel-BeECScym.js";import"./ScrollEnablement-C3kxd9Sb.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Bk0uC9D6.js";import"./slim-arrow-left-BtaDYWIh.js";import"./DemoProps-DeEYzN2C.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Ctjrj2HN.js";import"./ChartContainer-B4KQVv6R.js";import"./index-CKdbXzvk.js";import"./useCancelAnimationFallback-DfjiXQw4.js";import"./YAxisTicks-AICyzZsZ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-TB6nYpD9.js";import"./ChartDataLabel-p3zO12Zi.js";import"./useOnClickInternal-BzEkDa64.js";import"./react-content-loader.es-DmFoqbfC.js";import"./useIsRTL-BmQyw8RD.js";import"./useLongestYAxisLabel-dLP0rlhg.js";import"./ComposedChart-U4kuB96n.js";import"./Line-i8Nqsjum.js";import"./Scatter-DsMp95oN.js";import"./index-DQ3GKBVq.js";import"./index-BH6pLKzR.js";import"./Placeholder-C_LDX2Fz.js";import"./index-BoNSouRr.js";const $=`# @ui5/webcomponents-react-charts

Chart library built on top of [recharts](https://recharts.org/) for ui5-webcomponents-react.

## Installation

\`\`\`bash
npm install @ui5/webcomponents-react-charts
\`\`\`

## Accessibility

Charts only offer limited accessibility support with only basic built-in features, so it’s essential to ensure your implementation meets the accessibility standards of your application.

## React 19 support

To use this library with React 19 you have to override your \`react-is\` version to match your React version!

- **npm:**

  \`\`\`json
    "overrides": {
      "react-is": "19.1.0"
    },
  \`\`\`

- **yarn**

  \`\`\`json
    "resolutions": {
      "react-is": "19.1.0"
    },
  \`\`\`

## Static CSS

If you’ve enabled \`staticCSSInjected\` on the \`ThemeProvider\` component ([learn more here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-server-side-rendering--docs#add-to-existing-project)), make sure to also import the \`charts\` stylesheet. Otherwise, charts won’t be rendered correctly.

\`\`\`ts
import '@ui5/webcomponents-react-charts/styles.css';
\`\`\`

## Documentation

You can find an interactive documentation in our [Storybook](https://ui5.github.io/webcomponents-react/).

## Contribute

Please check our [Contribution Guidelines](https://github.com/UI5/webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/UI5/webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/UI5/webcomponents-react).

<!-- Use the force -->
`;function E(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:$.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(E,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:T}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Ft(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Ft as default};
