(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{587:function(t,e,n){"use strict";n.r(e);var r=n(24),c=(n(88),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,c=t.redirect,e.next=3,n("blog/nuxt_vue").where({path:"/blog/nuxt_vue/"+r.slug}).fetch();case 3:if(!((content=e.sent).length>0)){e.next=8;break}return e.abrupt("return",{content:content[0]});case 8:c("/blog/nuxt_vue");case 9:case"end":return e.stop()}}),e)})))()}}),o=n(87),l=n(118),d=n.n(l),v=n(413),h=n(424),w=n(408),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-main-container"},[n("div",{staticClass:"p-main-wrapper"},[n("div",{staticClass:"ma-3",attrs:{id:"l-center-area"}},[n("div",{staticClass:"ma-3",attrs:{id:"l-center-area"}},[n("div",{attrs:{chass:"article-header"}},[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"mx-auto",attrs:{color:"#385F73","max-width":"800",dark:""}},[n("div",{attrs:{chass:"article-header"}},[n("h1",{staticClass:"c-article-title text-center"},[t._v("\n                    "+t._s(t.content.title)+"\n                  ")]),t._v(" "),n("p",{staticClass:"c-article-descrition text-center"},[t._v("\n                    "+t._s(t.content.description)+"\n                  ")])])])],1)],1)],1)]),t._v(" "),n("nuxt-content",{attrs:{document:t.content}})],1)])])}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCol:h.a,VRow:w.a})}}]);