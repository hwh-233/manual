"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[1666],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(m,p(p({ref:t},c),{},{components:r})):n.createElement(m,p({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4480:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l}});var n=r(3117),o=(r(7294),r(3905));const a={sidebar_position:8},p="udp-policy-not-supported-behaviour",i={unversionedId:"profile-format/general/udp_policy_not_supported_behaviour",id:"profile-format/general/udp_policy_not_supported_behaviour",title:"udp-policy-not-supported-behaviour",description:"If proxy not support udp relay, use DIRECT or REJECT instead",source:"@site/docs/profile-format/general/udp_policy_not_supported_behaviour.md",sourceDirName:"profile-format/general",slug:"/profile-format/general/udp_policy_not_supported_behaviour",permalink:"/docs/profile-format/general/udp_policy_not_supported_behaviour",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/general/udp_policy_not_supported_behaviour.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"socks5-listen",permalink:"/docs/profile-format/general/socks5_listen"},next:{title:"test-timeout",permalink:"/docs/profile-format/general/test_timeout"}},u={},l=[{value:"Sample",id:"sample",level:3},{value:"Format",id:"format",level:3}],c={toc:l};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"udp-policy-not-supported-behaviour"},(0,o.kt)("inlineCode",{parentName:"h1"},"udp-policy-not-supported-behaviour")),(0,o.kt)("p",null,"If proxy not support udp relay, use ",(0,o.kt)("a",{parentName:"p",href:"/docs/profile-format/proxy/built-in-proxy/direct"},"DIRECT")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/profile-format/proxy/built-in-proxy/reject"},"REJECT")," instead"),(0,o.kt)("h3",{id:"sample"},"Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"udp-policy-not-supported-behaviour = DIRECT\n")),(0,o.kt)("h3",{id:"format"},"Format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"udp-policy-not-supported-behaviour = {DIRECT|REJECT}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Only DIRECT or REJECT is supported")))}s.isMDXComponent=!0}}]);