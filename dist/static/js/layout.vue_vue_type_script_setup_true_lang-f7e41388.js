import{t as r}from"./data-e912cafb.js";const _=Vue.defineComponent({__name:"layout",setup(p){const e=Vue.ref("fixed"),a=[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}];return(d,o)=>{const t=Vue.resolveComponent("el-radio-button"),l=Vue.resolveComponent("el-radio-group"),u=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n)},{default:Vue.withCtx(()=>[Vue.createVNode(t,{label:"fixed"}),Vue.createVNode(t,{label:"auto"})]),_:1},8,["modelValue"]),Vue.createVNode(u,{data:Vue.unref(r),columns:a,"table-layout":e.value},null,8,["data","table-layout"])])}}});export{_};