import{u as G,r as m,j as n,P as i,R as j,a as F,N as T,L as V,g as X}from"./index-DjT4pNqh.js";function A({menuContent:e=n.jsx("p",{children:"Sair do Menu"}),customStyle:t=""}){const{handleClick:r}=G(),a=m.useCallback(()=>`flex items-center gap-2 text-black dark:text-white ${t}`,[t]);return n.jsx("button",{onClick:r,className:a(),children:e})}A.propTypes={menuContent:i.node.isRequired,customStyle:i.string};var B={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},R=j.createContext&&j.createContext(B),Y=["attr","size","title"];function J(e,t){if(e==null)return{};var r=ee(e,t),a,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ee(e,t){if(e==null)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},L.apply(this,arguments)}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,a)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?D(Object(r),!0).forEach(function(a){te(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function te(e,t,r){return t=re(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function re(e){var t=ae(e,"string");return typeof t=="symbol"?t:t+""}function ae(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $(e){return e&&e.map((t,r)=>j.createElement(t.tag,H({key:r},t.attr),$(t.child)))}function y(e){return t=>j.createElement(ne,L({attr:H({},e.attr)},t),$(e.child))}function ne(e){var t=r=>{var{attr:a,size:s,title:o}=e,u=J(e,Y),b=s||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),j.createElement("svg",L({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,u,{className:l,style:H(H({color:e.color||r.color},r.style),e.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),o&&j.createElement("title",null,o),e.children)};return R!==void 0?j.createElement(R.Consumer,null,r=>t(r)):t(B)}function ie(e){return y({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"},child:[]}]})(e)}function se(e){return y({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"},child:[]}]})(e)}function oe(e){return y({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM84,132a12,12,0,1,1,12-12A12,12,0,0,1,84,132Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,132Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,132Z"},child:[]}]})(e)}function ce(e){return y({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"},child:[]}]})(e)}function le(e){return y({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"},child:[]}]})(e)}function ue(e){return y({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"},child:[]}]})(e)}function de(e){return y({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17A8,8,0,0,0,24,208H192a8,8,0,0,0,6.13-13.15C183.18,177.07,164.6,164.44,144,157.68Z"},child:[]}]})(e)}function Z(){const{setTheme:e,theme:t}=F(),r=()=>{e(t==="light"?"dark":"light")},a=n.jsx(le,{size:"1.3rem"}),s=n.jsx(ue,{size:"1.3rem",color:"#ffffff"});return n.jsx("button",{onClick:r,className:"bg-gray-400/30 aspect-square w-fit h-fit p-1 rounded-4xl cursor-pointer",children:t==="light"?a:s})}function me(){const{theme:e}=F(),t=m.useMemo(()=>e==="light"?"/logo-light.webp":"/logo-dark.webp",[e]);return n.jsx("img",{src:t,alt:"Logo do Projeto Webber - Header",className:"h-full md:text-white"})}function Q({children:e}){return n.jsx("nav",{className:"flex gap-7",children:e})}Q.propTypes={children:i.node};function k({to:e,target:t="_self",ariaLabel:r,color:a,children:s}){return n.jsx(n.Fragment,{children:t==="_self"?n.jsx(T,{to:e,"aria-label":r,role:"link",className:({isActive:o})=>`relative translate-y-[13%] transition-colors text-[1.05rem] font-medium 
				${o?"text-light-text dark:text-dark-text":"text-light-text-disable dark:text-dark-text-disable"}`,children:s}):n.jsx(V,{to:e,target:"_blank",rel:"noopener noreferrer","aria-label":r,role:"link",className:"relative translate-y-[13%] transition-colors text-[1.05rem] font-medium "+a,children:s})})}k.propTypes={to:i.string.isRequired,target:i.string,color:i.string,ariaLabel:i.string.isRequired,children:i.any};var N={},I;function fe(){if(I)return N;I=1,N.match=o,N.parse=u;var e=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,r=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function o(p,c){return u(p).some(function(d){var x=d.inverse,M=d.type==="all"||c.type===d.type;if(M&&x||!(M||x))return!1;var w=d.expressions.every(function(v){var P=v.feature,E=v.modifier,f=v.value,g=c[P];if(!g)return!1;switch(P){case"orientation":case"scan":return g.toLowerCase()===f.toLowerCase();case"width":case"height":case"device-width":case"device-height":f=O(f),g=O(g);break;case"resolution":f=l(f),g=l(g);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":f=b(f),g=b(g);break;case"grid":case"color":case"color-index":case"monochrome":f=parseInt(f,10)||1,g=parseInt(g,10)||0;break}switch(E){case"min":return g>=f;case"max":return g<=f;default:return g===f}});return w&&!x||!w&&x})}function u(p){return p.split(",").map(function(c){c=c.trim();var d=c.match(e),x=d[1],M=d[2],w=d[3]||"",v={};return v.inverse=!!x&&x.toLowerCase()==="not",v.type=M?M.toLowerCase():"all",w=w.match(/\([^\)]+\)/g)||[],v.expressions=w.map(function(P){var E=P.match(t),f=E[1].toLowerCase().match(r);return{modifier:f[1],feature:f[2],value:E[2]}}),v})}function b(p){var c=Number(p),d;return c||(d=p.match(/^(\d+)\s*\/\s*(\d+)$/),c=d[1]/d[2]),c}function l(p){var c=parseFloat(p),d=String(p).match(s)[1];switch(d){case"dpcm":return c/2.54;case"dppx":return c*96;default:return c}}function O(p){var c=parseFloat(p),d=String(p).match(a)[1];switch(d){case"em":return c*16;case"rem":return c*16;case"cm":return c*96/2.54;case"mm":return c*96/2.54/10;case"in":return c*96;case"pt":return c*72;case"pc":return c*72/12;default:return c}}return N}var S,z;function he(){if(z)return S;z=1;var e=fe().match,t=typeof window<"u"?window.matchMedia:null;function r(s,o,u){var b=this,l;t&&!u&&(l=t.call(window,s)),l?(this.matches=l.matches,this.media=l.media,l.addListener(c)):(this.matches=e(s,o),this.media=s),this.addListener=O,this.removeListener=p,this.dispose=d;function O(x){l&&l.addListener(x)}function p(x){l&&l.removeListener(x)}function c(x){b.matches=x.matches,b.media=x.media}function d(){l&&l.removeListener(c)}}function a(s,o,u){return new r(s,o,u)}return S=a,S}var pe=he();const xe=X(pe);var ge=/[A-Z]/g,be=/^ms-/,_={};function ve(e){return"-"+e.toLowerCase()}function W(e){if(_.hasOwnProperty(e))return _[e];var t=e.replace(ge,ve);return _[e]=be.test(t)?"-"+t:t}function ye(e,t){if(e===t)return!0;if(!e||!t)return!1;const r=Object.keys(e),a=Object.keys(t),s=r.length;if(a.length!==s)return!1;for(let o=0;o<s;o++){const u=r[o];if(e[u]!==t[u]||!Object.prototype.hasOwnProperty.call(t,u))return!1}return!0}const h=i.oneOfType([i.string,i.number]),U={all:i.bool,grid:i.bool,aural:i.bool,braille:i.bool,handheld:i.bool,print:i.bool,projection:i.bool,screen:i.bool,tty:i.bool,tv:i.bool,embossed:i.bool},je={orientation:i.oneOf(["portrait","landscape"]),scan:i.oneOf(["progressive","interlace"]),aspectRatio:i.string,deviceAspectRatio:i.string,height:h,deviceHeight:h,width:h,deviceWidth:h,color:i.bool,colorIndex:i.bool,monochrome:i.bool,resolution:h,type:Object.keys(U)},{...we}=je,Me={minAspectRatio:i.string,maxAspectRatio:i.string,minDeviceAspectRatio:i.string,maxDeviceAspectRatio:i.string,minHeight:h,maxHeight:h,minDeviceHeight:h,maxDeviceHeight:h,minWidth:h,maxWidth:h,minDeviceWidth:h,maxDeviceWidth:h,minColor:i.number,maxColor:i.number,minColorIndex:i.number,maxColorIndex:i.number,minMonochrome:i.number,maxMonochrome:i.number,minResolution:h,maxResolution:h,...we},ke={...U,...Me};var Ce={all:ke};const Oe=e=>`not ${e}`,Pe=(e,t)=>{const r=W(e);return typeof t=="number"&&(t=`${t}px`),t===!0?r:t===!1?Oe(r):`(${r}: ${t})`},Ee=e=>e.join(" and "),Ne=e=>{const t=[];return Object.keys(Ce.all).forEach(r=>{const a=e[r];a!=null&&t.push(Pe(r,a))}),Ee(t)},Le=m.createContext(void 0),He=e=>e.query||Ne(e),q=e=>e?Object.keys(e).reduce((r,a)=>(r[W(a)]=e[a],r),{}):void 0,K=()=>{const e=m.useRef(!1);return m.useEffect(()=>{e.current=!0},[]),e.current},Se=e=>{const t=m.useContext(Le),r=()=>q(e)||q(t),[a,s]=m.useState(r);return m.useEffect(()=>{const o=r();ye(a,o)||s(o)},[e,t]),a},_e=e=>{const t=()=>He(e),[r,a]=m.useState(t);return m.useEffect(()=>{const s=t();r!==s&&a(s)},[e]),r},Ae=(e,t)=>{const r=()=>xe(e,t||{},!!t),[a,s]=m.useState(r),o=K();return m.useEffect(()=>{if(o){const u=r();return s(u),()=>{u&&u.dispose()}}},[e,t]),a},Re=e=>{const[t,r]=m.useState(e.matches);return m.useEffect(()=>{const a=s=>{r(s.matches)};return e.addListener(a),r(e.matches),()=>{e.removeListener(a)}},[e]),t},De=(e,t,r)=>{const a=Se(t),s=_e(e);if(!s)throw new Error("Invalid or missing MediaQuery!");const o=Ae(s,a),u=Re(o);return K(),m.useEffect(()=>{},[u]),m.useEffect(()=>()=>{o&&o.dispose()},[]),u};function qe(){const e=De({maxWidth:768});return n.jsxs("header",{className:"flex justify-between items-center h-16 py-2 px-4 md:px-10 bg-light-header dark:bg-dark-header transition-colors",children:[n.jsx(me,{}),e?n.jsxs("div",{className:"flex gap-4",children:[n.jsx(Z,{}),n.jsx(A,{menuContent:n.jsx(ie,{size:"1.6rem"})})]}):n.jsxs(Q,{children:[n.jsx(k,{to:"/",ariaLabel:"Home Page",text:"Home",children:"Home"}),n.jsx(k,{to:"/Customizer",ariaLabel:"Customizer Page",text:"Customizer",children:"Customizer"}),n.jsx(k,{to:"https://google.com",target:"_blank",ariaLabel:"Discord page",text:"Discord",color:"text-light-text dark:text-dark-text",children:"Discord"}),n.jsx(k,{to:"https://google.com",target:"_blank",ariaLabel:"Feedback page",text:"Feedback",color:"text-light-text dark:text-dark-text",children:"Feedback"}),n.jsx(Z,{})]})]})}function Fe(){return n.jsx(n.Fragment,{children:n.jsx("img",{src:"/bg-image.png",alt:"background image",className:"fixed left-[50%] top-[50%] translate-[-50%] max-h-screen aspect-square z-0 blur-[4px] filter invert dark:invert-0 opacity-[10%] animate-spin-slow",draggable:!1})})}function Ze(e){return y({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(e)}function C({text:e,icon:t,path:r="",target:a="_self",color:s="text-light-text dark:text-dark-text"}){return n.jsx(n.Fragment,{children:a==="_self"?n.jsxs(T,{to:r,className:({isActive:o})=>`flex items-center gap-2 font-medium
						${o?"text-light-text-disable dark:text-dark-text-disable":"text-light-text dark:text-dark-text"}`,children:[t,e]}):n.jsxs(V,{to:r,target:a,className:"flex py-2 px-4 rounded-3xl bg-dark-header items-center gap-1 text-shadow font-medium "+s,children:[t,e]})})}C.propTypes={text:i.string,icon:i.node,path:i.string,target:i.string,color:i.string};function Ie(){return n.jsxs("section",{className:"absolute flex items-end h-screen w-screen bg-black/5  dark:bg-black/50 backdrop-blur-[8px] z-10 px-8 py-12",children:[n.jsxs("nav",{className:"flex flex-col h-fit w-full gap-10 rounded-xl",children:[n.jsxs("div",{className:"flex flex-col w-full gap-3",children:[n.jsx(C,{text:"Início",icon:n.jsx(ce,{size:"1.4rem"}),path:"/"}),n.jsx(C,{text:"Criar Personagem",icon:n.jsx(de,{size:"1.4rem"}),path:"/Customizer"})]}),n.jsx("div",{className:"flex w-full justify-between",children:n.jsx(A,{menuContent:n.jsxs(n.Fragment,{children:[n.jsx(se,{size:"1.4rem"})," Fechar Menu"]})})})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx(C,{text:"Discord",icon:n.jsx(Ze,{size:"1.4rem"}),path:"https://discord.gg/KXJ8VGQYmT",target:"_blank",color:"text-discord"}),n.jsx(C,{text:"Feedback",icon:n.jsx(oe,{size:"1.4rem"}),path:"http",target:"_blank",color:"text-golden"})]})]})}const Te=m.memo(Ie);export{Fe as B,qe as H,Te as S};
