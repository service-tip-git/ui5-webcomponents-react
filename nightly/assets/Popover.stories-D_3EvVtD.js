import{j as e}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import"./withWebComponent-GNT2PXey.js";import"./settings-CF_DhK_O.js";import{i as d}from"./utils-gz0UBSMj.js";import{a as c,P as m,b as u}from"./Popover-BcjI4r72.js";import{r as P}from"./index-RYns6xqu.js";import{B as v}from"./index-CbB55c25.js";import{L as f}from"./index-cq0ueAN_.js";import{L as r}from"./index-DP1XnNPS.js";import{P as i}from"./index-BZbjj9L4.js";const g={title:"Modals & Popovers / Popover",component:i,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(f,{children:[e.jsx(r,{additionalText:"Fruits",children:"Apples"}),e.jsx(r,{additionalText:"Fruits",children:"Bananas"}),e.jsx(r,{additionalText:"Vegetables",children:"Potato"})]}),headerText:"Popover Header",horizontalAlign:c.Center,placement:m.End,verticalAlign:u.Center,className:"footerPartNoPadding",open:d},tags:["package:@ui5/webcomponents"]},o={render(t){const[l,n]=P.useState(t.open);return e.jsxs(e.Fragment,{children:[e.jsx(v,{id:"openPopoverBtn",onClick:()=>{n(!0)},children:"Open Popover"}),e.jsx(i,{...t,onClose:()=>{n(!1)},opener:"openPopoverBtn",open:l})]})}};var s,a,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render(args) {
    const [popoverIsOpen, setPopoverIsOpen] = useState(args.open);
    return <>
        <Button id={'openPopoverBtn'} onClick={() => {
        setPopoverIsOpen(true);
      }}>
          Open Popover
        </Button>
        <Popover {...args} onClose={() => {
        setPopoverIsOpen(false);
      }} opener="openPopoverBtn" open={popoverIsOpen} />
      </>;
  }
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const x=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{A as C,o as D};
