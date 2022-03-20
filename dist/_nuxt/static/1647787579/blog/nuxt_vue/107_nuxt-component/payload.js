__NUXT_JSONP__("/blog/nuxt_vue/107_nuxt-component", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao){return {data:[{content:{slug:"107_nuxt-component",description:"コンポーネントの概念に触れる。",title:"【解体新書】インスタ風ギャラリーをつくる",category:"Nuxt.js",createdAt:"2021-11-25T00:00:00.000Z",updatedAt:"2022-01-08T00:00:00.000Z",sortNumber:107,toc:[],body:{type:"root",children:[{type:b,tag:I,props:{id:"1はじめに"},children:[{type:b,tag:G,props:{href:"#1%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",ariaHidden:J,tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:"1.はじめに"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"Vue.jsを学ぶうえで肝になりそうな親子コンポーネントを利用して画像を表示させてみましょう。\nここではコンポーネントの概念を利用しながら、写真を表示させてみたいと思います。なお、Nuxt.jsで開発しておりますので、画像パスの指定方法がVueCLIとは書き方が異なる場合がありますが、大枠は共通です。というのもVue.jsの本を参考にしておりますのでね。。環境は下記の通りです。"}]},{type:a,value:g},{type:b,tag:X,props:{},children:[{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"Node.js：v14.17.5"}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"npm：6.14.14"}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"Nuxt.js：2.15.7"}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"Nuxt Content：1.14.0"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:y,props:{},children:[]},{type:a,value:g},{type:b,tag:I,props:{id:"2コンポーネントとは"},children:[{type:b,tag:G,props:{href:"#2%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%A8%E3%81%AF",ariaHidden:J,tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:"2.コンポーネントとは？"}]},{type:a,value:g},{type:b,tag:X,props:{},children:[{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"ある機能を有した再利用可能な部品のこと。"}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"コンポーネントを組み合わせて作るWebAppはコンポーネント指向開発という。"}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"親子関係\n"},{type:b,tag:X,props:{},children:[{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"親コンポーネント：取り込む側"}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"子コンポーネント：取り込まれる側"}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"親から子へイベント伝達、データの受け渡し⇒"},{type:b,tag:k,props:{},children:[{type:a,value:ad}]}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"子から親へイベント伝達、データの受け渡し⇒"},{type:b,tag:k,props:{},children:[{type:a,value:"emit"}]}]},{type:a,value:g}]},{type:a,value:g}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:y,props:{},children:[]},{type:a,value:g},{type:b,tag:I,props:{id:"3-画像を表示させてみよう"},children:[{type:b,tag:G,props:{href:"#3-%E7%94%BB%E5%83%8F%E3%82%92%E8%A1%A8%E7%A4%BA%E3%81%95%E3%81%9B%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86",ariaHidden:J,tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:"3. 画像を表示させてみよう。"}]},{type:a,value:g},{type:b,tag:ae,props:{},children:[{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"まずは親コンポーネント、要するにメインとなるビューページを実装していきます。ビュー部分は"},{type:b,tag:k,props:{},children:[{type:a,value:"Picture.vue"}]},{type:a,value:"を編集します。"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"↓ コードはこちら"},{type:b,tag:y,props:{},children:[]},{type:a,value:"\n■ 親側のコンポーネント(pages\u002FPicture.vue)"}]},{type:a,value:g},{type:b,tag:C,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,af]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"div id"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"picture\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"div "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"picture-wrap\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:"gallery\n        v"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,r,ai]},children:[{type:a,value:"for"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"(pic, i) in pictures\""}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"key"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"i\""}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"pic.path\""}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:"gallery"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r,B]},children:[{type:a,value:"import"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:Y}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r,B]},children:[{type:a,value:"from"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"..\u002Fcomponents\u002Fpicture\u002FPictureGallery\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,r,B]},children:[{type:a,value:ak}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r,B]},children:[{type:a,value:Z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:"name"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"Picture\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:"components"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:"data"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,r,ai]},children:[{type:a,value:"return"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:"pictures"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"["}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"@\u002Fassets\u002Fimage\u002Fpanda.jpg\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"@\u002Fassets\u002Fimage\u002Ffukui.png\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"@\u002Fassets\u002Fimage\u002Fosaka.jpg\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"※今回はNuxt.jsで開発しているため、画像パスの指定方法が特殊です\n。"},{type:b,tag:y,props:{},children:[]},{type:b,tag:G,props:{href:"https:\u002F\u002Fqiita.com\u002Fhiroyukiwk\u002Fitems\u002Fa26e767d193ef8d9155b",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"【Nuxt.js】imgファイルの指定方法について"}]}]},{type:a,value:g},{type:b,tag:y,props:{},children:[]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"【説明】"},{type:b,tag:y,props:{},children:[]},{type:a,value:"\nScriptタグに下記のコードがインポートされているように、ここでは"},{type:b,tag:k,props:{},children:[{type:a,value:Y}]},{type:a,value:"というコンポーネントを利用しています。写真の並べ方を部品として持っています。"}]},{type:a,value:g},{type:b,tag:C,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,"language-text"]},children:[{type:b,tag:k,props:{},children:[{type:a,value:"import PictureGallery from \"..\u002Fcomponents\u002Fpicture\u002FPictureGallery\";\n"}]}]}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"それから"},{type:b,tag:k,props:{},children:[{type:a,value:"data()"}]},{type:a,value:"の部分で画像をセットしておいて、"},{type:b,tag:k,props:{},children:[{type:a,value:"\u003Ctemplate\u003E"}]},{type:a,value:"タグ中の下記のコードのように"},{type:b,tag:k,props:{},children:[{type:a,value:al}]},{type:a,value:"というループ処理を書いて、表示させています。"}]},{type:a,value:g},{type:b,tag:C,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,"language-html"]},children:[{type:b,tag:k,props:{},children:[{type:a,value:"  "},{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:am}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,ab]},children:[{type:b,tag:c,props:{className:[d,f,ac]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:"(pic, i) in pictures"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:":key"}]},{type:b,tag:c,props:{className:[d,ab]},children:[{type:b,tag:c,props:{className:[d,f,ac]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:"i"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,ab]},children:[{type:b,tag:c,props:{className:[d,f,ac]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:"pic.path"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u003C\u002F"}]},{type:a,value:am}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"★ 親コンポーネントに画像を置いて、表示させるだけの処理しか書いていません。子コンポーネントである"},{type:b,tag:k,props:{},children:[{type:a,value:"PictureGalley"}]},{type:a,value:"では【画像のスタイルの部分\n】を書いておきました（画像の大きさをどうするか？）"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"■ 子コンポーネント(components\u002FPictureGalley.vue)"}]},{type:a,value:g},{type:b,tag:ae,props:{},children:[{type:a,value:g},{type:b,tag:p,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:"Props"}]},{type:a,value:"でpathのデータを受け取って"},{type:b,tag:k,props:{},children:[{type:a,value:"\u003Cimg\u003E"}]},{type:a,value:"タグのsrcプロパティにバインディングしている。つまり、親コンポーネントで埋め込んでいる"},{type:b,tag:k,props:{},children:[{type:a,value:"\u003Cpicture-gallery\u003E"}]},{type:a,value:"タグ中の"},{type:b,tag:k,props:{},children:[{type:a,value:an}]},{type:a,value:"と下記の"},{type:b,tag:k,props:{},children:[{type:a,value:":src"}]},{type:a,value:"は紐づいていることになります。"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:C,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,af]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"img "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"pic-box\""}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"src"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"path\""}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r,B]},children:[{type:a,value:ak}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r,B]},children:[{type:a,value:Z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:"type"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"known-class-name","class-name"]},children:[{type:a,value:"String"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,r,B]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"style scoped"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"."}]},{type:b,tag:c,props:{className:[d,"property-access"]},children:[{type:a,value:"pic"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:"box "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:"width"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:"height"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:"style"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:y,props:{},children:[]},{type:a,value:g},{type:b,tag:I,props:{id:"4-おわりに"},children:[{type:b,tag:G,props:{href:"#4-%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",ariaHidden:J,tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:"4. おわりに"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"★ 以上の実装で親子間のコンポーネント概念を利用した画像表示を実装してみました。コンポーネントの概念を使えば、部品の再利用が出来るので、コーディングもスッキリするやもしれないです～。"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"★ 次は表示させた画像をクリックした時にモーダル画面を出してみましょう。"}]},{type:a,value:g},{type:b,tag:y,props:{},children:[]}]},dir:"\u002Fblog\u002Fnuxt_vue",path:"\u002Fblog\u002Fnuxt_vue\u002F107_nuxt-component",extension:".md"},navigation:"blog\u002Fnuxt_vue",dirParam:"nuxt_vue"}],fetch:{},mutations:[]}}("text","element","span","token","operator","punctuation","\n"," ","\u003E","\u003C","code",":",",","\n  ","string","p","li","keyword","{","literal-property","property","}","=","\n    ","br","\n        ","\u002F","module","div","\n      ",";","\"","a","path","h1","true",-1,"icon","icon-link","nuxt-content-highlight","pre","line-numbers","template","-","script","function","(",")","tag","ul","PictureGallery","default","\n          ","require","attr-name","attr-value","attr-equals","props","blockquote","language-js","class","picture","control-flow","maybe-class-name","export","v-for","picture-gallery",":path"," 300px")));