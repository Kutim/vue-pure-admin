import{d as B,r as n,b as p,f as N,l as v,g as l,n as u,j as d,w as m,u as _,h as t,v as b,c as D,k as f,t as c,aN as I}from"./index-ppvmDqDn.js";import{R}from"./index-tE1xIBkO.js";const V={"element-loading-background":"transparent"},j={class:"w-[18vw]"},z={class:"mt-1 text-center"},A={class:"flex flex-wrap justify-center items-center text-center"},E={key:1,class:"mt-1"},q=B({__name:"upload",props:{imgSrc:String},emits:["cropper"],setup(g,{emit:h}){const w=g,C=h,e=n(),k=n(),r=n(!1),s=n("");function x({base64:i,blob:o,info:a}){e.value=a,s.value=i,C("cropper",{base64:i,blob:o,info:a})}return(i,o)=>{const a=p("el-image"),y=p("el-popover"),S=N("loading");return v((l(),u("div",V,[d(y,{visible:r.value,placement:"right",width:"18vw"},{reference:m(()=>[t("div",j,[d(_(R),{ref_key:"refCropper",ref:k,src:w.imgSrc,circled:"",onCropper:x,onReadied:o[0]||(o[0]=P=>r.value=!0)},null,8,["src"]),v(t("p",z," 温馨提示：右键上方裁剪区可开启功能菜单 ",512),[[b,r.value]])])]),default:m(()=>[t("div",A,[s.value?(l(),D(a,{key:0,src:s.value,"preview-src-list":Array.of(s.value),fit:"cover"},null,8,["src","preview-src-list"])):f("",!0),e.value?(l(),u("div",E,[t("p",null," 图像大小："+c(parseInt(e.value.width))+" × "+c(parseInt(e.value.height))+"像素 ",1),t("p",null," 文件大小："+c(_(I)(e.value.size))+"（"+c(e.value.size)+" 字节） ",1)])):f("",!0)])]),_:1},8,["visible"])])),[[S,!r.value]])}}});export{q as _};