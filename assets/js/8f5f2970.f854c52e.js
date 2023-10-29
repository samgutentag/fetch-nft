"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,d=u["".concat(s,".").concat(f)]||u[f]||g[f]||r;return n?l.createElement(d,a(a({ref:t},p),{},{components:n})):l.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3},a="Fetch Client",o={unversionedId:"quickstart/fetch-client",id:"quickstart/fetch-client",title:"Fetch Client",description:"FetchNFTClient is the primary interface for using the library. When initializing the client, you may optionally pass in configs for the Open Sea and Solana clients used internally.",source:"@site/docs/quickstart/fetch-client.mdx",sourceDirName:"quickstart",slug:"/quickstart/fetch-client",permalink:"/fetch-nft/docs/quickstart/fetch-client",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"quickstartSidebar",previous:{title:"Installation",permalink:"/fetch-nft/docs/quickstart/installation"},next:{title:"Basic Usage",permalink:"/fetch-nft/docs/quickstart/usage"}},s={},c=[{value:"Main Functions",id:"main-functions",level:2},{value:"Output Types",id:"output-types",level:2},{value:"Collectible",id:"collectible",level:3},{value:"CollectibleState",id:"collectiblestate",level:3},{value:"Usage with Configs",id:"usage-with-configs",level:2}],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fetch-client"},"Fetch Client"),(0,i.kt)("p",null,"FetchNFTClient is the primary interface for using the library. When initializing the client, you may optionally pass in configs for the Open Sea and Solana clients used internally."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type OpenSeaClientProps = {\n  apiEndpoint?: string;\n  apiKey?: string;\n  assetLimit?: number;\n  eventLimit?: number;\n};\n\ntype SolanaClientProps = {\n  rpcEndpoint?: string;\n};\n\ntype FetchNFTClientProps = {\n  openSeaConfig?: OpenSeaClientProps;\n  solanaConfig?: SolanaClientProps;\n};\n")),(0,i.kt)("h2",{id:"main-functions"},"Main Functions"),(0,i.kt)("p",null,"Getting Ethereum collectibles:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"FetchNFTClient::getEthereumCollectibles(wallets: string[]) => Promise<CollectibleState>\n")),(0,i.kt)("p",null,"Getting Solana collectibles:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"FetchNFTClient::getSolanaCollectibles(wallets: string[]) => Promise<CollectibleState>\n")),(0,i.kt)("p",null,"Getting all collectibles:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"FetchNFTClient::getCollectibles({\n  ethWallets?: string[],\n  solWallets?: string[]\n}) => Promise<{\n  ethCollectibles: CollectibleState\n  solCollectibles: CollectibleState\n}>\n")),(0,i.kt)("h2",{id:"output-types"},"Output Types"),(0,i.kt)("h3",{id:"collectible"},"Collectible"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type Collectible = {\n  id: string;\n  tokenId: string;\n  name: string | null;\n  description: string | null;\n  mediaType: CollectibleMediaType;\n  frameUrl: string | null;\n  imageUrl: string | null;\n  gifUrl: string | null;\n  videoUrl: string | null;\n  threeDUrl: string | null;\n  isOwned: boolean;\n  dateCreated: string | null;\n  dateLastTransferred: string | null;\n  externalLink: string | null;\n  permaLink: string | null;\n  assetContractAddress: string | null;\n  chain: Chain;\n  wallet: string;\n};\n")),(0,i.kt)("h3",{id:"collectiblestate"},"CollectibleState"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type CollectibleState = {\n  [wallet: string]: Collectible[];\n};\n")),(0,i.kt)("h2",{id:"usage-with-configs"},"Usage with Configs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { FetchNFTClient } from '@audius/fetch-nft'\n\n// Open Sea Config\nconst openSeaConfig = {\n    apiEndpoint: '...',\n    apiKey: '...',\n    assetLimit: 50,\n    eventLimit: 300\n}\n\n// Solana Config\nconst solanaConfig = {\n    rpcEndpoint: '...'\n}\n\n// Initialize fetch client with configs\nconst fetchClient = new FetchNFTClient({ openSeaConfig, solanaConfig })\n\n// Fetching Ethereum collectibles for the given wallets\nfetchClient.getEthereumCollectibles([...]).then(res => console.log(res))\n\n// Fetching Solana collectibles for the given wallets\nfetchClient.getSolanaCollectibles([...]).then(res => console.log(res))\n")))}g.isMDXComponent=!0}}]);