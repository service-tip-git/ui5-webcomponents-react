import{r as i}from"./index-ebeaab24.js";import{g as l,d as n}from"./defaults-25c347a5.js";import{g as p}from"./useTooltipFormatter-9c299c20.js";const u=(r,t)=>i.useMemo(()=>{let a=0;const e=t[0];if(r instanceof Array&&e){const o=s=>t.map(m=>e.formatter(l(s,m.accessor,"")));a=Math.max(...r.map(o).flat().map(p)),a+=8}return a=Math.min(a,n),[a,{marginLeft:a,maxWidth:`calc(100% - ${a+10}px)`}]},[r,t]);export{u};
//# sourceMappingURL=useLongestYAxisLabel-01aea346.js.map
