var F=Object.defineProperty;var b=(i,e,t)=>e in i?F(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var d=(i,e,t)=>(b(i,typeof e!="symbol"?e+"":e,t),t);import{aF as N,F as l,au as k,v as u,y as w,u as M,K as p,T as R,aG as S}from"./index-0768f114.js";class T{constructor(e,t){d(this,"featureName",N.name);d(this,"setAll",w(async(e,t)=>{var y,A;const r=t||await this.contractWrapper.getSignerAddress(),s=new M(this.contractWrapper),a=Object.keys(e);l(a.length,"you must provide at least one role to set"),l(a.every(n=>this.roles.includes(n)),"this contract does not support the given role");const m=await this.getAll(),g=[],v=a.sort(n=>n==="admin"?1:-1);for(let n=0;n<v.length;n++){const h=v[n],[W,C]=await Promise.all([Promise.all(((y=e[h])==null?void 0:y.map(o=>p(o)))||[]),Promise.all(((A=m[h])==null?void 0:A.map(o=>p(o)))||[])]),P=W.filter(o=>!C.includes(o)),c=C.filter(o=>!W.includes(o));if(c.length>1){const o=c.indexOf(r);o>-1&&(c.splice(o,1),c.push(r))}P.length&&P.forEach(o=>{g.push(s.encode("grantRole",[u(h),o]))}),c.length&&(await Promise.all(c.map(f=>this.getRevokeRoleFunctionName(f)))).forEach((f,E)=>g.push(s.encode(f,[u(h),c[E]])))}return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[g]})}));d(this,"grant",w(async(e,t)=>{l(this.roles.includes(e),`this contract does not support the "${e}" role`);const r=await p(t);return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:"grantRole",args:[u(e),r]})}));d(this,"revoke",w(async(e,t)=>{l(this.roles.includes(e),`this contract does not support the "${e}" role`);const r=await p(t),s=await this.getRevokeRoleFunctionName(r);return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:s,args:[u(e),r]})}));this.contractWrapper=e,this.roles=t}async getAll(){l(this.roles.length,"this contract has no support for roles");const e={},t=Object.entries(this.roles);return(await Promise.all(t.map(r=>{let[,s]=r;return this.get(s)}))).forEach((r,s)=>e[t[s][1]]=r),e}async get(e){l(this.roles.includes(e),`this contract does not support the "${e}" role`);const t=this.contractWrapper;if(k("getRoleMemberCount",t)&&k("getRoleMember",t)){const r=u(e),s=(await t.read("getRoleMemberCount",[r])).toNumber();return await Promise.all(Array.from(Array(s).keys()).map(a=>t.read("getRoleMember",[r,a])))}throw new Error("Contract does not support enumerating roles. Please implement IPermissionsEnumerable to unlock this functionality.")}async verify(e,t){await Promise.all(e.map(async r=>{const[s,a]=await Promise.all([this.get(r),p(t)]);if(!s.map(m=>m.toLowerCase()).includes(a.toLowerCase()))throw new S(a,r)}))}async getRevokeRoleFunctionName(e){const[t,r]=await Promise.all([p(e),this.contractWrapper.getSignerAddress()]);return r.toLowerCase()===t.toLowerCase()?"renounceRole":"revokeRole"}}export{T as C};
