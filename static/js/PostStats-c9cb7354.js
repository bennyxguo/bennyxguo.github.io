import{d as m,K as w,a9 as _,r as k,i as f,aa as C,ab as y,ac as v,_ as P,e as u,o as n,c as i,l as e,f as s,t as p,x as l,g as S,F as b,M as T}from"./index_prod-3cf33111.js";const V=m({name:"ObPostStats",components:{SvgIcon:w},props:{postWordCount:{type:Number||void 0},postTimeCount:{type:String||void 0},postTitle:{type:String},pluginConfigs:{type:Object,default:()=>new _().plugins,required:!0},currentPath:{type:String,default:"/",required:!0}},setup(t,{expose:d}){const c=k(void 0),h=f(()=>C(t.pluginConfigs).plugin);return d({getCommentCount:async()=>{c.value=await y(h.value,t.currentPath,t.pluginConfigs)},getPostView:()=>{v(h.value,t.currentPath,t.pluginConfigs)}}),{commentCount:c,plugin:h}}}),x={key:0,class:"post-stats"},q={class:"pl-2 opacity-70"},N={class:"pl-2 opacity-70"},B={key:0},$={class:"pl-2 opacity-70"},I={class:"waline-pageview-count"},W={key:1},F={class:"pl-2 opacity-70"},O=["data-path"],j={key:2},D={class:"pl-2 opacity-70",id:"twikoo_visitors"},E={key:3},K={class:"pl-2 opacity-70"},M={key:4},z={class:"pl-2 opacity-70"},A=["id","data-flag-title"],G={class:"leancloud-visitors-count"},H={key:1,class:"post-stats"},J={class:"pl-2"},L={class:"pl-2"},Q={key:0},R={class:"pl-2"},U={key:1},X={class:"pl-2"};function Y(t,d,c,h,r,g){const o=u("SvgIcon"),a=u("ob-skeleton");return t.postTimeCount!==void 0&&t.postWordCount!==void 0?(n(),i("div",x,[e("span",null,[s(o,{"icon-class":"clock-outline",fill:"none",stroke:"white",height:"1.25em",width:"1.25em"}),e("span",q,p(t.postTimeCount),1)]),e("span",null,[s(o,{"icon-class":"text-outline",fill:"none",stroke:"white",height:"1.25em",width:"1.25em"}),e("span",N,p(t.postWordCount),1)]),t.plugin==="waline"?(n(),i("span",B,[s(o,{class:"h-5 w-5","icon-class":"hot",fill:"none",stroke:"white",height:"1.25em",width:"1.25em"}),e("span",$,[e("span",I,[s(a,{width:"40px",height:"16px"})])])])):l("",!0),t.plugin==="waline"?(n(),i("span",W,[s(o,{class:"h-5 w-5","icon-class":"quote",fill:"none",stroke:"white",height:"1.25em",width:"1.25em"}),e("span",F,[e("span",{class:"waline-comment-count","data-path":t.currentPath},[s(a,{width:"40px",height:"16px"})],8,O)])])):l("",!0),t.plugin==="twikoo"?(n(),i("span",j,[s(o,{class:"h-5 w-5","icon-class":"hot",fill:"none",stroke:"white",height:"1.25em",width:"1.25em"}),e("span",D,[s(a,{width:"40px",height:"16px"})])])):l("",!0),t.plugin==="twikoo"?(n(),i("span",E,[s(o,{class:"h-5 w-5","icon-class":"quote",fill:"none",stroke:"white",height:"1.25em",width:"1.25em"}),e("span",K,[t.commentCount===void 0?(n(),S(a,{key:0,width:"40px",height:"16px"})):(n(),i(b,{key:1},[T(p(t.commentCount),1)],64))])])):l("",!0),t.plugin==="valine"?(n(),i("span",M,[s(o,{class:"h-5 w-5","icon-class":"hot",fill:"none",stroke:"white",height:"1.25em",width:"1.25em"}),e("span",z,[e("span",{id:t.currentPath,class:"leancloud_visitors","data-flag-title":t.postTitle},[e("i",G,[s(a,{width:"40px",height:"16px"})])],8,A)])])):l("",!0)])):(n(),i("div",H,[e("span",null,[s(o,{"icon-class":"clock-outline",fill:"none",stroke:"white",height:"1.25em",width:"1.25em"}),e("span",J,[s(a,{width:"40px",height:"16px"})])]),e("span",null,[s(o,{"icon-class":"text-outline",fill:"none",stroke:"white",height:"1.25em",width:"1.25em"}),e("span",L,[s(a,{width:"40px",height:"16px"})])]),t.plugin==="waline"||t.plugin==="twikoo"||t.plugin==="valine"?(n(),i("span",Q,[s(o,{"icon-class":"hot",fill:"none",stroke:"white",height:"1.25em",width:"1.25em"}),e("span",R,[s(a,{width:"40px",height:"16px"})])])):l("",!0),t.plugin==="waline"||t.plugin==="twikoo"?(n(),i("span",U,[s(o,{"icon-class":"quote",fill:"none",stroke:"white",height:"1.25em",width:"1.25em"}),e("span",X,[s(a,{width:"40px",height:"16px"})])])):l("",!0)]))}const tt=P(V,[["render",Y]]);export{tt as P};
