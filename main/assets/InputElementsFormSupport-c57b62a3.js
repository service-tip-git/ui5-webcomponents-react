import{r as n}from"./CustomElementsScopeUtils-264b8a39.js";const a=o=>{let t=o.parentElement;for(;t&&t.tagName.toLowerCase()!=="form";)t=t.parentElement;if(t instanceof HTMLFormElement)return t};class p{static syncNativeHiddenInput(t,r){const s=!!t.name||t.required;let e=t.querySelector("input[data-ui5-form-support]");s&&!e&&(e=document.createElement("input"),e.style.clip="rect(0 0 0 0)",e.style.clipPath="inset(50%)",e.style.height="1px",e.style.overflow="hidden",e.style.position="absolute",e.style.whiteSpace="nowrap",e.style.width="1px",e.style.bottom="0",e.setAttribute("tabindex","-1"),e.required=t.required,e.setAttribute("data-ui5-form-support",""),e.setAttribute("aria-hidden","true"),e.addEventListener("focusin",()=>{var i;return(i=t.getFocusDomRef())==null?void 0:i.focus()}),e.slot="formSupport",t.appendChild(e)),!s&&e&&t.removeChild(e),s&&(e.name=t.name,(r||u)(t,e))}static syncNativeFileInput(t,r,s){const e=!!t.name;let i=t.querySelector('input[type="file"][data-ui5-form-support]');e&&!i&&(i=document.createElement("input"),i.type="file",i.setAttribute("data-ui5-form-support",""),i.slot="formSupport",i.style.position="absolute",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.opacity="0",t.multiple&&(i.multiple=!0),i.addEventListener("change",s),t.appendChild(i)),!e&&i&&t.removeChild(i),e&&(i.name=t.name,(r||u)(t,i))}static triggerFormSubmit(t){const r=a(t);if(r){if(!r.checkValidity()){r.reportValidity();return}if(!r.dispatchEvent(new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:t})))return;r.submit()}}static triggerFormReset(t){const r=a(t);r&&r.reset()}}const u=(o,t)=>{t.disabled=o.disabled,t.value=o.value};n("FormSupport",p);
//# sourceMappingURL=InputElementsFormSupport-c57b62a3.js.map
