import{a8 as u,a9 as A,K as E,aO as C,af as a,B as p,b4 as I}from"./index.63d6a091.js";import{I as y,c as R,D as w}from"./QueryParams-57e79923.browser.esm.95c2e768.js";async function h(e,i,t,s,d){try{const l=(await u(()=>import("./IERC165.4b3b20df.js"),[])).default,c=new A(t,l,e),[f,v]=await Promise.all([c.supportsInterface(y),c.supportsInterface(R)]);if(f){const r=(await u(()=>import("./index.63d6a091.js").then(T=>T.dx),["assets/index.63d6a091.js","assets/index.8ee28ded.css"])).default,n=new A(t,r,e);if(await n.isApprovedForAll(d,i))return!0;let o;try{o=await n.getApproved(s)}catch{}return(o==null?void 0:o.toLowerCase())===i.toLowerCase()}else if(v){const r=(await u(()=>import("./index.63d6a091.js").then(_=>_.dz),["assets/index.63d6a091.js","assets/index.8ee28ded.css"])).default;return await new A(t,r,e).isApprovedForAll(d,i)}else return console.error("Contract does not implement ERC 1155 or ERC 721."),!1}catch(l){return console.error("Failed to check if token is approved",l),!1}}async function L(e,i,t,s,d){const l=(await u(()=>import("./IERC165.4b3b20df.js"),[])).default,c=new E(e.getSignerOrProvider(),t,l,e.options,e.storage),[f,v]=await Promise.all([c.read("supportsInterface",[y]),c.read("supportsInterface",[R])]);if(f){const r=(await u(()=>import("./index.63d6a091.js").then(o=>o.dx),["assets/index.63d6a091.js","assets/index.8ee28ded.css"])).default,n=new E(e.getSignerOrProvider(),t,r,e.options,e.storage);await n.read("isApprovedForAll",[d,i])||(await n.read("getApproved",[s])).toLowerCase()===i.toLowerCase()||await n.sendTransaction("setApprovalForAll",[i,!0])}else if(v){const r=(await u(()=>import("./index.63d6a091.js").then(o=>o.dz),["assets/index.63d6a091.js","assets/index.8ee28ded.css"])).default,n=new E(e.getSignerOrProvider(),t,r,e.options,e.storage);await n.read("isApprovedForAll",[d,i])||await n.sendTransaction("setApprovalForAll",[i,!0])}else throw Error("Contract must implement ERC 1155 or ERC 721.")}function q(e){switch(a(e.assetContractAddress!==void 0&&e.assetContractAddress!==null,"Asset contract address is required"),a(e.buyoutPricePerToken!==void 0&&e.buyoutPricePerToken!==null,"Buyout price is required"),a(e.listingDurationInSeconds!==void 0&&e.listingDurationInSeconds!==null,"Listing duration is required"),a(e.startTimestamp!==void 0&&e.startTimestamp!==null,"Start time is required"),a(e.tokenId!==void 0&&e.tokenId!==null,"Token ID is required"),a(e.quantity!==void 0&&e.quantity!==null,"Quantity is required"),e.type){case"NewAuctionListing":a(e.reservePricePerToken!==void 0&&e.reservePricePerToken!==null,"Reserve price is required")}}async function m(e,i,t){return{quantity:t.quantityDesired,pricePerToken:t.pricePerToken,currencyContractAddress:t.currency,buyerAddress:t.offeror,quantityDesired:t.quantityWanted,currencyValue:await C(e,t.currency,t.quantityWanted.mul(t.pricePerToken)),listingId:i}}function b(e,i,t){return t=p.from(t),e=p.from(e),i=p.from(i),e.eq(p.from(0))?!1:i.sub(e).mul(I).div(e).gte(t)}async function D(e,i,t){const s=[];for(;i-e>w;)s.push(t(e,e+w-1)),e+=w;return s.push(t(e,i-1)),await Promise.all(s)}export{h as a,D as g,L as h,b as i,m,q as v};
