(function(e){function t(t){for(var r,s,i=t[0],c=t[1],o=t[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return l.push.apply(l,o||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(l.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},l=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e95df":"fea1ad81"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var o=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+l+")",o.name="ChunkLoadError",o.type=r,o.request=l,a[1](o)}n[e]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=o;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1100:function(e,t,a){e.exports=a.p+"img/background.1f8a0742.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"row",attrs:{justify:"space-around"}},[r("v-card",{staticClass:"card"},[r("v-img",{staticClass:"jumbotron",attrs:{src:a("1100")}},[r("v-card-title",{staticClass:"white--text"},[r("v-avatar",{attrs:{height:"120",width:"100"}},[r("img",{attrs:{alt:"user",src:a("8bc9")}})]),r("p",{staticClass:"ml-3"},[r("span",[e._v("Mandeep Singh")])])],1)],1),r("SkillSet")],1)],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"row",attrs:{justify:"space-around","align-self":e.align}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("h4",{staticClass:"heading"},[e._v("Front End Technologies")]),e._l(e.fronEndTech,(function(e,t){return a("Skill",{key:"frontEndTech"+t,attrs:{skillName:e.skillName,percentage:e.percentage}})}))],2)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("h4",{staticClass:"heading"},[e._v("Unit Testing Skills ")]),e._l(e.unitTestingSkills,(function(e,t){return a("Skill",{key:"unitTestingSkills"+t,attrs:{skillName:e.skillName,percentage:e.percentage}})}))],2),a("v-card",{staticClass:"colDivider"},[a("h4",{staticClass:"heading"},[e._v("E2E Testing Skills")]),e._l(e.e2eTestingSkills,(function(e,t){return a("Skill",{key:"e2eTestingSkills"+t,attrs:{skillName:e.skillName,percentage:e.percentage}})}))],2)],1)],1),a("v-row",{staticClass:"row",attrs:{justify:"space-around"}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("h4",{staticClass:"heading"},[e._v("Back End Technologies")]),e._l(e.backEndTech,(function(e,t){return a("Skill",{key:"backEndTech"+t,attrs:{skillName:e.skillName,percentage:e.percentage}})}))],2)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"colDatabase"},[a("h4",{staticClass:"heading"},[e._v("Database ")]),e._l(e.dataBase,(function(e,t){return a("Skill",{key:"dataBase"+t,attrs:{skillName:e.skillName,percentage:e.percentage}})}))],2)],1)],1),a("v-row",{staticClass:"row",attrs:{justify:"space-around"}},[a("v-col",{attrs:{"lg-12":""}},[a("v-card",[a("h4",{staticClass:"heading"},[e._v("Cloud")]),e._l(e.cloud,(function(e,t){return a("Skill",{key:"cloud"+t,attrs:{skillName:e.skillName,percentage:e.percentage}})}))],2)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"colDatabase"},[a("h4",{staticClass:"heading"},[e._v("Other Skills ")]),e._l(e.otherSkills,(function(e,t){return a("Skill",{key:"otherSkills"+t,attrs:{skillName:e.skillName,percentage:e.percentage}})}))],2)],1)],1)],1)},c=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"row",attrs:{justify:"space-around"}},[a("v-col",{staticClass:"colsKey",attrs:{"lg-3":""}},[e._v(" "+e._s(e.skillName)+" ")]),a("v-col",{staticClass:"colsValue",attrs:{"lg-9":""}},[a("v-progress-linear",{staticClass:"progressBar",attrs:{value:e.value}})],1)],1)},u=[],p={name:"Skill",props:{skillName:String,percentage:String},data:function(){return{value:0}},mounted:function(){for(var e=this,t=Math.ceil(this.percentage/5),a=function(a){setTimeout((function(){e.value+=t,4===a&&(e.value=e.percentage)}),500)},r=0;r<5;r++)a(r)}},d=p,f=(a("ea95"),a("2877")),g=a("6544"),m=a.n(g),k=a("62ad"),v=a("8e36"),h=a("0fd9"),S=Object(f["a"])(d,o,u,!1,null,"7f0a4a5e",null),b=S.exports;m()(S,{VCol:k["a"],VProgressLinear:v["a"],VRow:h["a"]});var N={name:"SkillSet",data:function(){return{fronEndTech:[{skillName:"JS (ES6/7/8)",percentage:"95"},{skillName:"HTML",percentage:"95"},{skillName:"CSS",percentage:"75"},{skillName:"AngularJS",percentage:"90"},{skillName:"Web components (Polymer, lit-html)",percentage:"90"},{skillName:"ReactJS",percentage:"75"},{skillName:"VueJS with Vuetify",percentage:"70"},{skillName:"Angular 10",percentage:"50"},{skillName:"GraphQL",percentage:"50"},{skillName:"Redux",percentage:"70"},{skillName:"TypeScript",percentage:"60"}],unitTestingSkills:[{skillName:"Jasmine and Karma",percentage:"90"},{skillName:"Jest",percentage:"75"},{skillName:"Mocha",percentage:"90"},{skillName:"Chai",percentage:"90"}],e2eTestingSkills:[{skillName:"Playwright",percentage:"85"},{skillName:"Cypress",percentage:"80"},{skillName:"WDIO",percentage:"60"},{skillName:"Protractor",percentage:"85"}],backEndTech:[{skillName:"Java 6",percentage:"90"},{skillName:"Java 8",percentage:"60"},{skillName:"NodeJS",percentage:"70"}],dataBase:[{skillName:"MSSQL",percentage:"60"},{skillName:"Oracle",percentage:"60"}],cloud:[{skillName:"Azure",percentage:"60"},{skillName:"GCP",percentage:"60"}],otherSkills:[{skillName:"Micro front ends",percentage:"80"},{skillName:"Multi Rep",percentage:"60"},{skillName:"Versioning (Git, SVN, CVS)",percentage:"60"}]}},components:{Skill:b}},y=N,C=(a("90fb"),a("b0af")),w=a("a523"),_=Object(f["a"])(y,i,c,!1,null,"05fc48f5",null),T=_.exports;m()(_,{VCard:C["a"],VCol:k["a"],VContainer:w["a"],VRow:h["a"]});var V={name:"Home",components:{SkillSet:T}},j=V,E=(a("9c15"),a("8212")),O=a("99d9"),x=a("adda"),P=Object(f["a"])(j,l,s,!1,null,"66c2d8ce",null),M=P.exports;m()(P,{VAvatar:E["a"],VCard:C["a"],VCardTitle:O["a"],VContainer:w["a"],VImg:x["a"],VRow:h["a"]}),r["a"].use(n["a"]);var J=[{path:"/",name:"Home",component:M},{path:"*",name:"Error",component:function(){return a.e("chunk-2d0e95df").then(a.bind(null,"8cdb"))}}],A=new n["a"]({routes:J}),B=A,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:"",height:"50"}},[a("v-spacer"),e._l(e.links,(function(t){return a("v-btn",{key:t.label+"-header-link",attrs:{text:"",rounded:"",to:t.url}},[e._v(" "+e._s(t.label)+" ")])}))],2),a("v-main",[a("router-view")],1)],1)},R=[],D={name:"App",data:function(){return{links:[{label:"SkillSet",url:"/"}]}}},$=D,G=a("7496"),H=a("40dc"),I=a("8336"),K=a("f6c4"),Q=a("2fa4"),W=Object(f["a"])($,L,R,!1,null,null,null),q=W.exports;m()(W,{VApp:G["a"],VAppBar:H["a"],VBtn:I["a"],VMain:K["a"],VSpacer:Q["a"]});var z=a("f309");r["a"].use(z["a"]);var F=new z["a"]({});a("5363");r["a"].config.productionTip=!1,new r["a"]({vuetify:F,router:B,render:function(e){return e(q)}}).$mount("#app")},"5e27":function(e,t,a){},"764d":function(e,t,a){},"8bc9":function(e,t,a){e.exports=a.p+"img/dp.3b9659c7.jpg"},"90fb":function(e,t,a){"use strict";a("764d")},"9c15":function(e,t,a){"use strict";a("5e27")},a263:function(e,t,a){},ea95:function(e,t,a){"use strict";a("a263")}});
//# sourceMappingURL=app.8104178e.js.map