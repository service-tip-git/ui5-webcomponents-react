import{j as y}from"./jsx-runtime-CLpGMVip.js";import{c as b}from"./clsx-B-dksMZM.js";import{r as w}from"./index-D23YZj_x.js";import{u as C}from"./useStylesheet-DNyxTWaC.js";var t=(e=>(e.Start="Start",e.Center="Center",e.End="End",e.Baseline="Baseline",e.Stretch="Stretch",e))(t||{}),n=(e=>(e.Column="Column",e.ColumnReverse="ColumnReverse",e.Row="Row",e.RowReverse="RowReverse",e))(n||{}),u=(e=>(e.Start="Start",e.Center="Center",e.End="End",e.SpaceAround="SpaceAround",e.SpaceBetween="SpaceBetween",e))(u||{}),r=(e=>(e.NoWrap="NoWrap",e.Wrap="Wrap",e.WrapReverse="WrapReverse",e))(r||{});const S="@layer ui5-webcomponents-react{._flexBox_11fgm_1{display:flex}._flexBox_11fgm_1:where(._fitContainer_11fgm_4){height:100%;width:100%}._flexBox_11fgm_1:where(._justifyContentStart_11fgm_11){justify-content:flex-start}._flexBox_11fgm_1:where(._justifyContentEnd_11fgm_15){justify-content:flex-end}._flexBox_11fgm_1:where(._justifyContentCenter_11fgm_19){justify-content:center}._flexBox_11fgm_1:where(._justifyContentSpaceAround_11fgm_23){justify-content:space-around}._flexBox_11fgm_1:where(._justifyContentSpaceBetween_11fgm_27){justify-content:space-between}._flexBox_11fgm_1:where(._alignItemsStart_11fgm_33){align-items:flex-start}._flexBox_11fgm_1:where(._alignItemsEnd_11fgm_37){align-items:flex-end}._flexBox_11fgm_1:where(._alignItemsCenter_11fgm_41){align-items:center}._flexBox_11fgm_1:where(._alignItemsStretch_11fgm_45){align-items:stretch}._flexBox_11fgm_1:where(._alignItemsBaseline_11fgm_49){align-items:baseline}._flexBoxDisplayInline_11fgm_54{display:inline-flex}._flexBoxDirectionColumn_11fgm_58{flex-direction:column}._flexBoxDirectionColumnReverse_11fgm_62{flex-direction:column-reverse}._flexBoxDirectionRow_11fgm_66{flex-direction:row}._flexBoxDirectionRowReverse_11fgm_70{flex-direction:row-reverse}._flexWrapNoWrap_11fgm_74{flex-wrap:nowrap}._flexWrapWrap_11fgm_78{flex-wrap:wrap}._flexWrapWrapReverse_11fgm_82{flex-wrap:wrap-reverse}}",a={flexBox:"_flexBox_11fgm_1",fitContainer:"_fitContainer_11fgm_4",justifyContentStart:"_justifyContentStart_11fgm_11",justifyContentEnd:"_justifyContentEnd_11fgm_15",justifyContentCenter:"_justifyContentCenter_11fgm_19",justifyContentSpaceAround:"_justifyContentSpaceAround_11fgm_23",justifyContentSpaceBetween:"_justifyContentSpaceBetween_11fgm_27",alignItemsStart:"_alignItemsStart_11fgm_33",alignItemsEnd:"_alignItemsEnd_11fgm_37",alignItemsCenter:"_alignItemsCenter_11fgm_41",alignItemsStretch:"_alignItemsStretch_11fgm_45",alignItemsBaseline:"_alignItemsBaseline_11fgm_49",flexBoxDisplayInline:"_flexBoxDisplayInline_11fgm_54",flexBoxDirectionColumn:"_flexBoxDirectionColumn_11fgm_58",flexBoxDirectionColumnReverse:"_flexBoxDirectionColumnReverse_11fgm_62",flexBoxDirectionRow:"_flexBoxDirectionRow_11fgm_66",flexBoxDirectionRowReverse:"_flexBoxDirectionRowReverse_11fgm_70",flexWrapNoWrap:"_flexWrapNoWrap_11fgm_74",flexWrapWrap:"_flexWrapWrap_11fgm_78",flexWrapWrapReverse:"_flexWrapWrapReverse_11fgm_82"},l=w.forwardRef((e,o)=>{const{children:i,justifyContent:s=u.Start,direction:v=n.Row,alignItems:m=t.Stretch,displayInline:p,wrap:f=r.NoWrap,className:d,fitContainer:c,as:_="div",...h}=e;C(S,l.displayName);const g=b(a.flexBox,a[`flexBoxDirection${v}`],a[`justifyContent${s}`],a[`alignItems${m}`],a[`flexWrap${f}`],p&&a.flexBoxDisplayInline,c&&a.fitContainer,d),x=_;return y.jsx(x,{ref:o,className:g,...h,children:i})});l.displayName="FlexBox";try{l.displayName="FlexBox",l.__docgenInfo={description:"The `FlexBox` builds the container for a flexible box layout by leveraging the CSS flexbox layout.",displayName:"FlexBox",props:{alignItems:{defaultValue:null,description:"Controls the alignment of items on the Cross Axis.<br />\n<b>Note:</b> Corresponds to `align-items`.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Start"'},{value:'"End"'},{value:'"Stretch"'},{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"Baseline"'},{value:'"Stretch"'},{value:'"Baseline"'}]}},direction:{defaultValue:null,description:"Controls how the items are placed in the `FlexBox`.<br />\n<b>Note:</b> Corresponds to `flex-direction`.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"Column"'},{value:'"ColumnReverse"'},{value:'"Row"'},{value:'"RowReverse"'},{value:'"Column"'},{value:'"ColumnReverse"'},{value:'"Row"'},{value:'"RowReverse"'}]}},displayInline:{defaultValue:null,description:"Determines whether the `FlexBox` is in `flex` or `inline-flex` mode.",name:"displayInline",required:!1,type:{name:"boolean"}},fitContainer:{defaultValue:null,description:"Determines whether the `FlexBox` will be sized to completely fill its container.\n\n__Note:__ `fitContainer` only works if the height of the containing block is specified (i.e. it doesn't depend on content height)",name:"fitContainer",required:!1,type:{name:"boolean"}},justifyContent:{defaultValue:null,description:"Defines how the browser distributes space between and around items along the main-axis.<br />\n<b>Note:</b> Corresponds to `justify-content`.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Start"'},{value:'"End"'},{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"SpaceAround"'},{value:'"SpaceBetween"'},{value:'"SpaceAround"'},{value:'"SpaceBetween"'}]}},wrap:{defaultValue:null,description:"Determines whether the `FlexBox` should wrap, when there is not enough space to display all items in one line.<br />\n<b>Note:</b> Corresponds to `flex-wrap`.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"NoWrap"'},{value:'"Wrap"'},{value:'"WrapReverse"'},{value:'"NoWrap"'},{value:'"Wrap"'},{value:'"WrapReverse"'}]}},children:{defaultValue:null,description:"Content of the `FlexBox`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"label"'},{value:'"search"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"table"'},{value:'"time"'},{value:'"header"'},{value:'"footer"'},{value:'"map"'},{value:'"input"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="FlexBox",l.__docgenInfo={description:"The `FlexBox` builds the container for a flexible box layout by leveraging the CSS flexbox layout.",displayName:"FlexBox",props:{alignItems:{defaultValue:null,description:"Controls the alignment of items on the Cross Axis.<br />\n<b>Note:</b> Corresponds to `align-items`.",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Start"'},{value:'"End"'},{value:'"Stretch"'},{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"Baseline"'},{value:'"Stretch"'},{value:'"Baseline"'}]}},direction:{defaultValue:null,description:"Controls how the items are placed in the `FlexBox`.<br />\n<b>Note:</b> Corresponds to `flex-direction`.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"Column"'},{value:'"ColumnReverse"'},{value:'"Row"'},{value:'"RowReverse"'},{value:'"Column"'},{value:'"ColumnReverse"'},{value:'"Row"'},{value:'"RowReverse"'}]}},displayInline:{defaultValue:null,description:"Determines whether the `FlexBox` is in `flex` or `inline-flex` mode.",name:"displayInline",required:!1,type:{name:"boolean"}},fitContainer:{defaultValue:null,description:"Determines whether the `FlexBox` will be sized to completely fill its container.\n\n__Note:__ `fitContainer` only works if the height of the containing block is specified (i.e. it doesn't depend on content height)",name:"fitContainer",required:!1,type:{name:"boolean"}},justifyContent:{defaultValue:null,description:"Defines how the browser distributes space between and around items along the main-axis.<br />\n<b>Note:</b> Corresponds to `justify-content`.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Start"'},{value:'"End"'},{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"SpaceAround"'},{value:'"SpaceBetween"'},{value:'"SpaceAround"'},{value:'"SpaceBetween"'}]}},wrap:{defaultValue:null,description:"Determines whether the `FlexBox` should wrap, when there is not enough space to display all items in one line.<br />\n<b>Note:</b> Corresponds to `flex-wrap`.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"NoWrap"'},{value:'"Wrap"'},{value:'"WrapReverse"'},{value:'"NoWrap"'},{value:'"Wrap"'},{value:'"WrapReverse"'}]}},children:{defaultValue:null,description:"Content of the `FlexBox`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"label"'},{value:'"search"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"table"'},{value:'"time"'},{value:'"header"'},{value:'"footer"'},{value:'"map"'},{value:'"input"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{l as F,n as a,u as b,t as c,r as d};
