import{q as i,j as t,Q as l}from"./iframe-Yrd5HXiX.js";import{useMDXComponents as p}from"./index-DOxT51h1.js";import{M as u,a as h,n as f}from"./blocks-Dvv2YIoD.js";import"./Tag-A6uWcl63.js";import"./index-BF16G_0e.js";import"./CommandsAndQueries-C2FZOFS4.js";import"./copy-BoNX54Ls.js";import{T as d}from"./TableOfContent-DI8kOImB.js";import{F as b}from"./Footer-CkKCjd3s.js";import"./PageNotFound-kNJyDscw.js";import{C}from"./index-D_jW-bJl.js";import{D}from"./BarChart.stories-0ccTunDh.js";import{D as y}from"./BulletChart.stories-DD3Ldulh.js";import{D as g}from"./ColumnChart.stories-Kh9dWcqx.js";import{D as v}from"./ColumnChartWithTrend.stories-CVIAdT9D.js";import{D as x}from"./ComposedChart.stories-KPKYT1Y_.js";import{D as j}from"./DonutChart.stories-B7pwBPsB.js";import{D as w}from"./LineChart.stories-CjCx9MoN.js";import{D as R}from"./PieChart.stories-DxLwbCvT.js";import{D as I}from"./RadarChart.stories-CIDw6HE-.js";import{D as S}from"./RadialChart.stories-sNRdFvVX.js";import{D as $}from"./ScatterChart.stories-q56ltmr_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BDrQXgLD.js";import"./sys-enter-2-BRBYXqiH.js";import"./alert-BtI3-0Jo.js";import"./Link-Cr8Oti_G.js";import"./index-CfYuYIaa.js";import"./index-BUTU-Rlc.js";import"./index-B2vsuIMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN_dVplC.js";import"./addCustomCSSWithScoping-DB8Behso.js";import"./index-DA96fnb1.js";import"./index-Dz_82eM4.js";import"./index-Sv74Bfia.js";import"./index-CSbojWcx.js";import"./Illustrations-D8i7Iry7.js";import"./i18n-defaults-C7ICj5-E.js";import"./Carousel-DpBNXgIW.js";import"./ScrollEnablement-BBJzN_WO.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CyC-wv9x.js";import"./slim-arrow-left-DlffTGZL.js";import"./DemoProps-DQ0dSu-I.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B2voIB4A.js";import"./ChartContainer-VUYXqZKD.js";import"./index-gHAbPdfd.js";import"./useCancelAnimationFallback-wvOcPU7k.js";import"./YAxisTicks-BXOIxShE.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DmKw46o_.js";import"./ChartDataLabel-BO3A5vrh.js";import"./useOnClickInternal-XpJTXcsG.js";import"./react-content-loader.es-F6xBaOQB.js";import"./useIsRTL-DRlSD9Vi.js";import"./useLongestYAxisLabel-CPMFZ0LS.js";import"./ComposedChart-MImDyVmB.js";import"./Line-DuwhQFEE.js";import"./Scatter-D8NqkPIA.js";import"./index-DmlWe44N.js";import"./index-D1VvaC1U.js";import"./Placeholder-CDyTGYr6.js";import"./index-DkZbiYgf.js";const E=`# @ui5/webcomponents-react-charts

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
