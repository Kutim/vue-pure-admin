import{P as k}from"./print-B-zH8tbv.js";import{_ as V}from"./pieChart.vue_vue_type_script_setup_true_lang-yAth1bL-.js";import{d as A,r as C,c as m,w as t,b as a,j as I,e as c,f as l,i as e,k as L,l as P,F as B,h as D,m as v,p as G,q as E,_ as z}from"./index-DdwK7mwU.js";const r=i=>(G("data-v-639f4ef4"),i=i(),E(),i),F={class:"card-header"},j=r(()=>l("span",{class:"font-medium"},"打印功能（报表、图表、图片）",-1)),q={class:"flex"},R=r(()=>l("p",{class:"font-medium text-lg text-center"},"Table",-1)),U=r(()=>l("p",{class:"font-medium text-lg text-center"},"Echart",-1)),$=r(()=>l("p",{class:"font-medium text-lg text-center"},"Image",-1)),H=r(()=>l("img",{src:"https://pure-admin-utils.netlify.app/logo.png",alt:"avatars",class:"img mt-[10px] m-auto"},null,-1)),J=A({name:"Print",__name:"index",setup(i){const _=C("1"),g=[{value:"1",el:".el-table",label:"Table"},{value:"2",el:".echart",label:"Echart"},{value:"3",el:".img",label:"Image"}];function b(){var s;const o=(s=g.filter(p=>p.value===_.value)[0])==null?void 0:s.el;k(o).toPrint}const x=({rowIndex:o})=>o===1?"warning-row":o===3?"success-row":"",h=[{date:"2016-05-03",name:"Tom",age:18,address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",age:18,address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",age:18,address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",age:18,address:"No. 189, Grove St, Los Angeles"}];return(o,s)=>{const p=a("el-option"),y=a("el-select"),w=a("el-button"),d=a("el-table-column"),N=a("el-table"),u=a("el-col"),S=a("el-row"),T=a("el-card"),f=I("motion");return c(),m(T,{shadow:"never"},{header:t(()=>[l("div",F,[j,l("div",q,[e(y,{modelValue:_.value,"onUpdate:modelValue":s[0]||(s[0]=n=>_.value=n),class:"!w-[100px] mr-2",placeholder:"Select",size:"small"},{default:t(()=>[(c(),L(B,null,P(g,n=>e(p,{key:n.value,label:n.label,value:n.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),e(w,{size:"small",type:"primary",onClick:b},{default:t(()=>[D(" 打印 ")]),_:1})])])]),default:t(()=>[e(S,{gutter:24},{default:t(()=>[v((c(),m(u,{xs:24,sm:24,md:24,lg:24,xl:24,initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:200}}},{default:t(()=>[R,e(N,{border:"",data:h,"row-class-name":x,class:"el-table w-full mt-[10px]"},{default:t(()=>[e(d,{prop:"date",label:"Date"}),e(d,{prop:"name",label:"Name"}),e(d,{prop:"age",label:"age"}),e(d,{prop:"address",label:"Address"})]),_:1})]),_:1})),[[f]]),v((c(),m(u,{xs:11,sm:11,md:11,lg:11,xl:11,initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:200}}},{default:t(()=>[U,e(V,{class:"echart mt-[10px]"})]),_:1})),[[f]]),v((c(),m(u,{xs:11,sm:11,md:11,lg:11,xl:11,initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:200}}},{default:t(()=>[$,H]),_:1})),[[f]])]),_:1})]),_:1})}}}),Q=z(J,[["__scopeId","data-v-639f4ef4"]]);export{Q as default};