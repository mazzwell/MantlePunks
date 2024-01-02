import{_ as l,bR as m,bN as p,bP as w,bS as g,bQ as f,bT as u,i as v,bU as C,c3 as I}from"./index.63d6a091.js";import{InjectedConnector as P}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.9868e3d1.js";import"./url-bc88b2b6.browser.esm.1d5f4245.js";var r=new WeakMap;class q extends P{constructor(t){const n={...{name:"Phantom",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:I},...t.options};super({chains:t.chains,options:n,connectorStorage:t.connectorStorage}),l(this,"id",m.phantom),p(this,r,{writable:!0,value:void 0}),w(this,r,n.UNSTABLE_shimOnConnectSelectAccount)}async connect(){var c,n;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new g;this.setupListeners(),this.emit("message",{type:"connecting"});let s=null;if(f(this,r)&&((c=this.options)==null?void 0:c.shimDisconnect)&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))&&(s=await this.getAccount().catch(()=>null),!!s))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(d){if(this.isUserRejectedRequestError(d))throw new u(d)}if(!s){const o=await e.request({method:"eth_requestAccounts"});s=v(o[0])}let i=await this.getChainId(),a=this.isChainUnsupported(i);if(t.chainId&&i!==t.chainId)try{await this.switchChain(t.chainId),i=t.chainId,a=this.isChainUnsupported(t.chainId)}catch(o){console.error(`Could not switch to chain id : ${t.chainId}`,o)}(n=this.options)!=null&&n.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const h={chain:{id:i,unsupported:a},provider:e,account:s};return this.emit("connect",h),h}catch(e){throw this.isUserRejectedRequestError(e)?new u(e):e.code===-32002?new C(e):e}}async switchAccount(){await(await this.getProvider()).request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}export{q as PhantomConnector};
