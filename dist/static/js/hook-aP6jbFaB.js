var Ve=Object.defineProperty,Ze=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Ke=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable;var N=Math.pow,he=(r,e,t)=>e in r?Ve(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,C=(r,e)=>{for(var t in e||(e={}))Ke.call(e,t)&&he(r,t,e[t]);if(ue)for(var t of ue(e))Qe.call(e,t)&&he(r,t,e[t]);return r},j=(r,e)=>Ze(r,Xe(e));var q=(r,e,t)=>new Promise((s,n)=>{var a=o=>{try{c(t.next(o))}catch(u){n(u)}},i=o=>{try{c(t.throw(o))}catch(u){n(u)}},c=o=>o.done?s(o.value):Promise.resolve(o.value).then(a,i);c((t=t.apply(r,e)).next())});import{K as X,r as D,V as Je,a7 as et,aT as tt,o as st,dL as de,i as I,b as K,dM as nt,aQ as rt,dC as at,A as $,ah as it,bj as ot,aa as V,D as Q,dN as ct,dO as lt,dP as ut,dQ as ht,F as dt}from"./index-C6_rv3gy.js";import{_ as ft}from"./role.vue_vue_type_script_setup_true_lang-LnnRIGSh.js";import{_ as gt}from"./index.vue_vue_type_script_setup_true_lang-xVK73N9m.js";import{_ as pt}from"./upload.vue_vue_type_script_setup_true_lang-58m8cJ0X.js";import{u as mt}from"./hooks-DrfKrFSu.js";import{g as bt,b as yt,c as Mt,d as vt}from"./system-09uYsvC-.js";import"./index-JNHmklKQ.js";import"./index-onfTP7ls.js";const te=(r,e)=>r.push.apply(r,e),U=r=>r.sort((e,t)=>e.i-t.i||e.j-t.j),fe=r=>{const e={};let t=1;return r.forEach(s=>{e[s]=t,t+=1}),e};var xt={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]};const ge=2050,pe=1e3,kt=xt,St=10,Dt=1e4,xe=10,ke=50,Se=20,De=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,Et=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,Tt=/^[A-Z\xbf-\xdf]+$/,Ee=/^[^a-z\xdf-\xff]+$/,At=/^[a-z\xdf-\xff]+$/,Ct=/^[^A-Z\xbf-\xdf]+$/,It=/[a-z\xdf-\xff]/,Rt=/[A-Z\xbf-\xdf]/,Pt=/[^A-Za-z\xbf-\xdf]/gi,wt=/^\d+$/,ne=new Date().getFullYear(),Lt={recentYear:/19\d\d|200\d|201\d|202\d/g},Te=[" ",",",";",":","|","/","\\","_",".","-"],jt=Te.length;class Ot{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return U(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let a=n+5;a<=n+9&&!(a>=e.length);a+=1){const i=e.slice(n,+a+1||9e9),c=s.exec(i);if(c!=null){const o=this.mapIntegersToDayMonthYear([parseInt(c[1],10),parseInt(c[3],10),parseInt(c[4],10)]);o!=null&&t.push({pattern:"date",token:i,i:n,j:a,separator:c[2],year:o.year,month:o.month,day:o.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=a=>Math.abs(a.year-ne);for(let a=0;a<=Math.abs(e.length-4);a+=1)for(let i=a+3;i<=a+7&&!(i>=e.length);i+=1){const c=e.slice(a,+i+1||9e9);if(s.exec(c)){const o=[],u=c.length;if(kt[u].forEach(([p,b])=>{const y=this.mapIntegersToDayMonthYear([parseInt(c.slice(0,p),10),parseInt(c.slice(p,b),10),parseInt(c.slice(b),10)]);y!=null&&o.push(y)}),o.length>0){let p=o[0],b=n(o[0]);o.slice(1).forEach(y=>{const g=n(y);g<b&&(p=y,b=g)}),t.push({pattern:"date",token:c,i:a,j:i,separator:"",year:p.year,month:p.month,day:p.day})}}}return t}filterNoise(e){return e.filter(t=>{let s=!1;const n=e.length;for(let a=0;a<n;a+=1){const i=e[a];if(t!==i&&i.i<=t.i&&i.j>=t.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let a=0,i=e.length;a<i;a+=1){const c=e[a];if(c>99&&c<pe||c>ge)return null;c>31&&(s+=1),c>12&&(t+=1),c<=0&&(n+=1)}return s>=2||t===3||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[a,i]=t[n];if(pe<=a&&a<=ge){const c=this.mapIntegersToDayMonth(i);return c!=null?{year:a,month:c.month,day:c.day}:null}}for(let n=0;n<s;n+=1){const[a,i]=t[n],c=this.mapIntegersToDayMonth(i);if(c!=null)return{year:this.twoToFourDigitYear(a),month:c.month,day:c.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const n=t[s],a=n[0],i=n[1];if(a>=1&&a<=31&&i>=1&&i<=12)return{day:a,month:i}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const P=new Uint32Array(65536),_t=(r,e)=>{const t=r.length,s=e.length,n=1<<t-1;let a=-1,i=0,c=t,o=t;for(;o--;)P[r.charCodeAt(o)]|=1<<o;for(o=0;o<s;o++){let u=P[e.charCodeAt(o)];const d=u|i;u|=(u&a)+a^a,i|=~(u|a),a&=u,i&n&&c++,a&n&&c--,i=i<<1|1,a=a<<1|~(d|i),i&=d}for(o=t;o--;)P[r.charCodeAt(o)]=0;return c},Nt=(r,e)=>{const t=e.length,s=r.length,n=[],a=[],i=Math.ceil(t/32),c=Math.ceil(s/32);for(let g=0;g<i;g++)a[g]=-1,n[g]=0;let o=0;for(;o<c-1;o++){let g=0,M=-1;const T=o*32,v=Math.min(32,s)+T;for(let m=T;m<v;m++)P[r.charCodeAt(m)]|=1<<m;for(let m=0;m<t;m++){const k=P[e.charCodeAt(m)],S=a[m/32|0]>>>m&1,A=n[m/32|0]>>>m&1,Y=k|g,G=((k|A)&M)+M^M|k|A;let L=g|~(G|M),_=M&G;L>>>31^S&&(a[m/32|0]^=1<<m),_>>>31^A&&(n[m/32|0]^=1<<m),L=L<<1|S,_=_<<1|A,M=_|~(Y|L),g=L&Y}for(let m=T;m<v;m++)P[r.charCodeAt(m)]=0}let u=0,d=-1;const p=o*32,b=Math.min(32,s-p)+p;for(let g=p;g<b;g++)P[r.charCodeAt(g)]|=1<<g;let y=s;for(let g=0;g<t;g++){const M=P[e.charCodeAt(g)],T=a[g/32|0]>>>g&1,v=n[g/32|0]>>>g&1,m=M|u,k=((M|v)&d)+d^d|M|v;let S=u|~(k|d),A=d&k;y+=S>>>s-1&1,y-=A>>>s-1&1,S>>>31^T&&(a[g/32|0]^=1<<g),A>>>31^v&&(n[g/32|0]^=1<<g),S=S<<1|T,A=A<<1|v,d=A|~(m|S),u=S&m}for(let g=p;g<b;g++)P[r.charCodeAt(g)]=0;return y},Ut=(r,e)=>{if(r.length<e.length){const t=e;e=r,r=t}return e.length===0?r.length:r.length<=32?_t(r,e):Nt(r,e)},Wt=(r,e,t)=>{const s=r.length<=e.length,n=r.length<=t;return s||n?Math.ceil(r.length/4):t},Ft=(r,e,t)=>{let s=0;const n=Object.keys(e).find(a=>{const i=Wt(r,a,t);if(Math.abs(r.length-a.length)>i)return!1;const c=Ut(r,a),o=c<=i;return o&&(s=c),o});return n?{levenshteinDistance:s,levenshteinDistanceEntry:n}:{}};var me={a:["4","@"],b:["8"],c:["(","{","[","<"],d:["6","|)"],e:["3"],f:["#"],g:["6","9","&"],h:["#","|-|"],i:["1","!","|"],k:["<","|<"],l:["!","1","|","7"],m:["^^","nn","2n","/\\\\/\\\\"],n:["//"],o:["0","()"],q:["9"],u:["|_|"],s:["$","5"],t:["+","7"],v:["<",">","/"],w:["^/","uu","vv","2u","2v","\\\\/\\\\/"],x:["%","><"],z:["2"]},J={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class z{constructor(e=[]){this.parents=e,this.children=new Map}addSub(e,...t){const s=e.charAt(0);this.children.has(s)||this.children.set(s,new z([...this.parents,s]));let n=this.children.get(s);for(let a=1;a<e.length;a+=1){const i=e.charAt(a);n.hasChild(i)||n.addChild(i),n=n.getChild(i)}return n.subs=(n.subs||[]).concat(t),this}getChild(e){return this.children.get(e)}isTerminal(){return!!this.subs}addChild(e){this.hasChild(e)||this.children.set(e,new z([...this.parents,e]))}hasChild(e){return this.children.has(e)}}var be=(r,e)=>(Object.entries(r).forEach(([t,s])=>{s.forEach(n=>{e.addSub(n,t)})}),e);class $t{constructor(){this.matchers={},this.l33tTable=me,this.trieNodeRoot=be(me,new z),this.dictionary={userInputs:[]},this.rankedDictionaries={},this.rankedDictionariesMaxWordSize={},this.translations=J,this.graphs={},this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.l33tMaxSubstitutions=100,this.maxLength=256,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable,this.trieNodeRoot=be(e.l33tTable,new z)),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),e.useLevenshteinDistance!==void 0&&(this.useLevenshteinDistance=e.useLevenshteinDistance),e.levenshteinThreshold!==void 0&&(this.levenshteinThreshold=e.levenshteinThreshold),e.l33tMaxSubstitutions!==void 0&&(this.l33tMaxSubstitutions=e.l33tMaxSubstitutions),e.maxLength!==void 0&&(this.maxLength=e.maxLength)}setTranslations(e){if(this.checkCustomTranslations(e))this.translations=e;else throw new Error("Invalid translations object fallback to keys")}checkCustomTranslations(e){let t=!0;return Object.keys(J).forEach(s=>{if(s in e){const n=s;Object.keys(J[n]).forEach(a=>{a in e[n]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const e={},t={};Object.keys(this.dictionary).forEach(s=>{e[s]=fe(this.dictionary[s]),t[s]=this.getRankedDictionariesMaxWordSize(this.dictionary[s])}),this.rankedDictionaries=e,this.rankedDictionariesMaxWordSize=t}getRankedDictionariesMaxWordSize(e){const t=e.map(s=>typeof s!="string"?s.toString().length:s.length);return t.length===0?0:t.reduce((s,n)=>Math.max(s,n),-1/0)}buildSanitizedRankedDictionary(e){const t=[];return e.forEach(s=>{const n=typeof s;(n==="string"||n==="number"||n==="boolean")&&t.push(s.toString().toLowerCase())}),fe(t)}extendUserInputsDictionary(e){this.dictionary.userInputs||(this.dictionary.userInputs=[]);const t=[...this.dictionary.userInputs,...e];this.rankedDictionaries.userInputs=this.buildSanitizedRankedDictionary(t),this.rankedDictionariesMaxWordSize.userInputs=this.getRankedDictionariesMaxWordSize(t)}addMatcher(e,t){this.matchers[e]?console.info(`Matcher ${e} already exists`):this.matchers[e]=t}}const f=new $t;class zt{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map(s=>j(C({},s),{token:s.token.split("").reverse().join(""),reversed:!0,i:e.length-1-s.j,j:e.length-1-s.i}))}}class Yt{constructor({substr:e,limit:t,trieRoot:s}){this.buffer=[],this.finalPasswords=[],this.substr=e,this.limit=t,this.trieRoot=s}getAllPossibleSubsAtIndex(e){const t=[];let s=this.trieRoot;for(let n=e;n<this.substr.length;n+=1){const a=this.substr.charAt(n);if(s=s.getChild(a),!s)break;t.push(s)}return t}helper({onlyFullSub:e,isFullSub:t,index:s,subIndex:n,changes:a,lastSubLetter:i,consecutiveSubCount:c}){if(this.finalPasswords.length>=this.limit)return;if(s===this.substr.length){e===t&&this.finalPasswords.push({password:this.buffer.join(""),changes:a});return}const o=[...this.getAllPossibleSubsAtIndex(s)];let u=!1;for(let d=s+o.length-1;d>=s;d-=1){const p=o[d-s];if(p.isTerminal()){if(i===p.parents.join("")&&c>=3)continue;u=!0;const b=p.subs;for(const y of b){this.buffer.push(y);const g=a.concat({i:n,letter:y,substitution:p.parents.join("")});if(this.helper({onlyFullSub:e,isFullSub:t,index:d+1,subIndex:n+y.length,changes:g,lastSubLetter:p.parents.join(""),consecutiveSubCount:i===p.parents.join("")?c+1:1}),this.buffer.pop(),this.finalPasswords.length>=this.limit)return}}}if(!e||!u){const d=this.substr.charAt(s);this.buffer.push(d),this.helper({onlyFullSub:e,isFullSub:t&&!u,index:s+1,subIndex:n+1,changes:a,lastSubLetter:i,consecutiveSubCount:c}),this.buffer.pop()}}getAll(){return this.helper({onlyFullSub:!0,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.helper({onlyFullSub:!1,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.finalPasswords}}const Gt=(r,e,t)=>new Yt({substr:r,limit:e,trieRoot:t}).getAll(),Bt=(r,e,t)=>{const n=r.changes.filter(u=>u.i<e).reduce((u,d)=>u-d.letter.length+d.substitution.length,e),a=r.changes.filter(u=>u.i>=e&&u.i<=t),i=a.reduce((u,d)=>u-d.letter.length+d.substitution.length,t-e+n),c=[],o=[];return a.forEach(u=>{c.findIndex(p=>p.letter===u.letter&&p.substitution===u.substitution)<0&&(c.push({letter:u.letter,substitution:u.substitution}),o.push(`${u.substitution} -> ${u.letter}`))}),{i:n,j:i,subs:c,subDisplay:o.join(", ")}};class Ht{constructor(e){this.defaultMatch=e}isAlreadyIncluded(e,t){return e.some(s=>Object.entries(s).every(([n,a])=>n==="subs"||a===t[n]))}match({password:e}){const t=[],s=Gt(e,f.l33tMaxSubstitutions,f.trieNodeRoot);let n=!1,a=!0;return s.forEach(i=>{if(n)return;const c=this.defaultMatch({password:i.password,useLevenshtein:a});a=!1,c.forEach(o=>{n||(n=o.i===0&&o.j===e.length-1);const u=Bt(i,o.i,o.j),d=e.slice(u.i,+u.j+1||9e9),p=C(j(C({},o),{l33t:!0,token:d}),u),b=this.isAlreadyIncluded(t,p);d.toLowerCase()!==o.matchedWord&&!b&&t.push(p)})}),t.filter(i=>i.token.length>1)}}class qt{constructor(){this.l33t=new Ht(this.defaultMatch),this.reverse=new zt(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return U(t)}defaultMatch({password:e,useLevenshtein:t=!0}){const s=[],n=e.length,a=e.toLowerCase();return Object.keys(f.rankedDictionaries).forEach(i=>{const c=f.rankedDictionaries[i],o=f.rankedDictionariesMaxWordSize[i],u=Math.min(o,n);for(let d=0;d<n;d+=1){const p=Math.min(d+u,n);for(let b=d;b<p;b+=1){const y=a.slice(d,+b+1||9e9),g=y in c;let M={};const T=d===0&&b===n-1;f.useLevenshteinDistance&&T&&!g&&t&&(M=Ft(y,c,f.levenshteinThreshold));const v=Object.keys(M).length!==0;if(g||v){const m=v?M.levenshteinDistanceEntry:y,k=c[m];s.push(C({pattern:"dictionary",i:d,j:b,token:e.slice(d,+b+1||9e9),matchedWord:y,rank:k,dictionaryName:i,reversed:!1,l33t:!1},M))}}}}),s}}class Vt{match({password:e,regexes:t=Lt}){const s=[];return Object.keys(t).forEach(n=>{const a=t[n];a.lastIndex=0;let i;for(;i=a.exec(e);)if(i){const c=i[0];s.push({pattern:"regex",token:c,i:i.index,j:i.index+i[0].length-1,regexName:n,regexMatch:i})}}),U(s)}}var O={nCk(r,e){let t=r;if(e>t)return 0;if(e===0)return 1;let s=1;for(let n=1;n<=e;n+=1)s*=t,s/=n,t-=1;return s},log10(r){return r===0?0:Math.log(r)/Math.log(10)},log2(r){return Math.log(r)/Math.log(2)},factorial(r){let e=1;for(let t=2;t<=r;t+=1)e*=t;return e}},Zt=({token:r})=>{let e=N(St,r.length);e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE);let t;return r.length===1?t=xe+1:t=ke+1,Math.max(e,t)},Xt=({year:r,separator:e})=>{let s=Math.max(Math.abs(r-ne),Se)*365;return e&&(s*=4),s};const Kt=r=>{const e=r.split(""),t=e.filter(i=>i.match(Rt)).length,s=e.filter(i=>i.match(It)).length;let n=0;const a=Math.min(t,s);for(let i=1;i<=a;i+=1)n+=O.nCk(t+s,i);return n};var Qt=r=>{const e=r.replace(Pt,"");if(e.match(Ct)||e.toLowerCase()===e)return 1;const t=[De,Et,Ee],s=t.length;for(let n=0;n<s;n+=1){const a=t[n];if(e.match(a))return 2}return Kt(e)};const ye=(r,e)=>{let t=0,s=r.indexOf(e);for(;s>=0;)t+=1,s=r.indexOf(e,s+e.length);return t},Jt=({sub:r,token:e})=>{const t=e.toLowerCase(),s=ye(t,r.substitution),n=ye(t,r.letter);return{subbedCount:s,unsubbedCount:n}};var es=({l33t:r,subs:e,token:t})=>{if(!r)return 1;let s=1;return e.forEach(n=>{const{subbedCount:a,unsubbedCount:i}=Jt({sub:n,token:t});if(a===0||i===0)s*=2;else{const c=Math.min(i,a);let o=0;for(let u=1;u<=c;u+=1)o+=O.nCk(i+a,u);s*=o}}),s},ts=({rank:r,reversed:e,l33t:t,subs:s,token:n,dictionaryName:a})=>{const i=r,c=Qt(n),o=es({l33t:t,subs:s,token:n}),u=e&&2||1;let d;return a==="diceware"?d=N(6,5)/2:d=i*c*o*u,{baseGuesses:i,uppercaseVariations:c,l33tVariations:o,calculation:d}},ss=({regexName:r,regexMatch:e,token:t})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(r in s)return N(s[r],t.length);switch(r){case"recentYear":return Math.max(Math.abs(parseInt(e[0],10)-ne),Se)}return 0},ns=({baseGuesses:r,repeatCount:e})=>r*e,rs=({token:r,ascending:e})=>{const t=r.charAt(0);let s=0;return["a","A","z","Z","0","1","9"].includes(t)?s=4:t.match(/\d/)?s=10:s=26,e||(s*=2),s*r.length};const as=r=>{let e=0;return Object.keys(r).forEach(t=>{const s=r[t];e+=s.filter(n=>!!n).length}),e/=Object.entries(r).length,e},is=({token:r,graph:e,turns:t})=>{const s=Object.keys(f.graphs[e]).length,n=as(f.graphs[e]);let a=0;const i=r.length;for(let c=2;c<=i;c+=1){const o=Math.min(t,c-1);for(let u=1;u<=o;u+=1)a+=O.nCk(c-1,u-1)*s*N(n,u)}return a};var os=({graph:r,token:e,shiftedCount:t,turns:s})=>{let n=is({token:e,graph:r,turns:s});if(t){const a=e.length-t;if(t===0||a===0)n*=2;else{let i=0;for(let c=1;c<=Math.min(t,a);c+=1)i+=O.nCk(t+a,c);n*=i}}return Math.round(n)},cs=()=>jt;const ls=(r,e)=>{let t=1;return r.token.length<e.length&&(r.token.length===1?t=xe:t=ke),t},Me={bruteforce:Zt,date:Xt,dictionary:ts,regex:ss,repeat:ns,sequence:rs,spatial:os,separator:cs},us=(r,e)=>Me[r]?Me[r](e):f.matchers[r]&&"scoring"in f.matchers[r]?f.matchers[r].scoring(e):0;var hs=(r,e)=>{const t={};if("guesses"in r&&r.guesses!=null)return r;const s=ls(r,e),n=us(r.pattern,r);let a=0;typeof n=="number"?a=n:r.pattern==="dictionary"&&(a=n.calculation,t.baseGuesses=n.baseGuesses,t.uppercaseVariations=n.uppercaseVariations,t.l33tVariations=n.l33tVariations);const i=Math.max(a,s);return j(C(C({},r),t),{guesses:i,guessesLog10:O.log10(i)})};const E={password:"",optimal:{},excludeAdditive:!1,separatorRegex:void 0,fillArray(r,e){const t=[];for(let s=0;s<r;s+=1){let n=[];e==="object"&&(n={}),t.push(n)}return t},makeBruteforceMatch(r,e){return{pattern:"bruteforce",token:this.password.slice(r,+e+1||9e9),i:r,j:e}},update(r,e){const t=r.j,s=hs(r,this.password);let n=s.guesses;e>1&&(n*=this.optimal.pi[s.i-1][e-1]);let a=O.factorial(e)*n;this.excludeAdditive||(a+=N(Dt,e-1));let i=!1;Object.keys(this.optimal.g[t]).forEach(c=>{const o=this.optimal.g[t][c];parseInt(c,10)<=e&&o<=a&&(i=!0)}),i||(this.optimal.g[t][e]=a,this.optimal.m[t][e]=s,this.optimal.pi[t][e]=n)},bruteforceUpdate(r){let e=this.makeBruteforceMatch(0,r);this.update(e,1);for(let t=1;t<=r;t+=1){e=this.makeBruteforceMatch(t,r);const s=this.optimal.m[t-1];Object.keys(s).forEach(n=>{s[n].pattern!=="bruteforce"&&this.update(e,parseInt(n,10)+1)})}},unwind(r){const e=[];let t=r-1,s=0,n=1/0;const a=this.optimal.g[t];for(a&&Object.keys(a).forEach(i=>{const c=a[i];c<n&&(s=parseInt(i,10),n=c)});t>=0;){const i=this.optimal.m[t][s];e.unshift(i),t=i.i-1,s-=1}return e}};var se={mostGuessableMatchSequence(r,e,t=!1){E.password=r,E.excludeAdditive=t;const s=r.length;let n=E.fillArray(s,"array");e.forEach(o=>{n[o.j].push(o)}),n=n.map(o=>o.sort((u,d)=>u.i-d.i)),E.optimal={m:E.fillArray(s,"object"),pi:E.fillArray(s,"object"),g:E.fillArray(s,"object")};for(let o=0;o<s;o+=1)n[o].forEach(u=>{u.i>0?Object.keys(E.optimal.m[u.i-1]).forEach(d=>{E.update(u,parseInt(d,10)+1)}):E.update(u,1)}),E.bruteforceUpdate(o);const a=E.unwind(s),i=a.length,c=this.getGuesses(r,i);return{password:r,guesses:c,guessesLog10:O.log10(c),sequence:a}},getGuesses(r,e){const t=r.length;let s=0;return r.length===0?s=1:s=E.optimal.g[t-1][e],s}};class ds{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const i=this.getGreedyMatch(e,n),c=this.getLazyMatch(e,n);if(i==null)break;const{match:o,baseToken:u}=this.setMatchToken(i,c);if(o){const d=o.index+o[0].length-1,p=this.getBaseGuesses(u,t);s.push(this.normalizeMatch(u,d,o,p)),n=d+1}}return s.some(i=>i instanceof Promise)?Promise.all(s):s}normalizeMatch(e,t,s,n){const a={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return n instanceof Promise?n.then(i=>j(C({},a),{baseGuesses:i})):j(C({},a),{baseGuesses:n})}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let n,a="";if(t&&e[0].length>t[0].length){n=e;const i=s.exec(n[0]);i&&(a=i[1])}else n=t,n&&(a=n[1]);return{match:n,baseToken:a}}getBaseGuesses(e,t){const s=t.match(e);return s instanceof Promise?s.then(a=>se.mostGuessableMatchSequence(e,a).guesses):se.mostGuessableMatchSequence(e,s).guesses}}class fs{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(e.length===1)return[];let s=0,n=null;const a=e.length;for(let i=1;i<a;i+=1){const c=e.charCodeAt(i)-e.charCodeAt(i-1);if(n==null&&(n=c),c!==n){const o=i-1;this.update({i:s,j:o,delta:n,password:e,result:t}),s=o,n=c}}return this.update({i:s,j:a-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:a}){if(t-e>1||Math.abs(s)===1){const i=Math.abs(s);if(i>0&&i<=this.MAX_DELTA){const c=n.slice(e,+t+1||9e9),{sequenceName:o,sequenceSpace:u}=this.getSequence(c);return a.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:o,sequenceSpace:u,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return At.test(e)?(t="lower",s=26):Tt.test(e)?(t="upper",s=26):wt.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class gs{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(f.graphs).forEach(s=>{const n=f.graphs[s];te(t,this.helper(e,n,s))}),U(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const a=[];let i=0;const c=e.length;for(;i<c-1;){let o=i+1,u=null,d=0;for(n=this.checkIfShifted(s,e,i);;){const p=e.charAt(o-1),b=t[p]||[];let y=!1,g=-1,M=-1;if(o<c){const T=e.charAt(o),v=b.length;for(let m=0;m<v;m+=1){const k=b[m];if(M+=1,k){const S=k.indexOf(T);if(S!==-1){y=!0,g=M,S===1&&(n+=1),u!==g&&(d+=1,u=g);break}}}}if(y)o+=1;else{o-i>2&&a.push({pattern:"spatial",i,j:o-1,token:e.slice(i,o),graph:s,turns:d,shiftedCount:n}),i=o;break}}}return a}}const ps=new RegExp(`[${Te.join("")}]`);class Z{static getMostUsedSeparatorChar(e){const t=[...e.split("").filter(n=>ps.test(n)).reduce((n,a)=>{const i=n.get(a);return i?n.set(a,i+1):n.set(a,1),n},new Map).entries()].sort(([n,a],[i,c])=>c-a);if(!t.length)return;const s=t[0];if(!(s[1]<2))return s[0]}static getSeparatorRegex(e){return new RegExp(`([^${e}
])(${e})(?!${e})`,"g")}match({password:e}){const t=[];if(e.length===0)return t;const s=Z.getMostUsedSeparatorChar(e);if(s===void 0)return t;const n=Z.getSeparatorRegex(s);for(const a of e.matchAll(n)){if(a.index===void 0)continue;const i=a.index+1;t.push({pattern:"separator",token:s,i,j:i})}return t}}class ms{constructor(){this.matchers={date:Ot,dictionary:qt,regex:Vt,repeat:ds,sequence:fs,spatial:gs,separator:Z}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(f.matchers)].forEach(a=>{if(!this.matchers[a]&&!f.matchers[a])return;const i=this.matchers[a]?this.matchers[a]:f.matchers[a].Matching,o=new i().match({password:e,omniMatch:this});o instanceof Promise?(o.then(u=>{te(t,u)}),s.push(o)):te(t,o)}),s.length>0?new Promise((a,i)=>{Promise.all(s).then(()=>{a(U(t))}).catch(c=>{i(c)})}):U(t)}}const Ae=1,Ce=Ae*60,Ie=Ce*60,Re=Ie*24,Pe=Re*31,we=Pe*12,bs=we*100,ee={second:Ae,minute:Ce,hour:Ie,day:Re,month:Pe,year:we,century:bs};class ys{translate(e,t){let s=e;t!==void 0&&t!==1&&(s+="s");const{timeEstimation:n}=f.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/.027777777777777776,onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach(n=>{const a=t[n];s[n]=this.displayTime(a)}),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1005?0:e<1000005?1:e<100000005?2:e<1e10+5?3:4}displayTime(e){let t="centuries",s;const n=Object.keys(ee),a=n.findIndex(i=>e<ee[i]);return a>-1&&(t=n[a-1],a!==0?s=Math.round(e/ee[t]):t="ltSecond"),this.translate(t,s)}}var Ms=()=>null,vs=()=>({warning:f.translations.warnings.dates,suggestions:[f.translations.suggestions.dates]});const xs=(r,e)=>{let t=null;return e&&!r.l33t&&!r.reversed?r.rank<=10?t=f.translations.warnings.topTen:r.rank<=100?t=f.translations.warnings.topHundred:t=f.translations.warnings.common:r.guessesLog10<=4&&(t=f.translations.warnings.similarToCommon),t},ks=(r,e)=>{let t=null;return e&&(t=f.translations.warnings.wordByItself),t},Ss=(r,e)=>e?f.translations.warnings.namesByThemselves:f.translations.warnings.commonNames,Ds=(r,e)=>{let t=null;const s=r.dictionaryName,n=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?t=xs(r,e):s.includes("wikipedia")?t=ks(r,e):n?t=Ss(r,e):s==="userInputs"&&(t=f.translations.warnings.userInputs),t};var Es=(r,e)=>{const t=Ds(r,e),s=[],n=r.token;return n.match(De)?s.push(f.translations.suggestions.capitalization):n.match(Ee)&&n.toLowerCase()!==n&&s.push(f.translations.suggestions.allUppercase),r.reversed&&r.token.length>=4&&s.push(f.translations.suggestions.reverseWords),r.l33t&&s.push(f.translations.suggestions.l33t),{warning:t,suggestions:s}},Ts=r=>r.regexName==="recentYear"?{warning:f.translations.warnings.recentYears,suggestions:[f.translations.suggestions.recentYears,f.translations.suggestions.associatedYears]}:{warning:null,suggestions:[]},As=r=>{let e=f.translations.warnings.extendedRepeat;return r.baseToken.length===1&&(e=f.translations.warnings.simpleRepeat),{warning:e,suggestions:[f.translations.suggestions.repeated]}},Cs=()=>({warning:f.translations.warnings.sequences,suggestions:[f.translations.suggestions.sequences]}),Is=r=>{let e=f.translations.warnings.keyPattern;return r.turns===1&&(e=f.translations.warnings.straightRow),{warning:e,suggestions:[f.translations.suggestions.longerKeyboardPattern]}},Rs=()=>null;const ve={warning:null,suggestions:[]};class Ps{constructor(){this.matchers={bruteforce:Ms,date:vs,dictionary:Es,regex:Ts,repeat:As,sequence:Cs,spatial:Is,separator:Rs},this.defaultFeedback={warning:null,suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(f.translations.suggestions.useWords,f.translations.suggestions.noNeed)}getFeedback(e,t){if(t.length===0)return this.defaultFeedback;if(e>2)return ve;const s=f.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let a=this.getMatchFeedback(n,t.length===1);return a!=null?a.suggestions.unshift(s):a={warning:null,suggestions:[s]},a}getLongestMatch(e){let t=e[0];return e.slice(1).forEach(n=>{n.token.length>t.token.length&&(t=n)}),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):f.matchers[e.pattern]&&"feedback"in f.matchers[e.pattern]?f.matchers[e.pattern].feedback(e,t):ve}}const Le=()=>new Date().getTime(),ws=(r,e,t)=>{const s=new Ps,n=new ys,a=se.mostGuessableMatchSequence(e,r),i=Le()-t,c=n.estimateAttackTimes(a.guesses);return j(C(C({calcTime:i},a),c),{feedback:s.getFeedback(c.score,a.sequence)})},Ls=(r,e)=>(e&&f.extendUserInputsDictionary(e),new ms().match(r)),js=(r,e)=>{const t=Le(),s=Ls(r,e);if(s instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return ws(s,r,t)};function Gs(r,e){const t=X({deptId:"",username:"",phone:"",status:""}),s=D(),n=D(),a=D([]),i=D(!0),c=D(),o=D({}),{switchStyle:u}=mt(),d=D(),p=D([]),b=D(!0),y=D(0),g=X({total:0,pageSize:10,currentPage:1,background:!0}),M=[{label:"勾选列",type:"selection",fixed:"left",reserveSelection:!0},{label:"用户编号",prop:"id",width:90},{label:"用户头像",prop:"avatar",cellRenderer:({row:l})=>I(K("el-image"),{fit:"cover","preview-teleported":!0,src:l.avatar,"preview-src-list":Array.of(l.avatar),class:"w-[24px] h-[24px] rounded-full align-middle"},null),width:90},{label:"用户名称",prop:"username",minWidth:130},{label:"用户昵称",prop:"nickname",minWidth:130},{label:"性别",prop:"sex",minWidth:90,cellRenderer:({row:l,props:h})=>I(K("el-tag"),{size:h.size,type:l.sex===1?"danger":"",effect:"plain"},{default:()=>[l.sex===1?"女":"男"]})},{label:"部门",prop:"dept.name",minWidth:90},{label:"手机号码",prop:"phone",minWidth:90,formatter:({phone:l})=>nt(l,{start:3,end:6})},{label:"状态",prop:"status",minWidth:90,cellRenderer:l=>{var h;return I(K("el-switch"),{size:l.props.size==="small"?"small":"default",loading:(h=o.value[l.index])==null?void 0:h.loading,modelValue:l.row.status,"onUpdate:modelValue":x=>l.row.status=x,"active-value":1,"inactive-value":0,"active-text":"已启用","inactive-text":"已停用","inline-prompt":!0,style:u.value,onChange:()=>A(l)},null)}},{label:"创建时间",minWidth:90,prop:"createTime",formatter:({createTime:l})=>rt(l).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:180,slot:"operation"}],T=Je(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]),v=X({newPwd:""}),m=[{color:"#e74242",text:"非常弱"},{color:"#EFBD47",text:"弱"},{color:"#ffa500",text:"一般"},{color:"#1bbf1b",text:"强"},{color:"#008000",text:"非常强"}],k=D(),S=D([]);function A({row:l,index:h}){at.confirm(`确认要<strong>${l.status===0?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${l.username}</strong>用户吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{o.value[h]=Object.assign({},o.value[h],{loading:!0}),setTimeout(()=>{o.value[h]=Object.assign({},o.value[h],{loading:!1}),$("已成功修改用户状态",{type:"success"})},300)}).catch(()=>{l.status===0?l.status=1:l.status=0})}function Y(l){}function G(l){$(`您删除了用户编号为${l.id}的这条数据`,{type:"success"}),w()}function L(l){}function _(l){}function je(l){y.value=l.length,r.value.setAdaptive()}function Oe(){y.value=0,r.value.getTableRef().clearSelection()}function _e(){const l=r.value.getTableRef().getSelectionRows();$(`已删除用户编号为 ${it(l,"id")} 的数据`,{type:"success"}),r.value.getTableRef().clearSelection()}function w(){return q(this,null,function*(){i.value=!0;const{data:l}=yield Mt(ot(t));a.value=l.list,g.total=l.total,g.pageSize=l.pageSize,g.currentPage=l.currentPage,setTimeout(()=>{i.value=!1},500)})}const Ne=l=>{l&&(l.resetFields(),t.deptId="",e.value.onTreeReset(),w())};function Ue({id:l,selected:h}){t.deptId=h?l:"",w()}function re(l){if(!l||!l.length)return;const h=[];for(let x=0;x<l.length;x++)l[x].disabled=l[x].status===0,re(l[x].children),h.push(l[x]);return h}function We(l="新增",h){var x,R,W,F,B,H,ie,oe,ce;V({title:`${l}用户`,props:{formInline:{title:l,higherDeptOptions:re(d.value),parentId:(x=h==null?void 0:h.dept.id)!=null?x:0,nickname:(R=h==null?void 0:h.nickname)!=null?R:"",username:(W=h==null?void 0:h.username)!=null?W:"",password:(F=h==null?void 0:h.password)!=null?F:"",phone:(B=h==null?void 0:h.phone)!=null?B:"",email:(H=h==null?void 0:h.email)!=null?H:"",sex:(ie=h==null?void 0:h.sex)!=null?ie:"",status:(oe=h==null?void 0:h.status)!=null?oe:1,remark:(ce=h==null?void 0:h.remark)!=null?ce:""}},width:"46%",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>Q(gt,{ref:s}),beforeSure:(Ye,{options:Ge})=>{const Be=s.value.getRef(),He=Ge.props.formInline;function le(){$(`您${l}了用户名称为${He.username}的这条数据`,{type:"success"}),Ye(),w()}Be.validate(qe=>{qe&&le()})}})}const ae=D();function Fe(l){V({title:"裁剪、上传头像",width:"40%",draggable:!0,closeOnClickModal:!1,contentRenderer:()=>Q(pt,{ref:ae,imgSrc:l.avatar,onCropper:h=>c.value=h}),beforeSure:h=>{h(),w()},closeCallBack:()=>ae.value.hidePopover()})}et(v,({newPwd:l})=>k.value=tt(l)?-1:js(l).score);function $e(l){V({title:`重置 ${l.username} 用户的密码`,width:"30%",draggable:!0,closeOnClickModal:!1,contentRenderer:()=>I(dt,null,[I(ct,{ref:n,model:v},{default:()=>[I(lt,{prop:"newPwd",rules:[{required:!0,message:"请输入新密码",trigger:"blur"}]},{default:()=>[I(ut,{clearable:!0,"show-password":!0,type:"password",modelValue:v.newPwd,"onUpdate:modelValue":h=>v.newPwd=h,placeholder:"请输入新密码"},null)]})]}),I("div",{class:"mt-4 flex"},[m.map(({color:h,text:x},R)=>I("div",{class:"w-[19vw]",style:{marginLeft:R!==0?"4px":0}},[I(ht,{striped:!0,"striped-flow":!0,duration:k.value===R?6:0,percentage:k.value>=R?100:0,color:h,"stroke-width":10,"show-text":!1},null),I("p",{class:"text-center",style:{color:k.value===R?h:""}},[x])]))])]),closeCallBack:()=>v.newPwd="",beforeSure:h=>{n.value.validate(x=>{x&&($(`已成功重置 ${l.username} 用户的密码`,{type:"success"}),h(),w())})}})}function ze(l){return q(this,null,function*(){var x,R,W,F;const h=(x=(yield vt({userId:l.id})).data)!=null?x:[];V({title:`分配 ${l.username} 用户的角色`,props:{formInline:{username:(R=l==null?void 0:l.username)!=null?R:"",nickname:(W=l==null?void 0:l.nickname)!=null?W:"",roleOptions:(F=S.value)!=null?F:[],ids:h}},width:"400px",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>Q(ft),beforeSure:(B,{options:H})=>{H.props.formInline,B()}})})}return st(()=>q(this,null,function*(){b.value=!0,w();const{data:l}=yield bt();d.value=de(l),p.value=de(l),b.value=!1,S.value=(yield yt()).data})),{form:t,loading:i,columns:M,dataList:a,treeData:p,treeLoading:b,selectedNum:y,pagination:g,buttonClass:T,onSearch:w,resetForm:Ne,onbatchDel:_e,openDialog:We,onTreeSelect:Ue,handleUpdate:Y,handleDelete:G,handleUpload:Fe,handleReset:$e,handleRole:ze,handleSizeChange:L,onSelectionCancel:Oe,handleCurrentChange:_,handleSelectionChange:je}}export{Gs as useUser};
