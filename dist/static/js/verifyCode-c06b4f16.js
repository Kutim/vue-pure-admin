import{t as o,a9 as R,af as u,$ as i,b as E}from"./index-be804494.js";const f=/^\d{6}$/,a=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/,C=Vue.reactive({password:[{validator:(s,r,e)=>{r===""?e(new Error(o(i("login.passwordReg")))):a.test(r)?e():e(new Error(o(i("login.passwordRuleReg"))))},trigger:"blur"}],verifyCode:[{validator:(s,r,e)=>{r===""?e(new Error(o(i("login.verifyCodeReg")))):R().verifyCode!==r?e(new Error(o(i("login.verifyCodeCorrectReg")))):e()},trigger:"blur"}]}),y=Vue.reactive({phone:[{validator:(s,r,e)=>{r===""?e(new Error(o(i("login.phoneReg")))):u(r)?e():e(new Error(o(i("login.phoneCorrectReg"))))},trigger:"blur"}],verifyCode:[{validator:(s,r,e)=>{r===""?e(new Error(o(i("login.verifyCodeReg")))):f.test(r)?e():e(new Error(o(i("login.verifyCodeSixReg"))))},trigger:"blur"}]}),$=Vue.reactive({phone:[{validator:(s,r,e)=>{r===""?e(new Error(o(i("login.phoneReg")))):u(r)?e():e(new Error(o(i("login.phoneCorrectReg"))))},trigger:"blur"}],verifyCode:[{validator:(s,r,e)=>{r===""?e(new Error(o(i("login.verifyCodeReg")))):f.test(r)?e():e(new Error(o(i("login.verifyCodeSixReg"))))},trigger:"blur"}],password:[{validator:(s,r,e)=>{r===""?e(new Error(o(i("login.passwordReg")))):a.test(r)?e():e(new Error(o(i("login.passwordRuleReg"))))},trigger:"blur"}]}),l=Vue.ref(!1),t=Vue.ref(null),g=Vue.ref(""),h=()=>({isDisabled:l,timer:t,text:g,start:async(e,d,n=60)=>{if(!e)return;const v=E(n,!0);await e.validateField(d,w=>{w&&(clearInterval(t.value),t.value=setInterval(()=>{n>0?(g.value=`${n}`,l.value=!0,n-=1):(g.value="",l.value=!1,clearInterval(t.value),n=v)},1e3))})},end:()=>{g.value="",l.value=!1,clearInterval(t.value)}});export{$ as a,C as l,y as p,h as u};