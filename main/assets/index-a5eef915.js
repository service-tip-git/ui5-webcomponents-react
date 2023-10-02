import{j as n}from"./jsx-runtime-d079401a.js";import{V as D,a as B,b as F,c as R}from"./i18n-defaults-edeeca68.js";import{a as H}from"./alert-f95f2d2e.js";import{i as q,s as L,e as U}from"./information-31cb56bb.js";import{c as W}from"./clsx-1229b3e0.js";import{r as z}from"./index-f1f2c4b1.js";import{c as M}from"./react-jss.esm-2e5f50f2.js";import{u as E,I as P,A as G,E as J}from"./i18n-defaults-f9eebbcc.js";import{I as h}from"./index-938ed19c.js";import{T as e}from"./ThemingParameters-7e2e4e30.js";import{V as u}from"./ValueState-ab6838cc.js";const d=t=>({textShadow:e.sapContent_ContrastTextShadow,background:e[`${t}_Background`],color:e[`${t}_TextColor`],"& [ui5-icon]":{color:e[`${t}_TextColor`]},"&$active:hover":{background:e[`${t}_Hover_Background`],color:e[`${t}_Hover_TextColor`],"& [ui5-icon]":{color:e[`${t}_Hover_TextColor`]}},"&$active:active":{background:e[`${t}_Active_Background`],color:e[`${t}_Active_TextColor`],"& [ui5-icon]":{color:e[`${t}_Active_TextColor`]}}}),c=t=>({textShadow:e.sapContent_ContrastTextShadow,color:e[`${t}_TextColor`],backgroundColor:e[`${t}`],"& [ui5-icon]":{color:e[`${t}_TextColor`]},"&$active:hover":{background:e[`${t}_Hover_Background`]},"&$active:active":{background:e[`${t}_Active_Background`]}}),Y={objectStatus:{fontFamily:e.sapFontFamily,fontSize:e.sapFontSize,fontWeight:"normal",position:"relative",display:"inline-block",verticalAlign:"top",width:"fit-content",textShadow:e.sapContent_TextShadow},active:{cursor:"pointer","&:not($inverted)":{"& $text":{textDecoration:"underline"},"&:hover, &:active":{"& $text":{textDecoration:"none"}},"&:focus":{textShadow:"none",background:e.sapContent_FocusColor,color:e.sapContent_ContrastTextColor,borderRadius:"0.125rem",outline:`0.125rem ${e.sapContent_FocusColor}`,"& [ui5-icon]":{color:e.sapContent_ContrastTextColor}}}},icon:{width:"1rem",textAlign:"center",display:"inline-block",height:"1rem",lineHeight:"1rem",verticalAlign:"top",paddingInlineEnd:"0.25rem",'&[data-icon-only="true"]':{paddingInlineEnd:0}},text:{lineHeight:"1rem",display:"inline-block",height:"inherit",verticalAlign:"top"},emptyIndicator:{lineHeight:"normal",color:e.sapTextColor},pseudoInvisibleText:{fontSize:0,position:"absolute",userSelect:"none",left:0,top:0},success:{color:e.sapPositiveTextColor,"& [ui5-icon]":{color:e.sapPositiveElementColor}},warning:{color:e.sapCriticalTextColor,"& [ui5-icon]":{color:e.sapCriticalElementColor}},error:{color:e.sapNegativeTextColor,"& [ui5-icon]":{color:e.sapNegativeElementColor}},information:{color:e.sapInformativeTextColor,"& [ui5-icon]":{color:e.sapInformativeElementColor}},none:{color:e.sapNeutralTextColor,"& [ui5-icon]":{color:e.sapNeutralElementColor}},indication01:{color:e.sapIndicationColor_1,"& [ui5-icon]":{color:e.sapIndicationColor_1}},indication02:{color:e.sapIndicationColor_2,"& [ui5-icon]":{color:e.sapIndicationColor_2}},indication03:{color:e.sapIndicationColor_3,"& [ui5-icon]":{color:e.sapIndicationColor_3}},indication04:{color:e.sapIndicationColor_4,"& [ui5-icon]":{color:e.sapIndicationColor_4}},indication05:{color:e.sapIndicationColor_5,"& [ui5-icon]":{color:e.sapIndicationColor_5}},indication06:{color:e.sapIndicationColor_6,"& [ui5-icon]":{color:e.sapIndicationColor_6}},indication07:{color:e.sapIndicationColor_7,"& [ui5-icon]":{color:e.sapIndicationColor_7}},indication08:{color:e.sapIndicationColor_8,"& [ui5-icon]":{color:e.sapIndicationColor_8}},inverted:{height:"auto",minHeight:"1rem",minWidth:"1.375rem",padding:"0.1875rem 0.25rem",borderRadius:e.sapButton_BorderCornerRadius,fontFamily:e.sapFontBoldFamily,fontSize:e.sapFontSmallSize,"& [ui5-icon]":{paddingBlockStart:"0.125rem",width:e.sapFontSmallSize,height:e.sapFontSmallSize},'&[data-icon-only="true"]':{display:"flex",alignItems:"center",justifyContent:"center",padding:"0.1875rem 0.313rem"},"$active&:focus":{outline:`${e.sapContent_FocusColor} ${e.sapContent_FocusStyle} ${e.sapContent_FocusWidth}`},"&$error":d("sapButton_Negative"),"&$warning":d("sapButton_Critical"),"&$success":d("sapButton_Success"),"&$information":d("sapButton_Information"),"&$none":d("sapButton_Neutral"),"&$indication01":c("sapIndicationColor_1"),"&$indication02":c("sapIndicationColor_2"),"&$indication03":c("sapIndicationColor_3"),"&$indication04":c("sapIndicationColor_4"),"&$indication05":c("sapIndicationColor_5"),"&$indication06":c("sapIndicationColor_6"),"&$indication07":c("sapIndicationColor_7"),"&$indication08":c("sapIndicationColor_8")}},K=Y,Q=(t,v,p,_,l)=>{const{indicationColorText:x,errorStateText:S,warningStateText:C,informationStateText:r,successStateText:g}=l;let i=p;const s=v&&!i;let o=_;if(!o&&t.startsWith("Indication")&&(o=`${x} ${t.substring(t.indexOf("0")+1)}`),!o||s)switch(t){case u.Error:s&&(i=n.jsx(h,{name:U,"data-component-name":"ObjectStatusDefaultIcon"})),o||(o=S);break;case u.Success:s&&(i=n.jsx(h,{name:L,"data-component-name":"ObjectStatusDefaultIcon"})),o||(o=g);break;case u.Warning:s&&(i=n.jsx(h,{name:H,"data-component-name":"ObjectStatusDefaultIcon"})),o||(o=C);break;case u.Information:s&&(i=n.jsx(h,{name:q,"data-component-name":"ObjectStatusDefaultIcon"})),o||(o=r);break}return[i,o]},X=M(K,{name:"ObjectStatus"}),I=z.forwardRef((t,v)=>{const{state:p,showDefaultIcon:_,children:l,icon:x,className:S,style:C,active:r,inverted:g,onClick:i,emptyIndicator:s,stateAnnouncementText:o,...N}=t,T=E("@ui5/webcomponents-react"),m=E("@ui5/webcomponents"),a=X(),w=T.getText(P),j=m.getText(D),A=m.getText(B),k=m.getText(F),O=m.getText(R),[b,$]=Q(p,_,x,o,{indicationColorText:w,errorStateText:j,warningStateText:A,informationStateText:k,successStateText:O}),f=s&&!l,y=f?n.jsx("span",{"aria-hidden":f,"data-component-name":"ObjectStatusEmptyIndicator",className:a.emptyIndicator,children:"–"}):l,V=W(a.objectStatus,a[`${p}`.toLowerCase()],r&&a.active,g&&!f&&a.inverted,S);return n.jsxs("div",{ref:v,className:V,style:C,onClick:r?i:void 0,tabIndex:r?0:void 0,"data-icon-only":!l,role:r?"button":void 0,"aria-roledescription":r?T.getText(G):void 0,...N,children:[b&&n.jsx("span",{className:a.icon,"data-icon-only":!l,"data-component-name":"ObjectStatusIconContainer",children:b}),y&&n.jsxs("span",{className:a.text,"data-component-name":"ObjectStatusTextContainer",children:[y,f&&n.jsx("span",{className:a.pseudoInvisibleText,"data-component-name":"ObjectStatusInvisibleEmptyTextContainer",children:T.getText(J)})]}),!!$&&y&&n.jsx("span",{className:a.pseudoInvisibleText,"data-component-name":"ObjectStatusInvisibleTextContainer",children:$})]})});I.displayName="ObjectStatus";I.defaultProps={state:u.None};try{I.displayName="ObjectStatus",I.__docgenInfo={description:"Status information that can be either text with a value state, or an icon.",displayName:"ObjectStatus",props:{active:{defaultValue:null,description:"Indicates if the ObjectStatus text and icon can be clicked/tapped by the user.\n\n**Note:** If you set this property to true, you have to also set the `children` or `icon` prop.\n@since 0.16.6",name:"active",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Defines the icon in front of the `ObjectStatus` text.<br />\n__Note:__ Although this slot accepts HTML Elements, it is strongly recommended that you only use `Icon` in order to preserve the intended design.",name:"icon",required:!1,type:{name:"ReactNode"}},inverted:{defaultValue:null,description:`Determines whether the background color reflects the set state instead of the text
@since 0.16.6`,name:"inverted",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Defines the text of the `ObjectStatus`.<br />\n__Note:__ Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode"}},state:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the <code>ObjectStatus</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>\n\nSince version 0.17.0 the state property also accepts values from enum `IndicationColor`.",name:"state",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Indication01"'},{value:'"Indication02"'},{value:'"Indication03"'},{value:'"Indication04"'},{value:'"Indication05"'},{value:'"Indication06"'},{value:'"Indication07"'},{value:'"Indication08"'},{value:'"Indication01"'},{value:'"Indication02"'},{value:'"Indication03"'},{value:'"Indication04"'},{value:'"Indication05"'},{value:'"Indication06"'},{value:'"Indication07"'},{value:'"Indication08"'}]}},showDefaultIcon:{defaultValue:null,description:"Defines whether the default icon for each `ValueState` should be displayed.<br />\n__Note:__ If the `icon` prop was set, `showDefaultIcon` has no effect.",name:"showDefaultIcon",required:!1,type:{name:"boolean"}},emptyIndicator:{defaultValue:null,description:`Specifies if an empty indicator should be displayed when there is no text.
@since 1.19.0`,name:"emptyIndicator",required:!1,type:{name:"boolean"}},stateAnnouncementText:{defaultValue:null,description:`Enables overriding of the default state announcement read by screen readers.
@since 1.19.0`,name:"stateAnnouncementText",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:`Fires when the user clicks/taps on active text.
@since 0.16.6`,name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{I as O};
//# sourceMappingURL=index-a5eef915.js.map
