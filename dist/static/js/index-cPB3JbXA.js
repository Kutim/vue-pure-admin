var m=Object.defineProperty;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var p=(n,e,t)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,a=(n,e)=>{for(var t in e||(e={}))h.call(e,t)&&p(n,t,e[t]);if(i)for(var t of i(e))v.call(e,t)&&p(n,t,e[t]);return n};import{d as x,aR as y,r as c,o as C,aI as g,c as b,w as M,X as P,af as R,D as _,b as T,e as $,U as k,M as w}from"./index-C6_rv3gy.js";const H=x({__name:"index",props:{lineClamp:{type:[String,Number]},tippyProps:{type:Object,default:()=>({})}},setup(n){const e=n,t=y(),l=c(),o=c(),u=s=>e.lineClamp?s.scrollHeight>s.clientHeight:s.scrollWidth>s.clientWidth,r=()=>a({content:_(t.content||t.default)},e.tippyProps);function f(s){u(s.target)?(o.value.setProps(r()),o.value.enable()):o.value.disable()}return C(()=>{var s;o.value=g((s=l.value)==null?void 0:s.$el,r())}),(s,S)=>{const d=T("el-text");return $(),b(d,P(a({truncated:!n.lineClamp,lineClamp:n.lineClamp},s.$attrs),{ref_key:"textRef",ref:l,onMouseover:R(f,["self"])}),{default:M(()=>[k(s.$slots,"default")]),_:3},16)}}}),j=w(H);export{j as R};
