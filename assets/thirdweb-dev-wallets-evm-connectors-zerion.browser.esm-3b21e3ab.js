import{InjectedConnector as e}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-9fe771d6.js";import{aq as s}from"./index-c56cdc56.js";import"./url-bc88b2b6.browser.esm-974c47d9.js";class w extends e{constructor(n){const t={...{name:"Zerion",getProvider(){var r;function i(o){if(o!=null&&o.isZerion)return o}if(s(globalThis.window))return(r=globalThis.window.ethereum)!=null&&r.providers?globalThis.window.ethereum.providers.find(i):i(globalThis.window.ethereum)}},...n.options};super({chains:n.chains,options:t,connectorStorage:n.connectorStorage})}}export{w as ZerionConnector};