import{a as j,j as R}from"./jsx-runtime-670450c2.js";import{c as $}from"./clsx.m-1229b3e0.js";import{r as t}from"./index-f1f749bf.js";import{c as ue}from"./react-jss.esm-e54d2f1d.js";import{u as ce,r as de}from"./i18n-defaults-9da374be.js";import{g as pe,f as fe}from"./utils-ed90fb1b.js";import{i as me}from"./overflow-492fbaba.js";import{r as ve}from"./index-96c5f47c.js";import{u as ne,h as he}from"./withWebComponent-e4481254.js";import{s as be}from"./stopPropagation-da74d54e.js";import{P as ge}from"./index-ccda2e6f.js";import{c as ye}from"./Device-208919c6.js";import{T as we}from"./index-12c7dbbd.js";import{a as Ce}from"./Button-04bad9a0.js";import{P as Te}from"./Popover-907d427e.js";import{T as i}from"./ThemingParameters-f4b4144e.js";import{b as te}from"./CssSizeVariables-bd372cde.js";import{a as oe}from"./CustomVariables-fd831c35.js";import{u as _e,d as H}from"./debounce-2c3bc435.js";import{u as Re}from"./useIsomorphicLayoutEffect-a838da4a.js";var k=(r=>(r.Auto="Auto",r.Info="Info",r.Solid="Solid",r.Transparent="Transparent",r))(k||{}),z=(r=>(r.Clear="Clear",r.Standard="Standard",r))(z||{});const Pe=t.createContext({inPopover:!1}),Se=ye(),U=r=>{const{lastVisibleIndex:W,classes:w,children:D,portalContainer:P,overflowContentRef:C,numberOfAlwaysVisibleItems:E,showMoreText:x,overflowPopoverRef:O,overflowButton:f}=r,[S,B]=t.useState(!1),l=t.useRef(null),[T,V]=ne(O),N=o=>{o.stopPropagation(),B(p=>p?!1:(V.current&&(V.current.opener=o.target),!0))},M=()=>{l.current&&(l.current.accessibilityAttributes={expanded:!0,hasPopup:"menu"})},s=()=>{B(!0)},L=o=>{l.current&&(l.current.accessibilityAttributes={expanded:!1,hasPopup:"menu"}),be(o),B(!1)};t.useEffect(()=>{const o=pe("ui5-toggle-button");customElements.whenDefined(o).then(()=>{l.current&&(l.current.accessibilityAttributes={expanded:S,hasPopup:"menu"})})},[]);const m=o=>{var p;typeof((p=f==null?void 0:f.props)==null?void 0:p.onClick)=="function"&&f.props.onClick(o),o.defaultPrevented||N(o)},d=he();return j(Pe.Provider,{value:{inPopover:!0},children:[f?t.cloneElement(f,{onClick:m}):R(we,{ref:l,design:Ce.Transparent,icon:me,onClick:N,pressed:S,accessibleName:x,tooltip:x,"data-component-name":"ToolbarOverflowButton"}),d&&ve.createPortal(R(ge,{"data-component-name":"ToolbarOverflowPopover",className:$(w.popover,Se&&w.popoverPhone),placementType:Te.Bottom,ref:T,open:S,onAfterClose:L,onBeforeOpen:M,onAfterOpen:s,hideArrow:!0,children:R("div",{className:w.popoverContent,ref:C,children:D.map((o,p)=>{var h;return p>W&&p>E-1?((h=o.type)==null?void 0:h.displayName)==="ToolbarSeparator"?t.cloneElement(o,{style:{height:"0.0625rem",margin:"0.375rem 0.1875rem",width:"100%"}}):o:null})})}),P??document.body)]})};try{U.displayName="OverflowPopover",U.__docgenInfo={description:"",displayName:"OverflowPopover",props:{lastVisibleIndex:{defaultValue:null,description:"",name:"lastVisibleIndex",required:!0,type:{name:"number"}},classes:{defaultValue:null,description:"",name:"classes",required:!0,type:{name:"Record<string, string>"}},portalContainer:{defaultValue:null,description:"",name:"portalContainer",required:!0,type:{name:"Element"}},overflowContentRef:{defaultValue:null,description:"",name:"overflowContentRef",required:!0,type:{name:"Ref<HTMLDivElement>"}},numberOfAlwaysVisibleItems:{defaultValue:null,description:"",name:"numberOfAlwaysVisibleItems",required:!1,type:{name:"number"}},showMoreText:{defaultValue:null,description:"",name:"showMoreText",required:!0,type:{name:"string"}},overflowPopoverRef:{defaultValue:null,description:"",name:"overflowPopoverRef",required:!1,type:{name:"Ref<PopoverDomRef>"}},overflowButton:{defaultValue:null,description:"",name:"overflowButton",required:!1,type:{name:"ReactElement<ToggleButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ButtonPropTypes, string | JSXElementConstructor<...>>"}}}}}catch{}const Be={outerContainer:{boxSizing:"border-box",width:"100%",maxWidth:"100%",height:te.sapWcrToolbarHeight,position:"relative",overflow:"hidden",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:`solid 0.0625rem ${i.sapGroup_TitleBorderColor}`},hasOverflow:{"& $toolbar":{maxWidth:"calc(100% - 44px)"}},clear:{borderBottom:"none"},active:{cursor:"pointer","&:hover":{backgroundColor:i.sapList_Hover_Background},"&:focus":{outline:oe.ToolbarFocusOutline,outlineOffset:"-0.1875rem",boxShadow:oe.ToolbarFocusShadow},"&:active":{backgroundColor:i.sapActiveColor}},info:{height:"2rem",backgroundColor:i.sapInfobar_NonInteractive_Background,color:i.sapList_TextColor,"&$active":{outlineColor:i.sapContent_ContrastFocusColor,backgroundColor:i.sapInfobar_Background,color:i.sapInfobar_TextColor,"&:hover":{backgroundColor:i.sapInfobar_Hover_Background},"&:active":{backgroundColor:i.sapInfobar_Active_Background}}},solid:{backgroundColor:i.sapBackgroundColor},transparent:{backgroundColor:i.sapToolbar_Background},toolbar:{width:"100%","& >:first-child:not(.spacer)":{marginInline:"0.5rem 0.25rem"},"& >:last-child:not(.spacer)":{marginInline:"0.25rem 0.5rem"},"& > *:not(first-child):not(last-child):not(.spacer)":{marginInline:"0.25rem"},display:"flex",alignItems:"center",maxWidth:"100%"},overflowButtonContainer:{display:"flex",marginInline:"0 0.5rem"},popover:{"&[ui5-popover]::part(content)":{padding:0}},popoverPhone:{width:"calc(100% - 10px)",maxWidth:"calc(100% - 10px)",left:"5px !important"},popoverContent:{padding:te.sapWcrToolbarPopoverContentPadding,display:"flex",flexDirection:"column","& [ui5-toggle-button], & [ui5-button]":{marginBottom:"0.25rem"},"& [ui5-button]::part(button) ,& [ui5-toggle-button]::part(button)":{justifyContent:"start"},"& [ui5-button][icon-only]::part(button), & [ui5-toggle-button][icon-only]::part(button)":{padding:"revert"},"& :last-child":{marginBottom:0}},childContainer:{display:"flex"}},Ie=ue(Be,{name:"Toolbar"}),_=36+8+8,J=t.forwardRef((r,W)=>{const{children:w,toolbarStyle:D=z.Standard,design:P=k.Auto,active:C=!1,style:E,className:x,onClick:O,slot:f,as:S="div",portalContainer:B,numberOfAlwaysVisibleItems:l=0,onOverflowChange:T,overflowPopoverRef:V,overflowButton:N,...M}=r,s=Ie(),[L,m]=ne(W),d=t.useRef([]),[o,p]=t.useState(null),h=t.useRef(null),X=t.useRef(null),re=t.useRef(null),[G,K]=t.useState("0"),Y=_e(m),ae=ce("@ui5/webcomponents-react").getText(de),le=$(s.outerContainer,D===z.Clear&&s.clear,C&&s.active,P===k.Solid&&s.solid,P===k.Transparent&&s.transparent,P===k.Info&&s.info,x),v=t.useMemo(()=>fe(w,10),[w]),F=t.useMemo(()=>(d.current=[],v.map((e,n)=>{var g;const a=t.createRef(),u=((g=e==null?void 0:e.type)==null?void 0:g.displayName)==="ToolbarSpacer";return d.current.push({ref:a,isSpacer:u}),u?e:R("div",{ref:a,className:s.childContainer,"data-component-name":"ToolbarChildContainer",children:e},n)})),[v,d,s.childContainer]),b=(o||o===0)&&t.Children.count(F)!==o+1&&l<t.Children.count(v);t.useEffect(()=>{let e;const n=h.current.children[l-1],a=H(()=>{K(Y?`${n.offsetParent.offsetWidth-n.offsetLeft+_}px`:`${n.offsetLeft+n.getBoundingClientRect().width+_}px`)},200);return l&&b&&n&&(e=new ResizeObserver(a),e.observe(h.current)),()=>{a.cancel(),e==null||e.disconnect()}},[l,b,Y]);const Q=t.useRef(),A=t.useCallback(()=>{Q.current=requestAnimationFrame(()=>{if(!m.current)return;const e=m.current.getBoundingClientRect().width;let n=0,a=null;if(e-_<=0)a=-1;else{let u=!0;d.current.forEach((g,c)=>{const I=d.current[c];if(I&&I.ref&&I.ref.current){let y=I.ref.current.getBoundingClientRect().width;y+=c===0||c===d.current.length-1?4:8,c===d.current.length-1?n+y<=e-8?a=c:(c===0||u)&&(a=c-1):(n+y<=e-_&&(a=c),n<e-_&&n+y>=e-_&&(a=c-1)),u&&!g.isSpacer&&(u=!1),n+=y}})}p(a)})},[b]);t.useEffect(()=>{const e=new ResizeObserver(A);return m.current&&e.observe(m.current),()=>{cancelAnimationFrame(Q.current),e.disconnect()}},[A]),Re(()=>{A()},[A]);const Z=e=>{if(C&&typeof O=="function"){const n=e.type==="keydown"&&(e.code==="Enter"||e.code==="Space");if(n&&e.target!==e.currentTarget)return;(e.type==="click"||n)&&(e.preventDefault(),O(e))}},ee=t.useRef(v),q=t.useRef(H(T,60));t.useEffect(()=>{q.current=H(T,60)},[T]),t.useEffect(()=>{var n,a;const e=ee.current.length!==v.length;if((o!==null||e)&&typeof T=="function"){ee.current=v;const u=(n=h.current)==null?void 0:n.children;let g=[];const c=(a=X.current)==null?void 0:a.children;(u==null?void 0:u.length)>0&&(g=Array.from(u).filter((I,y)=>y<=o)),q.current({toolbarElements:g,overflowElements:c,target:m.current})}return()=>{q.current.cancel()}},[o,v,q]);const se=S,ie=G!=="0"?{minWidth:G,...E}:E;return j(se,{style:ie,className:$(le,b&&s.hasOverflow),ref:L,slot:f,onClick:Z,onKeyDown:Z,tabIndex:C?0:void 0,role:C?"button":void 0,...M,children:[j("div",{className:s.toolbar,"data-component-name":"ToolbarContent",ref:h,children:[b&&t.Children.map(F,(e,n)=>n>=o+1&&n>l-1?t.cloneElement(e,{style:{visibility:"hidden",position:"absolute",pointerEvents:"none"}}):e),!b&&F]}),b&&R("div",{ref:re,className:s.overflowButtonContainer,"data-component-name":"ToolbarOverflowButtonContainer",children:R(U,{overflowPopoverRef:V,lastVisibleIndex:o,classes:s,portalContainer:B,overflowContentRef:X,numberOfAlwaysVisibleItems:l,showMoreText:ae,overflowButton:N,children:v})})]})});J.displayName="Toolbar";try{J.displayName="Toolbar",J.__docgenInfo={description:`Horizontal container most commonly used to display buttons, labels, selects and various other input controls.

The content of the \`Toolbar\` moves into the overflow area from right to left when the available space is not enough in the visible area of the container.
It can be accessed by the user through the overflow button that opens it in a popover.

__Note:__ The overflow popover is mounted only when opened, i.e., any child component of the popover will be remounted, when moved into it.`,displayName:"Toolbar",props:{children:{defaultValue:null,description:"Defines the content of the `Toolbar`.\n\n__Note:__ Although this prop accepts all `ReactNode` types, it is strongly recommended to not pass `string` or `number` to it.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},overflowButton:{defaultValue:null,description:'Defines the button shown when the `Toolbar` goes into overflow.\n\n__Note:__ It is strongly recommended that you only use `ToggleButton` in icon only mode in order to preserve the intended design.\n\n__Note:__ Per default a `ToggleButton` with the `"overflow"` icon and all necessary a11y attributes will be rendered.',name:"overflowButton",required:!1,type:{name:"ReactElement<ToggleButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ButtonPropTypes, string | JSXElementConstructor<...>>"}},toolbarStyle:{defaultValue:null,description:"Defines the visual style of the `Toolbar`.\n\n__Note:__ The visual styles are theme-dependent.",name:"toolbarStyle",required:!1,type:{name:"enum",value:[{value:'"Clear"'},{value:'"Standard"'},{value:'"Clear"'},{value:'"Standard"'}]}},design:{defaultValue:null,description:"Defines the `Toolbar` design.<br />\n<b>Note:</b> Design settings are theme-dependent.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Auto"'},{value:'"Info"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Auto"'},{value:'"Info"'},{value:'"Solid"'}]}},active:{defaultValue:null,description:"Indicates that the whole `Toolbar` is clickable. The Press event is fired only if `active` is set to true.",name:"active",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"table"'},{value:'"time"'},{value:'"header"'},{value:'"label"'},{value:'"footer"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},portalContainer:{defaultValue:null,description:"Defines where modals are rendered into via `React.createPortal`.\n\nYou can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).\n\nDefaults to: `document.body`",name:"portalContainer",required:!1,type:{name:"Element"}},numberOfAlwaysVisibleItems:{defaultValue:null,description:"Defines the number of items inside the toolbar which should always be visible.\n_E.g.: `numberOfAlwaysVisibleItems={3}` would always show the first three items, no matter the size of the toolbar._\n\n__Note__: To preserve the intended design, it's not recommended to overwrite the `min-width` when using this prop.",name:"numberOfAlwaysVisibleItems",required:!1,type:{name:"number"}},overflowPopoverRef:{defaultValue:null,description:`Exposes the React Ref of the overflow popover.
This can be useful, for example, when wanting to close the popover on click or selection of a child element.`,name:"overflowPopoverRef",required:!1,type:{name:"Ref<PopoverDomRef>"}},onClick:{defaultValue:null,description:"Fired if the `active` prop is set to true and the user clicks or presses Enter/Space on the `Toolbar`.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onOverflowChange:{defaultValue:null,description:"Fired when the content of the overflow popover has changed.",name:"onOverflowChange",required:!1,type:{name:"(event: { toolbarElements: HTMLElement[]; overflowElements: HTMLCollection; target: HTMLElement; }) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{Pe as O,J as T,k as a,z as b};
//# sourceMappingURL=index-b5bc5790.js.map
