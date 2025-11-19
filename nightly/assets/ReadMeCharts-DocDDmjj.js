import{r as i,j as t,T as l}from"./iframe-Bg524aqp.js";import{useMDXComponents as p}from"./index-B-rwzkjC.js";import{M as u,a as h,m as f}from"./blocks--Wel_jE1.js";import"./Tag-DNMuD7A5.js";import"./index-B9tuTECn.js";import{F as d}from"./CommandsAndQueries-Bxzaytg-.js";import"./copy-BgS9Q-8_.js";import{T as b}from"./TableOfContent-Cn8NCVE9.js";import{C}from"./index-D2Ktz0VL.js";import{D}from"./BarChart.stories-B6G3bV4X.js";import{D as y}from"./BulletChart.stories-B5R-QpqG.js";import{D as g}from"./ColumnChart.stories-DVc2LDXi.js";import{D as v}from"./ColumnChartWithTrend.stories-DvNJ5v37.js";import{D as x}from"./ComposedChart.stories-zszvcwUV.js";import{D as j}from"./DonutChart.stories-DUDz42Dm.js";import{D as w}from"./LineChart.stories-B1Q9l_Nw.js";import{D as R}from"./PieChart.stories-DC3ngs9k.js";import{D as I}from"./RadarChart.stories-CuRwUNSH.js";import{D as S}from"./RadialChart.stories-DTqHYB-W.js";import{D as T}from"./ScatterChart.stories-KltvcB-P.js";import"./preload-helper-PPVm8Dsz.js";import"./information-2dCGwvE_.js";import"./sys-enter-2-CO93Qjp1.js";import"./alert-BG-ILaUe.js";import"./index-BqYTt2r-.js";import"./index-DPNsglmV.js";import"./index-TfZZnQDd.js";import"./Link-DzzFCouB.js";import"./index-iejN5y1T.js";import"./index-r1bogqKf.js";import"./index-tDWQXHER.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkKuq7AH.js";import"./addCustomCSSWithScoping-DFbnSqfd.js";import"./index-DxUoW9XL.js";import"./Carousel-CP8bEeW0.js";import"./ScrollEnablement-C7eLNzW1.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DA-Qb55C.js";import"./slim-arrow-left-Dt2U2txy.js";import"./DemoProps-CBFTuY5I.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-cGFr16IH.js";import"./ChartContainer-xFwQT_Cz.js";import"./index-CPicDcbf.js";import"./useCancelAnimationFallback-Djn2MEdZ.js";import"./YAxisTicks-Dfi5t9En.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B04ZUo4Y.js";import"./ChartDataLabel-DWEgr5k8.js";import"./useOnClickInternal-Dvk7lbnm.js";import"./react-content-loader.es-CN7Wve3F.js";import"./useIsRTL-DiCPj2HI.js";import"./useLongestYAxisLabel-XUFpGH_a.js";import"./ComposedChart-CMG29ViW.js";import"./Line-B0sSY6db.js";import"./Scatter-CcQhQnZ1.js";import"./index-DZfBz3_R.js";import"./index-Di3MDQyH.js";import"./Placeholder-BhNZCRnL.js";import"./index-Uk2oM5mW.js";const $=`# @ui5/webcomponents-react-charts

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
