(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["project"],{3066:function(e,t,a){"use strict";var o=a("3e77"),n=a.n(o);n.a},"3e77":function(e,t,a){},7601:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Project Details")]),e.project?a("el-form",{attrs:{"label-width":"120px"}},[a("h2",[e._v(e._s(e.project.name))]),a("el-form-item",{attrs:{label:"Project Name"}},[a("i",{staticClass:"el-icon-info"}),a("el-input",{attrs:{placeholder:"Please input"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("el-form-item",{attrs:{label:"Hostname"}},[a("i",{staticClass:"el-icon-info"}),a("el-input",{attrs:{placeholder:"Please input"},model:{value:e.hostname,callback:function(t){e.hostname=t},expression:"hostname"}})],1),a("el-form-item",{attrs:{label:"Root Dir"}},[a("i",{staticClass:"el-icon-info"}),a("el-input",{attrs:{placeholder:"Please input"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}})],1),a("el-form-item",{attrs:{label:"Enabled"}},[a("i",{staticClass:"el-icon-info"}),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.enabled,callback:function(t){e.enabled=t},expression:"enabled"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("\n        Submit\n      ")]),a("el-button",{attrs:{disabled:""}},[e._v("\n        Reset\n      ")])],1)],1):a("div",{staticClass:"project-details"},[a("h2",[e._v(e._s(this.$route.params.projectName))]),a("p",[e._v("This is a dummy project with no actual data!")])])],1)},n=[],l=a("cebc"),s=(a("7f7f"),a("cadf"),a("551c"),a("f751"),a("097d"),a("2f62")),i={name:"ProjectDetails",data:function(){return{name:"",hostname:"",group:0,enabled:null,groups:[{value:"0",label:"Group 0"},{value:"1",label:"Group 1"},{value:"2",label:"Group 2"}]}},watch:{"$route.params.projectName":{handler:function(e){var t=this.projectByName(e);this.name=t.name,this.hostname=t.hostname,this.group=t.group,this.enabled=t.enabled},deep:!0,immediate:!0}},computed:Object(l["a"])({},Object(s["b"])(["projectByName"]),{project:function(){return this.projectByName(this.$route.params.projectName)}}),methods:{updateProjectHostname:function(e){this.hostname=e},onSubmit:function(e){var t=this;this.$store.dispatch("updateProject",{projectName:this.project.name,project:{name:this.name,hostname:this.hostname,group:this.group,enabled:this.enabled}}).then(function(){t.$router.push("/project/"+t.name)})}}},r=i,c=(a("3066"),a("2877")),u=Object(c["a"])(r,o,n,!1,null,"71863999",null);t["default"]=u.exports}}]);
//# sourceMappingURL=project.5d75812b.js.map