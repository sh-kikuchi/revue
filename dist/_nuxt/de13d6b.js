(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{473:function(t,n,e){var content=e(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("2c003504",content,!0,{sourceMap:!1})},551:function(t,n,e){"use strict";e(473)},552:function(t,n,e){var r=e(17)(!1);r.push([t.i,".navigation[data-v-75d21fc7]{color:#000;text-decoration:none}.navigation[data-v-75d21fc7]:hover{color:#90ee90}.p-main-container[data-v-75d21fc7]{max-width:820px;margin:0 auto}.article-header[data-v-75d21fc7]{text-align:center}.amazon-link[data-v-75d21fc7]{display:block;margin:10px auto}",""]),t.exports=r},594:function(t,n,e){"use strict";e.r(n);var r=e(23),o=(e(80),e(29),e(65),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,o,c,l,d,content,v;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,r=t.params,o=t.redirect,c=t.route,console.log(c.path),l=c.path.split("/"),d=l[l.length-2],console.log(d),n.next=7,e("blog/"+d).where({path:"/blog/"+d+"/"+r.slug}).fetch();case 7:if(content=n.sent,v="blog/"+d,!(content.length>0)){n.next=13;break}return n.abrupt("return",{content:content[0],navigation:v,dirParam:d});case 13:o("/blog/"+d);case 14:case"end":return n.stop()}}),n)})))()}}),c=(e(551),e(87)),l=e(118),d=e.n(l),v=e(419),m=e(430),f=e(186),_=e(416),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"p-main-container"},[e("div",{staticClass:"navigation-bar pt-1"},[e("v-icon",[t._v("mdi-home")]),t._v(" "),e("nuxt-link",{staticClass:"navigation",attrs:{to:"/",tag:"a"}},[t._v(" Home")]),e("span",[t._v(" > ")]),t._v(" "),e("v-icon",[t._v("mdi-fountain-pen")]),t._v(" "),e("nuxt-link",{staticClass:"navigation",attrs:{to:"/blog",tag:"a"}},[t._v(" Blog")]),t._v(" "),e("span",[t._v(" > ")]),t._v(" "),e("v-icon",[t._v("mdi-fountain-pen")]),t._v(" "),e("nuxt-link",{staticClass:"navigation",attrs:{to:"{navigation}",tag:"a"}},[t._v("\n      "+t._s(t.dirParam))])],1),t._v(" "),e("div",{staticClass:"p-main-wrapper"},[e("div",{staticClass:"ma-3",attrs:{id:"l-center-area"}},[e("div",{staticClass:"ma-3",attrs:{id:"l-center-area"}},[e("div",{attrs:{chass:"article-header"}},[e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",{staticClass:"mx-auto",attrs:{color:"#385F73","max-width":"800",dark:""}},[e("div",{attrs:{chass:"article-header"}},[e("h1",{staticClass:"c-article-title text-center"},[t._v("\n                    "+t._s(t.content.title)+"\n                  ")]),t._v(" "),e("p",{staticClass:"c-article-descrition text-center"},[t._v("\n                    "+t._s(t.content.description)+"\n                  ")])])])],1)],1)],1)]),t._v(" "),e("nuxt-content",{attrs:{document:t.content}}),t._v(" "),e("iframe",{staticClass:"amazon-link",staticStyle:{border:"none margin: 0 auto"},attrs:{src:"https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=pc_store&f=ifr&linkID=7ca0525393884aa872d2a306588d834c&t=revue0f-22&tracking_id=revue0f-22",width:"300",height:"250",scrolling:"no",border:"0",marginwidth:"0",frameborder:"0"}})],1)])])}),[],!1,null,"75d21fc7",null);n.default=component.exports;d()(component,{VCard:v.a,VCol:m.a,VIcon:f.a,VRow:_.a})}}]);