import{d as w,z as y,Z as P,h as C,k,y as T,u as x,a1 as v,r as I,W as b,b as H,D as $,i as m,n as B,_ as D,e as i,p as R,o as l,c as d,l as e,t as M,g as V,f as s,w as j,a2 as E,E as L,G as N,H as O}from"./index_prod-3cf33111.js";import{T as z}from"./Toc-0defae40.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";import{P as A}from"./PostStats-c9cb7354.js";const G=w({name:"ObPageContent",components:{Sidebar:y,Toc:z,Profile:P,PostStats:A},props:{post:{type:Object,default:()=>({})},title:{type:String,default:""}},setup(t){const _=C(),r=k(),f=T(),{t:g}=x(),a=v(t).post,o=v(t).title,c=I();return b(()=>a.value.covers,n=>{n&&r.setHeaderImage(n)}),b(()=>a.value.count_time.symbolsTime,async n=>{var p,u;n&&(await B(),(p=c.value)==null||p.getCommentCount(),(u=c.value)==null||u.getPostView())}),H(()=>{r.setHeaderImage(a.value.covers)}),$(()=>{r.resetHeaderImage()}),{pageTitle:m(()=>o.value!==""?o.value:a.value.title),currentPath:m(()=>f.path),pluginConfigs:m(()=>_.themeConfig.plugins),postStatsRef:c,t:g}}});const h=t=>(N("data-v-b766c741"),t=t(),O(),t),U={class:"flex flex-col"},W={class:"post-header"},Z={key:0,class:"post-title text-white uppercase"},q={class:"flex flex-row items-center justify-start mt-8 mb-4"},F={class:"main-grid"},J={class:"relative"},K=["innerHTML"],Q={key:1,class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"},X=h(()=>e("br",null,null,-1)),Y=h(()=>e("br",null,null,-1)),tt=h(()=>e("br",null,null,-1)),et={class:"col-span-1"};function ot(t,_,r,f,g,a){const o=i("ob-skeleton"),c=i("PostStats"),n=i("Profile"),p=i("Toc"),u=i("Sidebar"),S=R("scroll-spy");return l(),d("div",U,[e("div",W,[t.post.title?(l(),d("h1",Z,M(t.pageTitle),1)):(l(),V(o,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"})),e("div",q,[s(c,{"post-word-count":t.post.count_time.symbolsCount,"post-time-count":t.post.count_time.symbolsTime,"post-title":t.post.title,"current-path":t.currentPath,"plugin-configs":t.pluginConfigs,ref:"postStatsRef"},null,8,["post-word-count","post-time-count","post-title","current-path","plugin-configs"])])]),e("div",F,[e("div",J,[t.post.content?j((l(),d("div",{key:0,class:"post-html",innerHTML:t.post.content},null,8,K)),[[S,{sectionSelector:"h1, h2, h3, h4, h5, h6"}]]):(l(),d("div",Q,[s(o,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),X,s(o,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),Y,tt,s(o,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})])),E(t.$slots,"default",{},void 0,!0)]),e("div",et,[s(u,null,{default:L(()=>[s(n,{author:"blog-author"}),s(p,{toc:t.post.toc},null,8,["toc"])]),_:1})])])])}const it=D(G,[["render",ot],["__scopeId","data-v-b766c741"]]);export{it as P};
