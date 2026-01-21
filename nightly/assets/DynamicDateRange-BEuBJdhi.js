import{j as e}from"./iframe-Crk1dOR8.js";import{useMDXComponents as s}from"./index-R8jXtLED.js";import{M as m,C as o}from"./blocks-DC75RB67.js";import"./Tag-Bw7tKX4O.js";import"./index-CACmyy9p.js";import{C as l}from"./ControlsWithNote-DVTn8clp.js";import{D as p}from"./DocsHeader-D9jIGIRQ.js";import{F as d}from"./CommandsAndQueries-OnXJs0rK.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-B3H6Mo_u.js";import"./preload-helper-PPVm8Dsz.js";import"./information-YuxwihY0.js";import"./sys-enter-2-DLpc5Bbk.js";import"./alert-BQrPd1lR.js";import"./index-DhFJLS7i.js";import"./index-K2kHsFSd.js";import"./Link-BHKq5JFv.js";import"./copy-CEC_QuXt.js";import"./copy-D_VyToZg.js";import"./GitHub-Mark-CAfAi3jl.js";import"./TableOfContent-f1HaFCSH.js";import"./index-F2nIq42R.js";import"./index-D2r_hMST.js";import"./index-DvoETnoE.js";import"./index-CmobNXn6.js";import"./index-BW0zluCU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCgdgzPV.js";import"./addCustomCSSWithScoping-DLDk5l5Q.js";import"./Gregorian-CIEKYP94.js";import"./query-CzSBusdE.js";import"./Input-CdoMhJ7q.js";import"./ResponsivePopoverCommon.css-CWK0u4Wt.js";import"./ValueStateMessage.css-B6Yu1ZOd.js";import"./Suggestions.css-D9mEdZF4.js";import"./appointment-2-BVeOyteJ.js";import"./ListItemStandard-m90ft9fO.js";import"./slim-arrow-left-Dz4hkO8h.js";import"./Calendar-8nZpTLvF.js";import"./InvisibleMessage-DpJUGs_4.js";import"./index-Zzwzp3a_.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
