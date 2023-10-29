"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=l,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:l,o[1]=a;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const i={sidebar_position:5},o="Output Types",a={unversionedId:"quickstart/output",id:"quickstart/output",title:"Output Types",description:'Fetch-NFT returns consistent, well formatted NFT lookups known as "Collectibles".',source:"@site/docs/quickstart/output.mdx",sourceDirName:"quickstart",slug:"/quickstart/output",permalink:"/fetch-nft/docs/quickstart/output",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"quickstartSidebar",previous:{title:"Main Functions",permalink:"/fetch-nft/docs/quickstart/main-functions"},next:{title:"Usage with Configs",permalink:"/fetch-nft/docs/quickstart/config-usage"}},c={},s=[{value:"Collectible",id:"collectible",level:2},{value:"CollectibleState",id:"collectiblestate",level:2}],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"output-types"},"Output Types"),(0,l.kt)("p",null,'Fetch-NFT returns consistent, well formatted NFT lookups known as "Collectibles".'),(0,l.kt)("h2",{id:"collectible"},"Collectible"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Collectible = {\n  id: string;\n  tokenId: string;\n  name: string | null;\n  description: string | null;\n  mediaType: CollectibleMediaType;\n  frameUrl: string | null;\n  imageUrl: string | null;\n  gifUrl: string | null;\n  videoUrl: string | null;\n  threeDUrl: string | null;\n  isOwned: boolean;\n  dateCreated: string | null;\n  dateLastTransferred: string | null;\n  externalLink: string | null;\n  permaLink: string | null;\n  assetContractAddress: string | null;\n  chain: Chain;\n  wallet: string;\n};\n")),(0,l.kt)("h2",{id:"collectiblestate"},"CollectibleState"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type CollectibleState = {\n  [wallet: string]: Collectible[];\n};\n")))}f.isMDXComponent=!0}}]);