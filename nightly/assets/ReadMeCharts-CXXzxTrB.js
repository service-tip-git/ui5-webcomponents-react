import{r as i,j as t,O as l}from"./iframe-OB3gpUrt.js";import{useMDXComponents as p}from"./index-tYZXwc8M.js";import{M as u,a as h,n as f}from"./blocks-W1zrio7-.js";import"./Tag-BYZWsksY.js";import"./index-DTbk-QpW.js";import{F as d}from"./CommandsAndQueries-DdKCqOgb.js";import"./copy-Cn9jluxF.js";import{T as b}from"./TableOfContent-DAOkSQEr.js";import{C}from"./index-RDX7_Ifn.js";import{D}from"./BarChart.stories-CLCywPYI.js";import{D as y}from"./BulletChart.stories-DJ-rNeFN.js";import{D as g}from"./ColumnChart.stories-DLlx3IWs.js";import{D as v}from"./ColumnChartWithTrend.stories-B5a0EeDR.js";import{D as x}from"./ComposedChart.stories-BsoEwyHh.js";import{D as j}from"./DonutChart.stories-DiQefzWp.js";import{D as w}from"./LineChart.stories-BJkfqwpJ.js";import{D as R}from"./PieChart.stories-B_cxLmbN.js";import{D as I}from"./RadarChart.stories-Dkm5gyIy.js";import{D as S}from"./RadialChart.stories--yHeusMX.js";import{D as $}from"./ScatterChart.stories-BqIqsMlW.js";import"./preload-helper-PPVm8Dsz.js";import"./information-EFB093TQ.js";import"./sys-enter-2-BDVh3TOJ.js";import"./alert-kdfQmJam.js";import"./index-YBnae26q.js";import"./index-DJjROlPg.js";import"./index-KwKt-eeL.js";import"./Link-04tQrlfI.js";import"./index-DeGKliVC.js";import"./index-CGtjIa9c.js";import"./index-BZk-qSok.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B6If5ETY.js";import"./addCustomCSSWithScoping-DcUbYumu.js";import"./index-DSe1Jsyu.js";import"./Carousel-DMH_JLiN.js";import"./ScrollEnablement-FujgOftY.js";import"./animate-JylhYHXj.js";import"./AnimationMode-mJdkod0A.js";import"./slim-arrow-left-DYmOoTpt.js";import"./DemoProps-B2AkaPOq.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-c7Z8yY_p.js";import"./ChartContainer-C7a07DUu.js";import"./index-BI78Dgdb.js";import"./useCancelAnimationFallback-C0UGfxp_.js";import"./YAxisTicks-B8zdHh8z.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BbnMsI-e.js";import"./ChartDataLabel-8YP5UE5s.js";import"./useOnClickInternal-X5NGhw6T.js";import"./react-content-loader.es-C3v3SjXT.js";import"./useIsRTL-MRQZvrlb.js";import"./useLongestYAxisLabel-DluSauH7.js";import"./ComposedChart-DgIDdoWT.js";import"./Line-Bv6knSPU.js";import"./Scatter-Cbnt6pjE.js";import"./index-CqXfd-fX.js";import"./index-Bt8oFS2X.js";import"./Placeholder-v7gG6Owc.js";import"./index-B3V9EZCJ.js";const E=`# @ui5/webcomponents-react-charts

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
