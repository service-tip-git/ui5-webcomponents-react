import{r as o}from"./index-RYns6xqu.js";import{j as d}from"./jsx-runtime-DEdD30eg.js";import{T as i}from"./ThemingParameters-DOkJX3Ed.js";import{g as s}from"./useTooltipFormatter-B0hS8Vxy.js";import{m as c}from"./ChartContainer-BfBNQHTg.js";const h=e=>o.useCallback(a=>e&&typeof e.formatter=="function"?e.formatter(a):a,[e]),t=e=>{const{config:a,chartType:r,viewBox:l}=e;if(a.hideDataLabel)return null;if(a.DataLabel)return o.createElement(a.DataLabel,e);const n=a.formatter(e.value??e.children);if((r==="bar"||r==="column")&&(Math.abs(l.width)<s(n)||Math.abs(l.height)<12))return null;let u=i.sapContent_ContrastTextColor;return["area","line","radar"].includes(r)&&(u=i.sapTextColor),d.jsx(c,{viewBox:l,...e,fill:u,stroke:"none",content:void 0,value:n})};try{t.displayName="ChartDataLabel",t.__docgenInfo={description:"",displayName:"ChartDataLabel",props:{config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},viewBox:{defaultValue:null,description:"",name:"viewBox",required:!1,type:{name:"any"}},chartType:{defaultValue:null,description:"",name:"chartType",required:!0,type:{name:"enum",value:[{value:'"area"'},{value:'"bar"'},{value:'"column"'},{value:'"line"'},{value:'"radar"'},{value:'"pie"'}]}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}}}}}catch{}try{t.displayName="ChartDataLabel",t.__docgenInfo={description:"",displayName:"ChartDataLabel",props:{config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},viewBox:{defaultValue:null,description:"",name:"viewBox",required:!1,type:{name:"any"}},chartType:{defaultValue:null,description:"",name:"chartType",required:!0,type:{name:"enum",value:[{value:'"area"'},{value:'"bar"'},{value:'"column"'},{value:'"line"'},{value:'"radar"'},{value:'"pie"'}]}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}}}}}catch{}export{t as C,h as u};
