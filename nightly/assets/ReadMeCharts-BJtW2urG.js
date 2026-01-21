import{r as i,j as t,T as l}from"./iframe-DYfg4QHt.js";import{useMDXComponents as p}from"./index-CVbrUuPE.js";import{M as u,a as h,n as f}from"./blocks-BUAqhVj9.js";import"./Tag-DSyohh1a.js";import"./index-BmTrkp-7.js";import{F as d}from"./CommandsAndQueries-Bv0cgQmk.js";import"./copy-D6hWl56-.js";import{T as b}from"./TableOfContent-nE7A35u3.js";import{C}from"./index-maOeHgJX.js";import{D}from"./BarChart.stories-3MUMmR7L.js";import{D as y}from"./BulletChart.stories-SVu53nUm.js";import{D as g}from"./ColumnChart.stories-7Lg4agML.js";import{D as v}from"./ColumnChartWithTrend.stories-BOHwFRdl.js";import{D as x}from"./ComposedChart.stories-DQlczitf.js";import{D as j}from"./DonutChart.stories-BSYTJHEt.js";import{D as w}from"./LineChart.stories-DDZdH9CF.js";import{D as R}from"./PieChart.stories-HzRQUXBc.js";import{D as I}from"./RadarChart.stories-Cf-hk9Tp.js";import{D as S}from"./RadialChart.stories-CWuV6miK.js";import{D as T}from"./ScatterChart.stories-FcWyaL2C.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DmJ60sG9.js";import"./sys-enter-2-DM66m4rJ.js";import"./alert-CCfcH-Mh.js";import"./index-B7hJqHh2.js";import"./index-BKQsUqka.js";import"./index-Cey_WqgE.js";import"./Link-DNgH-frF.js";import"./index-DHfPdgXp.js";import"./index-DGISTYKI.js";import"./index-91p8b6xm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN-x3Tox.js";import"./addCustomCSSWithScoping-D5zE1nWM.js";import"./index-Cmi2IW4V.js";import"./Carousel-Bg1VI-23.js";import"./ScrollEnablement-CNfKzKUR.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BueryKPf.js";import"./slim-arrow-left-BR2AerwB.js";import"./DemoProps-CTEKdkfo.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BzFOHR7i.js";import"./ChartContainer-VMYi1tjr.js";import"./index-C0HSA-PR.js";import"./useCancelAnimationFallback-D4f-uZHT.js";import"./YAxisTicks-C5fiZT5e.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DG5wCNF1.js";import"./ChartDataLabel-odNeDAs_.js";import"./useOnClickInternal-CErw8qgy.js";import"./react-content-loader.es-CGmiNfTY.js";import"./useIsRTL-CSLDn2Wo.js";import"./useLongestYAxisLabel-Cj2L8CLJ.js";import"./ComposedChart-B9Xe7zd6.js";import"./Line-BlfasLW7.js";import"./Scatter-D0y8J397.js";import"./index-BofNhmCd.js";import"./index-CWCKEA6W.js";import"./Placeholder-Cm1oSLW6.js";import"./index-7WCoY0Ke.js";const $=`# @ui5/webcomponents-react-charts

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
