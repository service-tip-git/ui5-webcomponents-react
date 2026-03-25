import{n as i,j as t,N as l}from"./iframe-DGGZytBJ.js";import{useMDXComponents as p}from"./index-D8y7UPZ7.js";import{M as u,a as h,n as f}from"./blocks-C1QAXsZr.js";import"./Tag-ClZ3M_pH.js";import"./index-v17LESiz.js";import"./CommandsAndQueries-D_r1Ov46.js";import"./copy-BPr0Zg61.js";import{T as d}from"./TableOfContent-BSrVScMj.js";import{F as b}from"./Footer-BZbEK1zw.js";import"./PageNotFound-3fOtIs4_.js";import{C}from"./index-B5xPi_tW.js";import{D}from"./BarChart.stories-CjBqiPcL.js";import{D as y}from"./BulletChart.stories-DLycIGQR.js";import{D as g}from"./ColumnChart.stories-CcRqYl3c.js";import{D as v}from"./ColumnChartWithTrend.stories-Bjg2SglJ.js";import{D as x}from"./ComposedChart.stories-CrsRaGUQ.js";import{D as j}from"./DonutChart.stories-Cj5wZ0N4.js";import{D as w}from"./LineChart.stories-DeVy9itF.js";import{D as R}from"./PieChart.stories-DZOH77q8.js";import{D as I}from"./RadarChart.stories-DqC5Zk2G.js";import{D as S}from"./RadialChart.stories-Bw1OuzUD.js";import{D as $}from"./ScatterChart.stories-C04plX8q.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D_lZSOlz.js";import"./sys-enter-2-DzyKamY9.js";import"./alert--InUH-4I.js";import"./Link-BtfuXmst.js";import"./index-DJziCtzG.js";import"./index-CeBSKfFB.js";import"./index-b7sAROVa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEpKqDTh.js";import"./addCustomCSSWithScoping-DahugnlS.js";import"./index-4SX8_eNa.js";import"./index-ctFb2r21.js";import"./index-DZeitEZj.js";import"./index-B54b-1ni.js";import"./Illustrations-BSUAI0rE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Carousel-DlP0ulJH.js";import"./ScrollEnablement-DwIhDXw6.js";import"./animate-JylhYHXj.js";import"./AnimationMode-UXpPn9YA.js";import"./slim-arrow-left-CDJ8E91u.js";import"./DemoProps-BYB6LrKD.js";import"./ThemingParameters-BvhwmbYD.js";import"./staticProps-DjQSfzb-.js";import"./ChartContainer-D1ffI5-f.js";import"./index-n1TR-N6l.js";import"./useCancelAnimationFallback-Bx8uiocg.js";import"./YAxisTicks-Dm6LvFXg.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B5BLIn4F.js";import"./ChartDataLabel-DypkwiEK.js";import"./useOnClickInternal-B41GJtw6.js";import"./react-content-loader.es-C1_UGC1U.js";import"./useIsRTL-BEA5tLHH.js";import"./useLongestYAxisLabel-B8xPiUWg.js";import"./ComposedChart-CAaIepJm.js";import"./Line-BQYFPLxy.js";import"./Scatter-CW2AAJw1.js";import"./index-BdCDu-PF.js";import"./index-D57oF-zf.js";import"./Placeholder-DW1S2gy1.js";import"./index-H1qDy3KP.js";const E=`# @ui5/webcomponents-react-charts

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
`;function T(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),m=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const s=e.current;return s&&o.length&&(r.current=setInterval(()=>{a.current++,s.navigateTo(a.current%o.length)},5e3)),()=>{m()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{m()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(d,{}),`
`,t.jsx(h,{children:E.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(T,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:I},{name:"RadialChart",component:S},{name:"ScatterChart",component:$}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(b,{})]})}function _t(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{_t as default};
