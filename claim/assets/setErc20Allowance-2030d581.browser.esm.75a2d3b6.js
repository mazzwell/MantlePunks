import{aB as _,a8 as f,K as I,au as n,aG as l,aH as N,aI as c}from"./index.63d6a091.js";const r=(()=>n.object({}).catchall(n.union([c,n.unknown()])))(),u=(()=>n.union([n.array(r),r]).optional().nullable())(),h=(()=>n.object({name:n.union([n.string(),n.number()]).optional().nullable(),description:n.string().nullable().optional().nullable(),image:l.nullable().optional(),animation_url:l.optional().nullable()}))(),p=(()=>h.extend({external_url:l.nullable().optional(),background_color:N.optional().nullable(),properties:u,attributes:u}).catchall(n.union([c,n.unknown()])))(),O=(()=>n.union([p,n.string()]))(),S=(()=>p.extend({id:n.string(),uri:n.string(),image:n.string().nullable().optional(),external_url:n.string().nullable().optional(),animation_url:n.string().nullable().optional()}))();async function B(a,t,e,o){if(_(e))o.value=t;else{const g=(await f(()=>import("./index.63d6a091.js").then(w=>w.dw),["assets/index.63d6a091.js","assets/index.8ee28ded.css"])).default,b=a.getSigner(),m=a.getProvider(),i=new I(b||m,e,g,a.options,a.storage),d=await a.getSignerAddress(),s=a.address;return(await i.read("allowance",[d,s])).lt(t)&&await i.sendTransaction("approve",[s,t]),o}}export{h as B,p as C,O as N,S as a,B as s};