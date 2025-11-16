import{j as e}from"./iframe-DQawrgT_.js";import{useMDXComponents as m}from"./index-BmmNdxGP.js";import{A as p}from"./ArgTypesWithNote-DByr66tE.js";import{C as c}from"./ControlsWithNote-DRFCFxGt.js";import{D as l}from"./DocsHeader-BZiC0dpY.js";import{F as d}from"./CommandsAndQueries-8E8N5Jf5.js";import{M as x,C as r,a as u,D as h}from"./blocks-CsjIrgm8.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-BZrMjKvC.js";import{T as s}from"./index-Cjy3USZQ.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkLsOSwH.js";import"./information-DvV6iDHk.js";import"./sys-enter-2-DVOKgY3M.js";import"./alert-D1Pqx8x8.js";import"./Tag-DINZ5J-5.js";import"./index-DkjHlZC9.js";import"./index-lL1wxGfG.js";import"./Link-QZkGNwXr.js";import"./copy-DYwvtSGY.js";import"./copy-BfmM2Dw-.js";import"./GitHub-Mark-BdbxH_Db.js";import"./TableOfContent-BnjWWac5.js";import"./index--1fmb9ws.js";import"./index-CaSLC49k.js";import"./index-C4mOCO1v.js";import"./index-BpUdR17T.js";import"./index-DXw92D-i.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D6QKJZ6-.js";import"./addCustomCSSWithScoping-CIoyfOLu.js";import"./Token-Bd0t7DDi.js";import"./ScrollEnablement-CFUBLAVD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRn-lKzQ.js";import"./ResponsivePopoverCommon.css-CRDo6imn.js";import"./Suggestions.css-DGIsZFtp.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
`,e.jsx(l,{of:t,subComponents:["Token"],experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h2,{id:"tokenizer-with-selection--delete-logic",children:"Tokenizer with selection & delete logic"}),`
`,e.jsx(r,{of:k}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function TokenizerComponent(props) {
  const [countries, setCountries] = useState([
    'Andorra',
    'Bulgaria',
    'Canada',
    'Denmark',
    'Estonia',
    'Fiji',
    'Ghana',
    'India',
    'Japan',
    'Kenya',
    'Luxembourg',
    'Mexico',
    'Nepal',
    'Qatar',
    'Uganda'
  ]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const handleTokenDelete: TokenizerPropTypes['onTokenDelete'] = (e) => {
    const { tokens } = e.detail;
    if (tokens) {
      const tokensToDelete = tokens.map((token) => token.text);
      setCountries((prev) => prev.filter((country) => !tokensToDelete.includes(country)));
      setSelectedCountries([]);
    }
  };
  const handleSelectionChange: TokenizerPropTypes['onSelectionChange'] = (e) => {
    const { tokens } = e.detail;
    if (tokens) {
      const selectedTokens = tokens.map((token) => token.text);
      setSelectedCountries(selectedTokens);
    }
  };
  return (
    <>
      <Tokenizer {...props} onTokenDelete={handleTokenDelete} onSelectionChange={handleSelectionChange}>
        {countries.map((country) => (
          <Token key={country} text={country} />
        ))}
      </Tokenizer>
      <br />
      <div style={{ display: 'flex', gap: '0.2rem' }}>
        <Label showColon>Selected countries</Label>
        <Text>{selectedCountries.join(', ')}</Text>
      </div>
    </>
  );
}
`})})]}),`
`,e.jsx(u,{children:f}),`
`,e.jsx(n.h2,{id:"token",children:"Token"}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(p,{metaOf:t,of:s}),`
`,e.jsx(d,{})]})}function ne(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{ne as default};
