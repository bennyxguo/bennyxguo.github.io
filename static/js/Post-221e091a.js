import{P as H}from"./PostStats-b72c42bf.js";import{d as M,C as z,S as D,X as L,a2 as V,O as E,Y as I,E as N,i as O,p as R,A as F,b as q,r as k,a3 as A,B as J,$ as U,j as g,a4 as X,n as Y,_ as G,g as r,v as $,o,c as n,q as e,l as S,t as l,F as K,s as Q,R as B,w as j,k as W,h as i,z as P,J as Z}from"./index_prod-dbc66436.js";import{T as x,u as tt}from"./useLightBox-b46de665.js";import{C as et}from"./Comment-c8ae6386.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";const ot=M({name:"ObPost",components:{Sidebar:z,Toc:x,Comment:et,SubTitle:D,Article:L,Profile:V,SvgIcon:E,PostStats:H},setup(){const t=I(),c=N(),u=O(),f=R(),h=F(),{t:T}=q(),s=k(new A),m=k(!0),d=k(),{enabledCommentPlugin:v}=J(),{initializeLightBox:w}=tt(),b=async()=>{var y,_;m.value=!0,s.value=new A,window.scrollTo({top:0});let a=String(h.params.slug);a=a.indexOf(",")?a.replace(/[,]+/g,"/"):a,await c.fetchPost(a).then(p=>{s.value=p,t.setTitle(s.value.title),f.setHeaderImage(p.cover),m.value=!1}),u.hexoConfig.writing.highlight.enable&&console.error("[Aurora Config Error]: Please turn off [Hightlightjs] and enable [Prismjs] instead. "),u.hexoConfig.writing.prismjs.preprocess&&console.error("[Aurora Config Error]: Please set Hexo config's prismjs' [preprocess] property to false! "),await Y(),w(),(y=d.value)==null||y.getCommentCount(),(_=d.value)==null||_.getPostView(),Prism.highlightAll()};U(()=>h.params,a=>{a.slug&&h.fullPath.indexOf("#")===-1&&b()});const C=a=>{a===""&&(a=window.location.href),window.location.href=a};return{avatarClasses:g(()=>({"hover:opacity-50 cursor-pointer":!0,[u.themeConfig.theme.profile_shape]:!0})),isMobile:g(()=>f.isMobile),currentPath:g(()=>h.path),pluginConfigs:g(()=>u.themeConfig.plugins),enabledComment:g(()=>s.value.comments&&v.value.plugin!==""),postStatsRef:d,SvgTypes:X,commonStore:f,fetchData:b,handleAuthorClick:C,loading:m,post:s,t:T}},mounted(){this.fetchData()},beforeUnmount(){this.commonStore.resetHeaderImage()}}),st={class:"flex flex-col mt-20"},nt={class:"main-grid"},it={class:"post-header"},at={class:"post-labels"},lt={key:1},rt={key:2},pt=e("em",{class:"opacity-50"},"#",-1),ct={key:2},dt=e("b",{class:"opacity-50"},"#",-1),ut={key:0,class:"post-title text-white"},ht={class:"flex flex-row items-center justify-start mt-8 mb-4"},mt={key:0,class:"post-footer"},gt=["alt"],ft={class:"text-white opacity-80"},vt={class:"opacity-70"},bt={key:1,class:"post-footer"},yt={class:"flex flex-row items-center"},_t={class:"text-ob-dim mt-1"},wt={class:"main-grid"},Ct=["innerHTML"],kt={key:1,class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"},St=e("br",null,null,-1),Pt=e("br",null,null,-1),Tt=e("br",null,null,-1),At={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols2 gap-6 mt-6"},$t={key:0,class:"flex flex-col w-full h-full mr-0 lg:mr-4"},Bt={key:1,class:"flex flex-col w-full h-full"},jt={key:2,id:"comments"};function Ht(t,c,u,f,h,T){const s=r("ob-skeleton"),m=r("PostStats"),d=r("SubTitle"),v=r("Article"),w=r("Comment"),b=r("Profile"),C=r("Toc"),a=r("Sidebar"),y=$("lazy"),_=$("scroll-spy");return o(),n("div",st,[e("div",nt,[e("div",it,[e("span",at,[t.loading?(o(),S(s,{key:0,tag:"b",height:"20px",width:"35px"})):!t.loading&&t.post.categories&&t.post.categories.length>0?(o(),n("b",lt,[e("span",null,l(t.post.categories[0].name),1)])):(o(),n("b",rt,l(t.t("settings.default-category")),1)),e("ul",null,[t.loading?(o(),S(s,{key:0,count:2,tag:"li",height:"16px",width:"35px",class:"mr-2"})):!t.loading&&t.post.tags&&t.post.tags.length>0?(o(!0),n(K,{key:1},Q(t.post.tags,p=>(o(),n("li",{key:p.slug},[pt,B(" "+l(p.name),1)]))),128)):(o(),n("li",ct,[dt,B(" "+l(t.t("settings.default-tag")),1)]))])]),t.post.title?(o(),n("h1",ut,l(t.post.title),1)):(o(),S(s,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"})),e("div",ht,[t.post.author&&t.post.count_time.symbolsTime?(o(),n("div",mt,[j(e("img",{class:W(t.avatarClasses),alt:`author-${t.post.author.name}`,onClick:c[0]||(c[0]=p=>t.handleAuthorClick(t.post.author.link))},null,10,gt),[[y,t.post.author.avatar||""]]),e("span",ft,[e("strong",{class:"text-white pr-1.5 hover:opacity-50 cursor-pointer",onClick:c[1]||(c[1]=p=>t.handleAuthorClick(t.post.author.link))},l(t.post.author.name),1),e("span",vt,l(t.t("settings.shared-on"))+" "+l(t.t(t.post.date.month))+" "+l(t.post.date.day)+", "+l(t.post.date.year),1)])])):(o(),n("div",bt,[e("div",yt,[i(s,{class:"mr-2",height:"28px",width:"28px",circle:!0}),e("span",_t,[i(s,{height:"20px",width:"150px"})])])])),i(m,{"post-word-count":t.post.count_time.symbolsCount,"post-time-count":t.post.count_time.symbolsTime,"post-title":t.post.title,"current-path":t.currentPath,"plugin-configs":t.pluginConfigs,comments:t.enabledComment,ref:"postStatsRef"},null,8,["post-word-count","post-time-count","post-title","current-path","plugin-configs","comments"])])])]),e("div",wt,[e("div",null,[t.post.content?j((o(),n("div",{key:0,class:"post-html",innerHTML:t.post.content},null,8,Ct)),[[_,{sectionSelector:"h1, h2, h3, h4, h5, h6"}]]):(o(),n("div",kt,[i(s,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),St,i(s,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),Pt,Tt,i(s,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})])),e("div",At,[t.post.prev_post.title?(o(),n("div",$t,[i(d,{title:"settings.paginator.prev",icon:"arrow-left-circle"}),i(v,{data:t.post.prev_post},null,8,["data"])])):P("",!0),t.post.next_post.title?(o(),n("div",Bt,[i(d,{title:"settings.paginator.next",side:t.isMobile?"left":"right",icon:"arrow-right-circle"},null,8,["side"]),i(v,{data:t.post.next_post},null,8,["data"])])):P("",!0)]),t.enabledComment&&t.post.title&&t.post.text&&t.post.uid?(o(),n("div",jt,[i(w,{title:t.post.title,body:t.post.text,uid:t.post.uid},null,8,["title","body","uid"])])):P("",!0)]),e("div",null,[i(a,null,{default:Z(()=>[i(b,{author:t.post.author.slug||""},null,8,["author"]),i(C,{toc:t.post.toc,comments:t.enabledComment},null,8,["toc","comments"])]),_:1})])])])}const Et=G(ot,[["render",Ht]]);export{Et as default};
