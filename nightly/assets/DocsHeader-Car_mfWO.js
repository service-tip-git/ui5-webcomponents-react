import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./chunk-NUUEMKO5-B_zumTDy.js";import{ap as v,aq as _,ai as k,ak as g}from"./index-CG1wcaP_.js";import{B as d}from"./Button-BOw4gYNT.js";import{M as N,a as I}from"./index-D9yJfDXX.js";import{c as h}from"./copy-D2YPqkc4.js";import"./index-CL-wTz91.js";import{c as u}from"./clsx-B-dksMZM.js";import{r as y}from"./index-RYns6xqu.js";import{u as L}from"./utils-pEFwuXUa.js";import{G as D}from"./GitHub-Mark-DGRwmqGf.js";import{a as j}from"./CommandsAndQueries-D6n3lYyA.js";import{T as q}from"./TableOfContent-TNI-4ed_.js";import{T as F}from"./index-CcGOaHIc.js";import{F as G,c as M}from"./index-DmoPyW9s.js";import{L as b}from"./index-CUAyzcJr.js";import{L as c}from"./index-D5soTVf3.js";import{B as f}from"./index-DYGApiRr.js";import{T as A}from"./index-jVoXpPWr.js";const H="_infoTable_2qh1m_1",E="_copyBtn_2qh1m_20",O="_hoverTr_2qh1m_27",i={infoTable:H,copyBtn:E,hoverTr:O},$=()=>{const e=y.useContext(g).componentStories().at(0).id.startsWith("charts-"),o="https://github.com/SAP/ui5-webcomponents-react",n=`@ui5/webcomponents-react${e?"-charts":""}`;return t.jsxs(t.Fragment,{children:[t.jsx(b,{href:`https://www.npmjs.com/package/${n}`,children:t.jsx("img",{alt:"npm badge",src:`https://badgen.net/npm/v/${n}?icon=npm&label=&color=blue`})}),"   ",t.jsx(b,{title:"View On GitHub",href:o,children:t.jsx(D,{})})]})},P=({since:s,subComponents:e,mergeSubComponents:o})=>{const l=y.useContext(g).componentStories().at(0).kind.split("/"),T=l[l.length-1].replace("(experimental)","").trim(),m=L(T.replace("V2","")),p=o?[...e??[],...m??[]]:e??m,r=typeof ClipboardItem<"u",x=async C=>{const a=C.currentTarget.parentElement.querySelector("[data-import]");if(r&&a){const w=new Blob([a.outerHTML],{type:"text/html"}),B=new Blob([a.outerText],{type:"text/plain"}),S=new ClipboardItem({"text/html":w,"text/plain":B});await navigator.clipboard.write([S])}};return t.jsx("table",{className:i.infoTable,children:t.jsxs("tbody",{children:[t.jsxs("tr",{className:i.hoverTr,children:[t.jsx("th",{children:t.jsx(c,{children:"Usage"})}),t.jsxs("td",{"data-import-cell":r,children:[t.jsx(j,{}),r&&t.jsx(f,{design:d.Transparent,className:u("ui5-content-density-compact",i.copyBtn),onClick:x,icon:h,tooltip:"copy"})]})]}),s&&t.jsxs("tr",{children:[t.jsx("th",{children:t.jsx(c,{children:"Available since"})}),t.jsx("td",{children:t.jsx(A,{children:s})})]}),!!p.length&&t.jsxs("tr",{className:i.hoverTr,children:[t.jsx("th",{children:t.jsx(c,{children:"Subcomponents"})}),t.jsxs("td",{"data-import-cell":r,children:[t.jsx(j,{moduleNames:p}),r&&t.jsx(f,{design:d.Transparent,className:u("ui5-content-density-compact",i.copyBtn),onClick:x,icon:h,tooltip:"copy"})]})]})]})})},ct=({since:s,subComponents:e,mergeSubComponents:o,isChart:n})=>t.jsxs(F,{children:[t.jsxs(G,{alignItems:M.Center,children:[t.jsx(v,{}),t.jsx("span",{style:{flexGrow:1}}),t.jsx($,{})]}),t.jsx(_,{}),t.jsx(P,{since:s,subComponents:e,mergeSubComponents:o}),t.jsx(q,{}),t.jsx(k,{}),n&&t.jsxs(t.Fragment,{children:[t.jsx(N,{hideCloseButton:!0,design:I.Critical,children:"Charts only offer limited accessibility support with only basic built-in features, so it’s essential to ensure your implementation meets the accessibility standards of your application."}),t.jsx("br",{}),t.jsx("br",{})]})]});export{ct as D};
