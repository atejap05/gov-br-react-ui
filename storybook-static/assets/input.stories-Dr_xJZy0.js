import{j as e}from"./index-Bo_hk2WC.js";import{f as p,d as x,e as f}from"./index-OAp9FMst.js";import{C as m,b as d}from"./CardFooter-bDqatcva.js";import{B as u}from"./Button-BtkAxvgN.js";import{I as r}from"./Input-BfLw5_BT.js";import"./index-CsdIBAqE.js";import"./index-MS7LKRHD.js";const w={title:"Exemplos/Input",component:r,parameters:{layout:"centered"}},a={render:()=>e.jsx(m,{children:e.jsx(d,{children:e.jsxs("form",{className:"flex flex-col gap-4 justify-between items-center",children:[e.jsxs("div",{className:"flex flex-col items-center mb-4",children:[e.jsx("h1",{className:"text-2xl font-bold mb-1",children:"Basic Login Form"}),e.jsx("p",{className:"text-center text-sm",children:"Fill in the fields below to access your account"})]}),e.jsx(r,{id:"input-basic",label:"Full Name",placeholder:"Your full name ...",type:"text",icon:p}),e.jsx(r,{id:"input-basic",label:"Email",placeholder:"Your email ...",type:"email",icon:x}),e.jsx(r,{id:"input-basic",label:"Password",placeholder:"Your password ...",type:"password",icon:f}),e.jsx(u,{children:"Login"})]})})})},s={render:()=>e.jsx(m,{children:e.jsx(d,{children:e.jsxs("div",{className:"flex flex-col gap-4 justify-between items-center",children:[e.jsxs("div",{className:"flex flex-col items-center mb-4",children:[e.jsx("h1",{className:"text-2xl font-bold mb-1",children:"Basic Search"}),e.jsx("p",{className:"text-center text-sm",children:"Fill in the field below to search for something"})]}),e.jsx(r,{id:"input-search",label:"Make a search",type:"search"})]})})})};var t,n,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardContent>\r
        <form className="flex flex-col gap-4 justify-between items-center">\r
          <div className="flex flex-col items-center mb-4">\r
            <h1 className="text-2xl font-bold mb-1">Basic Login Form</h1>\r
            <p className="text-center text-sm">\r
              Fill in the fields below to access your account\r
            </p>\r
          </div>\r
\r
          <Input id="input-basic" label="Full Name" placeholder="Your full name ..." type="text" icon={faUser} />\r
          <Input id="input-basic" label="Email" placeholder="Your email ..." type="email" icon={faMailBulk} />\r
          <Input id="input-basic" label="Password" placeholder="Your password ..." type="password" icon={faKey} />\r
\r
          <Button>Login</Button>\r
        </form>\r
      </CardContent>\r
    </Card>
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,o,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardContent>\r
        <div className="flex flex-col gap-4 justify-between items-center">\r
          <div className="flex flex-col items-center mb-4">\r
            <h1 className="text-2xl font-bold mb-1">Basic Search</h1>\r
            <p className="text-center text-sm">\r
              Fill in the field below to search for something\r
            </p>\r
          </div>\r
          <Input id="input-search" label="Make a search" type="search" />\r
        </div>\r
      </CardContent>\r
    </Card>
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const B=["BasicLogin","BasicSearch"];export{a as BasicLogin,s as BasicSearch,B as __namedExportsOrder,w as default};
