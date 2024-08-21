import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-Dh6gXYrE.js";import"./useIsomorphicLayoutEffect-7J8kFyWS.js";import"./index-RYns6xqu.js";import"./index-C-Zfmu7Z.js";import"./clsx-B-dksMZM.js";import"./defaults-eM314tqi.js";import"./ChartContainer-CRwkJWdq.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./addCustomCSSWithScoping-BR-0f_u5.js";import"./withWebComponent-GNT2PXey.js";import"./utils-CcgiHsei.js";import"./debounce-J-oijQ3B.js";import"./isString-DRmlqCDy.js";import"./useStylesheet-BgRQTyXM.js";import"./index-CuZdT3La.js";import"./iframe-Bc4Os9Yd.js";import"../sb-preview/runtime.js";import"./BusyIndicator-BRwQ1wd3.js";import"./i18nBundle-BqO_ndMU.js";import"./Keys-F_3Gvx0K.js";import"./Label-emsTVYba.js";import"./i18n-defaults-BaleIpCT.js";import"./if-defined-B9dCEi48.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./class-map-_G2Y84x0.js";import"./index-CySIBtOy.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-jtk3W8EM.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-CrvD_ZAc.js";import"./Placeholder-B4aMXXXR.js";import"./generateCategoricalChart-KqJSLLcF.js";import"./isPlainObject-DGiVfQEi.js";import"./_getPrototype-DY0Wt4dR.js";import"./_baseAssignValue-PZ39NPQP.js";import"./react-content-loader.es-DAsmkmNP.js";const cr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},a={args:{dataset:[]}},t={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var n,p,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)']
    }
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,d,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,f,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      formatter: d => d > 200 ? 'over 200' : 'lower'
    },
    chartConfig: {
      activeSegment: 1,
      showActiveSegmentDataLabel: true
    }
  }
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var C,v,D;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      hideDataLabel: chartConfig => {
        if (chartConfig.percent < 0.01) {
          return true;
        }
      }
    },
    dataset: simpleDataSetWithSmallValues
  }
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const nr=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","HideLabels"];export{r as Default,o as HideLabels,a as LoadingPlaceholder,e as WithCustomColor,t as WithFormatter,nr as __namedExportsOrder,cr as default};
