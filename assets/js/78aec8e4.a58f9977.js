"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[8874],{5680:(e,t,r)=>{r.d(t,{xA:()=>y,yg:()=>d});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=a.createContext({}),s=function(e){var t=a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},y=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),i=s(r),m=n,d=i["".concat(g,".").concat(m)]||i[m]||u[m]||l;return r?a.createElement(d,o(o({ref:t},y),{},{components:r})):a.createElement(d,o({ref:t},y))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var g in t)hasOwnProperty.call(t,g)&&(p[g]=t[g]);p.originalType=e,p[i]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9387:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=r(8168),n=(r(6540),r(5680));const l={sidebar_position:2},o="Shadowsocks",p={unversionedId:"profile-format/proxy/external-proxy/shadowsocks",id:"profile-format/proxy/external-proxy/shadowsocks",title:"Shadowsocks",description:"Protocol standard",source:"@site/docs/profile-format/proxy/external-proxy/shadowsocks.md",sourceDirName:"profile-format/proxy/external-proxy",slug:"/profile-format/proxy/external-proxy/shadowsocks",permalink:"/docs/profile-format/proxy/external-proxy/shadowsocks",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/proxy/external-proxy/shadowsocks.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SOCKS5/SOCKS5-TLS",permalink:"/docs/profile-format/proxy/external-proxy/socks5"},next:{title:"VMESS",permalink:"/docs/profile-format/proxy/external-proxy/vmess"}},g={},s=[{value:"Protocol standard",id:"protocol-standard",level:2},{value:"Sample",id:"sample",level:2},{value:"Format",id:"format",level:2},{value:"Params",id:"params",level:2}],y={toc:s},i="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(i,(0,a.A)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"shadowsocks"},"Shadowsocks"),(0,n.yg)("h2",{id:"protocol-standard"},"Protocol standard"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://shadowsocks.org/en/wiki/Protocol.html"},"https://shadowsocks.org/en/wiki/Protocol.html")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/shadowsocks/simple-obfs"},"https://github.com/shadowsocks/simple-obfs"))),(0,n.yg)("h2",{id:"sample"},"Sample"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ini"},"ProxySS = ss, 1.2.3.4, 8000, encrypt-method=chacha20-ietf-poly1305, password=abcd1234, udp-relay=false, obfs=http, obfs-host=www.google.com, obfs-uri=/\n")),(0,n.yg)("h2",{id:"format"},"Format"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ini"},"{proxy name} = {protocol}, {server}, {port}, {encrypt method}, {password}, {udp-relay}, {obfs}, {obfs host}, {obfs uri}\n")),(0,n.yg)("h2",{id:"params"},"Params"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Value"),(0,n.yg)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.yg)("th",{parentName:"tr",align:null},"Note"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"proxy name"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"protocol"),(0,n.yg)("td",{parentName:"tr",align:null},"ss",(0,n.yg)("br",null),"shadowsocks",(0,n.yg)("br",null),"custom"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"server"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"Support domain and ip format")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"port"),(0,n.yg)("td",{parentName:"tr",align:null},"0-65535"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"encrypt method"),(0,n.yg)("td",{parentName:"tr",align:null},"aes-128-gcm",(0,n.yg)("br",null),"aes-192-gcm",(0,n.yg)("br",null),"aes-256-gcm",(0,n.yg)("br",null),"chacha20-ietf-poly1305",(0,n.yg)("br",null),"xchacha20-ietf-poly1305",(0,n.yg)("br",null),"rc4",(0,n.yg)("br",null),"rc4-md5",(0,n.yg)("br",null),"aes-128-cfb",(0,n.yg)("br",null),"aes-192-cfb",(0,n.yg)("br",null),"aes-256-cfb",(0,n.yg)("br",null),"aes-128-ctr",(0,n.yg)("br",null),"aes-192-ctr",(0,n.yg)("br",null),"aes-256-ctr",(0,n.yg)("br",null),"bf-cfb",(0,n.yg)("br",null),"camellia-128-cfb",(0,n.yg)("br",null),"camellia-192-cfb",(0,n.yg)("br",null),"camellia-256-cfb",(0,n.yg)("br",null),"salsa20",(0,n.yg)("br",null),"chacha20",(0,n.yg)("br",null),"chacha20-ietf"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"password"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"udp-relay"),(0,n.yg)("td",{parentName:"tr",align:null},"true",(0,n.yg)("br",null),"false"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"Default value: false")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"obfs"),(0,n.yg)("td",{parentName:"tr",align:null},"tls",(0,n.yg)("br",null),"http"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"obfs host"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"Default value: cloudfront.net, only usable when obfs is specified")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"obfs uri"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"Default value: /, only usable when obfs is http")))))}u.isMDXComponent=!0}}]);