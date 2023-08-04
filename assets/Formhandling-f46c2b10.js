import{j as e}from"./jsx-runtime-d079401a.js";import{M as B}from"./chunk-S4VUQJ4A-90a23f95.js";import{r as s}from"./index-f1f2c4b1.js";import{F as M,b as k,a as r}from"./index-da27dd8b.js";import{T}from"./index-ee90b1c9.js";import"./InputElementsFormSupport-4f969d5a.js";import{D as O}from"./index-42010318.js";import{M as E,a as l}from"./index-66baa604.js";import{L as c}from"./index-c6c253e5.js";import{I as u}from"./index-0cf22c59.js";import{I as h}from"./Input-aa3cf5ef.js";import{S as R}from"./index-f0166eff.js";import{O as p}from"./index-40d82346.js";import{B as q}from"./index-4899c5cd.js";import{a as D}from"./Button-02dfef34.js";import"./DomRefTable.module-f3e9385d.js";import{F as L}from"./Footer-9d0115b9.js";import{u as f}from"./index-59d6410c.js";import"./iframe-4e2a5c10.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./clsx-1229b3e0.js";import"./react-jss.esm-c310038c.js";import"./ThemingParameters-7e2e4e30.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-7659063b.js";import"./Title-f7b3e876.js";import"./UI5Element-a4bd3d38.js";import"./WrappingType-b81e595a.js";import"./CssSizeVariables-17481929.js";import"./useIsomorphicId-ed1d334d.js";import"./I18nContext-dd74d568.js";import"./ModalsContext-c6c22f4c.js";import"./CustomVariables-df17d38c.js";import"./GlobalStyleClasses-7209358d.js";import"./DatePicker-7f0704a1.js";import"./slot-76e48863.js";import"./Icon-42236945.js";import"./Icons-74c917eb.js";import"./Calendar-fd0ad81b.js";import"./Gregorian-e62abc1d.js";import"./LocaleData-e8db12a1.js";import"./Integer-f7f172c9.js";import"./slim-arrow-left-cd18fc92.js";import"./slim-arrow-right-b5a9fe30.js";import"./class-map-0ab40ab9.js";import"./i18n-defaults-d5d083dd.js";import"./style-map-132a30d8.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./Device-6afa24d0.js";import"./decline-3cb804de.js";import"./i18n-defaults-2d2bf0b6.js";import"./HasPopup-47461347.js";import"./ResponsivePopover-1151e741.js";import"./Popover-26ef4370.js";import"./PopupsCommon.css-f12c9479.js";import"./FocusableElements-66623361.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-0af4416f.js";import"./BrowserScrollbar.css-309143b9.js";import"./Dialog-3eddfe98.js";import"./information-dbbb1c9a.js";import"./ResponsivePopoverCommon.css-870f7136.js";import"./ValueState-ab6838cc.js";import"./slim-arrow-down-9459236f.js";import"./Suggestions.css-8d6efd26.js";import"./GroupHeaderListItem-60c5bd52.js";import"./ListItemBase-472e3755.js";import"./ItemNavigation-0734b7c0.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-ce1a2cfb.js";import"./Label-287c3220.js";import"./Tokenizer-ee572d4f.js";import"./ScrollEnablement-dd3a6392.js";import"./animate-1a16ba20.js";import"./StandardListItem-afe74127.js";import"./ListItem-86bc8c51.js";import"./MarkedEvents-b83081e9.js";import"./RadioButton-082fd9c9.js";import"./CheckBox-355e2cb2.js";import"./accept-aa607c05.js";import"./Avatar-6c09069b.js";import"./employee-05c578de.js";import"./ValueStateMessage.css-044f6113.js";import"./Token-b1762f8c.js";import"./ToggleButton-4c5cf92d.js";import"./ComboBoxItem-677d5363.js";import"./InvisibleMessage-2b547741.js";import"./index-fed30f62.js";import"./index-47d0a85a.js";import"./addCustomCSSWithScoping-d9b40dee.js";import"./index-fad89ce6.js";import"./index-ce0dd8db.js";import"./index-0a19d148.js";import"./index-f93dc293.js";import"./Link-498d09c2.js";import"./index-14ef1273.js";import"./index-43bb5e08.js";function z(){const[o,i]=s.useState(""),[a,t]=s.useState(""),[b,x]=s.useState("Germany"),[d,g]=s.useState(""),[y,j]=s.useState([]),I=n=>{const m={email:o,password:a,country:b,birthday:d,payment:y};alert(JSON.stringify(m,null,2)),console.log(m),n.preventDefault()},v=n=>{i(n.target.value)},C=n=>{t(n.target.value)},F=n=>{x(n.detail.selectedOption.innerText)},S=n=>{g(n.detail.value)},w=n=>{const m=Object.values(n.detail.items).map(P=>P.text);j(m)};return e.jsx(T,{children:e.jsx(M,{onSubmit:I,children:e.jsxs(k,{titleText:"Create Account",children:[e.jsx(r,{label:e.jsx(c,{required:!0,children:"Email"}),children:e.jsx(u,{name:"email",required:!0,type:h.Email,value:o,onInput:v})}),e.jsx(r,{label:e.jsx(c,{required:!0,children:"Password"}),children:e.jsx(u,{name:"password",required:!0,type:h.Password,value:a,onInput:C})}),e.jsx(r,{label:"Country",children:e.jsxs(R,{name:"country",onChange:F,children:[e.jsx(p,{children:"Germany"}),e.jsx(p,{children:"France"}),e.jsx(p,{children:"Italy"})]})}),e.jsx(r,{label:"Date of Birth",children:e.jsx(O,{value:d,onChange:S})}),e.jsx(r,{label:"Payment methods",children:e.jsxs(E,{onSelectionChange:w,children:[e.jsx(l,{text:"Credit card"}),e.jsx(l,{text:"PayPal"}),e.jsx(l,{text:"Bank transfer"})]})}),e.jsx(r,{label:"",children:e.jsx(q,{type:D.Submit,children:"Submit"})})]})})})}function Zt(o={}){const{wrapper:i}=Object.assign({},f(),o.components);return i?e.jsx(i,Object.assign({},o,{children:e.jsx(a,{})})):a();function a(){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",img:"img",pre:"pre",ul:"ul",li:"li",strong:"strong"},f(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Knowledge Base/Form Handling"}),`
`,e.jsx(t.h1,{id:"form-handling",children:"Form Handling"}),`
`,e.jsxs(t.p,{children:["This guide demonstrates the use of the ",e.jsx(t.code,{children:"Form"})," component."]}),`
`,e.jsx(t.h2,{id:"simple-ui5-web-components-for-react-form",children:"Simple UI5 Web Components for React Form"}),`
`,e.jsxs(t.p,{children:["This Form is implemented with the ",e.jsx(t.code,{children:"Form"}),` component from UI5 Web Components for React.
The children of the `,e.jsx(t.code,{children:"Form"})," should only be ",e.jsx(t.code,{children:"FormGroup"})," and ",e.jsx(t.code,{children:"FormItem"})," in order to preserve the intended design. The children of ",e.jsx(t.code,{children:"FormGroup"})," should only be ",e.jsx(t.code,{children:"FormItem"})," and the children of ",e.jsx(t.code,{children:"FormItem"})," can be an arbitrary React Node."]}),`
`,e.jsx(t.p,{children:"You can then create a form with UI5 Web Components for React as follows. Also, you can find this example in a Codesandbox."}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://codesandbox.io/p/sandbox/wcr-form-forked-9f5br7?file=%2Fsrc%2FApp.js",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(t.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wcr form"})})}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import React, { useState } from 'react';
import {
  ThemeProvider,
  Form,
  FormGroup,
  FormItem,
  Input,
  Option,
  Select,
  CheckBox,
  InputType,
  Button,
  ButtonType,
  MultiComboBox,
  MultiComboBoxItem,
  DatePicker,
  Label
} from '@ui5/webcomponents-react';
//For the submits property of the button to have effect, you must add the following import
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('Germany');
  const [birthday, setBirthday] = useState('');
  const [payment, setPayment] = useState([]);

  const handleSubmit = (e) => {
    const values = {
      email: email,
      password: password,
      country: country,
      birthday: birthday,
      payment: payment
    };
    alert(JSON.stringify(values, null, 2));
    console.log(values);
    //prevent page reload
    e.preventDefault();
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.detail.selectedOption.innerText);
  };
  const handleBirthdayChange = (e) => {
    setBirthday(e.detail.value);
  };
  const handlePaymentSelectionChange = (e) => {
    const selected = Object.values(e.detail.items).map((val) => val.text);
    setPayment(selected);
  };

  return (
    <ThemeProvider>
      <Form onSubmit={handleSubmit}>
        <FormGroup titleText="Create Account">
          <FormItem label={<Label required>Email</Label>}>
            <Input name="email" required type={InputType.Email} value={email} onInput={handleEmailInput} />
          </FormItem>
          <FormItem label={<Label required>Password</Label>}>
            <Input name="password" required type={InputType.Password} value={password} onInput={handlePasswordInput} />
          </FormItem>
          <FormItem label="Country">
            <Select name="country" onChange={handleCountryChange}>
              <Option>Germany</Option>
              <Option>France</Option>
              <Option>Italy</Option>
            </Select>
          </FormItem>
          <FormItem label="Date of Birth">
            <DatePicker value={birthday} onChange={handleBirthdayChange}></DatePicker>
          </FormItem>
          <FormItem label="Payment methods">
            <MultiComboBox onSelectionChange={handlePaymentSelectionChange}>
              <MultiComboBoxItem text="Credit card" />
              <MultiComboBoxItem text="PayPal" />
              <MultiComboBoxItem text="Bank transfer" />
            </MultiComboBox>
          </FormItem>
          <FormItem>
            <Button type={ButtonType.Submit}>Submit</Button>
          </FormItem>
        </FormGroup>
      </Form>
    </ThemeProvider>
  );
}
`})})]}),`
`,e.jsxs(t.p,{children:["Now the ",e.jsx(t.code,{children:"RegisterForm"})," would compile to this:"]}),`
`,e.jsx(z,{}),`
`,e.jsxs(t.p,{children:["For the submits property of the ",e.jsx(t.code,{children:"Button"})," to have effect, you must add the following import to your project ",e.jsx(t.code,{children:"import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';"}),".The import creates an internal native ",e.jsx(t.code,{children:"Input"}),` component inside the web-component,
so that it can be submitted not only via submit button press, but also by pressing the enter key in most components. Basically, the import should enable web-components to behave like native input elements in a form.`]}),`
`,e.jsxs(t.p,{children:["Whenever a component has a custom event (e.g. onChange event from ",e.jsx(t.code,{children:"DatePicker"}),"), the corresponding value should be fetched via event.detail (not event.target). This will give you the correct updated value since the internal input has already been updated. At the time the event is fired, however, it is not yet updated and therefore event.target might also not be updated yet."]}),`
`,e.jsxs(t.p,{children:[`By default, the browser will reload the page when a form submission event is triggered. Generally, you want to avoid this in React applications because it would cause you to lose the state.
To prevent the default browser behavior, you have to use `,e.jsx(t.code,{children:"e.preventDefault()"})," in the ",e.jsx(t.code,{children:"onSubmit"})," event."]}),`
`,e.jsx(t.h2,{id:"ui5-web-components-for-react-form-with-react-hook-form-state-management-and-zod-validation",children:"UI5 Web Components for React Form with React Hook Form State Management and Zod Validation"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/react-hook-form/react-hook-form",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Hook Form"}),": form state management and validation"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/colinhacks/zod",target:"_blank",rel:"nofollow noopener noreferrer",children:"Zod"}),": schema validation with static type inference"]}),`
`]}),`
`,e.jsx(t.p,{children:'Input components from UI5 Web Components for React can be used with external libraries like "React Hook Form" and "Zod".'}),`
`,e.jsxs(t.p,{children:["Some components like the ",e.jsx(t.code,{children:"Input"})," ",e.jsx(t.strong,{children:"should"})," work out of the box (depending on how the library handles properties and events), but for others, such as those that implement ",e.jsx(t.code,{children:"CustomEvent"}),"s or custom properties for ",e.jsx(t.code,{children:"value"})," handling, some customization are required to ensure the correct state is passed to the form library."]}),`
`,e.jsx(t.p,{children:'Here you can find a codeSandbox example that shows the use of various input components from UI5 Web Components for React together with "React Hook Form" and "Zod".'}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://codesandbox.io/p/sandbox/kind-ben-7c5xcr?file=%2Fsrc%2FApp.tsx",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(t.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"UI5-WCR + React Hook Form + Zod"})})}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`// To enable form support of ui5-webcomponents, you have to import this feature
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import {
  ThemeProvider,
  Form,
  FormGroup,
  FormItem,
  Label,
  Input,
  Select,
  Button,
  MultiComboBox,
  DatePicker,
  ButtonType,
  CheckBox,
  ValueState,
  InputType,
  Popover,
  Option,
  MultiComboBoxItem,
  ObjectStatus
} from '@ui5/webcomponents-react';
import { useForm, useController } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPortal } from 'react-dom';
import { useEffect, useId, useState } from 'react';

