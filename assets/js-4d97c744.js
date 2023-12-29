import{cG as rs,cT as Ke,b as j}from"./index-e9dc9249.js";var he,Xe;function is(){return Xe||(Xe=1,he=function(t){t.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}),he}var ns=d;d.Node=q;d.create=d;function d(t){var e=this;if(e instanceof d||(e=new d),e.tail=null,e.head=null,e.length=0,t&&typeof t.forEach=="function")t.forEach(function(i){e.push(i)});else if(arguments.length>0)for(var s=0,r=arguments.length;s<r;s++)e.push(arguments[s]);return e}d.prototype.removeNode=function(t){if(t.list!==this)throw new Error("removing node which does not belong to this list");var e=t.next,s=t.prev;return e&&(e.prev=s),s&&(s.next=e),t===this.head&&(this.head=e),t===this.tail&&(this.tail=s),t.list.length--,t.next=null,t.prev=null,t.list=null,e};d.prototype.unshiftNode=function(t){if(t!==this.head){t.list&&t.list.removeNode(t);var e=this.head;t.list=this,t.next=e,e&&(e.prev=t),this.head=t,this.tail||(this.tail=t),this.length++}};d.prototype.pushNode=function(t){if(t!==this.tail){t.list&&t.list.removeNode(t);var e=this.tail;t.list=this,t.prev=e,e&&(e.next=t),this.tail=t,this.head||(this.head=t),this.length++}};d.prototype.push=function(){for(var t=0,e=arguments.length;t<e;t++)hs(this,arguments[t]);return this.length};d.prototype.unshift=function(){for(var t=0,e=arguments.length;t<e;t++)os(this,arguments[t]);return this.length};d.prototype.pop=function(){if(this.tail){var t=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,t}};d.prototype.shift=function(){if(this.head){var t=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,t}};d.prototype.forEach=function(t,e){e=e||this;for(var s=this.head,r=0;s!==null;r++)t.call(e,s.value,r,this),s=s.next};d.prototype.forEachReverse=function(t,e){e=e||this;for(var s=this.tail,r=this.length-1;s!==null;r--)t.call(e,s.value,r,this),s=s.prev};d.prototype.get=function(t){for(var e=0,s=this.head;s!==null&&e<t;e++)s=s.next;if(e===t&&s!==null)return s.value};d.prototype.getReverse=function(t){for(var e=0,s=this.tail;s!==null&&e<t;e++)s=s.prev;if(e===t&&s!==null)return s.value};d.prototype.map=function(t,e){e=e||this;for(var s=new d,r=this.head;r!==null;)s.push(t.call(e,r.value,this)),r=r.next;return s};d.prototype.mapReverse=function(t,e){e=e||this;for(var s=new d,r=this.tail;r!==null;)s.push(t.call(e,r.value,this)),r=r.prev;return s};d.prototype.reduce=function(t,e){var s,r=this.head;if(arguments.length>1)s=e;else if(this.head)r=this.head.next,s=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=0;r!==null;i++)s=t(s,r.value,i),r=r.next;return s};d.prototype.reduceReverse=function(t,e){var s,r=this.tail;if(arguments.length>1)s=e;else if(this.tail)r=this.tail.prev,s=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=this.length-1;r!==null;i--)s=t(s,r.value,i),r=r.prev;return s};d.prototype.toArray=function(){for(var t=new Array(this.length),e=0,s=this.head;s!==null;e++)t[e]=s.value,s=s.next;return t};d.prototype.toArrayReverse=function(){for(var t=new Array(this.length),e=0,s=this.tail;s!==null;e++)t[e]=s.value,s=s.prev;return t};d.prototype.slice=function(t,e){e=e||this.length,e<0&&(e+=this.length),t=t||0,t<0&&(t+=this.length);var s=new d;if(e<t||e<0)return s;t<0&&(t=0),e>this.length&&(e=this.length);for(var r=0,i=this.head;i!==null&&r<t;r++)i=i.next;for(;i!==null&&r<e;r++,i=i.next)s.push(i.value);return s};d.prototype.sliceReverse=function(t,e){e=e||this.length,e<0&&(e+=this.length),t=t||0,t<0&&(t+=this.length);var s=new d;if(e<t||e<0)return s;t<0&&(t=0),e>this.length&&(e=this.length);for(var r=this.length,i=this.tail;i!==null&&r>e;r--)i=i.prev;for(;i!==null&&r>t;r--,i=i.prev)s.push(i.value);return s};d.prototype.splice=function(t,e,...s){t>this.length&&(t=this.length-1),t<0&&(t=this.length+t);for(var r=0,i=this.head;i!==null&&r<t;r++)i=i.next;for(var a=[],r=0;i&&r<e;r++)a.push(i.value),i=this.removeNode(i);i===null&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(var r=0;r<s.length;r++)i=as(this,i,s[r]);return a};d.prototype.reverse=function(){for(var t=this.head,e=this.tail,s=t;s!==null;s=s.prev){var r=s.prev;s.prev=s.next,s.next=r}return this.head=e,this.tail=t,this};function as(t,e,s){var r=e===t.head?new q(s,null,e,t):new q(s,e,e.next,t);return r.next===null&&(t.tail=r),r.prev===null&&(t.head=r),t.length++,r}function hs(t,e){t.tail=new q(e,t.tail,null,t),t.head||(t.head=t.tail),t.length++}function os(t,e){t.head=new q(e,null,t.head,t),t.tail||(t.tail=t.head),t.length++}function q(t,e,s,r){if(!(this instanceof q))return new q(t,e,s,r);this.list=r,this.value=t,e?(e.next=this,this.prev=e):this.prev=null,s?(s.prev=this,this.next=s):this.next=null}try{is()(d)}catch{}const ls=ns,z=Symbol("max"),F=Symbol("length"),B=Symbol("lengthCalculator"),K=Symbol("allowStale"),U=Symbol("maxAge"),C=Symbol("dispose"),ze=Symbol("noDisposeOnSet"),y=Symbol("lruList"),b=Symbol("cache"),Ze=Symbol("updateAgeOnGet"),oe=()=>1;class cs{constructor(e){if(typeof e=="number"&&(e={max:e}),e||(e={}),e.max&&(typeof e.max!="number"||e.max<0))throw new TypeError("max must be a non-negative number");this[z]=e.max||1/0;const s=e.length||oe;if(this[B]=typeof s!="function"?oe:s,this[K]=e.stale||!1,e.maxAge&&typeof e.maxAge!="number")throw new TypeError("maxAge must be a number");this[U]=e.maxAge||0,this[C]=e.dispose,this[ze]=e.noDisposeOnSet||!1,this[Ze]=e.updateAgeOnGet||!1,this.reset()}set max(e){if(typeof e!="number"||e<0)throw new TypeError("max must be a non-negative number");this[z]=e||1/0,Y(this)}get max(){return this[z]}set allowStale(e){this[K]=!!e}get allowStale(){return this[K]}set maxAge(e){if(typeof e!="number")throw new TypeError("maxAge must be a non-negative number");this[U]=e,Y(this)}get maxAge(){return this[U]}set lengthCalculator(e){typeof e!="function"&&(e=oe),e!==this[B]&&(this[B]=e,this[F]=0,this[y].forEach(s=>{s.length=this[B](s.value,s.key),this[F]+=s.length})),Y(this)}get lengthCalculator(){return this[B]}get length(){return this[F]}get itemCount(){return this[y].length}rforEach(e,s){s=s||this;for(let r=this[y].tail;r!==null;){const i=r.prev;Ue(this,e,r,s),r=i}}forEach(e,s){s=s||this;for(let r=this[y].head;r!==null;){const i=r.next;Ue(this,e,r,s),r=i}}keys(){return this[y].toArray().map(e=>e.key)}values(){return this[y].toArray().map(e=>e.value)}reset(){this[C]&&this[y]&&this[y].length&&this[y].forEach(e=>this[C](e.key,e.value)),this[b]=new Map,this[y]=new ls,this[F]=0}dump(){return this[y].map(e=>ht(this,e)?!1:{k:e.key,v:e.value,e:e.now+(e.maxAge||0)}).toArray().filter(e=>e)}dumpLru(){return this[y]}set(e,s,r){if(r=r||this[U],r&&typeof r!="number")throw new TypeError("maxAge must be a number");const i=r?Date.now():0,a=this[B](s,e);if(this[b].has(e)){if(a>this[z])return V(this,this[b].get(e)),!1;const n=this[b].get(e).value;return this[C]&&(this[ze]||this[C](e,n.value)),n.now=i,n.maxAge=r,n.value=s,this[F]+=a-n.length,n.length=a,this.get(e),Y(this),!0}const A=new us(e,s,a,i,r);return A.length>this[z]?(this[C]&&this[C](e,s),!1):(this[F]+=A.length,this[y].unshift(A),this[b].set(e,this[y].head),Y(this),!0)}has(e){if(!this[b].has(e))return!1;const s=this[b].get(e).value;return!ht(this,s)}get(e){return le(this,e,!0)}peek(e){return le(this,e,!1)}pop(){const e=this[y].tail;return e?(V(this,e),e.value):null}del(e){V(this,this[b].get(e))}load(e){this.reset();const s=Date.now();for(let r=e.length-1;r>=0;r--){const i=e[r],a=i.e||0;if(a===0)this.set(i.k,i.v);else{const A=a-s;A>0&&this.set(i.k,i.v,A)}}}prune(){this[b].forEach((e,s)=>le(this,s,!1))}}const le=(t,e,s)=>{const r=t[b].get(e);if(r){const i=r.value;if(ht(t,i)){if(V(t,r),!t[K])return}else s&&(t[Ze]&&(r.value.now=Date.now()),t[y].unshiftNode(r));return i.value}},ht=(t,e)=>{if(!e||!e.maxAge&&!t[U])return!1;const s=Date.now()-e.now;return e.maxAge?s>e.maxAge:t[U]&&s>t[U]},Y=t=>{if(t[F]>t[z])for(let e=t[y].tail;t[F]>t[z]&&e!==null;){const s=e.prev;V(t,e),e=s}},V=(t,e)=>{if(e){const s=e.value;t[C]&&t[C](s.key,s.value),t[F]-=s.length,t[b].delete(s.key),t[y].removeNode(e)}};class us{constructor(e,s,r,i,a){this.key=e,this.value=s,this.length=r,this.now=i,this.maxAge=a||0}}const Ue=(t,e,s,r)=>{let i=s.value;ht(t,i)&&(V(t,s),t[K]||(i=void 0)),i&&e.call(r,i.value,i.key,t)};var fs=cs;const Es=Object.freeze({loose:!0}),ps=Object.freeze({}),$s=t=>t?typeof t!="object"?Es:t:ps;var Ee=$s,fe={exports:{}};const vs="2.0.0",Je=256,Rs=Number.MAX_SAFE_INTEGER||9007199254740991,Is=16,Ns=Je-6,ds=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var pe={MAX_LENGTH:Je,MAX_SAFE_COMPONENT_LENGTH:Is,MAX_SAFE_BUILD_LENGTH:Ns,MAX_SAFE_INTEGER:Rs,RELEASE_TYPES:ds,SEMVER_SPEC_VERSION:vs,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2};const gs=typeof rs=="object"&&{}&&{}.NODE_DEBUG&&/\bsemver\b/i.test({}.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};var lt=gs;(function(t,e){const{MAX_SAFE_COMPONENT_LENGTH:s,MAX_SAFE_BUILD_LENGTH:r,MAX_LENGTH:i}=pe,a=lt;e=t.exports={};const A=e.re=[],O=e.safeRe=[],n=e.src=[],o=e.t={};let $=0;const L="[a-zA-Z0-9-]",R=[["\\s",1],["\\d",i],[L,r]],N=x=>{for(const[w,D]of R)x=x.split(`${w}*`).join(`${w}{0,${D}}`).split(`${w}+`).join(`${w}{1,${D}}`);return x},p=(x,w,D)=>{const T=N(w),P=$++;a(x,P,w),o[x]=P,n[P]=w,A[P]=new RegExp(w,D?"g":void 0),O[P]=new RegExp(T,D?"g":void 0)};p("NUMERICIDENTIFIER","0|[1-9]\\d*"),p("NUMERICIDENTIFIERLOOSE","\\d+"),p("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${L}*`),p("MAINVERSION",`(${n[o.NUMERICIDENTIFIER]})\\.(${n[o.NUMERICIDENTIFIER]})\\.(${n[o.NUMERICIDENTIFIER]})`),p("MAINVERSIONLOOSE",`(${n[o.NUMERICIDENTIFIERLOOSE]})\\.(${n[o.NUMERICIDENTIFIERLOOSE]})\\.(${n[o.NUMERICIDENTIFIERLOOSE]})`),p("PRERELEASEIDENTIFIER",`(?:${n[o.NUMERICIDENTIFIER]}|${n[o.NONNUMERICIDENTIFIER]})`),p("PRERELEASEIDENTIFIERLOOSE",`(?:${n[o.NUMERICIDENTIFIERLOOSE]}|${n[o.NONNUMERICIDENTIFIER]})`),p("PRERELEASE",`(?:-(${n[o.PRERELEASEIDENTIFIER]}(?:\\.${n[o.PRERELEASEIDENTIFIER]})*))`),p("PRERELEASELOOSE",`(?:-?(${n[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${n[o.PRERELEASEIDENTIFIERLOOSE]})*))`),p("BUILDIDENTIFIER",`${L}+`),p("BUILD",`(?:\\+(${n[o.BUILDIDENTIFIER]}(?:\\.${n[o.BUILDIDENTIFIER]})*))`),p("FULLPLAIN",`v?${n[o.MAINVERSION]}${n[o.PRERELEASE]}?${n[o.BUILD]}?`),p("FULL",`^${n[o.FULLPLAIN]}$`),p("LOOSEPLAIN",`[v=\\s]*${n[o.MAINVERSIONLOOSE]}${n[o.PRERELEASELOOSE]}?${n[o.BUILD]}?`),p("LOOSE",`^${n[o.LOOSEPLAIN]}$`),p("GTLT","((?:<|>)?=?)"),p("XRANGEIDENTIFIERLOOSE",`${n[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),p("XRANGEIDENTIFIER",`${n[o.NUMERICIDENTIFIER]}|x|X|\\*`),p("XRANGEPLAIN",`[v=\\s]*(${n[o.XRANGEIDENTIFIER]})(?:\\.(${n[o.XRANGEIDENTIFIER]})(?:\\.(${n[o.XRANGEIDENTIFIER]})(?:${n[o.PRERELEASE]})?${n[o.BUILD]}?)?)?`),p("XRANGEPLAINLOOSE",`[v=\\s]*(${n[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[o.XRANGEIDENTIFIERLOOSE]})(?:${n[o.PRERELEASELOOSE]})?${n[o.BUILD]}?)?)?`),p("XRANGE",`^${n[o.GTLT]}\\s*${n[o.XRANGEPLAIN]}$`),p("XRANGELOOSE",`^${n[o.GTLT]}\\s*${n[o.XRANGEPLAINLOOSE]}$`),p("COERCE",`(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?(?:$|[^\\d])`),p("COERCERTL",n[o.COERCE],!0),p("LONETILDE","(?:~>?)"),p("TILDETRIM",`(\\s*)${n[o.LONETILDE]}\\s+`,!0),e.tildeTrimReplace="$1~",p("TILDE",`^${n[o.LONETILDE]}${n[o.XRANGEPLAIN]}$`),p("TILDELOOSE",`^${n[o.LONETILDE]}${n[o.XRANGEPLAINLOOSE]}$`),p("LONECARET","(?:\\^)"),p("CARETTRIM",`(\\s*)${n[o.LONECARET]}\\s+`,!0),e.caretTrimReplace="$1^",p("CARET",`^${n[o.LONECARET]}${n[o.XRANGEPLAIN]}$`),p("CARETLOOSE",`^${n[o.LONECARET]}${n[o.XRANGEPLAINLOOSE]}$`),p("COMPARATORLOOSE",`^${n[o.GTLT]}\\s*(${n[o.LOOSEPLAIN]})$|^$`),p("COMPARATOR",`^${n[o.GTLT]}\\s*(${n[o.FULLPLAIN]})$|^$`),p("COMPARATORTRIM",`(\\s*)${n[o.GTLT]}\\s*(${n[o.LOOSEPLAIN]}|${n[o.XRANGEPLAIN]})`,!0),e.comparatorTrimReplace="$1$2$3",p("HYPHENRANGE",`^\\s*(${n[o.XRANGEPLAIN]})\\s+-\\s+(${n[o.XRANGEPLAIN]})\\s*$`),p("HYPHENRANGELOOSE",`^\\s*(${n[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${n[o.XRANGEPLAINLOOSE]})\\s*$`),p("STAR","(<|>)?=?\\s*\\*"),p("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),p("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(fe,fe.exports);var $e=fe.exports;const je=/^[0-9]+$/,Qe=(t,e)=>{const s=je.test(t),r=je.test(e);return s&&r&&(t=+t,e=+e),t===e?0:s&&!r?-1:r&&!s?1:t<e?-1:1},Ls=(t,e)=>Qe(e,t);var ms={compareIdentifiers:Qe,rcompareIdentifiers:Ls};const nt=lt,{MAX_LENGTH:qe,MAX_SAFE_INTEGER:at}=pe,{safeRe:Be,t:He}=$e,As=Ee,{compareIdentifiers:H}=ms;let Os=class G{constructor(e,s){if(s=As(s),e instanceof G){if(e.loose===!!s.loose&&e.includePrerelease===!!s.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>qe)throw new TypeError(`version is longer than ${qe} characters`);nt("SemVer",e,s),this.options=s,this.loose=!!s.loose,this.includePrerelease=!!s.includePrerelease;const r=e.trim().match(s.loose?Be[He.LOOSE]:Be[He.FULL]);if(!r)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>at||this.major<0)throw new TypeError("Invalid major version");if(this.minor>at||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>at||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(i=>{if(/^[0-9]+$/.test(i)){const a=+i;if(a>=0&&a<at)return a}return i}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(nt("SemVer.compare",this.version,this.options,e),!(e instanceof G)){if(typeof e=="string"&&e===this.version)return 0;e=new G(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof G||(e=new G(e,this.options)),H(this.major,e.major)||H(this.minor,e.minor)||H(this.patch,e.patch)}comparePre(e){if(e instanceof G||(e=new G(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let s=0;do{const r=this.prerelease[s],i=e.prerelease[s];if(nt("prerelease compare",s,r,i),r===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(r===void 0)return-1;if(r===i)continue;return H(r,i)}while(++s)}compareBuild(e){e instanceof G||(e=new G(e,this.options));let s=0;do{const r=this.build[s],i=e.build[s];if(nt("prerelease compare",s,r,i),r===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(r===void 0)return-1;if(r===i)continue;return H(r,i)}while(++s)}inc(e,s,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",s,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",s,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",s,r),this.inc("pre",s,r);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",s,r),this.inc("pre",s,r);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const i=Number(r)?1:0;if(!s&&r===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[i];else{let a=this.prerelease.length;for(;--a>=0;)typeof this.prerelease[a]=="number"&&(this.prerelease[a]++,a=-2);if(a===-1){if(s===this.prerelease.join(".")&&r===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(i)}}if(s){let a=[s,i];r===!1&&(a=[s]),H(this.prerelease[0],s)===0?isNaN(this.prerelease[1])&&(this.prerelease=a):this.prerelease=a}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};var ve=Os;const Ve=ve,Ss=(t,e,s)=>new Ve(t,s).compare(new Ve(e,s));var M=Ss;const Ts=M,ys=(t,e,s)=>Ts(t,e,s)===0;var _s=ys;const ws=M,bs=(t,e,s)=>ws(t,e,s)!==0;var xs=bs;const Ds=M,Ps=(t,e,s)=>Ds(t,e,s)>0;var Gs=Ps;const Cs=M,Fs=(t,e,s)=>Cs(t,e,s)>=0;var Xs=Fs;const zs=M,Us=(t,e,s)=>zs(t,e,s)<0;var js=Us;const qs=M,Bs=(t,e,s)=>qs(t,e,s)<=0;var Hs=Bs;const Vs=_s,Ms=xs,Ws=Gs,Ys=Xs,Ks=js,Zs=Hs,Js=(t,e,s,r)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof s=="object"&&(s=s.version),t===s;case"!==":return typeof t=="object"&&(t=t.version),typeof s=="object"&&(s=s.version),t!==s;case"":case"=":case"==":return Vs(t,s,r);case"!=":return Ms(t,s,r);case">":return Ws(t,s,r);case">=":return Ys(t,s,r);case"<":return Ks(t,s,r);case"<=":return Zs(t,s,r);default:throw new TypeError(`Invalid operator: ${e}`)}};var Qs=Js,ce,Me;function ks(){if(Me)return ce;Me=1;const t=Symbol("SemVer ANY");class e{static get ANY(){return t}constructor($,L){if(L=s(L),$ instanceof e){if($.loose===!!L.loose)return $;$=$.value}$=$.trim().split(/\s+/).join(" "),A("comparator",$,L),this.options=L,this.loose=!!L.loose,this.parse($),this.semver===t?this.value="":this.value=this.operator+this.semver.version,A("comp",this)}parse($){const L=this.options.loose?r[i.COMPARATORLOOSE]:r[i.COMPARATOR],R=$.match(L);if(!R)throw new TypeError(`Invalid comparator: ${$}`);this.operator=R[1]!==void 0?R[1]:"",this.operator==="="&&(this.operator=""),R[2]?this.semver=new O(R[2],this.options.loose):this.semver=t}toString(){return this.value}test($){if(A("Comparator.test",$,this.options.loose),this.semver===t||$===t)return!0;if(typeof $=="string")try{$=new O($,this.options)}catch{return!1}return a($,this.operator,this.semver,this.options)}intersects($,L){if(!($ instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new n($.value,L).test(this.value):$.operator===""?$.value===""?!0:new n(this.value,L).test($.semver):(L=s(L),L.includePrerelease&&(this.value==="<0.0.0-0"||$.value==="<0.0.0-0")||!L.includePrerelease&&(this.value.startsWith("<0.0.0")||$.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&$.operator.startsWith(">")||this.operator.startsWith("<")&&$.operator.startsWith("<")||this.semver.version===$.semver.version&&this.operator.includes("=")&&$.operator.includes("=")||a(this.semver,"<",$.semver,L)&&this.operator.startsWith(">")&&$.operator.startsWith("<")||a(this.semver,">",$.semver,L)&&this.operator.startsWith("<")&&$.operator.startsWith(">")))}}ce=e;const s=Ee,{safeRe:r,t:i}=$e,a=Qs,A=lt,O=ve,n=ke();return ce}var ue,We;function ke(){if(We)return ue;We=1;class t{constructor(h,E){if(E=r(E),h instanceof t)return h.loose===!!E.loose&&h.includePrerelease===!!E.includePrerelease?h:new t(h.raw,E);if(h instanceof i)return this.raw=h.value,this.set=[[h]],this.format(),this;if(this.options=E,this.loose=!!E.loose,this.includePrerelease=!!E.includePrerelease,this.raw=h.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map(u=>this.parseRange(u.trim())).filter(u=>u.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const u=this.set[0];if(this.set=this.set.filter(f=>!p(f[0])),this.set.length===0)this.set=[u];else if(this.set.length>1){for(const f of this.set)if(f.length===1&&x(f[0])){this.set=[f];break}}}this.format()}format(){return this.range=this.set.map(h=>h.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(h){const u=((this.options.includePrerelease&&R)|(this.options.loose&&N))+":"+h,f=s.get(u);if(f)return f;const c=this.options.loose,v=c?O[n.HYPHENRANGELOOSE]:O[n.HYPHENRANGE];h=h.replace(v,rt(this.options.includePrerelease)),a("hyphen replace",h),h=h.replace(O[n.COMPARATORTRIM],o),a("comparator trim",h),h=h.replace(O[n.TILDETRIM],$),a("tilde trim",h),h=h.replace(O[n.CARETTRIM],L),a("caret trim",h);let g=h.split(" ").map(S=>D(S,this.options)).join(" ").split(/\s+/).map(S=>st(S,this.options));c&&(g=g.filter(S=>(a("loose invalid filter",S,this.options),!!S.match(O[n.COMPARATORLOOSE])))),a("range list",g);const I=new Map,m=g.map(S=>new i(S,this.options));for(const S of m){if(p(S))return[S];I.set(S.value,S)}I.size>1&&I.has("")&&I.delete("");const _=[...I.values()];return s.set(u,_),_}intersects(h,E){if(!(h instanceof t))throw new TypeError("a Range is required");return this.set.some(u=>w(u,E)&&h.set.some(f=>w(f,E)&&u.every(c=>f.every(v=>c.intersects(v,E)))))}test(h){if(!h)return!1;if(typeof h=="string")try{h=new A(h,this.options)}catch{return!1}for(let E=0;E<this.set.length;E++)if(it(this.set[E],h,this.options))return!0;return!1}}ue=t;const e=fs,s=new e({max:1e3}),r=Ee,i=ks(),a=lt,A=ve,{safeRe:O,t:n,comparatorTrimReplace:o,tildeTrimReplace:$,caretTrimReplace:L}=$e,{FLAG_INCLUDE_PRERELEASE:R,FLAG_LOOSE:N}=pe,p=l=>l.value==="<0.0.0-0",x=l=>l.value==="",w=(l,h)=>{let E=!0;const u=l.slice();let f=u.pop();for(;E&&u.length;)E=u.every(c=>f.intersects(c,h)),f=u.pop();return E},D=(l,h)=>(a("comp",l,h),l=J(l,h),a("caret",l),l=P(l,h),a("tildes",l),l=k(l,h),a("xrange",l),l=et(l,h),a("stars",l),l),T=l=>!l||l.toLowerCase()==="x"||l==="*",P=(l,h)=>l.trim().split(/\s+/).map(E=>Z(E,h)).join(" "),Z=(l,h)=>{const E=h.loose?O[n.TILDELOOSE]:O[n.TILDE];return l.replace(E,(u,f,c,v,g)=>{a("tilde",l,u,f,c,v,g);let I;return T(f)?I="":T(c)?I=`>=${f}.0.0 <${+f+1}.0.0-0`:T(v)?I=`>=${f}.${c}.0 <${f}.${+c+1}.0-0`:g?(a("replaceTilde pr",g),I=`>=${f}.${c}.${v}-${g} <${f}.${+c+1}.0-0`):I=`>=${f}.${c}.${v} <${f}.${+c+1}.0-0`,a("tilde return",I),I})},J=(l,h)=>l.trim().split(/\s+/).map(E=>Q(E,h)).join(" "),Q=(l,h)=>{a("caret",l,h);const E=h.loose?O[n.CARETLOOSE]:O[n.CARET],u=h.includePrerelease?"-0":"";return l.replace(E,(f,c,v,g,I)=>{a("caret",l,f,c,v,g,I);let m;return T(c)?m="":T(v)?m=`>=${c}.0.0${u} <${+c+1}.0.0-0`:T(g)?c==="0"?m=`>=${c}.${v}.0${u} <${c}.${+v+1}.0-0`:m=`>=${c}.${v}.0${u} <${+c+1}.0.0-0`:I?(a("replaceCaret pr",I),c==="0"?v==="0"?m=`>=${c}.${v}.${g}-${I} <${c}.${v}.${+g+1}-0`:m=`>=${c}.${v}.${g}-${I} <${c}.${+v+1}.0-0`:m=`>=${c}.${v}.${g}-${I} <${+c+1}.0.0-0`):(a("no pr"),c==="0"?v==="0"?m=`>=${c}.${v}.${g}${u} <${c}.${v}.${+g+1}-0`:m=`>=${c}.${v}.${g}${u} <${c}.${+v+1}.0-0`:m=`>=${c}.${v}.${g} <${+c+1}.0.0-0`),a("caret return",m),m})},k=(l,h)=>(a("replaceXRanges",l,h),l.split(/\s+/).map(E=>tt(E,h)).join(" ")),tt=(l,h)=>{l=l.trim();const E=h.loose?O[n.XRANGELOOSE]:O[n.XRANGE];return l.replace(E,(u,f,c,v,g,I)=>{a("xRange",l,u,f,c,v,g,I);const m=T(c),_=m||T(v),S=_||T(g),X=S;return f==="="&&X&&(f=""),I=h.includePrerelease?"-0":"",m?f===">"||f==="<"?u="<0.0.0-0":u="*":f&&X?(_&&(v=0),g=0,f===">"?(f=">=",_?(c=+c+1,v=0,g=0):(v=+v+1,g=0)):f==="<="&&(f="<",_?c=+c+1:v=+v+1),f==="<"&&(I="-0"),u=`${f+c}.${v}.${g}${I}`):_?u=`>=${c}.0.0${I} <${+c+1}.0.0-0`:S&&(u=`>=${c}.${v}.0${I} <${c}.${+v+1}.0-0`),a("xRange return",u),u})},et=(l,h)=>(a("replaceStars",l,h),l.trim().replace(O[n.STAR],"")),st=(l,h)=>(a("replaceGTE0",l,h),l.trim().replace(O[h.includePrerelease?n.GTE0PRE:n.GTE0],"")),rt=l=>(h,E,u,f,c,v,g,I,m,_,S,X,ct)=>(T(u)?E="":T(f)?E=`>=${u}.0.0${l?"-0":""}`:T(c)?E=`>=${u}.${f}.0${l?"-0":""}`:v?E=`>=${E}`:E=`>=${E}${l?"-0":""}`,T(m)?I="":T(_)?I=`<${+m+1}.0.0-0`:T(S)?I=`<${m}.${+_+1}.0-0`:X?I=`<=${m}.${_}.${S}-${X}`:l?I=`<${m}.${_}.${+S+1}-0`:I=`<=${I}`,`${E} ${I}`.trim()),it=(l,h,E)=>{for(let u=0;u<l.length;u++)if(!l[u].test(h))return!1;if(h.prerelease.length&&!E.includePrerelease){for(let u=0;u<l.length;u++)if(a(l[u].semver),l[u].semver!==i.ANY&&l[u].semver.prerelease.length>0){const f=l[u].semver;if(f.major===h.major&&f.minor===h.minor&&f.patch===h.patch)return!0}return!1}return!0};return ue}const tr=ke(),er=(t,e,s)=>{try{e=new tr(e,s)}catch{return!1}return e.test(t)};var Er=er,pr=rr,sr=Object.prototype.hasOwnProperty;function rr(){for(var t={},e=0;e<arguments.length;e++){var s=arguments[e];for(var r in s)sr.call(s,r)&&(t[r]=s[r])}return t}const{Transform:ir}=Ke();var nr=t=>class ts extends ir{constructor(s,r,i,a,A){super(A),this._rate=s,this._capacity=r,this._delimitedSuffix=i,this._hashBitLength=a,this._options=A,this._state=new t,this._state.initialize(s,r),this._finalized=!1}_transform(s,r,i){let a=null;try{this.update(s,r)}catch(A){a=A}i(a)}_flush(s){let r=null;try{this.push(this.digest())}catch(i){r=i}s(r)}update(s,r){if(!j.Buffer.isBuffer(s)&&typeof s!="string")throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Digest already called");return j.Buffer.isBuffer(s)||(s=j.Buffer.from(s,r)),this._state.absorb(s),this}digest(s){if(this._finalized)throw new Error("Digest already called");this._finalized=!0,this._delimitedSuffix&&this._state.absorbLastFewBits(this._delimitedSuffix);let r=this._state.squeeze(this._hashBitLength/8);return s!==void 0&&(r=r.toString(s)),this._resetState(),r}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const s=new ts(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);return this._state.copy(s._state),s._finalized=this._finalized,s}};const{Transform:ar}=Ke();var hr=t=>class es extends ar{constructor(s,r,i,a){super(a),this._rate=s,this._capacity=r,this._delimitedSuffix=i,this._options=a,this._state=new t,this._state.initialize(s,r),this._finalized=!1}_transform(s,r,i){let a=null;try{this.update(s,r)}catch(A){a=A}i(a)}_flush(){}_read(s){this.push(this.squeeze(s))}update(s,r){if(!j.Buffer.isBuffer(s)&&typeof s!="string")throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Squeeze already called");return j.Buffer.isBuffer(s)||(s=j.Buffer.from(s,r)),this._state.absorb(s),this}squeeze(s,r){this._finalized||(this._finalized=!0,this._state.absorbLastFewBits(this._delimitedSuffix));let i=this._state.squeeze(s);return r!==void 0&&(i=i.toString(r)),i}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const s=new es(this._rate,this._capacity,this._delimitedSuffix,this._options);return this._state.copy(s._state),s._finalized=this._finalized,s}};const or=nr,lr=hr;var cr=function(t){const e=or(t),s=lr(t);return function(r,i){switch(typeof r=="string"?r.toLowerCase():r){case"keccak224":return new e(1152,448,null,224,i);case"keccak256":return new e(1088,512,null,256,i);case"keccak384":return new e(832,768,null,384,i);case"keccak512":return new e(576,1024,null,512,i);case"sha3-224":return new e(1152,448,6,224,i);case"sha3-256":return new e(1088,512,6,256,i);case"sha3-384":return new e(832,768,6,384,i);case"sha3-512":return new e(576,1024,6,512,i);case"shake128":return new s(1344,256,31,i);case"shake256":return new s(1088,512,31,i);default:throw new Error("Invald algorithm: "+r)}}},ss={};const Ye=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648];ss.p1600=function(t){for(let e=0;e<24;++e){const s=t[0]^t[10]^t[20]^t[30]^t[40],r=t[1]^t[11]^t[21]^t[31]^t[41],i=t[2]^t[12]^t[22]^t[32]^t[42],a=t[3]^t[13]^t[23]^t[33]^t[43],A=t[4]^t[14]^t[24]^t[34]^t[44],O=t[5]^t[15]^t[25]^t[35]^t[45],n=t[6]^t[16]^t[26]^t[36]^t[46],o=t[7]^t[17]^t[27]^t[37]^t[47],$=t[8]^t[18]^t[28]^t[38]^t[48],L=t[9]^t[19]^t[29]^t[39]^t[49];let R=$^(i<<1|a>>>31),N=L^(a<<1|i>>>31);const p=t[0]^R,x=t[1]^N,w=t[10]^R,D=t[11]^N,T=t[20]^R,P=t[21]^N,Z=t[30]^R,J=t[31]^N,Q=t[40]^R,k=t[41]^N;R=s^(A<<1|O>>>31),N=r^(O<<1|A>>>31);const tt=t[2]^R,et=t[3]^N,st=t[12]^R,rt=t[13]^N,it=t[22]^R,l=t[23]^N,h=t[32]^R,E=t[33]^N,u=t[42]^R,f=t[43]^N;R=i^(n<<1|o>>>31),N=a^(o<<1|n>>>31);const c=t[4]^R,v=t[5]^N,g=t[14]^R,I=t[15]^N,m=t[24]^R,_=t[25]^N,S=t[34]^R,X=t[35]^N,ct=t[44]^R,Re=t[45]^N;R=A^($<<1|L>>>31),N=O^(L<<1|$>>>31);const Ie=t[6]^R,Ne=t[7]^N,de=t[16]^R,ge=t[17]^N,Le=t[26]^R,me=t[27]^N,Ae=t[36]^R,Oe=t[37]^N,Se=t[46]^R,Te=t[47]^N;R=n^(s<<1|r>>>31),N=o^(r<<1|s>>>31);const ye=t[8]^R,_e=t[9]^N,we=t[18]^R,be=t[19]^N,xe=t[28]^R,De=t[29]^N,Pe=t[38]^R,Ge=t[39]^N,Ce=t[48]^R,Fe=t[49]^N,ut=p,ft=x,Et=D<<4|w>>>28,pt=w<<4|D>>>28,$t=T<<3|P>>>29,vt=P<<3|T>>>29,Rt=J<<9|Z>>>23,It=Z<<9|J>>>23,Nt=Q<<18|k>>>14,dt=k<<18|Q>>>14,gt=tt<<1|et>>>31,Lt=et<<1|tt>>>31,mt=rt<<12|st>>>20,At=st<<12|rt>>>20,Ot=it<<10|l>>>22,St=l<<10|it>>>22,Tt=E<<13|h>>>19,yt=h<<13|E>>>19,_t=u<<2|f>>>30,wt=f<<2|u>>>30,bt=v<<30|c>>>2,xt=c<<30|v>>>2,Dt=g<<6|I>>>26,Pt=I<<6|g>>>26,Gt=_<<11|m>>>21,Ct=m<<11|_>>>21,Ft=S<<15|X>>>17,Xt=X<<15|S>>>17,zt=Re<<29|ct>>>3,Ut=ct<<29|Re>>>3,jt=Ie<<28|Ne>>>4,qt=Ne<<28|Ie>>>4,Bt=ge<<23|de>>>9,Ht=de<<23|ge>>>9,Vt=Le<<25|me>>>7,Mt=me<<25|Le>>>7,Wt=Ae<<21|Oe>>>11,Yt=Oe<<21|Ae>>>11,Kt=Te<<24|Se>>>8,Zt=Se<<24|Te>>>8,Jt=ye<<27|_e>>>5,Qt=_e<<27|ye>>>5,kt=we<<20|be>>>12,te=be<<20|we>>>12,ee=De<<7|xe>>>25,se=xe<<7|De>>>25,re=Pe<<8|Ge>>>24,ie=Ge<<8|Pe>>>24,ne=Ce<<14|Fe>>>18,ae=Fe<<14|Ce>>>18;t[0]=ut^~mt&Gt,t[1]=ft^~At&Ct,t[10]=jt^~kt&$t,t[11]=qt^~te&vt,t[20]=gt^~Dt&Vt,t[21]=Lt^~Pt&Mt,t[30]=Jt^~Et&Ot,t[31]=Qt^~pt&St,t[40]=bt^~Bt&ee,t[41]=xt^~Ht&se,t[2]=mt^~Gt&Wt,t[3]=At^~Ct&Yt,t[12]=kt^~$t&Tt,t[13]=te^~vt&yt,t[22]=Dt^~Vt&re,t[23]=Pt^~Mt&ie,t[32]=Et^~Ot&Ft,t[33]=pt^~St&Xt,t[42]=Bt^~ee&Rt,t[43]=Ht^~se&It,t[4]=Gt^~Wt&ne,t[5]=Ct^~Yt&ae,t[14]=$t^~Tt&zt,t[15]=vt^~yt&Ut,t[24]=Vt^~re&Nt,t[25]=Mt^~ie&dt,t[34]=Ot^~Ft&Kt,t[35]=St^~Xt&Zt,t[44]=ee^~Rt&_t,t[45]=se^~It&wt,t[6]=Wt^~ne&ut,t[7]=Yt^~ae&ft,t[16]=Tt^~zt&jt,t[17]=yt^~Ut&qt,t[26]=re^~Nt&gt,t[27]=ie^~dt&Lt,t[36]=Ft^~Kt&Jt,t[37]=Xt^~Zt&Qt,t[46]=Rt^~_t&bt,t[47]=It^~wt&xt,t[8]=ne^~ut&mt,t[9]=ae^~ft&At,t[18]=zt^~jt&kt,t[19]=Ut^~qt&te,t[28]=Nt^~gt&Dt,t[29]=dt^~Lt&Pt,t[38]=Kt^~Jt&Et,t[39]=Zt^~Qt&pt,t[48]=_t^~bt&Bt,t[49]=wt^~xt&Ht,t[0]^=Ye[e*2],t[1]^=Ye[e*2+1]}};const ot=ss;function W(){this.state=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.blockSize=null,this.count=0,this.squeezing=!1}W.prototype.initialize=function(t,e){for(let s=0;s<50;++s)this.state[s]=0;this.blockSize=t/8,this.count=0,this.squeezing=!1};W.prototype.absorb=function(t){for(let e=0;e<t.length;++e)this.state[~~(this.count/4)]^=t[e]<<8*(this.count%4),this.count+=1,this.count===this.blockSize&&(ot.p1600(this.state),this.count=0)};W.prototype.absorbLastFewBits=function(t){this.state[~~(this.count/4)]^=t<<8*(this.count%4),t&128&&this.count===this.blockSize-1&&ot.p1600(this.state),this.state[~~((this.blockSize-1)/4)]^=128<<8*((this.blockSize-1)%4),ot.p1600(this.state),this.count=0,this.squeezing=!0};W.prototype.squeeze=function(t){this.squeezing||this.absorbLastFewBits(1);const e=j.Buffer.alloc(t);for(let s=0;s<t;++s)e[s]=this.state[~~(this.count/4)]>>>8*(this.count%4)&255,this.count+=1,this.count===this.blockSize&&(ot.p1600(this.state),this.count=0);return e};W.prototype.copy=function(t){for(let e=0;e<50;++e)t.state[e]=this.state[e];t.blockSize=this.blockSize,t.count=this.count,t.squeezing=this.squeezing};var ur=W,$r=cr(ur);export{ve as a,ke as b,M as c,ks as d,Hs as e,Xs as f,Gs as g,pe as h,pr as i,$r as j,ms as k,js as l,_s as m,xs as n,Qs as o,$e as r,Er as s};
