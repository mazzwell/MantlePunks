var u=Object.defineProperty;var d=(s,a,t)=>a in s?u(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;var o=(s,a,t)=>(d(s,typeof a!="symbol"?a+"":a,t),t);import{N as g,q as C,A as f,r as w,D as y,s as W,t as T,u as A,G as R,v as E,x as k,y as i,T as v,B as S}from"./index-c56cdc56.js";import{C as b}from"./contract-interceptor-d7b164a7.browser.esm-7eabd2ea.js";import{C as N,a as O}from"./contract-owner-d0899d6f.browser.esm-3b0c21a2.js";import{C as B}from"./contract-platform-fee-bb93a8e4.browser.esm-c158bcde.js";import{C as I}from"./contract-roles-246fe733.browser.esm-b0df669a.js";import{C as P}from"./contract-sales-e8c058ab.browser.esm-38f2f661.js";import{D as F}from"./erc-1155-5dc47e61.browser.esm-b07b5b39.js";import{S as x}from"./erc-1155-standard-8a80b8c6.browser.esm-c0a39237.js";import{P as D}from"./thirdweb-checkout-696b5d4a.browser.esm-c629d667.js";import"./QueryParams-57e79923.browser.esm-52c0ff29.js";import"./index-48281ecd.js";class _{constructor(a){this.events=a}async getAllClaimerAddresses(a){const t=(await this.events.getEvents("TokensClaimed")).filter(r=>r.data&&S.isBigNumber(r.data.tokenId)?r.data.tokenId.eq(a):!1);return Array.from(new Set(t.filter(r=>{var e;return typeof((e=r.data)==null?void 0:e.claimer)=="string"}).map(r=>r.data.claimer)))}}const p=class p extends x{constructor(t,r,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,c,n,e);super(l,e,m);o(this,"createBatch",i(async(t,r)=>this.erc1155.lazyMint.prepare(t,r)));o(this,"claimTo",i((()=>{var t=this;return async function(r,e,n){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;return t.erc1155.claimTo.prepare(r,e,n,{checkERC20Allowance:c})}})()));o(this,"claim",i((()=>{var t=this;return async function(r,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const c=await t.contractWrapper.getSignerAddress();return t.claimTo.prepare(c,r,e,n)}})()));o(this,"burnTokens",i(async(t,r)=>this.erc1155.burn.prepare(t,r)));this.abi=f.parse(c),this.metadata=new w(this.contractWrapper,y,this.storage),this.app=new W(this.contractWrapper,this.metadata,this.storage),this.roles=new I(this.contractWrapper,p.contractRoles),this.royalties=new N(this.contractWrapper,this.metadata),this.sales=new P(this.contractWrapper),this.claimConditions=new F(this.contractWrapper,this.metadata,this.storage),this.events=new T(this.contractWrapper),this.history=new _(this.events),this.encoder=new A(this.contractWrapper),this.estimator=new R(this.contractWrapper),this.platformFees=new B(this.contractWrapper),this.interceptor=new b(this.contractWrapper),this.checkout=new D(this.contractWrapper),this.owner=new O(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t,r){return this.erc1155.getOwned(t,r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[E("transfer"),k])}async getClaimTransaction(t,r,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;return this.erc1155.getClaimTransaction(t,r,e,{checkERC20Allowance:n})}async prepare(t,r,e){return v.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}};o(p,"contractRoles",g);let h=p;export{h as EditionDrop};
