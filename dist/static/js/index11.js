import{a2 as L,Q as x,as as k,d as I,an as P,ar as C,at as E,ag as j,e as B,l as S,n as $,ae as J,g as h,_ as b,S as T,f as D,u as O}from"./index.js";var U={exports:{}};(function(g,m){(function(p,v){g.exports=v()})(L,function(){function p(e){var r=[];return e.AMapUI&&r.push(v(e.AMapUI)),e.Loca&&r.push(w(e.Loca)),Promise.all(r)}function v(e){return new Promise(function(r,a){var i=[];if(e.plugins)for(var t=0;t<e.plugins.length;t+=1)n.AMapUI.plugins.indexOf(e.plugins[t])==-1&&i.push(e.plugins[t]);if(u.AMapUI===o.failed)a("前次请求 AMapUI 失败");else if(u.AMapUI===o.notload){u.AMapUI=o.loading,n.AMapUI.version=e.version||n.AMapUI.version,t=n.AMapUI.version;var l=document.body||document.head,c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/ui/"+t+"/main.js",c.onerror=function(s){u.AMapUI=o.failed,a("请求 AMapUI 失败")},c.onload=function(){if(u.AMapUI=o.loaded,i.length)window.AMapUI.loadUI(i,function(){for(var s=0,M=i.length;s<M;s++){var _=i[s].split("/").slice(-1)[0];window.AMapUI[_]=arguments[s]}for(r();d.AMapUI.length;)d.AMapUI.splice(0,1)[0]()});else for(r();d.AMapUI.length;)d.AMapUI.splice(0,1)[0]()},l.appendChild(c)}else u.AMapUI===o.loaded?e.version&&e.version!==n.AMapUI.version?a("不允许多个版本 AMapUI 混用"):i.length?window.AMapUI.loadUI(i,function(){for(var s=0,M=i.length;s<M;s++){var _=i[s].split("/").slice(-1)[0];window.AMapUI[_]=arguments[s]}r()}):r():e.version&&e.version!==n.AMapUI.version?a("不允许多个版本 AMapUI 混用"):d.AMapUI.push(function(s){s?a(s):i.length?window.AMapUI.loadUI(i,function(){for(var M=0,_=i.length;M<_;M++){var y=i[M].split("/").slice(-1)[0];window.AMapUI[y]=arguments[M]}r()}):r()})})}function w(e){return new Promise(function(r,a){if(u.Loca===o.failed)a("前次请求 Loca 失败");else if(u.Loca===o.notload){u.Loca=o.loading,n.Loca.version=e.version||n.Loca.version;var i=n.Loca.version,t=n.AMap.version.startsWith("2"),l=i.startsWith("2");if(t&&!l||!t&&l)a("JSAPI 与 Loca 版本不对应！！");else{t=n.key,l=document.body||document.head;var c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/loca?v="+i+"&key="+t,c.onerror=function(s){u.Loca=o.failed,a("请求 AMapUI 失败")},c.onload=function(){for(u.Loca=o.loaded,r();d.Loca.length;)d.Loca.splice(0,1)[0]()},l.appendChild(c)}}else u.Loca===o.loaded?e.version&&e.version!==n.Loca.version?a("不允许多个版本 Loca 混用"):r():e.version&&e.version!==n.Loca.version?a("不允许多个版本 Loca 混用"):d.Loca.push(function(s){s?a(s):a()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var o;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(o||(o={}));var n={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},u={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},d={AMap:[],AMapUI:[],Loca:[]},f=[],A=function(e){typeof e=="function"&&(u.AMap===o.loaded?e(window.AMap):f.push(e))};return{load:function(e){return new Promise(function(r,a){if(u.AMap==o.failed)a("");else if(u.AMap==o.notload){var i=e.key,t=e.version,l=e.plugins;i?(window.AMap&&location.host!=="lbs.amap.com"&&a("禁止多种API加载方式混用"),n.key=i,n.AMap.version=t||n.AMap.version,n.AMap.plugins=l||n.AMap.plugins,u.AMap=o.loading,t=document.body||document.head,window.___onAPILoaded=function(s){if(delete window.___onAPILoaded,s)u.AMap=o.failed,a(s);else for(u.AMap=o.loaded,p(e).then(function(){r(window.AMap)}).catch(a);f.length;)f.splice(0,1)[0]()},l=document.createElement("script"),l.type="text/javascript",l.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+n.AMap.version+"&key="+i+"&plugin="+n.AMap.plugins.join(","),l.onerror=function(s){u.AMap=o.failed,a(s)},t.appendChild(l)):a("请填写key")}else if(u.AMap==o.loaded)if(e.key&&e.key!==n.key)a("多个不一致的 key");else if(e.version&&e.version!==n.AMap.version)a("不允许多个版本 JSAPI 混用");else{if(i=[],e.plugins)for(t=0;t<e.plugins.length;t+=1)n.AMap.plugins.indexOf(e.plugins[t])==-1&&i.push(e.plugins[t]);i.length?window.AMap.plugin(i,function(){p(e).then(function(){r(window.AMap)}).catch(a)}):p(e).then(function(){r(window.AMap)}).catch(a)}else if(e.key&&e.key!==n.key)a("多个不一致的 key");else if(e.version&&e.version!==n.AMap.version)a("不允许多个版本 JSAPI 混用");else{var c=[];if(e.plugins)for(t=0;t<e.plugins.length;t+=1)n.AMap.plugins.indexOf(e.plugins[t])==-1&&c.push(e.plugins[t]);A(function(){c.length?window.AMap.plugin(c,function(){p(e).then(function(){r(window.AMap)}).catch(a)}):p(e).then(function(){r(window.AMap)}).catch(a)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,n={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},u={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},d={AMap:[],AMapUI:[],Loca:[]}}}})})(U);var q=U.exports;const N=x(q),W=g=>k.request("get","/get-map-info",{params:g}),Z="/vue-pure-admin/static/png/car.png",z={id:"mapview",ref:"mapview"},F=I({name:"Amap",__name:"Amap",setup(g){let m,p;const v=J(),w=P({loading:!C()}),o=()=>{p&&p.on("complete",()=>{w.loading=!1})};return E(()=>{if(!v)return;const{MapConfigure:n}=v.appContext.config.globalProperties.$config,{options:u}=n;N.load({key:n.amapKey,version:"2.0",plugins:["AMap.MarkerCluster"]}).then(d=>{p=new d.Map(v.refs.mapview,u),p.plugin(["AMap.ToolBar","AMap.MapType"],()=>{p.addControl(new d.ToolBar),p.addControl(new d.MapType({defaultType:0}))}),m=new d.MarkerCluster(p,[],{gridSize:80,maxZoom:14,renderMarker(f){const{marker:A,data:e}=f;if(Array.isArray(e)&&e[0]){const{driver:r,plateNumber:a,orientation:i}=e[0],t=`<img style="transform: scale(1) rotate(${360-Number(i)}deg);" src='${Z}' />`;A.setContent(t),A.setLabel({direction:"bottom",offset:new d.Pixel(-4,0),content:`<div> ${a}(${r})</div>`}),A.setOffset(new d.Pixel(-18,-10)),A.on("click",({lnglat:l})=>{p.setZoom(13),p.setCenter(l)})}}}),W().then(({data:f})=>{const A=f.map(e=>({lnglat:[e.lng,e.lat],...e}));m&&m.setData(A)}).catch(f=>{}),o()}).catch(()=>{throw w.loading=!1,"地图加载失败，请重新加载"})}),j(()=>{p&&p.destroy()&&p.clearEvents("click")}),(n,u)=>{const d=B("loading");return S((h(),$("div",z,null,512)),[[d,w.loading]])}}});const G=b(F,[["__scopeId","data-v-2ac3e490"]]),K=T(G),Q=I({name:"MapPage",__name:"index",setup(g){return(m,p)=>(h(),D(O(K)))}});const R=b(Q,[["__scopeId","data-v-bad3ff67"]]);export{R as default};
