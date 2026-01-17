import{j as e}from"./iframe-plJY_px0.js";import{useMDXComponents as m}from"./index-CNgSdSBz.js";import{A as p}from"./ArgTypesWithNote-DF43eThH.js";import{C as c}from"./ControlsWithNote-CxBuL735.js";import{D as l}from"./DocsHeader-Bbmfd1uh.js";import{F as d}from"./CommandsAndQueries-CSEdQQvR.js";import{M as x,C as r,a as u,D as h}from"./blocks-Q5gmWwgb.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-B3sH50bl.js";import{T as s}from"./index-Ct9WRfrd.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DSqDyml0.js";import"./information-CFU4bu3b.js";import"./sys-enter-2-CWJ3J9PS.js";import"./alert-Cvpxudnd.js";import"./Tag-Dh3wWudw.js";import"./index-t--BkPKT.js";import"./index-D3V1C0u7.js";import"./Link-Bty8oyFV.js";import"./copy-Bu8GevAL.js";import"./copy-mR5XScRR.js";import"./GitHub-Mark-AHgO4eaB.js";import"./TableOfContent-3VAk2MsF.js";import"./index-2EbIuvCl.js";import"./index-CULtK81i.js";import"./index-Dd7Sfpx-.js";import"./index-DfokaHEY.js";import"./index-B337CKIF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQsTwQe_.js";import"./addCustomCSSWithScoping-K4GM8_aQ.js";import"./Token-CtYzp5bp.js";import"./ScrollEnablement-C3kxd9Sb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Du-JodLR.js";import"./ResponsivePopoverCommon.css-C--dNoH7.js";import"./Suggestions.css-C34DaZQw.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
