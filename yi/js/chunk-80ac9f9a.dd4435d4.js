(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80ac9f9a"],{"0290":function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"about"},[t("div",{staticClass:"box"},[e._m(0),t("div",{staticClass:"box1"},[t("div",{staticClass:"size"},[e._v("铭朗云定制")]),t("div",{staticClass:"login"},[t("div",{class:{active:e.zhong,notactive:!e.zhong},on:{click:e.userlogin}},[e._v("用户名登录")]),t("div",{class:{active:!e.zhong,notactive:e.zhong},staticStyle:{"margin-left":"10px"},on:{click:e.iphonelogin}},[e._v("手机登录")])]),t("div",{staticClass:"input"},[t("a-input",{attrs:{size:"large",placeholder:e.tishi},model:{value:e.userName,callback:function(s){e.userName=s},expression:"userName"}},[t("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),t("div",{staticClass:"input"},[t("a-input",{directives:[{name:"show",rawName:"v-show",value:e.zhong,expression:"zhong"}],attrs:{size:"large",type:"password",placeholder:"请输入密码"},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}},[t("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.zhong,expression:"!zhong"}]},[t("el-input",{staticStyle:{width:"242px"},attrs:{placeholder:"请输入验证码",size:"large"},model:{value:e.input1,callback:function(s){e.input1=s},expression:"input1"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.zhong,expression:"!zhong"}]},[t("el-button",{attrs:{size:"large",disabled:e.show},on:{click:e.sendmessage}},[e._v(e._s(e.codebutton))])],1)],1),t("div",{staticClass:"code"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"input1"},[t("a-input",{attrs:{size:"large",placeholder:"请输入密码"},model:{value:e.code,callback:function(s){e.code=s},expression:"code"}},[t("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"code1"})]),t("div",[t("a-button",{staticClass:"buttonlogin",on:{click:e.login}},[e._v("登陆")])],1)])])])},o=[function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",[i("img",{staticClass:"box1",attrs:{src:t("4ffd"),alt:""}})])}],a=t("36b4"),n={name:"login",data:function(){return{zhong:!0,userName:"13271861525",password:"123456",code:"",tishi:"请输入用户名",input:"",codebutton:"获取验证码",count:"",timer:null,show:!1,input1:""}},methods:{sendmessage:function(){var e=this,s=60;this.timer||(this.count=s,this.show=!0,Object(a["h"])({phone:this.userName}).then((function(s){e.input=s.data})),this.timer=setInterval((function(){e.count>0&&e.count<=s?(e.count--,e.codebutton="已发送"+e.count+"秒"):(e.show=!1,clearInterval(e.timer),e.codebutton="重新获取验证码",e.timer=null)}),1e3))},iphonelogin:function(){this.zhong=!1,this.tishi="请输入手机号",this.userName="",this.input=""},userlogin:function(){this.zhong=!0,this.tishi="请输入用户名",this.userName="",this.password=""},login:function(){var e=this;1==this.zhong?Object(a["l"])({username:this.userName,password:this.password}).then((function(s){0==s.code?(e.$message.success(s.msg),localStorage.setItem("ms_username",e.userName),e.$store.commit("addToken",s.data.token),window.sessionStorage.setItem("Token",s.data.token),e.$router.push("/")):e.$message.error(s.msg)})):this.input1==this.input?Object(a["m"])({phone:this.userName,code:this.input}).then((function(s){0==s.code?(e.$message.success(s.msg),localStorage.setItem("ms_username",e.userName),e.$store.commit("addToken",s.data.token),e.$router.push("/")):e.$message.error(s.msg)})):this.$message.error("验证码错误")}}},c=n,r=(t("59d5"),t("2877")),l=Object(r["a"])(c,i,o,!1,null,"ccd1f460",null);s["default"]=l.exports},"4ffd":function(e,s,t){e.exports=t.p+"img/logo.fc4adcbf.png"},"59d5":function(e,s,t){"use strict";var i=t("86eb"),o=t.n(i);o.a},"86eb":function(e,s,t){}}]);