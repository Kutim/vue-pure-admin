import{useRole as z}from"./hook-BccoXZ_W.js";import{R as N,P as E}from"./refresh-CjefTqe8.js";import{u as f}from"./hooks-N-_eZusv.js";import{D as W}from"./delete-BUVqmax5.js";import{d as I,r as D,b as s,j as U,e as y,k as w,i as a,w as r,u as o,h as d,m as j,f as C,B as A,C as $,_ as q}from"./index-DdwK7mwU.js";import"./system-CqRCEtuY.js";import"./hooks-D00-TfR9.js";import"./epTheme-Dkm9704Q.js";import"./sortable.esm-6WsHlDA5.js";const G=()=>[{text:"今天",value:()=>{const e=new Date;e.setHours(0,0,0,0);const t=new Date;return t.setHours(23,59,59,999),[e,t]}},{text:"昨天",value:()=>{const e=new Date;e.setDate(e.getDate()-1),e.setHours(0,0,0,0);const t=new Date;return t.setDate(t.getDate()-1),t.setHours(23,59,59,999),[e,t]}},{text:"前天",value:()=>{const e=new Date;e.setDate(e.getDate()-2),e.setHours(0,0,0,0);const t=new Date;return t.setDate(t.getDate()-2),t.setHours(23,59,59,999),[e,t]}},{text:"本周",value:()=>{const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay()+(e.getDay()===0?-6:1));t.setHours(0,0,0,0);const n=new Date(t.getTime()+6*24*60*60*1e3+23*60*60*1e3+59*60*1e3+59*1e3+999);return[t,n]}},{text:"上周",value:()=>{const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay()-7+(e.getDay()===0?-6:1));t.setHours(0,0,0,0);const n=new Date(t.getTime()+6*24*60*60*1e3+23*60*60*1e3+59*60*1e3+59*1e3+999);return[t,n]}},{text:"本月",value:()=>{const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1);t.setHours(0,0,0,0);const n=new Date(e.getFullYear(),e.getMonth()+1,0);return n.setHours(23,59,59,999),[t,n]}},{text:"上个月",value:()=>{const e=new Date,t=new Date(e.getFullYear(),e.getMonth()-1,1);t.setHours(0,0,0,0);const n=new Date(e.getFullYear(),e.getMonth(),0);return n.setHours(23,59,59,999),[t,n]}},{text:"本年",value:()=>{const e=new Date,t=new Date(e.getFullYear(),0,1);t.setHours(0,0,0,0);const n=new Date(e.getFullYear(),11,31);return n.setHours(23,59,59,999),[t,n]}}],J={class:"main"},K={key:0,class:"bg-[var(--el-fill-color-light)] w-full h-[46px] mb-2 pl-4 flex items-center"},Q={class:"flex-auto"},X={style:{"font-size":"var(--el-font-size-base)"},class:"text-[rgba(42,46,54,0.5)] dark:text-[rgba(220,220,242,0.5)]"},Z=I({name:"LoginLog",__name:"index",setup(e){const t=D(),n=D(),{form:c,loading:g,columns:b,dataList:v,pagination:x,selectedNum:p,onSearch:_,clearAll:k,resetForm:H,onbatchDel:S,handleSizeChange:Y,onSelectionCancel:M,handleCurrentChange:O,handleSelectionChange:R}=z(n);return(ee,i)=>{const V=s("el-input"),m=s("el-form-item"),F=s("el-date-picker"),u=s("el-button"),L=s("el-form"),h=s("el-popconfirm"),P=s("pure-table"),T=U("motion-fade");return y(),w("div",J,[a(L,{ref_key:"formRef",ref:t,inline:!0,model:o(c),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px]"},{default:r(()=>[a(m,{label:"用户名",prop:"username"},{default:r(()=>[a(V,{modelValue:o(c).username,"onUpdate:modelValue":i[0]||(i[0]=l=>o(c).username=l),placeholder:"请输入用户名",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),a(m,{label:"登录时间",prop:"loginTime"},{default:r(()=>[a(F,{modelValue:o(c).loginTime,"onUpdate:modelValue":i[1]||(i[1]=l=>o(c).loginTime=l),shortcuts:o(G)(),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期时间","end-placeholder":"结束日期时间"},null,8,["modelValue","shortcuts"])]),_:1}),a(m,null,{default:r(()=>[a(u,{type:"primary",icon:o(f)("ri:search-line"),loading:o(g),onClick:o(_)},{default:r(()=>[d(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),a(u,{icon:o(f)(o(N)),onClick:i[2]||(i[2]=l=>o(H)(t.value))},{default:r(()=>[d(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),a(o(E),{title:"登录日志（仅演示，操作后不生效）",columns:o(b),onRefresh:o(_)},{buttons:r(()=>[a(h,{title:"确定要删除所有日志数据吗？",onConfirm:o(k)},{reference:r(()=>[a(u,{type:"danger",icon:o(f)(o(W))},{default:r(()=>[d(" 清空日志 ")]),_:1},8,["icon"])]),_:1},8,["onConfirm"])]),default:r(({size:l,dynamicColumns:B})=>[o(p)>0?j((y(),w("div",K,[C("div",Q,[C("span",X," 已选 "+A(o(p))+" 项 ",1),a(u,{type:"primary",text:"",onClick:o(M)},{default:r(()=>[d(" 取消选择 ")]),_:1},8,["onClick"])]),a(h,{title:"是否确认删除?",onConfirm:o(S)},{reference:r(()=>[a(u,{type:"danger",text:"",class:"mr-1"},{default:r(()=>[d(" 批量删除 ")]),_:1})]),_:1},8,["onConfirm"])])),[[T]]):$("",!0),a(P,{ref_key:"tableRef",ref:n,"row-key":"id","align-whole":"center","table-layout":"auto",loading:o(g),size:l,adaptive:"",adaptiveConfig:{offsetBottom:108},data:o(v),columns:B,pagination:o(x),paginationSmall:l==="small","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:o(R),onPageSizeChange:o(Y),onPageCurrentChange:o(O)},null,8,["loading","size","data","columns","pagination","paginationSmall","header-cell-style","onSelectionChange","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["columns","onRefresh"])])}}}),ue=q(Z,[["__scopeId","data-v-ce0467b1"]]);export{ue as default};