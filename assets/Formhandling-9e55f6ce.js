import{j as e}from"./jsx-runtime-d079401a.js";import{M as B}from"./chunk-S4VUQJ4A-5100a69a.js";import{r as s}from"./index-f1f2c4b1.js";import{F as M,b as k,a as r}from"./index-59de341b.js";import{T}from"./index-8f8b2b4b.js";import"./InputElementsFormSupport-c57b62a3.js";import{D as O}from"./index-aa4c144c.js";import{M as E,a as l}from"./index-8efe7a86.js";import{L as c}from"./index-aa5143cc.js";import{I as u}from"./index-66c6e788.js";import{I as h}from"./Input-4e4191f2.js";import{S as R}from"./index-fab3daa9.js";import{O as p}from"./index-a233c822.js";import{B as q}from"./index-f220b36f.js";import{a as D}from"./Button-4505b9f6.js";import"./DomRefTable.module-6eaea8ef.js";import{F as L}from"./Footer-bc468449.js";import{u as f}from"./index-59d6410c.js";import"./iframe-57e6b318.js";import"../sb-preview/runtime.js";import"./index-d203965f.js";import"./index-b42968db.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./clsx-1229b3e0.js";import"./react-jss.esm-2e5f50f2.js";import"./ThemingParameters-7e2e4e30.js";import"./withWebComponent-b4c67a1a.js";import"./utils-e9940b93.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./Media-aec6b7ac.js";import"./MediaRange-25b98f31.js";import"./index-7f564c67.js";import"./Title-0fb688d3.js";import"./UI5Element-e590cd60.js";import"./WrappingType-b81e595a.js";import"./CssSizeVariables-596b7aba.js";import"./useIsomorphicId-ed1d334d.js";import"./I18nContext-dd74d568.js";import"./ModalsContext-c6c22f4c.js";import"./CustomVariables-f4d4caba.js";import"./GlobalStyleClasses-7209358d.js";import"./DatePicker-bb316244.js";import"./slot-76e48863.js";import"./Icon-b897d66f.js";import"./Icons-65b34360.js";import"./Calendar-8205517b.js";import"./Gregorian-b6cfe3ab.js";import"./LocaleData-c95d6f94.js";import"./Integer-f7f172c9.js";import"./slim-arrow-left-8e2d770b.js";import"./slim-arrow-right-7a309837.js";import"./class-map-e1b423a4.js";import"./i18n-defaults-d5195a49.js";import"./style-map-ecc46a93.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./HasPopup-47461347.js";import"./ResponsivePopover-ffa286b7.js";import"./PopupUtils-f407c5e4.js";import"./getActiveElement-bcae01ed.js";import"./Popover-742c9988.js";import"./PopupsCommon.css-97942203.js";import"./FocusableElements-d024bb16.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-34ecee99.js";import"./BrowserScrollbar.css-4a87524a.js";import"./Dialog-cf714d6a.js";import"./information-e97f915a.js";import"./alert-7494fabe.js";import"./ResponsivePopoverCommon.css-5a4ca537.js";import"./ValueState-ab6838cc.js";import"./slim-arrow-down-16231f47.js";import"./Suggestions.css-91a648c4.js";import"./GroupHeaderListItem-667d01bb.js";import"./ListItemBase-e8a1d82b.js";import"./ItemNavigation-52fe434f.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-7cb729ee.js";import"./Label-69062358.js";import"./Tokenizer-506d47fc.js";import"./ScrollEnablement-a13736e5.js";import"./animate-1a16ba20.js";import"./StandardListItem-32d37e59.js";import"./ListItem-65b5ee84.js";import"./MarkedEvents-b83081e9.js";import"./RadioButton-bfff4944.js";import"./CheckBox-c32e2a79.js";import"./accept-92104380.js";import"./Avatar-60d18bb8.js";import"./employee-78fe46d2.js";import"./ValueStateMessage.css-ca082762.js";import"./Token-a3e125e7.js";import"./ToggleButton-c0a19ccb.js";import"./ComboBoxItem-15509914.js";import"./Select-bafc0df3.js";import"./InvisibleMessage-71605293.js";import"./index-bead39d9.js";import"./index-743fc8f1.js";import"./addCustomCSSWithScoping-203b56de.js";import"./index-0c050832.js";import"./index-dcdbed31.js";import"./index-11aefe52.js";import"./index-a11ae6e8.js";import"./Link-a373b451.js";import"./index-343af056.js";import"./index-e8d395a3.js";function z(){const[o,i]=s.useState(""),[a,t]=s.useState(""),[b,x]=s.useState("Germany"),[d,g]=s.useState(""),[y,j]=s.useState([]),I=n=>{const m={email:o,password:a,country:b,birthday:d,payment:y};alert(JSON.stringify(m,null,2)),console.log(m),n.preventDefault()},v=n=>{i(n.target.value)},C=n=>{t(n.target.value)},F=n=>{x(n.detail.selectedOption.innerText)},S=n=>{g(n.detail.value)},w=n=>{const m=Object.values(n.detail.items).map(P=>P.text);j(m)};return e.jsx(T,{children:e.jsx(M,{onSubmit:I,children:e.jsxs(k,{titleText:"Create Account",children:[e.jsx(r,{label:e.jsx(c,{required:!0,children:"Email"}),children:e.jsx(u,{name:"email",required:!0,type:h.Email,value:o,onInput:v})}),e.jsx(r,{label:e.jsx(c,{required:!0,children:"Password"}),children:e.jsx(u,{name:"password",required:!0,type:h.Password,value:a,onInput:C})}),e.jsx(r,{label:"Country",children:e.jsxs(R,{name:"country",onChange:F,children:[e.jsx(p,{children:"Germany"}),e.jsx(p,{children:"France"}),e.jsx(p,{children:"Italy"})]})}),e.jsx(r,{label:"Date of Birth",children:e.jsx(O,{value:d,onChange:S})}),e.jsx(r,{label:"Payment methods",children:e.jsxs(E,{onSelectionChange:w,children:[e.jsx(l,{text:"Credit card"}),e.jsx(l,{text:"PayPal"}),e.jsx(l,{text:"Bank transfer"})]})}),e.jsx(r,{label:"",children:e.jsx(q,{type:D.Submit,children:"Submit"})})]})})})}function _t(o={}){const{wrapper:i}=Object.assign({},f(),o.components);return i?e.jsx(i,Object.assign({},o,{children:e.jsx(a,{})})):a();function a(){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",img:"img",pre:"pre",ul:"ul",li:"li",strong:"strong"},f(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Knowledge Base/Form Handling"}),`
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
`,e.jsx(L,{})]})}}export{_t as default};
//# sourceMappingURL=Formhandling-9e55f6ce.js.map