// Zod schema
const schema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .regex(/[A-Z]/, { message: 'Must contain at least one capital letter' })
      .min(8, { message: 'Must be 8 or more characters long' }),
    confirmPassword: z
      .string()
      .regex(/[A-Z]/, { message: 'Must contain at least one capital letter' })
      .min(8, { message: 'Must be 8 or more characters long' }),
    toc: z.literal(true, {
      errorMap: () => ({ message: 'Please accept the terms of service' })
    }),
    country: z.string(),
    dob: z.string(),
    payment: z.any()
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['confirmPassword']
      });
    }
  });

/* ***********************

To ensure the correct behavior of individual components in conjunction with the "React Hook Form", they must be "wrapped".
Basically, this applies to all components that use custom events or properties.

*********************** */

const WrappedSelect = (props) => {
  const { field } = useController(props);
  const handleChange = (e) => {
    field.onChange(e.detail.selectedOption.textContent);
  };

  return (
    <Select {...field} onChange={handleChange}>
      <Option>Germany</Option>
      <Option>France</Option>
      <Option>Italy</Option>
    </Select>
  );
};

const WrappedMultiComboBox = (props) => {
  const { field } = useController(props);
  const handleChange = (e) => {
    field.onChange(Object.values(e.detail.items).map((val) => val.text));
  };
  return (
    <MultiComboBox {...field} onSelectionChange={handleChange}>
      <MultiComboBoxItem text="Credit card" />
      <MultiComboBoxItem text="PayPal" />
      <MultiComboBoxItem text="Bank transfer" />
    </MultiComboBox>
  );
};

