import{I as f,u as d,R as g,f as h}from"./CustomElementsScope-BUTWMsdD.js";import{r as y}from"./index-C--kS4iy.js";globalThis["@ui5/webcomponents-react"]??(globalThis["@ui5/webcomponents-react"]={});const n=globalThis["@ui5/webcomponents-react"];function l(){return Symbol.for(`@ui5/webcomponents-react/StyleStore-${f()}/Listeners`)}function i(){return Symbol.for(`@ui5/webcomponents-react/StyleStore-${f()}`)}const m={staticCssInjected:!1,componentsMap:new Map};function a(){var t;return n[t=l()]??(n[t]=[]),n[l()]}function u(){for(const t of a())t()}function c(){var t;return n[t=i()]??(n[t]=m),n[i()]}function w(t){return a().push(t),()=>{const s=a(),o=s.indexOf(t);o!==-1&&s.splice(o,1)}}const r={subscribe:w,getSnapshot:c,getServerSnapshot:()=>m,setStaticCssInjected:t=>{const e=c();n[i()]={...e,staticCssInjected:t},u()},mountComponent:t=>{const{componentsMap:e}=c();e.has(t)?e.set(t,e.get(t)+1):e.set(t,1),u()},unmountComponent:t=>{const{componentsMap:e}=c();e.has(t)&&e.set(t,e.get(t)-1),u()}};function x(t,e,s){const{staticCssInjected:o,componentsMap:b}=y.useSyncExternalStore(r.subscribe,r.getSnapshot,r.getServerSnapshot);d(()=>{const p=`${e}-${f()}`,S=(s==null?void 0:s.alwaysInject)||!o;return S&&(g(t,"data-ui5wcr-component",p),r.mountComponent(e)),()=>{S&&(r.unmountComponent(e),b.get(e)<=0&&h("data-ui5wcr-component",p))}},[t,o])}export{r as S,x as u};
