var g=Object.defineProperty;var m=(a,t,r)=>t in a?g(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;var o=(a,t,r)=>(m(a,typeof t!="symbol"?t+"":t,r),r);import{M as f,a2 as n,a3 as l,a4 as W,a5 as E,q as C,A,r as w,E as R,s as I,u as T,G as L,t as O,T as S,a6 as i}from"./index-0768f114.js";import{C as F}from"./contract-interceptor-d7b164a7.browser.esm-7eabd2ea.js";import{C as _}from"./contract-platform-fee-bb93a8e4.browser.esm-08c66fb7.js";import{C as M}from"./contract-roles-246fe733.browser.esm-ac880cfd.js";import{M as U,a as b,b as D}from"./marketplacev3-offers-7c391e8a.browser.esm-955932d0.js";import"./cleanCurrencyAddress-4c210fde.browser.esm-18eb800d.js";import"./marketplace-25baad1e.browser.esm-e34d8041.js";import"./QueryParams-57e79923.browser.esm-393def7e.js";const s=class s{get directListings(){return n(this.detectDirectListings(),l)}get englishAuctions(){return n(this.detectEnglishAuctions(),W)}get offers(){return n(this.detectOffers(),E)}get chainId(){return this._chainId}constructor(t,r,e){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,c,h,e);this._chainId=d,this.abi=A.parse(c||[]),this.contractWrapper=u,this.storage=e,this.metadata=new w(this.contractWrapper,R,this.storage),this.app=new I(this.contractWrapper,this.metadata,this.storage),this.roles=new M(this.contractWrapper,s.contractRoles),this.encoder=new T(this.contractWrapper),this.estimator=new L(this.contractWrapper),this.events=new O(this.contractWrapper),this.platformFees=new _(this.contractWrapper),this.interceptor=new F(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async prepare(t,r,e){return S.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}detectDirectListings(){if(i(this.contractWrapper,"DirectListings"))return new U(this.contractWrapper,this.storage)}detectEnglishAuctions(){if(i(this.contractWrapper,"EnglishAuctions"))return new b(this.contractWrapper,this.storage)}detectOffers(){if(i(this.contractWrapper,"Offers"))return new D(this.contractWrapper,this.storage)}};o(s,"contractRoles",f);let p=s;export{p as MarketplaceV3};
