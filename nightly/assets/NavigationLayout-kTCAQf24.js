import{j as t}from"./iframe-DnQpmgA6.js";import{useMDXComponents as c}from"./index-m6rQOag9.js";import{A as o}from"./ArgTypesWithNote-BZDboaAR.js";import{C as l}from"./ControlsWithNote-Bq534o6H.js";import{D as g}from"./DocsHeader-C-CYCqxJ.js";import{F as x}from"./CommandsAndQueries-DCeHCX1A.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-DIAHYmsO.js";import{C as i,D as r}from"./NavigationLayout.stories-BB_LNsUS.js";import{S as m,a as s,b as d}from"./index-D34WRVnO.js";import{S as p}from"./chain-link-CiJmAAXx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BNSawElR.js";import"./information-Dr8YEhs5.js";import"./sys-enter-2-Bl9jtIfu.js";import"./alert-DI-0b8x_.js";import"./Tag-CCLxzbm_.js";import"./index-DxN0YEHZ.js";import"./index-DqLOis9Y.js";import"./Link-TucI8b8Q.js";import"./copy-X3g7ZXkK.js";import"./copy-fbHgidly.js";import"./GitHub-Mark-KB5oR3WW.js";import"./TableOfContent-Q5nbcx9A.js";import"./index-BqBVEfNK.js";import"./index-B_h56NIO.js";import"./index-DqMOHWxY.js";import"./index-C-imFhL9.js";import"./index-L15nOwrJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2yHaKcn.js";import"./addCustomCSSWithScoping-DBwRz57F.js";import"./index-DG-Nj_iB.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./menu-DydbE72i.js";import"./home-DSIz9M_T.js";import"./calendar-CKjGuGN9.js";import"./history-ImB9RHv9.js";import"./background-B-VhLZbs.js";import"./action-settings-D4iiYpFP.js";import"./locked-p5WBzTzU.js";import"./index-ByaU7WgO.js";import"./ListItemStandard-CbLH-mve.js";import"./ButtonBadge-C6X07Jra.js";import"./search-DQ4eF9Fm.js";import"./overflow-CrvcVMi6.js";import"./slim-arrow-down-C4oPdCY4.js";import"./slim-arrow-down-bqQZFEzo.js";import"./i18n-defaults-Ca0KLLzw.js";import"./navigation-right-arrow-ByFxVnQf.js";import"./navigation-right-arrow-C7f932cn.js";import"./navigation-down-arrow-81WXcHgL.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
`,t.jsx(g,{of:i}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(f,{of:r}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show static code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`function NavigationLayoutComponent(props) {
  const [selectedContent, setSelectedContent] = useState('Home');
  const [mode, setMode] = useState(props.mode);
  const navigationLayoutRef = useRef<NavigationLayoutDomRef>(null);

  const handleSelectionChange: SideNavigationPropTypes['onSelectionChange'] = (e) => {
    setSelectedContent(e.detail.item.text);
  };

  useEffect(() => {
    setMode(props.mode);
  }, [props.mode]);

  return (
    <div style={{ position: 'relative', height: '800px' }}>
      <NavigationLayout
        {...props}
        ref={navigationLayoutRef}
        mode={mode}
        header={
          <ShellBar
            startButton={
              <Button
                icon={menuIcon}
                onClick={() => {
                  if (navigationLayoutRef.current?.isSideCollapsed()) {
                    setMode(NavigationLayoutMode.Expanded);
                  } else {
                    setMode(NavigationLayoutMode.Collapsed);
                  }
                }}
              />
            }
            primaryTitle="UI5 Web Components for React"
            secondaryTitle="The Best Run SAP"
          />
        }
        sideContent={
          <SideNavigation slot="sideContent" onSelectionChange={handleSelectionChange}>
            <SideNavigationItem text="Home" icon="home" />
            <SideNavigationGroup text="Group 1" expanded>
              <SideNavigationItem text="Item 1" icon="locate-me" expanded>
                <SideNavigationSubItem text="Sub Item 1" />
                <SideNavigationSubItem text="Sub Item 2" />
              </SideNavigationItem>
              <SideNavigationItem text="Item 2" icon="calendar" expanded>
                <SideNavigationSubItem text="Sub Item 3" />
                <SideNavigationSubItem text="Sub Item 4" />
              </SideNavigationItem>
              <SideNavigationItem text="Item 3" icon="activity-assigned-to-goal" expanded>
                <SideNavigationSubItem text="Sub Item 5" />
                <SideNavigationSubItem text="Sub Item 6" />
              </SideNavigationItem>
            </SideNavigationGroup>
            <SideNavigationGroup text="Group 2" expanded>
              <SideNavigationItem text="Item 4" icon="history" />
              <SideNavigationItem text="Item 5" icon="source-code" />
              <SideNavigationItem text="Item 6" icon="background" />
            </SideNavigationGroup>

            <SideNavigationItem
              slot="fixedItems"
              text="Legal"
              href="https://www.sap.com/about/legal/impressum.html"
              target="_blank"
              icon="compare"
            />
            <SideNavigationItem
              slot="fixedItems"
              text="Privacy"
              href="https://www.sap.com/about/legal/privacy.html"
              target="_blank"
              icon="locked"
            />
            <SideNavigationItem
              slot="fixedItems"
              text="Terms of Use"
              href="https://www.sap.com/terms-of-use"
              target="_blank"
              icon="document-text"
            />
          </SideNavigation>
        }
      >
        <div style={{ padding: '1rem' }}>
          <div>
            <Title>{selectedContent}</Title>
            <br />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
          </div>
        </div>
      </NavigationLayout>
    </div>
  );
}
`})})]}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{of:r}),`
`,t.jsx(h,{children:S}),`
`,t.jsx(e.h2,{id:"sidenavigation",children:"SideNavigation"}),`
`,t.jsx(a,{of:m}),`
`,t.jsx(o,{metaOf:i,of:m}),`
`,t.jsx(e.h2,{id:"sidenavigationitem",children:"SideNavigationItem"}),`
`,t.jsx(a,{of:s}),`
`,t.jsx(o,{metaOf:i,of:s}),`
`,t.jsx(e.h2,{id:"sidenavigationsubitem",children:"SideNavigationSubItem"}),`
`,t.jsx(a,{of:d}),`
`,t.jsx(o,{metaOf:i,of:d}),`
`,t.jsx(e.h2,{id:"sidenavigationgroup",children:"SideNavigationGroup"}),`
`,t.jsx(a,{of:p}),`
`,t.jsx(o,{metaOf:i,of:p}),`
`,t.jsx(x,{})]})}function ft(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{ft as default};
