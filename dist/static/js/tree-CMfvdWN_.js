var W=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var $=(o,t,l)=>t in o?W(o,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[t]=l,g=(o,t)=>{for(var l in t||(t={}))Z.call(t,l)&&$(o,l,t[l]);if(M)for(var l of M(t))ee.call(t,l)&&$(o,l,t[l]);return o},x=(o,t)=>X(o,Y(t));import{e as w,k as y,f as m,d as te,r as v,V as oe,ai as le,b as s,j as ne,m as B,i as a,w as d,R as ae,E as O,u,B as E,h as N,al as R,P as re,_ as ie}from"./index-qI-8NwZF.js";import{u as se}from"./hooks-WhGxrRJZ.js";import{d as ce}from"./git-branch-line-zmPAFode.js";import{d as de}from"./more-2-fill-476mFkdN.js";const he={width:1024,height:1024,body:'<path fill="currentColor" d="M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"/><path fill="currentColor" d="M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"/><path fill="currentColor" d="M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"/>'},ue=he,pe={width:1024,height:1024,body:'<path fill="currentColor" d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"/><path fill="currentColor" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"/><path fill="currentColor" d="M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"/>'},_e=pe,fe={width:"32",height:"32",viewBox:"0 0 24 24"},ve=m("path",{fill:"currentColor",d:"M22 4V2H2v2h9v14.17l-5.5-5.5-1.42 1.41L12 22l7.92-7.92-1.42-1.41-5.5 5.5V4z"},null,-1),me=[ve];function ge(o,t){return w(),y("svg",fe,[...me])}const xe={render:ge},we={width:"32",height:"32",viewBox:"0 0 24 24"},ye=m("path",{fill:"currentColor",d:"M4 2H2v20h2v-9h14.17l-5.5 5.5 1.41 1.42L22 12l-7.92-7.92-1.41 1.42 5.5 5.5H4z"},null,-1),ze=[ye];function Ce(o,t){return w(),y("svg",we,[...ze])}const be={render:Ce},ke={class:"flex items-center h-[34px]"},He=te({__name:"tree",props:{treeLoading:Boolean,treeData:Array},emits:["tree-select"],setup(o,{expose:t,emit:l}){const z=o,j=l,C=v(),p=v(!0),h=v(""),r=v({}),{proxy:D}=re(),L={children:"children",label:"name"},A=oe(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]),S=(n,e)=>n?e.name.includes(n):!0;function q(n){var i,_;const e=n.$treeNodeId;r.value[e]=(i=r.value[e])!=null&&i.highlight?Object.assign({id:e},r.value[e],{highlight:!1}):Object.assign({id:e},r.value[e],{highlight:!0}),Object.values(r.value).forEach(f=>{f.id!==e&&(f.highlight=!1)}),j("tree-select",(_=r.value[e])!=null&&_.highlight?Object.assign(x(g({},n),{selected:!0})):Object.assign(x(g({},n),{selected:!1})))}function b(n){p.value=n;const e=D.$refs.treeRef.store._getAllNodes();for(let i=0;i<e.length;i++)e[i].expanded=n}function P(){r.value={},h.value="",b(!0)}return le(h,n=>{C.value.filter(n)}),t({onTreeReset:P}),(n,e)=>{const i=s("IconifyIconOffline"),_=s("el-icon"),f=s("el-input"),T=s("el-button"),U=s("el-dropdown-item"),F=s("el-dropdown-menu"),G=s("el-dropdown"),J=s("el-divider"),K=s("el-tree"),Q=ne("loading");return B((w(),y("div",{class:"h-full bg-bg_color overflow-auto",style:R({minHeight:"calc(100vh - 133px)"})},[m("div",ke,[a(f,{modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=c=>h.value=c),class:"ml-2",size:"small",placeholder:"请输入部门名称",clearable:""},{suffix:d(()=>[a(_,{class:"el-input__icon"},{default:d(()=>[B(a(i,{icon:"search"},null,512),[[ae,h.value.length===0]])]),_:1})]),_:1},8,["modelValue"]),a(G,{"hide-on-click":!1},{dropdown:d(()=>[a(F,null,{default:d(()=>[a(U,null,{default:d(()=>[a(T,{class:O(A.value),link:"",type:"primary",icon:u(se)(p.value?u(xe):u(be)),onClick:e[1]||(e[1]=c=>b(!p.value))},{default:d(()=>[N(E(p.value?"折叠全部":"展开全部"),1)]),_:1},8,["class","icon"])]),_:1})]),_:1})]),default:d(()=>[a(i,{class:"w-[28px] cursor-pointer",width:"18px",icon:u(de)},null,8,["icon"])]),_:1})]),a(J),a(K,{ref_key:"treeRef",ref:C,data:z.treeData,"node-key":"id",size:"small",props:L,"default-expand-all":"","expand-on-click-node":!1,"filter-node-method":S,onNodeClick:q},{default:d(({node:c,data:k})=>{var H,V,I;return[m("span",{class:O(["pl-1","pr-1","rounded","flex","items-center","select-none","hover:text-primary",h.value.trim().length>0&&c.label.includes(h.value)&&"text-red-500",(H=r.value[c.id])!=null&&H.highlight?"dark:text-primary":""]),style:R({color:(V=r.value[c.id])!=null&&V.highlight?"var(--el-color-primary)":"",background:(I=r.value[c.id])!=null&&I.highlight?"var(--el-color-primary-light-7)":"transparent"})},[a(i,{icon:k.type===1?u(ue):k.type===2?u(_e):u(ce)},null,8,["icon"]),N(" "+E(c.label),1)],6)]}),_:1},8,["data"])],4)),[[Q,z.treeLoading]])}}}),Oe=ie(He,[["__scopeId","data-v-ee7a4810"]]);export{Oe as default};
