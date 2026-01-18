import{r as i,j as t,T as l}from"./iframe-BayyK-Sd.js";import{useMDXComponents as p}from"./index-Bzssb8Xd.js";import{M as u,a as h,m as f}from"./blocks-C_Hnd7fg.js";import"./Tag-BpBS-AuZ.js";import"./index-CvYFyR11.js";import{F as d}from"./CommandsAndQueries-BWULVlsD.js";import"./copy-DZZbIDUz.js";import{T as b}from"./TableOfContent-DpbYW4FS.js";import{C}from"./index-CmypqIUY.js";import{D}from"./BarChart.stories-BFelmOdu.js";import{D as y}from"./BulletChart.stories-BIp091wJ.js";import{D as g}from"./ColumnChart.stories-O_-LjecQ.js";import{D as v}from"./ColumnChartWithTrend.stories-CJ32_ckv.js";import{D as x}from"./ComposedChart.stories-C-OcIJNC.js";import{D as j}from"./DonutChart.stories-BCKLlipf.js";import{D as w}from"./LineChart.stories-Bl1457oH.js";import{D as R}from"./PieChart.stories-DUzocCrk.js";import{D as I}from"./RadarChart.stories-huThgin0.js";import{D as S}from"./RadialChart.stories-NJYylh5U.js";import{D as T}from"./ScatterChart.stories-CUaXcQtt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D5ng3oI8.js";import"./sys-enter-2-C1yPBG5C.js";import"./alert-C5buViQ-.js";import"./index-BiVk4GbQ.js";import"./index-DV2g_43r.js";import"./index-D_W1qX2w.js";import"./Link-DsRy4Mnv.js";import"./index-CTxam_11.js";import"./index-CvVYJJGO.js";import"./index-DGVYbyp5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CiI3G7zh.js";import"./addCustomCSSWithScoping-BRKADkGf.js";import"./index-CK9HJhHW.js";import"./Carousel-DID7GCd9.js";import"./ScrollEnablement-b9VRk5D0.js";import"./animate-JylhYHXj.js";import"./AnimationMode-TkizVjhX.js";import"./slim-arrow-left-C2W4EiL-.js";import"./DemoProps-LmghqOK2.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BQY8CZjt.js";import"./ChartContainer-BkIvWUy1.js";import"./index-BovCb11M.js";import"./useCancelAnimationFallback-BjoHBzEs.js";import"./YAxisTicks-ZkvPTUjW.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BysV88Au.js";import"./ChartDataLabel-BoUQruSM.js";import"./useOnClickInternal-prZtctE4.js";import"./react-content-loader.es-B_h3WJ5T.js";import"./useIsRTL-DlVbLN3l.js";import"./useLongestYAxisLabel-h1X0uVIz.js";import"./ComposedChart-vEVGKia8.js";import"./Line-DOvqlSr3.js";import"./Scatter-Cg6T1bv7.js";import"./index-CvSscfrr.js";import"./index-CL1vH7tL.js";import"./Placeholder-DjIvikn4.js";import"./index-DA6dqC1L.js";const $=`# @ui5/webcomponents-react-charts

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
