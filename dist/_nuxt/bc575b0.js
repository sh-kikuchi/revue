(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{588:function(t,e,r){"use strict";r.r(e);var n=r(24),c=(r(88),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,c=t.redirect,e.next=3,r("blog/php").where({path:"/blog/php/"+n.slug}).fetch();case 3:if(!((content=e.sent).length>0)){e.next=8;break}return e.abrupt("return",{content:content[0]});case 8:c("/blog/php");case 9:case"end":return e.stop()}}),e)})))()}}),o=r(87),l=r(118),d=r.n(l),v=r(413),h=r(424),w=r(408),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-main-container"},[r("div",{staticClass:"p-main-wrapper"},[r("div",{staticClass:"ma-3",attrs:{id:"l-center-area"}},[r("div",{staticClass:"ma-3",attrs:{id:"l-center-area"}},[r("div",{attrs:{chass:"article-header"}},[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"mx-auto",attrs:{color:"#385F73","max-width":"800",dark:""}},[r("div",{attrs:{chass:"article-header"}},[r("h1",{staticClass:"c-article-title text-center"},[t._v("\n                    "+t._s(t.content.title)+"\n                  ")]),t._v(" "),r("p",{staticClass:"c-article-descrition text-center"},[t._v("\n                    "+t._s(t.content.description)+"\n                  ")])])])],1)],1)],1)]),t._v(" "),r("nuxt-content",{attrs:{document:t.content}})],1)])])}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCol:h.a,VRow:w.a})}}]);