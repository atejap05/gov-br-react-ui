import{r as ue}from"./index-CsdIBAqE.js";var te={exports:{}},T={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe=ue,fe=Symbol.for("react.element"),be=Symbol.for("react.fragment"),ge=Object.prototype.hasOwnProperty,me=pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,he={key:!0,ref:!0,__self:!0,__source:!0};function oe(e,r,t){var o,i={},n=null,s=null;t!==void 0&&(n=""+t),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(s=r.ref);for(o in r)ge.call(r,o)&&!he.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)i[o]===void 0&&(i[o]=r[o]);return{$$typeof:fe,type:e,key:n,ref:s,props:i,_owner:me.current}}T.Fragment=be;T.jsx=oe;T.jsxs=oe;te.exports=T;var De=te.exports;function ne(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=ne(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function ye(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=ne(e))&&(o&&(o+=" "),o+=r);return o}const Q=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,D=ye,er=(e,r)=>t=>{var o;if((r==null?void 0:r.variants)==null)return D(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:i,defaultVariants:n}=r,s=Object.keys(i).map(c=>{const d=t==null?void 0:t[c],b=n==null?void 0:n[c];if(d===null)return null;const h=Q(d)||Q(b);return i[c][h]}),a=t&&Object.entries(t).reduce((c,d)=>{let[b,h]=d;return h===void 0||(c[b]=h),c},{}),f=r==null||(o=r.compoundVariants)===null||o===void 0?void 0:o.reduce((c,d)=>{let{class:b,className:h,...y}=d;return Object.entries(y).every(w=>{let[g,m]=w;return Array.isArray(m)?m.includes({...n,...a}[g]):{...n,...a}[g]===m})?[...c,b,h]:c},[]);return D(e,s,f,t==null?void 0:t.class,t==null?void 0:t.className)};function se(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(r=0;r<i;r++)e[r]&&(t=se(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function xe(){for(var e,r,t=0,o="",i=arguments.length;t<i;t++)(e=arguments[t])&&(r=se(e))&&(o&&(o+=" "),o+=r);return o}const U="-";function ve(e){const r=ke(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function i(s){const a=s.split(U);return a[0]===""&&a.length!==1&&a.shift(),ie(a,r)||we(s)}function n(s,a){const f=t[s]||[];return a&&o[s]?[...f,...o[s]]:f}return{getClassGroupId:i,getConflictingClassGroupIds:n}}function ie(e,r){var s;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),i=o?ie(e.slice(1),o):void 0;if(i)return i;if(r.validators.length===0)return;const n=e.join(U);return(s=r.validators.find(({validator:a})=>a(n)))==null?void 0:s.classGroupId}const ee=/^\[(.+)\]$/;function we(e){if(ee.test(e)){const r=ee.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function ke(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return ze(Object.entries(e.classGroups),t).forEach(([n,s])=>{$(s,o,n,r)}),o}function $(e,r,t,o){e.forEach(i=>{if(typeof i=="string"){const n=i===""?r:re(r,i);n.classGroupId=t;return}if(typeof i=="function"){if(Ce(i)){$(i(o),r,t,o);return}r.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([n,s])=>{$(s,re(r,n),t,o)})})}function re(e,r){let t=e;return r.split(U).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function Ce(e){return e.isThemeGetter}function ze(e,r){return r?e.map(([t,o])=>{const i=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,a])=>[r+s,a])):n);return[t,i]}):e}function Se(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function i(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return i(n,s),s},set(n,s){t.has(n)?t.set(n,s):i(n,s)}}}const le="!";function Ae(e){const r=e.separator,t=r.length===1,o=r[0],i=r.length;return function(s){const a=[];let f=0,c=0,d;for(let g=0;g<s.length;g++){let m=s[g];if(f===0){if(m===o&&(t||s.slice(g,g+i)===r)){a.push(s.slice(c,g)),c=g+i;continue}if(m==="/"){d=g;continue}}m==="["?f++:m==="]"&&f--}const b=a.length===0?s:s.substring(c),h=b.startsWith(le),y=h?b.substring(1):b,w=d&&d>c?d-c:void 0;return{modifiers:a,hasImportantModifier:h,baseClassName:y,maybePostfixModifierPosition:w}}}function Me(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function Re(e){return{cache:Se(e.cacheSize),splitModifiers:Ae(e),...ve(e)}}const je=/\s+/;function Pe(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:i}=r,n=new Set;return e.trim().split(je).map(s=>{const{modifiers:a,hasImportantModifier:f,baseClassName:c,maybePostfixModifierPosition:d}=t(s);let b=o(d?c.substring(0,d):c),h=!!d;if(!b){if(!d)return{isTailwindClass:!1,originalClassName:s};if(b=o(c),!b)return{isTailwindClass:!1,originalClassName:s};h=!1}const y=Me(a).join(":");return{isTailwindClass:!0,modifierId:f?y+le:y,classGroupId:b,originalClassName:s,hasPostfixModifier:h}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:f,hasPostfixModifier:c}=s,d=a+f;return n.has(d)?!1:(n.add(d),i(f,c).forEach(b=>n.add(a+b)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Ee(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=ae(r))&&(o&&(o+=" "),o+=t);return o}function ae(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=ae(e[o]))&&(t&&(t+=" "),t+=r);return t}function Ie(e,...r){let t,o,i,n=s;function s(f){const c=r.reduce((d,b)=>b(d),e());return t=Re(c),o=t.cache.get,i=t.cache.set,n=a,a(f)}function a(f){const c=o(f);if(c)return c;const d=Pe(f,t);return i(f,d),d}return function(){return n(Ee.apply(null,arguments))}}function u(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const ce=/^\[(?:([a-z-]+):)?(.+)\]$/i,_e=/^\d+\/\d+$/,Ge=new Set(["px","full","screen"]),Te=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Oe=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ne=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Le=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ve=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function v(e){return S(e)||Ge.has(e)||_e.test(e)}function C(e){return A(e,"length",Ke)}function S(e){return!!e&&!Number.isNaN(Number(e))}function G(e){return A(e,"number",S)}function j(e){return!!e&&Number.isInteger(Number(e))}function We(e){return e.endsWith("%")&&S(e.slice(0,-1))}function l(e){return ce.test(e)}function z(e){return Te.test(e)}const $e=new Set(["length","size","percentage"]);function Ue(e){return A(e,$e,de)}function Be(e){return A(e,"position",de)}const Fe=new Set(["image","url"]);function qe(e){return A(e,Fe,Ye)}function Je(e){return A(e,"",Xe)}function P(){return!0}function A(e,r,t){const o=ce.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Ke(e){return Oe.test(e)&&!Ne.test(e)}function de(){return!1}function Xe(e){return Le.test(e)}function Ye(e){return Ve.test(e)}function Ze(){const e=u("colors"),r=u("spacing"),t=u("blur"),o=u("brightness"),i=u("borderColor"),n=u("borderRadius"),s=u("borderSpacing"),a=u("borderWidth"),f=u("contrast"),c=u("grayscale"),d=u("hueRotate"),b=u("invert"),h=u("gap"),y=u("gradientColorStops"),w=u("gradientColorStopPositions"),g=u("inset"),m=u("margin"),k=u("opacity"),x=u("padding"),B=u("saturate"),O=u("scale"),F=u("sepia"),q=u("skew"),J=u("space"),K=u("translate"),N=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto",l,r],p=()=>[l,r],X=()=>["",v,C],E=()=>["auto",S,l],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],I=()=>["solid","dashed","dotted","double","none"],Z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],W=()=>["start","end","center","between","around","evenly","stretch"],M=()=>["","0",l],H=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>[S,G],_=()=>[S,l];return{cacheSize:500,separator:":",theme:{colors:[P],spacing:[v,C],blur:["none","",z,l],brightness:R(),borderColor:[e],borderRadius:["none","","full",z,l],borderSpacing:p(),borderWidth:X(),contrast:R(),grayscale:M(),hueRotate:_(),invert:M(),gap:p(),gradientColorStops:[e],gradientColorStopPositions:[We,C],inset:V(),margin:V(),opacity:R(),padding:p(),saturate:R(),scale:R(),sepia:M(),skew:_(),space:p(),translate:p()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":H()}],"break-before":[{"break-before":H()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),l]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",j,l]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:M()}],shrink:[{shrink:M()}],order:[{order:["first","last","none",j,l]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",j,l]},l]}],"col-start":[{"col-start":E()}],"col-end":[{"col-end":E()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[j,l]},l]}],"row-start":[{"row-start":E()}],"row-end":[{"row-end":E()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...W()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...W(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...W(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[J]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[J]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,r]}],"min-w":[{"min-w":[l,r,"min","max","fit"]}],"max-w":[{"max-w":[l,r,"none","full","min","max","fit","prose",{screen:[z]},z]}],h:[{h:[l,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,r,"auto","min","max","fit"]}],"font-size":[{text:["base",z,C]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",G]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",S,G]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",v,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...I(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",v,C]}],"underline-offset":[{"underline-offset":["auto",v,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),Be]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ue]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},qe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[...I(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:I()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...I()]}],"outline-offset":[{"outline-offset":[v,l]}],"outline-w":[{outline:[v,C]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[v,C]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",z,Je]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":Z()}],"bg-blend":[{"bg-blend":Z()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[f]}],"drop-shadow":[{"drop-shadow":["","none",z,l]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[b]}],saturate:[{saturate:[B]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[f]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[B]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:_()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:_()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[j,l]}],"translate-x":[{"translate-x":[K]}],"translate-y":[{"translate-y":[K]}],"skew-x":[{"skew-x":[q]}],"skew-y":[{"skew-y":[q]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[v,C,G]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const He=Ie(Ze);function rr(...e){return He(xe(e))}export{er as a,rr as c,De as j};
