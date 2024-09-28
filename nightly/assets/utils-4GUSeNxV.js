import{r as T}from"./index-RYns6xqu.js";import{d as lt,p as at,c as ht}from"./useIsomorphicLayoutEffect-BErBnqdY.js";let ct=class{constructor(){this._eventRegistry=new Map}attachEvent(t,e){const i=this._eventRegistry,s=i.get(t);if(!Array.isArray(s)){i.set(t,[e]);return}s.includes(e)||s.push(e)}detachEvent(t,e){const i=this._eventRegistry,s=i.get(t);if(!s)return;const o=s.indexOf(e);o!==-1&&s.splice(o,1),s.length===0&&i.delete(t)}fireEvent(t,e){const i=this._eventRegistry.get(t);return i?i.map(s=>s.call(this,e)):[]}fireEventAsync(t,e){return Promise.all(this.fireEvent(t,e))}isHandlerAttached(t,e){const i=this._eventRegistry.get(t);return i?i.includes(e):!1}hasListeners(t){return!!this._eventRegistry.get(t)}},wt=class{constructor(...t){}};const k=new Map,D=new Map,P=new Map,dt="componentFeatureLoad",G=new ct,K=n=>`${dt}_${n}`,$t=(n,t)=>{k.set(n,t)},St=n=>k.get(n),Nt=async(n,t)=>{var e,i;await Promise.all(((e=t.dependencies)==null?void 0:e.map(s=>s.define()))||[]),await((i=t.define)==null?void 0:i.call(t)),D.set(n,t),ut(n)},Mt=n=>D.get(n),Tt=(n,t,e)=>{const i=P.get(t);i!=null&&i.includes(n)||(i?i.push(n):P.set(t,[n]),G.attachEvent(K(n),e))},ut=n=>{G.fireEvent(K(n),void 0)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const R=window,g=R.trustedTypes,j=g?g.createPolicy("lit-html",{createHTML:n=>n}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,U="?"+A,pt=`<${U}>`,m=document,C=(n="")=>m.createComment(n),b=n=>n===null||typeof n!="object"&&typeof n!="function",X=Array.isArray,q=n=>X(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,B=/>/g,v=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,O=/"/g,J=/^(?:script|style|textarea|title)$/i,Q=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),At=Q(1),vt=Q(2),w=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),V=new WeakMap,f=m.createTreeWalker(m,129,null,!1),Y=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=x;for(let l=0;l<e;l++){const a=n[l];let u,h,d=-1,p=0;for(;p<a.length&&(r.lastIndex=p,h=r.exec(a),h!==null);)p=r.lastIndex,r===x?h[1]==="!--"?r=z:h[1]!==void 0?r=B:h[2]!==void 0?(J.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=v):h[3]!==void 0&&(r=v):r===v?h[0]===">"?(r=s??x,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,u=h[1],r=h[3]===void 0?v:h[3]==='"'?O:Z):r===O||r===Z?r=v:r===z||r===B?r=x:(r=v,s=void 0);const N=r===v&&n[l+1].startsWith("/>")?" ":"";o+=r===x?a+pt:d>=0?(i.push(u),a.slice(0,d)+"$lit$"+a.slice(d)+A+N):a+A+(d===-2?(i.push(void 0),l):N)}const c=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[j!==void 0?j.createHTML(c):c,i]};class E{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const c=t.length-1,l=this.parts,[a,u]=Y(t,e);if(this.el=E.createElement(a,i),f.currentNode=this.el.content,e===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=f.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(A)){const p=u[r++];if(h.push(d),p!==void 0){const N=s.getAttribute(p.toLowerCase()+"$lit$").split(A),M=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:M[2],strings:N,ctor:M[1]==="."?et:M[1]==="?"?it:M[1]==="@"?st:S})}else l.push({type:6,index:o})}for(const d of h)s.removeAttribute(d)}if(J.test(s.tagName)){const h=s.textContent.split(A),d=h.length-1;if(d>0){s.textContent=g?g.emptyScript:"";for(let p=0;p<d;p++)s.append(h[p],C()),f.nextNode(),l.push({type:2,index:++o});s.append(h[d],C())}}}else if(s.nodeType===8)if(s.data===U)l.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(A,h+1))!==-1;)l.push({type:7,index:o}),h+=A.length-1}o++}}static createElement(t,e){const i=m.createElement("template");return i.innerHTML=t,i}}function _(n,t,e=n,i){var s,o,r,c;if(t===w)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=b(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=_(n,l._$AS(n,t.values),l,i)),t}class tt{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:m).importNode(i,!0);f.currentNode=o;let r=f.nextNode(),c=0,l=0,a=s[0];for(;a!==void 0;){if(c===a.index){let u;a.type===2?u=new y(r,r.nextSibling,this,t):a.type===1?u=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(u=new nt(r,this,t)),this.u.push(u),a=s[++l]}c!==(a==null?void 0:a.index)&&(r=f.nextNode(),c++)}return o}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class y{constructor(t,e,i,s){var o;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=_(this,t,e),b(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==w&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):q(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==$&&b(this._$AH)?this._$AA.nextSibling.data=t:this.T(m.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=E.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.p(i);else{const r=new tt(o,this),c=r.v(this.options);r.p(i),this.T(c),this._$AH=r}}_$AC(t){let e=V.get(t.strings);return e===void 0&&V.set(t.strings,e=new E(t)),e}k(t){X(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new y(this.O(C()),this.O(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class S{constructor(t,e,i,s,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=_(this,t,e,0),r=!b(t)||t!==this._$AH&&t!==w,r&&(this._$AH=t);else{const c=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=_(this,c[i+l],e,l),a===w&&(a=this._$AH[l]),r||(r=!b(a)||a!==this._$AH[l]),a===$?t=$:t!==$&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}const _t=g?g.emptyScript:"";class it extends S{constructor(){super(...arguments),this.type=4}j(t){t&&t!==$?this.element.setAttribute(this.name,_t):this.element.removeAttribute(this.name)}}class st extends S{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=_(this,t,e,0))!==null&&i!==void 0?i:$)===w)return;const s=this._$AH,o=t===$&&s!==$||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==$&&(s===$||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){_(this,t)}}const Rt={P:"$lit$",A,M:U,C:1,L:Y,R:tt,D:q,V:_,I:y,H:S,N:it,U:st,B:et,F:nt},F=R.litHtmlPolyfillSupport;F==null||F(E,y),((I=R.litHtmlVersions)!==null&&I!==void 0?I:R.litHtmlVersions=[]).push("2.6.1");const It=(n,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new y(t.insertBefore(C(),c),c,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=Symbol.for(""),ft=n=>{if((n==null?void 0:n.r)===rt)return n==null?void 0:n._$litStatic$},gt=n=>({_$litStatic$:n,r:rt}),W=new Map,ot=n=>(t,...e)=>{const i=e.length;let s,o;const r=[],c=[];let l,a=0,u=!1;for(;a<i;){for(l=t[a];a<i&&(o=e[a],(s=ft(o))!==void 0);)l+=s+t[++a],u=!0;c.push(o),r.push(l),a++}if(a===i&&r.push(t[i]),u){const h=r.join("$$lit$$");(t=W.get(h))===void 0&&(r.raw=r,W.set(h,t=r)),e=c}return n(t,...e)},mt=ot(At),yt=ot(vt),H=class H{};H.html=mt,H.svg=yt,H.unsafeStatic=gt;let L=H;$t("LitStatic",L);function Lt(n,t=1){const e=[],i=(s,o=0,r=[])=>{var c;if(s){if(Array.isArray(s)){T.Children.toArray(s).forEach((l,a)=>{i(l,o+1,[...r,a])});return}s.type===T.Fragment&&o<=t?T.Children.toArray((c=s.props)==null?void 0:c.children).forEach((l,a)=>{i(l,o+1,[...r,a])}):typeof s=="string"||typeof s=="number"?e.push(s):e.push(T.cloneElement(s,{key:r.join(".")}))}};return i(n),e}const Ut=n=>n.charAt(0).toUpperCase()+n.slice(1),Pt=n=>n.replace(/([A-Z])/g,(t,e)=>`-${e.toLowerCase()}`),jt=n=>n.replace(/([-_]\w)/g,t=>t[1].toUpperCase());function zt(n){const t=at(n);return t?`${n}-${t}`:n}function Bt(n){return n.trim().replace(/\s\s+/g," ")}const Zt=lt("--_ui5_").replace("--_ui5_","");function Ot(n){const t=ht();return t?n.replace(`-${t.toUpperCase()}`,""):n}const xt=/^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;function Vt(n){const t=xt.exec(n).groups;return{version:n,major:parseInt(t.major),minor:parseInt(t.minor),patch:parseInt(t.patch),prerelease:t.prerelease,buildMetadata:t.buildmetadata}}export{Mt as F,Rt as L,It as Z,Lt as a,$t as b,Zt as c,wt as d,Tt as e,Nt as f,zt as g,$ as h,ct as i,Pt as j,Ut as k,jt as l,St as m,Ot as n,Vt as p,Bt as t,vt as w,w as x,At as y};
