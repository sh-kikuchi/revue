__NUXT_JSONP__("/blog/nuxt_vue/101_nuxt-content", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L){return {data:[{content:{slug:"101_nuxt-content",description:"ブログ記事を書こう",title:"【解体新書】Nuxt.jsでテックブログを作ろう1",category:"Nuxt.js",createdAt:"2021-11-25T00:00:00.000Z",updatedAt:"2022-01-08T00:00:00.000Z",sortNumber:101,toc:[{id:B,depth:2,text:C}],body:{type:"root",children:[{type:b,tag:w,props:{id:"1はじめに"},children:[{type:b,tag:j,props:{href:"#1%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"1.はじめに"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"今回からこのサイトのメインでもあるテックブログ記事のつくり方をまとめておきたいと思います。\n参考にしたサイトは下記のものです。"}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fwww.suzunatsu.com\u002Fpost\u002Fnuxtjs-nuxtcontent\u002F",rel:[D,E,F],target:G},children:[{type:a,value:"Suzunatsu web"}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fjun-app.com\u002Fseries\u002Fnuxt-content-blog\u002F1",rel:[D,E,F],target:G},children:[{type:a,value:"Jun's web app"}]},{type:a,value:H}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"上記の参考サイトをもとに言語ごとに記事をまとめたブログページを作ってみたいと思います。\n実装にあたっての環境ですが、開発開始時は下記のバージョンで取り組みました。"}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Node.js：v14.17.5"},{type:b,tag:h,props:{},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"npm：6.14.14"},{type:b,tag:h,props:{},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt.js：2.15.7"},{type:b,tag:h,props:{},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt Content：1.14.0"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[]},{type:a,value:c},{type:b,tag:w,props:{id:"2--インストール"},children:[{type:b,tag:j,props:{href:"#2--%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"2.  インストール"}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Nuxt.jsのプロジェクトを立ち上げるのじゃ。"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,x]},children:[{type:b,tag:v,props:{},children:[{type:a,value:"npx create-nuxt-app \u003Cプロジェクト名\u003E\n"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"nuxt\u002Fcontentというパッケージをインストール"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,x]},children:[{type:b,tag:v,props:{},children:[{type:a,value:"npm install @nuxt\u002Fcontent\n"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"nuxt.config.js"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,x]},children:[{type:b,tag:v,props:{},children:[{type:a,value:"  modules: [\n    '@nuxt\u002Fcontent',\n  ],\n"}]}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[]},{type:a,value:c},{type:b,tag:w,props:{id:"3-ブログ記事を書く"},children:[{type:b,tag:j,props:{href:"#3-%E3%83%96%E3%83%AD%E3%82%B0%E8%A8%98%E4%BA%8B%E3%82%92%E6%9B%B8%E3%81%8F",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"3. ブログ記事を書く"}]},{type:a,value:c},{type:b,tag:I,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"\u002Fcontent\u002Fblog\u002F{slug}というルーティングで下記のようなディレクトリに格納されているマークダウンを表示させたいと思います。{slug}にはマークダウンファイルの名前が入ります。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,x]},children:[{type:b,tag:v,props:{},children:[{type:a,value:"プロジェクトディレクトリ\n│\n│── content ←新規作成して下さい。\n│   │── blog\n│       │── html_css\n│       │     │── abc.md\n│       │     │── def.md\n│       │     │── ghi.md\n│       │\n│       │── JavaScript\n│       │── laravel\n│       │── nuxt_vue\n│       │── php\n│   \n│  \n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"※カテゴリー毎にフォルダを用意して、マークダウンファイルを管理したいと思って、上記のディレクトリにしました。"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[]},{type:a,value:c},{type:b,tag:"h2",props:{id:B},children:[{type:b,tag:j,props:{href:"#%E5%90%84%E3%83%9E%E3%83%BC%E3%82%AF%E3%83%80%E3%82%A6%E3%83%B3%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E4%B8%80%E7%95%AA%E4%B8%8A%E3%81%AB%E3%81%AF%E5%BF%85%E3%81%9A%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E7%94%A8%E6%84%8F%E3%81%99%E3%82%8B",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:I,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"記事のメタデータをyaml形式で記述（下記のように---で囲む）"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,"language-yaml"]},children:[{type:b,tag:v,props:{},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:J}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,k,l]},children:[{type:a,value:"title"}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:m}]},{type:a,value:" 【解体新書】Nuxt.jsでブログを作ろう\n"},{type:b,tag:d,props:{className:[e,k,l]},children:[{type:a,value:"description"}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:m}]},{type:a,value:" テックブログ記事を書こう\n"},{type:b,tag:d,props:{className:[e,k,l]},children:[{type:a,value:"category"}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:m}]},{type:a,value:" Nuxt.js\n"},{type:b,tag:d,props:{className:[e,k,l]},children:[{type:a,value:"createdAt"}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:d,props:{className:[e,K,A]},children:[{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,k,l]},children:[{type:a,value:"updatedAt"}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:d,props:{className:[e,K,A]},children:[{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,k,l]},children:[{type:a,value:"sortNumber"}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:d,props:{className:[e,A]},children:[{type:a,value:"101"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:J}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[]},{type:a,value:c},{type:b,tag:w,props:{id:"4-おわりに"},children:[{type:b,tag:j,props:{href:"#4-%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"4. おわりに"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"今回はNuxt.jsの環境を整え、ブログ作りのためにNuxt-contentというパッケージをインストールしました。そして、プロジェクトディレクトリにcontentフォルダを作成し、私の場合はその中にblogフォルダを作ってから各言語のフォルダを用意しました。次から数回にわたってマークダウンで書いたブログ記事を表示させていきたいと思います。"}]}]},dir:"\u002Fblog\u002Fnuxt_vue",path:"\u002Fblog\u002Fnuxt_vue\u002F101_nuxt-content",extension:".md"},navigation:"blog\u002Fnuxt_vue",dirParam:"nuxt_vue"}],fetch:{},mutations:[]}}("text","element","\n","span","token","p","li","br","punctuation","a","key","atrule",":","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers","code","h1","language-text","ul"," ","number","各マークダウンファイルの一番上には必ずメタデータを用意する","各マークダウンファイルの一番上には必ずメタデータを用意する。","nofollow","noopener","noreferrer","_blank"," (最終閲覧日:2021\u002F11\u002F27)","blockquote","---","datetime","2021-11-25")));