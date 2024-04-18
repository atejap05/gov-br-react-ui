import{P as b}from"./index-MS7LKRHD.js";import{R as ja}from"./index-CsdIBAqE.js";function ca(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,e)}return n}function u(t){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?ca(Object(n),!0).forEach(function(e){O(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ca(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function xt(t){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},xt(t)}function pn(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function ua(t,a){for(var n=0;n<a.length;n++){var e=a[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function gn(t,a,n){return a&&ua(t.prototype,a),n&&ua(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function Qt(t,a){return yn(t)||wn(t,a)||Fa(t,a)||An()}function ft(t){return hn(t)||kn(t)||Fa(t)||xn()}function hn(t){if(Array.isArray(t))return jt(t)}function yn(t){if(Array.isArray(t))return t}function kn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wn(t,a){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var e=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(e.push(o.value),!(a&&e.length===a));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return e}}function Fa(t,a){if(t){if(typeof t=="string")return jt(t,a);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jt(t,a)}}function jt(t,a){(a==null||a>t.length)&&(a=t.length);for(var n=0,e=new Array(a);n<a;n++)e[n]=t[n];return e}function xn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function An(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ma=function(){},Jt={},Da={},Ya=null,$a={mark:ma,measure:ma};try{typeof window<"u"&&(Jt=window),typeof document<"u"&&(Da=document),typeof MutationObserver<"u"&&(Ya=MutationObserver),typeof performance<"u"&&($a=performance)}catch{}var On=Jt.navigator||{},va=On.userAgent,da=va===void 0?"":va,D=Jt,h=Da,ba=Ya,ut=$a;D.document;var z=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Ua=~da.indexOf("MSIE")||~da.indexOf("Trident/"),mt,vt,dt,bt,pt,_="___FONT_AWESOME___",Ft=16,Ha="fa",Wa="svg-inline--fa",X="data-fa-i2svg",Dt="data-fa-pseudo-element",Sn="data-fa-pseudo-element-pending",Zt="data-prefix",ta="data-icon",pa="fontawesome-i2svg",Pn="async",Cn=["HTML","HEAD","STYLE","SCRIPT"],Va=function(){try{return!0}catch{return!1}}(),g="classic",y="sharp",aa=[g,y];function lt(t){return new Proxy(t,{get:function(n,e){return e in n?n[e]:n[g]}})}var et=lt((mt={},O(mt,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),O(mt,y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),mt)),rt=lt((vt={},O(vt,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(vt,y,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),vt)),it=lt((dt={},O(dt,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(dt,y,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),dt)),En=lt((bt={},O(bt,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(bt,y,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),bt)),In=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Xa="fa-layers-text",Nn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Tn=lt((pt={},O(pt,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(pt,y,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),pt)),Ga=[1,2,3,4,5,6,7,8,9,10],_n=Ga.concat([11,12,13,14,15,16,17,18,19,20]),Mn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ot=new Set;Object.keys(rt[g]).map(ot.add.bind(ot));Object.keys(rt[y]).map(ot.add.bind(ot));var Ln=[].concat(aa,ft(ot),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W.GROUP,W.SWAP_OPACITY,W.PRIMARY,W.SECONDARY]).concat(Ga.map(function(t){return"".concat(t,"x")})).concat(_n.map(function(t){return"w-".concat(t)})),at=D.FontAwesomeConfig||{};function zn(t){var a=h.querySelector("script["+t+"]");if(a)return a.getAttribute(t)}function Rn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(h&&typeof h.querySelector=="function"){var jn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];jn.forEach(function(t){var a=Qt(t,2),n=a[0],e=a[1],r=Rn(zn(n));r!=null&&(at[e]=r)})}var Ba={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ha,replacementClass:Wa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};at.familyPrefix&&(at.cssPrefix=at.familyPrefix);var J=u(u({},Ba),at);J.autoReplaceSvg||(J.observeMutations=!1);var v={};Object.keys(Ba).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(n){J[t]=n,nt.forEach(function(e){return e(v)})},get:function(){return J[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(a){J.cssPrefix=a,nt.forEach(function(n){return n(v)})},get:function(){return J.cssPrefix}});D.FontAwesomeConfig=v;var nt=[];function Fn(t){return nt.push(t),function(){nt.splice(nt.indexOf(t),1)}}var j=Ft,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dn(t){if(!(!t||!z)){var a=h.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=t;for(var n=h.head.childNodes,e=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return h.head.insertBefore(a,e),t}}var Yn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function st(){for(var t=12,a="";t-- >0;)a+=Yn[Math.random()*62|0];return a}function Z(t){for(var a=[],n=(t||[]).length>>>0;n--;)a[n]=t[n];return a}function na(t){return t.classList?Z(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Ka(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $n(t){return Object.keys(t||{}).reduce(function(a,n){return a+"".concat(n,'="').concat(Ka(t[n]),'" ')},"").trim()}function Pt(t){return Object.keys(t||{}).reduce(function(a,n){return a+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ea(t){return t.size!==T.size||t.x!==T.x||t.y!==T.y||t.rotate!==T.rotate||t.flipX||t.flipY}function Un(t){var a=t.transform,n=t.containerWidth,e=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Hn(t){var a=t.transform,n=t.width,e=n===void 0?Ft:n,r=t.height,i=r===void 0?Ft:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Ua?f+="translate(".concat(a.x/j-e/2,"em, ").concat(a.y/j-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(a.x/j,"em), calc(-50% + ").concat(a.y/j,"em)) "):f+="translate(".concat(a.x/j,"em, ").concat(a.y/j,"em) "),f+="scale(".concat(a.size/j*(a.flipX?-1:1),", ").concat(a.size/j*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var Wn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function qa(){var t=Ha,a=Wa,n=v.cssPrefix,e=v.replacementClass,r=Wn;if(n!==t||e!==a){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(e))}return r}var ga=!1;function _t(){v.autoAddCss&&!ga&&(Dn(qa()),ga=!0)}var Vn={mixout:function(){return{dom:{css:qa,insertCss:_t}}},hooks:function(){return{beforeDOMElementCreation:function(){_t()},beforeI2svg:function(){_t()}}}},M=D||{};M[_]||(M[_]={});M[_].styles||(M[_].styles={});M[_].hooks||(M[_].hooks={});M[_].shims||(M[_].shims=[]);var N=M[_],Qa=[],Xn=function t(){h.removeEventListener("DOMContentLoaded",t),At=1,Qa.map(function(a){return a()})},At=!1;z&&(At=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),At||h.addEventListener("DOMContentLoaded",Xn));function Gn(t){z&&(At?setTimeout(t,0):Qa.push(t))}function ct(t){var a=t.tag,n=t.attributes,e=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Ka(t):"<".concat(a," ").concat($n(e),">").concat(i.map(ct).join(""),"</").concat(a,">")}function ha(t,a,n){if(t&&t[a]&&t[a][n])return{prefix:a,iconName:n,icon:t[a][n]}}var Bn=function(a,n){return function(e,r,i,o){return a.call(n,e,r,i,o)}},Mt=function(a,n,e,r){var i=Object.keys(a),o=i.length,s=r!==void 0?Bn(n,r):n,f,c,l;for(e===void 0?(f=1,l=a[i[0]]):(f=0,l=e);f<o;f++)c=i[f],l=s(l,a[c],c,a);return l};function Kn(t){for(var a=[],n=0,e=t.length;n<e;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<e){var i=t.charCodeAt(n++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),n--)}else a.push(r)}return a}function Yt(t){var a=Kn(t);return a.length===1?a[0].toString(16):null}function qn(t,a){var n=t.length,e=t.charCodeAt(a),r;return e>=55296&&e<=56319&&n>a+1&&(r=t.charCodeAt(a+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function ya(t){return Object.keys(t).reduce(function(a,n){var e=t[n],r=!!e.icon;return r?a[e.iconName]=e.icon:a[n]=e,a},{})}function $t(t,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=n.skipHooks,r=e===void 0?!1:e,i=ya(a);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(t,ya(a)):N.styles[t]=u(u({},N.styles[t]||{}),i),t==="fas"&&$t("fa",a)}var gt,ht,yt,B=N.styles,Qn=N.shims,Jn=(gt={},O(gt,g,Object.values(it[g])),O(gt,y,Object.values(it[y])),gt),ra=null,Ja={},Za={},tn={},an={},nn={},Zn=(ht={},O(ht,g,Object.keys(et[g])),O(ht,y,Object.keys(et[y])),ht);function te(t){return~Ln.indexOf(t)}function ae(t,a){var n=a.split("-"),e=n[0],r=n.slice(1).join("-");return e===t&&r!==""&&!te(r)?r:null}var en=function(){var a=function(i){return Mt(B,function(o,s,f){return o[f]=Mt(s,i,{}),o},{})};Ja=a(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Za=a(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),nn=a(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in B||v.autoFetchSvg,e=Mt(Qn,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});tn=e.names,an=e.unicodes,ra=Ct(v.styleDefault,{family:v.familyDefault})};Fn(function(t){ra=Ct(t.styleDefault,{family:v.familyDefault})});en();function ia(t,a){return(Ja[t]||{})[a]}function ne(t,a){return(Za[t]||{})[a]}function V(t,a){return(nn[t]||{})[a]}function rn(t){return tn[t]||{prefix:null,iconName:null}}function ee(t){var a=an[t],n=ia("fas",t);return a||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return ra}var oa=function(){return{prefix:null,iconName:null,rest:[]}};function Ct(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.family,e=n===void 0?g:n,r=et[e][t],i=rt[e][t]||rt[e][r],o=t in N.styles?t:null;return i||o||null}var ka=(yt={},O(yt,g,Object.keys(it[g])),O(yt,y,Object.keys(it[y])),yt);function Et(t){var a,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,r=e===void 0?!1:e,i=(a={},O(a,g,"".concat(v.cssPrefix,"-").concat(g)),O(a,y,"".concat(v.cssPrefix,"-").concat(y)),a),o=null,s=g;(t.includes(i[g])||t.some(function(c){return ka[g].includes(c)}))&&(s=g),(t.includes(i[y])||t.some(function(c){return ka[y].includes(c)}))&&(s=y);var f=t.reduce(function(c,l){var m=ae(v.cssPrefix,l);if(B[l]?(l=Jn[s].includes(l)?En[s][l]:l,o=l,c.prefix=l):Zn[s].indexOf(l)>-1?(o=l,c.prefix=Ct(l,{family:s})):m?c.iconName=m:l!==v.replacementClass&&l!==i[g]&&l!==i[y]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var d=o==="fa"?rn(c.iconName):{},p=V(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||p||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!B.far&&B.fas&&!v.autoFetchSvg&&(c.prefix="fas")}return c},oa());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===y&&(B.fass||v.autoFetchSvg)&&(f.prefix="fass",f.iconName=V(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=Y()||"fas"),f}var re=function(){function t(){pn(this,t),this.definitions={}}return gn(t,[{key:"add",value:function(){for(var n=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),$t(s,o[s]);var f=it[g][s];f&&$t(f,o[s]),en()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][f]=c}),n}}]),t}(),wa=[],K={},Q={},ie=Object.keys(Q);function oe(t,a){var n=a.mixoutsTo;return wa=t,K={},Object.keys(Q).forEach(function(e){ie.indexOf(e)===-1&&delete Q[e]}),wa.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),xt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){K[o]||(K[o]=[]),K[o].push(i[o])})}e.provides&&e.provides(Q)}),n}function Ut(t,a){for(var n=arguments.length,e=new Array(n>2?n-2:0),r=2;r<n;r++)e[r-2]=arguments[r];var i=K[t]||[];return i.forEach(function(o){a=o.apply(null,[a].concat(e))}),a}function G(t){for(var a=arguments.length,n=new Array(a>1?a-1:0),e=1;e<a;e++)n[e-1]=arguments[e];var r=K[t]||[];r.forEach(function(i){i.apply(null,n)})}function L(){var t=arguments[0],a=Array.prototype.slice.call(arguments,1);return Q[t]?Q[t].apply(null,a):void 0}function Ht(t){t.prefix==="fa"&&(t.prefix="fas");var a=t.iconName,n=t.prefix||Y();if(a)return a=V(n,a)||a,ha(on.definitions,n,a)||ha(N.styles,n,a)}var on=new re,se=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,G("noAuto")},fe={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(G("beforeI2svg",a),L("pseudoElements2svg",a),L("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Gn(function(){ce({autoReplaceSvgRoot:n}),G("watch",a)})}},le={icon:function(a){if(a===null)return null;if(xt(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:V(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var n=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=Ct(a[0]);return{prefix:e,iconName:V(e,n)||n}}if(typeof a=="string"&&(a.indexOf("".concat(v.cssPrefix,"-"))>-1||a.match(In))){var r=Et(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||Y(),iconName:V(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=Y();return{prefix:i,iconName:V(i,a)||a}}}},I={noAuto:se,config:v,dom:fe,parse:le,library:on,findIconDefinition:Ht,toHtml:ct},ce=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.autoReplaceSvgRoot,e=n===void 0?h:n;(Object.keys(N.styles).length>0||v.autoFetchSvg)&&z&&v.autoReplaceSvg&&I.dom.i2svg({node:e})};function It(t,a){return Object.defineProperty(t,"abstract",{get:a}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(e){return ct(e)})}}),Object.defineProperty(t,"node",{get:function(){if(z){var e=h.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function ue(t){var a=t.children,n=t.main,e=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(ea(o)&&n.found&&!e.found){var s=n.width,f=n.height,c={x:s/f/2,y:.5};r.style=Pt(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function me(t){var a=t.prefix,n=t.iconName,e=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(a,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:e}]}]}function sa(t){var a=t.icons,n=a.main,e=a.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,m=t.extra,d=t.watchable,p=d===void 0?!1:d,x=e.found?e:n,P=x.width,k=x.height,C=r==="fak",w=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(R){return m.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(m.classes).join(" "),A={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(k)})},E=C&&!~m.classes.indexOf("fa-fw")?{width:"".concat(P/k*16*.0625,"em")}:{};p&&(A.attributes[X]=""),f&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||st())},children:[f]}),delete A.attributes.title);var S=u(u({},A),{},{prefix:r,iconName:i,main:n,mask:e,maskId:c,transform:o,symbol:s,styles:u(u({},E),m.styles)}),U=e.found&&n.found?L("generateAbstractMask",S)||{children:[],attributes:{}}:L("generateAbstractIcon",S)||{children:[],attributes:{}},H=U.children,Tt=U.attributes;return S.children=H,S.attributes=Tt,s?me(S):ue(S)}function xa(t){var a=t.content,n=t.width,e=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[X]="");var l=u({},o.styles);ea(r)&&(l.transform=Hn({transform:r,startCentered:!0,width:n,height:e}),l["-webkit-transform"]=l.transform);var m=Pt(l);m.length>0&&(c.style=m);var d=[];return d.push({tag:"span",attributes:c,children:[a]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function ve(t){var a=t.content,n=t.title,e=t.extra,r=u(u(u({},e.attributes),n?{title:n}:{}),{},{class:e.classes.join(" ")}),i=Pt(e.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[a]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Lt=N.styles;function Wt(t){var a=t[0],n=t[1],e=t.slice(4),r=Qt(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(W.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(W.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(W.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:n,icon:o}}var de={found:!1,width:512,height:512};function be(t,a){!Va&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(a,'" is missing.'))}function Vt(t,a){var n=a;return a==="fa"&&v.styleDefault!==null&&(a=Y()),new Promise(function(e,r){if(L("missingIconAbstract"),n==="fa"){var i=rn(t)||{};t=i.iconName||t,a=i.prefix||a}if(t&&a&&Lt[a]&&Lt[a][t]){var o=Lt[a][t];return e(Wt(o))}be(t,a),e(u(u({},de),{},{icon:v.showMissingIcons&&t?L("missingIconAbstract")||{}:{}}))})}var Aa=function(){},Xt=v.measurePerformance&&ut&&ut.mark&&ut.measure?ut:{mark:Aa,measure:Aa},tt='FA "6.5.2"',pe=function(a){return Xt.mark("".concat(tt," ").concat(a," begins")),function(){return sn(a)}},sn=function(a){Xt.mark("".concat(tt," ").concat(a," ends")),Xt.measure("".concat(tt," ").concat(a),"".concat(tt," ").concat(a," begins"),"".concat(tt," ").concat(a," ends"))},fa={begin:pe,end:sn},kt=function(){};function Oa(t){var a=t.getAttribute?t.getAttribute(X):null;return typeof a=="string"}function ge(t){var a=t.getAttribute?t.getAttribute(Zt):null,n=t.getAttribute?t.getAttribute(ta):null;return a&&n}function he(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function ye(){if(v.autoReplaceSvg===!0)return wt.replace;var t=wt[v.autoReplaceSvg];return t||wt.replace}function ke(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function we(t){return h.createElement(t)}function fn(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.ceFn,e=n===void 0?t.tag==="svg"?ke:we:n;if(typeof t=="string")return h.createTextNode(t);var r=e(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(fn(o,{ceFn:e}))}),r}function xe(t){var a=" ".concat(t.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var wt={replace:function(a){var n=a[0];if(n.parentNode)if(a[1].forEach(function(r){n.parentNode.insertBefore(fn(r),n)}),n.getAttribute(X)===null&&v.keepOriginalSource){var e=h.createComment(xe(n));n.parentNode.replaceChild(e,n)}else n.remove()},nest:function(a){var n=a[0],e=a[1];if(~na(n).indexOf(v.replacementClass))return wt.replace(a);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return ct(s)}).join(`
`);n.setAttribute(X,""),n.innerHTML=o}};function Sa(t){t()}function ln(t,a){var n=typeof a=="function"?a:kt;if(t.length===0)n();else{var e=Sa;v.mutateApproach===Pn&&(e=D.requestAnimationFrame||Sa),e(function(){var r=ye(),i=fa.begin("mutate");t.map(r),i(),n()})}}var la=!1;function cn(){la=!0}function Gt(){la=!1}var Ot=null;function Pa(t){if(ba&&v.observeMutations){var a=t.treeCallback,n=a===void 0?kt:a,e=t.nodeCallback,r=e===void 0?kt:e,i=t.pseudoElementsCallback,o=i===void 0?kt:i,s=t.observeMutationsRoot,f=s===void 0?h:s;Ot=new ba(function(c){if(!la){var l=Y();Z(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Oa(m.addedNodes[0])&&(v.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Oa(m.target)&&~Mn.indexOf(m.attributeName))if(m.attributeName==="class"&&ge(m.target)){var d=Et(na(m.target)),p=d.prefix,x=d.iconName;m.target.setAttribute(Zt,p||l),x&&m.target.setAttribute(ta,x)}else he(m.target)&&r(m.target)})}}),z&&Ot.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ae(){Ot&&Ot.disconnect()}function Oe(t){var a=t.getAttribute("style"),n=[];return a&&(n=a.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),n}function Se(t){var a=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),e=t.innerText!==void 0?t.innerText.trim():"",r=Et(na(t));return r.prefix||(r.prefix=Y()),a&&n&&(r.prefix=a,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=ne(r.prefix,t.innerText)||ia(r.prefix,Yt(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Pe(t){var a=Z(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),e=t.getAttribute("data-fa-title-id");return v.autoA11y&&(n?a["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(e||st()):(a["aria-hidden"]="true",a.focusable="false")),a}function Ce(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ca(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Se(t),e=n.iconName,r=n.prefix,i=n.rest,o=Pe(t),s=Ut("parseNodeAttributes",{},t),f=a.styleParser?Oe(t):[];return u({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ee=N.styles;function un(t){var a=v.autoReplaceSvg==="nest"?Ca(t,{styleParser:!1}):Ca(t);return~a.extra.classes.indexOf(Xa)?L("generateLayersText",t,a):L("generateSvgReplacementMutation",t,a)}var $=new Set;aa.map(function(t){$.add("fa-".concat(t))});Object.keys(et[g]).map($.add.bind($));Object.keys(et[y]).map($.add.bind($));$=ft($);function Ea(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var n=h.documentElement.classList,e=function(m){return n.add("".concat(pa,"-").concat(m))},r=function(m){return n.remove("".concat(pa,"-").concat(m))},i=v.autoFetchSvg?$:aa.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Ee));i.includes("fa")||i.push("fa");var o=[".".concat(Xa,":not([").concat(X,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(X,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Z(t.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=fa.begin("onTree"),c=s.reduce(function(l,m){try{var d=un(m);d&&l.push(d)}catch(p){Va||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(d){ln(d,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),f(),l()})}).catch(function(d){f(),m(d)})})}function Ie(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;un(t).then(function(n){n&&ln([n],a)})}function Ne(t){return function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:Ht(a||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Ht(r||{})),t(e,u(u({},n),{},{mask:r}))}}var Te=function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.transform,r=e===void 0?T:e,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,c=n.maskId,l=c===void 0?null:c,m=n.title,d=m===void 0?null:m,p=n.titleId,x=p===void 0?null:p,P=n.classes,k=P===void 0?[]:P,C=n.attributes,w=C===void 0?{}:C,A=n.styles,E=A===void 0?{}:A;if(a){var S=a.prefix,U=a.iconName,H=a.icon;return It(u({type:"icon"},a),function(){return G("beforeDOMElementCreation",{iconDefinition:a,params:n}),v.autoA11y&&(d?w["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(x||st()):(w["aria-hidden"]="true",w.focusable="false")),sa({icons:{main:Wt(H),mask:f?Wt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:U,transform:u(u({},T),r),symbol:o,title:d,maskId:l,titleId:x,extra:{attributes:w,styles:E,classes:k}})})}},_e={mixout:function(){return{icon:Ne(Te)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ea,n.nodeCallback=Ie,n}}},provides:function(a){a.i2svg=function(n){var e=n.node,r=e===void 0?h:e,i=n.callback,o=i===void 0?function(){}:i;return Ea(r,o)},a.generateSvgReplacementMutation=function(n,e){var r=e.iconName,i=e.title,o=e.titleId,s=e.prefix,f=e.transform,c=e.symbol,l=e.mask,m=e.maskId,d=e.extra;return new Promise(function(p,x){Promise.all([Vt(r,s),l.iconName?Vt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var k=Qt(P,2),C=k[0],w=k[1];p([n,sa({icons:{main:C,mask:w},prefix:s,iconName:r,transform:f,symbol:c,maskId:m,title:i,titleId:o,extra:d,watchable:!0})])}).catch(x)})},a.generateAbstractIcon=function(n){var e=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=Pt(s);f.length>0&&(r.style=f);var c;return ea(o)&&(c=L("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(c||i.icon),{children:e,attributes:r}}}},Me={mixout:function(){return{layer:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return It({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:n,params:e});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(ft(i)).join(" ")},children:o}]})}}}},Le={mixout:function(){return{counter:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,f=e.attributes,c=f===void 0?{}:f,l=e.styles,m=l===void 0?{}:l;return It({type:"counter",content:n},function(){return G("beforeDOMElementCreation",{content:n,params:e}),ve({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(ft(s))}})})}}}},ze={mixout:function(){return{text:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?T:r,o=e.title,s=o===void 0?null:o,f=e.classes,c=f===void 0?[]:f,l=e.attributes,m=l===void 0?{}:l,d=e.styles,p=d===void 0?{}:d;return It({type:"text",content:n},function(){return G("beforeDOMElementCreation",{content:n,params:e}),xa({content:n,transform:u(u({},T),i),title:s,extra:{attributes:m,styles:p,classes:["".concat(v.cssPrefix,"-layers-text")].concat(ft(c))}})})}}},provides:function(a){a.generateLayersText=function(n,e){var r=e.title,i=e.transform,o=e.extra,s=null,f=null;if(Ua){var c=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/c,f=l.height/c}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,xa({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Re=new RegExp('"',"ug"),Ia=[1105920,1112319];function je(t){var a=t.replace(Re,""),n=qn(a,0),e=n>=Ia[0]&&n<=Ia[1],r=a.length===2?a[0]===a[1]:!1;return{value:Yt(r?a[0]:a),isSecondary:e||r}}function Na(t,a){var n="".concat(Sn).concat(a.replace(":","-"));return new Promise(function(e,r){if(t.getAttribute(n)!==null)return e();var i=Z(t.children),o=i.filter(function(H){return H.getAttribute(Dt)===a})[0],s=D.getComputedStyle(t,a),f=s.getPropertyValue("font-family").match(Nn),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),e();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),d=~["Sharp"].indexOf(f[2])?y:g,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?rt[d][f[2].toLowerCase()]:Tn[d][c],x=je(m),P=x.value,k=x.isSecondary,C=f[0].startsWith("FontAwesome"),w=ia(p,P),A=w;if(C){var E=ee(P);E.iconName&&E.prefix&&(w=E.iconName,p=E.prefix)}if(w&&!k&&(!o||o.getAttribute(Zt)!==p||o.getAttribute(ta)!==A)){t.setAttribute(n,A),o&&t.removeChild(o);var S=Ce(),U=S.extra;U.attributes[Dt]=a,Vt(w,p).then(function(H){var Tt=sa(u(u({},S),{},{icons:{main:H,mask:oa()},prefix:p,iconName:A,extra:U,watchable:!0})),R=h.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?t.insertBefore(R,t.firstChild):t.appendChild(R),R.outerHTML=Tt.map(function(bn){return ct(bn)}).join(`
`),t.removeAttribute(n),e()}).catch(r)}else e()}else e()})}function Fe(t){return Promise.all([Na(t,"::before"),Na(t,"::after")])}function De(t){return t.parentNode!==document.head&&!~Cn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Dt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ta(t){if(z)return new Promise(function(a,n){var e=Z(t.querySelectorAll("*")).filter(De).map(Fe),r=fa.begin("searchPseudoElements");cn(),Promise.all(e).then(function(){r(),Gt(),a()}).catch(function(){r(),Gt(),n()})})}var Ye={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ta,n}}},provides:function(a){a.pseudoElements2svg=function(n){var e=n.node,r=e===void 0?h:e;v.searchPseudoElements&&Ta(r)}}},_a=!1,$e={mixout:function(){return{dom:{unwatch:function(){cn(),_a=!0}}}},hooks:function(){return{bootstrap:function(){Pa(Ut("mutationObserverCallbacks",{}))},noAuto:function(){Ae()},watch:function(n){var e=n.observeMutationsRoot;_a?Gt():Pa(Ut("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Ma=function(a){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},n)},Ue={mixout:function(){return{parse:{transform:function(n){return Ma(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-transform");return r&&(n.transform=Ma(r)),n}}},provides:function(a){a.generateAbstractTransformGrouping=function(n){var e=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(l)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:m,path:d};return{tag:"g",attributes:u({},p.outer),children:[{tag:"g",attributes:u({},p.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),p.path)}]}]}}}},zt={x:0,y:0,width:"100%",height:"100%"};function La(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||a)&&(t.attributes.fill="black"),t}function He(t){return t.tag==="g"?t.children:[t]}var We={hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-mask"),i=r?Et(r.split(" ").map(function(o){return o.trim()})):oa();return i.prefix||(i.prefix=Y()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides:function(a){a.generateAbstractMask=function(n){var e=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,c=i.width,l=i.icon,m=o.width,d=o.icon,p=Un({transform:f,containerWidth:m,iconWidth:c}),x={tag:"rect",attributes:u(u({},zt),{},{fill:"white"})},P=l.children?{children:l.children.map(La)}:{},k={tag:"g",attributes:u({},p.inner),children:[La(u({tag:l.tag,attributes:u(u({},l.attributes),p.path)},P))]},C={tag:"g",attributes:u({},p.outer),children:[k]},w="mask-".concat(s||st()),A="clip-".concat(s||st()),E={tag:"mask",attributes:u(u({},zt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,C]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:He(d)},E]};return e.push(S,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(w,")")},zt)}),{children:e,attributes:r}}}},Ve={provides:function(a){var n=!1;D.matchMedia&&(n=D.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Xe={hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Ge=[Vn,_e,Me,Le,ze,Ye,$e,Ue,We,Ve,Xe];oe(Ge,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var Bt=I.parse;I.findIconDefinition;I.toHtml;var Be=I.icon;I.layer;I.text;I.counter;function za(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,e)}return n}function F(t){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?za(Object(n),!0).forEach(function(e){q(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):za(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function St(t){"@babel/helpers - typeof";return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},St(t)}function q(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function Ke(t,a){if(t==null)return{};var n={},e=Object.keys(t),r,i;for(i=0;i<e.length;i++)r=e[i],!(a.indexOf(r)>=0)&&(n[r]=t[r]);return n}function qe(t,a){if(t==null)return{};var n=Ke(t,a),e,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],!(a.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}function Kt(t){return Qe(t)||Je(t)||Ze(t)||tr()}function Qe(t){if(Array.isArray(t))return qt(t)}function Je(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ze(t,a){if(t){if(typeof t=="string")return qt(t,a);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qt(t,a)}}function qt(t,a){(a==null||a>t.length)&&(a=t.length);for(var n=0,e=new Array(a);n<a;n++)e[n]=t[n];return e}function tr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ar(t){var a,n=t.beat,e=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,c=t.spinPulse,l=t.spinReverse,m=t.pulse,d=t.fixedWidth,p=t.inverse,x=t.border,P=t.listItem,k=t.flip,C=t.size,w=t.rotation,A=t.pull,E=(a={"fa-beat":n,"fa-fade":e,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":d,"fa-inverse":p,"fa-border":x,"fa-li":P,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},q(a,"fa-".concat(C),typeof C<"u"&&C!==null),q(a,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),q(a,"fa-pull-".concat(A),typeof A<"u"&&A!==null),q(a,"fa-swap-opacity",t.swapOpacity),a);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function nr(t){return t=t-0,t===t}function mn(t){return nr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(a,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var er=["style"];function rr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ir(t){return t.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,n){var e=n.indexOf(":"),r=mn(n.slice(0,e)),i=n.slice(e+1).trim();return r.startsWith("webkit")?a[rr(r)]=i:a[r]=i,a},{})}function vn(t,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var e=(a.children||[]).map(function(f){return vn(t,f)}),r=Object.keys(a.attributes||{}).reduce(function(f,c){var l=a.attributes[c];switch(c){case"class":f.attrs.className=l,delete a.attributes.class;break;case"style":f.attrs.style=ir(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=l:f.attrs[mn(c)]=l}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=qe(n,er);return r.attrs.style=F(F({},r.attrs.style),o),t.apply(void 0,[a.tag,F(F({},r.attrs),s)].concat(Kt(e)))}var dn=!1;try{dn=!0}catch{}function or(){if(!dn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ra(t){if(t&&St(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Bt.icon)return Bt.icon(t);if(t===null)return null;if(t&&St(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Rt(t,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?q({},t,a):{}}var Nt=ja.forwardRef(function(t,a){var n=t.icon,e=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,c=Ra(n),l=Rt("classes",[].concat(Kt(ar(t)),Kt(i.split(" ")))),m=Rt("transform",typeof t.transform=="string"?Bt.transform(t.transform):t.transform),d=Rt("mask",Ra(e)),p=Be(c,F(F(F(F({},l),m),d),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!p)return or("Could not find icon",c),null;var x=p.abstract,P={ref:a};return Object.keys(t).forEach(function(k){Nt.defaultProps.hasOwnProperty(k)||(P[k]=t[k])}),sr(x[0],P)});Nt.displayName="FontAwesomeIcon";Nt.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};Nt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var sr=vn.bind(null,ja.createElement),fr={prefix:"fas",iconName:"envelopes-bulk",icon:[640,512,["mail-bulk"],"f674","M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z"]},hr=fr,lr={prefix:"fas",iconName:"share-nodes",icon:[448,512,["share-alt"],"f1e0","M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"]},yr=lr,kr={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},wr={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},xr={prefix:"fas",iconName:"key",icon:[512,512,[128273],"f084","M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]},cr={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Ar=cr,Or={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},Sr={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},ur={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Pr=ur,mr={prefix:"fas",iconName:"ellipsis-vertical",icon:[128,512,["ellipsis-v"],"f142","M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"]},Cr=mr,vr={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Er=vr,dr={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Ir=dr,br={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},Nr=br;export{Nt as F,Cr as a,Or as b,yr as c,hr as d,xr as e,wr as f,Ar as g,Pr as h,Ir as i,Nr as j,Er as k,kr as l,Sr as m};
