import{L as b,x as w}from"./utils-C9_9ShpY.js";import{e as S,i as k,t as H}from"./LitRenderer-Zl5KMCf2.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I}=b,y=()=>document.createComment(""),p=(e,r,n)=>{var c;const f=e._$AA.parentNode,t=r===void 0?e._$AB:r._$AA;if(n===void 0){const l=f.insertBefore(y(),t),o=f.insertBefore(y(),t);n=new I(l,o,e,e.options)}else{const l=n._$AB.nextSibling,o=n._$AM,a=o!==e;if(a){let u;(c=n._$AQ)===null||c===void 0||c.call(n,e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==o._$AU&&n._$AP(u)}if(l!==t||a){let u=n._$AA;for(;u!==l;){const h=u.nextSibling;f.insertBefore(u,t),u=h}}}return n},$=(e,r,n=e)=>(e._$AI(r,n),e),M={},P=(e,r=M)=>e._$AH=r,C=e=>e._$AH,x=e=>{var r;(r=e._$AP)===null||r===void 0||r.call(e,!1,!0);let n=e._$AA;const c=e._$AB.nextSibling;for(;n!==c;){const f=n.nextSibling;n.remove(),n=f}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=(e,r,n)=>{const c=new Map;for(let f=r;f<=n;f++)c.set(e[f],f);return c},j=S(class extends k{constructor(e){if(super(e),e.type!==H.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,r,n){let c;n===void 0?n=r:r!==void 0&&(c=r);const f=[],t=[];let l=0;for(const o of e)f[l]=c?c(o,l):l,t[l]=n(o,l),l++;return{values:t,keys:f}}render(e,r,n){return this.ht(e,r,n).values}update(e,[r,n,c]){var f;const t=C(e),{values:l,keys:o}=this.ht(r,n,c);if(!Array.isArray(t))return this.ut=o,l;const a=(f=this.ut)!==null&&f!==void 0?f:this.ut=[],u=[];let h,v,s=0,d=t.length-1,i=0,A=l.length-1;for(;s<=d&&i<=A;)if(t[s]===null)s++;else if(t[d]===null)d--;else if(a[s]===o[i])u[i]=$(t[s],l[i]),s++,i++;else if(a[d]===o[A])u[A]=$(t[d],l[A]),d--,A--;else if(a[s]===o[A])u[A]=$(t[s],l[A]),p(e,u[A+1],t[s]),s++,A--;else if(a[d]===o[i])u[i]=$(t[d],l[i]),p(e,t[s],t[d]),d--,i++;else if(h===void 0&&(h=B(o,i,A),v=B(a,s,d)),h.has(a[s]))if(h.has(a[d])){const _=v.get(o[i]),m=_!==void 0?t[_]:null;if(m===null){const g=p(e,t[s]);$(g,l[i]),u[i]=g}else u[i]=$(m,l[i]),p(e,t[s],m),t[_]=null;i++}else x(t[d]),d--;else x(t[s]),s++;for(;i<=A;){const _=p(e,u[A+1]);$(_,l[i]),u[i++]=_}for(;s<=d;){const _=t[s++];_!==null&&x(_)}return this.ut=o,P(e,u),w}});export{j as c};
