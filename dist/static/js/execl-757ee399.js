import{u as d,w as y}from"./xlsx-f5126985.js";import{d as $,b as c,c as g,w as l,e as C,i as h,g as i,f as u,h as f}from"./index-16a5163c.js";const v={class:"font-medium"},E={class:"h-[25rem] mt-3"},z=$({name:"Excel",__name:"execl",setup(B){const k=(o=10,t="column-",a)=>Array.from({length:o}).map((s,e)=>({...a,key:`${t}${e}`,dataKey:`${t}${e}`,title:`Column ${e}`,width:150})),x=(o,t=200,a="row-")=>Array.from({length:t}).map((s,e)=>o.reduce((n,r,m)=>(n[r.dataKey]=`Row ${e} - Col ${m}`,n),{id:`${a}${e}`,parentId:null})),_=k(10),p=x(_,1e3),b=()=>{const o=p.map(e=>{const n=[];return _.forEach(r=>{n.push(e[r.dataKey])}),n}),t=[];_.forEach(e=>{t.push(e.title)}),o.unshift(t);const a=d.aoa_to_sheet(o),s=d.book_new();d.book_append_sheet(s,a,"数据报表"),y(s,"tableV2.xlsx")};return(o,t)=>{const a=c("el-link"),s=c("el-button"),e=c("el-table-v2"),n=c("el-auto-resizer"),r=c("el-card");return C(),g(r,{shadow:"never"},{header:l(()=>[h("div",v,[i(" 导出Execl（ "),u(a,{href:"https://github.com/SheetJS/sheetjs",target:"_blank",style:{margin:"0 5px 4px 0","font-size":"16px"}},{default:l(()=>[i(" github地址 ")]),_:1}),i(" ） ")])]),default:l(()=>[u(s,{type:"primary",onClick:b},{default:l(()=>[i("导出Excel")]),_:1}),h("div",E,[u(n,null,{default:l(({height:m,width:w})=>[u(e,{columns:f(_),data:f(p),width:w,height:m,fixed:""},null,8,["columns","data","width","height"])]),_:1})])]),_:1})}}});export{z as default};
