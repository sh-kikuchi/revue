__NUXT_JSONP__("/blog/JavaScript/001_introduction", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){return {data:[{content:{slug:"001_introduction",description:"console.log、let、const",title:"変数と定数",category:U,createdAt:"2021-11-06T00:00:00.000Z",updatedAt:"2021-12-04T00:00:00.000Z",sortNumber:1,toc:[],body:{type:"root",children:[{type:b,tag:B,props:{id:"1-はじめに"},children:[{type:b,tag:z,props:{href:"#1-%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",ariaHidden:C,tabIndex:D},children:[{type:b,tag:c,props:{className:[E,F]},children:[]}]},{type:a,value:"1. はじめに"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"JavaScriptは動的にコンテンツを更新したり、マルチメディアを管理したりなどが出来るスクリプト言語です。（"},{type:b,tag:z,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fja\u002Fdocs\u002FWeb\u002FJavaScript",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"JavaScript - MDN Web Docs"}]},{type:a,value:"）もっとザックリ言うならば。Webページに様々な動きを加えることが出来るものです。これから様々な学びを通して、JavaScriptの可能性を広げてみたいです。"}]},{type:a,value:e},{type:b,tag:v,props:{},children:[]},{type:a,value:e},{type:b,tag:B,props:{id:"2-まずはコンソールを出してみよう"},children:[{type:b,tag:z,props:{href:"#2-%E3%81%BE%E3%81%9A%E3%81%AF%E3%82%B3%E3%83%B3%E3%82%BD%E3%83%BC%E3%83%AB%E3%82%92%E5%87%BA%E3%81%97%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86",ariaHidden:C,tabIndex:D},children:[{type:b,tag:c,props:{className:[E,F]},children:[]}]},{type:a,value:"2. まずはコンソールを出してみよう"}]},{type:a,value:e},{type:b,tag:w,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"windows：「Google Chromeの設定」-\u003E「その他のツール」-\u003E「デベロッパーツール」\n"},{type:b,tag:v,props:{},children:[]},{type:a,value:" ⇒実は「F12」を押せば一発。"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"「デベロッパーツール」内にあるconsoleをクリックすれば、プログラムが書けるスペースが出現。"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"試しに書いてみよう。"}]},{type:a,value:e},{type:b,tag:G,props:{className:[H]},children:[{type:b,tag:I,props:{className:[J,K]},children:[{type:b,tag:x,props:{},children:[{type:a,value:u},{type:b,tag:c,props:{className:[d,h,m]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,o,p,q]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"123"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,h,m]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,o,p,q]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"1"}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"2"}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"3"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,h,m]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,o,p,q]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"\"文字列\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,h,m]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,o,p,q]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"\"1\""}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"\"2\""}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"\"3\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e}]}]}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"★Point "},{type:b,tag:v,props:{},children:[]}]},{type:a,value:e},{type:b,tag:w,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"console.logでWebコンソール（Web開発に使用する開発ツール）に任意の値を出力することが出来る。"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"値は数値や文字列だけではなく、変数や計算式など、いろいろ。"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"文字列を出力する場合は\"\"（ダブルクォーテーション）を忘れずに。"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:v,props:{},children:[]},{type:a,value:" ⇒ 例として"},{type:b,tag:x,props:{},children:[{type:a,value:"console.log(1+2+3);"}]},{type:a,value:"と"},{type:b,tag:x,props:{},children:[{type:a,value:"console.log(\"1\"+\"2\"+\"3\");"}]},{type:a,value:"を比較すると、前者は値それぞれが数字なので足し算で「6」が結果として出力される。後者は値それぞれが文字なので、文字をくっつけているだけ。なので「123」が結果として出力される。"}]},{type:a,value:e},{type:b,tag:w,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"演算子には「+」の他に「-」（引き算）、「*」（掛け算）、「\u002F」(割り算)、「%」（剰余）がある。いろいろ計算してみよう。"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:v,props:{},children:[]},{type:a,value:e},{type:b,tag:B,props:{id:"3--変数と定数"},children:[{type:b,tag:z,props:{href:"#3--%E5%A4%89%E6%95%B0%E3%81%A8%E5%AE%9A%E6%95%B0",ariaHidden:C,tabIndex:D},children:[{type:b,tag:c,props:{className:[E,F]},children:[]}]},{type:a,value:"3.  変数と定数"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"■ 変数とは？"}]},{type:a,value:e},{type:b,tag:w,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"値や文字列を入れる箱のようなもの。"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"「let 変数名 = 値」（右辺の値を左辺の変数に入れるイメージ）"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"繰り返し値を使えるし、更新することが出来るのがメリット"}]},{type:a,value:e},{type:b,tag:G,props:{className:[H]},children:[{type:b,tag:I,props:{className:[J,K]},children:[{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:"\u002F\u002Fテスト結果を例に"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:O}]},{type:a,value:" japanese "},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"67"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:O}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:O}]},{type:a,value:" english "},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"72"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,h,m]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,o,p,q]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:"japanese"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h,m]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,o,p,q]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h,m]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,o,p,q]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:"english"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e}]}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"上記でテスト結果に不備があったとしましょう。数学（math）の点数が計算ミスで91点になりました。letで変数を設定した後に値を更新する時はletはいらない。"}]},{type:a,value:e},{type:b,tag:G,props:{className:[H]},children:[{type:b,tag:I,props:{className:[J,K]},children:[{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:O}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,h,m]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,o,p,q]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e}]}]}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"■ 定数とは？"}]},{type:a,value:e},{type:b,tag:w,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"値や文字列を入れる箱のようなもの。これは変数と同じ。"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"「const 変数名 = 値」"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"変数と違うところは値が更新されない。"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"どのような時に定数を使う？\n"},{type:b,tag:"blockquote",props:{},children:[{type:a,value:e},{type:b,tag:w,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"サイトURLや表示ミスが許されないテキスト情報を扱う場合"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"重要且つ不変な値（上書き防止）"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:v,props:{},children:[]},{type:a,value:e},{type:b,tag:w,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"下記はNGシーン♪（試しに）\n"},{type:b,tag:G,props:{className:[H]},children:[{type:b,tag:I,props:{className:[J,K]},children:[{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"const"}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:"\u002F\u002F定数を定義"}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:"       "},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:"\u002F\u002F更新できない！！"}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,h,m]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,o,p,q]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:"\u002F\u002Fエラー発生"}]},{type:a,value:e}]}]}]},{type:a,value:"\n⇒エラー："},{type:b,tag:x,props:{},children:[{type:a,value:"Uncaught SyntaxError: Identifier 'math' has already been declared"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:v,props:{},children:[]},{type:a,value:e},{type:b,tag:B,props:{id:"4-おわりに"},children:[{type:b,tag:z,props:{href:"#4-%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",ariaHidden:C,tabIndex:D},children:[{type:b,tag:c,props:{className:[E,F]},children:[]}]},{type:a,value:"4. おわりに"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"console.logはデバッグに使えるので実装する時に処理がどのようにされているかを確認するのに役立つかと思います。変数や定数も今後、死ぬほど使うので意味をここで把握して色々なコーディングを通じて、それぞれの役割を体験していきましょう（自分もね）。"}]}]},dir:"\u002Fblog\u002FJavaScript",path:"\u002Fblog\u002FJavaScript\u002F001_introduction",extension:".md"},navigation:"blog\u002FJavaScript",dirParam:U}],fetch:{},mutations:[]}}("text","element","span","token","\n","punctuation","li","console","p",";","number","operator","class-name",".","method","function","property-access","log","(",")"," ","br","ul","code","=","a","keyword","h1","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","language-js","line-numbers","+","string","comment","let","\n  "," math ","89","\n\n","math","JavaScript","\nmath ","91","　")));