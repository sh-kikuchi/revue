(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{452:function(e,t,d){var content=d(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,d(16).default)("e8c38bbe",content,!0,{sourceMap:!1})},464:function(e,t,d){"use strict";d(452)},465:function(e,t,d){var o=d(15)(!1);o.push([e.i,"#labels[data-v-d2eaf0ee]{background-color:#b7ccdb;height:100%;overflow-x:auto}.input-category[data-v-d2eaf0ee]{background-color:#f1f1f3}.label-content[data-v-d2eaf0ee]{display:flex}.label-list[data-v-d2eaf0ee]{height:100%}.category-title[data-v-d2eaf0ee]{font-size:20px}.input-item[data-v-d2eaf0ee]{display:block;width:100%;height:50px;text-align:center}.item-border[data-v-d2eaf0ee]{width:100%;display:flex;border-bottom:1px dotted #000;word-break:break-all}",""]),e.exports=o},476:function(e,t,d){"use strict";d.r(t);d(21);var o={props:{text:{type:String,required:!0},categoryIndex:{type:Number,required:!0},itemIndex:{type:Number,required:!0}},methods:{deleteItem:function(){confirm("本当にこのアイテムを削除しますか？")&&this.$store.dispatch("label/deleteItem",{categoryIndex:this.categoryIndex,itemIndex:this.itemIndex})}}},r=(d(464),d(92)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",{attrs:{id:"item"}},[d("div",[e._v(e._s(e.text))]),e._v(" "),d("div",[d("button",{staticClass:"btn btn-danger",on:{click:e.deleteItem}},[e._v("✖")])])])}),[],!1,null,"d2eaf0ee",null);t.default=component.exports}}]);