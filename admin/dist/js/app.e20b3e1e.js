(function(e){function t(t){for(var n,a,s=t[0],i=t[1],u=t[2],d=0,f=[];d<s.length;d++)a=s[d],c[a]&&f.push(c[a][0]),c[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==c[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},c={app:0},o=[];function s(e){return i.p+"js/"+({about:"about",preferences:"preferences",projectstack:"projectstack",projects:"projects"}[e]||e)+"."+{about:"a232e5c8",preferences:"c5b8ff51",projectstack:"40a602c0",projects:"e1a7d903"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={preferences:1,projectstack:1,projects:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({about:"about",preferences:"preferences",projectstack:"projectstack",projects:"projects"}[e]||e)+"."+{about:"31d6cfe0",preferences:"f894638a",projectstack:"1dea8567",projects:"8e1f3ed8"}[e]+".css",c=i.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===c))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],d=u.getAttribute("data-href");if(d===n||d===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],p.parentNode.removeChild(p),r(o)},p.href=c;var l=document.getElementsByTagName("head")[0];l.appendChild(p)}).then(function(){a[e]=0}));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,r){n=c[e]=[t,r]});t.push(n[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(e),u=function(t){d.onerror=d.onload=null,clearTimeout(f);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,r[1](o)}c[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=d;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-alert",{attrs:{show:e.isConnectionProblem,variant:"warning"}},[r("h4",[e._v("Connection Problem")]),r("p",[e._v("It seems that Gearbox Server is not running. Remaining connection attempts: "+e._s(e.remainingRetries))])]),e.isUnrecoverableConnectionProblem?r("b-alert",{attrs:{show:"",variant:"danger"}},[r("h4",[e._v("Connection Problem")]),r("p",[e._v("Failed to connect to Gearbox Server.")])]):e._e(),r("top-bar"),r("router-view")],1)},c=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"secondary"}},[r("b-navbar-brand",{attrs:{to:"/projects"}},[e._v("Gearbox")]),r("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/projects"}},[e._v("Projects")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{right:"",to:"/preferences"}},[r("font-awesome-icon",{attrs:{title:"Preferences",icon:["fa","cog"]}})],1)],1)],1)],1)],1)},s=[],i={name:"TopBar.vue"},u=i,d=r("2877"),f=Object(d["a"])(u,o,s,!1,null,"299d1b8b",null),p=f.exports,l={name:"App",components:{TopBar:p},computed:{isConnectionProblem:function(){return this.$store.state.connectionStatus.networkError&&this.$store.state.connectionStatus.remainingRetries>0},remainingRetries:function(){return this.$store.state.connectionStatus.remainingRetries},isUnrecoverableConnectionProblem:function(){return this.$store.state.connectionStatus.networkError?0===this.$store.state.connectionStatus.remainingRetries:""}}},v=l,b=(r("034f"),Object(d["a"])(v,a,c,!1,null,null,null)),h=b.exports,m=r("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v(e._s(e.title))])},E=[],_={props:{title:{type:String,default:"Welcome!"}}},j=_,S=Object(d["a"])(j,g,E,!1,null,null,null),k=S.exports;n["default"].use(m["a"]);var y=new m["a"]({routes:[{path:"/",name:"welcome",component:k},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/preferences",name:"preferences",component:function(){return r.e("preferences").then(r.bind(null,"a55d"))}},{path:"/projects",name:"projects",component:function(){return Promise.all([r.e("projectstack"),r.e("projects")]).then(r.bind(null,"acca"))},children:[{path:":hostname/stack",component:function(){return r.e("projectstack").then(r.bind(null,"2123"))}}]}]}),R=(r("7f7f"),r("28a5"),r("ac6a"),r("7514"),r("cebc")),T=r("2f62"),C=r("bc3a"),O=r.n(C),P=r("a7fe"),A=r.n(P),w=r("6916"),B=O.a.create({baseURL:"http://127.0.0.1:9999/",headers:{"Content-Type":"application/vnd.api+json"}}),I=B,x=r("a592");n["default"].use(T["a"]),n["default"].use(A.a,O.a);var D=new T["a"].Store({strict:!0,modules:Object(R["a"])({},Object(x["a"])({names:["stacks","services","gearspecs","projects","basedirs"],httpClient:I})),state:{stacks:[],services:[],gearspecs:[],projects:[],basedirs:[],connectionStatus:{networkError:null,remainingRetries:5}},getters:{basedirBy:function(e){return function(t,r){return"id"===t?e.basedirs.records.find(function(e){return e.id===r}):e.basedirs.records.find(function(e){return e.attributes[t]===r})}},stackBy:function(e){return function(t,r){return"id"===t?e.stacks.records.find(function(e){return e.id===r}):e.stacks.records.find(function(e){return e.attributes[t]===r})}},serviceBy:function(e){return function(t,r){return"id"===t?e.services.records.find(function(e){return e.id===r}):e.services.records.find(function(e){return e.attributes[t]===r})}},gearspecBy:function(e){return function(t,r){return"id"===t?e.gearspecs.records.find(function(e){return e.id===r}):e.gearspecs.records.find(function(e){return e.attributes[t]===r})}},projectBy:function(e){return function(t,r){return"id"===t?e.projects.records.find(function(e){return e.id===r}):e.projects.records.find(function(e){return e.attributes[t]===r})}},projectStackItemIndexBy:function(e){return function(e,t,r){var n=-1;return e.attributes.stack.find(function(e,a){return e[t]===r&&(n=a,!0)}),n}},stackDefaultServiceByRole:function(e){return function(e,t){var r="";return e.attributes.members.find(function(e,n){return e.gearspec_id===t&&(r=e.default_service,!0)}),r}},stackServicesByRole:function(e){return function(e,t){var r=[];return e.attributes.members.find(function(e,n){return e.gearspec_id===t&&(r=e.services,!0)}),r}},stacksAsOptions:function(e){var t=[];return e.stacks.records.forEach(function(e,r){t.push({value:e.id,text:e.attributes.stackname})}),t},basedirsAsOptions:function(e){var t=[];return e.basedirs.records.forEach(function(e,r){t.push({value:e.id,text:e.attributes.basedir})}),t},hasExtraBasedirs:function(e){return e.basedirs.records.length>1},preselectService:function(e){return function(e,t,r){var n=-1,a=-1,c=r||t;if(c)do{for(var o=e.length;o--;)if(-1!==e[o].indexOf(c)&&(-1===n&&(n=o),e[o]===c)){a=o;break}if(-1===n){var s=c.split(".");if(!(s.length>1))break;delete s[s.length-1],c=s.join("."),c=c.substring(0,c.length-1)}}while(-1===n);var i=-1!==n?e[-1!==a?a:n]:"";return i}}},actions:{loadProjectDetails:function(e){var t=e.commit;for(var r in this.state.projects.records){var n=this.state.projects.records[r];try{I.get("projects/"+n.id,{crossDomain:!0,raxConfig:{onRetryAttempt:function(e){var r=Object(w["getConfig"])(e);t("SET_NETWORK_ERROR",e.message),t("SET_REMAINING_RETRIES",r.retry-r.currentRetryAttempt)}}}).catch(function(e,t){console.log("rejected",e)}).then(function(e){return e?e.data:null}).then(function(e){var r=e.data;if(t("SET_PROJECT",r),e.included.length)for(var n in e.included){var a=e.included[n];"service"===a.type&&t("SET_SERVICE",a),"stack"===a.type&&t("SET_STACK",a)}})}catch(a){console.log(a)}}},updateProject:function(e,t){var r=e.commit,n=t.hostname,a=t.project;r("UPDATE_PROJECT",{hostname:n,project:a}),I({method:"post",url:"project/"+n,data:a}).then(function(e){return e.data}).then(function(e){}).catch(function(e){console.log("rejected",e)})},addBaseDir:function(e,t){var r=e.commit,n=t.name,a=t.path;r("ADD_BASEDIR",{value:n,text:a}),I({method:"post",url:"basedirs/new",data:t}).then(function(e){return e.data}).then(function(e){}).catch(function(e){console.log("rejected",e)})},addProjectStack:function(e,t){var r=e.commit;r("ADD_PROJECT_STACK",t)},removeProjectStack:function(e,t){var r=e.commit;r("REMOVE_PROJECT_STACK",t)},changeProjectService:function(e,t){var r=e.commit;setTimeout(function(){return r("CHANGE_PROJECT_SERVICE",t)},1e3)},changeProjectState:function(e,t){var r=e.commit;r("CHANGE_PROJECT_STATE",t)}},mutations:{SET_PROJECT:function(e,t){var r=this.getters.projectBy("id",t.id);r?n["default"].set(r.attributes,"stack",t.attributes.stack):e.projects.records.push(t)},SET_STACK:function(e,t){var r=this.getters.stackBy("id",t.id);r?r.attributes=t.attributes:e.stacks.records.push(t)},SET_SERVICE:function(e,t){var r=this.getters.serviceBy("id",t.id);r?r.attributes=t.attributes:e.services.records.push(t)},SET_GEARSPEC:function(e,t){var r=this.getters.gearspecBy("id",t.id);r?r.attributes=t.attributes:e.gearspecs.records.push(t)},SET_NETWORK_ERROR:function(e,t){e.connectionStatus.networkError=t},CLEAR_NETWORK_ERROR:function(e){e.connectionStatus.networkError=""},SET_REMAINING_RETRIES:function(e,t){e.connectionStatus.remainingRetries=t},ADD_BASEDIR:function(e,t){e.baseDirs[t.value]=t},ADD_PROJECT_STACK:function(e,t){var r=this,a=t.projectId,c=t.stackId,o=this.getters.projectBy("id",a),s=this.getters.stackBy("id",c);o&&s&&s.attributes.members.length&&("undefined"===typeof o.attributes.stack&&n["default"].set(o.attributes,"stack",[]),s.attributes.members.forEach(function(e,t){var n=r.getters.preselectService(e.services,e.default_service);e.gearspec_id&&o.attributes.stack.push({service_id:n,gearspec_id:e.gearspec_id})}))},REMOVE_PROJECT_STACK:function(e,t){var r=t.projectId,a=t.stackId,c=this.getters.projectBy("id",r);if(c)for(var o=a.split("/")[1],s=c.attributes.stack.length-1;s>=0;s--)c.attributes.stack[s].gearspec_id.split("/")[1]===o&&n["default"].delete(c.attributes.stack,s)},CHANGE_PROJECT_SERVICE:function(e,t){var r=t.projectId,a=t.gearspecId,c=t.serviceId,o=this.getters.projectBy("id",r);if(o){var s=this.getters.projectStackItemIndexBy(o,"gearspec_id",a);n["default"].set(o.attributes.stack[s],"service_id",c)}},CHANGE_PROJECT_STATE:function(e,t){var r=t.projectId,n=t.isEnabled,a=this.getters.projectBy("id",r);a&&(a.attributes.enabled=!!n)}}}),N=r("9f7b"),J=r.n(N);r("f9e3"),r("2dd8");n["default"].use(J.a);var G=r("ecee"),K=r("c074"),$=r("ad3d");G["c"].add(K["l"]),G["c"].add(K["p"]),G["c"].add(K["q"]),G["c"].add(K["k"]),G["c"].add(K["d"]),G["c"].add(K["i"]),G["c"].add(K["c"]),G["c"].add(K["b"]),G["c"].add(K["g"]),G["c"].add(K["h"]),G["c"].add(K["f"]),G["c"].add(K["j"]),G["c"].add(K["s"]),G["c"].add(K["a"]),G["c"].add(K["m"]),G["c"].add(K["e"]),G["c"].add(K["r"]),G["c"].add(K["o"]),G["c"].add(K["n"]),n["default"].component("font-awesome-icon",$["a"]),n["default"].config.productionTip=!1,new n["default"]({router:y,store:D,render:function(e){return e(h)}}).$mount("#app")},"64a9":function(e,t,r){}});
//# sourceMappingURL=app.e20b3e1e.js.map