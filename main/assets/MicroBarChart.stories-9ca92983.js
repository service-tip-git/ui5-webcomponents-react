import{j as n}from"./jsx-runtime-d079401a.js";import{T as s}from"./ThemingParameters-7e2e4e30.js";import{e as R}from"./index-99d317a4.js";import{c as H}from"./clsx-1229b3e0.js";import{r as l}from"./index-f1f2c4b1.js";import{c as U}from"./react-jss.esm-2e5f50f2.js";import{a as v,g}from"./defaults-ba92dfaa.js";import{C as $}from"./ChartContainer-8bc51940.js";import{B as K}from"./Placeholder-a1d9078d.js";const J=(a,c=null)=>c?s[c]??c:s[`sapChart_Sequence_${a%11+1}`],Y={container:{display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:s.sapFontFamily,fontWeight:"normal",width:"100%",height:"100%",justifyContent:"space-around"},barContainer:{cursor:"auto"},barContainerActive:{"&:active":{opacity:"0.3 !important"},cursor:"pointer"},labelContainer:{display:"flex",justifyContent:"space-between"},valueContainer:{display:"flex",backgroundColor:s.sapContent_Placeholderloading_Background},valueBar:{height:"100%"},label:{color:s.sapContent_LabelColor,display:"block",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:s.sapFontSmallSize,maxWidth:"70%"},text:{paddingLeft:"6px",display:"inline-block",overflow:"hidden",fontSize:s.sapFontSmallSize,boxSizing:"border-box",whiteSpace:"nowrap",textOverflow:"ellipsis",color:s.sapTextColor,textAlign:"right"}},G=U(Y,{name:"MicroBarChart"}),b=l.forwardRef((a,c)=>{const{loading:N,dataset:t,onDataPointClick:u,style:q,className:L,slot:z,ChartPlaceholder:F,...I}=a,r=G(),C=l.useMemo(()=>({formatter:v,...a.dimension}),[a.dimension]),e=l.useMemo(()=>({formatter:v,...a.measure}),[a.measure]),T=l.useMemo(()=>{if(t){const o=Math.max(...t==null?void 0:t.map(i=>g(i,e.accessor)));return a.maxValue??o}return 0},[t,e,a.maxValue]),O=e!=null&&e.width?`${e.width}px`:"4px",A=l.useCallback((o,i)=>p=>{typeof u=="function"&&u(R(p,{dataKey:e.accessor,value:g(o,e.accessor),payload:o,dataIndex:i}))},[e.accessor,u]),E=H(r.barContainer,u&&r.barContainerActive),{maxValue:Z,dimension:ee,measure:ae,...W}=I;return n.jsx($,{dataset:t,loading:N,Placeholder:F??K,ref:c,style:q,className:L,slot:z,resizeDebounce:250,...W,children:n.jsx("div",{className:r.container,children:t==null?void 0:t.map((o,i)=>{var x;const p=g(o,C.accessor),f=g(o,e.accessor),w=C.formatter(p);let y="";return e.hideDataLabel||(e.DataLabel?y=l.createElement(e.DataLabel,{value:f,config:e,formattedValue:e.formatter(f)}):y=e.formatter(f)),n.jsxs("div",{className:E,onClick:A(o,i),children:[n.jsxs("div",{className:r.labelContainer,children:[n.jsx("span",{className:r.label,title:w,children:w}),n.jsx("span",{className:r.text,title:y,children:e.hideDataLabel?"":y})]}),n.jsx("div",{className:r.valueContainer,style:{opacity:(e==null?void 0:e.opacity)??1,height:O},children:n.jsx("div",{className:r.valueBar,style:{width:`${f/T*100}%`,backgroundColor:J(i,(x=e==null?void 0:e.colors)==null?void 0:x[i])}})})]},p)})})})});b.displayName="MicroBarChart";try{b.displayName="MicroBarChart",b.__docgenInfo={description:"The `MicroBarChart` compares different values of the same category to each other by displaying them in a compact way.",displayName:"MicroBarChart",props:{dimension:{defaultValue:null,description:`A object which contains the configuration of the dimension.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:"dimension",required:!0,type:{name:"IChartDimension"}},measure:{defaultValue:null,description:"An array of config objects. Each object is defining one bar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.\nCan also be a getter.\n\n**Optional properties**\n\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `width`: bar width in pixel, defaults to `4`\n- `opacity`: bar opacity, defaults to `1`\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.\n- `DataLabel`: a custom component to be used for the data label",name:"measure",required:!0,type:{name:"MeasureConfig"}},maxValue:{defaultValue:null,description:`An optional number for the maxValue of the valueBar.
Default is the highest number of the corresponding accessor in the dataset.`,name:"maxValue",required:!1,type:{name:"number"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}const Q={title:"MicroBarChart",component:b,args:{dimension:{accessor:"name"},measure:{accessor:"data"},dataset:[{name:"January",data:100},{name:"February",data:300},{name:"March",data:530},{name:"April",data:200}]},argTypes:{dataset:{control:{disable:!0}}}},d={},h={args:{measure:{accessor:"data",colors:["#f0ab00","var(--sapHighlightColor)"],formatter:a=>a>200?"over 200":"lower",width:16}}},m={args:{dataset:[]}};var S,_,V;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(V=(_=d.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var D,j,k;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'data',
      colors: ['#f0ab00', 'var(--sapHighlightColor)'],
      formatter: d => d > 200 ? 'over 200' : 'lower',
      width: 16
    }
  }
}`,...(k=(j=h.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var B,P,M;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(M=(P=m.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};const X=["Default","WithFormatter","LoadingPlaceholder"],he=Object.freeze(Object.defineProperty({__proto__:null,Default:d,LoadingPlaceholder:m,WithFormatter:h,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{he as C,d as D,m as L,h as W};
//# sourceMappingURL=MicroBarChart.stories-9ca92983.js.map
