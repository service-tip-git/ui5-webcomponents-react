import{j as m}from"./jsx-runtime-d079401a.js";import{c as u}from"./clsx-1229b3e0.js";import{r as f}from"./index-f1f2c4b1.js";import{c as w}from"./react-jss.esm-c310038c.js";import{T as e}from"./ThemingParameters-7e2e4e30.js";const x={text:{fontFamily:e.sapFontFamily,fontSize:e.sapFontSize,fontWeight:"normal",color:e.sapTextColor,display:"inline-block",boxSizing:"border-box",whiteSpace:"pre-line",wordWrap:"break-word",maxWidth:"100%","&::selection":{background:e.sapSelectedColor,color:e.sapContent_ContrastTextColor}},renderWhitespace:{whiteSpace:"pre-wrap"},noWrap:{textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal",overflow:"hidden","&$renderWhitespace":{whiteSpace:"pre"}}},y=w(x,{name:"Text"}),t=f.forwardRef((a,s)=>{const{children:o,renderWhitespace:n,wrapping:i,className:p,style:l,slot:c,...d}=a,r=y(),h=u(r.text,i===!1&&r.noWrap,n&&r.renderWhitespace,p);return m.jsx("span",{ref:s,style:l,className:h,slot:c,...d,children:o})});t.defaultProps={renderWhitespace:!1,wrapping:!0};t.displayName="Text";try{t.displayName="Text",t.__docgenInfo={description:"The `Text` component can be used for embedding text into your app. You can hyphenate the text with the use of the `wrapping` prop.\n<br />__Note:__ Line breaks will always be visualized except when the wrapping property is set to false. In addition, tabs and whitespace can be preserved by setting the renderWhitespace property to true.",displayName:"Text",props:{children:{defaultValue:null,description:"Pass the text as direct child of Text",name:"children",required:!1,type:{name:"ReactNode"}},renderWhitespace:{defaultValue:{value:"false"},description:"Defines how white-space inside <code>Text</code> is handled. If set to true, sequences of white space are preserved.",name:"renderWhitespace",required:!1,type:{name:"boolean"}},wrapping:{defaultValue:{value:"true"},description:"Defines whether the text wraps when there is not enough space.",name:"wrapping",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{t as T};
//# sourceMappingURL=index-47d0a85a.js.map
