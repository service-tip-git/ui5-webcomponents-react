import{j as e}from"./iframe-DOg6M_II.js";import{useMDXComponents as s}from"./index-kwVVcFLm.js";import{M as m,C as o}from"./blocks-CUc5S4F5.js";import"./Tag-BltckGaY.js";import"./index-bsC8MgY-.js";import{C as l}from"./ControlsWithNote-DHUK-IYy.js";import{D as p}from"./DocsHeader-BrKB74dq.js";import{F as d}from"./CommandsAndQueries-wl0h9BMr.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DyEqdd7a.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BuhVNJUa.js";import"./sys-enter-2-DbIwdKeB.js";import"./alert-BRGoaqba.js";import"./index-DS0sFSVa.js";import"./index-B0K8C7sE.js";import"./Link-CDmjIio6.js";import"./copy-B-QN2UTj.js";import"./copy-BKSrEciR.js";import"./GitHub-Mark-tIrCVMHV.js";import"./TableOfContent-CY-Swy74.js";import"./index-DwpJeIal.js";import"./index-DVpre6_h.js";import"./index-DMnxNTo_.js";import"./index-BEZkwnlN.js";import"./index-BdRkl8ET.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Drkj1-4P.js";import"./addCustomCSSWithScoping-DpPx9qfb.js";import"./Gregorian-DRl6JEe4.js";import"./query-CzSBusdE.js";import"./Input-C9rpsAyC.js";import"./ResponsivePopoverCommon.css-C0PtYRqH.js";import"./ValueStateMessage.css-CZYppwl8.js";import"./Suggestions.css-Ixrm98By.js";import"./appointment-2-SPW-yjMH.js";import"./ListItemStandard-CrVmc6dv.js";import"./slim-arrow-left-DxjBQri0.js";import"./Calendar-CTb6_xNc.js";import"./InvisibleMessage-DycTFmVM.js";import"./index-B_KBcAtw.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(p,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"value-change",children:"Value Change"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h4,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function DynamicDateRangeComponent() {
  const [selValue, setSelValue] = useState("");
  const [convertedDates, setConvertedDates] = useState("");
  return (
    <>
      <DynamicDateRange
        onChange={(e) => {
          const selectedValue = e.detail.value;
          setSelValue(JSON.stringify(selectedValue));

          const dates = e.currentTarget.toDates(selectedValue);
          setConvertedDates(
            dates.map((date) => date.toLocaleString()).join(" - "),
          );
        }}
      />
      <hr />
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="sel-val" showColon>
          Selected Value
        </Label>
        <Input
          id="sel-val"
          readonly
          value={selValue}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="conv-val" showColon>
          Converted Dates
        </Label>
        <Input
          id="conv-val"
          readonly
          value={convertedDates}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
    </>
  );
}
`})}),`
`,e.jsx(d,{})]})}function $(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{$ as default};
