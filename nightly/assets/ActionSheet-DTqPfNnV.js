import{j as t}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import{ae as p,af as m}from"./index-1kQ8XqVH.js";import"./index-DCnPANcU.js";import{C as s}from"./ControlsWithNote-g0pjHt7U.js";import{D as c}from"./DocsHeader-CyMIm7V5.js";import{F as a}from"./CommandsAndQueries-DNTj9iS5.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import{C as h,D as e}from"./ActionSheet.stories-Cs0Kl42-.js";import"./iframe-Bc4Os9Yd.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-GNT2PXey.js";import"./utils-CcgiHsei.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BqO_ndMU.js";import"./decline-Bc8xWa4t.js";import"./Icon-BhzwmwWz.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B9dCEi48.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-CO9BdrhZ.js";import"./alert-DWttAQXl.js";import"./class-map-_G2Y84x0.js";import"./Button-Cvy14OjO.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BaleIpCT.js";import"./TagDesign-Dou_yO3g.js";import"./utils-gz0UBSMj.js";import"./main-BPTHlokf.js";import"./index-ChZFKvmP.js";import"./Tag-Dihe5M3w.js";import"./sys-help-2-CUJdqIsS.js";import"./index-BZbjj9L4.js";import"./Popover-BcjI4r72.js";import"./PopupsCommon.css-DE8Wza_j.js";import"./getEffectiveScrollbarStyle-UFcPsH0e.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-XK3zSnEF.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-B2Pwek_1.js";import"./style-map-DYn2sBEk.js";import"./BrowserScrollbar.css-LN7L1p37.js";import"./index-DC6I4G55.js";import"./Link-YAV9tZDK.js";import"./chunk-HLWAVYOI-BZgyIB3K.js";import"./client-BZNFO7bv.js";import"./copy-DLqHYH0g.js";import"./copy-BGQQIC81.js";import"./index-CLe8_13Z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BgRQTyXM.js";import"./index-DCYhXUzl.js";import"./I18nStore-CGmCejYo.js";import"./GitHub-Mark-CQnSG1yZ.js";import"./TableOfContent-B6vxzEs5.js";import"./index-CySIBtOy.js";import"./Label-emsTVYba.js";import"./index-CbB55c25.js";import"./index-D_85Dc-w.js";import"./addCustomCSSWithScoping-BR-0f_u5.js";import"./index-6guCCsNT.js";import"./BusyIndicator-BRwQ1wd3.js";import"./index-DzV5Ipw0.js";import"./index-CwfmfrKN.js";import"./Avatar-BNYvS_OM.js";import"./employee-DAkvclYj.js";import"./accept-B-hwLd1L.js";import"./decline-FOQ_IOsc.js";import"./delete-BZHXu7wo.js";import"./i18n-defaults-CzMABS5b.js";import"./index-BONEoEi1.js";import"./ResponsivePopover-CxQpx28n.js";import"./Dialog-DhoJQnEE.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
`,t.jsx(c,{subComponents:["Button"]}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(m,{of:e}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(s,{of:e}),`
`,t.jsx(o.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,t.jsx("br",{}),`
`,t.jsxs(o.p,{children:["You can open and close the ",t.jsx(o.code,{children:"ActionSheet"})," component in a declarative way using the ",t.jsx(o.code,{children:"open"})," and ",t.jsx(o.code,{children:"opener"})," prop."]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`const MyComponentWithActionSheet = () => {
  const [actionSheetIsOpen, setActionSheetIsOpen] = useState(false);
  return (
    <>
      <Button
        id={'openActionSheetBtn'}
        onClick={() => {
          setActionSheetIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <ActionSheet
        opener={'openActionSheetBtn'}
        open={actionSheetIsOpen}
        onClose={() => {
          setActionSheetIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,t.jsx(o.p,{children:t.jsxs(o.strong,{children:["Opening an ",t.jsx(o.code,{children:"ActionSheet"})," by reference"]})}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"ActionSheet"})," exposes a way to pass a reference of an element instead of an ",t.jsx(o.code,{children:"id"})," to the ",t.jsx(o.code,{children:"opener"}),` prop.
You can do that by e.g. leveraging a React Ref.`]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpenerClick = (e) => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={handleOpenerClick}>
        Opener
      </Button>
      <ActionSheet opener={buttonRef.current} open={open}>
        {/* Content */}
      </ActionSheet>
    </>
  );
};
`})}),`
`,t.jsx(a,{})]})}function Gt(n={}){const{wrapper:o}={...i(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Gt as default};
