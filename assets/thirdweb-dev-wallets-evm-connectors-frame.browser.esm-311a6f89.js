import{W as l,a,_ as p,e as o,f as d,U as c,h as v,n as m,c as g,d as C,m as y,o as P,ao as f,ap as I,S as E,p as _}from"./index-c56cdc56.js";import{g as D}from"./url-bc88b2b6.browser.esm-974c47d9.js";var u=new WeakMap;class j extends l{constructor(e){let{chains:t,options:n,connectorStorage:s}=e;const r={shimDisconnect:!0,...n};super({chains:t,options:r}),a(this,"id","frame"),a(this,"name","Frame"),a(this,"ready",!0),a(this,"shimDisconnectKey",`${this.id}.shimDisconnect`),p(this,u,{writable:!0,value:void 0}),a(this,"onAccountsChanged",i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:d(i[0])})}),a(this,"onChainChanged",i=>{const h=m(i),w=this.isChainUnsupported(h);this.emit("change",{chain:{id:h,unsupported:w}})}),a(this,"onDisconnect",()=>{this.emit("disconnect"),this.options.shimDisconnect&&this.connectorStorage.removeItem(this.shimDisconnectKey)}),this.connectorStorage=s}async connect(e){try{const t=await this.getProvider();if(!t)throw new o;this.setupListeners(),this.emit("message",{type:"connecting"});const n=await t.request({method:"eth_requestAccounts"}),s=d(n[0]);let r=await this.getChainId(),i=this.isChainUnsupported(r);return e!=null&&e.chainId&&r!==(e==null?void 0:e.chainId)&&(r=(await this.switchChain(e==null?void 0:e.chainId)).chainId,i=this.isChainUnsupported(r)),this.options.shimDisconnect&&this.connectorStorage.setItem(this.shimDisconnectKey,"true"),{account:s,provider:t,chain:{id:r,unsupported:i}}}catch(t){throw this.isUserRejectedRequestError(t)?new c(t):t.code===-32002?new v(t):t}}async disconnect(){const e=await this.getProvider();e!=null&&e.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.isInjected()||e.close(),this.options.shimDisconnect&&this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){const e=await this.getProvider();if(!e)throw new o;const t=await e.request({method:"eth_accounts"});return d(t[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new o;const t=await e.request({method:"eth_chainId"});return m(t)}async getProvider(){return g(this,u,this.isInjected()?this.injectedProvider():await this.createProvider()),C(this,u)}async getSigner(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new y(t,e).getSigner(n)}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey))return!1;if(!await this.getProvider())throw new o;return!!await this.getAccount()}catch{return!1}}async switchChain(e){const t=await this.getProvider();if(!t)throw new o;const n=P(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise(s=>this.on("change",r=>{let{chain:i}=r;(i==null?void 0:i.id)===e&&s()}))]),this.chains.find(s=>s.chainId===e)??{chainId:e,name:`Chain ${n}`,slug:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(s){const r=this.chains.find(i=>i.chainId===e);if(!r)throw new f({chainId:e,connectorId:this.id});if(s.code===4902)try{if(await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:r.name,nativeCurrency:r.nativeCurrency,rpcUrls:D(r),blockExplorerUrls:this.getBlockExplorerUrls(r)}]}),await this.getChainId()!==e)throw new c(new Error("User rejected switch after adding network."));return r}catch(i){throw this.isUserRejectedRequestError(i)?new c(i):new I(i.message)}throw this.isUserRejectedRequestError(s)?new c(s):new E(s)}}async watchAsset(e){let{address:t,decimals:n=18,image:s,symbol:r}=e;const i=await this.getProvider();if(!i)throw new o;return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:n,image:s,symbol:r}}})}async setupListeners(){const e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(e){return e.code===4001}injectedProvider(){return window==null?void 0:window.ethereum}isInjected(){var e;return!!((e=this.injectedProvider())!=null&&e.isFrame)}async createProvider(){const e=(await _(()=>import("./browser-7d127015.js").then(t=>t.b),["./browser-7d127015.js","./index-c56cdc56.js","./index-d1f160c6.css"],import.meta.url)).default;return e("frame")}}export{j as FrameConnector};
