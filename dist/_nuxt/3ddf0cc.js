(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{610:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{mg:0,gram:0,kg:0,ton:0}},watch:{mg:function(t){this.mg=t,this.gram=t/1e3,this.kg=t/1e3/1e3,this.ton=t/1e3/1e3/1e3},gram:function(t){this.mg=1e3*t,this.gram=t,this.kg=t/1e3,this.ton=t/1e3/1e3},kg:function(t){this.mg=1e3*t*1e3,this.gram=1e3*t,this.kg=t,this.ton=t/1e3},ton:function(t){this.mg=1e3*t*1e3*1e3,this.gram=1e3*t*1e3,this.kg=1e3*t,this.ton=t}}},r=n(96),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-auto mt-4"},[e("div",{staticClass:"text-center"},[e("div",{staticClass:"convert-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mg,expression:"mg"}],attrs:{type:"number"},domProps:{value:t.mg},on:{input:function(e){e.target.composing||(t.mg=e.target.value)}}}),t._v(" "),e("label",[t._v("mg")])]),t._v(" "),e("div",{staticClass:"convert-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.gram,expression:"gram"}],attrs:{type:"number"},domProps:{value:t.gram},on:{input:function(e){e.target.composing||(t.gram=e.target.value)}}}),t._v(" "),e("label",[t._v("g")])]),t._v(" "),e("div",{staticClass:"convert-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.kg,expression:"kg"}],attrs:{type:"number"},domProps:{value:t.kg},on:{input:function(e){e.target.composing||(t.kg=e.target.value)}}}),t._v(" "),e("label",[t._v("kg")])]),t._v(" "),e("div",{staticClass:"convert-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.ton,expression:"ton"}],attrs:{type:"number"},domProps:{value:t.ton},on:{input:function(e){e.target.composing||(t.ton=e.target.value)}}}),t._v(" "),e("label",[t._v("t")])])])])}),[],!1,null,"97253494",null);e.default=component.exports}}]);