(window.webpackJsonp=window.webpackJsonp||[]).push([[36,21,22],{453:function(e,t,r){var content=r(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("e8c38bbe",content,!0,{sourceMap:!1})},465:function(e,t,r){"use strict";r(453)},466:function(e,t,r){var o=r(15)(!1);o.push([e.i,"#labels[data-v-d2eaf0ee]{background-color:#b7ccdb;height:100%;overflow-x:auto}.input-category[data-v-d2eaf0ee]{background-color:#f1f1f3}.label-content[data-v-d2eaf0ee]{display:flex}.label-list[data-v-d2eaf0ee]{height:100%}.category-title[data-v-d2eaf0ee]{font-size:20px}.input-item[data-v-d2eaf0ee]{display:block;width:100%;height:50px;text-align:center}.item-border[data-v-d2eaf0ee]{width:100%;display:flex;border-bottom:1px dotted #000;word-break:break-all}",""]),e.exports=o},467:function(e,t,r){var content=r(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("2a5b4e52",content,!0,{sourceMap:!1})},477:function(e,t,r){"use strict";r.r(t);r(21);var o={props:{text:{type:String,required:!0},categoryIndex:{type:Number,required:!0},itemIndex:{type:Number,required:!0}},methods:{deleteItem:function(){confirm("本当にこのアイテムを削除しますか？")&&this.$store.dispatch("label/deleteItem",{categoryIndex:this.categoryIndex,itemIndex:this.itemIndex})}}},l=(r(465),r(92)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"item"}},[r("div",[e._v(e._s(e.text))]),e._v(" "),r("div",[r("button",{staticClass:"btn btn-danger",on:{click:e.deleteItem}},[e._v("✖")])])])}),[],!1,null,"d2eaf0ee",null);t.default=component.exports},497:function(e,t,r){"use strict";r(467)},498:function(e,t,r){var o=r(15)(!1);o.push([e.i,"#labels[data-v-1eb51032]{background-color:#b7ccdb;height:100%;overflow-x:auto}.input-category[data-v-1eb51032]{background-color:#f1f1f3}.label-list[data-v-1eb51032]{height:100%}.category-title[data-v-1eb51032]{font-size:20px;word-break:break-all}.input-item[data-v-1eb51032]{display:block;width:300px;height:50px;text-align:center}.item-border[data-v-1eb51032]{width:300px;display:flex;margin:0 0 -1px;border:1px dashed #000;word-break:break-all}",""]),e.exports=o},547:function(e,t,r){var content=r(674);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("0881ded8",content,!0,{sourceMap:!1})},568:function(e,t,r){"use strict";r.r(t);r(21);var o=r(496),l=r.n(o),n=r(477),d={components:{draggable:l.a,item:n.default},props:{categories:{},title:{type:String,required:!0},categoryIndex:{type:Number,required:!0},items:{type:Array,required:!0}},methods:{deleteCategory:function(){confirm("本当にこのカテゴリーを削除しますか？")&&this.$store.dispatch("label/deleteCategory",{categoryIndex:this.categoryIndex})},addItem:function(e){""!=e.target.value&&(this.$store.dispatch("label/addItem",{text:e.target.value,categoryIndex:this.categoryIndex}),e.target.value="")}}},c=(r(497),r(92)),f=r(131),h=r.n(f),v=r(202),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"ma-2 pl-2 pr-2 label-list",attrs:{id:"category"}},[r("div",{staticClass:"category-title d-flex justify-space-between pr-3 pl-3"},[r("div"),e._v(" "),r("div",{staticClass:"mt-2 mb-2"},[e._v(e._s(e.title))]),e._v(" "),r("div",[r("button",{staticClass:"btn btn-danger",on:{click:e.deleteCategory}},[e._v("✖")])])]),e._v(" "),r("draggable",{attrs:{group:"items",list:e.items},on:{end:function(t){return e.$emit("change")}}},e._l(e.items,(function(t,o){return r("item",{key:o,staticClass:"item-border d-flex justify-space-between pa-3",attrs:{categoryIndex:e.categoryIndex,itemIndex:o,text:t.text,tag:"div"}})})),1),e._v(" "),r("input",{staticClass:"input-item",attrs:{placeholder:"アイテムを追加する"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addItem(t)}}})],1)}),[],!1,null,"1eb51032",null);t.default=component.exports;h()(component,{VCard:v.a})},673:function(e,t,r){"use strict";r(547)},674:function(e,t,r){var o=r(15)(!1);o.push([e.i,"#labels[data-v-7a37faaa]{background-color:#b7ccdb;height:100%;overflow-x:auto}.input-category[data-v-7a37faaa]{width:220px;background-color:#f1f1f3}.label-content[data-v-7a37faaa]{display:flex}.label-list[data-v-7a37faaa]{height:100%}.category-title[data-v-7a37faaa]{font-size:20px}.input-item[data-v-7a37faaa]{display:block;width:100%;height:50px;text-align:center}.item-border[data-v-7a37faaa]{width:300px;display:flex;border:1px dotted #000;word-break:break-all}",""]),e.exports=o},744:function(e,t,r){"use strict";r.r(t);var o=r(496),l=r.n(o),n=r(568),d={components:{draggable:l.a,category:n.default},computed:{categories:{get:function(){return JSON.parse(JSON.stringify(this.$store.state.label.categories))},set:function(e){this.$store.dispatch("label/shiftCategory",{newCategories:e})}}},methods:{shiftCategory:function(){this.$store.dispatch("label/shiftCategory",{categories:this.categories})},shiftItem:function(){this.$store.dispatch("label/shiftItem",{categories:this.categories})},reset:function(){confirm("本当にクリアしますか？ ブラウザ（LocalStorage）に保存されているデータを消去します。")&&(localStorage.removeItem("revueLabel"),this.$router.go({path:this.$router.currentRoute.path,force:!0}))},addCategory:function(e){""!=e.target.value&&(this.$store.dispatch("label/addCategory",e.target.value),e.target.value="")},addItem:function(e,t){""!=e.target.value&&(this.$store.dispatch("label/addItem",{text:e.target.value,category_id:t}),e.target.value="")},deleteCategory:function(e){confirm("本当にこのカテゴリーを削除しますか？")&&this.$store.dispatch("label/deleteCategory",{category_id:e})},deleteItem:function(e,t){confirm("本当にこのアイテムを削除しますか？")&&this.$store.dispatch("label/deleteItem",{category_id:e,item_id:t})}}},c=(r(673),r(92)),f=r(131),h=r.n(f),v=r(235),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"labels"}},[r("h1",{staticClass:"page-title mt-2"},[e._v("Labels")]),e._v(" "),r("div",{staticClass:"text-center"},[r("input",{staticClass:"input-category pa-2 ma-3",attrs:{placeholder:"Enterキーでカテゴリー追加"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addCategory.apply(null,arguments)}}}),e._v(" "),r("v-btn",{staticClass:"ma-3",attrs:{outlined:"",color:"red"},on:{click:e.reset}},[e._v("\n      保存データクリア\n    ")])],1),e._v(" "),r("draggable",{staticClass:"d-flex",model:{value:e.categories,callback:function(t){e.categories=t},expression:"categories"}},e._l(e.categories,(function(t,o){return r("category",{key:o,attrs:{title:t.title,categoryIndex:o,items:t.items},on:{change:e.shiftItem}})})),1)],1)}),[],!1,null,"7a37faaa",null);t.default=component.exports;h()(component,{VBtn:v.a})}}]);