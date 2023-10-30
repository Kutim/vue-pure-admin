import{useRole as T}from"./hook2.js";import{R as U,D as I,P as N}from"./refresh.js";import{u as s}from"./hooks.js";import{d as j}from"./edit-pen.js";import{d as E}from"./search.js";import{d as F}from"./menu.js";import{d as L}from"./add-circle-line.js";import{d as M,r as O,c as t,g as q,n as A,j as o,w as l,u as e,i as m,_ as G}from"./index.js";import"./form.vue_vue_type_script_setup_true_lang3.js";import"./system.js";import"./hooks2.js";import"./epTheme.js";import"./sortable.esm.js";const H={class:"main"},J=M({name:"Role",__name:"index",setup(K){const d=O(),{form:r,loading:u,columns:h,dataList:b,pagination:y,onSearch:_,resetForm:v,openDialog:f,handleMenu:k,handleDelete:x,handleSizeChange:V,handleCurrentChange:R,handleSelectionChange:S}=T();return(Q,a)=>{const g=t("el-input"),p=t("el-form-item"),C=t("el-option"),$=t("el-select"),i=t("el-button"),w=t("el-form"),P=t("el-popconfirm"),D=t("pure-table");return q(),A("div",H,[o(w,{ref_key:"formRef",ref:d,inline:!0,model:e(r),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px]"},{default:l(()=>[o(p,{label:"角色名称：",prop:"name"},{default:l(()=>[o(g,{modelValue:e(r).name,"onUpdate:modelValue":a[0]||(a[0]=n=>e(r).name=n),placeholder:"请输入角色名称",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),o(p,{label:"角色标识：",prop:"code"},{default:l(()=>[o(g,{modelValue:e(r).code,"onUpdate:modelValue":a[1]||(a[1]=n=>e(r).code=n),placeholder:"请输入角色标识",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),o(p,{label:"状态：",prop:"status"},{default:l(()=>[o($,{modelValue:e(r).status,"onUpdate:modelValue":a[2]||(a[2]=n=>e(r).status=n),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:l(()=>[o(C,{label:"已启用",value:"1"}),o(C,{label:"已停用",value:"0"})]),_:1},8,["modelValue"])]),_:1}),o(p,null,{default:l(()=>[o(i,{type:"primary",icon:e(s)(e(E)),loading:e(u),onClick:e(_)},{default:l(()=>[m(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(i,{icon:e(s)(e(U)),onClick:a[3]||(a[3]=n=>e(v)(d.value))},{default:l(()=>[m(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e(N),{title:"角色列表（仅演示，操作后不生效）",columns:e(h),onRefresh:e(_)},{buttons:l(()=>[o(i,{type:"primary",icon:e(s)(e(L)),onClick:a[4]||(a[4]=n=>e(f)())},{default:l(()=>[m(" 新增角色 ")]),_:1},8,["icon"])]),default:l(({size:n,dynamicColumns:z})=>[o(D,{"align-whole":"center",showOverflowTooltip:"","table-layout":"auto",loading:e(u),size:n,adaptive:"",data:e(b),columns:z,pagination:e(y),paginationSmall:n==="small","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:e(S),onPageSizeChange:e(V),onPageCurrentChange:e(R)},{operation:l(({row:c})=>[o(i,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(s)(e(j)),onClick:B=>e(f)("编辑",c)},{default:l(()=>[m(" 修改 ")]),_:2},1032,["size","icon","onClick"]),o(i,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(s)(e(F)),onClick:e(k)},{default:l(()=>[m(" 菜单权限 ")]),_:2},1032,["size","icon","onClick"]),o(P,{title:`是否确认删除角色名称为${c.name}的这条数据`,onConfirm:B=>e(x)(c)},{reference:l(()=>[o(i,{class:"reset-margin",link:"",type:"primary",size:n,icon:e(s)(e(I))},{default:l(()=>[m(" 删除 ")]),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"])]),_:2},1032,["loading","size","data","columns","pagination","paginationSmall","header-cell-style","onSelectionChange","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["columns","onRefresh"])])}}});const me=G(J,[["__scopeId","data-v-3efa515c"]]);export{me as default};
