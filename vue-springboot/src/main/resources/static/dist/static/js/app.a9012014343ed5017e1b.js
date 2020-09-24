webpackJsonp([1],{"6E2S":function(e,t){},FfXv:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("a",{attrs:{href:"#/home"}},[this._v("主页")]),this._v(" "),t("a",{attrs:{href:"#/user"}},[this._v("用户管理")]),this._v(" "),t("a",{attrs:{href:"#/student"}},[this._v("学生管理")]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},s,!1,function(e){n("j5lB")},null,null).exports,o=n("/ocq"),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("欢迎来到我们的网站！")])])}]};var u=n("VU/8")({name:"Home"},i,!1,function(e){n("qnZg")},"data-v-67ca97ee",null).exports,c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("学生模块")])])}]};var v=n("VU/8")({name:"Student"},c,!1,function(e){n("PiqX")},"data-v-6ba2b518",null).exports,d={name:"User",data:function(){return{users:[]}},methods:{findAll:function(){var e=this;this.$http.get("http://localhost:8081/vue/user/findAll?page=1&rows=4").then(function(t){e.users=t.data.results})},delRow:function(e){var t=this;console.log(e),this.$http.get("http://localhost:8081/vue/user/delete?id="+e).then(function(e){console.log(e),e.data.success&&(alert(e.data.msg+",点击确定刷新当前数据！"),t.findAll())})}},components:{},created:function(){this.findAll()},watch:{$route:{handler:function(e,t){console.log("变化之后的路由是："+e),"/user"==e.path&&this.findAll()},deep:!0}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("用户列表")]),e._v(" "),n("table",{attrs:{border:"1"}},[e._m(0),e._v(" "),e._l(e.users,function(t){return n("tr",[n("td",[e._v(e._s(t.id))]),e._v(" "),n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[e._v(e._s(t.age))]),e._v(" "),n("td",[e._v(e._s(t.bir))]),e._v(" "),n("td",[n("a",{attrs:{href:"javascript:;"},on:{click:function(n){return e.delRow(t.id)}}},[e._v("删除")]),n("a",{attrs:{href:"#/user/edit?id="+t.id}},[e._v("修改")])])])})],2),e._v(" "),n("a",{attrs:{href:"#/user/add"}},[e._v("添加")]),e._v(" "),n("router-view")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td",[e._v("编号")]),e._v(" "),n("td",[e._v("姓名")]),e._v(" "),n("td",[e._v("年龄")]),e._v(" "),n("td",[e._v("生日")]),e._v(" "),n("td",[e._v("操作")])])}]};var p=n("VU/8")(d,l,!1,function(e){n("6E2S")},"data-v-6b153dba",null).exports,h={name:"UserAdd",data:function(){return{user:{}}},methods:{saveUserInfo:function(){var e=this;console.log(this.user),this.$http.post("http://localhost:8081/vue/user/add",this.user).then(function(t){console.log(t.data),t.data.success&&e.$router.push("/user")})}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("用户添加信息")]),e._v(" "),n("form",{attrs:{action:""}},[e._v("\n    用户名 "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),n("br"),e._v("\n    年龄 "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.age,expression:"user.age"}],attrs:{type:"text"},domProps:{value:e.user.age},on:{input:function(t){t.target.composing||e.$set(e.user,"age",t.target.value)}}}),n("br"),e._v("\n    生日 "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.bir,expression:"user.bir"}],attrs:{type:"text"},domProps:{value:e.user.bir},on:{input:function(t){t.target.composing||e.$set(e.user,"bir",t.target.value)}}}),n("br"),e._v(" "),n("input",{attrs:{type:"button",value:"添加用户信息"},on:{click:e.saveUserInfo}})])])},staticRenderFns:[]};var f=n("VU/8")(h,m,!1,function(e){n("xNzL")},"data-v-4f974703",null).exports,_={name:"UserEdit",data:function(){return{user:{id:""}}},methods:{findOne:function(){var e=this;this.$http.get("http://localhost:8081/vue/user/findOne?id="+this.user.id).then(function(t){console.log(t),e.user=t.data})},editUserInfo:function(){var e=this;this.$http.post("http://localhost:8081/vue/user/update",this.user).then(function(t){console.log(t),t.data.success&&e.$router.push("/user")})}},created:function(){console.log("修改组件中获取的id："+this.$route.query.id),this.user.id=this.$route.query.id,this.findOne()}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("编辑用户信息")]),e._v(" "),n("form",{attrs:{action:""}},[e._v("\n    用户名："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),n("br"),e._v(" "),e._v("\n    年龄："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.age,expression:"user.age"}],attrs:{type:"text"},domProps:{value:e.user.age},on:{input:function(t){t.target.composing||e.$set(e.user,"age",t.target.value)}}}),n("br"),e._v("\n    生日："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.bir,expression:"user.bir"}],attrs:{type:"text"},domProps:{value:e.user.bir},on:{input:function(t){t.target.composing||e.$set(e.user,"bir",t.target.value)}}}),n("br"),e._v(" "),n("input",{attrs:{type:"button",value:"添加"},on:{click:e.editUserInfo}})])])},staticRenderFns:[]};var b=n("VU/8")(_,g,!1,function(e){n("FfXv")},"data-v-6ba04e20",null).exports;r.a.use(o.a);var $=new o.a({routes:[{path:"/",redirect:"/home"},{path:"/home",component:u},{path:"/user",component:p,children:[{path:"add",component:f},{path:"edit",component:b}]},{path:"/student",component:v}]}),x=n("mtWM"),w=n.n(x);r.a.prototype.$http=w.a,r.a.config.productionTip=!1,new r.a({el:"#app",router:$,components:{App:a},template:"<App/>"})},PiqX:function(e,t){},j5lB:function(e,t){},qnZg:function(e,t){},xNzL:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a9012014343ed5017e1b.js.map