import{x as o}from"./utils-C9_9ShpY.js";import{e as a,i as h,t as u}from"./LitRenderer-Zl5KMCf2.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=a(class extends h{constructor(n){var t;if(super(n),n.type!==u.ATTRIBUTE||n.name!=="class"||((t=n.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var s,i;if(this.nt===void 0){this.nt=new Set,n.strings!==void 0&&(this.st=new Set(n.strings.join(" ").split(/\s/).filter(e=>e!=="")));for(const e in t)t[e]&&!(!((s=this.st)===null||s===void 0)&&s.has(e))&&this.nt.add(e);return this.render(t)}const r=n.element.classList;this.nt.forEach(e=>{e in t||(r.remove(e),this.nt.delete(e))});for(const e in t){const d=!!t[e];d===this.nt.has(e)||!((i=this.st)===null||i===void 0)&&i.has(e)||(d?(r.add(e),this.nt.add(e)):(r.remove(e),this.nt.delete(e)))}return o}});export{c as o};
