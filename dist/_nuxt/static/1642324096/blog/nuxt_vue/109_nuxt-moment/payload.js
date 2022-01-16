__NUXT_JSONP__("/blog/nuxt_vue/109_nuxt-moment", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return {data:[{content:{slug:"109_nuxt-moment",description:"Nuxt.js × moment.js",title:"【解体新書】日付のフォーマットを変更する",category:"Nuxt.js",createdAt:D,updatedAt:D,sortNumber:109,toc:[],body:{type:"root",children:[{type:b,tag:l,props:{id:"1はじめに"},children:[{type:b,tag:i,props:{href:"#1%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:"1.はじめに"}]},{type:a,value:c},{type:b,tag:E,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Node.js：v14.17.5"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"npm：6.14.14"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Nuxt.js：2.15.7"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Nuxt Content：1.14.0"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"nuxtjs\u002Fmoment: 1.6.1"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"ブログ記事を読み込むとき、Yaml形式のメタ情報(本サイトでは言語ごとの記事一覧で更新日―\n"},{type:b,tag:g,props:{},children:[{type:a,value:F}]},{type:a,value:"を表示)から日付を引っ張ろうとしました。そうしたら下記のような表記でした。"}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,G]},children:[{type:b,tag:g,props:{},children:[{type:a,value:" 2021-12-28-T00:00:00.000Z\n"}]}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"T00:00:00.000Z"}]},{type:a,value:"は「ISO-8601 日付表現の一部」ということであるが、とにかく要らないのでフォーマットを変えてみましょう。ここで扱うJavaScriptのライブラリはmoment.jsといいます。公式サイトは下記のものになります。"}]},{type:a,value:c},{type:b,tag:H,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:i,props:{href:I,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:I}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[]},{type:a,value:c},{type:b,tag:l,props:{id:"2パッケージをインストール"},children:[{type:b,tag:i,props:{href:"#2%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:"2.パッケージをインストール"}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,G]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"npm install --save-dev @nuxtjs\u002Fmomen\n"}]}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[]},{type:a,value:c},{type:b,tag:l,props:{id:"3-nuxtconfigjsを編集"},children:[{type:b,tag:i,props:{href:"#3-nuxtconfigjs%E3%82%92%E7%B7%A8%E9%9B%86",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:"3. nuxt.config.jsを編集"}]},{type:a,value:c},{type:b,tag:E,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"まずは"},{type:b,tag:g,props:{},children:[{type:a,value:J}]},{type:a,value:"の中にパッケージ追加\n"},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,v]},children:[{type:b,tag:g,props:{},children:[{type:a,value:J},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:x}]},{type:a,value:u},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:y}]},{type:a,value:"\n  "},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:y}]},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"'@nuxtjs\u002Fmoment'"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:A}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:","}]},{type:a,value:c}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:K}]},{type:a,value:"を追加し、ロケールを日本時間に設定する。\n"},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,v]},children:[{type:b,tag:g,props:{},children:[{type:a,value:K},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:x}]},{type:a,value:u},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:B}]},{type:a,value:"\n  locales"},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:x}]},{type:a,value:u},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:y}]},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"'ja'"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:C}]},{type:a,value:c}]}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[]},{type:a,value:c},{type:b,tag:l,props:{id:"4-templateタグの中で読み込む"},children:[{type:b,tag:i,props:{href:"#4-template%E3%82%BF%E3%82%B0%E3%81%AE%E4%B8%AD%E3%81%A7%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%82%80",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:"4. "},{type:b,tag:g,props:{},children:[{type:a,value:"\u003Ctemplate\u003E"}]},{type:a,value:"タグの中で読み込む"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"下記のようなコードを埋め込む。"}]},{type:a,value:c},{type:b,tag:H,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"$momentの括弧中にフォーマットを変更したいものを埋め込む。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,v]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:B}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:B}]},{type:a,value:u},{type:b,tag:d,props:{className:[e,L]},children:[{type:a,value:"$moment"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:M}]},{type:a,value:"c"},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:N}]},{type:b,tag:d,props:{className:[e,O]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:P}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:N}]},{type:b,tag:d,props:{className:[e,"method",L,O]},children:[{type:a,value:"format"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:M}]},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"\"YYYY-MM-DD\""}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:P}]},{type:a,value:u},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:C}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:C}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[]},{type:a,value:c},{type:b,tag:l,props:{id:"5-おわりに"},children:[{type:b,tag:i,props:{href:"#5-%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:"5. おわりに"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"ネイティブなJavaScriptでさえ、日付変換は面倒なもの。そこでお役立ちのライブラリが"},{type:b,tag:g,props:{},children:[{type:a,value:"moment.js"}]},{type:a,value:"だとのこと。なんと、Nuxt.jsでも使えるということで今回使ってみました。自由自在に形式を変えられそうです。"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[]}]},dir:"\u002Fblog\u002Fnuxt_vue",path:"\u002Fblog\u002Fnuxt_vue\u002F109_nuxt-moment",extension:".md"},navigation:"blog\u002Fnuxt_vue",dirParam:"nuxt_vue"}],fetch:{},mutations:[]}}("text","element","\n","span","token","punctuation","code","li","a","br","p","h1","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers"," ","language-js","operator",":","[","string","]","{","}","2022-01-13T00:00:00.000Z","ul","updatedAt","language-text","blockquote","https:\u002F\u002Fmomentjs.com\u002F","modules","moment","function","(",".","property-access",")")));