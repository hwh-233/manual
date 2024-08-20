"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[8382],{6669:(e,t,a)=>{a.d(t,{A:()=>h});var l=a(6540),r=a(53),n=a(1402),o=a(4581),s=a(5489),i=a(1312);const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function c(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.A)(m.sidebar,"thin-scrollbar"),"aria-label":(0,i.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.A)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.A)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(s.A,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var u=a(5600);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.GX,{component:d,props:e})}function p(e){let{sidebar:t}=e;const a=(0,o.l)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(c,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return l.createElement(n.A,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,r.A)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},8258:(e,t,a)=>{a.d(t,{A:()=>M});var l=a(6540),r=a(53),n=a(7131),o=a(6025);function s(e){let{children:t,className:a}=e;const{frontMatter:r,assets:s,metadata:{description:i}}=(0,n.e)(),{withBaseUrl:m}=(0,o.h)(),c=s.image??r.image,u=r.keywords??[];return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},i&&l.createElement("meta",{itemProp:"description",content:i}),c&&l.createElement("link",{itemProp:"image",href:m(c,{absolute:!0})}),u.length>0&&l.createElement("meta",{itemProp:"keywords",content:u.join(",")}),t)}var i=a(5489);const m={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,n.e)(),{permalink:s,title:c}=a,u=o?"h1":"h2";return l.createElement(u,{className:(0,r.A)(m.title,t),itemProp:"headline"},o?c:l.createElement(i.A,{itemProp:"url",to:s},c))}var u=a(1312),d=a(5846);const g={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.W)();return t=>{const a=Math.ceil(t);return e(a,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return l.createElement(l.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,n.e)(),{date:o,formattedDate:s,readingTime:i}=a;return l.createElement("div",{className:(0,r.A)(g.container,"margin-vert--md",t)},l.createElement(h,{date:o,formattedDate:s}),void 0!==i&&l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(p,{readingTime:i})))}function f(e){return e.href?l.createElement(i.A,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:n,title:o,url:s,imageURL:i,email:m}=t,c=s||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,r.A)("avatar margin-bottom--sm",a)},i&&l.createElement(f,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:i,alt:n,itemProp:"image"})),n&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(f,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},n))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const P={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,n.e)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",s?P.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,r.A)(!s&&"col col--6",s?P.imageOnlyAuthorCol:P.authorCol),key:t},l.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function N(){return l.createElement("header",null,l.createElement(c,null),l.createElement(b,null),l.createElement(A,null))}var _=a(440),k=a(405);function T(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,n.e)();return l.createElement("div",{id:o?_.blogPostContainerID:void 0,className:(0,r.A)("markdown",a),itemProp:"articleBody"},l.createElement(k.A,null,t))}var w=a(1943),I=a(2053),y=a(8168);function F(){return l.createElement("b",null,l.createElement(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function L(e){const{blogPostTitle:t,...a}=e;return l.createElement(i.A,(0,y.A)({"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(F,null))}const B={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function C(){const{metadata:e,isBlogPostPage:t}=(0,n.e)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:i}=e,m=!t&&i,c=a.length>0;return c||m||s?l.createElement("footer",{className:(0,r.A)("row docusaurus-mt-lg",t&&B.blogPostFooterDetailsFull)},c&&l.createElement("div",{className:(0,r.A)("col",{"col--9":m})},l.createElement(I.A,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(w.A,{editUrl:s})),m&&l.createElement("div",{className:(0,r.A)("col text--right",{"col--3":c})},l.createElement(L,{blogPostTitle:o,to:e.permalink}))):null}function M(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,n.e)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s,{className:(0,r.A)(o,a)},l.createElement(N,null),l.createElement(T,null,t),l.createElement(C,null))}},7131:(e,t,a)=>{a.d(t,{e:()=>s,i:()=>o});var l=a(6540),r=a(9532);const n=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:r=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:r});return l.createElement(n.Provider,{value:o},t)}function s(){const e=(0,l.useContext)(n);if(null===e)throw new r.dV("BlogPostProvider");return e}},5846:(e,t,a)=>{a.d(t,{W:()=>m});var l=a(6540),r=a(4586);const n=["zero","one","two","few","many","other"];function o(e){return n.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function m(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);