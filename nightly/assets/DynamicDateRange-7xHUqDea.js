import{j as e}from"./iframe-RECRoZhV.js";import{useMDXComponents as s}from"./index-1tzPRbI6.js";import{M as m,C as o}from"./blocks-CH1yi1wC.js";import"./Tag-BCmfqboN.js";import"./index-CfNZ4QaZ.js";import{C as l}from"./ControlsWithNote-8guUQjqU.js";import{D as p}from"./DocsHeader-D00kQhrp.js";import{F as d}from"./CommandsAndQueries-DPpsoP9s.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BHSYju5t.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D6UQivs-.js";import"./sys-enter-2-CMoukZNH.js";import"./alert-BjbREM6S.js";import"./index-5drqvW0T.js";import"./index-DGKmMzEm.js";import"./Link-BZUDNGRG.js";import"./copy-zC_uHC7X.js";import"./copy-B_omwcq7.js";import"./GitHub-Mark-CmtAkk_i.js";import"./TableOfContent-UMLqbvXM.js";import"./index-CB0t3Ndr.js";import"./index-D1It_vMD.js";import"./index-lc4LLOiH.js";import"./index-Dk8UUcOY.js";import"./index-Rgh5WsNa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bozn53qz.js";import"./addCustomCSSWithScoping-Uy-s1Hcf.js";import"./Gregorian-CqPBq5mf.js";import"./query-CzSBusdE.js";import"./Input-DlayT0fi.js";import"./ResponsivePopoverCommon.css-D2fANVRT.js";import"./ValueStateMessage.css-D4UTir1H.js";import"./Suggestions.css-CDvWi9BJ.js";import"./appointment-2-mOsdd-G0.js";import"./ListItemStandard-CghTaqTk.js";import"./slim-arrow-left-CAAdfiKY.js";import"./Calendar-Y1i3ZI0Y.js";import"./InvisibleMessage-k_rSJSP0.js";import"./index-DO_r9pCl.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
