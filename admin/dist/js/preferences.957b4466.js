(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["preferences"],{a55d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Preferences")]),a("b-form",[a("h2",[t._v("Base Directories")]),a("b-container",{attrs:{fluid:""}},[a("b-form-row",{staticClass:"my-1"},[a("b-col",{attrs:{sm:"4"}},[a("label",{attrs:{for:"input-none"}},[t._v("Name:")])]),a("b-col",{attrs:{sm:"7"}},[a("label",{attrs:{for:"input-none"}},[t._v("Path:")])]),a("b-col",{attrs:{sm:"1"}},[a("label",{attrs:{for:"input-none"}},[t._v("Action:")])])],1),t._l(t.$store.state.basedirs.records,function(e){return a("b-form-row",{key:e.id,staticClass:"my-1"},[a("b-col",{attrs:{sm:"4"}},[a("b-form-input",{attrs:{id:e.id+"BaseDirName",type:"text",required:"",placeholder:"Name"},model:{value:e.id,callback:function(a){t.$set(e,"id",a)},expression:"basedir.id"}})],1),a("b-col",{attrs:{sm:"7"}},[a("b-form-input",{attrs:{id:e.id+"BaseDirPath",type:"text",required:"",placeholder:"Path"},model:{value:e.attributes.host_dir,callback:function(a){t.$set(e.attributes,"host_dir",a)},expression:"basedir.attributes.host_dir"}})],1)],1)}),a("b-form-row",{staticClass:"my-1"},[a("b-col",{attrs:{sm:"4"}},[a("b-form-input",{attrs:{type:"text",required:"",placeholder:""},model:{value:t.baseDirName,callback:function(e){t.baseDirName=e},expression:"baseDirName"}})],1),a("b-col",{attrs:{sm:"7"}},[a("b-form-input",{attrs:{type:"text",required:"",placeholder:""},model:{value:t.baseDirPath,callback:function(e){t.baseDirPath=e},expression:"baseDirPath"}})],1),a("b-col",{attrs:{sm:"1"}},[a("b-button",{attrs:{type:"submit.prevent",variant:"success"},on:{click:t.addNewBaseDir}},[t._v("\n            Add\n          ")])],1)],1)],2)],1)],1)},r=[],i={name:"Preferences",data:function(){return{baseDirName:"",baseDirPath:""}},computed:{},mounted:function(){this.$store.dispatch("basedirs/loadAll")},methods:{addNewBaseDir:function(){this.$store.dispatch("addBaseDir",{name:this.baseDirName,path:this.baseDirPath}),this.baseDirName="",this.baseDirPath=""}}},o=i,n=a("2877"),c=Object(n["a"])(o,s,r,!1,null,"42b129c8",null);e["default"]=c.exports}}]);
//# sourceMappingURL=preferences.957b4466.js.map