import{b as t}from"./data-nzB1HH_v.js";import{d as r,b as n,e as s,c as p,u as l}from"./index-IxQI2uTX.js";const d=r({__name:"sortable",setup(c){const a=[{label:"日期",prop:"date",sortable:!0},{label:"姓名",prop:"name"},{label:"地址",prop:"address",formatter:({address:e})=>`格式化后的内容：${e}`}];return(e,m)=>{const o=n("pure-table");return s(),p(o,{data:l(t),columns:a,"default-sort":{prop:"date",order:"ascending"}},null,8,["data"])}}});export{d as _};