import{m as d,k as p,p as L,a as I,s as E,q as i,v as M,z as q,S as G,w as C}from"./withWebComponent-CEvNJu7C.js";import"./utils-BPMdnTU-.js";import{d as S}from"./slot-_4yKMUwC.js";import{c as $}from"./Icon-Cf72TZgw.js";import{s as V}from"./parameters-bundle.css-DY1ryZJt.js";import{a as k}from"./Title-1rDkpSXf.js";import{d as N}from"./useIsomorphicLayoutEffect-BE7Iif4x.js";function R(r,e,t){return d`<div class="ui5-form-root" role="${p(this.effectiveAccessibleRole)}" aria-labelledby="${p(this.effectiveАccessibleNameRef)}">${this.hasHeader?z.call(this,r,e,t):void 0}<div class="ui5-form-layout" part="layout">${this.hasGroupItems?j.call(this,r,e,t):O.call(this,r,e,t)}</div></div>`}function z(r,e,t){return d`<div class="ui5-form-header" part="header">${this.hasCustomHeader?U.call(this,r,e,t):W.call(this,r,e,t)}</div>`}function U(r,e,t){return d`<slot name="header"></slot>`}function W(r,e,t){return t?d`<${L("ui5-title",e,t)} id="${p(this._id)}-header-text" level="H4">${p(this.headerText)}</${L("ui5-title",e,t)}>`:d`<ui5-title id="${p(this._id)}-header-text" level="H4">${p(this.headerText)}</ui5-title>`}function j(r,e,t){return d`${$(this.groupItemsInfo,(o,n)=>o._id||n,(o,n)=>H.call(this,r,e,t,o,n))}`}function H(r,e,t,o,n){return d`<div class="ui5-form-column ${p(o.classes)}" part="column"><div class="ui5-form-group" role="form" aria-labelledby="${p(o.accessibleNameRef)}">${o.groupItem.headerText?A.call(this,r,e,t,o,n):void 0}<div class="ui5-form-group-layout"><slot name="${p(o.groupItem._individualSlot)}"></slot></div></div></div>`}function A(r,e,t,o,n){return t?d`<div class="ui5-form-group-heading"><${L("ui5-title",e,t)} id="${p(o.groupItem._id)}-group-header-text" level="H6">${p(o.groupItem.headerText)}</${L("ui5-title",e,t)}></div>`:d`<div class="ui5-form-group-heading"><ui5-title id="${p(o.groupItem._id)}-group-header-text" level="H6">${p(o.groupItem.headerText)}</ui5-title></div>`}function O(r,e,t){return d`${$(this.itemsInfo,(o,n)=>o._id||n,(o,n)=>P.call(this,r,e,t,o,n))}`}function P(r,e,t,o,n){return d`<div class="ui5-form-item ${p(o.classes)}"><slot name="${p(o.item._individualSlot)}"></slot></div>`}I("@ui5/webcomponents-theming","sap_horizon",async()=>E);I("@ui5/webcomponents","sap_horizon",async()=>V);const B={packageName:"@ui5/webcomponents",fileName:"themes/Form.css.ts",content:`@container (max-width: 600px){.ui5-form-layout{grid-template-columns:1fr}::slotted(*){justify-self:start}::slotted(:nth-child(2n)){margin-bottom:.5rem}}@container (width > 600px) and (width <= 1024px){.ui5-form-layout{grid-template-columns:1fr}:host([columns-m="1"]) .ui5-form-layout{grid-template-columns:1fr}:host([columns-m="2"]) .ui5-form-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column-spanM-2{grid-column:span 2}.ui5-form-column-spanM-2 .ui5-form-group-layout{grid-template-columns:repeat(2,1fr)}}@container (width > 1024px) and (width <= 1440px){.ui5-form-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column{grid-template-columns:1fr}:host([columns-l="1"]) .ui5-form-layout{grid-template-columns:1fr}:host([columns-l="2"]) .ui5-form-layout{grid-template-columns:repeat(2,1fr)}:host([columns-l="3"]) .ui5-form-layout{grid-template-columns:repeat(3,1fr)}.ui5-form-column-spanL-2{grid-column:span 2}.ui5-form-column-spanL-2 .ui5-form-group-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column-spanL-3{grid-column:span 3}.ui5-form-column-spanL-3 .ui5-form-group-layout{grid-template-columns:repeat(3,1fr)}}@container (min-width: 1441px){.ui5-form-layout{grid-template-columns:repeat(3,1fr)}:host([columns-xl="1"]) .ui5-form-layout{grid-template-columns:1fr}:host([columns-xl="2"]) .ui5-form-layout{grid-template-columns:repeat(2,1fr)}:host([columns-xl="3"]) .ui5-form-layout{grid-template-columns:repeat(3,1fr)}:host([columns-xl="4"]) .ui5-form-layout{grid-template-columns:repeat(4,1fr)}:host([columns-xl="5"]) .ui5-form-layout{grid-template-columns:repeat(5,1fr)}:host([columns-xl="6"]) .ui5-form-layout{grid-template-columns:repeat(6,1fr)}.ui5-form-column-spanXL-2{grid-column:span 2}.ui5-form-column-spanXL-2 .ui5-form-group-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column-spanXL-3{grid-column:span 3}.ui5-form-column-spanXL-3 .ui5-form-group-layout{grid-template-columns:repeat(3,1fr)}.ui5-form-column-spanXL-4{grid-column:span 4}.ui5-form-column-spanXL-4 .ui5-form-group-layout{grid-template-columns:repeat(4,1fr)}.ui5-form-column-spanXL-5{grid-column:span 5}.ui5-form-column-spanXL-5 .ui5-form-group-layout{grid-template-columns:repeat(5,1fr)}.ui5-form-column-spanXL-6{grid-column:span 6}.ui5-form-column-spanXL-6 .ui5-form-group-layout{grid-template-columns:repeat(6,1fr)}}.ui5-form-item-span-2{grid-column:span 2}.ui5-form-item-span-3{grid-column:span 3}.ui5-form-item-span-4{grid-column:span 4}.ui5-form-item-span-5{grid-column:span 5}.ui5-form-item-span-6{grid-column:span 6}@container (max-width: 600px){.ui5-form-item,.ui5-form-group{--ui5-v2-5-1-form-item-layout: var(--ui5-v2-5-1-form-item-layout-S)}:host([label-span-s="12"]) .ui5-form-item,:host([label-span-s="12"]) .ui5-form-group{--ui5-v2-5-1-form-item-label-justify: var(--ui5-v2-5-1-form-item-label-justify-span12);--ui5-v2-5-1-form-item-label-padding: var(--ui5-v2-5-1-form-item-label-padding-span12)}}@container (width > 600px) and (width <= 1024px){.ui5-form-item,.ui5-form-group{--ui5-v2-5-1-form-item-layout: var(--ui5-v2-5-1-form-item-layout-M)}:host([label-span-m="12"]) .ui5-form-item,:host([label-span-m="12"]) .ui5-form-group{--ui5-v2-5-1-form-item-label-justify: var(--ui5-v2-5-1-form-item-label-justify-span12);--ui5-v2-5-1-form-item-label-padding: var(--ui5-v2-5-1-form-item-label-padding-span12)}}@container (width > 1024px) and (width <= 1440px){.ui5-form-item,.ui5-form-group{--ui5-v2-5-1-form-item-layout: var(--ui5-v2-5-1-form-item-layout-L)}:host([label-span-l="12"]) .ui5-form-item,:host([label-span-l="12"]) .ui5-form-group{--ui5-v2-5-1-form-item-label-justify: var(--ui5-v2-5-1-form-item-label-justify-span12);--ui5-v2-5-1-form-item-label-padding: var(--ui5-v2-5-1-form-item-label-padding-span12)}}@container (min-width: 1441px){.ui5-form-item,.ui5-form-group{--ui5-v2-5-1-form-item-layout: var(--ui5-v2-5-1-form-item-layout-XL)}:host([label-span-xl="12"]) .ui5-form-item,:host([label-span-xl="12"]) .ui5-form-group{--ui5-v2-5-1-form-item-label-justify: var(--ui5-v2-5-1-form-item-label-justify-span12);--ui5-v2-5-1-form-item-label-padding: var(--ui5-v2-5-1-form-item-label-padding-span12)}}:host{display:block}.ui5-form-root{display:flex;flex-direction:column;background-color:var(--sapGroup_ContentBackground);border-radius:.75rem;container-type:inline-size}.ui5-form-header{display:flex;min-height:2.75rem;align-items:center;border-bottom:1px solid var(--sapGroup_TitleBorderColor);padding:.875rem 1rem;box-sizing:border-box}.ui5-form-layout{display:grid;column-gap:1rem;row-gap:.125rem;padding:1rem .75rem}.ui5-form-group-layout{display:grid;column-gap:1rem}.ui5-form-group-heading{height:var(--_ui5-v2-5-1-form-group-heading-height);line-height:var(--_ui5-v2-5-1-form-group-heading-height);padding-inline-start:.25rem}.ui5-form-column{padding-top:.5rem;padding-bottom:1rem;box-sizing:border-box}::slotted([ui5-form-group]){display:contents}
`};var u=function(r,e,t,o){var n=arguments.length,a=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,e,t,o);else for(var l=r.length-1;l>=0;l--)(s=r[l])&&(a=(n<3?s(a):n>3?s(e,t,a):s(e,t))||a);return n>3&&a&&Object.defineProperty(e,t,a),a};const T=new Map,y={S:1,M:2,L:3,XL:6},Y=["S","M","L","Xl"],x=12,K="4fr 8fr 0fr",Q="1fr";let m=class extends G{constructor(){super(...arguments),this.layout="S1 M1 L2 XL3",this.labelSpan="S12 M4 L4 XL4",this.emptySpan="S0 M0 L0 XL0",this.itemSpacing="Normal",this.columnsS=1,this.labelSpanS=12,this.emptySpanS=0,this.columnsM=1,this.labelSpanM=4,this.emptySpanM=0,this.columnsL=2,this.labelSpanL=4,this.emptySpanL=0,this.columnsXl=3,this.labelSpanXl=4,this.emptySpanXl=0}onBeforeRendering(){this.setColumnLayout(),this.setFormItemLayout(),this.setGroupsColSpan()}onAfterRendering(){this.createAdditionalCSSStyleSheet(),this.setFastNavGroup()}setColumnLayout(){this.layout.split(" ").forEach(t=>{t.startsWith("S")?this.columnsS=parseInt(t.slice(1)):t.startsWith("M")?this.columnsM=parseInt(t.slice(1)):t.startsWith("L")?this.columnsL=parseInt(t.slice(1)):t.startsWith("XL")&&(this.columnsXl=parseInt(t.slice(2)))})}parseFormItemSpan(){this.labelSpan.split(" ").forEach(e=>{e.startsWith("S")?this.labelSpanS=parseInt(e.slice(1)):e.startsWith("M")?this.labelSpanM=parseInt(e.slice(1)):e.startsWith("L")?this.labelSpanL=parseInt(e.slice(1)):e.startsWith("XL")&&(this.labelSpanXl=parseInt(e.slice(2)))}),this.emptySpan.split(" ").forEach(e=>{e.startsWith("S")?this.emptySpanS=parseInt(e.slice(1)):e.startsWith("M")?this.emptySpanM=parseInt(e.slice(1)):e.startsWith("L")?this.emptySpanL=parseInt(e.slice(1)):e.startsWith("XL")&&(this.emptySpanXl=parseInt(e.slice(2)))})}setFormItemLayout(){this.parseFormItemSpan(),[{breakpoint:"S",labelSpan:this.labelSpanS,emptySpan:this.emptySpanS},{breakpoint:"M",labelSpan:this.labelSpanM,emptySpan:this.emptySpanM},{breakpoint:"L",labelSpan:this.labelSpanL,emptySpan:this.emptySpanL},{breakpoint:"XL",labelSpan:this.labelSpanXl,emptySpan:this.emptySpanXl}].forEach(e=>{if(this.isValidFormItemLayout(e.labelSpan,e.emptySpan)){const t=e.labelSpan===x?"1fr":`${e.labelSpan}fr ${x-(e.labelSpan+e.emptySpan)}fr ${e.emptySpan}fr`;this.style.setProperty(N(`--ui5-form-item-layout-${e.breakpoint}`),t)}else console.warn(`Form :: invalid usage of emptySpan and/or labelSpan in ${e.breakpoint} size. The labelSpan must be <=12 and when emptySpace is used - their combined values must not exceed 11.`),this.style.setProperty(N(`--ui5-form-item-layout-${e.breakpoint}`),e.breakpoint==="S"?Q:K)})}isValidFormItemLayout(e,t){return t===0?e<=x:e+t<=x-1}setFastNavGroup(){this.hasGroupItems?this.removeAttribute("data-sap-ui-fastnavgroup"):this.setAttribute("data-sap-ui-fastnavgroup","true")}setGroupsColSpan(){if(!this.hasGroupItems)return;const e=this.items.length;[...this.items].sort((o,n)=>(n==null?void 0:n.items.length)-(o==null?void 0:o.items.length)).forEach((o,n)=>{o.colsXl=this.getGroupsColSpan(this.columnsXl,e,n,o),o.colsL=this.getGroupsColSpan(this.columnsL,e,n,o),o.colsM=this.getGroupsColSpan(this.columnsM,e,n,o),o.colsS=this.getGroupsColSpan(this.columnsS,e,n,o)})}getGroupsColSpan(e,t,o,n){if(n.columnSpan)return n.columnSpan;if(e===1||e<=t)return 1;if(e%t===0)return e/t;const a=1,s=e-t;return s<=t?o<s?a+1:a:o===0?a+(s-t)+1:a+1}get hasGroupItems(){return this.items.some(e=>e.isGroup)}get hasHeader(){return this.hasCustomHeader||!!this.headerText}get hasCustomHeader(){return!!this.header.length}get effectiveАccessibleNameRef(){return this.hasCustomHeader?void 0:`${this._id}-header-text`}get effectiveAccessibleRole(){return this.hasGroupItems?"region":"form"}get groupItemsInfo(){return this.items.map(e=>{const t=this.getItemsInfo(Array.from(e.children));return Y.forEach(o=>{const n=e[`cols${o}`]||1,a=Math.ceil(t.length/n),s=n*a,l=n-(s-t.length)-1;let F=0;for(let _=0;_<s;_++){const X=Math.floor(_/a),D=_%a;D===a-1&&X>l||(t[F].item.style.setProperty(N(`--ui5-form-item-order-${o}`),`${X+D*n}`),F++)}}),{groupItem:e,accessibleNameRef:e.headerText?`${e._id}-group-header-text`:void 0,classes:`ui5-form-column-spanL-${e.colsL} ui5-form-column-spanXL-${e.colsXl} ui5-form-column-spanM-${e.colsM} ui5-form-column-spanS-${e.colsS}`,items:this.getItemsInfo(Array.from(e.children))}})}get itemsInfo(){return this.getItemsInfo()}getItemsInfo(e){return(e||this.items).map(t=>({item:t,classes:t.columnSpan?`ui5-form-item-span-${t.columnSpan}`:""}))}createAdditionalCSSStyleSheet(){[{breakpoint:"S",columns:this.columnsS},{breakpoint:"M",columns:this.columnsM},{breakpoint:"L",columns:this.columnsL},{breakpoint:"XL",columns:this.columnsXl}].forEach(e=>{const t=this.getAdditionalCSS(e.breakpoint,e.columns);t&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.getCSSStyleSheet(t)])})}getAdditionalCSS(e,t){if(y[e]>=t)return;const o=`${e}-${t}`;if(!T.has(o)){let n,a=y.S,s="",l=t;for(e==="S"?(a=y.S,n="@container (max-width: 599px) {"):e==="M"?(a=y.M,n="@container (width > 599px) and (width < 1024px) {"):e==="L"?(a=y.L,n="@container (width > 1023px) and (width < 1439px) {"):e==="XL"&&(n="@container (min-width: 1440px) {",a=y.XL);l>a;)s+=`
				:host([columns-${e.toLocaleLowerCase()}="${l}"]) .ui5-form-layout {
					grid-template-columns: repeat(${l}, 1fr);
				}

				.ui5-form-column-span${e}-${l},
				.ui5-form-item-span-${l} {
					grid-column: span ${l};
				}

				.ui5-form-column-span${e}-${l} .ui5-form-group-layout {
					grid-template-columns: repeat(${l}, 1fr);
				}
				`,l--;const F=`${n}${s}}`;T.set(o,F)}return T.get(o)}getCSSStyleSheet(e){const t=new CSSStyleSheet;return t.replaceSync(e),t}};u([i()],m.prototype,"layout",void 0);u([i()],m.prototype,"labelSpan",void 0);u([i()],m.prototype,"emptySpan",void 0);u([i()],m.prototype,"headerText",void 0);u([i()],m.prototype,"itemSpacing",void 0);u([S({type:HTMLElement})],m.prototype,"header",void 0);u([S({type:HTMLElement,default:!0,individualSlots:!0,invalidateOnChildChange:!0})],m.prototype,"items",void 0);u([i({type:Number})],m.prototype,"columnsS",void 0);u([i({type:Number})],m.prototype,"labelSpanS",void 0);u([i({type:Number})],m.prototype,"emptySpanS",void 0);u([i({type:Number})],m.prototype,"columnsM",void 0);u([i({type:Number})],m.prototype,"labelSpanM",void 0);u([i({type:Number})],m.prototype,"emptySpanM",void 0);u([i({type:Number})],m.prototype,"columnsL",void 0);u([i({type:Number})],m.prototype,"labelSpanL",void 0);u([i({type:Number})],m.prototype,"emptySpanL",void 0);u([i({type:Number})],m.prototype,"columnsXl",void 0);u([i({type:Number})],m.prototype,"labelSpanXl",void 0);u([i({type:Number})],m.prototype,"emptySpanXl",void 0);m=u([M({tag:"ui5-form",renderer:q,styles:B,template:R,dependencies:[k]})],m);m.define();const g=C("ui5-form",["emptySpan","headerText","itemSpacing","labelSpan","layout"],[],["header"],[]);g.displayName="Form";try{g.displayName="Form",g.__docgenInfo={description:`The Form is a layout component that arranges labels and form fields (like input fields) pairs
into a specific number of columns.

**Note:** The Form web component is a layout component, it isn't a replacement for the native \`form\` HTML element.
The Form web component does not provide any APIs for form submission.

### Structure

- **Form** (\`Form\`) is the top-level container component, responsible for the content layout and responsiveness.
- **FormGroup** (\`FormGroup\`) enables the grouping of the Form content.
- **FormItem** (\`FormItem\`) is a pair of label and form fields and can be used directly in a Form, or as part of a FormGroup.

The simplest Form (\`Form\`) consists of a header area on top,
displaying a header text (see the \`headingText\` property) and content below - an arbitrary number of FormItems (ui5-form-item),
representing the pairs of label and form fields.

And, there is also "grouping" available to assist the implementation of richer UIs.
This is enabled by the FormGroup (\`FormGroup\`) component.
In this case, the Form is structured into FormGroups and each FormGroup consists of FormItems.

### Responsiveness

The Form component reacts and changes its layout on predefined breakpoints.
Depending on its size, the Form content (FormGroups and FormItems) gets divided into one or more columns as follows:
- **S** (< 600px) – 1 column is recommended (default: 1)
- **M** (600px - 1022px) – up to 2 columns are recommended (default: 1)
- **L** (1023px - 1439px) - up to 3 columns are recommended (default: 2)
- **XL** (> 1439px) – up to 6 columns are recommended (default: 3)

To change the layout, use the \`layout\` property - f.e. layout="S1 M2 L3 XL6".

### Groups

To make better use of screen space, there is built-in logic to determine how many columns should a FormGroup occupy.

- **Example #1** (perfect match):
4 columns and 4 groups: each group will use 1 column.

- **Example #2** (balanced distribution):
4 columns and 2 groups: each group will use 2 columns.
6 columns and 2 groups: each group will use 3 columns.

- **Example #3** (unbalanced distribution):
3 columns and 2 groups: the larger one will use 2 columns, the smaller 1 column.
5 columns and 3 groups: two of the groups will use 2 columns each, the smallest 1 column.

**Note:** The size of a group element is determined by the number of FormItems assigned to it.
In the case of equality, the first in the DOM will use more columns, and the last - fewer columns.

- **Example #4** (more groups than columns):
3 columns and 4 groups: each FormGroup uses only 1 column, the last FormGroup will wrap on the second row.

### Groups Column Span

To influence the built-in group distribution, described in the previous section,
you can use the FormGroup's \`columnSpan\` property, that defines how many columns the group should expand to.

### Items Column Span

FormItem's columnSpan property defines how many columns the form item should expand to inside a form group or the form.

### Items Label Span

The placement of the labels depends on the size of the used column.
If there is enough space, the labels are next to their associated fields, otherwise  - above the fields.
By default, the labels take 4/12 of the FormItem, leaving 8/12 parts to associated fields.
You can control what space the labels should take via the \`labelSpan\` property.

**For example:** To always place the labels on top set: \`labelSpan="S12 M12 L12 XL12"\` property.

### Items Empty Span

By default, a form item spans 12 cells, fully divided between its label and field, with no empty space at the end:
- **Label:** occupies 4 cells.
- **Field:** occupies 8 cells.

The \`emptySpan\` property provides additional layout flexibility by defining empty space at the form item’s end.

**For example:** Setting "S0 M0 L3 XL3" (or just "L3 XL3") adjusts the layout as follows:
- **Label:** remains 4 cells.
- **Field:** is reduced to 5 cells.
- **Empty space:** 3 cells are added at the end.

Greater values increase the empty space at the end of the form item, reducing the space available for the label and its field.
However, setting \`emptySpan\` to 1 cell is recommended and typically sufficient to achieve a balanced layout.

### Navigation flow

The Form component supports two layout options for keyboard navigation:

#### Simple form

In this "simple form" layout, each \`FormItem\` acts as a standalone group
with one item, so focus moves horizontally across the grid from one \`FormItem\` to the next.
This layout is ideal for simpler forms and supports custom arrangements, e.g.,

\`\`\`
| 1 | 2 |
|   3   |
| 4 | 5 |
\`\`\`

#### Complex form

In this layout, items are grouped into \`FormGroup\` elements, allowing more complex configurations:

- **Single-Column Group**: Focus moves vertically down from one item to the next.
  \`\`\`
  | 1 |
  | 2 |
  | 3 |
  \`\`\`

- **Multi-Column Group**: Focus moves horizontally within each row, advancing to the next row after completing the current one.
  \`\`\`
  | 1 | 4 |
  | 2 | 5 |
  | 3 | 6 |
  \`\`\`

### Keyboard Handling

- [Tab] - Moves the focus to the next interactive element within the Form/FormGroup (if available) or to the next element in the tab chain outside the Form
- [Shift] + [Tab] - Moves the focus to the previous interactive element within the Form/FormGroup (if available) or to the previous element in the tab chain outside the Form
- [F6] - Moves the focus to the first interactive element of the next FormGroup (if available) or to the next element in the tab chain outside the Form
- [Shift] + [F6] - Moves the focus to the first interactive element of the previous FormGroup (if available) or to the previous element in the tab chain outside the Form

### ES6 Module Import

- import`,displayName:"Form",props:{children:{defaultValue:null,description:`Defines the component content - FormGroups or FormItems.

**Note:** Mixing FormGroups and standalone FormItems (not belonging to a group) is not supported.
Either use FormGroups and make sure all FormItems are part of a FormGroup, or use just FormItems without any FormGroups.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header area.

**Note:** When a \`header\` is provided, the \`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},emptySpan:{defaultValue:{value:'"S0 M0 L0 XL0"'},description:`Defines the number of cells that are empty at the end of each form item, configurable by breakpoint.

By default, a form item spans 12 cells, fully divided between its label (4 cells) and field (8 cells), with no empty space at the end.
The \`emptySpan\` provides additional layout flexibility by defining empty space at the form item’s end.

**Note:**
- The maximum allowable empty space is 10 cells. At least 1 cell each must remain for the label and the field.
- When \`emptySpan\` is specified (greater than 0), ensure that the combined value of \`emptySpan\` and \`labelSpan\` does not exceed 11. This guarantees a minimum of 1 cell for the field.

**Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"emptySpan",required:!1,type:{name:"string"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the component.\n\n**Note:** The property gets overridden by the `header` slot.",name:"headerText",required:!1,type:{name:"string"}},itemSpacing:{defaultValue:{value:'"Normal"'},description:`Defines the vertical spacing between form items.

**Note:** If the Form is meant to be switched between "non-edit" and "edit" modes,
we recommend using "Large" item spacing in "non-edit" mode, and "Normal" - for "edit" mode,
to avoid "jumping" effect, caused by the hight difference between texts in "non-edit" mode and the input fields in "edit" mode.`,name:"itemSpacing",required:!1,type:{name:"enum",value:[{value:'"Normal"'},{value:'"Normal"'},{value:'"Large"'},{value:'"Large"'}]}},labelSpan:{defaultValue:{value:'"S12 M4 L4 XL4"'},description:`Defines the width proportion of the labels and fields of a form item by breakpoint.

By default, the labels take 4/12 (or 1/3) of the form item in M,L and XL sizes,
and 12/12 in S size, e.g in S the label is on top of its associated field.

The supported values are between 1 and 12. Greater the number, more space the label will use.

**Note:** If "12" is set, the label will be displayed on top of its assosiated field.`,name:"labelSpan",required:!1,type:{name:"string"}},layout:{defaultValue:{value:'"S1 M1 L2 XL3"'},description:"Defines the number of columns to distribute the form content by breakpoint.\n\nSupported values:\n- `S` - 1 column by default (1 column is recommended)\n- `M` - 1 column by default (up to 2 columns are recommended)\n- `L` - 2 columns by default (up to 3 columns are recommended)\n- `XL` - 3 columns by default (up to 6 columns  are recommended)",name:"layout",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="Form",g.__docgenInfo={description:`The Form is a layout component that arranges labels and form fields (like input fields) pairs
into a specific number of columns.

**Note:** The Form web component is a layout component, it isn't a replacement for the native \`form\` HTML element.
The Form web component does not provide any APIs for form submission.

### Structure

- **Form** (\`Form\`) is the top-level container component, responsible for the content layout and responsiveness.
- **FormGroup** (\`FormGroup\`) enables the grouping of the Form content.
- **FormItem** (\`FormItem\`) is a pair of label and form fields and can be used directly in a Form, or as part of a FormGroup.

The simplest Form (\`Form\`) consists of a header area on top,
displaying a header text (see the \`headingText\` property) and content below - an arbitrary number of FormItems (ui5-form-item),
representing the pairs of label and form fields.

And, there is also "grouping" available to assist the implementation of richer UIs.
This is enabled by the FormGroup (\`FormGroup\`) component.
In this case, the Form is structured into FormGroups and each FormGroup consists of FormItems.

### Responsiveness

The Form component reacts and changes its layout on predefined breakpoints.
Depending on its size, the Form content (FormGroups and FormItems) gets divided into one or more columns as follows:
- **S** (< 600px) – 1 column is recommended (default: 1)
- **M** (600px - 1022px) – up to 2 columns are recommended (default: 1)
- **L** (1023px - 1439px) - up to 3 columns are recommended (default: 2)
- **XL** (> 1439px) – up to 6 columns are recommended (default: 3)

To change the layout, use the \`layout\` property - f.e. layout="S1 M2 L3 XL6".

### Groups

To make better use of screen space, there is built-in logic to determine how many columns should a FormGroup occupy.

- **Example #1** (perfect match):
4 columns and 4 groups: each group will use 1 column.

- **Example #2** (balanced distribution):
4 columns and 2 groups: each group will use 2 columns.
6 columns and 2 groups: each group will use 3 columns.

- **Example #3** (unbalanced distribution):
3 columns and 2 groups: the larger one will use 2 columns, the smaller 1 column.
5 columns and 3 groups: two of the groups will use 2 columns each, the smallest 1 column.

**Note:** The size of a group element is determined by the number of FormItems assigned to it.
In the case of equality, the first in the DOM will use more columns, and the last - fewer columns.

- **Example #4** (more groups than columns):
3 columns and 4 groups: each FormGroup uses only 1 column, the last FormGroup will wrap on the second row.

### Groups Column Span

To influence the built-in group distribution, described in the previous section,
you can use the FormGroup's \`columnSpan\` property, that defines how many columns the group should expand to.

### Items Column Span

FormItem's columnSpan property defines how many columns the form item should expand to inside a form group or the form.

### Items Label Span

The placement of the labels depends on the size of the used column.
If there is enough space, the labels are next to their associated fields, otherwise  - above the fields.
By default, the labels take 4/12 of the FormItem, leaving 8/12 parts to associated fields.
You can control what space the labels should take via the \`labelSpan\` property.

**For example:** To always place the labels on top set: \`labelSpan="S12 M12 L12 XL12"\` property.

### Items Empty Span

By default, a form item spans 12 cells, fully divided between its label and field, with no empty space at the end:
- **Label:** occupies 4 cells.
- **Field:** occupies 8 cells.

The \`emptySpan\` property provides additional layout flexibility by defining empty space at the form item’s end.

**For example:** Setting "S0 M0 L3 XL3" (or just "L3 XL3") adjusts the layout as follows:
- **Label:** remains 4 cells.
- **Field:** is reduced to 5 cells.
- **Empty space:** 3 cells are added at the end.

Greater values increase the empty space at the end of the form item, reducing the space available for the label and its field.
However, setting \`emptySpan\` to 1 cell is recommended and typically sufficient to achieve a balanced layout.

### Navigation flow

The Form component supports two layout options for keyboard navigation:

#### Simple form

In this "simple form" layout, each \`FormItem\` acts as a standalone group
with one item, so focus moves horizontally across the grid from one \`FormItem\` to the next.
This layout is ideal for simpler forms and supports custom arrangements, e.g.,

\`\`\`
| 1 | 2 |
|   3   |
| 4 | 5 |
\`\`\`

#### Complex form

In this layout, items are grouped into \`FormGroup\` elements, allowing more complex configurations:

- **Single-Column Group**: Focus moves vertically down from one item to the next.
  \`\`\`
  | 1 |
  | 2 |
  | 3 |
  \`\`\`

- **Multi-Column Group**: Focus moves horizontally within each row, advancing to the next row after completing the current one.
  \`\`\`
  | 1 | 4 |
  | 2 | 5 |
  | 3 | 6 |
  \`\`\`

### Keyboard Handling

- [Tab] - Moves the focus to the next interactive element within the Form/FormGroup (if available) or to the next element in the tab chain outside the Form
- [Shift] + [Tab] - Moves the focus to the previous interactive element within the Form/FormGroup (if available) or to the previous element in the tab chain outside the Form
- [F6] - Moves the focus to the first interactive element of the next FormGroup (if available) or to the next element in the tab chain outside the Form
- [Shift] + [F6] - Moves the focus to the first interactive element of the previous FormGroup (if available) or to the previous element in the tab chain outside the Form

### ES6 Module Import

- import`,displayName:"Form",props:{children:{defaultValue:null,description:`Defines the component content - FormGroups or FormItems.

**Note:** Mixing FormGroups and standalone FormItems (not belonging to a group) is not supported.
Either use FormGroups and make sure all FormItems are part of a FormGroup, or use just FormItems without any FormGroups.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header area.

**Note:** When a \`header\` is provided, the \`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},emptySpan:{defaultValue:{value:'"S0 M0 L0 XL0"'},description:`Defines the number of cells that are empty at the end of each form item, configurable by breakpoint.

By default, a form item spans 12 cells, fully divided between its label (4 cells) and field (8 cells), with no empty space at the end.
The \`emptySpan\` provides additional layout flexibility by defining empty space at the form item’s end.

**Note:**
- The maximum allowable empty space is 10 cells. At least 1 cell each must remain for the label and the field.
- When \`emptySpan\` is specified (greater than 0), ensure that the combined value of \`emptySpan\` and \`labelSpan\` does not exceed 11. This guarantees a minimum of 1 cell for the field.

**Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"emptySpan",required:!1,type:{name:"string"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the component.\n\n**Note:** The property gets overridden by the `header` slot.",name:"headerText",required:!1,type:{name:"string"}},itemSpacing:{defaultValue:{value:'"Normal"'},description:`Defines the vertical spacing between form items.

**Note:** If the Form is meant to be switched between "non-edit" and "edit" modes,
we recommend using "Large" item spacing in "non-edit" mode, and "Normal" - for "edit" mode,
to avoid "jumping" effect, caused by the hight difference between texts in "non-edit" mode and the input fields in "edit" mode.`,name:"itemSpacing",required:!1,type:{name:"enum",value:[{value:'"Normal"'},{value:'"Normal"'},{value:'"Large"'},{value:'"Large"'}]}},labelSpan:{defaultValue:{value:'"S12 M4 L4 XL4"'},description:`Defines the width proportion of the labels and fields of a form item by breakpoint.

By default, the labels take 4/12 (or 1/3) of the form item in M,L and XL sizes,
and 12/12 in S size, e.g in S the label is on top of its associated field.

The supported values are between 1 and 12. Greater the number, more space the label will use.

**Note:** If "12" is set, the label will be displayed on top of its assosiated field.`,name:"labelSpan",required:!1,type:{name:"string"}},layout:{defaultValue:{value:'"S1 M1 L2 XL3"'},description:"Defines the number of columns to distribute the form content by breakpoint.\n\nSupported values:\n- `S` - 1 column by default (1 column is recommended)\n- `M` - 1 column by default (up to 2 columns are recommended)\n- `L` - 2 columns by default (up to 3 columns are recommended)\n- `XL` - 3 columns by default (up to 6 columns  are recommended)",name:"layout",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var h=function(r,e,t,o){var n=arguments.length,a=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,e,t,o);else for(var l=r.length-1;l>=0;l--)(s=r[l])&&(a=(n<3?s(a):n>3?s(e,t,a):s(e,t))||a);return n>3&&a&&Object.defineProperty(e,t,a),a};let c=class extends G{constructor(){super(...arguments),this.colsS=1,this.colsM=1,this.colsL=1,this.colsXl=1,this.itemSpacing="Normal"}onBeforeRendering(){this.processFormItems()}processFormItems(){this.items.forEach(e=>{e.itemSpacing=this.itemSpacing})}get isGroup(){return!0}};h([i()],c.prototype,"headerText",void 0);h([i({type:Number})],c.prototype,"columnSpan",void 0);h([S({type:HTMLElement,default:!0})],c.prototype,"items",void 0);h([i({type:Number})],c.prototype,"colsS",void 0);h([i({type:Number})],c.prototype,"colsM",void 0);h([i({type:Number})],c.prototype,"colsL",void 0);h([i({type:Number})],c.prototype,"colsXl",void 0);h([i()],c.prototype,"itemSpacing",void 0);c=h([M({tag:"ui5-form-group",fastNavigation:!0})],c);c.define();const b=C("ui5-form-group",["columnSpan","headerText"],[],[],[]);b.displayName="FormGroup";try{b.displayName="FormGroup",b.__docgenInfo={description:`The FormGroup (ui5-form-group) represents a group inside the Form (ui5-form) component
and it consists of FormItem (ui5-form-item) components.

The layout of the FormGroup is mostly defined and controlled by the overarching Form (ui5-form) component.
Still, one can influence the layout via the FormGroup's \`columnSpan\` property,
that defines how many columns the group should expand to.

### Usage

Тhe FormGroup (ui5-form-group) allows to split a Form into groups,
e.g to group FormItems that logically belong together.

### ES6 Module Import

- import`,displayName:"FormGroup",props:{children:{defaultValue:null,description:"Defines the items of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines column span of the component,
e.g how many columns the group should span to.`,name:"columnSpan",required:!1,type:{name:"number"}},headerText:{defaultValue:{value:"undefined"},description:"Defines header text of the component.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{b.displayName="FormGroup",b.__docgenInfo={description:`The FormGroup (ui5-form-group) represents a group inside the Form (ui5-form) component
and it consists of FormItem (ui5-form-item) components.

The layout of the FormGroup is mostly defined and controlled by the overarching Form (ui5-form) component.
Still, one can influence the layout via the FormGroup's \`columnSpan\` property,
that defines how many columns the group should expand to.

### Usage

Тhe FormGroup (ui5-form-group) allows to split a Form into groups,
e.g to group FormItems that logically belong together.

### ES6 Module Import

- import`,displayName:"FormGroup",props:{children:{defaultValue:null,description:"Defines the items of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines column span of the component,
e.g how many columns the group should span to.`,name:"columnSpan",required:!1,type:{name:"number"}},headerText:{defaultValue:{value:"undefined"},description:"Defines header text of the component.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function J(r,e,t){return d`<div class="ui5-form-item-root"><div class="ui5-form-item-layout" part="layout"><div class="ui5-form-item-label" part="label"><slot name="labelContent"></slot></div><div class="ui5-form-item-content" part="content">${$(this.content,(o,n)=>o._id||n,(o,n)=>Z.call(this,r,e,t,o,n))}</div></div></div>`}function Z(r,e,t,o,n){return d`<div class="ui5-form-item-content-child"><slot name="${p(o._individualSlot)}"></slot></div>`}I("@ui5/webcomponents-theming","sap_horizon",async()=>E);I("@ui5/webcomponents","sap_horizon",async()=>V);const ee={packageName:"@ui5/webcomponents",fileName:"themes/FormItem.css.ts",content:`:host([column-span="1"]){grid-column:span 1}:host([column-span="2"]){grid-column:span 2}:host([column-span="3"]){grid-column:span 3}:host([column-span="4"]){grid-column:span 4}:host([column-span="5"]){grid-column:span 5}:host([column-span="6"]){grid-column:span 6}.ui5-form-item-root{container-type:inline-size;background-color:inherit;color:inherit}.ui5-form-item-layout{display:grid;grid-template-columns:var(--ui5-v2-5-1-form-item-layout);align-items:center}.ui5-form-item-label{padding:var(--ui5-v2-5-1-form-item-label-padding);padding-inline-end:var(--ui5-v2-5-1-form-item-label-padding-end);justify-self:var(--ui5-v2-5-1-form-item-label-justify)}.ui5-form-item-content{display:flex;padding:0 .25rem}.ui5-form-item-content-child{padding-inline-end:.5rem;box-sizing:border-box;width:100%}:host([item-spacing="Large"]) .ui5-form-item-layout{min-height:var(--_ui5-v2-5-1_form_item_min_height);padding-top:var(--_ui5-v2-5-1_form_item_padding);padding-bottom:var(--_ui5-v2-5-1_form_item_padding);box-sizing:border-box}::slotted([ui5-input]){width:100%}::slotted([ui5-select]){width:100%}@container (max-width: 600px){:host{order:var(--ui5-v2-5-1-form-item-order-S, unset)}}@container (width > 600px) and (width <= 1024px){:host{order:var(--ui5-v2-5-1-form-item-order-M, unset)}}@container (width > 1024px) and (width <= 1440px){:host{order:var(--ui5-v2-5-1-form-item-order-L, unset)}}@container (min-width: 1441px){:host{order:var(--ui5-v2-5-1-form-item-order-Xl, unset)}}
`};var w=function(r,e,t,o){var n=arguments.length,a=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,e,t,o);else for(var l=r.length-1;l>=0;l--)(s=r[l])&&(a=(n<3?s(a):n>3?s(e,t,a):s(e,t))||a);return n>3&&a&&Object.defineProperty(e,t,a),a};let f=class extends G{constructor(){super(...arguments),this.itemSpacing="Normal"}get isGroup(){return!1}};w([i({type:Number})],f.prototype,"columnSpan",void 0);w([S()],f.prototype,"labelContent",void 0);w([S({type:HTMLElement,default:!0,individualSlots:!0})],f.prototype,"content",void 0);w([i()],f.prototype,"itemSpacing",void 0);f=w([M({tag:"ui5-form-item",renderer:q,styles:ee,template:J})],f);f.define();const v=C("ui5-form-item",["columnSpan"],[],["labelContent"],[]);v.displayName="FormItem";try{v.displayName="FormItem",v.__docgenInfo={description:`The FormItem (ui5-form-item) represents pair of a label and
one or more components (text or text fields), associated to it.

### Usage

The FormItem is being used in FormGroup (ui5-form-group) or directly in Form (ui5-form).

### ES6 Module Import

- import`,displayName:"FormItem",props:{children:{defaultValue:null,description:"Defines the content of the component,\nassociated to `labelContent`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},labelContent:{defaultValue:null,description:`Defines the label of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="labelContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"labelContent",required:!1,type:{name:"UI5WCSlotsNode"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines the column span of the component,
e.g how many columns the component should span to.

**Note:** The column span should be a number between 1 and the available columns of the FormGroup (when items are placed in a group)
or the Form. The available columns can be affected by the FormGroup#columnSpan and/or the Form#layout.
A number bigger than the available columns won't take effect.`,name:"columnSpan",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{v.displayName="FormItem",v.__docgenInfo={description:`The FormItem (ui5-form-item) represents pair of a label and
one or more components (text or text fields), associated to it.

### Usage

The FormItem is being used in FormGroup (ui5-form-group) or directly in Form (ui5-form).

### ES6 Module Import

- import`,displayName:"FormItem",props:{children:{defaultValue:null,description:"Defines the content of the component,\nassociated to `labelContent`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},labelContent:{defaultValue:null,description:`Defines the label of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="labelContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"labelContent",required:!1,type:{name:"UI5WCSlotsNode"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines the column span of the component,
e.g how many columns the component should span to.

**Note:** The column span should be a number between 1 and the available columns of the FormGroup (when items are placed in a group)
or the Form. The available columns can be affected by the FormGroup#columnSpan and/or the Form#layout.
A number bigger than the available columns won't take effect.`,name:"columnSpan",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{g as F,b as a,v as b};
