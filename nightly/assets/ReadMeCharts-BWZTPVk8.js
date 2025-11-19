import{r as i,j as t,T as l}from"./iframe-CPcs5bjw.js";import{useMDXComponents as p}from"./index-D3pCSUGP.js";import{M as u,a as h,m as f}from"./blocks-CciAsFaW.js";import"./Tag-BRzUE0pu.js";import"./index-DdCyPygk.js";import{F as d}from"./CommandsAndQueries-BRqm99_0.js";import"./copy-DrEgra2j.js";import{T as b}from"./TableOfContent-PWCR5IjP.js";import{C}from"./index-BByicQRU.js";import{D}from"./BarChart.stories-D3X_-LR3.js";import{D as y}from"./BulletChart.stories-BpmSPtXM.js";import{D as g}from"./ColumnChart.stories-CSrPqqcV.js";import{D as v}from"./ColumnChartWithTrend.stories-DgU7ZljS.js";import{D as x}from"./ComposedChart.stories-BN1Si_7a.js";import{D as j}from"./DonutChart.stories-CcqVuyY0.js";import{D as w}from"./LineChart.stories-DySk6Ne6.js";import{D as R}from"./PieChart.stories-BZ-t-z8W.js";import{D as I}from"./RadarChart.stories-B0XP0mQ5.js";import{D as S}from"./RadialChart.stories-DBJXI5IA.js";import{D as T}from"./ScatterChart.stories-BvJxAWo7.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DGDTMoga.js";import"./sys-enter-2-DPq_4UKR.js";import"./alert-CqgikgLY.js";import"./index-sAPOTiYQ.js";import"./index-DSqRs7NE.js";import"./index-CE-f9LSp.js";import"./Link-CvciZabG.js";import"./index-DbiDsCRE.js";import"./index-DlX2UYU-.js";import"./index-B7pfH-Zg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-MvtR7iaQ.js";import"./addCustomCSSWithScoping-CWQJntcH.js";import"./index-Cumht0xF.js";import"./Carousel-DCPVwZkY.js";import"./ScrollEnablement-C5TvNcLx.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CqJ5reDv.js";import"./slim-arrow-left-CPmUyEqB.js";import"./DemoProps-Ddc--eRG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-PfPvABaf.js";import"./ChartContainer-B-7iU6JS.js";import"./index-DHUEZhQD.js";import"./useCancelAnimationFallback-BiN0KIQG.js";import"./YAxisTicks-UF-Fq2i2.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-EODIl0W6.js";import"./ChartDataLabel-D546n_Wo.js";import"./useOnClickInternal-BNrjTn4G.js";import"./react-content-loader.es-DgDpha0B.js";import"./useIsRTL-CfoWS_vt.js";import"./useLongestYAxisLabel-DMxV0J9z.js";import"./ComposedChart-ozI5PrWz.js";import"./Line-CVBEPxzu.js";import"./Scatter-B1bsFQVe.js";import"./index-rn-sd9q0.js";import"./index-D58c2nZF.js";import"./Placeholder-Bb_BQ-EO.js";import"./index-BiiM9TEw.js";const $=`# @ui5/webcomponents-react-charts

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
