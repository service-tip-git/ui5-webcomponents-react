const i=Date.now||(()=>new Date().getTime()),d=(a,o)=>{let e,s,t,u,n;const c=()=>{const l=i()-s;o>l?e=setTimeout(c,o-l):(e=null,u=a.apply(n,t),e||(t=n=null))},r=function(...l){return n=this,t=l,s=i(),e||(e=setTimeout(c,o)),u};return r.cancel=()=>{clearTimeout(e),e=t=n=null},r};export{d};
//# sourceMappingURL=debounce-5c77766a.js.map
