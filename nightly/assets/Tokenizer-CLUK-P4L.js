import{j as e}from"./iframe-DOg6M_II.js";import{useMDXComponents as m}from"./index-kwVVcFLm.js";import{A as p}from"./ArgTypesWithNote-BZVwNYcj.js";import{C as c}from"./ControlsWithNote-DHUK-IYy.js";import{D as l}from"./DocsHeader-BrKB74dq.js";import{F as d}from"./CommandsAndQueries-wl0h9BMr.js";import{M as x,C as r,a as u,D as h}from"./blocks-CUc5S4F5.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CY2VMcpT.js";import{T as s}from"./index-B4udOUjX.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-bsC8MgY-.js";import"./information-BuhVNJUa.js";import"./sys-enter-2-DbIwdKeB.js";import"./alert-BRGoaqba.js";import"./Tag-BltckGaY.js";import"./index-DS0sFSVa.js";import"./index-B0K8C7sE.js";import"./Link-CDmjIio6.js";import"./copy-B-QN2UTj.js";import"./copy-BKSrEciR.js";import"./GitHub-Mark-tIrCVMHV.js";import"./TableOfContent-CY-Swy74.js";import"./index-DwpJeIal.js";import"./index-DVpre6_h.js";import"./index-DMnxNTo_.js";import"./index-BEZkwnlN.js";import"./index-BdRkl8ET.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Drkj1-4P.js";import"./addCustomCSSWithScoping-DpPx9qfb.js";import"./Token-iSuK3wO6.js";import"./ScrollEnablement-BMPvWcSr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrVmc6dv.js";import"./ResponsivePopoverCommon.css-C0PtYRqH.js";import"./Suggestions.css-Ixrm98By.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
