import{j as o}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as m}from"./index-DyCphG7h.js";import{ae as n,af as e}from"./index-BJULStlV.js";import"./index-OrErW1tb.js";import"./index-CCcttyzs.js";import{C as s}from"./ControlsWithNote-Dz2tb8T3.js";import{D as a}from"./DocsHeader-BylHDx8N.js";import{F as c}from"./CommandsAndQueries-DQtoRwFG.js";import"./index-DysCNOs_.js";import"./WrappingType-CW8URInd.js";import"./Title-DnczWaCy.js";import{C as d,D as p}from"./Popover.stories-DDtqn11N.js";import"./iframe-DiiwZjT3.js";import"../sb-preview/runtime.js";import"./index-C4cLd1FO.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./withWebComponent-DpVKsRHi.js";import"./utils-BMpfTDbr.js";import"./useIsomorphicLayoutEffect-F-N6bu_1.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-Ch4ABsnB.js";import"./Icon-CrKv37md.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-D_LjlJHK.js";import"./alert-CiqdS0Ti.js";import"./class-map-CAgcI9af.js";import"./Button-CzXV-qq-.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-HqN2rB8b.js";import"./i18n-defaults-CMHHS2wK.js";import"./TagDesign-Dou_yO3g.js";import"./utils-xPrsdxq6.js";import"./main-Dcm2jhNK.js";import"./index-DA9k7rzT.js";import"./Tag-BwJ4pIZx.js";import"./sys-help-2-Dw9i_TLE.js";import"./index-x5zB9JtW.js";import"./Popover-CxadHYVC.js";import"./PopupsCommon.css-Bu1W85h-.js";import"./FocusableElements-DpmShrVF.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D2m47C26.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bigav4TG.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-cawFe0IV.js";import"./Link-CcG_uYXc.js";import"./chunk-NUUEMKO5-HnHkPTfL.js";import"./client-CqEfiX9M.js";import"./copy-C_xK9_A_.js";import"./copy-BtTL6xAX.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DLtQKbjK.js";import"./TableOfContent-DRym89KV.js";import"./index-BiL_8FWJ.js";import"./I18nStore-CXxqSOxg.js";import"./useStylesheet-BAIsnduv.js";import"./index-VxGFz2Tr.js";import"./index-kNlKigw5.js";import"./Label-D_ADNoJV.js";import"./index-DP-u0XOf.js";import"./index-A5FQ6SQw.js";import"./addCustomCSSWithScoping-DYmOnLgW.js";import"./index-qKU3PnwJ.js";import"./BusyIndicator-B17L6t2M.js";import"./index-BRnbcGtq.js";import"./index-CHrZj7jK.js";import"./Avatar-CLqwzIQ4.js";import"./employee-CUDhI-YO.js";import"./settings-DV7Y4J8V.js";import"./index-B2XarBV-.js";import"./List-UhlU2M9F.js";import"./ItemNavigation-DWaDskwg.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-BDOiHASl.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-BxTmgybz.js";import"./accept-B4LET7Ir.js";import"./slim-arrow-right-Bid5UasE.js";import"./index-Dw28YZox.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:d}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(r.h2,{id:"example",children:"Example"}),`
`,o.jsx(e,{of:p}),`
`,o.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:p}),`
`,o.jsx(r.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(r.p,{children:["You can open and close the ",o.jsx(r.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(r.code,{children:"open"})," and ",o.jsx(r.code,{children:"opener"})," prop."]}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <Popover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(c,{})]})}function To(t={}){const{wrapper:r}={...m(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{To as default};
