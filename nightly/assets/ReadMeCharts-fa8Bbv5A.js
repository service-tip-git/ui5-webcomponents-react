import{r as i,j as t,O as l}from"./iframe-BclzIqLN.js";import{useMDXComponents as p}from"./index-C905Yc-m.js";import{M as u,a as h,n as f}from"./blocks-B5DwqLl1.js";import"./Tag-BOdn4VYm.js";import"./index-DMn-V0Tk.js";import{F as d}from"./CommandsAndQueries-C-6YnLjZ.js";import"./copy-D_MUueeP.js";import{T as b}from"./TableOfContent-CBpvimzU.js";import{C}from"./index-DuN-qws6.js";import{D}from"./BarChart.stories-Cw0wzU2G.js";import{D as y}from"./BulletChart.stories-gQ24RT_w.js";import{D as g}from"./ColumnChart.stories-Ck6Brhsf.js";import{D as v}from"./ColumnChartWithTrend.stories-DHeHLmlA.js";import{D as x}from"./ComposedChart.stories-BInLlqo3.js";import{D as j}from"./DonutChart.stories-BlqGsQPP.js";import{D as w}from"./LineChart.stories-BiHFi5yR.js";import{D as R}from"./PieChart.stories-z-1Jmole.js";import{D as I}from"./RadarChart.stories-D9zYo8h-.js";import{D as S}from"./RadialChart.stories-CJMhcQVe.js";import{D as $}from"./ScatterChart.stories-CZNJtI80.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BdMHs198.js";import"./sys-enter-2-C5ziAGW-.js";import"./alert-BWh7aIvC.js";import"./index-uVgUJkPs.js";import"./index-OKRhEBZf.js";import"./index-xMZLjYER.js";import"./Link-DPzQ2XbU.js";import"./index-C8ShhJNW.js";import"./index-5TTuORsb.js";import"./index-CJHMJsmF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cdo2Ur2Z.js";import"./addCustomCSSWithScoping-Dte7M2sk.js";import"./index-CnVdbwVS.js";import"./Carousel-4XCgy7yy.js";import"./ScrollEnablement-B33MvuIW.js";import"./animate-JylhYHXj.js";import"./AnimationMode-ClS8vLje.js";import"./slim-arrow-left-CY8l0_6N.js";import"./DemoProps-D4SiuPdp.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DG5SYf_M.js";import"./ChartContainer-DTXL8BE-.js";import"./index-B-2M8oTR.js";import"./useCancelAnimationFallback-B0uM7fAs.js";import"./YAxisTicks-BukkLK4r.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DKthZSHQ.js";import"./ChartDataLabel-DF55aamC.js";import"./useOnClickInternal-CxD9tm0Q.js";import"./react-content-loader.es-Vl50Yiln.js";import"./useIsRTL-BUkTWivW.js";import"./useLongestYAxisLabel-CaeCS1HB.js";import"./ComposedChart-BU9FQMNI.js";import"./Line-CJJpveng.js";import"./Scatter-B-7GVWrP.js";import"./index-CuEPhtDd.js";import"./index-CD0yKjEc.js";import"./Placeholder-Cn3AhdjA.js";import"./index-Do9zfeXh.js";const E=`# @ui5/webcomponents-react-charts

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
