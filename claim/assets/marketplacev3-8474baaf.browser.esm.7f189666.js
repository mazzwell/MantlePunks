var m=Object.defineProperty;var g=(a,t,r)=>t in a?m(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;var p=(a,t,r)=>(g(a,typeof t!="symbol"?t+"":t,r),r);import{a as s}from"./assertEnabled-f15292a2.browser.esm.bd2a0b65.js";import{C as f,a as l,G as W,b as C,d as n}from"./contract-appuri-04bfc126.browser.esm.a030217c.js";import{aY as E,b5 as A,b6 as w,b7 as R,K as I,M as T,aZ as b,P as L,U as O}from"./index.63d6a091.js";import{C as S}from"./contract-interceptor-d7b164a7.browser.esm.b65ebba9.js";import{C as F}from"./contract-platform-fee-bb93a8e4.browser.esm.496a1100.js";import{C as _}from"./contract-roles-246fe733.browser.esm.e8dae6b2.js";import{M as U,a as M,b as D}from"./marketplacev3-offers-7c391e8a.browser.esm.de1cd70d.js";import"./cleanCurrencyAddress-4c210fde.browser.esm.94e344fa.js";import"./setErc20Allowance-2030d581.browser.esm.75a2d3b6.js";import"./marketplace-25baad1e.browser.esm.0def94af.js";import"./QueryParams-57e79923.browser.esm.95c2e768.js";const c=class{get directListings(){return s(this.detectDirectListings(),A)}get englishAuctions(){return s(this.detectEnglishAuctions(),w)}get offers(){return s(this.detectOffers(),R)}get chainId(){return this._chainId}constructor(t,r,e){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new I(t,r,o,h,e);this._chainId=d,this.abi=T.parse(o||[]),this.contractWrapper=u,this.storage=e,this.metadata=new f(this.contractWrapper,b,this.storage),this.app=new l(this.contractWrapper,this.metadata,this.storage),this.roles=new _(this.contractWrapper,c.contractRoles),this.encoder=new L(this.contractWrapper),this.estimator=new W(this.contractWrapper),this.events=new C(this.contractWrapper),this.platformFees=new F(this.contractWrapper),this.interceptor=new S(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async prepare(t,r,e){return O.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}detectDirectListings(){if(n(this.contractWrapper,"DirectListings"))return new U(this.contractWrapper,this.storage)}detectEnglishAuctions(){if(n(this.contractWrapper,"EnglishAuctions"))return new M(this.contractWrapper,this.storage)}detectOffers(){if(n(this.contractWrapper,"Offers"))return new D(this.contractWrapper,this.storage)}};let i=c;p(i,"contractRoles",E);export{i as MarketplaceV3};
