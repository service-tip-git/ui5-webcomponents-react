import{cm as x,m as b,cn as j,w,j as e}from"./iframe-CC5YTvQh.js";import{useMDXComponents as y}from"./index-Cq26BSP3.js";import{M as U,C as k,a as _,D as p,A as c}from"./blocks-BsOXarNI.js";import"./Tag-BlfrYy9_.js";import"./index-CzqjBntm.js";import{C as v}from"./ControlsWithNote-ZDm4iqv-.js";import{D as I}from"./DocsHeader-H0n6F9Rh.js";import{F as N}from"./CommandsAndQueries-CFtdiSUA.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{b as d,a as h}from"./index-B6BfvDqs.js";import{C as f,D as g}from"./UserMenu.stories-C_te7xUE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0rIxsAi.js";import"./sys-enter-2-DYbT0ikl.js";import"./alert-D4tt3RNk.js";import"./index-Dtg_ecO1.js";import"./index-DZNvYvST.js";import"./Link-BoZATccP.js";import"./copy-DAscILmB.js";import"./copy-Dmf1qML3.js";import"./GitHub-Mark-CfPo1jVr.js";import"./TableOfContent-Cy6EFdFa.js";import"./index-BoEyxgcJ.js";import"./index-ZUwBAUQq.js";import"./index-CBMZmkal.js";import"./index-BSqVcJze.js";import"./index-Dnx65cB5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BdkJ8A28.js";import"./addCustomCSSWithScoping-DLLu2c7G.js";import"./query-CzSBusdE.js";import"./Panel-ZZetTq-A.js";import"./slideUp-DNFkFHG8.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DWwRtY-U.js";import"./Bar-CN8GQtwG.js";import"./person-placeholder-wAtlxEWR.js";import"./person-placeholder-CBQW7Nk2.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./i18n-defaults-BS8OTJAB.js";import"./index-WRDtIoqV.js";import"./ListItemStandard-UOq8Eb3o.js";import"./ButtonBadge-D4H8xfHX.js";import"./search-CijUOOJ7.js";import"./overflow-ChzV0R4v.js";import"./overflow-CCy8C7eX.js";import"./slim-arrow-down-mUJEFf7l.js";import"./slim-arrow-down-CXRWIFXL.js";function S(){return[x.call(this)]}var D=function(t,n,i,s){var a=arguments.length,o=a<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,i):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,n,i,s);else for(var m=t.length-1;m>=0;m--)(l=t[m])&&(o=(a<3?l(o):a>3?l(n,i,o):l(n,i))||o);return a>3&&o&&Object.defineProperty(n,i,o),o};let u=class extends j{};u=D([b({tag:"ui5-user-menu-item-group",template:S})],u);u.define();const r=w("ui5-user-menu-item-group",["checkMode"],[],[],[]);r.displayName="UserMenuItemGroup";try{r.displayName="UserMenuItemGroup",r.__docgenInfo={description:"The `UserMenuItemGroup` component represents a group of items designed for use inside a `UserMenu`.\nItems belonging to the same group should be wrapped by a `UserMenuItemGroup`.\nEach group can have an `itemCheckMode` property, which defines the check mode for the items within the group.\nThe possible values for `itemCheckMode` are:\n- 'None' (default) - no items can be checked\n- 'Single' - Only one item can be checked at a time\n- 'Multiple' - Multiple items can be checked simultaneously\n\n**Note:** If the `itemCheckMode` property is set to 'Single', only one item can remain checked at any given time.\nIf multiple items are marked as checked, the last checked item will take precedence.\n\n### Usage\n\n`UserMenuItemGroup` represents a collection of `UserMenuItem` components that can have the same check mode.\nThe items are addeed to the group's `items` slot.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/UI5/webcomponents) | [Documentation](https://ui5.github.io/webcomponents/)",displayName:"UserMenuItemGroup",props:{children:{defaultValue:null,description:"Defines the items of this component.\n**Note:** The slot can hold any combination of components of type `ui5-menu-item` or `ui5-menu-separator` or both.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},checkMode:{defaultValue:{value:'"None"'},description:"Defines the component's check mode.",name:"checkMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"Single"'},{value:'"Multiple"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="UserMenuItemGroup",r.__docgenInfo={description:"The `UserMenuItemGroup` component represents a group of items designed for use inside a `UserMenu`.\nItems belonging to the same group should be wrapped by a `UserMenuItemGroup`.\nEach group can have an `itemCheckMode` property, which defines the check mode for the items within the group.\nThe possible values for `itemCheckMode` are:\n- 'None' (default) - no items can be checked\n- 'Single' - Only one item can be checked at a time\n- 'Multiple' - Multiple items can be checked simultaneously\n\n**Note:** If the `itemCheckMode` property is set to 'Single', only one item can remain checked at any given time.\nIf multiple items are marked as checked, the last checked item will take precedence.\n\n### Usage\n\n`UserMenuItemGroup` represents a collection of `UserMenuItem` components that can have the same check mode.\nThe items are addeed to the group's `items` slot.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/UI5/webcomponents) | [Documentation](https://ui5.github.io/webcomponents/)",displayName:"UserMenuItemGroup",props:{children:{defaultValue:null,description:"Defines the items of this component.\n**Note:** The slot can hold any combination of components of type `ui5-menu-item` or `ui5-menu-separator` or both.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},checkMode:{defaultValue:{value:'"None"'},description:"Defines the component's check mode.",name:"checkMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"Single"'},{value:'"Multiple"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function M(t){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...y(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(U,{of:f}),`
`,e.jsx(I,{of:f,experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(k,{of:g}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(v,{of:g}),`
`,e.jsx(n.h2,{id:"open-usermenu",children:"Open UserMenu"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"UserMenu"})," requires an ",e.jsx(n.code,{children:"opener"}),` so it knows where to anchor itself when opened.
To provide this, you can either:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Assign an ",e.jsx(n.code,{children:"id"})," to the element rendered in the ",e.jsx(n.code,{children:"profile"})," slot."]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"targetRef"})," provided in the ",e.jsx(n.code,{children:"detail"})," of the ",e.jsx(n.code,{children:"onProfileClick"})," event properties."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"via-targetref",children:["Via ",e.jsx(n.code,{children:"targetRef"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function RefOpener() {
  const [open, setOpen] = useState(false);
  const userMenuRef = useRef<UserMenuDomRef>(null);
  return (
    <>
      <ShellBar
        onProfileClick={(e) => {
          const { targetRef } = e.detail;
          userMenuRef.current.opener = targetRef;
          setOpen(true);
        }}
        profile={<Avatar initials="JD" />}
      />
      <UserMenu
        ref={userMenuRef}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
`})}),`
`,e.jsxs(n.h3,{id:"via-id",children:["Via ",e.jsx(n.code,{children:"id"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function IdOpener() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ShellBar
        onProfileClick={(e) => {
          setOpen(true);
        }}
        profile={<Avatar initials="JD" id="userMenuOpener" />}
      />
      <UserMenu
        open={open}
        opener="userMenuOpener"
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
`})}),`
`,e.jsx(_,{children:C}),`
`,e.jsx(n.h2,{id:"usermenuaccount",children:"UserMenuAccount"}),`
`,e.jsx(p,{of:d}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(n.h2,{id:"usermenuitem",children:"UserMenuItem"}),`
`,e.jsx(p,{of:h}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(n.h2,{id:"usermenuitemgroup",children:"UserMenuItemGroup"}),`
`,e.jsx(p,{of:r}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(N,{})]})}function Ie(t={}){const{wrapper:n}={...y(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(M,{...t})}):M(t)}export{Ie as default};
