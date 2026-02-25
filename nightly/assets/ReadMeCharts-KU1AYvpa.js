import{r as i,j as t,O as l}from"./iframe-BQI8iJtZ.js";import{useMDXComponents as p}from"./index-l_Dh7Y-d.js";import{M as u,a as h,n as f}from"./blocks-Dm7btFzZ.js";import"./Tag-D2JKRyPD.js";import"./index-Bd5bxmR8.js";import{F as d}from"./CommandsAndQueries-BH0I_jDK.js";import"./copy-Wr9Hnpdu.js";import{T as b}from"./TableOfContent-Cprc8k2f.js";import{C}from"./index-DRGXIyzG.js";import{D}from"./BarChart.stories-CxnJM-Cs.js";import{D as y}from"./BulletChart.stories-Dvv4Hmz-.js";import{D as g}from"./ColumnChart.stories-B00h2TzF.js";import{D as v}from"./ColumnChartWithTrend.stories-CuD5LmzN.js";import{D as x}from"./ComposedChart.stories-BOJ436lB.js";import{D as j}from"./DonutChart.stories-yY0SQ0gk.js";import{D as w}from"./LineChart.stories-07dDpeA7.js";import{D as R}from"./PieChart.stories-DNTkIUG5.js";import{D as I}from"./RadarChart.stories-T9hCc9Xf.js";import{D as S}from"./RadialChart.stories-DyO6uw9c.js";import{D as $}from"./ScatterChart.stories-Dd317bD8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DhTwMCvW.js";import"./sys-enter-2-B4_axdEE.js";import"./alert-D_lKNn7T.js";import"./index-CDHutJWz.js";import"./index-CdGithLr.js";import"./index-y23wvc_L.js";import"./Link-C9lbVSnw.js";import"./index-CP42RXg5.js";import"./index-CixO9GRI.js";import"./index-CjJMvaDa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DMLN5SEy.js";import"./addCustomCSSWithScoping-C30TCMVD.js";import"./index-CC6FubQ3.js";import"./Carousel-CBmj_moq.js";import"./ScrollEnablement-B8byLzsv.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BkNcJevW.js";import"./slim-arrow-left-BGhGzD6V.js";import"./DemoProps-LoBfujCM.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BEYIWzba.js";import"./ChartContainer-CzAdl16F.js";import"./index-Bqbzj0yD.js";import"./useCancelAnimationFallback-C7Yw4xPE.js";import"./YAxisTicks-BNY2qB6p.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-mo1hCwDO.js";import"./ChartDataLabel-CyCM7gyZ.js";import"./useOnClickInternal-CGkZHstj.js";import"./react-content-loader.es-9BHk9O-G.js";import"./useIsRTL-Bvd5TkXY.js";import"./useLongestYAxisLabel-A5dhWIYo.js";import"./ComposedChart-sklrMIqs.js";import"./Line-QSHriLUW.js";import"./Scatter-CBGDQLOK.js";import"./index-C6hzZf-x.js";import"./index-HnLZ3Y-m.js";import"./Placeholder-Y5bsdkBv.js";import"./index-CmsHaE0p.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
