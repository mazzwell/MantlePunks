var A=Object.defineProperty;var f=(i,c,r)=>c in i?A(i,c,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[c]=r;var p=(i,c,r)=>(f(i,typeof c!="symbol"?c+"":c,r),r);import{a7 as W,q as C,A as T,r as v,a8 as y,s as I,u as E,G as R,t as $,P as S,Q as b,y as k,K as m,T as h,O as P}from"./index-e9dc9249.js";import{h as q}from"./hasERC20Allowance-050b0e90.browser.esm-ae513206.js";import{a as w}from"./marketplace-25baad1e.browser.esm-bed1c5ac.js";import{u as O}from"./QueryParams-57e79923.browser.esm-1bed8f71.js";import{C as F,a as L}from"./contract-owner-d0899d6f.browser.esm-ce16f7a5.js";import{C as U}from"./contract-roles-246fe733.browser.esm-f70935f6.js";import{S as x}from"./erc-721-standard-64a89512.browser.esm-bb591b5d.js";import"./erc-721-74018339.browser.esm-f1040976.js";import"./drop-claim-conditions-6965683b.browser.esm-60b58f54.js";import"./index-7c8c5a15.js";const d=class d extends x{constructor(r,e,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},t=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(r,e,t,o,n);super(s,n,a);p(this,"wrap",k(async(r,e,n)=>{const[o,t,a]=await Promise.all([O(e,this.storage),this.toTokenStructList(r),m(n||await this.contractWrapper.getSignerAddress())]);return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"wrap",args:[t,o,a],parse:s=>{const u=this.contractWrapper.parseLogs("TokensWrapped",s==null?void 0:s.logs);if(u.length===0)throw new Error("TokensWrapped event not found");const l=u[0].args.tokenIdOfWrappedToken;return{id:l,receipt:s,data:()=>this.get(l)}}})}));p(this,"unwrap",k(async(r,e)=>{const n=await m(e||await this.contractWrapper.getSignerAddress());return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"unwrap",args:[r,n]})}));this.abi=T.parse(t||[]),this.metadata=new v(this.contractWrapper,y,this.storage),this.app=new I(this.contractWrapper,this.metadata,this.storage),this.roles=new U(this.contractWrapper,d.contractRoles),this.encoder=new E(this.contractWrapper),this.estimator=new R(this.contractWrapper),this.events=new $(this.contractWrapper),this.royalties=new F(this.contractWrapper,this.metadata),this.owner=new L(this.contractWrapper)}async getWrappedContents(r){const e=await this.contractWrapper.read("getWrappedContents",[r]),n=[],o=[],t=[];for(const a of e)switch(a.tokenType){case 0:{const s=await S(this.contractWrapper.getProvider(),a.assetContract);n.push({contractAddress:a.assetContract,quantity:b(a.totalAmount,s.decimals)});break}case 1:{o.push({contractAddress:a.assetContract,tokenId:a.tokenId});break}case 2:{t.push({contractAddress:a.assetContract,tokenId:a.tokenId,quantity:a.totalAmount.toString()});break}}return{erc20Tokens:n,erc721Tokens:o,erc1155Tokens:t}}async toTokenStructList(r){const e=[],n=this.contractWrapper.getProvider(),o=await this.contractWrapper.getSignerAddress();if(r.erc20Tokens)for(const t of r.erc20Tokens){const a=await P(n,t.quantity,t.contractAddress);if(!await q(this.contractWrapper,t.contractAddress,a))throw new Error(`ERC20 token with contract address "${t.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${t.contractAddress}").setAllowance("${this.getAddress()}", ${t.quantity});

`);e.push({assetContract:t.contractAddress,totalAmount:a,tokenId:0,tokenType:0})}if(r.erc721Tokens)for(const t of r.erc721Tokens){if(!await w(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,o))throw new Error(`ERC721 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${t.contractAddress}").setApprovalForToken("${this.getAddress()}", ${t.tokenId});

`);e.push({assetContract:t.contractAddress,totalAmount:0,tokenId:t.tokenId,tokenType:1})}if(r.erc1155Tokens)for(const t of r.erc1155Tokens){if(!await w(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,o))throw new Error(`ERC1155 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${t.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);e.push({assetContract:t.contractAddress,totalAmount:t.quantity,tokenId:t.tokenId,tokenType:2})}return e}async prepare(r,e,n){return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:r,args:e,overrides:n})}async call(r,e,n){return this.contractWrapper.call(r,e,n)}};p(d,"contractRoles",W);let g=d;export{g as Multiwrap};
