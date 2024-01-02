import{bW as J,c0 as p,_ as l,bR as z,bN as I,i as y,bQ as n,c1 as r,bP as N,bX as q,bT as U,b_ as k,q as L,a8 as K}from"./index.63d6a091.js";import{g as X}from"./url-bc88b2b6.browser.esm.1d5f4245.js";const Y=new Set([1,137,10,42161,56]),x="eip155",j="wagmi.requestedChains",A="wallet_addEthereumChain",P="last-used-chain-id";var a=new WeakMap,v=new WeakMap,m=new WeakMap,S=new WeakSet,E=new WeakSet,M=new WeakSet,f=new WeakSet,b=new WeakSet,W=new WeakSet,D=new WeakSet;class Z extends J{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),p(this,D),p(this,W),p(this,b),p(this,f),p(this,M),p(this,E),p(this,S),l(this,"id",z.walletConnect),l(this,"name","WalletConnect"),l(this,"ready",!0),I(this,a,{writable:!0,value:void 0}),I(this,v,{writable:!0,value:void 0}),I(this,m,{writable:!0,value:void 0}),l(this,"onAccountsChanged",t=>{t.length===0?this.emit("disconnect"):t[0]&&this.emit("change",{account:y(t[0])})}),l(this,"onChainChanged",async t=>{const s=Number(t),i=this.isChainUnsupported(s);await n(this,m).setItem(P,String(t)),this.emit("change",{chain:{id:s,unsupported:i}})}),l(this,"onDisconnect",async()=>{await r(this,f,g).call(this,[]),await n(this,m).removeItem(P),this.emit("disconnect")}),l(this,"onDisplayUri",t=>{this.emit("message",{type:"display_uri",data:t})}),l(this,"onConnect",()=>{this.emit("connect",{provider:n(this,a)})}),N(this,m,e.options.storage),r(this,S,O).call(this),this.filteredChains=this.chains.length>50?this.chains.filter(t=>Y.has(t.chainId)):this.chains,this.showWalletConnectModal=this.options.qrcode!==!1}async connect(){var s;let{chainId:e,pairingTopic:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{let i=e;if(!i){const C=await n(this,m).getItem(P),c=C?parseInt(C):void 0;c&&!this.isChainUnsupported(c)?i=c:i=(s=this.filteredChains[0])==null?void 0:s.chainId}if(!i)throw new Error("No chains found on connector.");const h=await this.getProvider();this.setupListeners();const d=await r(this,E,T).call(this);if(h.session&&d&&await h.disconnect(),!h.session||d){const C=this.filteredChains.filter(c=>c.chainId!==i).map(c=>c.chainId);this.emit("message",{type:"connecting"}),await h.connect({pairingTopic:t,chains:[i],optionalChains:C.length>0?C:[i]}),await r(this,f,g).call(this,this.filteredChains.map(c=>{let{chainId:G}=c;return G}))}const u=await h.enable();if(!u[0])throw new Error("No accounts found on provider.");const _=y(u[0]),w=await this.getChainId(),Q=this.isChainUnsupported(w);return{account:_,chain:{id:w,unsupported:Q},provider:new q(h)}}catch(i){throw/user rejected/i.test(i==null?void 0:i.message)?new U(i):i}}async disconnect(){const e=()=>{if(!(typeof localStorage>"u"))for(const i in localStorage)i.startsWith("wc@2")&&localStorage.removeItem(i)};e();const t=await this.getProvider();(async()=>{try{await t.disconnect()}catch(i){if(!/No matching key/i.test(i.message))throw i}finally{r(this,M,R).call(this),await r(this,f,g).call(this,[]),e()}})()}async getAccount(){const{accounts:e}=await this.getProvider();if(!e[0])throw new Error("No accounts found on provider.");return y(e[0])}async getChainId(){const{chainId:e}=await this.getProvider();return e}async getProvider(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(n(this,a)||await r(this,S,O).call(this),e&&await this.switchChain(e),!n(this,a))throw new Error("No provider found.");return n(this,a)}async getSigner(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[t,s]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]);return new q(t,e).getSigner(s)}async isAuthorized(){try{const[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),s=await r(this,E,T).call(this);if(!e)return!1;if(s&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){const t=this.chains.find(s=>s.chainId===e);if(!t)throw new k(`Chain with ID: ${e}, not found on connector.`);try{const s=await this.getProvider(),i=r(this,W,V).call(this),h=r(this,D,F).call(this);if(!i.includes(e)&&h.includes(A)){const u=t.explorers&&t.explorers[0],_=u?{blockExplorerUrls:[u.url]}:{};await s.request({method:A,params:[{chainId:L(t.chainId),chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:X(t),..._}]});const w=await r(this,b,H).call(this);w.push(e),await r(this,f,g).call(this,w)}return await s.request({method:"wallet_switchEthereumChain",params:[{chainId:L(e)}]}),t}catch(s){const i=typeof s=="string"?s:s==null?void 0:s.message;throw/user rejected request/i.test(i)?new U(s):new k(s)}}async initProvider(){const{default:e,OPTIONAL_EVENTS:t,OPTIONAL_METHODS:s}=await K(()=>import("./index.es.2fe73a78.js"),["assets/index.es.2fe73a78.js","assets/index.63d6a091.js","assets/index.8ee28ded.css"]),[i,...h]=this.filteredChains.map(d=>{let{chainId:u}=d;return u});i&&N(this,a,await e.init({showQrModal:this.showWalletConnectModal,projectId:this.options.projectId,optionalMethods:s,optionalEvents:t,chains:[i],optionalChains:h,metadata:{name:this.options.dappMetadata.name,description:this.options.dappMetadata.description||"",url:this.options.dappMetadata.url,icons:[this.options.dappMetadata.logoUrl||""]},rpcMap:Object.fromEntries(this.filteredChains.map(d=>[d.chainId,d.rpc[0]||""])),qrModalOptions:this.options.qrModalOptions}))}async setupListeners(){!n(this,a)||(r(this,M,R).call(this),n(this,a).on("accountsChanged",this.onAccountsChanged),n(this,a).on("chainChanged",this.onChainChanged),n(this,a).on("disconnect",this.onDisconnect),n(this,a).on("session_delete",this.onDisconnect),n(this,a).on("display_uri",this.onDisplayUri),n(this,a).on("connect",this.onConnect))}}async function O(){return n(this,v)||N(this,v,this.initProvider()),n(this,v)}async function T(){if(r(this,D,F).call(this).includes(A)||!this.options.isNewChainsStale)return!1;const e=await r(this,b,H).call(this),t=this.filteredChains.map(i=>{let{chainId:h}=i;return h}),s=r(this,W,V).call(this);return s.length&&!s.some(i=>t.includes(i))?!1:!t.every(i=>e.includes(i))}function R(){!n(this,a)||(n(this,a).removeListener("accountsChanged",this.onAccountsChanged),n(this,a).removeListener("chainChanged",this.onChainChanged),n(this,a).removeListener("disconnect",this.onDisconnect),n(this,a).removeListener("session_delete",this.onDisconnect),n(this,a).removeListener("display_uri",this.onDisplayUri),n(this,a).removeListener("connect",this.onConnect))}async function g(o){await n(this,m).setItem(j,JSON.stringify(o))}async function H(){const o=await n(this,m).getItem(j);return o?JSON.parse(o):[]}function V(){var e,t,s;if(!n(this,a))return[];const o=(s=(t=(e=n(this,a).session)==null?void 0:e.namespaces[x])==null?void 0:t.chains)==null?void 0:s.map(i=>parseInt(i.split(":")[1]||""));return o!=null?o:[]}function F(){var e,t;if(!n(this,a))return[];const o=(t=(e=n(this,a).session)==null?void 0:e.namespaces[x])==null?void 0:t.methods;return o!=null?o:[]}export{Z as WalletConnectConnector};
