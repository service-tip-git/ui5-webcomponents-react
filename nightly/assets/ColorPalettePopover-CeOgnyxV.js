import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-Ddg-oX0k.js";import{M as m,C as s,a,D as l,A as c}from"./index-DW_NsRxk.js";import"./index-CB2NJyj5.js";import"./index-CO17c8AE.js";import{C as d}from"./ControlsWithNote-tnHpGDO3.js";import{D as x}from"./DocsHeader-BZLtGQHg.js";import{F as u}from"./CommandsAndQueries-DHwj4K8F.js";import"./index-Bi_W_Jd4.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-Dw2clFwJ.js";import{C as h,D as e}from"./ColorPalettePopover.stories-CcD2HkBM.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-0Ws68Kt4.js";import"./iframe-DADUJtst.js";import"./index-C1S0AQHK.js";import"./index-C2EHZYIs.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-ByLklLy6.js";import"./CustomElementsScope-BJCkQSHf.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CVhFbCad.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-CGby3L9v.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CFLTQoOV.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-U8TXFXmv.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CmvYYEtw.js";import"./information-DWKEhq3n.js";import"./sys-enter-2-DfvUZ16A.js";import"./sys-enter-2-DLBOjKNS.js";import"./TagDesign-Ga50IS6u.js";import"./utils-XK_ukN9z.js";import"./main-BZcY5MQX.js";import"./index-BlfpT5Yv.js";import"./Tag-B3GqqYCx.js";import"./sys-help-2-Cui80jVv.js";import"./index-DZZKhZ35.js";import"./Link-7OPDvJp0.js";import"./index-V9E_9yBg.js";import"./Popover-BgaZr5c3.js";import"./PopupsCommon.css-D4-KdmWM.js";import"./FocusableElements-Bof-Jfi5.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D-iSdYn6.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-C0TcgQvK.js";import"./copy-BPa3OsAo.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-rwZqpKzI.js";import"./index-CmuUJ6hQ.js";import"./I18nStore-BuTcnDwi.js";import"./useStylesheet-jv87nE5t.js";import"./index-B1xYitIu.js";import"./index-CtYzPxrt.js";import"./Label-42unHoL8.js";import"./index-q_xBifsn.js";import"./index-D1NZoOym.js";import"./Text-BYHe0rMB.js";import"./preview-gXkRrqD2.js";import"./DocsRenderer-CFRXHY34-CYENK1fm.js";import"./react-18-B98GjGe7.js";import"./addCustomCSSWithScoping-CRaJDqw6.js";import"./index-sxpf8z2p.js";import"./BusyIndicator-cXtbXcMV.js";import"./index-D-QlfT-1.js";import"./index-BBw2fVoz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP6pBYCZ.js";import"./ResponsivePopover-loEtlXj6.js";import"./Dialog-CRHAE-yP.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-ulAhQagc.js";import"./ItemNavigation-DkXbeD0_.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
`,o.jsx(x,{since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:e}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(d,{of:e}),`
`,o.jsx(t.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"ColorPalettePopover"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," and ",o.jsx(t.code,{children:"opener"})," prop."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const onButtonClick = (e) => {
    setShowPopover((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={onButtonClick}>
        Open ColorPalettePopover
      </Button>
      <ColorPalettePopover open={showPopover} opener={buttonRef.current}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(a,{children:j}),`
`,o.jsx(t.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(l,{of:p}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(u,{})]})}function Uo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{Uo as default};
