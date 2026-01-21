import{j as t}from"./iframe-DYfg4QHt.js";import{useMDXComponents as n}from"./index-CVbrUuPE.js";import{I as i,F as m}from"./CommandsAndQueries-Bv0cgQmk.js";import{M as p,C as s}from"./blocks-BUAqhVj9.js";import"./Tag-DSyohh1a.js";import"./index-BmTrkp-7.js";import"./copy-D6hWl56-.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CdlnE1KK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7hJqHh2.js";import"./index-BKQsUqka.js";import"./index-Cey_WqgE.js";import"./Link-DNgH-frF.js";import"./index-DHfPdgXp.js";import"./index-DGISTYKI.js";import"./index-91p8b6xm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN-x3Tox.js";import"./addCustomCSSWithScoping-D5zE1nWM.js";import"./index-Cmi2IW4V.js";import"./information-DmJ60sG9.js";import"./sys-enter-2-DM66m4rJ.js";import"./alert-CCfcH-Mh.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vgLY-pWJ.js";import"./delete-D34_mFXP.js";import"./settings-gx1Rt1L_.js";import"./NoData-DlyRoGui.js";import"./IllustratedMessage-DRxGb1zp.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B7x9pabn.js";import"./index-DahuAuMf.js";import"./index-BeUWAGwZ.js";import"./slim-arrow-down-CW3E1SKi.js";import"./Input-iisXfHsF.js";import"./ResponsivePopoverCommon.css-CUkbRKkQ.js";import"./ValueStateMessage.css-JCR7oNs7.js";import"./Suggestions.css-CvEadgHg.js";import"./ListBoxItemGroupTemplate-CVIbduo6.js";import"./ComboBoxItemGroup-NvpVhGDp.js";import"./ListItemBaseTemplate-C8z7WXl_.js";import"./Token-XCzL_gO_.js";import"./ScrollEnablement-CNfKzKUR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard--jyjJfbY.js";import"./ToggleButton-CNFVQAAc.js";import"./SuggestionItem-evSaZZRy.js";import"./index-DZ5Gyh8u.js";import"./Option-BXSqJg_S.js";import"./index-CQqiTtty.js";import"./SegmentedButton-BjQ27BtY.js";import"./index-CVlyf3BN.js";import"./Select-CVTIiGaA.js";import"./InvisibleMessage-CgGc0QHI.js";import"./slim-arrow-down-Y-ZQwTJr.js";import"./index-C-fiAxLB.js";import"./index-B18_A3pn.js";import"./index-Co1UuDMa.js";import"./index-C0HSA-PR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CoR2QbFK.js";import"./group-2-CBo-4-zi.js";import"./sort-descending-PAYd66BW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dzn1Xrdp.js";import"./utils-9o_atc5t.js";import"./index-DGWGpo3w.js";import"./index-CObhiRst.js";import"./index-yUqfaSMu.js";import"./navigation-down-arrow-ZAYOJffR.js";import"./navigation-right-arrow-CeM1y1gw.js";import"./navigation-right-arrow-yI36QQVV.js";import"./useCurrentTheme-PNoownmV.js";import"./index-BBshEaSl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CSLDn2Wo.js";import"./paper-plane-Bj3JAkAg.js";import"./index-CWOZpVQI.js";import"./less-CeHycIPZ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
