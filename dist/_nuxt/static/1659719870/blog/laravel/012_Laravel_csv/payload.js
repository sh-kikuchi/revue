__NUXT_JSONP__("/blog/laravel/012_Laravel_csv", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL){return {data:[{content:{slug:"012_Laravel_csv",description:"StreamedResponseを使ってみよう。",title:"LaravelでCSV出力",category:"Laravel",createdAt:ap,updatedAt:ap,sortNumber:12,toc:[],body:{type:"root",children:[{type:b,tag:V,props:{id:"1-はじめに"},children:[{type:b,tag:y,props:{href:"#1-%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",ariaHidden:W,tabIndex:X},children:[{type:b,tag:c,props:{className:[Y,Z]},children:[]}]},{type:a,value:"1. はじめに"}]},{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:"Bookstockというアプリを作った。そこではテーマごとに本を整理することができ、且つ本のブックメモが書ける、けどCSV出力が出来ると良いな・・・と。なので、今回はLaravelのCSV出力にチャレンジしてみたいと思ふ。"},{type:b,tag:A,props:{},children:[]}]},{type:a,value:g},{type:b,tag:z,props:{},children:[{type:b,tag:y,props:{href:"http:\u002F\u002Fsk-bookstock.herokuapp.com",rel:[aq,ar,as],target:at},children:[{type:a,value:"Bookstock"}]},{type:a,value:f},{type:b,tag:A,props:{},children:[]}]},{type:a,value:g},{type:b,tag:J,props:{},children:[{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:"メールアドレス："},{type:b,tag:y,props:{href:"mailto:test@test.com"},children:[{type:a,value:"test@test.com"}]}]},{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:"パスワード：testtest"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:A,props:{},children:[]},{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:"※ マイグレーションファイル"}]},{type:a,value:g},{type:b,tag:J,props:{},children:[{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:"今回はマイグレーションの解説は省略しますが、テーブル「books」を用意していることを前提に本記事の話を進めていきます。"}]},{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:"説明の便宜上、実際書いたコードとは若干異なります"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,"language-text"]},children:[{type:b,tag:Q,props:{},children:[{type:a,value:"    public function up()\n    {\n        Schema::create('books', function (Blueprint $table) {\n            $table-\u003Eid();\n            $table-\u003EbigInteger('user_id')-\u003Eunsigned();\n            $table-\u003Eforeign('user_id')-\u003Ereferences('id')-\u003Eon('users')-\u003EonDelete('cascade');\n            $table-\u003Estring('name');\n            $table-\u003Estring('title');\n            $table-\u003Estring('publisher');\n            $table-\u003Estring('year');\n            $table-\u003Etimestamps();\n        });\n    }\n"}]}]}]},{type:a,value:g},{type:b,tag:A,props:{},children:[]},{type:a,value:g},{type:b,tag:V,props:{id:"2-ボタン作り"},children:[{type:b,tag:y,props:{href:"#2-%E3%83%9C%E3%82%BF%E3%83%B3%E4%BD%9C%E3%82%8A",ariaHidden:W,tabIndex:X},children:[{type:b,tag:c,props:{className:[Y,Z]},children:[]}]},{type:a,value:"2. ボタン作り"}]},{type:a,value:g},{type:b,tag:J,props:{},children:[{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:"ここでは、「CSV出力」のボタンを押下した時に、引数としてユーザーIDとテーマIDをとってみたいと思います。フォームのPOST通信を使い、隠れINPUTを用意して値を渡してみます。"},{type:b,tag:A,props:{},children:[]}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:"inputの中身"}]},{type:a,value:g}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,"language-html"]},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:au}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"id"}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:b,tag:c,props:{className:[d,e,C]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:"csvform"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"action"}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:b,tag:c,props:{className:[d,e,C]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"{{ route("},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:"book.csv.export"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:") }}"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"method"}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:b,tag:c,props:{className:[d,e,C]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"POST"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]}]},{type:a,value:"\n    @csrf\n    "},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:"input"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"hidden"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:b,tag:c,props:{className:[d,e,C]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"value"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,B]},children:[{type:b,tag:c,props:{className:[d,e,C]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"{{ $theme -\u003E id }}"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:aw}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"type"}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:b,tag:c,props:{className:[d,e,C]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:"submit"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:b,tag:c,props:{className:[d,e,C]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"btn btn-primary"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]}]},{type:a,value:"csv出力"},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ay}]},{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ay}]},{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:A,props:{},children:[]},{type:a,value:g},{type:b,tag:V,props:{id:"3-ルーティング"},children:[{type:b,tag:y,props:{href:"#3-%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0",ariaHidden:W,tabIndex:X},children:[{type:b,tag:c,props:{className:[Y,Z]},children:[]}]},{type:a,value:"3. ルーティング"}]},{type:a,value:g},{type:b,tag:J,props:{},children:[{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:"Laravel8の場合"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,ad]},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'book\u002Fcsv\u002Fexport'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:"App"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ae}]},{type:a,value:"Http"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ae}]},{type:a,value:"Controllers"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ae}]},{type:a,value:"BookController"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'csvExport'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:J,props:{},children:[{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:"Laravel8より前の場合"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,ad]},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'csv\u002Fexport'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'BookController@csvExport'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:"■ CSV出力（Controllerに記述する）"}]},{type:a,value:g},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,ad]},children:[{type:b,tag:Q,props:{},children:[{type:a,value:"    "},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:af}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ag,k]},children:[{type:a,value:"csvExport"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,aC,"type-declaration"]},children:[{type:a,value:"Request"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F\u002FフォームからテーマIDを受け取る"}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F\u002FStreamedResponseの処理で使うuse ($request, $book_id)を忘れずに"}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"new"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aC]},children:[{type:a,value:"StreamedResponse"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"use"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"fopen"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'php:\u002F\u002Foutput'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'w'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F\u002F 文字化け回避"}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"stream_filter_prepend"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'convert.iconv.utf-8\u002Fcp932\u002F\u002FTRANSLIT'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F\u002F 任意のSQL文（今回は引数として$book_idを使っています）"}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:al}]},{type:a,value:"  "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:"Theme"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"find"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"books"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"get"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F\u002F存在する場合はデータをCSVに書き出す（fputcsv）"}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"if"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"empty"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"0"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:"\n                            "},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'データがありませんでした。'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"else"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"foreach"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:al}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"as"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"this",o]},children:[{type:a,value:"$this"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"fclose"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'Content-Type'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'application\u002Foctet-stream'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'content-disposition'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'attachment; filename=ブックリスト.csv'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F\u002F出力したいカラムを調整できる。"}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:af}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ag,k]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'『'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"title"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'』'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:" ←書名なので『』つけてみた♪\n          "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"publisher"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"year"}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"\u002F\u002Fヘッダーを定義する"}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:af}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ag,k]},children:[{type:a,value:"_csvHeader"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'著者名'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'タイトル'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'出版社'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,l,m]},children:[{type:a,value:"'出版年'"}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:A,props:{},children:[]},{type:a,value:g},{type:b,tag:V,props:{id:"4-おわりに"},children:[{type:b,tag:y,props:{href:"#4-%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",ariaHidden:W,tabIndex:X},children:[{type:b,tag:c,props:{className:[Y,Z]},children:[]}]},{type:a,value:"4. おわりに"}]},{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:"下記、参考にしていたんだけど、Yuus Memoのサイト閉じちゃっているっぽい。残念だな。（お世話になりました。どうもありがとうございました。）"}]},{type:a,value:g},{type:b,tag:J,props:{},children:[{type:a,value:g},{type:b,tag:v,props:{},children:[{type:b,tag:y,props:{href:"https:\u002F\u002Fwww.yuu-progra.com\u002F2021\u002F04\u002F25\u002F%e3%80%90laravel%e3%80%91csv%e3%82%a8%e3%82%af%e3%82%b9%e3%83%9d%e3%83%bc%e3%83%88-%e2%98%86%e8%b6%85%e7%b0%a1%e5%8d%98%ef%bc%81%ef%bc%81\u002F",rel:[aq,ar,as],target:at},children:[{type:a,value:"Yuus Memo -【Laravel】CSVエクスポート ☆超簡単！！"}]}]},{type:a,value:g}]}]},dir:"\u002Fblog\u002Flaravel",path:"\u002Fblog\u002Flaravel\u002F012_Laravel_csv",extension:".md"},navigation:"blog\u002Flaravel",dirParam:"laravel"}],fetch:{},mutations:[]}}("text","element","span","token","punctuation"," ","\n","variable","(",")","function","string","single-quoted-string","operator","keyword",",",";","-\u003E","=","tag","\"","li","\n            ","attr-name","a","p","br","attr-value","attr-equals","{","comment","property","\n                ","}","$row","ul","'","\n    ","div","nuxt-content-highlight","pre","line-numbers","code","\u003E","[","]","$stream","h1","true",-1,"icon","icon-link","name","scope","::","$response","\u003C","language-php","\\","public","function-definition","$request","\n\n            ","$book_id","\n\n                ","$results","\n                        ","return","\n          ","2021-11-03T00:00:00.000Z","nofollow","noopener","noreferrer","_blank","form","book_id","button","class","\u003C\u002F","Route","post","'book.csv.export'","class-name","fputcsv","\n                    ","_csvRow","headers","set","\n\n    ","\n      ",".","\n        ")));