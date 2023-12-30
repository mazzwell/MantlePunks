import{a as u,w as p,e as m,U as d,f as l,h as w,cw as f}from"./index-c56cdc56.js";import{InjectedConnector as g}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-9fe771d6.js";import"./url-bc88b2b6.browser.esm-974c47d9.js";class q extends g{constructor(t){const o={...{name:"Coin98 Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:f},...t.options};super({chains:t.chains,options:o,connectorStorage:t.connectorStorage}),u(this,"id",p.coin98)}async connect(){var r,o;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new m;this.setupListeners(),this.emit("message",{type:"connecting"});let n=null;if((r=this.options)!=null&&r.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey)&&(n=await this.getAccount().catch(()=>null),!!n))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(h){if(this.isUserRejectedRequestError(h))throw new d(h)}if(!n){const s=await e.request({method:"eth_requestAccounts"});n=l(s[0])}let i=await this.getChainId(),c=this.isChainUnsupported(i);if(t.chainId&&i!==t.chainId)try{await this.switchChain(t.chainId),i=t.chainId,c=this.isChainUnsupported(t.chainId)}catch(s){console.error(`Could not switch to chain id : ${t.chainId}`,s)}(o=this.options)!=null&&o.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const a={chain:{id:i,unsupported:c},provider:e,account:n};return this.emit("connect",a),a}catch(e){throw this.isUserRejectedRequestError(e)?new d(e):e.code===-32002?new w(e):e}}}export{q as Coin98Connector};
