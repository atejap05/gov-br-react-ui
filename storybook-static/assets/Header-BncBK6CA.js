import{j as e,c as m}from"./index-DYpDhHov.js";/* empty css              */import{A as j}from"./Avatar-x5D-BOIi.js";import{r as x}from"./index-BBkUAzwr.js";import{j as N,t as q}from"./index-QGNrqnCn.js";import{B as p}from"./Button-BjUuDhLH.js";const b=m("persona row"),d=({src:a,name:s,description:r,className:t})=>{const i=b({className:t});return e.jsxs("div",{className:i,children:[e.jsx(j,{className:"mr-2 ml-3",size:"sm",src:a,alt:s}),e.jsxs("div",{className:"persona__info",children:[e.jsx("div",{className:"text-semi-bold",children:s}),r&&e.jsx("div",{className:"text-weight-light text-down-01",children:r})]})]})};d.displayName="Persona";d.__docgenInfo={description:"",methods:[],displayName:"Persona",props:{className:{required:!1,tsType:{name:"string"},description:""},src:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""}}};const o=({title:a,options:s})=>{const[r,t]=x.useState({show:!1,active:!1});return e.jsxs("div",{className:r.show?"header-links dropdown show":"header-links dropdown",children:[e.jsx(p,{className:"dropdown-button",variant:"tertiary",circle:!0,active:r.active,size:"sm","data-taggle":"dropdown","aria-label":"Abrir Acesso Rápido",icon:N,onClick:()=>{t({show:!r.show,active:!r.active})}}),e.jsx(c,{title:a,options:s})]})};o.displayName="HeaderLinks";const c=({title:a,options:s})=>e.jsxs("div",{className:"br-list dropdown-list",children:[e.jsx("div",{className:"header",children:e.jsx("div",{className:"title",children:a})}),s.map(r=>e.jsx("a",{className:"br-item py-1 px-2",href:r.url,children:r.label},r.label))]});c.displayName="ToolsList";o.__docgenInfo={description:"",methods:[],displayName:"HeaderLinks",props:{title:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  url: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}}]}}],raw:`{\r
  label: string;\r
  url: string;\r
}[]`},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"ToolsList",props:{title:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  url: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}}]}}],raw:`{\r
  label: string;\r
  url: string;\r
}[]`},description:""}}};const u=({logoSrc:a,href:s,assinatura:r})=>e.jsxs("div",{className:"header-logo",children:[e.jsx("a",{target:"_blank",href:s,children:e.jsx("img",{src:a,alt:"logo"})}),e.jsx("span",{className:"br-divider vertical"}),e.jsx("div",{className:"header-sign",children:r})]});u.displayName="HeaderLogo";u.__docgenInfo={description:"",methods:[],displayName:"HeaderLogo",props:{logoSrc:{required:!0,tsType:{name:"string"},description:""},assinatura:{required:!0,tsType:{name:"string"},description:""},href:{required:!1,tsType:{name:"string"},description:""}}};const k=m("br-header",{variants:{size:{sm:"small",md:"medium",lg:"large"},compact:{true:"compact",false:""}}}),g=({size:a="md",title:s,subtitle:r,menu:t,persona:i,headerLogo:n,headerLinks:l,compact:v=!1,sticky:y,className:h})=>{const f=k({size:a,compact:v,className:h});return e.jsx("header",{className:f,"data-sticky":y?"data-sticky":null,children:e.jsxs("div",{className:"container-lg",children:[e.jsxs("div",{className:"header-top",children:[n&&e.jsx(u,{logoSrc:n.logoSrc,assinatura:n.assinatura,href:n.href}),e.jsxs("div",{className:"header-actions",children:[l&&e.jsx(o,{title:l.title,options:l.options}),e.jsx("div",{className:"header-login",children:e.jsx("div",{className:"header-avatar",children:i&&e.jsx(d,{src:i.src,name:i.name,description:i.description})})})]})]}),e.jsx("div",{className:"header-bottom",children:e.jsxs("div",{className:"header-menu",children:[t&&e.jsx("div",{className:"header-menu-trigger",children:e.jsx(p,{size:"sm",circle:!0,"aria-label":"Menu","data-toggle":"menu","data-target":"#main-navigation",id:"menu-sticky",variant:"tertiary",icon:q,onClick:t.onClick})}),e.jsxs("div",{className:"header-info",children:[e.jsx("div",{className:"header-title",children:s}),e.jsx("div",{className:"header-subtitle",children:r})]})]})})]})})};g.displayName="Header";g.__docgenInfo={description:"",methods:[],displayName:"Header",props:{className:{required:!1,tsType:{name:"string"},description:""},headerLogo:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  logoSrc: string;\r
  assinatura: string;\r
  href?: string;\r
}`,signature:{properties:[{key:"logoSrc",value:{name:"string",required:!0}},{key:"assinatura",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]}},description:""},menu:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;\r
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement, MouseEvent>",elements:[{name:"HTMLButtonElement"},{name:"MouseEvent"}]},name:"e"}],return:{name:"void"}},required:!0}}]}},description:""},persona:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  src: string;\r
  name: string;\r
  description?: string;\r
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1}}]}},description:""},headerLinks:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  title: string;\r
  options: {\r
    label: string;\r
    url: string;\r
  }[];\r
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  url: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}}]}}],raw:`{\r
  label: string;\r
  url: string;\r
}[]`,required:!0}}]}},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},sticky:{required:!1,tsType:{name:"boolean"},description:""},compact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}}}};export{g as H};
