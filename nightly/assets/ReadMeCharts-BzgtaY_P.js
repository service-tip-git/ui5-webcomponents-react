import{r as i,j as t,O as l}from"./iframe-DnQpmgA6.js";import{useMDXComponents as p}from"./index-m6rQOag9.js";import{M as u,a as h,n as f}from"./blocks-DIAHYmsO.js";import"./Tag-CCLxzbm_.js";import"./index-BNSawElR.js";import{F as d}from"./CommandsAndQueries-DCeHCX1A.js";import"./copy-fbHgidly.js";import{T as b}from"./TableOfContent-Q5nbcx9A.js";import{C}from"./index-lp0IkKT5.js";import{D}from"./BarChart.stories-BXBWUmPu.js";import{D as y}from"./BulletChart.stories-CP6VIruZ.js";import{D as g}from"./ColumnChart.stories-C8BPnEsT.js";import{D as v}from"./ColumnChartWithTrend.stories-DRR0CWSG.js";import{D as x}from"./ComposedChart.stories-BIz28-MJ.js";import{D as j}from"./DonutChart.stories-ssyOSsUc.js";import{D as w}from"./LineChart.stories-D09OeewY.js";import{D as R}from"./PieChart.stories-Dv6G5vU5.js";import{D as I}from"./RadarChart.stories-DuhHWb3e.js";import{D as S}from"./RadialChart.stories-9cZPThZc.js";import{D as $}from"./ScatterChart.stories-hatb-Xmb.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Dr8YEhs5.js";import"./sys-enter-2-Bl9jtIfu.js";import"./alert-DI-0b8x_.js";import"./index-BqBVEfNK.js";import"./index-B_h56NIO.js";import"./index-DqLOis9Y.js";import"./Link-TucI8b8Q.js";import"./index-DqMOHWxY.js";import"./index-C-imFhL9.js";import"./index-L15nOwrJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2yHaKcn.js";import"./addCustomCSSWithScoping-DBwRz57F.js";import"./index-DxN0YEHZ.js";import"./Carousel-C4krXIxs.js";import"./ScrollEnablement-Vy5r4Z-H.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BU7R7PUX.js";import"./slim-arrow-left-BX0CORjj.js";import"./DemoProps-BRBLrzss.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-_-CKcVaa.js";import"./ChartContainer-CyLxdM9Z.js";import"./index-C89oEcpH.js";import"./useCancelAnimationFallback-ckhITUvu.js";import"./YAxisTicks-Cy0Ro8E_.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CuH8Ddum.js";import"./ChartDataLabel-B_1c1MhG.js";import"./useOnClickInternal-DQZ100Ve.js";import"./react-content-loader.es-D1I03EZz.js";import"./useIsRTL-djYEqh-T.js";import"./useLongestYAxisLabel-BVHsOsVN.js";import"./ComposedChart-CGW2Yxss.js";import"./Line-C5og1YHL.js";import"./Scatter-B78JkzWq.js";import"./index-DTLEgmZh.js";import"./index-D7T_jPC8.js";import"./Placeholder-Dv4e_Btr.js";import"./index-CH_ekI2L.js";const E=`# @ui5/webcomponents-react-charts

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
