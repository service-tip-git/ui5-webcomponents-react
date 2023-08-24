import{r as a}from"./index-f1f2c4b1.js";import{j as l}from"./jsx-runtime-d079401a.js";import{m as fe}from"./UI5Element-a4bd3d38.js";import{r as oe}from"./Icons-74c917eb.js";import{i as ye}from"./slim-arrow-down-9459236f.js";import{i as be}from"./slim-arrow-up-b350b898.js";import{T as o}from"./ThemingParameters-7e2e4e30.js";import{e as ve}from"./index-99d317a4.js";import{c as B}from"./clsx-1229b3e0.js";import{c as M}from"./react-jss.esm-2e5f50f2.js";import{u as Se,a6 as G,a7 as Y,a8 as K,a9 as Q}from"./i18n-defaults-771c9378.js";import{T as _e}from"./index-cb0103e7.js";import{B as we}from"./index-1fb574f6.js";import{s as E}from"./stopPropagation-da74d54e.js";import{f as Ce}from"./utils-626dc1bf.js";import{F as H,a as Te,c as xe}from"./index-fb6e8b5e.js";import{T as Z,a as ee,b as te}from"./index-b71e499b.js";import{T as Be}from"./index-7feac488.js";import{u as I}from"./withWebComponent-7d7e5133.js";import{g as ne}from"./Media-6b270b80.js";import{d as ke}from"./debounce-afefed63.js";const ut=(e,m,r,s,[c,u],{noHeader:f,fixedHeader:v=!1,scrollTimeout:g={current:0}})=>{var _;const[y,x]=a.useState(0),[b,t]=a.useState(0),[i,k]=a.useState(!0),P=a.useRef(0),w=a.useCallback(n=>{const h=P.current<=n.target.scrollTop;P.current=n.target.scrollTop,!(g.current>=performance.now())&&(h&&n.target.scrollTop>=b&&!c?(k(!1),u(!0)):!h&&n.target.scrollTop<=y+Math.max(0,b-y)&&c&&(k(!0),u(!1)))},[b,y,c]);a.useEffect(()=>{r.current&&c!==void 0&&t(r.current.getBoundingClientRect().height)},[c]),a.useEffect(()=>{const n=e.current;return v||n.addEventListener("scroll",w),()=>{n.removeEventListener("scroll",w)}},[w,v]),a.useEffect(()=>{const n=new ResizeObserver(([h])=>{const p=Array.isArray(h.borderBoxSize)?h.borderBoxSize[0]:h.borderBoxSize;x((p==null?void 0:p.blockSize)??h.target.getBoundingClientRect().height)});return m!=null&&m.current&&n.observe(m.current),()=>{n.disconnect()}},[]),a.useEffect(()=>{const n=new ResizeObserver(([h])=>{if(i){const p=Array.isArray(h.borderBoxSize)?h.borderBoxSize[0]:h.borderBoxSize;t((p==null?void 0:p.blockSize)??h.target.getBoundingClientRect().height)}});return r!=null&&r.current&&n.observe(r.current),()=>{n.disconnect()}},[i]);const d=((_=s==null?void 0:s.current)==null?void 0:_.offsetHeight)??33,C=(f?0:y+b)+d;return{topHeaderHeight:y,headerContentHeight:b,anchorBarHeight:d,totalHeaderHeight:C,headerCollapsed:c}},Pe="pushpin-off",ie="M454 155q10 9 10 22t-10 23q-9 9-23.5 17t-32 15.5-35 14T331 258q12 37 3.5 76.5T296 403l-90-90L75 443q-11 12-23 0-5-5-5-11t5-11l131-131-91-90q30-30 69-38.5t77 3.5q4-15 10.5-32.5t14-35 16-32.5T296 41q10-9 23-9t22 9zM319 64q-11 11-24 40t-26 71l-10 30-31-9q-22-8-44.5-6T141 203l152 152q11-20 13-42.5t-6-45.5l-10-30 31-10q31-10 51.5-18t33-14.5 18.5-11 8-6.5z",He=!1,De="SAP-icons-v4",Ne="@ui5/webcomponents-icons";oe(Pe,{pathData:ie,ltr:He,collection:De,packageName:Ne});const Ae="pushpin-off",re="M473 168q7 9 7 18 0 11-7.5 18.5T454 212h-32l-52 52-41 165q-5 19-25 19-10 0-18-8l-89-89L76 472q-8 8-18 8-11 0-18.5-7.5T32 454q0-10 8-18l121-121-89-89q-8-8-8-18 0-20 19-25l165-41 52-52V58q0-11 7.5-18.5T326 32q9 0 18 7zm-76-3l-50-50-68 68q-6 6-11 7l-128 32 150 150 32-128q1-5 7-11z",qe=!1,ze="SAP-icons-v5",Ee="@ui5/webcomponents-icons";oe(Ae,{pathData:re,ltr:qe,collection:ze,packageName:Ee});fe();const Ie="pushpin-off",Ve={container:{position:"absolute",left:"50%","&:before, &:after":{content:'""',position:"absolute",width:"4rem",top:"50%",height:"0.0625rem"},"&:before":{right:"100%",backgroundImage:`linear-gradient(to left, ${o.sapObjectHeader_BorderColor}, transparent)`},"&:after":{backgroundImage:`linear-gradient(to right, ${o.sapObjectHeader_BorderColor}, transparent)`,left:"100%"}},anchorBarActionButton:{"--_ui5wcr_anchor-btn-center":"calc((var(--_ui5_button_base_min_width) - var(--sapButton_BorderWidth)) / 2)",position:"absolute",insetBlockStart:"calc(-1 * var(--_ui5wcr_anchor-btn-center))",insetInlineStart:"calc(50% - var(--_ui5wcr_anchor-btn-center))",zIndex:3,"&:not([pressed])":{backgroundColor:o.sapObjectHeader_Background}},anchorBarActionButtonExpandable:{"& + $anchorBarActionButtonPinnable":{insetInlineStart:"calc(50% - var(--_ui5wcr_anchor-btn-center) + 1rem)"}},anchorBarActionButtonPinnable:{},anchorBarActionPinnableAndExpandable:{"&$anchorBarActionButtonExpandable":{insetInlineStart:"calc(50% - var(--_ui5wcr_anchor-btn-center) - 1rem)"}}},je=M(Ve,{name:"DynamicPageAnchorBar"}),ae={"--_ui5_button_base_min_width":"1.5rem","--_ui5_button_base_height":"1.5rem"},O=a.forwardRef((e,m)=>{var _;const{showHideHeaderButton:r,headerContentVisible:s,headerContentPinnable:c,headerPinned:u,style:f,a11yConfig:v,setHeaderPinned:g,onPinnedStateChange:y,onToggleHeaderContentVisibility:x,onHoverToggleButton:b}=e,t=je(),i=c&&s,k=i&&r,P=a.useCallback(n=>{g(n.target.pressed)},[g]),w=a.useRef(!0);a.useEffect(()=>{!w.current&&typeof y=="function"&&y(u),w.current&&(w.current=!1)},[u]);const d=n=>{x(ve(n,{visible:!s}))},C=Se("@ui5/webcomponents-react");return l.jsxs("section",{"data-component-name":"DynamicPageAnchorBar",style:f,role:((_=v==null?void 0:v.dynamicPageAnchorBar)==null?void 0:_.role)??"navigation",className:r||c?t.container:null,ref:m,children:[r&&l.jsx(we,{icon:s?be:ye,"data-ui5wcr-dynamic-page-header-action":"",className:B(t.anchorBarActionButton,t.anchorBarActionButtonExpandable,k&&t.anchorBarActionPinnableAndExpandable),style:ae,onClick:d,onMouseOver:b,onMouseLeave:b,tooltip:C.getText(s?Y:G),accessibleName:C.getText(s?Y:G),"data-component-name":"DynamicPageAnchorBarExpandBtn"}),i&&l.jsx(_e,{icon:Ie,"data-ui5wcr-dynamic-page-header-action":"",className:B(t.anchorBarActionButton,t.anchorBarActionButtonPinnable),style:ae,pressed:u,onClick:P,tooltip:C.getText(u?K:Q),accessibleName:C.getText(u?K:Q),"data-component-name":"DynamicPageAnchorBarPinBtn"})]})});O.displayName="DynamicPageAnchorBar";try{O.displayName="DynamicPageAnchorBar",O.__docgenInfo={description:`The dynamic page anchor bar contains the expand/collapse (expands or collapses the header content)
and pin button (pins the content header).`,displayName:"DynamicPageAnchorBar",props:{headerContentVisible:{defaultValue:null,description:"Determines if the header content is visible.",name:"headerContentVisible",required:!0,type:{name:"boolean"}},headerContentPinnable:{defaultValue:null,description:"Determines if the header content is pinnable .",name:"headerContentPinnable",required:!0,type:{name:"boolean"}},showHideHeaderButton:{defaultValue:null,description:"Determines if the hide header button is shown .",name:"showHideHeaderButton",required:!0,type:{name:"boolean"}},headerPinned:{defaultValue:null,description:"Determines if the header is initially pinned .",name:"headerPinned",required:!1,type:{name:"boolean"}},setHeaderPinned:{defaultValue:null,description:"Set the header to the state pinned.",name:"setHeaderPinned",required:!1,type:{name:"(payload: any) => void"}},onToggleHeaderContentVisibility:{defaultValue:null,description:"Toggles the header content to be hidden or visible .",name:"onToggleHeaderContentVisibility",required:!0,type:{name:"(e: any) => void"}},onHoverToggleButton:{defaultValue:null,description:"Highlight title when hovered.",name:"onHoverToggleButton",required:!1,type:{name:"(e: any) => void"}},a11yConfig:{defaultValue:null,description:"Defines internally used a11y properties.",name:"a11yConfig",required:!1,type:{name:"{ dynamicPageAnchorBar?: { role?: string; }; }"}},onPinnedStateChange:{defaultValue:null,description:"Fired when the `headerContent` changes its pinned state.",name:"onPinnedStateChange",required:!1,type:{name:"(pinned: boolean) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const N={S:"@container (max-width: 599px)",M:"@container (min-width: 600px) and (max-width: 1023px)",L:"@container (min-width: 1024px) and (max-width: 1439px)",XL:"@container (min-width: 1440px)"},V={[N.S]:{paddingInline:"1rem"},[N.M]:{paddingInline:"2rem"},[N.L]:{paddingInline:"2rem"},[N.XL]:{paddingInline:"3rem"}},T={headerDisplay:"--_ui5wcr_DynamicPage_header_display",titleFontSize:"--_ui5wcr_DynamicPage_title_fontsize"},mt={dynamicPage:{container:"DynamicPage / inline-size",width:"100%",height:"100%",maxHeight:"100%",position:"relative",whiteSpace:"normal",fontFamily:o.sapFontFamily,backgroundColor:o.sapBackgroundColor,overflowX:"hidden",overflowY:"auto",[T.headerDisplay]:"block",[T.titleFontSize]:o.sapObjectHeader_Title_FontSize},headerCollapsed:{[T.headerDisplay]:"none",[T.titleFontSize]:o.sapObjectHeader_Title_SnappedFontSize,'& $anchorBar > section[role="navigation"]':{top:"-0.025rem"}},header:{extend:V},title:{extend:V},anchorBar:{position:"sticky",boxShadow:o.sapContent_HeaderShadow,height:"1px",zIndex:2,'& > section[role="navigation"]':{top:0}},contentContainer:{extend:V,paddingBlockStart:"1rem",boxSizing:"border-box",width:"100%",height:"auto",fontFamily:o.sapFontFamily,zIndex:0},backgroundStandard:{background:o.sapBackgroundColor},backgroundSolid:{background:o.sapBackgroundColor},backgroundList:{background:o.sapGroup_ContentBackground},backgroundTransparent:{background:"transparent"},footer:{bottom:"0.5rem",margin:"0 0.5rem",left:0,right:0}},Oe={header:{backgroundColor:o.sapObjectHeader_Background,position:"sticky",zIndex:1,paddingBlockStart:"1rem",paddingBlockEnd:"1rem",display:`var(${T.headerDisplay})`,overflow:"hidden"}},Re=M(Oe,{name:"DynamicPageHeader"}),R=a.forwardRef((e,m)=>{const{children:r,headerPinned:s,topHeaderHeight:c,className:u,style:f,...v}=e,g=a.useMemo(()=>s?{...f,top:`${c}px`,zIndex:1}:f,[s,c,f]),y=Re(),x=B(y.header,u);return l.jsx("div",{ref:m,...v,className:x,"data-component-name":"DynamicPageHeader",style:g,children:r})});R.displayName="DynamicPageHeader";try{R.displayName="DynamicPageHeader",R.__docgenInfo={description:`The dynamic page header contains the header content of the dynamic page.
This component can be collapsed and pinned by the anchorbar.`,displayName:"DynamicPageHeader",props:{headerPinned:{defaultValue:null,description:"Determines if the header is pinned.",name:"headerPinned",required:!1,type:{name:"boolean"}},topHeaderHeight:{defaultValue:null,description:"Determines the height of the top header (dynamic page title).",name:"topHeaderHeight",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Content of the `DynamicPageHeader`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const F=({onClick:e,noHover:m})=>l.jsx("span",{style:{flexGrow:1,height:"100%",cursor:m?"auto":"pointer"},className:"spacer",onClick:e});F.displayName="ToolbarSpacer";try{ToolbarSpacer.displayName="ToolbarSpacer",ToolbarSpacer.__docgenInfo={description:"",displayName:"ToolbarSpacer",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLElement>"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean"}}}}}catch{}const Fe={container:{flex:"1 1 100%",backgroundColor:o.sapObjectHeader_Background,minHeight:"3rem",paddingBlockStart:"0.5rem",paddingBlockEnd:"0.5rem",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"sticky",top:0,zIndex:2,cursor:"pointer",'&[data-not-clickable="true"]':{cursor:"unset","&:hover":{backgroundColor:o.sapObjectHeader_Background}},"&:hover":{backgroundColor:o.sapObjectHeader_Hover_Background}},phone:{[T.titleFontSize]:o.sapObjectHeader_Title_SnappedFontSize},breadcrumbs:{minWidth:"50%",padding:"0.5rem 0 0.25rem 0","&:only-child":{width:"100%"}},titleMainSection:{overflowX:"hidden",flex:"1 1 100%",alignItems:"baseline"},middleSection:{flexGrow:1,width:"100%",overflowX:"hidden"},title:{minWidth:"3rem",overflowX:"hidden",fontFamily:o.sapObjectHeader_Title_FontFamily,color:o.sapObjectHeader_Title_TextColor,fontSize:`var(${T.titleFontSize})`,paddingBlockStart:"0.3125rem",overflowWrap:"break-word",hyphens:"auto","& > *":{fontFamily:o.sapObjectHeader_Title_FontFamily,color:o.sapObjectHeader_Title_TextColor,fontSize:`var(${T.titleFontSize})`,overflowWrap:"break-word",hyphens:"auto"}},subTitle:{color:o.sapObjectHeader_Subtitle_TextColor,fontSize:o.sapFontSize,overflowWrap:"break-word",hyphens:"auto",paddingInlineStart:"0.5rem","& > *":{color:o.sapObjectHeader_Subtitle_TextColor,fontSize:o.sapFontSize,overflowWrap:"break-word",hyphens:"auto"}},subTitleBottom:{marginTop:"0.25rem",paddingInlineStart:0},content:{display:"flex",flexShrink:1.6,paddingInlineStart:"0.5rem"},toolbar:{flex:"1 1.6 100%",cursor:"auto","&:hover":{backgroundColor:"inherit"},"&>:first-child":{height:"100%"}}},Le=M(Fe,{name:"DynamicPageTitle"}),j=(e,m)=>Ce(e,1/0).map(r=>{if(a.isValidElement(r))return a.cloneElement(r,{onClick:s=>{var c,u;typeof((c=r.props)==null?void 0:c.onClick)=="function"&&r.props.onClick(s),(u=m.current)!=null&&u.isOpen()&&!s.defaultPrevented&&m.current.close()}})}),L=a.forwardRef((e,m)=>{var U,W;const{actions:r,breadcrumbs:s,children:c,header:u,subHeader:f,showSubHeaderRight:v,navigationActions:g,className:y,style:x,onToggleHeaderContentVisibility:b,actionsToolbarProps:t,navigationActionsToolbarProps:i,expandedContent:k,snappedContent:P,...w}=e,d=Le(),[C,_]=I(m),[n,h]=a.useState(void 0),p=a.useRef(!1),[le,se]=a.useState(((W=ne((U=_.current)==null?void 0:U.getBoundingClientRect().width))==null?void 0:W.name)==="Phone"),ce=B(d.container,le&&d.phone,y),[de,$]=I((t==null?void 0:t.overflowPopoverRef)??null),[ue,me]=I((i==null?void 0:i.overflowPopoverRef)??null);a.useEffect(()=>(p.current=!0,()=>{p.current=!1}),[p]);const{onClick:Me,...he}=w,A=a.useCallback(S=>{typeof(e==null?void 0:e.onClick)=="function"&&e.onClick(S),typeof b=="function"&&!(e!=null&&e["data-not-clickable"])&&b(S)},[e==null?void 0:e.onClick,b,e==null?void 0:e["data-not-clickable"]]);a.useEffect(()=>{const S=ke(([D])=>{var J;const q=Array.isArray(D.borderBoxSize)?D.borderBoxSize[0]:D.borderBoxSize,z=(q==null?void 0:q.inlineSize)??D.target.getBoundingClientRect().width;se(((J=ne(z))==null?void 0:J.name)==="Phone"),z<1280&&!n&&p.current?h(!0):z>=1280&&n&&p.current&&h(!1)},150),X=new ResizeObserver(S);return _.current&&X.observe(_.current),()=>{S.cancel(),X.disconnect()}},[_.current,n,p]);const pe=S=>{E(S),typeof(t==null?void 0:t.onClick)=="function"&&t.onClick(S)},ge=S=>{E(S),typeof(i==null?void 0:i.onClick)=="function"&&i.onClick(S)};return l.jsxs(H,{className:ce,style:x,ref:C,"data-component-name":"DynamicPageTitle",onClick:A,...he,children:[(s||g&&n)&&l.jsxs(H,{justifyContent:Te.SpaceBetween,"data-component-name":"DynamicPageTitleBreadcrumbs",children:[s&&l.jsx("div",{className:d.breadcrumbs,onClick:E,children:s}),g&&n&&l.jsxs(Z,{tabIndex:void 0,role:void 0,...i,overflowButton:i==null?void 0:i.overflowButton,className:B(d.toolbar,i==null?void 0:i.className),onClick:ge,"data-component-name":"DynamicPageTitleNavActions",onOverflowChange:i==null?void 0:i.onOverflowChange,overflowPopoverRef:ue,design:ee.Auto,toolbarStyle:te.Clear,active:!0,children:[l.jsx(F,{onClick:A,noHover:e==null?void 0:e["data-not-clickable"]}),j(g,me)]})]}),l.jsxs(H,{alignItems:xe.Center,className:d.middleSection,"data-component-name":"DynamicPageTitleMiddleSection",children:[l.jsxs(H,{className:d.titleMainSection,children:[u&&l.jsx("div",{className:d.title,"data-component-name":"DynamicPageTitleHeader",children:u}),f&&v&&l.jsx("div",{className:d.subTitle,"data-component-name":"DynamicPageTitleSubHeader",children:f}),c&&l.jsx("div",{className:d.content,"data-component-name":"DynamicPageTitleContent",children:c})]}),(r||!n&&g)&&l.jsxs(Z,{tabIndex:void 0,role:void 0,...t,overflowButton:t==null?void 0:t.overflowButton,design:ee.Auto,toolbarStyle:te.Clear,active:!0,className:B(d.toolbar,t==null?void 0:t.className),onClick:pe,"data-component-name":"DynamicPageTitleActions",onOverflowChange:t==null?void 0:t.onOverflowChange,overflowPopoverRef:de,children:[l.jsx(F,{onClick:A,noHover:e==null?void 0:e["data-not-clickable"]}),j(r,$),!n&&a.Children.count(r)>0&&a.Children.count(g)>0&&l.jsx(Be,{}),!n&&j(g,$)]})]}),f&&!v&&l.jsx(H,{children:l.jsx("div",{className:B(d.subTitle,d.subTitleBottom),"data-component-name":"DynamicPageTitleSubHeader",children:f})}),e!=null&&e["data-header-content-visible"]?k:e["data-is-snapped-rendered-outside"]?void 0:P]})});L.displayName="DynamicPageTitle";try{L.displayName="DynamicPageTitle",L.__docgenInfo={description:"The `DynamicPageTitle` component is part of the `DynamicPage` family and is used to serve as title of the `DynamicPage` and `ObjectPage`.\nIt can contain Breadcrumbs, Title, Subtitle, Content, KPIs and Actions.",displayName:"DynamicPageTitle",props:{actions:{defaultValue:null,description:"The `DynamicPageTitle` actions.\n\n__Note:__ When clicking on an action in the overflow popover it closes the popover. You can use `event.preventDefault()` to prevent this.",name:"actions",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]"}},breadcrumbs:{defaultValue:null,description:"The `breadcrumbs` displayed in the `DynamicPageTitle` top-left area.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Breadcrumbs` in order to preserve the intended design.",name:"breadcrumbs",required:!1,type:{name:"ReactNode | ReactNode[]"}},children:{defaultValue:null,description:"The content is positioned in the `DynamicPageTitle` middle area",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:"The `header` is positioned in the `DynamicPageTitle` left area.\nUse this prop to display a `Title` (or any other component that serves as a heading).",name:"header",required:!1,type:{name:"ReactNode"}},subHeader:{defaultValue:null,description:"The `subHeader` is positioned in the `DynamicPageTitle` left area below the `header`.\nUse this aggregation to display a component like `Label` or any other component that serves as sub header.",name:"subHeader",required:!1,type:{name:"ReactNode"}},navigationActions:{defaultValue:null,description:"The `DynamicPageTitle` navigation actions.<br />\n*Note*: The `navigationActions` position depends on the control size.\nIf the control size is 1280px or bigger, they are rendered right next to the actions.\nOtherwise, they are rendered in the top-right area, above the actions.\nIf a large number of elements(buttons) are used, there could be visual degradations as the space for the `navigationActions` is limited.\n\n__Note:__ When clicking on an action in the overflow popover it closes the popover. You can use `event.preventDefault()` to prevent this.",name:"navigationActions",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]"}},showSubHeaderRight:{defaultValue:null,description:"Display the `subHeader` on the right instead of below the `header`.",name:"showSubHeaderRight",required:!1,type:{name:"boolean"}},actionsToolbarProps:{defaultValue:null,description:'Use this prop to customize the "actions" `Toolbar`.\n\n__Note:__ It is possible to overwrite internal implementations. Please use with caution!',name:"actionsToolbarProps",required:!1,type:{name:'Omit<ToolbarPropTypes, "design" | "toolbarStyle" | "active">'}},navigationActionsToolbarProps:{defaultValue:null,description:'Use this prop to customize the "navigationActions" `Toolbar`.\n\n__Note:__ It is possible to overwrite internal implementations. Please use with caution!',name:"navigationActionsToolbarProps",required:!1,type:{name:'Omit<ToolbarPropTypes, "design" | "toolbarStyle" | "active">'}},expandedContent:{defaultValue:null,description:"The content displayed in the `DynamicPageTitle` in expanded state.",name:"expandedContent",required:!1,type:{name:"ReactNode | ReactNode[]"}},snappedContent:{defaultValue:null,description:"The content displayed in the `DynamicPageTitle` in collapsed (snapped) state.",name:"snappedContent",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{L as D,V as R,R as a,O as b,T as c,mt as s,ut as u};
//# sourceMappingURL=index-627dedf7.js.map
