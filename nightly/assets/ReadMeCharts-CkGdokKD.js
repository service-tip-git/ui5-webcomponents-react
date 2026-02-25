import{r as i,j as t,O as l}from"./iframe-BWDYb3Af.js";import{useMDXComponents as p}from"./index-ORMlrOnf.js";import{M as u,a as h,n as f}from"./blocks-B8FJqnZy.js";import"./Tag-BIMutbIq.js";import"./index-Dolwn4re.js";import{F as d}from"./CommandsAndQueries-CZ5MS_my.js";import"./copy-weALSuoF.js";import{T as b}from"./TableOfContent-BwLnYJWn.js";import{C}from"./index-igbq4TYU.js";import{D}from"./BarChart.stories-BIdnbcdO.js";import{D as y}from"./BulletChart.stories-D0aK2wrb.js";import{D as g}from"./ColumnChart.stories-DnmilEke.js";import{D as v}from"./ColumnChartWithTrend.stories-DvWQo0t_.js";import{D as x}from"./ComposedChart.stories-DDZKX_bG.js";import{D as j}from"./DonutChart.stories-CZYR9Tv3.js";import{D as w}from"./LineChart.stories-Bk12net-.js";import{D as R}from"./PieChart.stories-Dqfj_6xF.js";import{D as I}from"./RadarChart.stories-QwWG_93e.js";import{D as S}from"./RadialChart.stories-D0rxVrCi.js";import{D as $}from"./ScatterChart.stories-qhVbyUOt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BiNCCmk0.js";import"./sys-enter-2-D_DUss_0.js";import"./alert-mysBcZzV.js";import"./index-D3Oal-l-.js";import"./index-BHXKA4z_.js";import"./index-Dz7IZliI.js";import"./Link-DcGHp14a.js";import"./index-CxNU_raA.js";import"./index-CO7aikHi.js";import"./index-_k1TaEpY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-wjVhlBmy.js";import"./addCustomCSSWithScoping-BLKtnAI1.js";import"./index-DF6wuqqy.js";import"./Carousel-DQ0jmvwJ.js";import"./ScrollEnablement-CqDxSJRv.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dt2o-W4h.js";import"./slim-arrow-left-D4i_Up4o.js";import"./DemoProps-BWe8vpJh.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-KLZpHWlr.js";import"./ChartContainer-CiuxaFng.js";import"./index-cBcbMXT4.js";import"./useCancelAnimationFallback-Bh47lPOM.js";import"./YAxisTicks-BauqRAOE.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DSRwhL8i.js";import"./ChartDataLabel-DTKCdvnM.js";import"./useOnClickInternal-DqhXz3nm.js";import"./react-content-loader.es-6uNM4qE_.js";import"./useIsRTL-CUtE-sIq.js";import"./useLongestYAxisLabel-CsOx9pu1.js";import"./ComposedChart-BbXs-5Iq.js";import"./Line-D-OgPH0i.js";import"./Scatter-DneIxjhV.js";import"./index-KUJBWTgX.js";import"./index-DgSWO46x.js";import"./Placeholder-BjthVqQY.js";import"./index-DcqTFfU1.js";const E=`# @ui5/webcomponents-react-charts

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
