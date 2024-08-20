"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[2246],{5680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>f});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?t.createElement(f,i(i({ref:r},c),{},{components:n})):t.createElement(f,i({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8556:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=n(8168),a=(n(6540),n(5680));const o={sidebar_position:0},i="dns-server",l={unversionedId:"profile-format/general/dns_server",id:"profile-format/general/dns_server",title:"dns-server",description:"Specify dns server used by application",source:"@site/docs/profile-format/general/dns_server.md",sourceDirName:"profile-format/general",slug:"/profile-format/general/dns_server",permalink:"/docs/profile-format/general/dns_server",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/general/dns_server.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"#!MANAGED-CONFIG",permalink:"/docs/profile-format/managed_config"},next:{title:"doh-server",permalink:"/docs/profile-format/general/doh_server"}},s={},p=[{value:"Sample",id:"sample",level:2},{value:"Format",id:"format",level:2}],c={toc:p},m="wrapper";function d(e){let{components:r,...n}=e;return(0,a.yg)(m,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"dns-server"},(0,a.yg)("inlineCode",{parentName:"h1"},"dns-server")),(0,a.yg)("p",null,"Specify dns server used by application"),(0,a.yg)("h2",{id:"sample"},"Sample"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ini"},"dns-server = system, 8.8.8.8, 8.8.4.4, 9.9.9.9:9953\n")),(0,a.yg)("h2",{id:"format"},"Format"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ini"},"dns-server = system, {dns server}[:port], ...\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Port definition is optional, by default it is ",(0,a.yg)("inlineCode",{parentName:"li"},"53")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"system")," means use system DNS")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"If ",(0,a.yg)("inlineCode",{parentName:"li"},"dns-server")," is not assigned, ",(0,a.yg)("inlineCode",{parentName:"li"},"system")," will be used"),(0,a.yg)("li",{parentName:"ul"},"Currently ",(0,a.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/DNS_over_TLS"},"DoT")," is not supported yet"))))}d.isMDXComponent=!0}}]);