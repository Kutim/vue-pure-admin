import{_ as T}from"./index-9893edff.js";const w=Vue.defineComponent({name:"Resizer",props:{split:{type:String,required:!0},className:{type:String,default:""}},setup(e){const s=Vue.computed(()=>["splitter-pane-resizer",e.split,e.className].join(" "));return()=>Vue.createVNode("div",{class:Vue.unref(s)},null)}});const N=Vue.defineComponent({name:"SplitPane",components:{resizer:w},props:{splitSet:{type:Object,require:!0}},emits:["resize"],setup(e,s){var d,p,V,f,v;const n=Vue.ref(!1),l=Vue.ref(!1),i=Vue.ref((d=e.splitSet)==null?void 0:d.defaultPercent),r=((p=e.splitSet)==null?void 0:p.split)==="vertical"?"width":"height",C=((V=e.splitSet)==null?void 0:V.split)==="vertical"?"left":"top",P=Vue.ref(["splitter-pane splitter-paneL",(f=e.splitSet)==null?void 0:f.split]),x=Vue.ref(["splitter-pane splitter-paneR",(v=e.splitSet)==null?void 0:v.split]),y=Vue.computed(()=>{var t;return n.value?((t=e.splitSet)==null?void 0:t.split)==="vertical"?{cursor:"col-resize"}:{cursor:"row-resize"}:{cursor:"default"}}),z=()=>{l.value||(i.value=50,s.emit("resize",i.value))},M=()=>{n.value=!0,l.value=!1},b=()=>{n.value=!1},E=t=>{var _,m,h,S,g;if((t.buttons===0||t.which===0)&&(n.value=!1),n.value){let o=0,u=t.currentTarget;if(((_=e.splitSet)==null?void 0:_.split)==="vertical")for(;u;)o+=u.offsetLeft,u=u.offsetParent;else for(;u;)o+=u.offsetTop,u=u.offsetParent;const L=((m=e.splitSet)==null?void 0:m.split)==="vertical"?t.pageX:t.pageY,R=((h=e.splitSet)==null?void 0:h.split)==="vertical"?t.currentTarget.offsetWidth:t.currentTarget.offsetHeight,c=Math.floor((L-o)/R*1e4)/100;c>((S=e.splitSet)==null?void 0:S.minPercent)&&c<100-((g=e.splitSet)==null?void 0:g.minPercent)&&(i.value=c),s.emit("resize",i.value),l.value=!0}};return()=>{var t;return Vue.createVNode(Vue.Fragment,null,[Vue.createVNode("div",{class:"vue-splitter-container clearfix",style:Vue.unref(y),onMouseup:()=>b(),onMousemove:()=>E(event)},[Vue.createVNode("div",{class:Vue.unref(P),style:{[Vue.unref(r)]:Vue.unref(i)+"%"}},[s.slots.paneL()]),Vue.createVNode(w,{style:`${Vue.unref([C])}:${Vue.unref(i)}%`,split:(t=e.splitSet)==null?void 0:t.split,onMousedown:()=>M(),onClick:()=>z()},null),Vue.createVNode("div",{class:Vue.unref(x),style:{[Vue.unref(r)]:100-Vue.unref(i)+"%"}},[s.slots.paneR()]),Vue.withDirectives(Vue.createVNode("div",{class:"vue-splitter-container-mask"},null),[[Vue.vShow,Vue.unref(n)]])])])}}}),a=e=>(Vue.pushScopeId("data-v-4ad2f9db"),e=e(),Vue.popScopeId(),e),k=a(()=>Vue.createElementVNode("div",{class:"card-header"},[Vue.createElementVNode("span",{class:"font-medium"},"切割面板组件")],-1)),B={class:"split-pane"},I=a(()=>Vue.createElementVNode("div",{class:"dv-a"},"A",-1)),$=a(()=>Vue.createElementVNode("div",{class:"dv-b"},"B",-1)),j=a(()=>Vue.createElementVNode("div",{class:"dv-c"},"C",-1)),q=Vue.defineComponent({name:"SplitPane"}),D=Vue.defineComponent({...q,setup(e){const s=Vue.reactive({minPercent:20,defaultPercent:40,split:"vertical"}),n=Vue.reactive({minPercent:20,defaultPercent:40,split:"horizontal"});return(l,i)=>{const r=Vue.resolveComponent("el-card");return Vue.openBlock(),Vue.createBlock(r,{shadow:"never"},{header:Vue.withCtx(()=>[k]),default:Vue.withCtx(()=>[Vue.createElementVNode("div",B,[Vue.createVNode(Vue.unref(N),{splitSet:s},{paneL:Vue.withCtx(()=>[I]),paneR:Vue.withCtx(()=>[Vue.createVNode(Vue.unref(N),{splitSet:n},{paneL:Vue.withCtx(()=>[$]),paneR:Vue.withCtx(()=>[j]),_:1},8,["splitSet"])]),_:1},8,["splitSet"])])]),_:1})}}});const A=T(D,[["__scopeId","data-v-4ad2f9db"]]);export{A as default};