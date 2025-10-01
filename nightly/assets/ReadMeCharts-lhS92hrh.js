import{r as i,j as t,T as l}from"./iframe-CC5YTvQh.js";import{useMDXComponents as p}from"./index-Cq26BSP3.js";import{M as u,a as h,k as f}from"./blocks-BsOXarNI.js";import"./Tag-BlfrYy9_.js";import"./index-CzqjBntm.js";import{F as d}from"./CommandsAndQueries-CFtdiSUA.js";import"./copy-Dmf1qML3.js";import{T as b}from"./TableOfContent-Cy6EFdFa.js";import{C}from"./index-BzzVZLdG.js";import{D}from"./BarChart.stories-HDrnZfFP.js";import{D as y}from"./BulletChart.stories-Bp-MsdaJ.js";import{D as g}from"./ColumnChart.stories-VDAA9HrT.js";import{D as v}from"./ColumnChartWithTrend.stories-rYARef53.js";import{D as x}from"./ComposedChart.stories-CuO4uzOX.js";import{D as j}from"./DonutChart.stories-FG0LuMoE.js";import{D as w}from"./LineChart.stories-BlFrBHyA.js";import{D as R}from"./PieChart.stories-BVUEUeE1.js";import{D as I}from"./RadarChart.stories-DVLl5Tyo.js";import{D as S}from"./RadialChart.stories-BGTKl11X.js";import{D as T}from"./ScatterChart.stories-D1HWCgBn.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0rIxsAi.js";import"./sys-enter-2-DYbT0ikl.js";import"./alert-D4tt3RNk.js";import"./index-BoEyxgcJ.js";import"./index-ZUwBAUQq.js";import"./index-DZNvYvST.js";import"./Link-BoZATccP.js";import"./index-CBMZmkal.js";import"./index-BSqVcJze.js";import"./index-Dnx65cB5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BdkJ8A28.js";import"./addCustomCSSWithScoping-DLLu2c7G.js";import"./index-Dtg_ecO1.js";import"./Carousel-DSDhCdkm.js";import"./ScrollEnablement-D_WinKmz.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DWwRtY-U.js";import"./slim-arrow-left-BG34SjCZ.js";import"./DemoProps-BtKmw4D3.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D6gxfRb6.js";import"./ChartContainer-CUEUbWnT.js";import"./index-BmHMhL1b.js";import"./useCancelAnimationFallback-D66Jyepo.js";import"./YAxisTicks-BjY3Nql6.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DThMs-gm.js";import"./ChartDataLabel-C2BslvXC.js";import"./useOnClickInternal-02lt0Q7p.js";import"./react-content-loader.es-CfkJEBjU.js";import"./useIsRTL-DezL06Ik.js";import"./useLongestYAxisLabel-BjuJnDWw.js";import"./ComposedChart-4h3GiyMj.js";import"./Line-BvF_gFAs.js";import"./Scatter-DOx3XVzI.js";import"./index-CdhQXtJN.js";import"./index-C71HlSLp.js";import"./Placeholder-Dz2o3RnA.js";import"./index-CDCCvP3y.js";const $=`# @ui5/webcomponents-react-charts

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
