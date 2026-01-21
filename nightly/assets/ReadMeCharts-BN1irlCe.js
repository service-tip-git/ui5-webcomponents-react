import{r as i,j as t,T as l}from"./iframe-D9bcJVt0.js";import{useMDXComponents as p}from"./index-DEcJNjgo.js";import{M as u,a as h,n as f}from"./blocks-jEcy0Ls1.js";import"./Tag-S7_09THp.js";import"./index-D7Hu_hwq.js";import{F as d}from"./CommandsAndQueries-e_oDEhyZ.js";import"./copy-BEICJ5u7.js";import{T as b}from"./TableOfContent-De7YMCoa.js";import{C}from"./index-Df1a-fMt.js";import{D}from"./BarChart.stories-BgvLO9Kt.js";import{D as y}from"./BulletChart.stories-Dy_COXFq.js";import{D as g}from"./ColumnChart.stories-C4yNrMK4.js";import{D as v}from"./ColumnChartWithTrend.stories-CAE8S5ZE.js";import{D as x}from"./ComposedChart.stories-B3L349Uz.js";import{D as j}from"./DonutChart.stories-C14Qhaon.js";import{D as w}from"./LineChart.stories-CjSLLKPU.js";import{D as R}from"./PieChart.stories-D8VUQY-l.js";import{D as I}from"./RadarChart.stories-Dj4FSnHZ.js";import{D as S}from"./RadialChart.stories-6YWVqGyK.js";import{D as T}from"./ScatterChart.stories-DMRc-23W.js";import"./preload-helper-PPVm8Dsz.js";import"./information-rD16map1.js";import"./sys-enter-2-mNekXiHd.js";import"./alert-DSYk_cjm.js";import"./index-DF6sI-fG.js";import"./index-CMrwt2SW.js";import"./index-C3UoEV3F.js";import"./Link-Bg4Kb6iX.js";import"./index-o9G_R3kL.js";import"./index-Dsq5N9Gi.js";import"./index-BuSBQB3f.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-saeF9JMt.js";import"./addCustomCSSWithScoping-BvxM2LWg.js";import"./index-CqnXC52g.js";import"./Carousel-BxuFpm8z.js";import"./ScrollEnablement-BWuQyb0_.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CXTa7muF.js";import"./slim-arrow-left-CIRdF-xn.js";import"./DemoProps-BsU3CKhk.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-OAEhYb57.js";import"./ChartContainer-Be_RDsOx.js";import"./index-CZq9Z5fi.js";import"./useCancelAnimationFallback-U4Q9BHcf.js";import"./YAxisTicks-BHiZmwun.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Lo4QNKTr.js";import"./ChartDataLabel-CSPw9u_4.js";import"./useOnClickInternal-BqWxMc-C.js";import"./react-content-loader.es-C_0N1Vxv.js";import"./useIsRTL--5EK8X_4.js";import"./useLongestYAxisLabel-BJolZi5p.js";import"./ComposedChart-CWHKUEwN.js";import"./Line-DxTFC9to.js";import"./Scatter-BMqrJ4F1.js";import"./index-D0xgF877.js";import"./index-DVRrZO7Y.js";import"./Placeholder-Cl4eoY7k.js";import"./index-DFFWmqbu.js";const $=`# @ui5/webcomponents-react-charts

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
