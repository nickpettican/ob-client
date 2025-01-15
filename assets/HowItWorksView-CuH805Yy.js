import{d as E,u as q,h as G,p as g,i as J,r as n,c,b as t,w as e,j as r,k as p,o as a,e as i,t as l,g as w,F as k,l as I,n as K,_ as O}from"./index-DnI3NASo.js";const P={class:"how-it-works"},Q={class:"hero-overlay"},X={class:"text-h2 font-weight-bold mb-4"},Y={class:"text-h6"},Z={class:"d-flex align-center mb-4"},tt={class:"text-h6 mb-0"},et={class:"text-h5 mb-0"},ot={class:"text-body-1"},nt={key:0},st={class:"d-flex align-center mb-4"},at={class:"text-h6 mb-0"},lt={class:"text-h5 mb-0"},it={class:"text-body-1"},ct={key:0},rt=E({__name:"HowItWorksView",setup(dt){const T=q(),z=G(),v=g("patron"),F=g([{title:"howItWorks.patron.explore.title",content:"howItWorks.patron.explore.content",details:["howItWorks.patron.explore.details.verification","howItWorks.patron.explore.details.profiles","howItWorks.patron.explore.details.filter"],expanded:!1},{title:"howItWorks.patron.support.title",content:"howItWorks.patron.support.content",details:["howItWorks.patron.support.details.stripe","howItWorks.patron.support.details.recurring","howItWorks.patron.support.details.receipts"],expanded:!1},{title:"howItWorks.patron.connect.title",content:"howItWorks.patron.connect.content",details:["howItWorks.patron.connect.details.feed","howItWorks.patron.connect.details.messaging","howItWorks.patron.connect.details.privacy"],expanded:!1}]),H=g([{title:"howItWorks.monastic.register.title",content:"howItWorks.monastic.register.content",details:["howItWorks.monastic.register.details.info","howItWorks.monastic.register.details.ordination","howItWorks.monastic.register.details.tradition"],expanded:!1},{title:"howItWorks.monastic.verify.title",content:"howItWorks.monastic.verify.content",details:["howItWorks.monastic.verify.details.process","howItWorks.monastic.verify.details.timeline","howItWorks.monastic.verify.details.support"],expanded:!1},{title:"howItWorks.monastic.engage.title",content:"howItWorks.monastic.engage.content",details:["howItWorks.monastic.engage.details.posts","howItWorks.monastic.engage.details.payments","howItWorks.monastic.engage.details.privacy"],expanded:!1}]),M=s=>{T.push(`/signup?type=${s}`)},R=J(()=>z.isAuthenticated);return(s,h)=>{const d=n("v-col"),_=n("v-row"),f=n("v-container"),y=n("v-tab"),U=n("v-tabs"),b=n("v-avatar"),x=n("v-divider"),$=n("v-list-item"),V=n("v-list"),C=n("v-expand-transition"),S=n("v-card-item"),j=n("v-icon"),B=n("v-btn"),N=n("v-card-actions"),A=n("v-card"),L=n("v-window-item"),D=n("v-window");return a(),c("div",P,[t(f,{fluid:"",class:"hero-section pa-0"},{default:e(()=>[i("div",Q,[t(f,{class:"py-16"},{default:e(()=>[t(_,{justify:"center"},{default:e(()=>[t(d,{cols:"12",md:"8",lg:"6",class:"text-center"},{default:e(()=>[i("h1",X,l(s.$t("howItWorks.hero.title")),1),i("p",Y,l(s.$t("howItWorks.hero.subtitle")),1)]),_:1})]),_:1})]),_:1})])]),_:1}),t(f,{class:"py-16"},{default:e(()=>[t(_,{justify:"center"},{default:e(()=>[t(d,{cols:"12",md:"10",lg:"8"},{default:e(()=>[t(U,{modelValue:v.value,"onUpdate:modelValue":h[0]||(h[0]=o=>v.value=o),color:"action",centered:"",grow:""},{default:e(()=>[t(y,{value:"patron"},{default:e(()=>[w(l(s.$t("howItWorks.tabs.patron")),1)]),_:1}),t(y,{value:"monastic"},{default:e(()=>[w(l(s.$t("howItWorks.tabs.monastic")),1)]),_:1})]),_:1},8,["modelValue"]),t(D,{modelValue:v.value,"onUpdate:modelValue":h[1]||(h[1]=o=>v.value=o),class:"mt-6"},{default:e(()=>[t(L,{value:"patron"},{default:e(()=>[t(_,null,{default:e(()=>[(a(!0),c(k,null,I(F.value,(o,u)=>(a(),r(d,{cols:"12",key:u},{default:e(()=>[t(A,{variant:"flat",class:"mb-6"},{default:e(()=>[t(S,null,{default:e(()=>[i("div",Z,[t(b,{color:"action",size:"42",class:"mr-4"},{default:e(()=>[i("span",tt,l(u+1),1)]),_:2},1024),i("h3",et,l(s.$t(o.title)),1)]),i("p",ot,l(s.$t(o.content)),1),t(C,null,{default:e(()=>[o.details?(a(),c("div",nt,[t(x,{class:"my-4"}),t(V,null,{default:e(()=>[(a(!0),c(k,null,I(o.details,(m,W)=>(a(),r($,{key:W,title:s.$t(m),"prepend-icon":"mdi-check-circle",class:"mb-2"},null,8,["title"]))),128))]),_:2},1024)])):p("",!0)]),_:2},1024)]),_:2},1024),o.details?(a(),r(N,{key:0},{default:e(()=>[t(B,{variant:"text",class:"mx-auto",onClick:m=>o.expanded=!o.expanded},{default:e(()=>[w(l(o.expanded?s.$t("common.showLess"):s.$t("common.learnMore"))+" ",1),t(j,{icon:o.expanded?"mdi-chevron-up":"mdi-chevron-down"},null,8,["icon"])]),_:2},1032,["onClick"])]),_:2},1024)):p("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(L,{value:"monastic"},{default:e(()=>[t(_,null,{default:e(()=>[(a(!0),c(k,null,I(H.value,(o,u)=>(a(),r(d,{cols:"12",key:u},{default:e(()=>[t(A,{variant:"flat",class:"mb-6"},{default:e(()=>[t(S,null,{default:e(()=>[i("div",st,[t(b,{color:"action-secondary",size:"42",class:"mr-4"},{default:e(()=>[i("span",at,l(u+1),1)]),_:2},1024),i("h3",lt,l(s.$t(o.title)),1)]),i("p",it,l(s.$t(o.content)),1),t(C,null,{default:e(()=>[o.details?(a(),c("div",ct,[t(x,{class:"my-4"}),t(V,null,{default:e(()=>[(a(!0),c(k,null,I(o.details,(m,W)=>(a(),r($,{key:W,title:s.$t(m),"prepend-icon":"mdi-check-circle",class:"mb-2"},null,8,["title"]))),128))]),_:2},1024)])):p("",!0)]),_:2},1024)]),_:2},1024),o.details?(a(),r(N,{key:0},{default:e(()=>[t(B,{variant:"text",class:"mx-auto",onClick:m=>o.expanded=!o.expanded},{default:e(()=>[w(l(o.expanded?s.$t("common.showLess"):s.$t("common.learnMore"))+" ",1),t(j,{icon:o.expanded?"mdi-chevron-up":"mdi-chevron-down"},null,8,["icon"])]),_:2},1032,["onClick"])]),_:2},1024)):p("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),R.value?p("",!0):(a(),r(f,{key:0,class:"py-16 bg-background"},{default:e(()=>[t(_,{justify:"center"},{default:e(()=>[t(d,{cols:"12",md:"10",lg:"8"},{default:e(()=>[t(K,{onRoleSelected:M})]),_:1})]),_:1})]),_:1}))])}}}),ut=O(rt,[["__scopeId","data-v-16dbce38"]]);export{ut as default};