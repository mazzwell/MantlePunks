import{p as a,a1 as f,q as E,$ as R,F as u,B as _,bh as C}from"./index-0768f114.js";import{I as T,a as y,D as m}from"./QueryParams-57e79923.browser.esm-393def7e.js";async function h(e,i,t,n,l){try{const d=(await a(()=>import("./IERC165-acb33597.js"),[],import.meta.url)).default,c=new f(t,d,e),[v,A]=await Promise.all([c.supportsInterface(T),c.supportsInterface(y)]);if(v){const s=(await a(()=>import("./index-0768f114.js").then(w=>w.d_),["./index-0768f114.js","./index-d1f160c6.css"],import.meta.url)).default,o=new f(t,s,e);if(await o.isApprovedForAll(l,i))return!0;let r;try{r=await o.getApproved(n)}catch{}return(r==null?void 0:r.toLowerCase())===i.toLowerCase()}else if(A){const s=(await a(()=>import("./index-0768f114.js").then(p=>p.e0),["./index-0768f114.js","./index-d1f160c6.css"],import.meta.url)).default;return await new f(t,s,e).isApprovedForAll(l,i)}else return console.error("Contract does not implement ERC 1155 or ERC 721."),!1}catch(d){return console.error("Failed to check if token is approved",d),!1}}async function g(e,i,t,n,l){const d=(await a(()=>import("./IERC165-acb33597.js"),[],import.meta.url)).default,c=new E(e.getSignerOrProvider(),t,d,e.options,e.storage),[v,A]=await Promise.all([c.read("supportsInterface",[T]),c.read("supportsInterface",[y])]);if(v){const s=(await a(()=>import("./index-0768f114.js").then(r=>r.d_),["./index-0768f114.js","./index-d1f160c6.css"],import.meta.url)).default,o=new E(e.getSignerOrProvider(),t,s,e.options,e.storage);await o.read("isApprovedForAll",[l,i])||(await o.read("getApproved",[n])).toLowerCase()===i.toLowerCase()||await o.sendTransaction("setApprovalForAll",[i,!0])}else if(A){const s=(await a(()=>import("./index-0768f114.js").then(r=>r.e0),["./index-0768f114.js","./index-d1f160c6.css"],import.meta.url)).default,o=new E(e.getSignerOrProvider(),t,s,e.options,e.storage);await o.read("isApprovedForAll",[l,i])||await o.sendTransaction("setApprovalForAll",[i,!0])}else throw Error("Contract must implement ERC 1155 or ERC 721.")}function q(e){switch(u(e.assetContractAddress!==void 0&&e.assetContractAddress!==null,"Asset contract address is required"),u(e.buyoutPricePerToken!==void 0&&e.buyoutPricePerToken!==null,"Buyout price is required"),u(e.listingDurationInSeconds!==void 0&&e.listingDurationInSeconds!==null,"Listing duration is required"),u(e.startTimestamp!==void 0&&e.startTimestamp!==null,"Start time is required"),u(e.tokenId!==void 0&&e.tokenId!==null,"Token ID is required"),u(e.quantity!==void 0&&e.quantity!==null,"Quantity is required"),e.type){case"NewAuctionListing":u(e.reservePricePerToken!==void 0&&e.reservePricePerToken!==null,"Reserve price is required")}}async function L(e,i,t){return{quantity:t.quantityDesired,pricePerToken:t.pricePerToken,currencyContractAddress:t.currency,buyerAddress:t.offeror,quantityDesired:t.quantityWanted,currencyValue:await R(e,t.currency,t.quantityWanted.mul(t.pricePerToken)),listingId:i}}function b(e,i,t){return t=_.from(t),e=_.from(e),i=_.from(i),e.eq(_.from(0))?!1:i.sub(e).mul(C).div(e).gte(t)}async function D(e,i,t){const n=[];for(;i-e>m;)n.push(t(e,e+m-1)),e+=m;return n.push(t(e,i-1)),await Promise.all(n)}export{h as a,D as g,g as h,b as i,L as m,q as v};