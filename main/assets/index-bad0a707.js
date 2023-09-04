import{_ as a}from"./iframe-9aa476e7.js";import{I as n,a as l}from"./IllustratedMessage-aab77b4a.js";import{w as o}from"./withWebComponent-b4c67a1a.js";const e=o("ui5-illustrated-message",["accessibleNameRef","name","size","subtitleText","titleText"],[],["subtitle"],[],()=>a(()=>import("./IllustratedMessage-aab77b4a.js").then(t=>t.d),["./IllustratedMessage-aab77b4a.js","./UI5Element-e590cd60.js","./CustomElementsScopeUtils-264b8a39.js","./withWebComponent-b4c67a1a.js","./utils-e9940b93.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./slot-76e48863.js","./ResizeHandler-34ecee99.js","./AriaLabelHelper-43a261ec.js","./Title-0fb688d3.js","./WrappingType-b81e595a.js","./i18n-defaults-2dcf78e8.js","./parameters-bundle.css-1b860e2a.js"],import.meta.url));e.displayName="IllustratedMessage";e.defaultProps={name:n.BeforeSearch,size:l.Auto};try{e.displayName="IllustratedMessage",e.__docgenInfo={description:'An IllustratedMessage is a recommended combination of a solution-oriented message, an engaging illustration, and conversational tone to better communicate an empty or a success state than just show a message alone. Each illustration has default internationalised title and subtitle texts. Also they can be managed with `titleText` and `subtitleText` properties. To display the desired illustration, use the `name` property, where you can find the list of all available illustrations.\n\n**Note:** By default the “BeforeSearch” illustration is loaded. To use other illustrations, make sure you import them in addition, for example:\n`import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js"`\n**Note:** Illustrations starting with the “Tnt” prefix are part of another illustration set. For example to use the “TntSuccess” illustration, add the following import::\n`import "@ui5/webcomponents-fiori/dist/illustrations/tnt/Success.js"`\n\n__Note:__ The `title` slot collides with the native HTML `title` attribute, so to customize the title (heading) of the component you need to pass it as slot. You can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/user-feedback-illustratedmessage--default-story#fully-customizable-title).\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-IllustratedMessage)',displayName:"IllustratedMessage",props:{children:{defaultValue:null,description:"Defines the component actions.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},subtitle:{defaultValue:null,description:`Defines the subtitle of the component.

**Note:** Using this slot, the default subtitle text of illustration and the value of \`subtitleText\` property will be overwritten.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="subtitle"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"subtitle",required:!1,type:{name:"UI5WCSlotsNode"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},name:{defaultValue:{value:"IllustrationMessageType.BeforeSearch"},description:'Defines the illustration name that will be displayed in the component.\n\nAvailable illustrations are:\n\n*   `AddColumn`\n*   `AddPeople`\n*   `AddDimensions`\n*   `BalloonSky`\n*   `BeforeSearch`\n*   `Connection`\n*   `EmptyCalendar`\n*   `EmptyList`\n*   `EmptyPlanningCalendar`\n*   `ErrorScreen`\n*   `FilterTable`\n*   `GroupTable`\n*   `NoActivities`\n*   `NoColumnsSet`\n*   `NoData`\n*   `NoEntries`\n*   `NoFilterResults`\n*   `NoMail_v1`\n*   `NoMail`\n*   `NoNotifications`\n*   `NoSavedItems_v1`\n*   `NoSavedItems`\n*   `NoSearchResults`\n*   `NoTasks_v1`\n*   `NoTasks`\n*   `NoDimensionsSet`\n*   `PageNotFound`\n*   `ReloadScreen`\n*   `ResizeColumn`\n*   `SearchEarth`\n*   `SearchFolder`\n*   `SimpleBalloon`\n*   `SimpleBell`\n*   `SimpleCalendar`\n*   `SimpleCheckMark`\n*   `SimpleConnection`\n*   `SimpleEmptyDoc`\n*   `SimpleEmptyList`\n*   `SimpleError`\n*   `SimpleMagnifier`\n*   `SimpleMail`\n*   `SimpleNoSavedItems`\n*   `SimpleNotFoundMagnifier`\n*   `SimpleReload`\n*   `SimpleTask`\n*   `SleepingBell`\n*   `SortColumn`\n*   `SuccessBalloon`\n*   `SuccessCheckMark`\n*   `SuccessHighFive`\n*   `SuccessScreen`\n*   `Survey`\n*   `Tent`\n*   `UnableToLoad`\n*   `UnableToLoadImage`\n*   `UnableToUpload`\n*   `UploadToCloud`\n*   `UploadCollection`\n*   `TntChartArea`\n*   `TntChartArea2`\n*   `TntChartBar`\n*   `TntChartBPMNFlow`\n*   `TntChartBullet`\n*   `TntChartDoughnut`\n*   `TntChartFlow`\n*   `TntChartGantt`\n*   `TntChartOrg`\n*   `TntChartPie`\n*   `TntCodePlaceholder`\n*   `TntCompany`\n*   `TntComponents`\n*   `TntExternalLink`\n*   `TntFaceID`\n*   `TntFingerprint`\n*   `TntLock`\n*   `TntMission`\n*   `TntNoApplications`\n*   `TntNoFlows`\n*   `TntNoUsers`\n*   `TntRadar`\n*   `TntSecrets`\n*   `TntServices`\n*   `TntSessionExpired`\n*   `TntSessionExpiring`\n*   `TntSuccess`\n*   `TntSuccessfulAuth`\n*   `TntSystems`\n*   `TntTeams`\n*   `TntTools`\n*   `TntUnableToLoad`\n*   `TntUnlock`\n*   `TntUnsuccessfulAuth`\n*   `TntUser2`\n\n\n\n**Note:** By default the `BeforeSearch` illustration is loaded.\nWhen using an illustration type, other than the default, it should be loaded in addition:\n`import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js";`\n\n**Note:** TNT illustrations cointain `Tnt` prefix in their name. You can import them removing the `Tnt` prefix like this:\n`import "@ui5/webcomponents-fiori/dist/illustrations/tnt/SessionExpired.js";`',name:"name",required:!1,type:{name:"enum",value:[{value:'"BeforeSearch"'},{value:'"NoActivities"'},{value:'"NoColumnsSet"'},{value:'"NoData"'},{value:'"NoMail"'},{value:'"NoMail_v1"'},{value:'"NoEntries"'},{value:'"NoNotifications"'},{value:'"NoSavedItems"'},{value:'"NoSavedItems_v1"'},{value:'"NoSearchResults"'},{value:'"NoTasks"'},{value:'"NoTasks_v1"'},{value:'"NoDimensionsSet"'},{value:'"UnableToLoad"'},{value:'"UnableToLoadImage"'},{value:'"UnableToUpload"'},{value:'"UploadToCloud"'},{value:'"AddColumn"'},{value:'"AddPeople"'},{value:'"AddDimensions"'},{value:'"BalloonSky"'},{value:'"Connection"'},{value:'"EmptyCalendar"'},{value:'"EmptyList"'},{value:'"EmptyPlanningCalendar"'},{value:'"ErrorScreen"'},{value:'"FilterTable"'},{value:'"GroupTable"'},{value:'"NoFilterResults"'},{value:'"PageNotFound"'},{value:'"ReloadScreen"'},{value:'"ResizeColumn"'},{value:'"SearchEarth"'},{value:'"SearchFolder"'},{value:'"SimpleBalloon"'},{value:'"SimpleBell"'},{value:'"SimpleCalendar"'},{value:'"SimpleCheckMark"'},{value:'"SimpleConnection"'},{value:'"SimpleEmptyDoc"'},{value:'"SimpleEmptyList"'},{value:'"SimpleError"'},{value:'"SimpleMagnifier"'},{value:'"SimpleMail"'},{value:'"SimpleNoSavedItems"'},{value:'"SimpleNotFoundMagnifier"'},{value:'"SimpleReload"'},{value:'"SimpleTask"'},{value:'"SleepingBell"'},{value:'"SortColumn"'},{value:'"SuccessBalloon"'},{value:'"SuccessCheckMark"'},{value:'"SuccessHighFive"'},{value:'"SuccessScreen"'},{value:'"Survey"'},{value:'"Tent"'},{value:'"UploadCollection"'},{value:'"TntChartArea"'},{value:'"TntChartArea2"'},{value:'"TntChartBar"'},{value:'"TntChartBPMNFlow"'},{value:'"TntChartBullet"'},{value:'"TntChartDoughnut"'},{value:'"TntChartFlow"'},{value:'"TntChartGantt"'},{value:'"TntChartOrg"'},{value:'"TntChartPie"'},{value:'"TntCodePlaceholder"'},{value:'"TntCompany"'},{value:'"TntComponents"'},{value:'"TntExternalLink"'},{value:'"TntFaceID"'},{value:'"TntFingerprint"'},{value:'"TntLock"'},{value:'"TntMission"'},{value:'"TntNoApplications"'},{value:'"TntNoFlows"'},{value:'"TntNoUsers"'},{value:'"TntRadar"'},{value:'"TntSecrets"'},{value:'"TntServices"'},{value:'"TntSessionExpired"'},{value:'"TntSessionExpiring"'},{value:'"TntSuccess"'},{value:'"TntSuccessfulAuth"'},{value:'"TntSystems"'},{value:'"TntTeams"'},{value:'"TntTools"'},{value:'"TntUnableToLoad"'},{value:'"TntUnlock"'},{value:'"TntUnsuccessfulAuth"'},{value:'"TntUser2"'},{value:'"BeforeSearch"'},{value:'"NoActivities"'},{value:'"NoColumnsSet"'},{value:'"NoData"'},{value:'"NoMail"'},{value:'"NoMail_v1"'},{value:'"NoEntries"'},{value:'"NoNotifications"'},{value:'"NoSavedItems"'},{value:'"NoSavedItems_v1"'},{value:'"NoSearchResults"'},{value:'"NoTasks"'},{value:'"NoTasks_v1"'},{value:'"NoDimensionsSet"'},{value:'"UnableToLoad"'},{value:'"UnableToLoadImage"'},{value:'"UnableToUpload"'},{value:'"UploadToCloud"'},{value:'"AddColumn"'},{value:'"AddPeople"'},{value:'"AddDimensions"'},{value:'"BalloonSky"'},{value:'"Connection"'},{value:'"EmptyCalendar"'},{value:'"EmptyList"'},{value:'"EmptyPlanningCalendar"'},{value:'"ErrorScreen"'},{value:'"FilterTable"'},{value:'"GroupTable"'},{value:'"NoFilterResults"'},{value:'"PageNotFound"'},{value:'"ReloadScreen"'},{value:'"ResizeColumn"'},{value:'"SearchEarth"'},{value:'"SearchFolder"'},{value:'"SimpleBalloon"'},{value:'"SimpleBell"'},{value:'"SimpleCalendar"'},{value:'"SimpleCheckMark"'},{value:'"SimpleConnection"'},{value:'"SimpleEmptyDoc"'},{value:'"SimpleEmptyList"'},{value:'"SimpleError"'},{value:'"SimpleMagnifier"'},{value:'"SimpleMail"'},{value:'"SimpleNoSavedItems"'},{value:'"SimpleNotFoundMagnifier"'},{value:'"SimpleReload"'},{value:'"SimpleTask"'},{value:'"SleepingBell"'},{value:'"SortColumn"'},{value:'"SuccessBalloon"'},{value:'"SuccessCheckMark"'},{value:'"SuccessHighFive"'},{value:'"SuccessScreen"'},{value:'"Survey"'},{value:'"Tent"'},{value:'"UploadCollection"'},{value:'"TntChartArea"'},{value:'"TntChartArea2"'},{value:'"TntChartBar"'},{value:'"TntChartBPMNFlow"'},{value:'"TntChartBullet"'},{value:'"TntChartDoughnut"'},{value:'"TntChartFlow"'},{value:'"TntChartGantt"'},{value:'"TntChartOrg"'},{value:'"TntChartPie"'},{value:'"TntCodePlaceholder"'},{value:'"TntCompany"'},{value:'"TntComponents"'},{value:'"TntExternalLink"'},{value:'"TntFaceID"'},{value:'"TntFingerprint"'},{value:'"TntLock"'},{value:'"TntMission"'},{value:'"TntNoApplications"'},{value:'"TntNoFlows"'},{value:'"TntNoUsers"'},{value:'"TntRadar"'},{value:'"TntSecrets"'},{value:'"TntServices"'},{value:'"TntSessionExpired"'},{value:'"TntSessionExpiring"'},{value:'"TntSuccess"'},{value:'"TntSuccessfulAuth"'},{value:'"TntSystems"'},{value:'"TntTeams"'},{value:'"TntTools"'},{value:'"TntUnableToLoad"'},{value:'"TntUnlock"'},{value:'"TntUnsuccessfulAuth"'},{value:'"TntUser2"'}]}},size:{defaultValue:{value:"IllustrationMessageSize.Auto"},description:"Determines which illustration breakpoint variant is used.\n\nAvailable options are:\n\n*   `Auto`\n*   `Base`\n*   `Spot`\n*   `Dialog`\n*   `Scene`\n\nAs `IllustratedMessage` adapts itself around the `Illustration`, the other elements of the component are displayed differently on the different breakpoints/illustration sizes.",name:"size",required:!1,type:{name:"enum",value:[{value:'"Dialog"'},{value:'"Auto"'},{value:'"Auto"'},{value:'"Base"'},{value:'"Spot"'},{value:'"Dialog"'},{value:'"Scene"'},{value:'"Base"'},{value:'"Spot"'},{value:'"Scene"'}]}},subtitleText:{defaultValue:null,description:`Defines the subtitle of the component.

**Note:** Using this property, the default subtitle text of illustration will be overwritten.

**Note:** Using \`subtitle\` slot, the default of this property will be overwritten.`,name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:null,description:`Defines the title of the component.

**Note:** Using this property, the default title text of illustration will be overwritten.`,name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as I};
//# sourceMappingURL=index-bad0a707.js.map
