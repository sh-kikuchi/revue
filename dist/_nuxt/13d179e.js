(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{488:function(e,t,o){var content=o(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("880ed8ea",content,!0,{sourceMap:!1})},549:function(e,t,o){"use strict";o(488)},550:function(e,t,o){var r=o(17)(!1);r.push([e.i,"@media screen and (min-width:767px){.content-md[data-v-1bb976e2]{width:350px;height:350px}}.content-box[data-v-1bb976e2]{height:100%;align-items:center;margin-bottom:50px}.content-name[data-v-1bb976e2]{margin-top:10px;text-align:center}.circle[data-v-1bb976e2],.content-form[data-v-1bb976e2]{width:200px}.circle[data-v-1bb976e2]{height:200px;border-radius:50%}.circle[data-v-1bb976e2],.triangle[data-v-1bb976e2]{margin:70px auto 50px}.triangle[data-v-1bb976e2]{width:0;border:3px solid #fff;vertical-align:middle}.position-parent[data-v-1bb976e2]{position:relative;width:200px;height:200px;background-color:#00bfff;margin:70px auto 50px}.position-child[data-v-1bb976e2]{position:absolute;width:50px;height:50px;background-color:#789}.flex-parent[data-v-1bb976e2]{width:200px;height:200px;background:#fff;border:1px solid #000}.flex-child[data-v-1bb976e2]{width:50px;height:50px;background-color:#000;border:1px solid #000}.flex-child[data-v-1bb976e2]:nth-child(odd){background-color:grey;border:1px solid grey}.border-line[data-v-1bb976e2]{border:5px;width:200px;height:200px;color:#000}.outer-border[data-v-1bb976e2]{height:100%;display:flex;justify-content:center;align-items:center}#border-bottom[data-v-1bb976e2],#border-left[data-v-1bb976e2],#border-right[data-v-1bb976e2],#border-top[data-v-1bb976e2]{border-bottom-style:dotted;margin-bottom:2px}",""]),e.exports=r},611:function(e,t,o){"use strict";o.r(t);o(29);var r={data:function(){return{red:0,blue:0,green:0,opacity:1,top:0,left:0,width:0,height:0,border1:100,border2:100,border3:150,rotate:0,display:"block",flex:"center",borderTop:"solid",borderRight:"solid",borderBottom:"solid",borderLeft:"solid"}},computed:{bindStyle:function(){return"background-color: rgba(".concat(this.red,",").concat(this.green,",").concat(this.blue,",").concat(this.opacity,")")},bindPosition:function(){return"top: ".concat(this.top,"px;left: ").concat(this.left,"px;")},bindBorder:function(){return"  border-left: ".concat(this.border1,"px solid transparent;\n                border-right: ").concat(this.border2,"px solid transparent;\n                border-bottom: ").concat(this.border3,"px solid tomato;\n                transform: rotate(").concat(this.rotate,"deg);")},bindDisplay:function(){return" display: ".concat(this.display,";\n               justify-content: ").concat(this.flex,";")},borderStyle:function(){return" border-style: ".concat(this.borderTop," ").concat(this.borderRight," ").concat(this.borderBottom," ").concat(this.borderLeft,";")}}},n=(o(549),o(90)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"color"}},[o("h1",{staticClass:"page-title mt-4"},[e._v("Designs")]),e._v(" "),o("section",[o("h3",{staticClass:"content-name text-center blue-grey"},[e._v("Colors")]),e._v(" "),o("div",{staticClass:"d-sm-flex justify-space-around pt-3"},[o("div",{staticClass:"content-md"},[o("div",{staticClass:"circle",style:e.bindStyle})]),e._v(" "),o("div",{staticClass:"content-md order-0"},[o("div",{staticClass:"content-box mx-auto d-flex align-center"},[o("div",{staticClass:"content-form mx-auto"},[o("div",[o("span",[e._v("赤:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.red,expression:"red"}],attrs:{type:"range",max:"255",min:"0"},domProps:{value:e.red},on:{__r:function(t){e.red=t.target.value}}})]),e._v(" "),o("div",[o("span",[e._v("緑:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.green,expression:"green"}],attrs:{type:"range",max:"255",min:"0"},domProps:{value:e.green},on:{__r:function(t){e.green=t.target.value}}})]),e._v(" "),o("div",[o("span",[e._v("青:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.blue,expression:"blue"}],attrs:{type:"range",max:"255",min:"0"},domProps:{value:e.blue},on:{__r:function(t){e.blue=t.target.value}}})]),e._v(" "),o("div",[o("span",[e._v("透:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.opacity,expression:"opacity"}],attrs:{type:"range",max:"1",min:"0",step:"0.1"},domProps:{value:e.opacity},on:{__r:function(t){e.opacity=t.target.value}}})]),e._v(" "),o("div",[e._v("\n              color: rgba("+e._s(e.red)+","+e._s(e.green)+","+e._s(e.blue)+","+e._s(e.opacity)+")"),o("br"),e._v("\n              background-color: rgba("+e._s(e.red)+","+e._s(e.green)+","+e._s(e.blue)+","+e._s(e.opacity)+")\n            ")])])])])])]),e._v(" "),o("section",[o("h3",{staticClass:"content-name text-center blue-grey"},[e._v("Triangle")]),e._v(" "),o("div",{staticClass:"d-sm-flex justify-space-around"},[o("div",{staticClass:"content-md order-1"},[o("div",{staticClass:"triangle",style:e.bindBorder})]),e._v(" "),o("div",{staticClass:"content-md order-0"},[o("div",{staticClass:"content-box mx-auto d-flex align-center"},[o("div",{staticClass:"content-form mx-auto"},[o("div",[o("span",[e._v("左:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.border1,expression:"border1"}],attrs:{type:"range",max:"100",min:"0"},domProps:{value:e.border1},on:{__r:function(t){e.border1=t.target.value}}})]),e._v(" "),o("div",[o("span",[e._v("右:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.border2,expression:"border2"}],attrs:{type:"range",max:"100",min:"0"},domProps:{value:e.border2},on:{__r:function(t){e.border2=t.target.value}}})]),e._v(" "),o("div",[o("span",[e._v("底:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.border3,expression:"border3"}],attrs:{type:"range",max:"100",min:"0"},domProps:{value:e.border3},on:{__r:function(t){e.border3=t.target.value}}})]),e._v(" "),o("div",[o("span",[e._v("転:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.rotate,expression:"rotate"}],attrs:{type:"range",max:"180",min:"-180"},domProps:{value:e.rotate},on:{__r:function(t){e.rotate=t.target.value}}})]),e._v(" "),o("div",{staticStyle:{"font-size":"12px"}},[e._v("\n              width: 0px; "),o("br"),e._v("\n              border: 3px solid #fff; "),o("br"),e._v("\n              border-left :"+e._s(e.border1)+"px solid transparent;"),o("br"),e._v("\n              border-right : "+e._s(e.border2)+"px solid transparent;"),o("br"),e._v("\n              border-bottom: "+e._s(e.border3)+"px solid tomato;"),o("br"),e._v("\n              transform: rotate("+e._s(e.rotate)+"deg);\n            ")])])])])])]),e._v(" "),o("section",[o("h3",{staticClass:"content-name blue-grey"},[e._v("Position")]),e._v(" "),o("div",{staticClass:"d-sm-flex justify-space-around pt-3"},[o("div",{staticClass:"content-md"},[o("div",{staticClass:"position-parent"},[o("div",{staticClass:"position-child",style:e.bindPosition})])]),e._v(" "),o("div",{staticClass:"content-md"},[o("div",{staticClass:"content-box mx-auto d-flex align-center"},[o("div",{staticClass:"content-form mx-auto"},[o("div",[o("span",[e._v("上:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.top,expression:"top"}],attrs:{type:"range",max:"150",min:"0"},domProps:{value:e.top},on:{__r:function(t){e.top=t.target.value}}})]),e._v(" "),o("div",[o("span",[e._v("左:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.left,expression:"left"}],attrs:{type:"range",max:"150",min:"0"},domProps:{value:e.left},on:{__r:function(t){e.left=t.target.value}}})]),e._v("\n            ▼ 大きい正方形のCSS position: relative;"),o("br"),e._v("\n            ▼ 小さい正方形のCSS position:absolute;"),o("br"),e._v("\n            Top : "+e._s(e.top)+" px"),o("br"),e._v("\n            Left: "+e._s(e.left)+"px "),o("br")])])])])]),e._v(" "),o("section",[o("h3",{staticClass:"content-name blue-grey"},[e._v("Flex")]),e._v(" "),o("div",{staticClass:"d-sm-flex justify-space-around pt-3"},[o("div",{staticClass:"content-md order-1"},[o("div",{staticClass:"content-box mx-auto d-flex align-center"},[o("div",{staticClass:"flex-parent mx-auto",style:e.bindDisplay},[o("div",{staticClass:"flex-child"}),e._v(" "),o("div",{staticClass:"flex-child"}),e._v(" "),o("div",{staticClass:"flex-child"})])])]),e._v(" "),o("div",{staticClass:"content-md order-0"},[o("div",{staticClass:"content-box mx-auto d-flex align-center"},[o("div",{staticClass:"content-form mx-auto"},[o("form",{attrs:{id:"display-flex"}},[o("div",[e._v("display:")]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.display,expression:"display"}],attrs:{type:"radio",value:"block",name:"display"},domProps:{checked:e._q(e.display,"block")},on:{change:function(t){e.display="block"}}}),e._v(" "),o("label",{attrs:{for:"display"}},[e._v("block")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.display,expression:"display"}],attrs:{type:"radio",value:"flex",name:"display"},domProps:{checked:e._q(e.display,"flex")},on:{change:function(t){e.display="flex"}}}),e._v(" "),o("label",{attrs:{for:"display"}},[e._v("flex")])])]),e._v(" "),o("hr"),e._v(" "),o("form",[o("div",[e._v("justify-content:")]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.flex,expression:"flex"}],attrs:{type:"radio",value:"center",name:"flex"},domProps:{checked:e._q(e.flex,"center")},on:{change:function(t){e.flex="center"}}}),e._v(" "),o("label",{attrs:{for:"flex"}},[e._v("center")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.flex,expression:"flex"}],attrs:{type:"radio",value:"space-between",name:"flex"},domProps:{checked:e._q(e.flex,"space-between")},on:{change:function(t){e.flex="space-between"}}}),e._v(" "),o("label",{attrs:{for:"flex"}},[e._v("space-between")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.flex,expression:"flex"}],attrs:{type:"radio",value:"space-around",name:"flex"},domProps:{checked:e._q(e.flex,"space-around")},on:{change:function(t){e.flex="space-around"}}}),e._v(" "),o("label",{attrs:{for:"flex"}},[e._v("space-around")])])])])])])])]),e._v(" "),o("section",[o("h3",{staticClass:"content-name blue-grey"},[e._v("Border-Style")]),e._v(" "),o("div",{staticClass:"d-sm-flex justify-space-around pt-3"},[o("div",{staticClass:"content-md order-0"},[o("div",{staticClass:"outer-border"},[o("div",{staticClass:"border-line",style:e.borderStyle})])]),e._v(" "),o("div",{staticClass:"content-md order-1"},[o("div",{staticClass:"content-box mx-auto d-flex align-center"},[o("div",{staticClass:"content-form mx-auto"},[o("form",{attrs:{id:"display-flex"}},[o("div",[o("select",{directives:[{name:"model",rawName:"v-model",value:e.borderTop,expression:"borderTop"}],attrs:{id:"border-top"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.borderTop=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:""}},[e._v("--Please choose --")]),e._v(" "),o("option",{attrs:{value:"none"}},[e._v("none")]),e._v(" "),o("option",{attrs:{value:"hidden"}},[e._v("hidden")]),e._v(" "),o("option",{attrs:{value:"solid"}},[e._v("solid")]),e._v(" "),o("option",{attrs:{value:"dotted"}},[e._v("dotted")]),e._v(" "),o("option",{attrs:{value:"dashed"}},[e._v("dashed")]),e._v(" "),o("option",{attrs:{value:"double"}},[e._v("double")]),e._v(" "),o("option",{attrs:{value:"groove"}},[e._v("groove")]),e._v(" "),o("option",{attrs:{value:"ridge"}},[e._v("ridge")]),e._v(" "),o("option",{attrs:{value:"inset"}},[e._v("inset")]),e._v(" "),o("option",{attrs:{value:"outset"}},[e._v("outset")])]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.borderRight,expression:"borderRight"}],attrs:{id:"border-right"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.borderRight=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:""}},[e._v("--Please choose --")]),e._v(" "),o("option",{attrs:{value:"none"}},[e._v("none")]),e._v(" "),o("option",{attrs:{value:"hidden"}},[e._v("hidden")]),e._v(" "),o("option",{attrs:{value:"solid"}},[e._v("solid")]),e._v(" "),o("option",{attrs:{value:"dotted"}},[e._v("dotted")]),e._v(" "),o("option",{attrs:{value:"dashed"}},[e._v("dashed")]),e._v(" "),o("option",{attrs:{value:"double"}},[e._v("double")]),e._v(" "),o("option",{attrs:{value:"groove"}},[e._v("groove")]),e._v(" "),o("option",{attrs:{value:"ridge"}},[e._v("ridge")]),e._v(" "),o("option",{attrs:{value:"inset"}},[e._v("inset")]),e._v(" "),o("option",{attrs:{value:"outset"}},[e._v("outset")])]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.borderBottom,expression:"borderBottom"}],attrs:{id:"border-bottom"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.borderBottom=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:""}},[e._v("--Please choose --")]),e._v(" "),o("option",{attrs:{value:"none"}},[e._v("none")]),e._v(" "),o("option",{attrs:{value:"hidden"}},[e._v("hidden")]),e._v(" "),o("option",{attrs:{value:"solid"}},[e._v("solid")]),e._v(" "),o("option",{attrs:{value:"dotted"}},[e._v("dotted")]),e._v(" "),o("option",{attrs:{value:"dashed"}},[e._v("dashed")]),e._v(" "),o("option",{attrs:{value:"double"}},[e._v("double")]),e._v(" "),o("option",{attrs:{value:"groove"}},[e._v("groove")]),e._v(" "),o("option",{attrs:{value:"ridge"}},[e._v("ridge")]),e._v(" "),o("option",{attrs:{value:"inset"}},[e._v("inset")]),e._v(" "),o("option",{attrs:{value:"outset"}},[e._v("outset")])]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.borderLeft,expression:"borderLeft"}],attrs:{id:"border-left"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.borderLeft=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:""}},[e._v("--Please choose --")]),e._v(" "),o("option",{attrs:{value:"none"}},[e._v("none")]),e._v(" "),o("option",{attrs:{value:"hidden"}},[e._v("hidden")]),e._v(" "),o("option",{attrs:{value:"solid"}},[e._v("solid")]),e._v(" "),o("option",{attrs:{value:"dotted"}},[e._v("dotted")]),e._v(" "),o("option",{attrs:{value:"dashed"}},[e._v("dashed")]),e._v(" "),o("option",{attrs:{value:"double"}},[e._v("double")]),e._v(" "),o("option",{attrs:{value:"groove"}},[e._v("groove")]),e._v(" "),o("option",{attrs:{value:"ridge"}},[e._v("ridge")]),e._v(" "),o("option",{attrs:{value:"inset"}},[e._v("inset")]),e._v(" "),o("option",{attrs:{value:"outset"}},[e._v("outset")])])])])])])])])])])}),[],!1,null,"1bb976e2",null);t.default=component.exports}}]);