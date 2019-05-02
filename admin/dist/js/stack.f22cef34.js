(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stack"],{"9e3c":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"stack-details"},[t("h1",[e._v("Stack Details")]),t("h2",[e._v(e._s(e.stack.label))]),t("el-row",[t("el-col",{attrs:{span:4}},[t("el-card",{staticClass:"box-card",attrs:{label:"Web"}},[t("ServiceWeb",{attrs:{service:e.stack.services.webserver}})],1)],1),t("el-col",{attrs:{span:4}},[t("el-card",{attrs:{label:"Database"}},[t("ServiceDB",{attrs:{service:e.stack.services.dbserver}})],1)],1),t("el-col",{attrs:{span:4}},[t("el-card",{attrs:{label:"Cache"}},[t("ServiceCache",{attrs:{service:e.stack.services.cacheserver}})],1)],1),t("el-col",{attrs:{span:4}},[t("el-card",{attrs:{label:"Process"}},[t("ServiceProcessVM",{attrs:{service:e.stack.services.processvm}})],1)],1)],1)],1)},s=[],c=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("StackMemberFields",{attrs:{member:e.member,memberType:"web"}})},m=[],l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{class:"stack-member stack-member--"+e.memberType},[t("h3",[e._v(e._s(e.member.label))]),t("el-radio-group",{attrs:{size:"small"}},e._l(e.member.examples,function(r){return t("el-radio",{key:r,attrs:{label:"example",border:"",disabled:""}},[e._v("\n      "+e._s(r)+"\n    ")])}),1),t("dl",[t("dt",[e._v("Name:")]),t("dd",[e._v(e._s(e.member.name?e.member.name:"–"))]),t("dt",[e._v("Short label:")]),t("dd",[e._v(e._s(e.member.shortLabel?e.member.shortLabel:"–"))]),t("dt",[e._v("Member type:")]),t("dd",[e._v(e._s(e.member.memberType?e.member.memberType:"–"))]),t("dt",[e._v("Optional:")]),t("dd",[e._v(e._s(!0===e.member.optional?"true":!1===e.member.optional?"false":"–"))]),t("dt",[e._v("Stack:")]),t("dd",[e._v(e._s(e.member.stack?e.member.stack:"–"))])])],1)},b=[],n={name:"StackMemberFields",props:{memberType:{type:String,required:!0},member:{type:Object,required:!0}}},i=n,o=t("2877"),p=Object(o["a"])(i,l,b,!1,null,"bb66c386",null),d=p.exports,v={name:"StackMemberWeb",components:{StackMemberFields:d},props:{member:{type:Object,required:!0}}},u=v,k=Object(o["a"])(u,c,m,!1,null,"3b60e31a",null),_=k.exports,S=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("StackMemberFields",{attrs:{member:e.member,memberType:"database"}})},h=[],f={name:"StackMemberDB",components:{StackMemberFields:d},props:{member:{type:Object,required:!0}}},y=f,M=Object(o["a"])(y,S,h,!1,null,"57ff09aa",null),O=M.exports,j=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("StackMemberFields",{attrs:{member:e.member,memberType:"cache"}})},w=[],x={name:"StackMemberCache",components:{StackMemberFields:d},props:{member:{type:Object,required:!0}}},F=x,T=Object(o["a"])(F,j,w,!1,null,"3c062be1",null),$=T.exports,q=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("StackMemberFields",{attrs:{member:e.member,memberType:"worker"}})},C=[],D={name:"StackMemberWorker",components:{StackMemberFields:d},props:{member:{type:Object,required:!0}}},E=D,W=Object(o["a"])(E,q,C,!1,null,"aea2bb8a",null),B=W.exports,P={name:"StackDetails",computed:{stack:function(){return this.$store.state.stacks[this.$route.params.stackName]}},components:{ServiceWeb:_,ServiceDB:O,ServiceCache:$,ServiceProcessVM:B}},g=P,J=Object(o["a"])(g,a,s,!1,null,"d0550808",null);r["default"]=J.exports}}]);
//# sourceMappingURL=stack.f22cef34.js.map