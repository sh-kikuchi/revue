(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{469:function(t,e,r){var content=r(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("219059df",content,!0,{sourceMap:!1})},548:function(t,e,r){"use strict";r(469)},549:function(t,e,r){var n=r(17)(!1);n.push([t.i,".p-main-container[data-v-7489de94]{max-width:820px;margin:0 auto}.article-header[data-v-7489de94]{text-align:center}.amazon-link[data-v-7489de94]{display:block;margin:10px auto}",""]),t.exports=n},591:function(t,e,r){"use strict";r.r(e);var n=r(24),c=(r(87),r(29),r(65),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,l,d,content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,c=t.redirect,o=t.route,console.log(o.path),l=o.path.split("/"),d=l[l.length-2],console.log(d),e.next=7,r("blog/"+d).where({path:"/blog/"+d+"/"+n.slug}).fetch();case 7:if(!((content=e.sent).length>0)){e.next=12;break}return e.abrupt("return",{content:content[0]});case 12:c("/blog/"+d);case 13:case"end":return e.stop()}}),e)})))()}}),o=(r(548),r(86)),l=r(118),d=r.n(l),m=r(415),v=r(426),f=r(412),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-main-container"},[r("div",{staticClass:"p-main-wrapper"},[r("div",{staticClass:"ma-3",attrs:{id:"l-center-area"}},[r("div",{staticClass:"ma-3",attrs:{id:"l-center-area"}},[r("div",{attrs:{chass:"article-header"}},[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"mx-auto",attrs:{color:"#385F73","max-width":"800",dark:""}},[r("div",{attrs:{chass:"article-header"}},[r("h1",{staticClass:"c-article-title text-center"},[t._v("\n                    "+t._s(t.content.title)+"\n                  ")]),t._v(" "),r("p",{staticClass:"c-article-descrition text-center"},[t._v("\n                    "+t._s(t.content.description)+"\n                  ")])])])],1)],1)],1)]),t._v(" "),r("nuxt-content",{attrs:{document:t.content}}),t._v(" "),r("iframe",{staticClass:"amazon-link",staticStyle:{border:"none margin: 0 auto"},attrs:{src:"https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=pc_store&f=ifr&linkID=7ca0525393884aa872d2a306588d834c&t=revue0f-22&tracking_id=revue0f-22",width:"300",height:"250",scrolling:"no",border:"0",marginwidth:"0",frameborder:"0"}})],1)])])}),[],!1,null,"7489de94",null);e.default=component.exports;d()(component,{VCard:m.a,VCol:v.a,VRow:f.a})}}]);