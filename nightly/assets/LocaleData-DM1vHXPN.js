import{t as h,s as w}from"./i18nBundle-BqO_ndMU.js";import{n as l,r as t}from"./withWebComponent-GNT2PXey.js";import{m as L}from"./utils-CcgiHsei.js";const f=new Map,a=new Map,i=new Map,g=new Set;let u=!1;const $={iw:"he",ji:"yi",in:"id"},d=e=>{u||(console.warn(`[LocaleData] Supported locale "${e}" not configured, import the "Assets.js" module from the webcomponents package you are using.`),u=!0)},j=(e,o,n)=>{e=e&&$[e]||e,e==="no"&&(e="nb"),e==="zh"&&!o&&(n==="Hans"?o="CN":n==="Hant"&&(o="TW")),(e==="sh"||e==="sr"&&n==="Latn")&&(e="sr",o="Latn");let s=`${e}_${o}`;return l.includes(s)?a.has(s)?s:(d(s),t):(s=e,l.includes(s)?a.has(s)?s:(d(s),t):t)},m=(e,o)=>{f.set(e,o)},M=e=>{a.has(e)||(e=t);const o=f.get(e);if(!o)throw new Error(`CLDR data for locale ${e} is not loaded!`);return o},y=e=>{if(!i.get(e)){const o=a.get(e);if(!o)throw new Error(`CLDR data for locale ${e} is not loaded!`);i.set(e,o(e))}return i.get(e)},D=async(e,o,n)=>{const s=j(e,o,n),p=L("OpenUI5Support");if(p){const r=p.getLocaleDataObject();if(r){m(s,r);return}}try{const r=await y(s);m(s,r)}catch(r){const c=r;g.has(c.message)||(g.add(c.message),console.error(c.message))}},S=(e,o)=>{a.set(e,o)};S("en",async()=>(await fetch("https://sdk.openui5.org/1.120.17/resources/sap/ui/core/cldr/en.json")).json()),h(()=>{const e=w();return D(e.getLanguage(),e.getRegion(),e.getScript())});export{S as C,M as S,D as u};
