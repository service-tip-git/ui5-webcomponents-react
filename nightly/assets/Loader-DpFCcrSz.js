import{j as e}from"./iframe-DnQpmgA6.js";import{useMDXComponents as s}from"./index-m6rQOag9.js";import{M as d,C as o}from"./blocks-DIAHYmsO.js";import"./Tag-CCLxzbm_.js";import"./index-BNSawElR.js";import{C as m}from"./ControlsWithNote-Bq534o6H.js";import{D as p}from"./DocsHeader-C-CYCqxJ.js";import{F as l}from"./CommandsAndQueries-DCeHCX1A.js";import{C as i,D as r,W as x}from"./Loader.stories-Bb-Lg-ya.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Dr8YEhs5.js";import"./sys-enter-2-Bl9jtIfu.js";import"./alert-DI-0b8x_.js";import"./index-DxN0YEHZ.js";import"./index-DqLOis9Y.js";import"./Link-TucI8b8Q.js";import"./copy-X3g7ZXkK.js";import"./copy-fbHgidly.js";import"./GitHub-Mark-KB5oR3WW.js";import"./TableOfContent-Q5nbcx9A.js";import"./index-BqBVEfNK.js";import"./index-B_h56NIO.js";import"./index-DqMOHWxY.js";import"./index-C-imFhL9.js";import"./index-L15nOwrJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2yHaKcn.js";import"./addCustomCSSWithScoping-DBwRz57F.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(p,{of:i}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"card-with-loader",children:"Card with Loader"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const LoaderComponent = () => {
  const initialText =
    'This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.';
  const [text, setText] = useState(initialText);
  const [loading, setLoading] = useState(false);
  const onHeaderClick = () => {
    setLoading(true);
  };
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setText((prev) => (prev === initialText ? 'Updated (⌐■_■)' : initialText));
        setLoading(false);
      }, 5000);
    }
  }, [loading]);
  return (
    <Card
      header={
        <CardHeader
          titleText="Click the header to update the text below."
          interactive
          avatar={<Icon name="activate" />}
          onClick={onHeaderClick}
        />
      }
      style={{ width: '400px' }}
    >
      <FlexBox direction={FlexBoxDirection.Column}>
        {loading && <Loader />}
        <Text style={spacing.sapUiContentPadding}>{text}</Text>
      </FlexBox>
    </Card>
  );
};
`})}),`
`,e.jsx(l,{})]})}function R(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{R as default};
