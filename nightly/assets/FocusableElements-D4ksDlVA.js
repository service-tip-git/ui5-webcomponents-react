import{t as s}from"./isElementHidden-B4HqmI2E.js";import{v as u,h as f}from"./jsx-runtime-cXES_1K3.js";const c=/^(?:a|area)$/i,d=/^(?:input|select|textarea|button)$/i,h=t=>{if(t.disabled)return!1;const o=t.getAttribute("tabindex");return o!=null?parseInt(o)>=0:d.test(t.nodeName)||c.test(t.nodeName)&&!!t.href},m=t=>t.hasAttribute("data-ui5-focus-trap"),p=t=>{const o=getComputedStyle(t);return t.scrollHeight>t.clientHeight&&["scroll","auto"].indexOf(o.overflowY)>=0||t.scrollWidth>t.clientWidth&&["scroll","auto"].indexOf(o.overflowX)>=0},x=async(t,o)=>!t||s(t)?null:a(t,!0),C=async(t,o)=>!t||s(t)?null:a(t,!1),g=t=>t.hasAttribute("data-ui5-focus-redirect")||!s(t),a=async(t,o,b)=>{let n,e,i=-1;t.shadowRoot?n=o?t.shadowRoot.firstChild:t.shadowRoot.lastChild:t instanceof HTMLSlotElement&&t.assignedNodes()?(e=t.assignedNodes(),i=o?0:e.length-1,n=e[i]):n=o?t.firstElementChild:t.lastElementChild;let l;for(;n;){const r=n;if(!s(r)){if(u(n)&&(n=await n.getFocusDomRefAsync()),!n||s(n))return null;if(n.nodeType===1&&g(n)&&!m(n)){if(h(n)||(l=await a(n,o),!f()&&!l&&p(n)))return n&&typeof n.focus=="function"?n:null;if(l)return l&&typeof l.focus=="function"?l:null}}n=o?r.nextSibling:r.previousSibling,e&&!e[i].contains(n)&&(i=o?i+1:i-1,n=e[i])}return null};export{x as H,C as T,h as r};
