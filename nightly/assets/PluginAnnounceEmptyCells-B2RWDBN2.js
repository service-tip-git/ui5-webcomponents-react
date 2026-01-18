import{j as t}from"./iframe-BayyK-Sd.js";import{useMDXComponents as n}from"./index-Bzssb8Xd.js";import{I as i,F as m}from"./CommandsAndQueries-BWULVlsD.js";import{M as p,C as s}from"./blocks-C_Hnd7fg.js";import"./Tag-BpBS-AuZ.js";import"./index-CvYFyR11.js";import"./copy-DZZbIDUz.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-QbrzZX1h.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiVk4GbQ.js";import"./index-DV2g_43r.js";import"./index-D_W1qX2w.js";import"./Link-DsRy4Mnv.js";import"./index-CTxam_11.js";import"./index-CvVYJJGO.js";import"./index-DGVYbyp5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CiI3G7zh.js";import"./addCustomCSSWithScoping-BRKADkGf.js";import"./index-CK9HJhHW.js";import"./information-D5ng3oI8.js";import"./sys-enter-2-C1yPBG5C.js";import"./alert-C5buViQ-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-OE18-JdZ.js";import"./delete-BbgUJXGi.js";import"./settings-BmyXWHXN.js";import"./NoData-CId8to51.js";import"./IllustratedMessage-DrJiWY3J.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-C-7XSeeS.js";import"./index-C_SEzddK.js";import"./index-Cfv719qF.js";import"./slim-arrow-down-CYWrhP8K.js";import"./Input-JXz_mghp.js";import"./ResponsivePopoverCommon.css-BE3AHcrB.js";import"./ValueStateMessage.css-CPPmdzjG.js";import"./Suggestions.css-DMbMSnFv.js";import"./ListBoxItemGroupTemplate-YGlaa4-L.js";import"./ComboBoxItemGroup-B66yYzM_.js";import"./ListItemBaseTemplate-C2wpCpOj.js";import"./Token-DJPiW-9k.js";import"./ScrollEnablement-b9VRk5D0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Qcq6pFUS.js";import"./ToggleButton-DNEd488t.js";import"./SuggestionItem-Ce7Hn2Zx.js";import"./index-CMGyAd1y.js";import"./Option-DsNeIMXC.js";import"./index-BKzi5p7m.js";import"./SegmentedButton-CjIp9jgc.js";import"./index-CGNi-nkR.js";import"./Select-W3YZdL-T.js";import"./InvisibleMessage-CV5ENGws.js";import"./slim-arrow-down-BfT4kuc7.js";import"./index-c6l7EBuN.js";import"./index-CphH-Mq2.js";import"./index-BovCb11M.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BItiagYO.js";import"./group-2-BYV4hW0u.js";import"./sort-descending-D8jO5ZBY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWjYcQuY.js";import"./utils-BxDZ9J52.js";import"./index-Ca_HsQoM.js";import"./index-BFBr5osT.js";import"./index-DIe0Mc4Y.js";import"./navigation-down-arrow-SKyq9Gew.js";import"./navigation-right-arrow-BNZl5xyh.js";import"./navigation-right-arrow-D0AjCoAk.js";import"./useCurrentTheme-BgQwIHp1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cy8kD9Ns.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlVbLN3l.js";import"./paper-plane-C7yKcpS7.js";import"./index-BCW3PpbP.js";import"./less-Dn7O_2zP.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(i,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{sourceState:"none",of:l}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const tableHooks = [useAnnounceEmptyCells] // this array should be memoized

<AnalyticalTable
  data={data}
  columns={columns}
  visibleRows={5}
  tableHooks={tableHooks}
/>
`})}),`
`,t.jsx(o.p,{children:t.jsx(o.strong,{children:"First data entry with empty values or undefined fields:"})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-js",children:`{
  age: undefined,
  friend: {
    name: '',
    age: 0
  },
  status: 'Error'
}
`})}),`
`,t.jsx(m,{})]})}function Rt(r={}){const{wrapper:o}={...n(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Rt as default};
