var it=Object.defineProperty;var ct=(h,t,r)=>t in h?it(h,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):h[t]=r;var c=(h,t,r)=>(ct(h,typeof t!="symbol"?t+"":t,r),r);import{F as ot,D as R,a as pt,u as F,g as M,b as $}from"./QueryParams-57e79923.browser.esm.95c2e768.js";import{ba as dt,s as v,a5 as y,R as d,U as g,bb as A,B as E,bc as Y,bd as J,be as j,bf as U,bg as G,bh as H,Y as P,bi as B,bj as K,bk as X,bl as q,bm as tt,bn as rt,at as lt,av as ht,bo as ut,t as k,bp as z,a6 as _,F as Z,af as at,aa as N,P as et,bq as mt,aE as gt,br as Wt,bs as yt,au as V,aD as Tt,aQ as ft,aK as wt}from"./index.63d6a091.js";import{a as W}from"./assertEnabled-f15292a2.browser.esm.bd2a0b65.js";import{h as f,d as m,C as Et}from"./contract-appuri-04bfc126.browser.esm.a030217c.js";import{D as Ct}from"./drop-claim-conditions-6965683b.browser.esm.e45fbd7e.js";import{c as bt,D as St}from"./contract-owner-d0899d6f.browser.esm.ced050be.js";import{B as It,C as Q,s as x}from"./setErc20Allowance-2030d581.browser.esm.75a2d3b6.js";import{j as Mt,k as At,m as kt,o as vt,B as Nt}from"./index.8a1c7d0b.js";class Rt{constructor(t){c(this,"featureName",j.name);c(this,"token",d(async t=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burn",args:[t]})));this.contractWrapper=t}}class Ft{constructor(t,r,a){c(this,"featureName",K.name);c(this,"to",d(async(t,r,a)=>{const n=await this.conditions.getClaimTransaction(t,r,a);return n.setParse(e=>{const i=this.contractWrapper.parseLogs("TokensClaimed",e==null?void 0:e.logs)[0].args.startTokenId,o=i.add(r),l=[];for(let p=i;p.lt(o);p=p.add(1))l.push({id:p,receipt:e,data:()=>this.erc721.get(p)});return l}),n}));this.erc721=t,this.contractWrapper=r,this.storage=a;const n=new Et(this.contractWrapper,ht,this.storage);this.conditions=new Ct(this.contractWrapper,n,this.storage)}}function Lt(h){return mt(gt.parse(h))}class _t{constructor(t,r){c(this,"featureName",ut.name);c(this,"to",d(async(t,r,a)=>{var p;const n=await((p=this.contractWrapper.getSigner())==null?void 0:p.getAddress());if(t!==n)throw new Error("Zora Drop: Destination address must match connected wallet address");if(a!=null&&a.pricePerToken)throw new Error("Zora Drop: Custom pricePerToken is not supported. Price is automatically calculated");const s=(await this.getSaleDetails()).publicSalePrice,i=Lt("0.000777"),o=E.from(s).add(i).mul(r),l=g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"purchase",args:[r],overrides:{value:o}});return l.setParse(u=>{const b=this.contractWrapper.parseLogs("Sale",u==null?void 0:u.logs)[0].args.firstPurchasedTokenId,L=b.add(r),I=[];for(let w=b;w.lt(L);w=w.add(1))I.push({id:w,receipt:u,data:()=>this.erc721.get(w)});return I}),l}));this.erc721=t,this.contractWrapper=r}async getSaleDetails(){return this.contractWrapper.read("saleDetails",[])}}class Ut{constructor(t,r){c(this,"featureName",B.name);c(this,"to",d(async(t,r,a)=>{const n=await this.getClaimTransaction(t,r,a);return n.setParse(e=>{const i=this.contractWrapper.parseLogs("TokensClaimed",e==null?void 0:e.logs)[0].args.startTokenId,o=i.add(r),l=[];for(let p=i;p.lt(o);p=p.add(1))l.push({id:p,receipt:e,data:()=>this.erc721.get(p)});return l}),n}));this.erc721=t,this.contractWrapper=r}async getClaimTransaction(t,r,a){let n={};return a&&a.pricePerToken&&(n=await bt(this.contractWrapper,a.pricePerToken,r,a.currencyAddress,a.checkERC20Allowance)),g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"claim",args:[t,r],overrides:n})}}class Bt{constructor(t,r,a){c(this,"featureName",G.name);c(this,"lazyMint",d(async(t,r)=>{const a=await this.erc721.nextTokenIdToMint(),n=await F(t,this.storage,a.toNumber(),r),e=M(n);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[n.length,e.endsWith("/")?e:`${e}/`,k("")],parse:s=>{const i=this.contractWrapper.parseLogs("TokensLazyMinted",s==null?void 0:s.logs),o=i[0].args.startTokenId,l=i[0].args.endTokenId,p=[];for(let u=o;u.lte(l);u=u.add(1))p.push({id:u,receipt:s,data:()=>this.erc721.getTokenMetadata(u)});return p}})}));this.erc721=t,this.contractWrapper=r,this.storage=a,this.revealer=this.detectErc721Revealable()}detectErc721Revealable(){if(m(this.contractWrapper,"ERC721Revealable"))return new St(this.contractWrapper,this.storage,tt.name,()=>this.erc721.nextTokenIdToMint())}}class xt{constructor(t){c(this,"featureName",U.name);c(this,"cancel",d(async t=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancel",args:[t]})));c(this,"revoke",d(async t=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"revoke",args:[t]})));this.contractWrapper=t}}class Dt{constructor(t,r){c(this,"featureName",H.name);c(this,"update",d(async(t,r)=>{const a=await $(r,this.storage);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setTokenURI",args:[t,a]})}));this.contractWrapper=t,this.storage=r}}class Ot{constructor(t,r,a){c(this,"featureName",J.name);c(this,"to",d(async(t,r)=>{const[a,n]=await Promise.all([F(r,this.storage),y(t)]),e=new et(this.contractWrapper),s=a.map(i=>e.encode("mintTo",[n,i]));return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[s],parse:i=>{const o=this.contractWrapper.parseLogs("TokensMinted",i.logs);if(o.length===0||o.length<r.length)throw new Error("TokenMinted event not found, minting failed");return o.map(l=>{const p=l.args.tokenIdMinted;return{id:p,receipt:i,data:()=>this.erc721.get(p)}})}})}));this.erc721=t,this.contractWrapper=r,this.storage=a}}class Pt{constructor(t,r,a){c(this,"featureName",Y.name);c(this,"to",d(async(t,r)=>{const[a,n]=await Promise.all([$(r,this.storage),y(t)]);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:[n,a],parse:e=>{const s=this.contractWrapper.parseLogs("Transfer",e==null?void 0:e.logs);if(s.length===0)throw new Error("TransferEvent event not found");const i=s[0].args.tokenId;return{id:i,receipt:e,data:()=>this.erc721.get(i)}}})}));this.erc721=t,this.contractWrapper=r,this.storage=a,this.batch=this.detectErc721BatchMintable()}async getMintTransaction(t,r){return this.to.prepare(await y(t),r)}detectErc721BatchMintable(){if(m(this.contractWrapper,"ERC721BatchMintable"))return new Ot(this.erc721,this.contractWrapper,this.storage)}}class zt{constructor(t,r){c(this,"featureName",rt.name);c(this,"set",d(async t=>{const r=It.parse(t);r.description=this.sanitizeJSONString(r.description);const a=[];z(r.image)?a.push(this.storage.upload(r.image)):typeof r.image=="string"?a.push(Promise.resolve(r.image)):a.push(Promise.resolve(void 0)),z(r.animation_url)?a.push(this.storage.upload(r.animation_url)):typeof r.animation_url=="string"?a.push(Promise.resolve(r.animation_url)):a.push(Promise.resolve(void 0));const[n,e]=await Promise.all(a);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setSharedMetadata",args:[{name:`${r.name||""}`,description:r.description||"",imageURI:n||"",animationURI:e||""}]})}));this.contractWrapper=t,this.storage=r}async get(){const t=await this.contractWrapper.read("sharedMetadata",[]);if(!t.every(r=>r===""))return{name:t.name,description:t.description,image:t.imageURI,animation_url:t.animationURI}}sanitizeJSONString(t){if(!t)return t;const r=JSON.stringify(t);return r.slice(1,r.length-1)}}class Zt{constructor(t,r){c(this,"featureName",Wt.name);this.erc721=t,this.contractWrapper=r}async all(t,r){let a=await this.tokenIds(t);if(r){const n=(r==null?void 0:r.start)||0,e=(r==null?void 0:r.count)||R;a=a.slice(n,n+e)}return await Promise.all(a.map(n=>this.erc721.get(n.toString())))}async tokenIds(t){const r=await y(t||await this.contractWrapper.getSignerAddress()),a=await this.contractWrapper.read("balanceOf",[r]),n=Array.from(Array(a.toNumber()).keys());return await Promise.all(n.map(e=>this.contractWrapper.read("tokenOfOwnerByIndex",[r,e])))}}class Vt{constructor(t,r){c(this,"featureName",yt.name);this.erc721=t,this.contractWrapper=r}async all(t,r){let a=await this.tokenIds(t);if(r){const n=(r==null?void 0:r.start)||0,e=(r==null?void 0:r.count)||R;a=a.slice(n,n+e)}return await Promise.all(a.map(n=>this.erc721.get(n.toString())))}async tokenIds(t){const r=await y(t||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.read("tokensOfOwner",[r])}}class Qt{constructor(t,r){c(this,"featureName",A.name);this.erc721=t,this.contractWrapper=r,this.owned=this.detectErc721Owned()}async all(t){let r=E.from(0);f("startTokenId",this.contractWrapper)&&(r=await this.contractWrapper.read("startTokenId",[]));const a=E.from((t==null?void 0:t.start)||0).add(r).toNumber(),n=E.from((t==null?void 0:t.count)||R).toNumber(),e=await this.erc721.nextTokenIdToMint(),s=Math.min(e.add(r).toNumber(),a+n);return await Promise.all([...Array(s-a).keys()].map(i=>this.erc721.get((a+i).toString())))}async allOwners(){let t,r=E.from(0);f("startTokenId",this.contractWrapper)&&(r=await this.contractWrapper.read("startTokenId",[]));try{t=await this.erc721.totalClaimedSupply()}catch{t=await this.totalCount()}t=t.add(r);const a=[...new Array(t.toNumber()).keys()],n=await Promise.all(a.map(e=>this.erc721.ownerOf(e).catch(()=>v)));return a.map(e=>({tokenId:e,owner:n[e]})).filter(e=>e.owner!==v)}async totalCount(){return await this.erc721.nextTokenIdToMint()}async totalCirculatingSupply(){return await this.contractWrapper.read("totalSupply",[])}detectErc721Owned(){if(m(this.contractWrapper,"ERC721Enumerable"))return new Zt(this.erc721,this.contractWrapper);if(m(this.contractWrapper,"ERC721AQueryable"))return new Vt(this.erc721,this.contractWrapper)}}const $t=(()=>Nt.extend({tierPriority:V.array(V.string()),royaltyRecipient:Tt.default(v),royaltyBps:ft.default(0),quantity:wt.default(1)}))(),Yt=[{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"},{name:"data",type:"bytes"}];class Jt{constructor(t,r,a){c(this,"featureName",X.name);c(this,"createBatchWithTier",d(async(t,r,a)=>{const n=await this.erc721.nextTokenIdToMint(),e=await F(t,this.storage,n.toNumber(),a),s=M(e);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[e.length,s.endsWith("/")?s:`${s}/`,r,k("")],parse:i=>{const o=this.contractWrapper.parseLogs("TokensLazyMinted",i==null?void 0:i.logs),l=o[0].args[1],p=o[0].args[2],u=[];for(let T=l;T.lte(p);T=T.add(1))u.push({id:T,receipt:i,data:()=>this.erc721.getTokenMetadata(T)});return u}})}));c(this,"createDelayedRevealBatchWithTier",d(async(t,r,a,n,e)=>{if(!a)throw new Error("Password is required");const s=await this.storage.uploadBatch([Q.parse(t)],{rewriteFileNames:{fileStartNumber:0}}),i=M(s),o=await this.erc721.nextTokenIdToMint(),l=await this.storage.uploadBatch(r.map(C=>Q.parse(C)),{onProgress:e==null?void 0:e.onProgress,rewriteFileNames:{fileStartNumber:o.toNumber()}}),p=M(l),u=await this.contractWrapper.read("getBaseURICount",[]),T=await this.contractWrapper.getChainID(),b=_(["string","uint256","uint256","address"],[a,T,u,this.contractWrapper.address]),L=await this.contractWrapper.read("encryptDecrypt",[k(p),b]),I=_(["bytes","bytes","uint256"],[k(p),b,T]),w=Z.encode(["bytes","bytes32"],[L,I]);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[l.length,i.endsWith("/")?i:`${i}/`,n,w],parse:C=>{const D=this.contractWrapper.parseLogs("TokensLazyMinted",C==null?void 0:C.logs),nt=D[0].args[1],st=D[0].args[2],O=[];for(let S=nt;S.lte(st);S=S.add(1))O.push({id:S,receipt:C,data:()=>this.erc721.getTokenMetadata(S)});return O}})}));c(this,"reveal",d(async(t,r)=>{if(!r)throw new Error("Password is required");const a=await this.contractWrapper.getChainID(),n=_(["string","uint256","uint256","address"],[r,a,t,this.contractWrapper.address]);try{const e=await this.contractWrapper.callStatic().reveal(t,n);if(!e.includes("://")||!e.endsWith("/"))throw new Error("invalid password")}catch{throw new Error("invalid password")}return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"reveal",args:[t,n]})}));this.erc721=t,this.contractWrapper=r,this.storage=a}async getMetadataInTier(t){const a=(await this.contractWrapper.read("getMetadataForAllTiers",[])).find(e=>e.tier===t);if(!a)throw new Error("Tier not found in contract.");return await Promise.all(a.ranges.map((e,s)=>{const i=[],o=a.baseURIs[s];for(let l=e.startIdInclusive.toNumber();l<e.endIdNonInclusive.toNumber();l++){const p=o.endsWith("/")?`${o}${l}`:`${o}/${l}`,u=this.storage.downloadJSON(p);i.push(u)}return i}).flat())}async getTokensInTier(t){const r=await this.contractWrapper.read("getTokensInTierLen",[]);if(r.eq(0))return[];const a=await this.contractWrapper.read("getTokensInTier",[t,0,r]);return await Promise.all(a.map(e=>{const s=[];for(let i=e.startIdInclusive.toNumber();i<e.endIdNonInclusive.toNumber();i++)s.push(this.erc721.get(i));return s}).flat())}async generate(t){const[r]=await this.generateBatch([t]);return r}async generateBatch(t){const r=await Promise.all(t.map(e=>$t.parseAsync(e))),a=await this.contractWrapper.getChainID(),n=this.contractWrapper.getSigner();return at(n,"No signer available"),await Promise.all(r.map(async e=>{const s=await this.contractWrapper.signTypedData(n,{name:"SignatureAction",version:"1",chainId:a,verifyingContract:this.contractWrapper.address},{GenericRequest:Yt},await this.mapPayloadToContractStruct(e));return{payload:e,signature:s.toString()}}))}async verify(t){const r=await this.mapPayloadToContractStruct(t.payload);return(await this.contractWrapper.read("verify",[r,t.signature]))[0]}async claimWithSignature(t){const r=await this.mapPayloadToContractStruct(t.payload),a=await N(this.contractWrapper.getProvider(),t.payload.price,t.payload.currencyAddress),n=await this.contractWrapper.getCallOverrides();await x(this.contractWrapper,a,t.payload.currencyAddress,n);const e=await this.contractWrapper.sendTransaction("claimWithSignature",[r,t.signature],n),s=this.contractWrapper.parseLogs("TokensClaimed",e==null?void 0:e.logs),i=s[0].args.startTokenId,o=i.add(s[0].args.quantityClaimed),l=[];for(let p=i;p.lt(o);p=p.add(1))l.push({id:p,receipt:e,data:()=>this.erc721.get(p)});return l}async mapPayloadToContractStruct(t){const r=await N(this.contractWrapper.getProvider(),t.price,t.currencyAddress),a=Z.encode(["string[]","address","address","uint256","address","uint256","uint256","address"],[t.tierPriority,t.to,t.royaltyRecipient,t.royaltyBps,t.primarySaleRecipient,t.quantity,r,t.currencyAddress]);return{uid:t.uid,validityStartTimestamp:t.mintStartTime,validityEndTimestamp:t.mintEndTime,data:a}}}class jt{constructor(t,r){c(this,"featureName",q.name);c(this,"mint",d(async t=>{const r=t.payload,a=t.signature,n=await this.contractWrapper.getCallOverrides(),e=s=>{const i=this.contractWrapper.parseLogs("TokensMintedWithSignature",s.logs);if(i.length===0)throw new Error("No MintWithSignature event found");return{id:i[0].args.tokenIdMinted,receipt:s}};if(await this.isLegacyNFTContract()){const s=await this.mapLegacyPayloadToContractStruct(r),i=s.price;return await x(this.contractWrapper,i,r.currencyAddress,n),g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[s,a],overrides:n,parse:e})}else{const s=await this.mapPayloadToContractStruct(r),i=s.pricePerToken.mul(s.quantity);return await x(this.contractWrapper,i,r.currencyAddress,n),g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[s,a],overrides:n,parse:e})}}));c(this,"mintBatch",d(async t=>{const r=await this.isLegacyNFTContract(),a=(await Promise.all(t.map(s=>r?this.mapLegacyPayloadToContractStruct(s.payload):this.mapPayloadToContractStruct(s.payload)))).map((s,i)=>{const o=t[i],l=o.signature,p=o.payload.price;if(E.from(p).gt(0))throw new Error("Can only batch free mints. For mints with a price, use regular mint()");return{message:s,signature:l}}),n=new et(this.contractWrapper),e=a.map(s=>r?n.encode("mintWithSignature",[s.message,s.signature]):n.encode("mintWithSignature",[s.message,s.signature]));if(f("multicall",this.contractWrapper))return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[e],parse:s=>{const i=this.contractWrapper.parseLogs("TokensMintedWithSignature",s.logs);if(i.length===0)throw new Error("No MintWithSignature event found");return i.map(o=>({id:o.args.tokenIdMinted,receipt:s}))}});throw new Error("Multicall not available on this contract!")}));this.contractWrapper=t,this.storage=r}async verify(t){const r=await this.isLegacyNFTContract(),a=t.payload,n=t.signature;let e,s;return r?(e=await this.mapLegacyPayloadToContractStruct(a),s=await this.contractWrapper.read("verify",[e,n])):(e=await this.mapPayloadToContractStruct(a),s=await this.contractWrapper.read("verify",[e,n])),s[0]}async generate(t){return(await this.generateBatch([t]))[0]}async generateBatch(t){const r=await this.isLegacyNFTContract(),a=await Promise.all(t.map(o=>Mt.parseAsync(o))),n=a.map(o=>o.metadata),e=await F(n,this.storage),s=await this.contractWrapper.getChainID(),i=this.contractWrapper.getSigner();return at(i,"No signer available"),await Promise.all(a.map(async(o,l)=>{const p=e[l],u=await At.parseAsync({...o,uri:p});let T;return r?T=await this.contractWrapper.signTypedData(i,{name:"TokenERC721",version:"1",chainId:s,verifyingContract:this.contractWrapper.address},{MintRequest:kt},await this.mapLegacyPayloadToContractStruct(u)):T=await this.contractWrapper.signTypedData(i,{name:"SignatureMintERC721",version:"1",chainId:s,verifyingContract:await this.contractWrapper.address},{MintRequest:vt},await this.mapPayloadToContractStruct(u)),{payload:u,signature:T.toString()}}))}async mapPayloadToContractStruct(t){const r=await N(this.contractWrapper.getProvider(),t.price,t.currencyAddress);return{to:t.to,royaltyRecipient:t.royaltyRecipient,royaltyBps:t.royaltyBps,primarySaleRecipient:t.primarySaleRecipient,uri:t.uri,quantity:t.quantity,pricePerToken:r,currency:t.currencyAddress,validityStartTimestamp:t.mintStartTime,validityEndTimestamp:t.mintEndTime,uid:t.uid}}async mapLegacyPayloadToContractStruct(t){const r=await N(this.contractWrapper.getProvider(),t.price,t.currencyAddress);return{to:t.to,price:r,uri:t.uri,currency:t.currencyAddress,validityEndTimestamp:t.mintEndTime,validityStartTimestamp:t.mintStartTime,uid:t.uid,royaltyRecipient:t.royaltyRecipient,royaltyBps:t.royaltyBps,primarySaleRecipient:t.primarySaleRecipient}}async isLegacyNFTContract(){return m(this.contractWrapper,"ERC721SignatureMintV1")}}class nr{constructor(t,r,a){c(this,"featureName",dt.name);c(this,"transfer",d(async(t,r)=>{const[a,n]=await Promise.all([this.contractWrapper.getSignerAddress(),y(t)]);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom(address,address,uint256)",args:[a,n,r]})}));c(this,"transferFrom",d(async(t,r,a)=>{const[n,e]=await Promise.all([y(t),y(r)]);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom(address,address,uint256)",args:[n,e,a]})}));c(this,"setApprovalForAll",d(async(t,r)=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setApprovalForAll",args:[await y(t),r]})));c(this,"setApprovalForToken",d(async(t,r)=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await y(t),r]})));c(this,"mint",d(async t=>this.mintTo.prepare(await this.contractWrapper.getSignerAddress(),t)));c(this,"mintTo",d(async(t,r)=>W(this.mintable,Y).to.prepare(t,r)));c(this,"mintBatch",d(async t=>this.mintBatchTo.prepare(await this.contractWrapper.getSignerAddress(),t)));c(this,"mintBatchTo",d(async(t,r)=>{var a;return W((a=this.mintable)==null?void 0:a.batch,J).to.prepare(t,r)}));c(this,"burn",d(async t=>W(this.burnable,j).token.prepare(t)));c(this,"cancel",d(async t=>W(this.loyaltyCard,U).cancel.prepare(t)));c(this,"revoke",d(async t=>W(this.loyaltyCard,U).revoke.prepare(t)));c(this,"lazyMint",d(async(t,r)=>W(this.lazyMintable,G).lazyMint.prepare(t,r)));c(this,"update",d(async(t,r)=>W(this.updatableMetadata,H).update.prepare(t,r)));c(this,"claim",d(async(t,r)=>this.claimTo.prepare(await this.contractWrapper.getSignerAddress(),t,r)));c(this,"claimTo",d(async(t,r,a)=>{const n=this.claimWithConditions,e=this.claimCustom,s=this.claimZora;if(n)return n.to.prepare(t,r,a);if(e)return e.to.prepare(t,r,a);if(s)return s.to.prepare(t,r,a);throw new P(B)}));this.contractWrapper=t,this.storage=r,this.query=this.detectErc721Enumerable(),this.mintable=this.detectErc721Mintable(),this.burnable=this.detectErc721Burnable(),this.lazyMintable=this.detectErc721LazyMintable(),this.tieredDropable=this.detectErc721TieredDrop(),this.signatureMintable=this.detectErc721SignatureMintable(),this.claimWithConditions=this.detectErc721ClaimableWithConditions(),this.claimCustom=this.detectErc721Claimable(),this.claimZora=this.detectErc721ClaimableZora(),this.erc721SharedMetadata=this.detectErc721SharedMetadata(),this.loyaltyCard=this.detectErc721LoyaltyCard(),this.updatableMetadata=this.detectErc721UpdatableMetadata(),this._chainId=a}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){const[r,a]=await Promise.all([this.ownerOf(t).catch(()=>v),this.getTokenMetadata(t).catch(()=>({id:t.toString(),uri:"",...ot}))]);return{owner:r,metadata:a,type:"ERC721",supply:"1"}}async ownerOf(t){return await this.contractWrapper.read("ownerOf",[t])}async balanceOf(t){return await this.contractWrapper.read("balanceOf",[await y(t)])}async balance(){return await this.balanceOf(await this.contractWrapper.getSignerAddress())}async isApproved(t,r){const[a,n]=await Promise.all([y(t),y(r)]);return await this.contractWrapper.read("isApprovedForAll",[a,n])}async getAll(t){return W(this.query,A).all(t)}async getAllOwners(){return W(this.query,A).allOwners()}async totalCount(){return this.nextTokenIdToMint()}async totalCirculatingSupply(){return W(this.query,A).totalCirculatingSupply()}async getOwned(t,r){var a;if(t&&(t=await y(t)),(a=this.query)!=null&&a.owned)return this.query.owned.all(t,r);{const[n,e]=await Promise.all([t||this.contractWrapper.getSignerAddress(),this.getAllOwners()]);let s=(e||[]).filter(i=>{var o;return(n==null?void 0:n.toLowerCase())===((o=i.owner)==null?void 0:o.toLowerCase())});if(r){const i=(r==null?void 0:r.start)||0,o=(r==null?void 0:r.count)||R;s=s.slice(i,i+o)}return await Promise.all(s.map(async i=>this.get(i.tokenId)))}}async getOwnedTokenIds(t){var r;if(t&&(t=await y(t)),(r=this.query)!=null&&r.owned)return this.query.owned.tokenIds(t);{const[a,n]=await Promise.all([t||this.contractWrapper.getSignerAddress(),this.getAllOwners()]);return(n||[]).filter(e=>{var s;return(a==null?void 0:a.toLowerCase())===((s=e.owner)==null?void 0:s.toLowerCase())}).map(e=>E.from(e.tokenId))}}async getMintTransaction(t,r){return this.mintTo.prepare(t,r)}async getClaimTransaction(t,r,a){const n=this.claimWithConditions,e=this.claimCustom;if(n)return n.conditions.getClaimTransaction(t,r,a);if(e)return e.getClaimTransaction(t,r,a);throw new P(B)}async totalClaimedSupply(){const t=this.contractWrapper;if(f("totalMinted",t))return this.contractWrapper.read("totalMinted",[]);if(f("nextTokenIdToClaim",t))return this.contractWrapper.read("nextTokenIdToClaim",[]);throw new Error("No function found on contract to get total claimed supply")}async totalUnclaimedSupply(){const[t,r]=await Promise.all([this.nextTokenIdToMint(),this.totalClaimedSupply()]);return t.sub(r)}get claimConditions(){return W(this.claimWithConditions,K).conditions}get tieredDrop(){return W(this.tieredDropable,X)}get signature(){return W(this.signatureMintable,q)}get revealer(){var t;return W((t=this.lazyMintable)==null?void 0:t.revealer,tt)}get sharedMetadata(){return W(this.erc721SharedMetadata,rt)}async getTokenMetadata(t){const r=await this.contractWrapper.read("tokenURI",[t]);if(!r)throw new lt;return pt(t,r,this.storage)}async nextTokenIdToMint(){if(f("nextTokenIdToMint",this.contractWrapper)){let t=await this.contractWrapper.read("nextTokenIdToMint",[]);return f("startTokenId",this.contractWrapper)&&(t=t.sub(await this.contractWrapper.read("startTokenId",[]))),t}else{if(f("totalSupply",this.contractWrapper))return await this.contractWrapper.read("totalSupply",[]);throw new Error("Contract requires either `nextTokenIdToMint` or `totalSupply` function available to determine the next token ID to mint")}}detectErc721Enumerable(){if(m(this.contractWrapper,"ERC721Supply")||f("nextTokenIdToMint",this.contractWrapper))return new Qt(this,this.contractWrapper)}detectErc721Mintable(){if(m(this.contractWrapper,"ERC721Mintable"))return new Pt(this,this.contractWrapper,this.storage)}detectErc721Burnable(){if(m(this.contractWrapper,"ERC721Burnable"))return new Rt(this.contractWrapper)}detectErc721LazyMintable(){if(m(this.contractWrapper,"ERC721LazyMintable"))return new Bt(this,this.contractWrapper,this.storage)}detectErc721TieredDrop(){if(m(this.contractWrapper,"ERC721TieredDrop"))return new Jt(this,this.contractWrapper,this.storage)}detectErc721SignatureMintable(){if(m(this.contractWrapper,"ERC721SignatureMintV1")||m(this.contractWrapper,"ERC721SignatureMintV2"))return new jt(this.contractWrapper,this.storage)}detectErc721ClaimableWithConditions(){if(m(this.contractWrapper,"ERC721ClaimConditionsV1")||m(this.contractWrapper,"ERC721ClaimConditionsV2")||m(this.contractWrapper,"ERC721ClaimPhasesV1")||m(this.contractWrapper,"ERC721ClaimPhasesV2"))return new Ft(this,this.contractWrapper,this.storage)}detectErc721Claimable(){if(m(this.contractWrapper,"ERC721ClaimCustom"))return new Ut(this,this.contractWrapper)}detectErc721ClaimableZora(){if(m(this.contractWrapper,"ERC721ClaimZora"))return new _t(this,this.contractWrapper)}detectErc721SharedMetadata(){if(m(this.contractWrapper,"ERC721SharedMetadata"))return new zt(this.contractWrapper,this.storage)}detectErc721LoyaltyCard(){if(m(this.contractWrapper,"ERC721LoyaltyCard"))return new xt(this.contractWrapper)}detectErc721UpdatableMetadata(){if(m(this.contractWrapper,"ERC721UpdatableMetadata"))return new Dt(this.contractWrapper,this.storage)}}export{nr as E,jt as a};
