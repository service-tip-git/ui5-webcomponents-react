import{M as u,C as d,e as y,b as f}from"./chunk-S4VUQJ4A-5100a69a.js";import{D as r}from"./index-84543887.js";import{C as s}from"./Persian-0388e079.js";import"./Gregorian-b6cfe3ab.js";import{V as m}from"./ValueState-ab6838cc.js";import{A as h}from"./DomRefTable.module-6eaea8ef.js";import{D as g}from"./DocsHeader-60c6061f.js";import{F as b}from"./Footer-bc468449.js";import{j as e}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{D}from"./DomRefTable-a4833042.js";import{u as n}from"./index-59d6410c.js";import"./iframe-57e6b318.js";import"../sb-preview/runtime.js";import"./index-d203965f.js";import"./index-b42968db.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./withWebComponent-b4c67a1a.js";import"./utils-e9940b93.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./UI5Element-e590cd60.js";import"./Calendar-8205517b.js";import"./Icon-b897d66f.js";import"./Icons-65b34360.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./LocaleData-c95d6f94.js";import"./slim-arrow-left-8e2d770b.js";import"./slim-arrow-right-7a309837.js";import"./class-map-e1b423a4.js";import"./i18n-defaults-d5195a49.js";import"./style-map-ecc46a93.js";import"./DatePicker-bb316244.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./HasPopup-47461347.js";import"./Button-4505b9f6.js";import"./MarkedEvents-b83081e9.js";import"./ResponsivePopover-ffa286b7.js";import"./PopupUtils-f407c5e4.js";import"./getActiveElement-bcae01ed.js";import"./Popover-742c9988.js";import"./PopupsCommon.css-97942203.js";import"./FocusableElements-d024bb16.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-34ecee99.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-4a87524a.js";import"./Dialog-cf714d6a.js";import"./information-e97f915a.js";import"./alert-7494fabe.js";import"./Title-0fb688d3.js";import"./WrappingType-b81e595a.js";import"./Input-4e4191f2.js";import"./Suggestions.css-91a648c4.js";import"./ResponsivePopoverCommon.css-5a4ca537.js";import"./ValueStateMessage.css-ca082762.js";import"./react-jss.esm-2e5f50f2.js";import"./index-bead39d9.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-203b56de.js";import"./index-0c050832.js";import"./index-dcdbed31.js";import"./Avatar-60d18bb8.js";import"./employee-78fe46d2.js";import"./index-11aefe52.js";import"./index-a11ae6e8.js";import"./Link-a373b451.js";import"./index-343af056.js";import"./TableOfContent-811e3a06.js";import"./index-aa5143cc.js";import"./Label-69062358.js";import"./index-f220b36f.js";import"./index-e8d395a3.js";const v=`## Usage

The user can enter a date by: Using the calendar that opens in a popup or typing it in directly in the input field (not available for mobile devices). For the \`DateRangePicker\`
`,x=[{name:"endDateValue",readonly:"true",visibility:"public",type:"Date",description:"Returns the end date of the currently selected range as JavaScript Date instance."},{name:"startDateValue",readonly:"true",visibility:"public",type:"Date",description:"Returns the start date of the currently selected range as JavaScript Date instance."},{name:"closePicker",visibility:"public",description:"Closes the picker."},{name:"formatValue",visibility:"public",returnValue:{type:"string",description:"The date as string"},parameters:[{name:"date",type:"Date",optional:!1,description:"A Java Script date object to be formatted as string"}],description:"Formats a Java Script date object into a string representing a locale date according to the <code>formatPattern</code> property of the DatePicker instance"},{name:"isInValidRange",visibility:"public",returnValue:{type:"boolean"},parameters:[{name:"value",type:"string",optional:!0,defaultValue:'""',description:"A value to be checked"}],description:"Checks if a date is between the minimum and maximum date."},{name:"isOpen",visibility:"public",returnValue:{type:"boolean",description:"true if the picker is open, false otherwise"},description:"Checks if the picker is open."},{name:"isValid",visibility:"public",returnValue:{type:"boolean"},parameters:[{name:"value",type:"string",optional:!0,defaultValue:'""',description:"A value to be tested against the current date format"}],description:"Checks if a value is valid against the current date format of the DatePicker."},{name:"openPicker",visibility:"public",returnValue:{type:"Promise",description:"Resolves when the picker is open"},description:"Opens the picker."}];function j(t={}){const{wrapper:o}=Object.assign({},n(),t.components);return o?e.jsx(o,{...t,children:e.jsx(a,{})}):a();function a(){const p=Object.assign({h2:"h2"},n(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Inputs / DateRangePicker",component:r,argTypes:{valueStateMessage:{control:{disable:!0}}},args:{primaryCalendarType:s.Gregorian,valueState:m.None}}),`
`,e.jsx(g,{since:"0.10.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(p.h2,{id:"example",children:"Example"}),`
`,e.jsx(d,{children:e.jsx(y,{name:"Default",children:l=>e.jsx(r,{...l})})}),`
`,e.jsx(p.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{story:"Default"}),`
`,e.jsx(f,{children:v}),`
`,e.jsx(D,{rows:x}),`
`,e.jsx(b,{})]})}}const c=t=>e.jsx(r,{...t});c.storyName="Default";c.parameters={storySource:{source:`args => {
  return <DateRangePicker {...args} />;
}`}};const i={title:"Inputs / DateRangePicker",component:r,args:{primaryCalendarType:s.Gregorian,valueState:m.None},argTypes:{valueStateMessage:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:j};const et=["defaultStory"];export{et as __namedExportsOrder,i as default,c as defaultStory};
//# sourceMappingURL=DateRangePicker.stories-a3132099.js.map
