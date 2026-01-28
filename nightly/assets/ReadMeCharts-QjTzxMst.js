import{r as i,j as t,O as l}from"./iframe-w0_MYrZh.js";import{useMDXComponents as p}from"./index-BycN9fOm.js";import{M as u,a as h,n as f}from"./blocks-DJOHNqcV.js";import"./Tag-BpDpCVC0.js";import"./index-De2hY3Dy.js";import{F as d}from"./CommandsAndQueries-BLQv3roD.js";import"./copy-D2R0vLQ4.js";import{T as b}from"./TableOfContent-DGfn8FxH.js";import{C}from"./index-CIxmLiQW.js";import{D}from"./BarChart.stories-wi8NFxtV.js";import{D as y}from"./BulletChart.stories-D6miRgsk.js";import{D as g}from"./ColumnChart.stories-bY1YXG_H.js";import{D as v}from"./ColumnChartWithTrend.stories-Be7-Ib3K.js";import{D as x}from"./ComposedChart.stories-Yw_q7NZt.js";import{D as j}from"./DonutChart.stories-BJ918Ygs.js";import{D as w}from"./LineChart.stories-CCiauqN4.js";import{D as R}from"./PieChart.stories-DI6lv2fE.js";import{D as I}from"./RadarChart.stories-DKDllb7q.js";import{D as S}from"./RadialChart.stories-Dpg-j9_8.js";import{D as $}from"./ScatterChart.stories-wZNi_htK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DqXgTAXV.js";import"./sys-enter-2-BeQRv1GM.js";import"./alert-CuXO44HU.js";import"./index-D0GVc7AW.js";import"./index-URs7g74M.js";import"./index-BgtBDdHh.js";import"./Link-BZHTtj1b.js";import"./index-D2-ZQ1Lf.js";import"./index-BD0pDq5_.js";import"./index-CJZSgnB8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D4L-H8MS.js";import"./addCustomCSSWithScoping-BxnbVzCY.js";import"./index-vKqE_SS0.js";import"./Carousel-CgXJqTf3.js";import"./ScrollEnablement--wSGuTgj.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BR10MnTU.js";import"./slim-arrow-left-l13u-vke.js";import"./DemoProps-DHSy5OUQ.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BmAxQb3h.js";import"./ChartContainer-D1V117zr.js";import"./index-Cw510Bsp.js";import"./useCancelAnimationFallback-Bmj_kZoA.js";import"./YAxisTicks-DiidwE4E.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D9bnBWHp.js";import"./ChartDataLabel-Csg836s0.js";import"./useOnClickInternal-C8oUXxO_.js";import"./react-content-loader.es-BIBdqkes.js";import"./useIsRTL-YFdiD547.js";import"./useLongestYAxisLabel-afyPUBE8.js";import"./ComposedChart-4enUWbCR.js";import"./Line-tPhMcc61.js";import"./Scatter-Dd0_lYUR.js";import"./index-YlS54TGR.js";import"./index-CKVq6J-W.js";import"./Placeholder-V5kTcxMt.js";import"./index-DMfRsd0K.js";const E=`# @ui5/webcomponents-react-charts

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
