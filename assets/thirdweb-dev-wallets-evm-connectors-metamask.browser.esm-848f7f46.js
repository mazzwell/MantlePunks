import{a as l,w as m,_ as p,c as w,e as f,d as g,U as u,f as v,h as C,i as I}from"./index-e9dc9249.js";import{InjectedConnector as _}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-d40fd74c.js";import"./url-bc88b2b6.browser.esm-9e168dd7.js";var r=new WeakMap;class y extends _{constructor(t){const s={...{name:"MetaMask",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:I},...t.options};super({chains:t.chains,options:s,connectorStorage:t.connectorStorage}),l(this,"id",m.metamask),p(this,r,{writable:!0,value:void 0}),w(this,r,s.UNSTABLE_shimOnConnectSelectAccount)}async connect(){var c,s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new f;this.setupListeners(),this.emit("message",{type:"connecting"});let n=null;if(g(this,r)&&((c=this.options)!=null&&c.shimDisconnect)&&!this.connectorStorage.getItem(this.shimDisconnectKey)&&(n=await this.getAccount().catch(()=>null),!!n))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(d){if(this.isUserRejectedRequestError(d))throw new u(d)}if(!n){const o=await e.request({method:"eth_requestAccounts"});n=v(o[0])}let i=await this.getChainId(),a=this.isChainUnsupported(i);if(t.chainId&&i!==t.chainId)try{await this.switchChain(t.chainId),i=t.chainId,a=this.isChainUnsupported(t.chainId)}catch(o){console.error(`Could not switch to chain id : ${t.chainId}`,o)}(s=this.options)!=null&&s.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const h={chain:{id:i,unsupported:a},provider:e,account:n};return this.emit("connect",h),h}catch(e){throw this.isUserRejectedRequestError(e)?new u(e):e.code===-32002?new C(e):e}}async switchAccount(){await(await this.getProvider()).request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}export{y as MetaMaskConnector};
