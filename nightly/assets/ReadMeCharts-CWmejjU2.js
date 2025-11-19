import{r as i,j as t,T as l}from"./iframe-DOg6M_II.js";import{useMDXComponents as p}from"./index-kwVVcFLm.js";import{M as u,a as h,m as f}from"./blocks-CUc5S4F5.js";import"./Tag-BltckGaY.js";import"./index-bsC8MgY-.js";import{F as d}from"./CommandsAndQueries-wl0h9BMr.js";import"./copy-BKSrEciR.js";import{T as b}from"./TableOfContent-CY-Swy74.js";import{C}from"./index-_OWpvzhu.js";import{D}from"./BarChart.stories-DaFR10uz.js";import{D as y}from"./BulletChart.stories-Ba-R8sNF.js";import{D as g}from"./ColumnChart.stories-CN6Dh0Af.js";import{D as v}from"./ColumnChartWithTrend.stories-Kf8xCwo3.js";import{D as x}from"./ComposedChart.stories-SVBOEt92.js";import{D as j}from"./DonutChart.stories-Cw2bjfdT.js";import{D as w}from"./LineChart.stories-Nhb5hYFR.js";import{D as R}from"./PieChart.stories-BMxSf8mv.js";import{D as I}from"./RadarChart.stories-CHP44WKH.js";import{D as S}from"./RadialChart.stories-CDuIsFvH.js";import{D as T}from"./ScatterChart.stories-D1bWS9wK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BuhVNJUa.js";import"./sys-enter-2-DbIwdKeB.js";import"./alert-BRGoaqba.js";import"./index-DwpJeIal.js";import"./index-DVpre6_h.js";import"./index-B0K8C7sE.js";import"./Link-CDmjIio6.js";import"./index-DMnxNTo_.js";import"./index-BEZkwnlN.js";import"./index-BdRkl8ET.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Drkj1-4P.js";import"./addCustomCSSWithScoping-DpPx9qfb.js";import"./index-DS0sFSVa.js";import"./Carousel-DdL0yNZE.js";import"./ScrollEnablement-BMPvWcSr.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C01hym4W.js";import"./slim-arrow-left-DxjBQri0.js";import"./DemoProps-DJiewQUI.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BGc62In2.js";import"./ChartContainer-BnWZ-MA0.js";import"./index-CISwnltl.js";import"./useCancelAnimationFallback-BXJHfkyQ.js";import"./YAxisTicks-CGYk_X8o.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BPRzU-DA.js";import"./ChartDataLabel-BCNjrOyA.js";import"./useOnClickInternal-kmERMr-S.js";import"./react-content-loader.es-D_Yxor1w.js";import"./useIsRTL-CA7b8y0H.js";import"./useLongestYAxisLabel-Cxs3RVGs.js";import"./ComposedChart-C6TCjPqn.js";import"./Line-DdzCcE9Q.js";import"./Scatter-CEHfxc0G.js";import"./index-CC13R0u5.js";import"./index-Cik1qF9d.js";import"./Placeholder-0l7cG9S3.js";import"./index-DoHBoEmv.js";const $=`# @ui5/webcomponents-react-charts

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
