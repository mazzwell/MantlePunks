import{W as Q,k as p,a as l,w as z,_ as I,c as N,l as r,d as n,f as y,m as k,U as q,S as L,o as O,p as K}from"./index-c56cdc56.js";import{g as Y}from"./url-bc88b2b6.browser.esm-974c47d9.js";const $=new Set([1,137,10,42161,56]),x="eip155",j="wagmi.requestedChains",A="wallet_addEthereumChain",S="last-used-chain-id";var a=new WeakMap,v=new WeakMap,m=new WeakMap,P=new WeakSet,E=new WeakSet,M=new WeakSet,C=new WeakSet,W=new WeakSet,D=new WeakSet,U=new WeakSet;class Z extends Q{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),p(this,U),p(this,D),p(this,W),p(this,C),p(this,M),p(this,E),p(this,P),l(this,"id",z.walletConnect),l(this,"name","WalletConnect"),l(this,"ready",!0),I(this,a,{writable:!0,value:void 0}),I(this,v,{writable:!0,value:void 0}),I(this,m,{writable:!0,value:void 0}),l(this,"onAccountsChanged",t=>{t.length===0?this.emit("disconnect"):t[0]&&this.emit("change",{account:y(t[0])})}),l(this,"onChainChanged",async t=>{const i=Number(t),s=this.isChainUnsupported(i);await n(this,m).setItem(S,String(t)),this.emit("change",{chain:{id:i,unsupported:s}})}),l(this,"onDisconnect",async()=>{await r(this,C,g).call(this,[]),await n(this,m).removeItem(S),this.emit("disconnect")}),l(this,"onDisplayUri",t=>{this.emit("message",{type:"display_uri",data:t})}),l(this,"onConnect",()=>{this.emit("connect",{provider:n(this,a)})}),N(this,m,e.options.storage),r(this,P,b).call(this),this.filteredChains=this.chains.length>50?this.chains.filter(t=>$.has(t.chainId)):this.chains,this.showWalletConnectModal=this.options.qrcode!==!1}async connect(){var i;let{chainId:e,pairingTopic:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{let s=e;if(!s){const f=await n(this,m).getItem(S),h=f?parseInt(f):void 0;h&&!this.isChainUnsupported(h)?s=h:s=(i=this.filteredChains[0])==null?void 0:i.chainId}if(!s)throw new Error("No chains found on connector.");const o=await this.getProvider();this.setupListeners();const d=await r(this,E,T).call(this);if(o.session&&d&&await o.disconnect(),!o.session||d){const f=this.filteredChains.filter(h=>h.chainId!==s).map(h=>h.chainId);this.emit("message",{type:"connecting"}),await o.connect({pairingTopic:t,chains:[s],optionalChains:f.length>0?f:[s]}),await r(this,C,g).call(this,this.filteredChains.map(h=>{let{chainId:J}=h;return J}))}const u=await o.enable();if(!u[0])throw new Error("No accounts found on provider.");const _=y(u[0]),w=await this.getChainId(),G=this.isChainUnsupported(w);return{account:_,chain:{id:w,unsupported:G},provider:new k(o)}}catch(s){throw/user rejected/i.test(s==null?void 0:s.message)?new q(s):s}}async disconnect(){const e=()=>{if(!(typeof localStorage>"u"))for(const s in localStorage)s.startsWith("wc@2")&&localStorage.removeItem(s)};e();const t=await this.getProvider();(async()=>{try{await t.disconnect()}catch(s){if(!/No matching key/i.test(s.message))throw s}finally{r(this,M,R).call(this),await r(this,C,g).call(this,[]),e()}})()}async getAccount(){const{accounts:e}=await this.getProvider();if(!e[0])throw new Error("No accounts found on provider.");return y(e[0])}async getChainId(){const{chainId:e}=await this.getProvider();return e}async getProvider(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(n(this,a)||await r(this,P,b).call(this),e&&await this.switchChain(e),!n(this,a))throw new Error("No provider found.");return n(this,a)}async getSigner(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[t,i]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]);return new k(t,e).getSigner(i)}async isAuthorized(){try{const[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),i=await r(this,E,T).call(this);if(!e)return!1;if(i&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){const t=this.chains.find(i=>i.chainId===e);if(!t)throw new L(`Chain with ID: ${e}, not found on connector.`);try{const i=await this.getProvider(),s=r(this,D,V).call(this),o=r(this,U,F).call(this);if(!s.includes(e)&&o.includes(A)){const u=t.explorers&&t.explorers[0],_=u?{blockExplorerUrls:[u.url]}:{};await i.request({method:A,params:[{chainId:O(t.chainId),chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:Y(t),..._}]});const w=await r(this,W,H).call(this);w.push(e),await r(this,C,g).call(this,w)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:O(e)}]}),t}catch(i){const s=typeof i=="string"?i:i==null?void 0:i.message;throw/user rejected request/i.test(s)?new q(i):new L(i)}}async initProvider(){const{default:e,OPTIONAL_EVENTS:t,OPTIONAL_METHODS:i}=await K(()=>import("./index.es-538b2b20.js"),["./index.es-538b2b20.js","./index-c56cdc56.js","./index-d1f160c6.css"],import.meta.url),[s,...o]=this.filteredChains.map(d=>{let{chainId:u}=d;return u});s&&N(this,a,await e.init({showQrModal:this.showWalletConnectModal,projectId:this.options.projectId,optionalMethods:i,optionalEvents:t,chains:[s],optionalChains:o,metadata:{name:this.options.dappMetadata.name,description:this.options.dappMetadata.description||"",url:this.options.dappMetadata.url,icons:[this.options.dappMetadata.logoUrl||""]},rpcMap:Object.fromEntries(this.filteredChains.map(d=>[d.chainId,d.rpc[0]||""])),qrModalOptions:this.options.qrModalOptions}))}async setupListeners(){n(this,a)&&(r(this,M,R).call(this),n(this,a).on("accountsChanged",this.onAccountsChanged),n(this,a).on("chainChanged",this.onChainChanged),n(this,a).on("disconnect",this.onDisconnect),n(this,a).on("session_delete",this.onDisconnect),n(this,a).on("display_uri",this.onDisplayUri),n(this,a).on("connect",this.onConnect))}}async function b(){return n(this,v)||N(this,v,this.initProvider()),n(this,v)}async function T(){if(r(this,U,F).call(this).includes(A)||!this.options.isNewChainsStale)return!1;const e=await r(this,W,H).call(this),t=this.filteredChains.map(s=>{let{chainId:o}=s;return o}),i=r(this,D,V).call(this);return i.length&&!i.some(s=>t.includes(s))?!1:!t.every(s=>e.includes(s))}function R(){n(this,a)&&(n(this,a).removeListener("accountsChanged",this.onAccountsChanged),n(this,a).removeListener("chainChanged",this.onChainChanged),n(this,a).removeListener("disconnect",this.onDisconnect),n(this,a).removeListener("session_delete",this.onDisconnect),n(this,a).removeListener("display_uri",this.onDisplayUri),n(this,a).removeListener("connect",this.onConnect))}async function g(c){await n(this,m).setItem(j,JSON.stringify(c))}async function H(){const c=await n(this,m).getItem(j);return c?JSON.parse(c):[]}function V(){var e,t,i;return n(this,a)?((i=(t=(e=n(this,a).session)==null?void 0:e.namespaces[x])==null?void 0:t.chains)==null?void 0:i.map(s=>parseInt(s.split(":")[1]||"")))??[]:[]}function F(){var e,t;return n(this,a)?((t=(e=n(this,a).session)==null?void 0:e.namespaces[x])==null?void 0:t.methods)??[]:[]}export{Z as WalletConnectConnector};
