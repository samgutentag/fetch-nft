"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Getting Started",l={unversionedId:"quickstart/getting-started",id:"quickstart/getting-started",title:"Getting Started",description:"copy read me",source:"@site/docs/quickstart/getting-started.md",sourceDirName:"quickstart",slug:"/quickstart/getting-started",permalink:"/fetch-nft/docs/quickstart/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"quickstartSidebar",next:{title:"Installation",permalink:"/fetch-nft/docs/quickstart/installation"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"copy read me"),(0,a.kt)("p",{parentName:"blockquote"},"additional page for OpenSea AI Key\nworkflow on how to file issues\nwhere to find support")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# install peer dependencies if not already in your project\nnpm install @solana/spl-token @solana/web3.js\n\nnpm install @audius/fetch-nft\n")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { FetchNFTClient } from "@audius/fetch-nft";\n\n// Initialize fetch client\nconst fetchClient = new FetchNFTClient();\n\n// Fetching all collectibles for the given wallets\nfetchClient\n  .getCollectibles({\n    ethWallets: ["0x5A8443f456f490dceeAD0922B0Cc89AFd598cec9"],\n    solWallets: ["GrWNH9qfwrvoCEoTm65hmnSh4z3CD96SfhtfQY6ZKUfY"],\n  })\n  .then((res) => console.log(res));\n')),(0,a.kt)("p",null,"By default, fetch-nft uses the public Opensea API and the Solana mainnet RPC endpoint. To configure API keys and endpoints, see ",(0,a.kt)("a",{parentName:"p",href:"#usage-with-configs"},"Usage With Configs"),"."))}f.isMDXComponent=!0}}]);