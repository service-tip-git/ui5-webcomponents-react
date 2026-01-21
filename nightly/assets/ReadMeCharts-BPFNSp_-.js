import{r as i,j as t,T as l}from"./iframe-Crk1dOR8.js";import{useMDXComponents as p}from"./index-R8jXtLED.js";import{M as u,a as h,n as f}from"./blocks-DC75RB67.js";import"./Tag-Bw7tKX4O.js";import"./index-CACmyy9p.js";import{F as d}from"./CommandsAndQueries-OnXJs0rK.js";import"./copy-D_VyToZg.js";import{T as b}from"./TableOfContent-f1HaFCSH.js";import{C}from"./index-CHwhKb6C.js";import{D}from"./BarChart.stories-D3-rmx8b.js";import{D as y}from"./BulletChart.stories-CbLnLcSa.js";import{D as g}from"./ColumnChart.stories-BmEp6hmK.js";import{D as v}from"./ColumnChartWithTrend.stories-B3qmas3R.js";import{D as x}from"./ComposedChart.stories-CnXY_kVu.js";import{D as j}from"./DonutChart.stories-I93yzRuF.js";import{D as w}from"./LineChart.stories-BHr9ev_J.js";import{D as R}from"./PieChart.stories-CBRTAkqS.js";import{D as I}from"./RadarChart.stories-CPAlMvsG.js";import{D as S}from"./RadialChart.stories-B_vbaO-P.js";import{D as T}from"./ScatterChart.stories-BHXZlu0T.js";import"./preload-helper-PPVm8Dsz.js";import"./information-YuxwihY0.js";import"./sys-enter-2-DLpc5Bbk.js";import"./alert-BQrPd1lR.js";import"./index-F2nIq42R.js";import"./index-D2r_hMST.js";import"./index-K2kHsFSd.js";import"./Link-BHKq5JFv.js";import"./index-DvoETnoE.js";import"./index-CmobNXn6.js";import"./index-BW0zluCU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCgdgzPV.js";import"./addCustomCSSWithScoping-DLDk5l5Q.js";import"./index-DhFJLS7i.js";import"./Carousel-BRHMEJR7.js";import"./ScrollEnablement-CgGNqNYL.js";import"./animate-JylhYHXj.js";import"./AnimationMode-RY6DjNmR.js";import"./slim-arrow-left-Dz4hkO8h.js";import"./DemoProps-D6tTfV2x.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BI69jYgb.js";import"./ChartContainer-_6WFhR5j.js";import"./index-FAzfBcds.js";import"./useCancelAnimationFallback-CBPKKBHe.js";import"./YAxisTicks-DRt-jaBG.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BpP_ceNz.js";import"./ChartDataLabel-DjgxAqQm.js";import"./useOnClickInternal-Hqb58Qy4.js";import"./react-content-loader.es-CpJcMynu.js";import"./useIsRTL-CEOwLdyi.js";import"./useLongestYAxisLabel-CNhmZKYn.js";import"./ComposedChart-B52dACmS.js";import"./Line-DWc6PrJL.js";import"./Scatter-BiVxCeL1.js";import"./index-UFgVRomN.js";import"./index-7jDOKWlQ.js";import"./Placeholder-T4pXJnUr.js";import"./index-B8NU9XF0.js";const $=`# @ui5/webcomponents-react-charts

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
