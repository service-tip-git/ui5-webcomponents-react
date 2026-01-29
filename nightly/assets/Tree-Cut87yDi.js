import{j as e}from"./iframe-OB3gpUrt.js";import{useMDXComponents as p}from"./index-tYZXwc8M.js";import{A as o}from"./ArgTypesWithNote-70bAhp5M.js";import{C as c}from"./ControlsWithNote-C3g8pWjY.js";import{D as h}from"./DocsHeader-CHtT-iUI.js";import{F as x}from"./CommandsAndQueries-DdKCqOgb.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-W1zrio7-.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-CRKEmI_B.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTbk-QpW.js";import"./information-EFB093TQ.js";import"./sys-enter-2-BDVh3TOJ.js";import"./alert-kdfQmJam.js";import"./Tag-BYZWsksY.js";import"./index-DSe1Jsyu.js";import"./index-KwKt-eeL.js";import"./Link-04tQrlfI.js";import"./copy-C3xqXvOX.js";import"./copy-Cn9jluxF.js";import"./GitHub-Mark-BssWWOQY.js";import"./TableOfContent-DAOkSQEr.js";import"./index-YBnae26q.js";import"./index-DJjROlPg.js";import"./index-DeGKliVC.js";import"./index-CGtjIa9c.js";import"./index-BZk-qSok.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B6If5ETY.js";import"./addCustomCSSWithScoping-DcUbYumu.js";import"./general-leave-request-Dk2F5xwi.js";import"./index-BI78Dgdb.js";import"./navigation-right-arrow-5Ow3qQi6.js";import"./navigation-down-arrow-veqq6R5P.js";import"./navigation-right-arrow-BpamG8Wu.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
`,e.jsx(h,{of:r,since:"0.10.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:m}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"lazy-load-treeitems",children:"Lazy Load TreeItems"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const LazyLoadingTree = () => {
  const [lazyChildren, setLazyChildren] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleItemToggle = (e) => {
    if (e.detail.item.dataset.id === 'lazychildren' && !lazyChildren) {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setLazyChildren(
          <>
            <TreeItem text="Tree 3.1" />
            <TreeItem text="Tree 3.2" />
          </>
        );
        e.detail.item.toggle();
      }, 3000);
    }
  };
  return (
    <BusyIndicator active={loading} style={{ width: '100%' }}>
      <Tree onItemToggle={handleItemToggle}>
        <TreeItem text="Has pre-loaded children">
          <TreeItem text="Tree 1.1" />
          <TreeItem text="Tree 1.2" />
        </TreeItem>
        <TreeItem text="Has no children" />
        <TreeItem text="Has children but not yet loaded" hasChildren icon={dlCloutIcon} data-id="lazychildren">
          {lazyChildren}
        </TreeItem>
      </Tree>
    </BusyIndicator>
  );
};
`})}),`
`,e.jsx(T,{children:f}),`
`,e.jsx(t.h2,{id:"treeitem",children:"TreeItem"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(o,{metaOf:r,of:a}),`
`,e.jsx(t.h2,{id:"treeitemcustom",children:"TreeItemCustom"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(o,{metaOf:r,of:d}),`
`,e.jsx(x,{})]})}function ee(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{ee as default};
