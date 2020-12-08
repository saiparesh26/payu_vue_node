(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"315e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view")],1)},i=[],o=(a("db38"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar has-background-grey-lighter",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[t.isLoggedIn?t._e():a("router-link",{attrs:{to:"/register"}},[a("a",{staticClass:"button is-primary mr-2"},[a("strong",[t._v("Register")])])]),t.isLoggedIn?t._e():a("router-link",{attrs:{to:"/"}},[a("a",{staticClass:"button is-light"},[t._v(" Log in ")])]),t.isLoggedIn?a("router-link",{attrs:{to:"/"}},[a("a",{staticClass:"button is-light",on:{click:t.logout}},[t._v(" Log Out ")])]):t._e()],1)])])])])}),r=[],l={computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn}},mounted:function(){window.onbeforeunload=function(){localStorage.clear()}},methods:{logout:function(){this.$store.commit("changeLoginStatus",!1),this.$store.commit("setToken",null),localStorage.removeItem("token")}}},c=l,u=a("2877"),d=Object(u["a"])(c,o,r,!1,null,"18c0ddd1",null),p=d.exports,m={name:"App",components:{Navbar:p}},v=m,g=Object(u["a"])(v,n,i,!1,null,null,null),f=g.exports,h=a("8c4f"),b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("SR Number")]),a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"number",placeholder:"23414224",required:""}})])])])}],C={},y=C,_=(a("99a4"),Object(u["a"])(y,b,w,!1,null,"6e3ab375",null)),x=_.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"register"}},[a("h1",{staticClass:"title is-2 has-text-centered"},[t._v("Register")]),t.created?a("div",{staticClass:"notification"},[a("strong",[t._v("Succesfully registered")])]):a("div",[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Username")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g Alex Smith",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Email")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"e.g. alexsmith@gmail.com",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Password")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary mt-2",staticStyle:{width:"500px"},attrs:{disabled:!t.isNotEmpty},on:{click:t.register}},[t._v(" Register ")])])]),a("div",[t.alreadyExists?a("div",{staticClass:"notification mt-2"},[a("strong",[t._v("User already exists")])]):t._e()])])},E=[],S=a("bc3a"),O=a.n(S),j={data:function(){return{username:null,email:null,password:null,created:!1,alreadyExists:!1}},computed:{isNotEmpty:function(){return this.username&&this.email&&this.password}},methods:{register:function(){var t=this,e={"Content-Type":"application/json"},a={};a.username=this.username,a.email=this.email,a.password=this.password,O.a.post("/register",a,{headers:e}).then((function(e){console.log(e.data),t.created=!0,setTimeout((function(){t.created=!1,t.$router.push({name:"Login"})}),2e3)})).catch((function(e){t.alreadyExists=!0,setTimeout((function(){t.alreadyExists=!1}),2e3),console.log(e)}))}}},L=j,P=(a("f536"),Object(u["a"])(L,k,E,!1,null,"4983a4d1",null)),$=P.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("h1",{staticClass:"title is-2 has-text-centered"},[t._v("Login")]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Email")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"e.g. alexsmith@gmail.com",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Password")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary mt-2",staticStyle:{width:"500px"},attrs:{disabled:!t.isNotEmpty},on:{click:t.login}},[t._v(" Login ")])]),t.error?a("div",{staticClass:"notification mt-2"},[a("strong",[t._v("Wrong Email or Password")])]):t._e()])},N=[],T={data:function(){return{email:null,password:null,error:null}},computed:{isNotEmpty:function(){return this.email&&this.password}},methods:{login:function(){var t=this,e={"Content-Type":"application/json"},a={};a.email=this.email,a.password=this.password,O.a.post("/login",a,{headers:e}).then((function(e){t.$store.commit("changeLoginStatus",!0),t.$store.commit("setToken",e.data.token),t.$router.push({name:"Home"})})).catch((function(e){console.log(e),t.error=!0,setTimeout((function(){t.error=!1}),2e3)}))}}},q=T,R=(a("b044"),Object(u["a"])(q,I,N,!1,null,"7a33685d",null)),M=R.exports,A=function(t,e,a){var s=!1;s=!!localStorage.getItem("token"),s?a():a("/")},H=A,J=a("2f62");s["a"].use(J["a"]);var U=new J["a"].Store({state:{loggedIn:!1,token:null},mutations:{changeLoginStatus:function(t,e){t.loggedIn=e},setToken:function(t,e){localStorage.setItem("token",e),t.token=e}},getters:{isLoggedIn:function(t){return t.loggedIn},getToken:function(t){return t.token}}}),B=U;s["a"].config.productionTip=!1,s["a"].use(h["a"]);var W=[{path:"/home",component:x,name:"Home",beforeEnter:H},{path:"/",component:M,name:"Login"},{path:"/register",component:$,name:"Register"},{path:"*",redirect:"/"}],z=new h["a"]({routes:W,mode:"history"});new s["a"]({render:function(t){return t(f)},router:z,store:B}).$mount("#app")},8829:function(t,e,a){},"99a4":function(t,e,a){"use strict";a("315e")},b044:function(t,e,a){"use strict";a("daf5")},daf5:function(t,e,a){},f536:function(t,e,a){"use strict";a("8829")}});
//# sourceMappingURL=app.6ec91cc6.js.map