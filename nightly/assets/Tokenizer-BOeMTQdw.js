import{j as e}from"./iframe-CPcs5bjw.js";import{useMDXComponents as m}from"./index-D3pCSUGP.js";import{A as p}from"./ArgTypesWithNote-T61dP11S.js";import{C as c}from"./ControlsWithNote-DRNf35oL.js";import{D as l}from"./DocsHeader-ByWQIjS1.js";import{F as d}from"./CommandsAndQueries-BRqm99_0.js";import{M as x,C as r,a as u,D as h}from"./blocks-CciAsFaW.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CK2iJPt6.js";import{T as s}from"./index-k-cda1Jp.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DdCyPygk.js";import"./information-DGDTMoga.js";import"./sys-enter-2-DPq_4UKR.js";import"./alert-CqgikgLY.js";import"./Tag-BRzUE0pu.js";import"./index-Cumht0xF.js";import"./index-CE-f9LSp.js";import"./Link-CvciZabG.js";import"./copy-Db72BetN.js";import"./copy-DrEgra2j.js";import"./GitHub-Mark-CxYUDkOM.js";import"./TableOfContent-PWCR5IjP.js";import"./index-sAPOTiYQ.js";import"./index-DSqRs7NE.js";import"./index-DbiDsCRE.js";import"./index-DlX2UYU-.js";import"./index-B7pfH-Zg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-MvtR7iaQ.js";import"./addCustomCSSWithScoping-CWQJntcH.js";import"./Token-BhhlWiIl.js";import"./ScrollEnablement-C5TvNcLx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cf_RZ7_h.js";import"./ResponsivePopoverCommon.css-BRxBb6R7.js";import"./Suggestions.css-bhLISna5.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
