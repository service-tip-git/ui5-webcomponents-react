import{j as t}from"./iframe-RECRoZhV.js";import{useMDXComponents as c}from"./index-1tzPRbI6.js";import{A as o}from"./ArgTypesWithNote-DBN2dQA_.js";import{C as l}from"./ControlsWithNote-8guUQjqU.js";import{D as g}from"./DocsHeader-D00kQhrp.js";import{F as x}from"./CommandsAndQueries-DPpsoP9s.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-CH1yi1wC.js";import{C as i,D as r}from"./NavigationLayout.stories-BCF5OeVr.js";import{S as m,a as s,b as d}from"./index-CX7Jowh1.js";import{S as p}from"./chain-link-D1w-zCse.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfNZ4QaZ.js";import"./information-D6UQivs-.js";import"./sys-enter-2-CMoukZNH.js";import"./alert-BjbREM6S.js";import"./Tag-BCmfqboN.js";import"./index-5drqvW0T.js";import"./index-DGKmMzEm.js";import"./Link-BZUDNGRG.js";import"./copy-zC_uHC7X.js";import"./copy-B_omwcq7.js";import"./GitHub-Mark-CmtAkk_i.js";import"./TableOfContent-UMLqbvXM.js";import"./index-CB0t3Ndr.js";import"./index-D1It_vMD.js";import"./index-lc4LLOiH.js";import"./index-Dk8UUcOY.js";import"./index-Rgh5WsNa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bozn53qz.js";import"./addCustomCSSWithScoping-Uy-s1Hcf.js";import"./index-5gp0fS17.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./menu-WoDiaMMN.js";import"./home-ClQsTGWQ.js";import"./calendar-QADAC0K3.js";import"./history-BS1-mgS6.js";import"./background-BTiD0skN.js";import"./action-settings-DZksd8-9.js";import"./locked-CQmFUSJS.js";import"./index-DnAk-O1G.js";import"./ListItemStandard-CghTaqTk.js";import"./ButtonBadge-BwzDdQ83.js";import"./search-UQnhYbOp.js";import"./overflow-b8JEObb6.js";import"./slim-arrow-down-kuIl5ttD.js";import"./slim-arrow-down-CT6VdoUI.js";import"./i18n-defaults-k5o3Svb4.js";import"./navigation-right-arrow-CIZgBpjX.js";import"./navigation-right-arrow-CoJr-ET_.js";import"./navigation-down-arrow-DwtmqN-Q.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
