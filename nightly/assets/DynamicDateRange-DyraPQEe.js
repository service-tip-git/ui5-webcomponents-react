import{j as e}from"./iframe-DYfg4QHt.js";import{useMDXComponents as s}from"./index-CVbrUuPE.js";import{M as m,C as o}from"./blocks-BUAqhVj9.js";import"./Tag-DSyohh1a.js";import"./index-BmTrkp-7.js";import{C as l}from"./ControlsWithNote-EDQgd2pc.js";import{D as p}from"./DocsHeader-CVLgmQgj.js";import{F as d}from"./CommandsAndQueries-Bv0cgQmk.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-D9rBfj6q.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DmJ60sG9.js";import"./sys-enter-2-DM66m4rJ.js";import"./alert-CCfcH-Mh.js";import"./index-Cmi2IW4V.js";import"./index-Cey_WqgE.js";import"./Link-DNgH-frF.js";import"./copy-WupyHJ3D.js";import"./copy-D6hWl56-.js";import"./GitHub-Mark-Cyh0S-Yk.js";import"./TableOfContent-nE7A35u3.js";import"./index-B7hJqHh2.js";import"./index-BKQsUqka.js";import"./index-DHfPdgXp.js";import"./index-DGISTYKI.js";import"./index-91p8b6xm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN-x3Tox.js";import"./addCustomCSSWithScoping-D5zE1nWM.js";import"./Gregorian-MFpZRp1m.js";import"./query-CzSBusdE.js";import"./Input-iisXfHsF.js";import"./ResponsivePopoverCommon.css-CUkbRKkQ.js";import"./ValueStateMessage.css-JCR7oNs7.js";import"./Suggestions.css-CvEadgHg.js";import"./appointment-2-BmGuxYHx.js";import"./ListItemStandard--jyjJfbY.js";import"./slim-arrow-left-BR2AerwB.js";import"./Calendar-C08ebLhK.js";import"./InvisibleMessage-CgGc0QHI.js";import"./index-Dzn1Xrdp.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
