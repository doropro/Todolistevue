(function(t){function e(e){for(var o,a,c=e[0],l=e[1],s=e[2],d=0,p=[];d<c.length;d++)a=c[d],r[a]&&p.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"12bf":function(t,e,n){},3100:function(t,e,n){"use strict";var o=n("6df3"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",{staticClass:"offset-8 col-md-4"},[n("anim2")],1),n("section",[n("anim"),n("todos")],1)])},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"box",staticClass:"box text-center"},[n("h1",{staticClass:"title mb-5"},[t._v("My Todo Liste")])])},c=[],l=n("cffa"),s={mounted:function(){var t=this.$refs.box;new TimelineLite;l["a"].to(t,1,{x:750,rotation:0}),l["b"].to("h1.title",3,{opacity:.6})}},u=s,d=(n("63e5"),n("2877")),p=Object(d["a"])(u,a,c,!1,null,null,null),f=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"newTodo mt-5",attrs:{type:"text",placeholder:"Ajouter une tâche"},domProps:{value:t.newTodo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}),n("table",{staticClass:"todo-list mt-5"},t._l(t.todos,function(e){return n("tr",{staticClass:"todo mt-5",class:{completed:e.completed}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"todo.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(n){var o=e.completed,r=n.target,i=!!r.checked;if(Array.isArray(o)){var a=null,c=t._i(o,a);r.checked?c<0&&t.$set(e,"completed",o.concat([a])):c>-1&&t.$set(e,"completed",o.slice(0,c).concat(o.slice(c+1)))}else t.$set(e,"completed",i)}}}),n("label",{staticClass:"p-2",class:{completed:e.completed}},[t._v(t._s(e.name))]),n("td",{staticClass:"text-right pr-5"},[n("a",{staticClass:"deleteTodo",attrs:{href:"#",type:"",button:"","aria-label":"Close"},on:{click:function(n){return n.preventDefault(),t.deleteTodo(e)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])}),0),n("button",{directives:[{name:"show",rawName:"v-show",value:t.completed,expression:"completed"}],staticClass:"mt-5",on:{click:function(e){return e.preventDefault(),t.deleteTotal(e)}}},[t._v("supprimer taches")]),n("button",{staticClass:"mt-5",on:{click:function(e){return e.preventDefault(),t.deleteTotal1(e)}}},[t._v("Tout supprimer")])])},h=[],v={data:function(){return{todos:[]}},methods:{addTodo:function(){this.todos.push({completed:!1,name:this.newTodo}),this.newTodo=""},deleteTodo:function(t){this.todos=this.todos.filter(function(e){return e!==t})},deleteTotal:function(){l["a"].to("button",1,{rotation:360}),this.todos=this.todos.filter(function(t){return!t.completed})},deleteTotal1:function(){l["a"].to("button",1,{rotation:360}),this.todos=this.todos.filter(function(t){return t.todos})}},computed:{completed:function(){return this.todos.filter(function(t){return t.completed}).length},remaining:function(){return this.todos.filter(function(t){return!t.completed}).length}}},b=v,y=(n("3100"),Object(d["a"])(b,m,h,!1,null,null,null)),g=y.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container1 mt-5"},[n("img",{attrs:{id:"logo",src:"https://www.icone-png.com/png/40/39705.png"}})])}],x={mounted:function(){l["b"].from("#logo",3,{x:300,opacity:0,scale:.5})}},T=x,k=(n("b37a"),Object(d["a"])(T,_,w,!1,null,null,null)),C=k.exports,O={name:"app",components:{anim:f,todos:g,anim2:C}},j=O,$=Object(d["a"])(j,r,i,!1,null,null,null),P=$.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(P)}}).$mount("#app")},"63e5":function(t,e,n){"use strict";var o=n("9a7c"),r=n.n(o);r.a},"6df3":function(t,e,n){},"9a7c":function(t,e,n){},b37a:function(t,e,n){"use strict";var o=n("12bf"),r=n.n(o);r.a}});
//# sourceMappingURL=app.fbd405dc.js.map