import{j as e,c as m}from"./index-DYpDhHov.js";import{R as v}from"./index-BBkUAzwr.js";/* empty css              */import{A as g}from"./Alert-QHHySjHG.js";const f=m("br-radio",{variants:{small:{true:"small",false:""},disabled:{true:"disabled",false:""},valid:{true:"valid",false:"invalid"}}}),p=v.forwardRef(({id:a,name:n,value:r,small:i=!1,disabled:l=!1,valid:u,label:t,className:o,...s},d)=>{const c=f({small:i,disabled:l,valid:u,className:o});return e.jsxs("div",{className:c,children:[e.jsx("input",{ref:d,id:a,name:n,value:r,type:"radio",...s}),e.jsx("label",{htmlFor:a,children:t})]})});p.__docgenInfo={description:"",methods:[],displayName:"RadioItem",props:{id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},small:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:""}}};const b=m("",{variants:{orientation:{horizontal:"d-inline-block mr-5 mb-3 text-nowrap",vertical:"mb-3"}}}),y=({title:a,subtitle:n,feedback:r,orientation:i="vertical",className:l,options:u,onSelect:t})=>{const o=b({orientation:i});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"p-2"+l,children:[a&&e.jsx("p",{className:"label mb-0",children:a}),n&&e.jsx("p",{className:"help",children:n}),u.map(s=>e.jsx("div",{className:o,children:e.jsx(p,{...s,onChange:d=>{t&&t(d.target.value)}})},s.id))]}),r&&e.jsx(g,{status:r.status,text:r.text})]})};y.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{value:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},feedback:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  status: "danger" | "success" | "warning" | "info";\r
  text: string;\r
  className?: string;\r
}`,signature:{properties:[{key:"status",value:{name:"union",raw:'"danger" | "success" | "warning" | "info"',elements:[{name:"literal",value:'"danger"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}],required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}}]}},description:""},className:{required:!1,tsType:{name:"string"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`React.InputHTMLAttributes<HTMLInputElement> & {\r
  id: string;\r
  name: string;\r
  value: string;\r
  label: string;\r
  small?: boolean;\r
  disabled?: boolean;\r
  valid?: boolean;\r
}`,elements:[{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"signature",type:"object",raw:`{\r
  id: string;\r
  name: string;\r
  value: string;\r
  label: string;\r
  small?: boolean;\r
  disabled?: boolean;\r
  valid?: boolean;\r
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"small",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"valid",value:{name:"boolean",required:!1}}]}}]}],raw:"RadioItemProps[]"},description:""}}};export{y as R,p as a};
