"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./style/index.css");const r=e.defineComponent({name:"LlIcon",__name:"icon",props:{type:{}},setup(o){const t=o,n=e.computed(()=>({[`ll-icon--${t.type}`]:t.type}));return(l,c)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["ll-icon",n.value])},[e.renderSlot(l.$slots,"default")],2))}});exports.default=r;