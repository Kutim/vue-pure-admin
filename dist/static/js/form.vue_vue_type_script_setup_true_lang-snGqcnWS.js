import{R as s}from"./index-Crwihmyd.js";import{K as k,dF as I,dI as C,d as R,r as v,b as d,e as c,c as B,w as l,u,B as V,f as F,k as S,C as D,i as e,al as E}from"./index-qI-8NwZF.js";import{u as N}from"./hooks-DFKmFKCZ.js";const O=k({name:[{required:!0,message:"部门名称为必填项",trigger:"blur"}],phone:[{validator:(i,m,r)=>{m===""||I(m)?r():r(new Error("请输入正确的手机号码格式"))},trigger:"blur"}],email:[{validator:(i,m,r)=>{m===""||C(m)?r():r(new Error("请输入正确的邮箱格式"))},trigger:"blur"}]}),P={key:0},K=R({__name:"form",props:{formInline:{default:()=>({higherDeptOptions:[],parentId:0,name:"",principal:"",phone:"",email:"",sort:0,status:1,remark:""})}},setup(i,{expose:m}){const r=i,f=v(),{switchStyle:b}=N(),a=v(r.formInline);function x(){return f.value}return m({getRef:x}),(q,o)=>{const g=d("el-cascader"),n=d("el-form-item"),p=d("el-input"),w=d("el-input-number"),h=d("el-switch"),y=d("el-row"),U=d("el-form");return c(),B(U,{ref_key:"ruleFormRef",ref:f,model:a.value,rules:u(O),"label-width":"82px"},{default:l(()=>[e(y,{gutter:30},{default:l(()=>[e(u(s),null,{default:l(()=>[e(n,{label:"上级部门"},{default:l(()=>[e(g,{modelValue:a.value.parentId,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value.parentId=t),class:"w-full",options:a.value.higherDeptOptions,props:{value:"id",label:"name",emitPath:!1,checkStrictly:!0},clearable:"",filterable:"",placeholder:"请选择上级部门"},{default:l(({node:t,data:_})=>[F("span",null,V(_.name),1),t.isLeaf?D("",!0):(c(),S("span",P," ("+V(_.children.length)+") ",1))]),_:1},8,["modelValue","options"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"部门名称",prop:"name"},{default:l(()=>[e(p,{modelValue:a.value.name,"onUpdate:modelValue":o[1]||(o[1]=t=>a.value.name=t),clearable:"",placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"部门负责人"},{default:l(()=>[e(p,{modelValue:a.value.principal,"onUpdate:modelValue":o[2]||(o[2]=t=>a.value.principal=t),clearable:"",placeholder:"请输入部门负责人"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"手机号",prop:"phone"},{default:l(()=>[e(p,{modelValue:a.value.phone,"onUpdate:modelValue":o[3]||(o[3]=t=>a.value.phone=t),clearable:"",placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"邮箱",prop:"email"},{default:l(()=>[e(p,{modelValue:a.value.email,"onUpdate:modelValue":o[4]||(o[4]=t=>a.value.email=t),clearable:"",placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"排序"},{default:l(()=>[e(w,{modelValue:a.value.sort,"onUpdate:modelValue":o[5]||(o[5]=t=>a.value.sort=t),min:0,max:9999,"controls-position":"right"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(s),{value:12,xs:24,sm:24},{default:l(()=>[e(n,{label:"部门状态"},{default:l(()=>[e(h,{modelValue:a.value.status,"onUpdate:modelValue":o[6]||(o[6]=t=>a.value.status=t),"inline-prompt":"","active-value":1,"inactive-value":0,"active-text":"启用","inactive-text":"停用",style:E(u(b))},null,8,["modelValue","style"])]),_:1})]),_:1}),e(u(s),null,{default:l(()=>[e(n,{label:"备注"},{default:l(()=>[e(p,{modelValue:a.value.remark,"onUpdate:modelValue":o[7]||(o[7]=t=>a.value.remark=t),placeholder:"请输入备注信息",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{K as _};
