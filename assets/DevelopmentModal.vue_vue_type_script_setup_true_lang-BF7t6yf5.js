import{d as y,p as V,s as w,r as a,j as M,w as l,o as x,b as o,g as v,t as s,e as n}from"./index-DnI3NASo.js";const B={class:"text-body-1 mb-4"},C={class:"text-body-1 mb-4"},k={class:"text-body-1 mb-4"},N={class:"text-body-1 mb-4"},D={class:"text-body-1 font-italic"},z=y({__name:"DevelopmentModal",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(p){const c=p,d=["hogwarts","story","literature","food","music"],t=V(d[Math.floor(Math.random()*d.length)]);return w(()=>c.modelValue,e=>{e&&(t.value=d[Math.floor(Math.random()*d.length)])}),(e,m)=>{const i=a("v-card-title"),_=a("v-divider"),u=a("v-card-text"),$=a("v-spacer"),f=a("v-btn"),b=a("v-card-actions"),h=a("v-card"),g=a("v-dialog");return x(),M(g,{"model-value":e.modelValue,"onUpdate:modelValue":m[1]||(m[1]=r=>e.$emit("update:modelValue",r)),"max-width":"500"},{default:l(()=>[o(h,{class:"pa-8"},{default:l(()=>[o(i,{class:"text-h5 pa-4"},{default:l(()=>[v(s(e.$t(`development.modal.variants.${t.value}.title`)),1)]),_:1}),o(u,{class:"pa-4"},{default:l(()=>[n("p",B,s(e.$t(`development.modal.variants.${t.value}.message`)),1),n("p",C,s(e.$t(`development.modal.variants.${t.value}.status`)),1),o(_,{class:"my-4"}),n("p",k,s(e.$t(`development.modal.variants.${t.value}.explore`)),1),n("p",N,s(e.$t(`development.modal.variants.${t.value}.demo`)),1),n("p",D,s(e.$t(`development.modal.variants.${t.value}.closing`)),1)]),_:1}),o(b,{class:"pa-4"},{default:l(()=>[o($),o(f,{color:"primary",onClick:m[0]||(m[0]=r=>e.$emit("update:modelValue",!1)),size:"large"},{default:l(()=>[v(s(e.$t(`development.modal.variants.${t.value}.button`)),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}});export{z as _};