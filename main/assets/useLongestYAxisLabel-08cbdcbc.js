import{r as i}from"./index-f1f2c4b1.js";import{g as l,d as n}from"./defaults-9e594c9b.js";import{g as p}from"./useTooltipFormatter-f4f6bce2.js";const u=(r,t)=>i.useMemo(()=>{let a=0;const e=t[0];if(r instanceof Array&&e){const o=s=>t.map(m=>e.formatter(l(s,m.accessor,"")));a=Math.max(...r.map(o).flat().map(p)),a+=8}return a=Math.min(a,n),[a,{marginLeft:a,maxWidth:`calc(100% - ${a+10}px)`}]},[r,t]);export{u};
//# sourceMappingURL=useLongestYAxisLabel-08cbdcbc.js.map
