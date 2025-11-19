import{j as e}from"./iframe-Bg524aqp.js";import{useMDXComponents as s}from"./index-B-rwzkjC.js";import{M as m,C as o}from"./blocks--Wel_jE1.js";import"./Tag-DNMuD7A5.js";import"./index-B9tuTECn.js";import{C as l}from"./ControlsWithNote-mASCmhtx.js";import{D as p}from"./DocsHeader-CrRuZK8O.js";import{F as d}from"./CommandsAndQueries-Bxzaytg-.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DgsKb3ge.js";import"./preload-helper-PPVm8Dsz.js";import"./information-2dCGwvE_.js";import"./sys-enter-2-CO93Qjp1.js";import"./alert-BG-ILaUe.js";import"./index-DxUoW9XL.js";import"./index-TfZZnQDd.js";import"./Link-DzzFCouB.js";import"./copy-BFkS0l-f.js";import"./copy-BgS9Q-8_.js";import"./GitHub-Mark-Bwa4giqR.js";import"./TableOfContent-Cn8NCVE9.js";import"./index-BqYTt2r-.js";import"./index-DPNsglmV.js";import"./index-iejN5y1T.js";import"./index-r1bogqKf.js";import"./index-tDWQXHER.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkKuq7AH.js";import"./addCustomCSSWithScoping-DFbnSqfd.js";import"./Gregorian-Dz9ScABc.js";import"./query-CzSBusdE.js";import"./Input-DmAcj6-y.js";import"./ResponsivePopoverCommon.css-DvaTlIz3.js";import"./ValueStateMessage.css-qD0DeEG7.js";import"./Suggestions.css-ZRTSrlW8.js";import"./appointment-2-CWqbyRUO.js";import"./ListItemStandard-Bewcenzz.js";import"./slim-arrow-left-Dt2U2txy.js";import"./Calendar-Cc1kHxgP.js";import"./InvisibleMessage-DXpW_GiJ.js";import"./index-BecMM91E.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
