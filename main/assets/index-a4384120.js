import{_ as o}from"./iframe-9aa476e7.js";import{B as n}from"./Bar-f60d381d.js";import{w as a}from"./withWebComponent-b4c67a1a.js";const e=a("ui5-bar",["design"],[],["endContent","startContent"],[],()=>o(()=>import("./Bar-f60d381d.js").then(t=>t.b),["./Bar-f60d381d.js","./UI5Element-e590cd60.js","./CustomElementsScopeUtils-264b8a39.js","./withWebComponent-b4c67a1a.js","./utils-e9940b93.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./slot-76e48863.js","./ResizeHandler-34ecee99.js","./class-map-e1b423a4.js","./parameters-bundle.css-1b860e2a.js"],import.meta.url));e.displayName="Bar";e.defaultProps={design:n.Header};try{e.displayName="Bar",e.__docgenInfo={description:`The Bar is a container which is primarily used to hold titles, buttons and input elements and its design and functionality is the basis for page headers and footers. The component consists of three areas to hold its content - startContent slot, default slot and endContent slot. It has the capability to center content, such as a title, while having other components on the left and right side.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-Bar)`,displayName:"Bar",props:{children:{defaultValue:null,description:"Defines the content in the middle of the bar",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},endContent:{defaultValue:null,description:`Defines the content at the end of the bar

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="endContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"endContent",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},startContent:{defaultValue:null,description:`Defines the content at the start of the bar

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="startContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"startContent",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},design:{defaultValue:{value:"BarDesign.Header"},description:"Defines the component's design.\n\n**Note:** Available options are:\n\n*   `Header`\n*   `Subheader`\n*   `Footer`\n*   `FloatingFooter`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Header"'},{value:'"Subheader"'},{value:'"Footer"'},{value:'"FloatingFooter"'},{value:'"Header"'},{value:'"Subheader"'},{value:'"Footer"'},{value:'"FloatingFooter"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as B};
//# sourceMappingURL=index-a4384120.js.map