const WrappedCheckBox = (props) => {
  const { field, formState } = useController(props);
  const [open, setOpen] = useState(false);
  const errorMessage = formState.errors?.[field.name]?.message;
  const uniqueId = useId();
  const handleChange = (e) => {
    field.onChange(e.target.checked);
  };
  const handleFocus = (e) => {
    if (errorMessage) {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!errorMessage) {
      setOpen(false);
    }
  }, [errorMessage]);

  return (
    <>
      <CheckBox
        {...field}
        checked={field.value}
        onChange={handleChange}
        id={uniqueId}
        onFocus={handleFocus}
        valueState={errorMessage ? ValueState.Error : ValueState.None}
      />
      {createPortal(
        <Popover open={open} opener={uniqueId} onAfterClose={handleClose} initialFocus={uniqueId}>
          <ObjectStatus state={ValueState.Error}>{errorMessage}</ObjectStatus>
        </Popover>,
        document.body
      )}
    </>
  );
};

function App() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      country: 'Germany',
      dob: '',
      payment: [],
      toc: false
    },
    mode: 'onChange',
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    console.log(data);
  };
  return (
    <ThemeProvider>
      <Form onSubmit={handleSubmit(onSubmit)} labelSpanM={4}>
        <FormGroup titleText="Create Account">
          <FormItem label={<Label required>Email</Label>}>
            <Input
              {...register('email', { required: true })}
              valueState={errors.email ? ValueState.Error : ValueState.None}
              valueStateMessage={<span>{errors.email?.message}</span>}
              type={InputType.Email}
            />
          </FormItem>
          <FormItem label={<Label required>Password</Label>}>
            <Input
              {...register('password', { required: true })}
              valueState={errors.password ? ValueState.Error : ValueState.None}
              valueStateMessage={<span>{errors.password?.message}</span>}
              type={InputType.Password}
            />
          </FormItem>
          <FormItem label={<Label required>Confirm Password</Label>}>
            <Input
              {...register('confirmPassword', { required: true })}
              valueState={errors.confirmPassword ? ValueState.Error : ValueState.None}
              valueStateMessage={<span>{errors.confirmPassword?.message}</span>}
              type={InputType.Password}
            />
          </FormItem>
          <FormItem label="Country">
            <WrappedSelect name="country" control={control} />
          </FormItem>
          <FormItem label="Date of Birth">
            <DatePicker {...register('dob')} />
          </FormItem>
          <FormItem label="Payment methods">
            <WrappedMultiComboBox name="payment" control={control} />
          </FormItem>
          <FormItem
            label={
              <Label style={{ alignSelf: 'start', paddingTop: '0.75rem' }} required>
                I accept the terms of service
              </Label>
            }
          >
            <WrappedCheckBox
              name="toc"
              control={control}
              rules={{ required: true }}
              valueState={errors.toc ? ValueState.Error : ValueState.None}
            />
          </FormItem>
        </FormGroup>
        <FormItem>
          <Button type={ButtonType.Submit}>Submit</Button>
        </FormItem>
      </Form>
    </ThemeProvider>
  );
}

export default App;
`})})]}),`
`,e.jsx(L,{})]})}}export{Zt as default};
//# sourceMappingURL=Formhandling-f46c2b10.js.map
