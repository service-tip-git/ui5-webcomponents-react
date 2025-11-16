import{r as i,j as t,T as l}from"./iframe-DQawrgT_.js";import{useMDXComponents as p}from"./index-BmmNdxGP.js";import{M as u,a as h,m as f}from"./blocks-CsjIrgm8.js";import"./Tag-DINZ5J-5.js";import"./index-CkLsOSwH.js";import{F as d}from"./CommandsAndQueries-8E8N5Jf5.js";import"./copy-BfmM2Dw-.js";import{T as b}from"./TableOfContent-BnjWWac5.js";import{C}from"./index-BK0X3zXL.js";import{D}from"./BarChart.stories-dijRdvzs.js";import{D as y}from"./BulletChart.stories-D0K8eIrq.js";import{D as g}from"./ColumnChart.stories-COlEkBOu.js";import{D as v}from"./ColumnChartWithTrend.stories-Bn1ytJWY.js";import{D as x}from"./ComposedChart.stories-BH8QIQWn.js";import{D as j}from"./DonutChart.stories-BM2hIPJG.js";import{D as w}from"./LineChart.stories-Cpn0_m-i.js";import{D as R}from"./PieChart.stories-CHW0H-Eo.js";import{D as I}from"./RadarChart.stories-6b8VQzrC.js";import{D as S}from"./RadialChart.stories-C0dEXf0s.js";import{D as T}from"./ScatterChart.stories-D5BCNUtR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DvV6iDHk.js";import"./sys-enter-2-DVOKgY3M.js";import"./alert-D1Pqx8x8.js";import"./index--1fmb9ws.js";import"./index-CaSLC49k.js";import"./index-lL1wxGfG.js";import"./Link-QZkGNwXr.js";import"./index-C4mOCO1v.js";import"./index-BpUdR17T.js";import"./index-DXw92D-i.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D6QKJZ6-.js";import"./addCustomCSSWithScoping-CIoyfOLu.js";import"./index-DkjHlZC9.js";import"./Carousel-BDzVzcNv.js";import"./ScrollEnablement-CFUBLAVD.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DOADsfYf.js";import"./slim-arrow-left--1Qf_Udh.js";import"./DemoProps-COY8wDcB.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-wegSND7m.js";import"./ChartContainer-DlygsTD3.js";import"./index-B7bKPaYO.js";import"./useCancelAnimationFallback-BYCi_6xP.js";import"./YAxisTicks-rwYPK13T.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-qa6l161l.js";import"./ChartDataLabel-ve95jkxB.js";import"./useOnClickInternal-k-VNZVja.js";import"./react-content-loader.es-BegGkLWJ.js";import"./useIsRTL-B1ti3bb-.js";import"./useLongestYAxisLabel-BRIyeysz.js";import"./ComposedChart-Uomf5sYI.js";import"./Line-vdylY7gR.js";import"./Scatter-DkeF9s8K.js";import"./index-C4ZRJuGy.js";import"./index-Cxocxej4.js";import"./Placeholder-WldY6Rp7.js";import"./index-E_kEOBZa.js";const $=`# @ui5/webcomponents-react-charts

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
