(function(t){function e(e){for(var a,i,l=e[0],u=e[1],s=e[2],c=0,p=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},i={app:0},o={app:0},r=[];function l(t){return u.p+"js/"+({"about~edit":"about~edit",about:"about",edit:"edit",add:"add"}[t]||t)+"."+{"about~edit":"db1e5d99",about:"2eb19496",edit:"8693cf6f",add:"71dda287","chunk-efb19948":"5fd999ce"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"about~edit":1,about:1,edit:1,add:1,"chunk-efb19948":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({"about~edit":"about~edit",about:"about",edit:"edit",add:"add"}[t]||t)+"."+{"about~edit":"0c40a5f5",about:"eddee22f",edit:"5f9f2167",add:"637d429b","chunk-efb19948":"27cb5de1"}[t]+".css",o=u.p+a,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var s=r[l],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===a||c===o))return e()}var p=document.getElementsByTagName("style");for(l=0;l<p.length;l++){s=p[l],c=s.getAttribute("data-href");if(c===a||c===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],d.parentNode.removeChild(d),n(r)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){i[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=r);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=l(t);var p=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",p.name="ChunkLoadError",p.type=a,p.request=i,n[1](p)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/appsbymatthew_client/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},2919:function(t,e,n){"use strict";n("d3b7");var a={getApplications:function(t){if(a.applications.length)return t(a.applications);fetch("https://appsbymatthew-qgzgpr7klq-uc.a.run.app/api/applications").then((function(t){return t.json()})).then((function(e){return a.applicationsLoaded=!0,a.applications=e,t(a.applications)}))},applicationsLoaded:!1,applications:[],getSkills:function(t){if(a.skills.length)return console.log("here"),t(a.skills);fetch("https://appsbymatthew-qgzgpr7klq-uc.a.run.app/api/skills").then((function(t){return console.log("hmm"),t.json()})).then((function(e){return console.log("*",e),a.skillsLoaded=!0,a.skills=e,t(a.skills)}))},skillsLoaded:!1,skills:[]};e["a"]=a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg bg-light",attrs:{id:"app"}},[n("NavbarMain"),n("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-light",staticStyle:{width:"100%","overflow-x":"scroll"},attrs:{id:"nav"}},[n("nav",{staticClass:"navbar navbar-expand navbar-light bg-light"},[n("a",{staticClass:"navbar-brand",staticStyle:{"font-family":"'MuseoModerno', cursive"},attrs:{href:"#"}},[t._v("appsbymatthew.com")]),n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/"}},[t._v("Welcome")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:{name:"Applications-Featured"}}},[t._v("Applications")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:{name:"Skills-Simple"}}},[t._v("Skills")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:{name:"Contact"}}},[t._v("Contact")])],1)])]),t._m(0)])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[n("div",{staticStyle:{position:"fixed",top:"0px",right:"0px",padding:"5px 10px 5px 0px","z-index":"0"}},[n("small",[t._v("Version 5.0.0")])])])}],u=(n("76f6"),n("2877")),s={},c=Object(u["a"])(s,r,l,!1,null,"3cc7a883",null),p=c.exports,d=(n("2919"),{name:"App",components:{NavbarMain:p},data:function(){return{copyrightMessage:"©2020 Matthew Farmer"}},mounted:function(){}}),f=d,b=(n("034f"),Object(u["a"])(f,i,o,!1,null,null,null)),h=b.exports,m=n("a18c");a["a"].config.productionTip=!1,new a["a"]({router:m["a"],render:function(t){return t(h)}}).$mount("#app")},"76f6":function(t,e,n){"use strict";var a=n("c918"),i=n.n(a);i.a},"85ec":function(t,e,n){},a18c:function(t,e,n){"use strict";n("d3b7");var a=n("2b0e"),i=n("8c4f");a["a"].use(i["a"]);var o=[{path:"/",component:function(){return n.e("chunk-efb19948").then(n.bind(null,"eec5"))}},{path:"/applications",name:"Applications",component:function(){return Promise.all([n.e("about~edit"),n.e("about")]).then(n.bind(null,"8f8b"))}},{path:"/applications/featured",name:"Applications-Featured",component:function(){return Promise.all([n.e("about~edit"),n.e("about")]).then(n.bind(null,"d543"))}},{path:"/applications/all",name:"Applications-All",component:function(){return Promise.all([n.e("about~edit"),n.e("about")]).then(n.bind(null,"dbe3"))}},{path:"/applications/create",name:"Applications-Create",component:function(){return Promise.all([n.e("about~edit"),n.e("about")]).then(n.bind(null,"d473"))}},{path:"/applications/edit",name:"Applications-Edit",component:function(){return Promise.all([n.e("about~edit"),n.e("about")]).then(n.bind(null,"b5f5"))}},{path:"/skills",name:"Skills",component:function(){return Promise.all([n.e("about~edit"),n.e("edit")]).then(n.bind(null,"ad83"))}},{path:"/skills/create",name:"Skills-Create",component:function(){return Promise.all([n.e("about~edit"),n.e("edit")]).then(n.bind(null,"9e7f"))}},{path:"/skills/edit",name:"Skills-Edit",component:function(){return Promise.all([n.e("about~edit"),n.e("edit")]).then(n.bind(null,"0aaa"))}},{path:"/skills/simple",name:"Skills-Simple",component:function(){return Promise.all([n.e("about~edit"),n.e("edit")]).then(n.bind(null,"ba52"))}},{path:"/skills/advanced",name:"Skills-Advanced",component:function(){return Promise.all([n.e("about~edit"),n.e("edit")]).then(n.bind(null,"0d49"))}},{path:"/contact",name:"Contact",component:function(){return n.e("add").then(n.bind(null,"b8fa"))}}],r=new i["a"]({routes:o});e["a"]=r},c918:function(t,e,n){}});
//# sourceMappingURL=app.4b79700e.js.map