import{j as e}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{r as S}from"./index-RYns6xqu.js";import{T as p}from"./index-D_85Dc-w.js";import{a as F,F as t,V as ie,b as w}from"./VariantItem-ChaRf61V.js";import{F as x,a as ae}from"./index-CLe8_13Z.js";import{S as G}from"./index-DDxHOrr_.js";import{R as Y}from"./index-CR0VE72S.js";import{M as E}from"./index-CgwBcgAV.js";import{T as l}from"./index-BBkkC4fR.js";import{C as H,a as u}from"./index-BU5zt9F5.js";import{D as R}from"./index-DW-VCYkB.js";import{D as le,a as de,b as se}from"./index-DcPFzlfH.js";import{I as y}from"./index-CXq3hLXW.js";import{T as ce}from"./index-D2GqLYdc.js";import{S as D}from"./index-BTd2AFRJ.js";import{S as h}from"./index-CyHz8WRq.js";import{O as r}from"./index-BZ60Ewmc.js";import{M as k,a as n}from"./index-4ZU0pu4z.js";import{D as ue}from"./index-CrfRLldP.js";import{L as m}from"./index-CySIBtOy.js";const xe={title:"Layouts & Floorplans / FilterBar",component:F,args:{search:e.jsx(y,{}),header:e.jsx(ce,{children:"Test"}),filterContainerWidth:"13.125rem"},argTypes:{activeFiltersCount:{control:"number"},search:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}},portalContainer:{control:{disable:!0}},filterContainerWidth:{control:"text"},as:{control:{disable:!0}}}},C={render:i=>e.jsxs(F,{...i,children:[e.jsx(t,{label:"StepInput",required:!0,children:e.jsx(G,{required:!0})}),e.jsx(t,{label:"RatingIndicator",children:e.jsx(Y,{})}),e.jsx(t,{label:"MultiInput",active:!0,children:e.jsx(E,{tokens:e.jsxs(e.Fragment,{children:[e.jsx(l,{text:"Argentina",selected:!0}),e.jsx(l,{text:"Bulgaria"}),e.jsx(l,{text:"England"}),e.jsx(l,{text:"Finland"})]})})}),e.jsx(t,{label:"Input",children:e.jsx(y,{placeholder:"Placeholder"})}),e.jsx(t,{label:"Switch",children:e.jsx(D,{})}),e.jsx(t,{label:"SELECT w/ initial selected",hiddenInFilterBar:!0,children:e.jsxs(h,{children:[e.jsx(r,{children:"Option 1"}),e.jsx(r,{selected:!0,children:"Option 2"}),e.jsx(r,{children:"Option 3"}),e.jsx(r,{children:"Option 4"})]})}),e.jsx(t,{label:"SELECT w/o initial selected",children:e.jsxs(h,{children:[e.jsx(r,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(r,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(r,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(r,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(r,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(t,{label:"MultBox w/ initial selected",groupName:"Group 1",children:e.jsxs(k,{children:[e.jsx(n,{text:"MultiComboBoxItem 1"}),e.jsx(n,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(n,{text:"MultiComboBoxItem 3"}),e.jsx(n,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(t,{label:"ComboBox w/o initial selected",groupName:"Group 2",children:e.jsxs(H,{children:[e.jsx(u,{text:"ComboBoxItem 1"}),e.jsx(u,{text:"ComboBoxItem 2"}),e.jsx(u,{text:"ComboBoxItem 3"}),e.jsx(u,{text:"ComboBoxItem 4"})]})}),e.jsx(t,{label:"Date Picker",groupName:"Group 2",children:e.jsx(R,{style:{minWidth:"auto"}})})]})},pe={age:37,countries:{},currency:"USD",date:"",dateRange:"",search:""};function me(i,o){switch(o.type){case"SET_AGE":return{...i,age:o.payload};case"SET_COUNTRIES":return{...i,countries:o.payload};case"SET_CURRENCY":return{...i,currency:o.payload};case"SET_DATE":return{...i,date:o.payload};case"SET_DATE_RANGE":return{...i,dateRange:o.payload};case"SET_SEARCH":return{...i,search:o.payload};case"DIALOG_RESTORE":return o.payload;default:return i}}const j={render:i=>{const[o,s]=S.useReducer(me,pe),{age:I,countries:d,currency:c,date:g,dateRange:b,search:M}=o,O=S.useRef(void 0),J=a=>{s({type:"SET_SEARCH",payload:a.target.value})},z=a=>{s({type:"SET_AGE",payload:a.target.value})},K=a=>{const re=a.detail.items.reduce((oe,ne)=>({...oe,[ne.getAttribute("text").toLowerCase()]:!0}),{});s({type:"SET_COUNTRIES",payload:re})},Q=a=>{s({type:"SET_CURRENCY",payload:a.detail.selectedOption.textContent})},X=a=>{a.detail.valid&&s({type:"SET_DATE",payload:a.detail.value})},Z=a=>{a.detail.valid&&s({type:"SET_DATE_RANGE",payload:a.detail.value})},ee=()=>{O.current=o},te=()=>{s({type:"DIALOG_RESTORE",payload:O.current})};return e.jsxs(e.Fragment,{children:[e.jsxs(F,{showResetButton:!0,search:e.jsx(y,{onInput:J}),onRestore:te,onFiltersDialogOpen:ee,children:[e.jsx(t,{label:"Age",active:!!I,required:!0,children:e.jsx(G,{value:I,onChange:z,required:!0})}),e.jsx(t,{label:"Countries",active:Object.keys(d).length>0,children:e.jsxs(k,{onSelectionChange:K,children:[e.jsx(n,{text:"Argentina",selected:d.argentina}),e.jsx(n,{text:"Bulgaria",selected:d.bulgaria}),e.jsx(n,{text:"Finland",selected:d.finland}),e.jsx(n,{text:"Germany",selected:d.germany}),e.jsx(n,{text:"Ireland",selected:d.ireland}),e.jsx(n,{text:"Ukraine",selected:d.ukraine}),e.jsx(n,{text:"USA",selected:d.usa})]})}),e.jsx(t,{label:"Currency",active:!!c,children:e.jsxs(h,{onChange:Q,children:[e.jsx(r,{additionalText:"€",selected:c==="EUR",children:"EUR"}),e.jsx(r,{additionalText:"$",selected:c==="USD",children:"USD"}),e.jsx(r,{additionalText:"£",selected:c==="GBP",children:"GBP"}),e.jsx(r,{additionalText:"₺",selected:c==="TRY",children:"TRY"}),e.jsx(r,{additionalText:"¥",selected:c==="JPY",children:"JPY"})]})}),e.jsx(t,{label:"Date",active:!!g,children:e.jsx(ue,{value:g,onChange:X,style:{minWidth:"auto"}})}),e.jsx(t,{label:"Date Range",active:!!b,hiddenInFilterBar:!0,children:e.jsx(R,{value:b,onChange:Z,style:{minWidth:"auto"}})})]}),e.jsxs(x,{direction:ae.Column,children:[e.jsxs(x,{children:[e.jsx(m,{showColon:!0,children:"Search"}),e.jsx(p,{children:M})]}),e.jsxs(x,{children:[e.jsx(m,{showColon:!0,children:"Age"}),e.jsx(p,{children:I})]}),e.jsxs(x,{children:[e.jsx(m,{showColon:!0,children:"Countries"}),e.jsx(p,{children:JSON.stringify(d)})]}),e.jsxs(x,{children:[e.jsx(m,{showColon:!0,children:"Currency"}),e.jsx(p,{children:c})]}),e.jsxs(x,{children:[e.jsx(m,{showColon:!0,children:"Date"}),e.jsx(p,{children:g})]}),e.jsxs(x,{children:[e.jsx(m,{showColon:!0,children:"Date Range"}),e.jsx(p,{children:b})]})]})]})}},B={name:"In DynamicPage",render:i=>e.jsx(le,{style:{height:"800px"},titleArea:e.jsx(de,{style:{minHeight:"0"},heading:e.jsxs(ie,{onClick:o=>{o.stopPropagation()},children:[e.jsx(w,{children:"Variant 1"}),e.jsx(w,{selected:!0,children:"Variant 2"})]})}),headerArea:e.jsx(se,{children:e.jsxs(F,{...i,hideToolbar:!0,children:[e.jsx(t,{label:"StepInput",children:e.jsx(G,{})}),e.jsx(t,{label:"MultiInput",active:!0,required:!0,children:e.jsx(E,{required:!0,tokens:e.jsxs(e.Fragment,{children:[e.jsx(l,{text:"Argentina",selected:!0}),e.jsx(l,{text:"Bulgaria"}),e.jsx(l,{text:"England"}),e.jsx(l,{text:"Finland"})]})})}),e.jsx(t,{label:"Input",children:e.jsx(y,{placeholder:"Placeholder"})}),e.jsx(t,{label:"Switch",hiddenInFilterBar:!0,children:e.jsx(D,{})}),e.jsx(t,{label:"SELECT w/ initial selected",hiddenInFilterBar:!0,children:e.jsxs(h,{children:[e.jsx(r,{children:"Option 1"}),e.jsx(r,{selected:!0,children:"Option 2"}),e.jsx(r,{children:"Option 3"}),e.jsx(r,{children:"Option 4"})]})}),e.jsx(t,{label:"SELECT w/o initial selected",hiddenInFilterBar:!0,children:e.jsxs(h,{children:[e.jsx(r,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(r,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(r,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(r,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(r,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(t,{label:"MultBox w/ initial selected",groupName:"Group 1",hiddenInFilterBar:!0,children:e.jsxs(k,{children:[e.jsx(n,{text:"MultiComboBoxItem 1"}),e.jsx(n,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(n,{text:"MultiComboBoxItem 3"}),e.jsx(n,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(t,{label:"ComboBox w/o initial selected",groupName:"Group 2",hiddenInFilterBar:!0,children:e.jsxs(H,{children:[e.jsx(u,{text:"ComboBoxItem 1"}),e.jsx(u,{text:"ComboBoxItem 2"}),e.jsx(u,{text:"ComboBoxItem 3"}),e.jsx(u,{text:"ComboBoxItem 4"})]})}),e.jsx(t,{label:"Date Picker",groupName:"Group 2",children:e.jsx(R,{style:{minWidth:"auto"}})})]})}),children:e.jsx("div",{style:{background:"cadetblue",height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(p,{style:{color:"white"},children:"Content"})})})},T={render(i){const o=S.useId(),[s,I]=S.useState([e.jsx(t,{label:"StepInput",required:!0,orderId:`${o}-0`,children:e.jsx(G,{required:!0})},`${o}-0`),e.jsx(t,{label:"RatingIndicator",orderId:`${o}-1`,children:e.jsx(Y,{})},`${o}-1`),e.jsx(t,{label:"MultiInput",active:!0,orderId:`${o}-2`,children:e.jsx(E,{tokens:e.jsxs(e.Fragment,{children:[e.jsx(l,{text:"Argentina",selected:!0}),e.jsx(l,{text:"Bulgaria"}),e.jsx(l,{text:"England"}),e.jsx(l,{text:"Finland"})]})})},`${o}-2`),e.jsx(t,{label:"Input",orderId:`${o}-3`,children:e.jsx(y,{placeholder:"Placeholder"})},`${o}-3`),e.jsx(t,{label:"Switch",orderId:`${o}-4`,children:e.jsx(D,{})},`${o}-4`),e.jsx(t,{label:"SELECT w/ initial selected",hiddenInFilterBar:!0,orderId:`${o}-5`,children:e.jsxs(h,{children:[e.jsx(r,{children:"Option 1"}),e.jsx(r,{selected:!0,children:"Option 2"}),e.jsx(r,{children:"Option 3"}),e.jsx(r,{children:"Option 4"})]})},`${o}-5`)]),d=c=>{I(g=>c.detail.orderIds.map(b=>({...g.find(O=>O.props.orderId===b)})))};return e.jsx(F,{...i,onFiltersDialogSave:d,enableReordering:!0,showResetButton:!0,children:s})}};var v,f,A;C.parameters={...C.parameters,docs:{...(v=C.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <FilterBar {...args}>
        <FilterGroupItem label="StepInput" required>
          <StepInput required />
        </FilterGroupItem>
        <FilterGroupItem label="RatingIndicator">
          <RatingIndicator />
        </FilterGroupItem>
        <FilterGroupItem label="MultiInput" active>
          <MultiInput tokens={<>
                <Token text="Argentina" selected />
                <Token text="Bulgaria" />
                <Token text="England" />
                <Token text="Finland" />
              </>} />
        </FilterGroupItem>
        <FilterGroupItem label="Input">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="Switch">
          <Switch />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/ initial selected" hiddenInFilterBar>
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/o initial selected">
          <Select>
            <Option data-key="Test 1" selected icon="add">
              Test 1
            </Option>
            <Option data-key="Test 2" icon="add">
              Test 2
            </Option>
            <Option data-key="Test 3" icon="add">
              Test 3
            </Option>
            <Option data-key="Test 4" icon="add">
              Test 4
            </Option>
            <Option data-key="Test 5" icon="add">
              Test 5
            </Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="MultBox w/ initial selected" groupName="Group 1">
          <MultiComboBox>
            <MultiComboBoxItem text="MultiComboBoxItem 1" />
            <MultiComboBoxItem selected text="MultiComboBoxItem 2" />
            <MultiComboBoxItem text="MultiComboBoxItem 3" />
            <MultiComboBoxItem selected text="MultiComboBoxItem 4" />
          </MultiComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="ComboBox w/o initial selected" groupName="Group 2">
          <ComboBox>
            <ComboBoxItem text="ComboBoxItem 1" />
            <ComboBoxItem text="ComboBoxItem 2" />
            <ComboBoxItem text="ComboBoxItem 3" />
            <ComboBoxItem text="ComboBoxItem 4" />
          </ComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="Date Picker" groupName="Group 2">
          <DateRangePicker style={{
          minWidth: 'auto'
        }} />
        </FilterGroupItem>
      </FilterBar>;
  }
}`,...(A=(f=C.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var P,L,q;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
      age,
      countries,
      currency,
      date,
      dateRange,
      search
    } = state;
    const prevDialogOpenState = useRef(undefined);
    const handleSearch = e => {
      dispatch({
        type: 'SET_SEARCH',
        payload: e.target.value
      });
    };
    const handleAgeChange = e => {
      dispatch({
        type: 'SET_AGE',
        payload: e.target.value
      });
    };
    const handleCountriesChange = e => {
      const newCountries = e.detail.items.reduce((acc, cur) => {
        return {
          ...acc,
          [cur.getAttribute('text').toLowerCase()]: true
        };
      }, {});
      dispatch({
        type: 'SET_COUNTRIES',
        payload: newCountries
      });
    };
    const handleCurrencyChange = e => {
      dispatch({
        type: 'SET_CURRENCY',
        payload: e.detail.selectedOption.textContent
      });
    };
    const handleDateChange = e => {
      if (e.detail.valid) {
        dispatch({
          type: 'SET_DATE',
          payload: e.detail.value
        });
      }
    };
    const handleDateRangeChange = e => {
      if (e.detail.valid) {
        dispatch({
          type: 'SET_DATE_RANGE',
          payload: e.detail.value
        });
      }
    };
    const handleFiltersDialogOpen = () => {
      prevDialogOpenState.current = state;
    };
    const handleRestore = () => {
      dispatch({
        type: 'DIALOG_RESTORE',
        payload: prevDialogOpenState.current
      });
    };
    return <>
        <FilterBar showResetButton search={<Input onInput={handleSearch} />} onRestore={handleRestore} onFiltersDialogOpen={handleFiltersDialogOpen}>
          <FilterGroupItem label="Age" active={!!age} required>
            <StepInput value={age} onChange={handleAgeChange} required />
          </FilterGroupItem>
          <FilterGroupItem label="Countries" active={Object.keys(countries).length > 0}>
            <MultiComboBox onSelectionChange={handleCountriesChange}>
              <MultiComboBoxItem text="Argentina" selected={countries.argentina} />
              <MultiComboBoxItem text="Bulgaria" selected={countries.bulgaria} />
              <MultiComboBoxItem text="Finland" selected={countries.finland} />
              <MultiComboBoxItem text="Germany" selected={countries.germany} />
              <MultiComboBoxItem text="Ireland" selected={countries.ireland} />
              <MultiComboBoxItem text="Ukraine" selected={countries.ukraine} />
              <MultiComboBoxItem text="USA" selected={countries.usa} />
            </MultiComboBox>
          </FilterGroupItem>
          <FilterGroupItem label="Currency" active={!!currency}>
            <Select onChange={handleCurrencyChange}>
              <Option additionalText="€" selected={currency === 'EUR'}>
                EUR
              </Option>
              <Option additionalText="$" selected={currency === 'USD'}>
                USD
              </Option>
              <Option additionalText="£" selected={currency === 'GBP'}>
                GBP
              </Option>
              <Option additionalText="₺" selected={currency === 'TRY'}>
                TRY
              </Option>
              <Option additionalText="¥" selected={currency === 'JPY'}>
                JPY
              </Option>
            </Select>
          </FilterGroupItem>
          <FilterGroupItem label="Date" active={!!date}>
            <DatePicker value={date} onChange={handleDateChange} style={{
            minWidth: 'auto'
          }} />
          </FilterGroupItem>
          <FilterGroupItem label="Date Range" active={!!dateRange} hiddenInFilterBar>
            <DateRangePicker value={dateRange} onChange={handleDateRangeChange} style={{
            minWidth: 'auto'
          }} />
          </FilterGroupItem>
        </FilterBar>
        <FlexBox direction={FlexBoxDirection.Column}>
          <FlexBox>
            <Label showColon>Search</Label>
            <Text>{search}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Age</Label>
            <Text>{age}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Countries</Label>
            <Text>{JSON.stringify(countries)}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Currency</Label>
            <Text>{currency}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Date</Label>
            <Text>{date}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Date Range</Label>
            <Text>{dateRange}</Text>
          </FlexBox>
        </FlexBox>
      </>;
  }
}`,...(q=(L=j.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var _,$,N;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'In DynamicPage',
  render: args => {
    return <DynamicPage style={{
      height: '800px'
    }} titleArea={<DynamicPageTitle style={{
      minHeight: '0'
    }} heading={<VariantManagement onClick={e => {
      e.stopPropagation();
    }}>
                <VariantItem>Variant 1</VariantItem>
                <VariantItem selected>Variant 2</VariantItem>
              </VariantManagement>} />} headerArea={<DynamicPageHeader>
            <FilterBar {...args} hideToolbar>
              <FilterGroupItem label="StepInput">
                <StepInput />
              </FilterGroupItem>
              <FilterGroupItem label="MultiInput" active required>
                <MultiInput required tokens={<>
                      <Token text="Argentina" selected />
                      <Token text="Bulgaria" />
                      <Token text="England" />
                      <Token text="Finland" />
                    </>} />
              </FilterGroupItem>
              <FilterGroupItem label="Input">
                <Input placeholder="Placeholder" />
              </FilterGroupItem>
              <FilterGroupItem label="Switch" hiddenInFilterBar>
                <Switch />
              </FilterGroupItem>
              <FilterGroupItem label="SELECT w/ initial selected" hiddenInFilterBar>
                <Select>
                  <Option>Option 1</Option>
                  <Option selected>Option 2</Option>
                  <Option>Option 3</Option>
                  <Option>Option 4</Option>
                </Select>
              </FilterGroupItem>
              <FilterGroupItem label="SELECT w/o initial selected" hiddenInFilterBar>
                <Select>
                  <Option data-key="Test 1" selected icon="add">
                    Test 1
                  </Option>
                  <Option data-key="Test 2" icon="add">
                    Test 2
                  </Option>
                  <Option data-key="Test 3" icon="add">
                    Test 3
                  </Option>
                  <Option data-key="Test 4" icon="add">
                    Test 4
                  </Option>
                  <Option data-key="Test 5" icon="add">
                    Test 5
                  </Option>
                </Select>
              </FilterGroupItem>
              <FilterGroupItem label="MultBox w/ initial selected" groupName="Group 1" hiddenInFilterBar>
                <MultiComboBox>
                  <MultiComboBoxItem text="MultiComboBoxItem 1" />
                  <MultiComboBoxItem selected text="MultiComboBoxItem 2" />
                  <MultiComboBoxItem text="MultiComboBoxItem 3" />
                  <MultiComboBoxItem selected text="MultiComboBoxItem 4" />
                </MultiComboBox>
              </FilterGroupItem>
              <FilterGroupItem label="ComboBox w/o initial selected" groupName="Group 2" hiddenInFilterBar>
                <ComboBox>
                  <ComboBoxItem text="ComboBoxItem 1" />
                  <ComboBoxItem text="ComboBoxItem 2" />
                  <ComboBoxItem text="ComboBoxItem 3" />
                  <ComboBoxItem text="ComboBoxItem 4" />
                </ComboBox>
              </FilterGroupItem>
              <FilterGroupItem label="Date Picker" groupName="Group 2">
                <DateRangePicker style={{
            minWidth: 'auto'
          }} />
              </FilterGroupItem>
            </FilterBar>
          </DynamicPageHeader>}>
        <div style={{
        background: 'cadetblue',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <Text style={{
          color: 'white'
        }}>Content</Text>
        </div>
      </DynamicPage>;
  }
}`,...(N=($=B.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var U,W,V;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render(args) {
    const uniqueId = useId();
    const [orderedChildren, setOrderedChildren] = useState([<FilterGroupItem key={\`\${uniqueId}-0\`} label="StepInput" required orderId={\`\${uniqueId}-0\`}>
        <StepInput required />
      </FilterGroupItem>, <FilterGroupItem key={\`\${uniqueId}-1\`} label="RatingIndicator" orderId={\`\${uniqueId}-1\`}>
        <RatingIndicator />
      </FilterGroupItem>, <FilterGroupItem key={\`\${uniqueId}-2\`} label="MultiInput" active orderId={\`\${uniqueId}-2\`}>
        <MultiInput tokens={<>
              <Token text="Argentina" selected />
              <Token text="Bulgaria" />
              <Token text="England" />
              <Token text="Finland" />
            </>} />
      </FilterGroupItem>, <FilterGroupItem key={\`\${uniqueId}-3\`} label="Input" orderId={\`\${uniqueId}-3\`}>
        <Input placeholder="Placeholder" />
      </FilterGroupItem>, <FilterGroupItem key={\`\${uniqueId}-4\`} label="Switch" orderId={\`\${uniqueId}-4\`}>
        <Switch />
      </FilterGroupItem>, <FilterGroupItem key={\`\${uniqueId}-5\`} label="SELECT w/ initial selected" hiddenInFilterBar orderId={\`\${uniqueId}-5\`}>
        <Select>
          <Option>Option 1</Option>
          <Option selected>Option 2</Option>
          <Option>Option 3</Option>
          <Option>Option 4</Option>
        </Select>
      </FilterGroupItem>]);
    const handleFiltersDialogSave = e => {
      setOrderedChildren(prev => {
        return e.detail.orderIds.map(orderId => {
          const obj = prev.find(item => item.props.orderId === orderId);
          return {
            ...obj
          };
        });
      });
    };
    return <FilterBar {...args} onFiltersDialogSave={handleFiltersDialogSave} enableReordering showResetButton>
        {orderedChildren}
      </FilterBar>;
  }
}`,...(V=(W=T.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const he=["Default","WithLogic","InDynamicPage","WithReordering"],Ae=Object.freeze(Object.defineProperty({__proto__:null,Default:C,InDynamicPage:B,WithLogic:j,WithReordering:T,__namedExportsOrder:he,default:xe},Symbol.toStringTag,{value:"Module"}));export{Ae as C,C as D,B as I,j as W,T as a};
