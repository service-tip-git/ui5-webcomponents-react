import{j as t}from"./jsx-runtime-d079401a.js";import{q as g,A as u,r as f,k as C}from"./chunk-S4VUQJ4A-439e91d3.js";import{r as d}from"./index-f1f2c4b1.js";import{c as x}from"./react-jss.esm-2e5f50f2.js";import{M as l,a as m}from"./index-a597240d.js";import{T as b}from"./index-743fc8f1.js";import{a as T}from"./addCustomCSSWithScoping-203b56de.js";import{C as j}from"./index-036d6662.js";import{A as S}from"./index-41f46b2e.js";import{C as y}from"./index-36550905.js";import{L}from"./index-cea49163.js";import{L as N}from"./Link-a373b451.js";const w=x({tableContainer:{marginTop:"25px","& table":{marginTop:"0 !important"}},strip:{marginBottom:"10px"}}),M=e=>{const{hideHTMLPropsNote:s,noteText:r,hideTabContainer:o,...a}=e,i=w(),c=d.useRef(null);return d.useEffect(()=>{var n,h;const p=(h=(n=c.current)==null?void 0:n.querySelector("#panel-tab-content"))==null?void 0:h.previousElementSibling;o&&p&&(p.style.display="none")},[]),s?t.jsx(g,{...a}):t.jsxs("div",{className:i.tableContainer,ref:c,children:[t.jsx(l,{design:m.Information,hideCloseButton:!0,className:i.strip,children:r??"This component supports all HTML attributes."}),t.jsx(g,{...a})]})};M.displayName="ArgsTableWithNote";const B=x({tableContainer:{marginTop:"25px","& table":{marginTop:"0 !important"}},strip:{marginBottom:"10px"}});function ot(e){const{hideHTMLPropsNote:s,noteText:r,...o}=e,a=B();return s?t.jsx(u,{...o}):t.jsxs("div",{className:a.tableContainer,children:[t.jsx(l,{design:m.Information,hideCloseButton:!0,className:a.strip,children:r??"This component supports all HTML attributes."}),t.jsx(u,{...o})]})}const _=x({tableContainer:{marginTop:"25px","& table":{marginTop:"0 !important"}},strip:{marginBottom:"10px"}});function rt(e){const{hideHTMLPropsNote:s,noteText:r,...o}=e,a=_();return s?t.jsx(f,{...o}):t.jsxs("div",{className:a.tableContainer,children:[t.jsx(l,{design:m.Information,hideCloseButton:!0,className:a.strip,children:r??"This component supports all HTML attributes."}),t.jsx(f,{...o})]})}const D=({moduleName:e,packageName:s})=>t.jsx("pre",{style:{display:"contents",overflowX:"auto",padding:"0px",background:"white",color:"black",whiteSpace:"pre-wrap",fontSize:"14px",margin:"0px"},children:t.jsxs("code",{style:{whiteSpace:"pre"},children:[t.jsx("span",{style:{color:"rgb(0, 0, 136)",fontSize:"14px"},children:"import"}),t.jsxs("span",{style:{fontSize:"14px"},children:[" ","{"," ",e," ","}"," "]}),t.jsx("span",{style:{color:"rgb(0, 0, 136)",fontSize:"14px"},children:"from"}),t.jsx("span",{children:" "}),t.jsx("span",{style:{color:"rgb(0, 136, 0)",fontSize:"14px"},children:s}),t.jsx("span",{style:{fontSize:"14px"},children:";"})]})}),E=()=>{const e=d.useContext(C),s=e.componentStories().at(0).id.startsWith("charts-"),r=e.componentStories().at(0).kind.split("/"),o=r[r.length-1].replace("(experimental)","").trim();return t.jsx(D,{moduleName:o,packageName:`'@ui5/webcomponents-react${s?"-charts":""}'`})};E.displayName="Import";const v="_header_3q1lz_1",z="_fixedContainer_3q1lz_7",Y="_toc_3q1lz_10",at={header:v,fixedContainer:z,toc:Y},k="_footer_1xqg2_1",q="_content_1xqg2_9",nt={footer:k,content:q},O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAolBMVEUAAAAxeMYwd8UwcM8weMUwd8cweccweMQwd78yeMcxecUwd8Uxd8UxecYxeMUwcL9+q9t+qtxXktDm7veYu+PY5fWyzOlxothlmdRYkdBLiM2+1e1yodjZ5vS/1ezL3fHM3fCYu+Ll7vjy9/vY5vRkmtSlw+ayzOpyothKic2lxOZLic2Ls9+/1e3Z5fSlw+c+gMqLs96YvOKxzOr///8xeMYqO335AAAAEHRSTlMA34AQvyBfYCB/z8/Pz78Qi8soFQAAAk5JREFUeF7szsENgDAQBLE5HhCkkFSz/beGKALdZ1yBgX2vtHhOPqPSpgZQaVSbK60OZlot0oz8xYABAwYMGDBgwIABAwYMGDBgwIABAwYMGDDwtm8nO1LDQACGQ8OABNLQ2XpdnJTHA8YGTLr8/q/GcsJTJmkO5br0f26pP1k+VEVy2Pvvxx40/kpDr47jaX8bAP8/Ajh0SmMmNe5LAD6rGSxYbsAOcDbDCwgKURLQAIoCGo2iAKdRFOAAZQGfUBbgUBhAD0APfttYa83WX843A0YSJAAYSfkD0FOIf+XWlzxgOZUAhphvi2m9JT9xa2AEfMEkCFnmGtgAity1bM5yAdoEoONMPABMAmGA/AmgKQ5oMakvDnjCtGtpwIZMoLYs4Ae+DOqigIA02LECqJOm6nIAg9mgDpwACqXpq2UGLM+kV8sNoCMBJfADoseZusALWBZAwwxY3s06fkB0m1kBA4C0hrm7yAxYJnTMgGWCYQHQzAbzARuAXkfAXDUngG5CtCdGAG3SSDIlAdEpAvCsANqEL/paFkAFUBZAJxVdHGAwrTgg6hKAuQm8LQFQ3a0nAEwABBvz7TBpYAL8e/IETLqyAfKEcMS0mhOAqOrEEDzZFiz7V7L+6E+7w+GwP3lFl5UhsgKWq4UB36IsQFthgI+ygCnKAnwUBYCJjIARF9JT4N2O3QRLf8++njd+0JipfTbl3hc023EznNs/EN2eL8/ehPv7ghnAHXAHPMoC3lcrWcDb6qPs0++qqh4EBa8eqt+9+yADeLN6XVU/AZaNDaYVEGRKAAAAAElFTkSuQmCC",G="_card_1uytv_1",U="_cardContent_1uytv_8",I="_deprecationNotice_1uytv_12",A={card:G,cardContent:U,deprecationNotice:I};T("ui5-card-header",":host([data-project-template]) .ui5-card-header .ui5-card-header-avatar { pointer-events: auto; }");function it(e){const{title:s,subtitle:r,logo:o,logoAttribution:a,isTypeScript:i,children:c,href:p,deprecationNotice:n}=e;return t.jsx(y,{className:A.card,header:t.jsx(j,{"data-project-template":"",titleText:s,subtitleText:r,action:i&&t.jsx("img",{src:O,height:24,width:24,alt:"TypeScript Logo",title:"TypeScript Logo. Original Source: https://www.typescriptlang.org/branding/"}),avatar:t.jsx(S,{title:a,children:t.jsx("img",{src:o,alt:`Logo of ${s}`})})}),children:t.jsxs("div",{className:A.cardContent,children:[n&&t.jsx(l,{hideCloseButton:!0,design:m.Warning,children:n,className:A.deprecationNotice}),t.jsx(L,{design:N.Emphasized,href:p,children:"View Example"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(b,{children:"What's included:"}),c]})})}const Q="_parameters_d2bas_1",P="_parameterName_d2bas_5",H="_parameterDetails_d2bas_9",ct={parameters:Q,parameterName:P,parameterDetails:H};export{M as A,rt as C,D as I,it as P,ct as a,ot as b,at as c,nt as d,E as e};
//# sourceMappingURL=DomRefTable.module-5f7d4bb9.js.map
