(function(e){function t(t){for(var s,r,l=t[0],o=t[1],u=t[2],d=0,p=[];d<l.length;d++)r=l[d],n[r]&&p.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);c&&c(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={app:0},i=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=o;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"1a64":function(e,t,a){},2137:function(e,t,a){"use strict";var s=a("2659"),n=a.n(s);n.a},2659:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("ApiList")],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("el-input",{attrs:{placeholder:"请输入查询内容"},model:{value:e.q,callback:function(t){e.q=t},expression:"q"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getData},slot:"append"})],1),a("el-button",{staticClass:"btn",on:{click:e.add}},[e._v(e._s(e.hint))]),e.status?a("AddApi",{attrs:{api:"/add/"}}):e._e(),e._l(e.data,function(e){return a("ApiItem",{key:e.url,attrs:{data:e}})})],2)},l=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form"},[a("p",[a("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),a("p",[a("el-input",{attrs:{placeholder:"请输入URL"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),a("p",[a("el-select",{staticClass:"select",attrs:{placeholder:"请选择类型",value:""},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("p",[a("el-checkbox",{model:{value:e.login_require,callback:function(t){e.login_require=t},expression:"login_require"}},[e._v("需要登陆才能访问?")])],1),a("p",[a("el-input",{attrs:{type:"textarea",placeholder:"请输入简介(可空)",autosize:{minRows:2}},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),a("p",{staticClass:"title"},[e._v("Send 发送的数据\n        "),e.send.length?e._e():a("el-button",{staticClass:"s_add",attrs:{icon:"el-icon-plus",type:"primary",round:""},on:{click:e.add_send}})],1),e._l(e.send,function(t,s){return a("p",{key:s,staticClass:"add_li"},[a("el-input",{staticClass:"add",attrs:{placeholder:"请输入参数名"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}}),a("el-input",{staticClass:"add",attrs:{placeholder:"请输入类型"},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"item.type"}}),a("el-button",{attrs:{icon:"el-icon-minus",type:"danger",round:""},on:{click:function(t){return e.remove_send(s)}}}),s===e.send.length-1?a("el-button",{attrs:{icon:"el-icon-plus",type:"primary",round:""},on:{click:e.add_send}}):e._e()],1)}),a("p",{staticClass:"title"},[e._v("Receive 接受的数据\n        "),e.receive.length?e._e():a("el-button",{staticClass:"s_add",attrs:{icon:"el-icon-plus",type:"primary",round:""},on:{click:e.add_receive}})],1),e._l(e.receive,function(t,s){return a("p",{key:"rec"+s,staticClass:"add_li"},[a("el-input",{staticClass:"add",attrs:{placeholder:"请输入参数名"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}}),a("el-input",{staticClass:"add",attrs:{placeholder:"请输入类型"},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"item.type"}}),a("el-button",{attrs:{icon:"el-icon-minus",type:"danger",round:""},on:{click:function(t){return e.remove_receive(s)}}}),s===e.receive.length-1?a("el-button",{attrs:{icon:"el-icon-plus",type:"primary",round:""},on:{click:e.add_receive}}):e._e()],1)}),a("p",[a("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],2)},u=[],c=(a("7f7f"),{name:"AddApi",props:["api","data"],data:function(){return{title:"",url:"",type:"",login_require:!1,description:"",send:[{name:"",type:""}],receive:[{name:"status",type:"bool"},{name:"error",type:"str"}],options:[{value:"GET",label:"Get"},{value:"POST",label:"Post"},{value:"DELETE",label:"Delete"},{value:"PATCH",label:"Patch"},{value:"PUT",label:"Put"}]}},mounted:function(){this.data&&(this.title=this.data.title,this.url=this.data.url,this.type=this.data.type,this.login_require=this.data.login_require,this.description=this.data.description,this.send=this.data.send,this.receive=this.data.receive)},methods:{add_send:function(){var e={name:"",type:""};this.send.push(e)},remove_send:function(e){this.send.splice(e,1)},add_receive:function(){var e={name:"",type:""};this.receive.push(e)},remove_receive:function(e){this.receive.splice(e,1)},submit:function(){var e=this;if(this.title&&this.url&&this.type){for(var t=0;t<this.send.length;t++)if(!this.send[t].name||!this.send[t].type)return void this.$message.error("发送字段不完整");for(var a=0;a<this.receive.length;a++)if(!this.receive[a].name||!this.receive[a].type)return void this.$message.error("接受字段不完整");var s={title:this.title,url:this.url,type:this.type,description:this.description,login_require:this.login_require,send:this.send,receive:this.receive};this.data&&(s["id"]=this.data.id),this.axios.post(this.$bus.base_url+this.api,s).then(function(t){t.data.status?(e.$message.success("成功"),location.reload()):e.$message.error("失败: "+t.data.error)})}else this.$message.error("有必填字段未填")}}}),d=c,p=(a("2137"),a("2877")),h=Object(p["a"])(d,o,u,!1,null,"39abd312",null),f=h.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{staticClass:"change",on:{click:e.change}},[e._v("修改")]),a("el-button",{staticClass:"change",on:{click:e.delete_}},[e._v("删除")]),e.status?a("AddApi",{attrs:{api:"/change/",data:e.data}}):a("div",{staticClass:"item"},[a("h3",[e._v(e._s(e.data.title))]),a("h4",[e._v("url: "+e._s(e.data.url))]),a("p",[e._v("method: "+e._s(e.data.type))]),a("p",[e._v("login_require: "+e._s(e.data.login_require))]),e.data.description?a("pre",[e._v("description: "),a("br"),e._v("    "+e._s(e.desc))]):e._e(),e.data.send.length?a("div",[a("p",[e._v("Send:")]),e._l(e.data.send,function(t,s){return a("pre",{key:"s"+s},[e._v("    "+e._s(t.name)+": "+e._s(t.type))])})],2):e._e(),e.data.receive.length?a("div",[a("p",[e._v("Receive:")]),e._l(e.data.receive,function(t,s){return a("pre",{key:"r"+s},[e._v("    "+e._s(t.name)+": "+e._s(t.type))])})],2):e._e(),a("p",{staticClass:"base"},[a("el-input",{attrs:{placeholder:"Base Url"},model:{value:e.base_url,callback:function(t){e.base_url=t},expression:"base_url"}})],1),a("el-button",{staticClass:"gene",on:{click:e.generate}},[e._v("快速生成axios请求")]),e.req?a("el-input",{attrs:{type:"textarea",autosize:{minRows:2}},model:{value:e.req,callback:function(t){e.req=t},expression:"req"}}):e._e()],1)],1)},m=[],_=(a("f559"),a("28a5"),{props:["data"],name:"ApiItem",components:{AddApi:f},computed:{desc:function(){var e=this.data.description;return e=e.split("\n"),e=e.join("\n    "),e}},data:function(){return{req:"",base_url:"this.$bus.base_url",status:!1}},methods:{change:function(){this.status=!this.status},delete_:function(){var e=this;this.axios.post(this.$bus.base_url+"/delete/",{id:this.data.id}).then(function(t){t.data.status?(e.$message.success("删除成功"),location.reload()):e.$message.error("删除失败: "+t.data.error)})},generate:function(){var e;if(e=this.base_url.startsWith("http")?"this.axios."+this.data.type.toLocaleLowerCase()+'("'+this.base_url+this.data.url:"this.axios."+this.data.type.toLocaleLowerCase()+"("+this.base_url+' + "'+this.data.url,"GET"===this.data.type){e+="?";for(var t=[],a=0;a<this.data.send.length;a++){var s=this.data.send[a].name+' = " + this.'+this.data.send[a].name;t.push(s)}e+=t.join(' + "&'),e+=")"}else{e+='", {\n';for(var n=[],i=0;i<this.data.send.length;i++){var r="    "+this.data.send[i].name+": this."+this.data.send[i].name;n.push(r)}e+=n.join(",\n"),e+="\n})"}e+="\n    .then(resp => {\n        let data = resp.data;\n";for(var l=[],o=0;o<this.data.receive.length;o++){var u="        this."+this.data.receive[o].name+" = data."+this.data.receive[o].name;l.push(u)}e+=l.join(";\n"),e+="\n})\n",e+="    .catch(() => {\n        this.$message.error('网络连接失败, 请检查网络后再试');\n});\n",this.req=e}}}),b=_,y=(a("d618"),Object(p["a"])(b,v,m,!1,null,"94991fa2",null)),g=y.exports,x={name:"ApiList",components:{AddApi:f,ApiItem:g},data:function(){return{q:"",data:[],hint:"添加API",status:!1}},mounted:function(){this.getData()},methods:{getData:function(){var e=this,t=this.$bus.base_url+"/apis/";this.q&&(t+="?q="+this.q),this.axios.get(t).then(function(t){e.data=t.data})},add:function(){this.status?(this.hint="添加API",this.status=!1):(this.hint="取消",this.status=!0)}}},k=x,q=(a("96f0"),Object(p["a"])(k,r,l,!1,null,"dbb10130",null)),C=q.exports,$={name:"app",components:{ApiList:C}},A=$,w=(a("034f"),Object(p["a"])(A,n,i,!1,null,null,null)),j=w.exports,O=a("bc3a"),P=a.n(O),L=a("a7fe"),E=a.n(L),T=a("5c96"),S=a.n(T),R=(a("0fae"),{username:"",base_url:"http://127.0.0.1:8000"}),D={hello:function(){return"Hello world"}},I=new s["default"]({data:R,methods:D});s["default"].prototype["$bus"]=I,s["default"].config.productionTip=!1,s["default"].use(S.a),s["default"].use(E.a,P.a),s["default"].axios.defaults.xsrfCookieName="session",s["default"].axios.defaults.timeout=2500,s["default"].axios.defaults.headers={"X-Requested-With":"XMLHttpRequest"},s["default"].axios.defaults.withCredentials=!0,new s["default"]({render:function(e){return e(j)}}).$mount("#app")},"64a9":function(e,t,a){},"96f0":function(e,t,a){"use strict";var s=a("1a64"),n=a.n(s);n.a},d537:function(e,t,a){},d618:function(e,t,a){"use strict";var s=a("d537"),n=a.n(s);n.a}});
//# sourceMappingURL=app.07fe2b38.js.map