__NUXT_JSONP__("/blog/laravel/902_Heroku_mysql", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:[{content:{slug:"902_Heroku_mysql",description:"cleardb",title:"HerokuでDB設定（MySQL）",category:"Laravel",createdAt:v,updatedAt:v,sortNumber:902,toc:[],body:{type:"root",children:[{type:b,tag:m,props:{id:"1-はじめに"},children:[{type:b,tag:e,props:{href:"#1-%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:"1. はじめに"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"LaravelをHerokuにデプロイしてからのデータベース作成をしよう。ここではMySQLの設定をClearDBというHerokuのアドオンを用いて行う。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:m,props:{id:"2-アカウント作成クレジット登録"},children:[{type:b,tag:e,props:{href:"#2-%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E4%BD%9C%E6%88%90%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E7%99%BB%E9%8C%B2",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:"2. アカウント作成＆クレジット登録"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"アカウント登録："},{type:b,tag:e,props:{href:w,rel:[x,y,z],target:A},children:[{type:a,value:w}]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"クレジットカード登録\r\n"},{type:b,tag:d,props:{},children:[]},{type:a,value:"① 自分のアカウントの「Account settings」を選択\r\n"},{type:b,tag:d,props:{},children:[]},{type:a,value:"② 「billng」でクレジットカードを登録\r\n"},{type:b,tag:d,props:{},children:[]},{type:a,value:"※住所を英語表記にする時のお役立ち\r\n"},{type:b,tag:d,props:{},children:[]},{type:a,value:" - JuDress: "},{type:b,tag:e,props:{href:B,rel:[x,y,z],target:A},children:[{type:a,value:B}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:m,props:{id:"3-アドオン追加cleardb"},children:[{type:b,tag:e,props:{href:"#3-%E3%82%A2%E3%83%89%E3%82%AA%E3%83%B3%E8%BF%BD%E5%8A%A0cleardb",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:"3. アドオン追加（cleardb）"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"$ heroku addons:add cleardb\n"}]}]}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"configコマンドで Heroku の環境変数である CLEARDB_DATABASE_URL を確認"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:m,props:{id:"4-configで環境変数の取得"},children:[{type:b,tag:e,props:{href:"#4-config%E3%81%A7%E7%92%B0%E5%A2%83%E5%A4%89%E6%95%B0%E3%81%AE%E5%8F%96%E5%BE%97",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:"4. configで環境変数の取得"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"heroku config │ grep CLEARDB_DATABASE_URL\n"}]}]}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"▼コマンドを打つとしたのようなURLが出現（環境変数を設定するのに必要）"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"CLEARDB_DATABASE_URL: mysql:\u002F\u002F[DB_USERNAME]:[DB_PASSWORD]@[DB_HOST]\u002F[DB_DATABASE]?reconnect=true"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:m,props:{id:"5-環境変数の設定"},children:[{type:b,tag:e,props:{href:"#5-%E7%92%B0%E5%A2%83%E5%A4%89%E6%95%B0%E3%81%AE%E8%A8%AD%E5%AE%9A",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:"5. 環境変数の設定"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"heroku configで取得した情報を基に設定"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:l,props:{},children:[{type:a,value:" $ heroku config:set DB_DATABASE=[データベース名]\n $ heroku config:set DB_HOST=[ホスト名]\n $ heroku config:set DB_USERNAME=[ユーザー名]\n $ heroku config:set DB_PASSWORD=[パスワード] \n\n"}]}]}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"もう少し頑張って（その他の諸設定）"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"$ heroku config:set APP_ENV=heroku \n$ heroku config:set LANG=ja_JP.UTF-8\n$ heroku config:set TZ=Asia\u002FTokyo\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:m,props:{id:"6-マイグレーション"},children:[{type:b,tag:e,props:{href:"#6-%E3%83%9E%E3%82%A4%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:"6. マイグレーション"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"heroku run php artisan migrate\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"※うまくいかない時"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"[PDOException] SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 767 bytes\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"↓"},{type:b,tag:d,props:{},children:[]},{type:a,value:"\r\n【原因は文字コードのバイト数にあり！】"}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Laravel5.4より前（utf8)：3バイト\u002F字  varchar(255)  255文字✕3バイト＝765バイト"},{type:b,tag:d,props:{},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Laravel5.4以降(utf8mb4)：4バイト\u002F字  varchar(255)  255文字✕4バイト＝1020バイト"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"対策①：config\u002Fdatabase.phpの修正"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"'charset' =\u003E 'utf8mb4',\n'collation' =\u003E 'utf8mb4_unicode_ci',\n\n【変更後】\n'charset' =\u003E 'utf8', \n'collation' =\u003E 'utf8_unicode_ci',\n"}]}]}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"対策②　AppServiceProvider"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Schema::defaultStringLength(191);　を追加"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"\u003C?php\n \nnamespace App\\Providers;\n \nuse Illuminate\\Support\\ServiceProvider;\n \nclass AppServiceProvider extends ServiceProvider\n{\n    \u002F**\n     * Bootstrap any application services.\n     *\n     * @return void\n     *\u002F\n    public function boot()\n    {\n        \u002F\u002F\n          Schema::defaultStringLength(191);\n    }\n \n    \u002F**\n     * Register any application services.\n     *\n     * @return void\n     *\u002F\n    public function register()\n    {\n        \u002F\u002F\n    }\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:m,props:{id:"7-おわりに"},children:[{type:b,tag:e,props:{href:"#7-%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:"7. おわりに"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"PostgreSQLの時はそんなことなかったが、ClearDBによるMySqlの設定の際はカラムのバイト数、文字型を気にしなくていけないので注意が必要。もしPostgreSQLで問題ないのなら、そっちの方が面倒ではないかもしれぬ。"}]}]},dir:"\u002Fblog\u002Flaravel",path:"\u002Fblog\u002Flaravel\u002F902_Heroku_mysql",extension:".md"},navigation:"blog\u002Flaravel",dirParam:"laravel"}],fetch:{},mutations:[]}}("text","element","\n","br","a","p","div","nuxt-content-highlight","pre","language-text","line-numbers","code","h1","true",-1,"span","icon","icon-link","li","ul","blockquote","2021-10-28T00:00:00.000Z","https:\u002F\u002Fjp.heroku.com","nofollow","noopener","noreferrer","_blank","http:\u002F\u002Fjudress.tsukuenoue.com\u002F")));