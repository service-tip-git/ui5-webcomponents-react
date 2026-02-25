import{j as e}from"./iframe-BQI8iJtZ.js";import{useMDXComponents as s}from"./index-l_Dh7Y-d.js";import{M as m,C as o}from"./blocks-Dm7btFzZ.js";import"./Tag-D2JKRyPD.js";import"./index-Bd5bxmR8.js";import{C as l}from"./ControlsWithNote-Oja_q1_6.js";import{D as p}from"./DocsHeader-Cfdt4u-X.js";import{F as d}from"./CommandsAndQueries-BH0I_jDK.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CdfGVAUK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DhTwMCvW.js";import"./sys-enter-2-B4_axdEE.js";import"./alert-D_lKNn7T.js";import"./index-CC6FubQ3.js";import"./index-y23wvc_L.js";import"./Link-C9lbVSnw.js";import"./copy-BI19XNof.js";import"./copy-Wr9Hnpdu.js";import"./GitHub-Mark-BFvuJcMq.js";import"./TableOfContent-Cprc8k2f.js";import"./index-CDHutJWz.js";import"./index-CdGithLr.js";import"./index-CP42RXg5.js";import"./index-CixO9GRI.js";import"./index-CjJMvaDa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DMLN5SEy.js";import"./addCustomCSSWithScoping-C30TCMVD.js";import"./Gregorian-BgdknNjv.js";import"./getCachedLocaleDataInstance-IIXe3DdQ.js";import"./query-CzSBusdE.js";import"./Input-2UrWgipO.js";import"./ResponsivePopoverCommon.css-gVvV0tmb.js";import"./ValueStateMessage.css-BxkCLEc_.js";import"./Suggestions.css-CPeYy0BW.js";import"./appointment-2-C9ebz8ct.js";import"./ListItemStandard-BDy0Ge3B.js";import"./slim-arrow-left-BGhGzD6V.js";import"./Calendar-Dd_enHqj.js";import"./InvisibleMessage-CMW2idQ1.js";import"./index-zQYKv0o9.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
`,e.jsx(d,{})]})}function ee(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ee as default};
