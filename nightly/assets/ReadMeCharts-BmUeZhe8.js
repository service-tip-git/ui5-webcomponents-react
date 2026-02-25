import{r as i,j as t,O as l}from"./iframe-CY8s9yjy.js";import{useMDXComponents as p}from"./index-CNb6gACG.js";import{M as u,a as h,n as f}from"./blocks-Ce5kV5iJ.js";import"./Tag-DQ3Uhj_I.js";import"./index-Bm5ZTkBt.js";import{F as d}from"./CommandsAndQueries-UPrDuurl.js";import"./copy-VMbFnyY_.js";import{T as b}from"./TableOfContent-DTx8VjPa.js";import{C}from"./index-Drfq5UYG.js";import{D}from"./BarChart.stories-BC7dEo-9.js";import{D as y}from"./BulletChart.stories-CW9yXCKv.js";import{D as g}from"./ColumnChart.stories-DuxKTtlX.js";import{D as v}from"./ColumnChartWithTrend.stories-9jJeZ5lb.js";import{D as x}from"./ComposedChart.stories-NZQlxpur.js";import{D as j}from"./DonutChart.stories-f0gqFpL_.js";import{D as w}from"./LineChart.stories-B0cMJtYQ.js";import{D as R}from"./PieChart.stories-CQ5mJyys.js";import{D as I}from"./RadarChart.stories-D924UVnA.js";import{D as S}from"./RadialChart.stories-BQKdLskL.js";import{D as $}from"./ScatterChart.stories-B_I1-5Z3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DZii-Bqd.js";import"./sys-enter-2-BpeJBTAl.js";import"./alert-C5YyaVlR.js";import"./index-CVORMKlE.js";import"./index-D-EFcDV0.js";import"./index-DrB3kUVO.js";import"./Link-CNsdB8sn.js";import"./index-BsBxNorJ.js";import"./index-C8Olm4ve.js";import"./index-BaNzLEPi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CvwjvMI1.js";import"./addCustomCSSWithScoping-D-8_Iy3e.js";import"./index-BXgCJyYO.js";import"./Carousel-D29G-kUF.js";import"./ScrollEnablement-O8zUITM6.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DmUTbbsF.js";import"./slim-arrow-left-BIs8bJ6T.js";import"./DemoProps-CBG0JZYZ.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Bad8Wfr-.js";import"./ChartContainer-C3SBq471.js";import"./index-yIH5v1dU.js";import"./useCancelAnimationFallback-BpoQvMaU.js";import"./YAxisTicks-B6VNkEUv.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DimyXIsf.js";import"./ChartDataLabel-Bw0NPNL_.js";import"./useOnClickInternal-CaRTRhtT.js";import"./react-content-loader.es-DkBiUTk9.js";import"./useIsRTL-CYf-OBV8.js";import"./useLongestYAxisLabel-BrfOVnvw.js";import"./ComposedChart-B5QejqRA.js";import"./Line-DKQKn2g_.js";import"./Scatter-BYNE-9Kb.js";import"./index-DkMIdeha.js";import"./index-xYMiEtjm.js";import"./Placeholder-DozXL43y.js";import"./index-CcWg8lCR.js";const E=`# @ui5/webcomponents-react-charts

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
