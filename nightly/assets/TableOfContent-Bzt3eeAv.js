import{j as v}from"./jsx-runtime-D_zvdyIk.js";import{r as le}from"./index-C--kS4iy.js";function ne(e){const o=[].forEach,m=[].some,i=typeof window<"u"&&document.body,c=" ";let a,h=!0;function S(t,n){const d=n.appendChild(l(t));if(t.children.length){const u=p(t.isCollapsed);t.children.forEach(H=>{S(H,u)}),d.appendChild(u)}}function s(t,n){const u=p(!1);if(n.forEach(H=>{S(H,u)}),a=t||a,a!==null)return a.firstChild&&a.removeChild(a.firstChild),n.length===0?a:a.appendChild(u)}function l(t){const n=document.createElement("li"),d=document.createElement("a");return e.listItemClass&&n.setAttribute("class",e.listItemClass),e.onClick&&(d.onclick=e.onClick),e.includeTitleTags&&d.setAttribute("title",t.textContent),e.includeHtml&&t.childNodes.length?o.call(t.childNodes,u=>{d.appendChild(u.cloneNode(!0))}):d.textContent=t.textContent,d.setAttribute("href",`${e.basePath}#${t.id}`),d.setAttribute("class",`${e.linkClass+c}node-name--${t.nodeName}${c}${e.extraLinkClasses}`),n.appendChild(d),n}function p(t){const n=e.orderedList?"ol":"ul",d=document.createElement(n);let u=e.listClass+c+e.extraListClasses;return t&&(u=u+c+e.collapsibleClass,u=u+c+e.isCollapsedClass),d.setAttribute("class",u),d}function C(){const t=w(),n=document.querySelector(e.positionFixedSelector);e.fixedSidebarOffset==="auto"&&(e.fixedSidebarOffset=a.offsetTop),t>e.fixedSidebarOffset?n.className.indexOf(e.positionFixedClass)===-1&&(n.className+=c+e.positionFixedClass):n.className=n.className.replace(c+e.positionFixedClass,"")}function f(t){let n=0;return t!==null&&(n=t.offsetTop,e.hasInnerContainers&&(n+=f(t.offsetParent))),n}function g(t,n){return t&&t.className!==n&&(t.className=n),t}function x(t,n){var U,B;e.positionFixedSelector&&C();const d=t,u=(U=n==null?void 0:n.target)!=null&&U.getAttribute?(B=n==null?void 0:n.target)==null?void 0:B.getAttribute("href"):null,H=u&&u.charAt(0)==="#"?G(u.replace("#","")):!1;if((h||H)&&a&&d.length>0){const K=q(d),V=a.querySelector(`.${e.activeLinkClass}`),z=K.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g,"\\$1"),I=window.location.hash.replace("#","");let $=z;const X=_();u&&H?$=u.replace("#",""):I&&I!==z&&X&&($=I);const b=a.querySelector(`.${e.linkClass}[href="${e.basePath}#${$}"]`);if(V===b)return;const Z=a.querySelectorAll(`.${e.linkClass}`);o.call(Z,T=>{g(T,T.className.replace(c+e.activeLinkClass,""))});const ee=a.querySelectorAll(`.${e.listItemClass}`);o.call(ee,T=>{g(T,T.className.replace(c+e.activeListItemClass,""))}),b&&b.className.indexOf(e.activeLinkClass)===-1&&(b.className+=c+e.activeLinkClass);const j=b==null?void 0:b.parentNode;j&&j.className.indexOf(e.activeListItemClass)===-1&&(j.className+=c+e.activeListItemClass);const te=a.querySelectorAll(`.${e.listClass}.${e.collapsibleClass}`);o.call(te,T=>{T.className.indexOf(e.isCollapsedClass)===-1&&(T.className+=c+e.isCollapsedClass)}),b!=null&&b.nextSibling&&b.nextSibling.className.indexOf(e.isCollapsedClass)!==-1&&g(b.nextSibling,b.nextSibling.className.replace(c+e.isCollapsedClass,"")),k(b==null?void 0:b.parentNode.parentNode)}}function k(t){return t&&t.className.indexOf(e.collapsibleClass)!==-1&&t.className.indexOf(e.isCollapsedClass)!==-1?(g(t,t.className.replace(c+e.isCollapsedClass,"")),k(t.parentNode.parentNode)):t}function O(t){const n=t.target||t.srcElement;typeof n.className!="string"||n.className.indexOf(e.linkClass)===-1||(h=!1)}function Q(){h=!0}function Y(){return h}function G(t){const n=A();return(n==null?void 0:n.querySelector(`#${t}`)).offsetTop>n.offsetHeight-n.clientHeight*1.4-e.bottomModeThreshold}function _(){const t=A(),n=t.scrollHeight>t.clientHeight,d=w()+t.clientHeight>t.offsetHeight-e.bottomModeThreshold;return n&&d}function A(){let t;return e.scrollContainer&&document.querySelector(e.scrollContainer)?t=document.querySelector(e.scrollContainer):t=document.documentElement||i,t}function w(){const t=A();return(t==null?void 0:t.scrollTop)||0}function q(t,n=w()){let d;return m.call(t,(u,H)=>{if(f(u)>n+e.headingsOffset+10){const P=H===0?H:H-1;return d=t[P],!0}if(H===t.length-1)return d=t[t.length-1],!0}),d}function J(t){const n=w(),d=q(t,n),u=_();if((!d||n<5)&&!u)window.location.hash==="#"||window.location.hash===""||window.history.pushState(null,null,"#");else if(d&&!u){const H=`#${d.id}`;window.location.hash!==H&&window.history.pushState(null,null,H)}}return{enableTocAnimation:Q,disableTocAnimation:O,render:s,updateToc:x,getCurrentlyHighlighting:Y,getTopHeader:q,getScrollTop:w,updateUrlHashForHeader:J}}const re={tocSelector:".js-toc",tocElement:null,contentSelector:".js-toc-content",contentElement:null,headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,includeTitleTags:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1,tocScrollingWrapper:null,tocScrollOffset:30,enableUrlHashUpdateOnScroll:!1,bottomModeThreshold:30};function oe(e){const o=[].reduce;function m(l){return l[l.length-1]}function i(l){return+l.nodeName.toUpperCase().replace("H","")}function c(l){try{return l instanceof window.HTMLElement||l instanceof window.parent.HTMLElement}catch{return l instanceof window.HTMLElement}}function a(l){if(!c(l))return l;if(e.ignoreHiddenElements&&(!l.offsetHeight||!l.offsetParent))return null;const p=l.getAttribute("data-heading-label")||(e.headingLabelCallback?String(e.headingLabelCallback(l.innerText)):(l.innerText||l.textContent).trim()),C={id:l.id,children:[],nodeName:l.nodeName,headingLevel:i(l),textContent:p};return e.includeHtml&&(C.childNodes=l.childNodes),e.headingObjectCallback?e.headingObjectCallback(C,l):C}function h(l,p){const C=a(l),f=C.headingLevel;let g=p,x=m(g);const k=x?x.headingLevel:0;let O=f-k;for(;O>0&&(x=m(g),!(x&&f===x.headingLevel));)x&&x.children!==void 0&&(g=x.children),O--;return f>=e.collapseDepth&&(C.isCollapsed=!0),g.push(C),g}function S(l,p){let C=p;e.ignoreSelector&&(C=p.split(",").map(function(g){return`${g.trim()}:not(${e.ignoreSelector})`}));try{return l.querySelectorAll(C)}catch{return console.warn(`Headers not found with selector: ${C}`),null}}function s(l){return o.call(l,function(C,f){const g=a(f);return g&&h(g,C.nest),C},{nest:[]})}return{nestHeadingsArray:s,selectHeadings:S}}function se(e){var o=e.duration,m=e.offset;if(typeof window>"u"||typeof location>"u")return;var i=location.hash?h(location.href):location.href;c();function c(){document.body.addEventListener("click",s,!1);function s(l){!a(l.target)||l.target.className.indexOf("no-smooth-scroll")>-1||l.target.href.charAt(l.target.href.length-2)==="#"&&l.target.href.charAt(l.target.href.length-1)==="!"||l.target.className.indexOf(e.linkClass)===-1||ce(l.target.hash,{duration:o,offset:m,callback:function(){S(l.target.hash)}})}}function a(s){return s.tagName.toLowerCase()==="a"&&(s.hash.length>0||s.href.charAt(s.href.length-1)==="#")&&(h(s.href)===i||h(s.href)+"#"===i)}function h(s){return s.slice(0,s.lastIndexOf("#"))}function S(s){var l=document.getElementById(s.substring(1));l&&(/^(?:a|select|input|button|textarea)$/i.test(l.tagName)||(l.tabIndex=-1),l.focus())}}function ce(e,o){var m=window.pageYOffset,i={duration:o.duration,offset:o.offset||0,callback:o.callback,easing:o.easing||C},c=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]')||document.querySelector('[id="'+e.split("#").join("")+'"]'),a=typeof e=="string"?i.offset+(e?c&&c.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,h=typeof i.duration=="function"?i.duration(a):i.duration,S,s;requestAnimationFrame(function(f){S=f,l(f)});function l(f){s=f-S,window.scrollTo(0,i.easing(s,m,a,h)),s<h?requestAnimationFrame(l):p()}function p(){window.scrollTo(0,m+a),typeof i.callback=="function"&&i.callback()}function C(f,g,x,k){return f/=k/2,f<1?x/2*f*f+g:(f--,-x/2*(f*(f-2)-1)+g)}}function ae(e){const o=e.tocScrollingWrapper||e.tocElement||document.querySelector(e.tocSelector);if(o&&o.scrollHeight>o.clientHeight){const m=o.querySelector(`.${e.activeListItemClass}`);if(m){const c=m.offsetTop-e.tocScrollOffset;o.scrollTop=c>0?c:0}}}let r={},y,F,L,E,N;function ie(e){let o=!1;r=ue(re,e||{}),r.scrollSmooth&&(r.duration=r.scrollSmoothDuration,r.offset=r.scrollSmoothOffset,se(r)),y=ne(r),F=oe(r),R();const m=fe(r);if(m===null)return;const i=W(r);if(i===null||(L=F.selectHeadings(m,r.headingSelector),L===null))return;const a=F.nestHeadingsArray(L).nest;if(!r.skipRendering)y.render(i,a);else return this;let h=!1;E=D(s=>{var p;y.updateToc(L,s),!r.disableTocScrollSync&&!h&&ae(r),r.enableUrlHashUpdateOnScroll&&o&&y.getCurrentlyHighlighting()&&y.updateUrlHashForHeader(L);const l=((p=s==null?void 0:s.target)==null?void 0:p.scrollingElement)&&s.target.scrollingElement.scrollTop===0;(s&&(s.eventPhase===0||s.currentTarget===null)||l)&&(y.updateToc(L),r.scrollEndCallback&&r.scrollEndCallback(s))},r.throttleTimeout),o||(E(),o=!0),window.onhashchange=window.onscrollend=s=>{E(s)},r.scrollContainer&&document.querySelector(r.scrollContainer)?(document.querySelector(r.scrollContainer).addEventListener("scroll",E,!1),document.querySelector(r.scrollContainer).addEventListener("resize",E,!1)):(document.addEventListener("scroll",E,!1),document.addEventListener("resize",E,!1));let S=null;N=D(s=>{h=!0,r.scrollSmooth&&y.disableTocAnimation(s),y.updateToc(L,s),S&&clearTimeout(S),S=setTimeout(()=>{y.enableTocAnimation()},r.scrollSmoothDuration),setTimeout(()=>{h=!1},r.scrollSmoothDuration+100)},r.throttleTimeout),r.scrollContainer&&document.querySelector(r.scrollContainer)?document.querySelector(r.scrollContainer).addEventListener("click",N,!1):document.addEventListener("click",N,!1)}function R(){const e=W(r);e!==null&&(r.skipRendering||e&&(e.innerHTML=""),r.scrollContainer&&document.querySelector(r.scrollContainer)?(document.querySelector(r.scrollContainer).removeEventListener("scroll",E,!1),document.querySelector(r.scrollContainer).removeEventListener("resize",E,!1),y&&document.querySelector(r.scrollContainer).removeEventListener("click",N,!1)):(document.removeEventListener("scroll",E,!1),document.removeEventListener("resize",E,!1),y&&document.removeEventListener("click",N,!1)))}const de=Object.prototype.hasOwnProperty;function ue(...e){const o={};for(let m=0;m<e.length;m++){const i=e[m];for(const c in i)de.call(i,c)&&(o[c]=i[c])}return o}function D(e,o,m){o||(o=250);let i,c;return function(...a){const h=this,S=+new Date;i&&S<i+o?(clearTimeout(c),c=setTimeout(()=>{i=S,e.apply(h,a)},o)):(i=S,e.apply(h,a))}}function fe(e){try{return e.contentElement||document.querySelector(e.contentSelector)}catch{return console.warn(`Contents element not found: ${e.contentSelector}`),null}}function W(e){try{return e.tocElement||document.querySelector(e.tocSelector)}catch{return console.warn(`TOC element not found: ${e.tocSelector}`),null}}const me="_header_3q1lz_1",he="_fixedContainer_3q1lz_7",Ce="_toc_3q1lz_10",M={header:me,fixedContainer:he,toc:Ce};function pe({headingSelector:e="h2:not(.noAnchor), h3:not(.noAnchor), h4:not(.noAnchor)",onlyDisplaySideNav:o=!1}){return le.useEffect(()=>(ie({tocSelector:".js-toc",contentSelector:".sbdocs-wrapper",headingSelector:e,orderedList:!1,collapseDepth:6,hasInnerContainers:!0}),document.querySelectorAll(".toc-link").forEach(m=>m.setAttribute("target","_self")),()=>{R()}),[e]),v.jsxs(v.Fragment,{children:[v.jsx("h3",{className:`${M.header} noAnchor`,"data-show-small":!o,children:"Contents"}),v.jsx("div",{className:M.fixedContainer,"data-show-small":!o,children:v.jsx("div",{className:`js-toc ${M.toc}`,id:"toc-container"})})]})}export{pe as T};
