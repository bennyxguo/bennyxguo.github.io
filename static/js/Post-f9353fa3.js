import{P as M}from"./PostStats-c0d62dbb.js";import{d as B,A as D,S as N,W as V,$ as I,L,O,B as z,u as E,k as R,y as F,b as G,r as k,a0 as A,z as Q,Q as U,i as _,a1 as W,n as q,_ as J,f as r,p as $,o,c as n,l as e,h as S,t as l,F as K,m as X,N as j,w as H,g as i,x as P,G as Y}from"./index_prod-aefa580f.js";import{T as Z}from"./Toc-85e9a1c1.js";import{C as x}from"./Comment-572131b3.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";const tt=B({name:"ObPost",components:{Sidebar:D,Toc:Z,Comment:x,SubTitle:N,Article:V,Profile:I,SvgIcon:L,PostStats:M},setup(){const t=O(),p=z(),h=E(),m=R(),d=F(),{t:T}=G(),s=k(new A),u=k(!0),c=k(),{enabledCommentPlugin:g}=Q(),f=async()=>{var v,y;u.value=!0,s.value=new A,window.scrollTo({top:0});let a=String(d.params.slug);a=a.indexOf(",")?a.replace(/[,]+/g,"/"):a,await p.fetchPost(a).then(b=>{s.value=b,t.setTitle(s.value.title),m.setHeaderImage(b.cover),u.value=!1}),h.hexoConfig.writing.highlight.enable&&console.error("[Aurora Config Error]: Please turn off [Hightlightjs] and enable [Prismjs] instead. "),h.hexoConfig.writing.prismjs.preprocess&&console.error("[Aurora Config Error]: Please set Hexo config's prismjs' [preprocess] property to false! "),await q(),(v=c.value)==null||v.getCommentCount(),(y=c.value)==null||y.getPostView(),Prism.highlightAll()};U(()=>d.params,a=>{a.slug&&d.fullPath.indexOf("#")===-1&&f()});const C=a=>{a===""&&(a=window.location.href),window.location.href=a};return{isMobile:_(()=>m.isMobile),currentPath:_(()=>d.path),pluginConfigs:_(()=>h.themeConfig.plugins),enabledComment:_(()=>s.value.comments&&g.value.plugin!==""),postStatsRef:c,SvgTypes:W,commonStore:m,fetchData:f,handleAuthorClick:C,loading:u,post:s,t:T}},mounted(){this.fetchData()},beforeUnmount(){this.commonStore.resetHeaderImage()}}),et={class:"flex flex-col"},ot={class:"main-grid"},st={class:"post-header"},nt={class:"post-labels"},it={key:1},at={key:2},lt=e("em",{class:"opacity-50"},"#",-1),rt={key:2},pt=e("b",{class:"opacity-50"},"#",-1),ct={key:0,class:"post-title text-white"},dt={class:"flex flex-row items-center justify-start mt-8 mb-4"},ut={key:0,class:"post-footer"},ht={class:"text-white opacity-80"},mt={class:"opacity-70"},gt={key:1,class:"post-footer"},ft={class:"flex flex-row items-center"},vt={class:"text-ob-dim mt-1"},yt={class:"main-grid"},bt=["innerHTML"],wt={key:1,class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"},_t=e("br",null,null,-1),Ct=e("br",null,null,-1),kt=e("br",null,null,-1),St={class:"flex flex-col lg:flex-row justify-start items-end my-8"},Pt={key:0,class:"w-full h-full self-stretch mr-0 lg:mr-4"},Tt={key:1,class:"w-full h-full self-stretch mt-8 lg:mt-0"},At={key:2,id:"comments"};function $t(t,p,h,m,d,T){const s=r("ob-skeleton"),u=r("PostStats"),c=r("SubTitle"),g=r("Article"),f=r("Comment"),C=r("Profile"),a=r("Toc"),v=r("Sidebar"),y=$("lazy"),b=$("scroll-spy");return o(),n("div",et,[e("div",ot,[e("div",st,[e("span",nt,[t.loading?(o(),S(s,{key:0,tag:"b",height:"20px",width:"35px"})):!t.loading&&t.post.categories&&t.post.categories.length>0?(o(),n("b",it,[e("span",null,l(t.post.categories[0].name),1)])):(o(),n("b",at,l(t.t("settings.default-category")),1)),e("ul",null,[t.loading?(o(),S(s,{key:0,count:2,tag:"li",height:"16px",width:"35px",class:"mr-2"})):!t.loading&&t.post.tags&&t.post.tags.length>0?(o(!0),n(K,{key:1},X(t.post.tags,w=>(o(),n("li",{key:w.slug},[lt,j(" "+l(w.name),1)]))),128)):(o(),n("li",rt,[pt,j(" "+l(t.t("settings.default-tag")),1)]))])]),t.post.title?(o(),n("h1",ct,l(t.post.title),1)):(o(),S(s,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"})),e("div",dt,[t.post.author&&t.post.count_time.symbolsTime?(o(),n("div",ut,[H(e("img",{class:"hover:opacity-50 cursor-pointer",alt:"author avatar",onClick:p[0]||(p[0]=w=>t.handleAuthorClick(t.post.author.link))},null,512),[[y,t.post.author.avatar||""]]),e("span",ht,[e("strong",{class:"text-white pr-1.5 hover:opacity-50 cursor-pointer",onClick:p[1]||(p[1]=w=>t.handleAuthorClick(t.post.author.link))},l(t.post.author.name),1),e("span",mt,l(t.t("settings.shared-on"))+" "+l(t.t(t.post.date.month))+" "+l(t.post.date.day)+", "+l(t.post.date.year),1)])])):(o(),n("div",gt,[e("div",ft,[i(s,{class:"mr-2",height:"28px",width:"28px",circle:!0}),e("span",vt,[i(s,{height:"20px",width:"150px"})])])])),i(u,{"post-word-count":t.post.count_time.symbolsCount,"post-time-count":t.post.count_time.symbolsTime,"post-title":t.post.title,"current-path":t.currentPath,"plugin-configs":t.pluginConfigs,comments:t.enabledComment,ref:"postStatsRef"},null,8,["post-word-count","post-time-count","post-title","current-path","plugin-configs","comments"])])])]),e("div",yt,[e("div",null,[t.post.content?H((o(),n("div",{key:0,class:"post-html",innerHTML:t.post.content},null,8,bt)),[[b,{sectionSelector:"h1, h2, h3, h4, h5, h6"}]]):(o(),n("div",wt,[i(s,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),_t,i(s,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),Ct,kt,i(s,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})])),e("div",St,[t.post.prev_post.title?(o(),n("div",Pt,[i(c,{title:"settings.paginator.prev",icon:"arrow-left-circle"}),i(g,{data:t.post.prev_post},null,8,["data"])])):P("",!0),t.post.next_post.title?(o(),n("div",Tt,[i(c,{title:"settings.paginator.next",side:t.isMobile?"left":"right",icon:"arrow-right-circle"},null,8,["side"]),i(g,{data:t.post.next_post},null,8,["data"])])):P("",!0)]),t.enabledComment&&t.post.title&&t.post.text&&t.post.uid?(o(),n("div",At,[i(f,{title:t.post.title,body:t.post.text,uid:t.post.uid},null,8,["title","body","uid"])])):P("",!0)]),e("div",null,[i(v,null,{default:Y(()=>[i(C,{author:t.post.author.slug||""},null,8,["author"]),i(a,{toc:t.post.toc,comments:t.enabledComment},null,8,["toc","comments"])]),_:1})])])])}const Nt=J(tt,[["render",$t]]);export{Nt as default};
