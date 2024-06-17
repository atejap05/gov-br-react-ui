import{j as e}from"./index-DYpDhHov.js";import{D as n}from"./Divider-D6K3XGC3.js";import"./index-BBkUAzwr.js";/* empty css              */const v={title:"Exemplos/Divider",component:n,parameters:{layout:"centered"},argTypes:{orientation:{control:!1},size:{control:!1},dashed:{control:!1}}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",gap:"1rem"},children:[e.jsx("h1",{children:"Conteúdo 1"}),e.jsx(n,{}),e.jsx("h3",{children:"Conteúdo 2"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1.6rem"},children:[e.jsx("h3",{children:"Conteúdo 1"}),e.jsx(n,{orientation:"vertical"}),e.jsx("h3",{children:"Conteúdo 2"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem"},children:[e.jsx("p",{style:{marginTop:"1rem"},children:"Conteúdo 1"}),e.jsx(n,{orientation:"vertical"}),e.jsx("p",{style:{marginTop:"1rem"},children:"Conteúdo 2"})]}),e.jsx(n,{size:"lg",dashed:!0}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx("h1",{children:"Conteúdo 3"})})]})};var s,i,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem"
  }}>\r
      <h1>Conteúdo 1</h1>\r
\r
      <Divider />\r
\r
      <h3>Conteúdo 2</h3>\r
    </div>
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1.6rem"
  }}>\r
      <h3>Conteúdo 1</h3>\r
      <Divider orientation="vertical" />\r
      <h3>Conteúdo 2</h3>\r
    </div>
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
  }}>\r
      <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem"
    }}>\r
        <p style={{
        marginTop: "1rem"
      }}>Conteúdo 1</p>\r
        <Divider orientation="vertical" />\r
        <p style={{
        marginTop: "1rem"
      }}>Conteúdo 2</p>\r
      </div>\r
      <Divider size="lg" dashed />\r
      <div style={{
      textAlign: "center"
    }}>\r
        <h1>Conteúdo 3</h1>\r
      </div>\r
    </div>
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const f=["Horizontal","Vertical","Compounded"];export{o as Compounded,r as Horizontal,t as Vertical,f as __namedExportsOrder,v as default};
