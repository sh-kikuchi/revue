__NUXT_JSONP__("/blog/laravel/Heroku_mysql", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M){return {data:[{content:{slug:"Heroku_mysql",description:"cleardb",title:"HerokuでDB設定（MySQL）",category:"Laravel",createdAt:w,updatedAt:w,sortNumber:m,toc:[{id:x,depth:m,text:y},{id:z,depth:m,text:A},{id:B,depth:m,text:C},{id:D,depth:m,text:E},{id:F,depth:m,text:G}],body:{type:"root",children:[{type:b,tag:p,props:{id:x},children:[{type:b,tag:j,props:{href:"#1-%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E4%BD%9C%E6%88%90%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E7%99%BB%E9%8C%B2",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"アカウント登録："},{type:b,tag:j,props:{href:H,rel:[I,J,K],target:L},children:[{type:a,value:H}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"クレジットカード登録\r\n"},{type:b,tag:o,props:{},children:[]},{type:a,value:"① 自分のアカウントの「Account settings」を選択\r\n"},{type:b,tag:o,props:{},children:[]},{type:a,value:"② 「billng」でクレジットカードを登録\r\n"},{type:b,tag:o,props:{},children:[]},{type:a,value:"※住所を英語表記にする時のお役立ち\r\n"},{type:b,tag:o,props:{},children:[]},{type:a,value:" - JuDress: "},{type:b,tag:j,props:{href:M,rel:[I,J,K],target:L},children:[{type:a,value:M}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{id:z},children:[{type:b,tag:j,props:{href:"#2-%E3%82%A2%E3%83%89%E3%82%AA%E3%83%B3%E8%BF%BD%E5%8A%A0cleardb",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{className:[e]},children:[{type:b,tag:f,props:{className:[g,h]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"$ heroku addons:add cleardb\n"}]}]}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"configコマンドで Heroku の環境変数である CLEARDB_DATABASE_URL を確認"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{id:B},children:[{type:b,tag:j,props:{href:"#3-config%E3%81%A7%E7%92%B0%E5%A2%83%E5%A4%89%E6%95%B0%E3%81%AE%E5%8F%96%E5%BE%97",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{className:[e]},children:[{type:b,tag:f,props:{className:[g,h]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"heroku config | grep CLEARDB_DATABASE_URL\n"}]}]}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"▼コマンドを打つとしたのようなURLが出現（環境変数を設定するのに必要）"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"CLEARDB_DATABASE_URL: mysql:\u002F\u002F[DB_USERNAME]:[DB_PASSWORD]@[DB_HOST]\u002F[DB_DATABASE]?reconnect=true"}]},{type:a,value:c},{type:b,tag:p,props:{id:D},children:[{type:b,tag:j,props:{href:"#4-%E7%92%B0%E5%A2%83%E5%A4%89%E6%95%B0%E3%81%AE%E8%A8%AD%E5%AE%9A",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"heroku configで取得した情報を基に設定"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{className:[e]},children:[{type:b,tag:f,props:{className:[g,h]},children:[{type:b,tag:i,props:{},children:[{type:a,value:" $ heroku config:set DB_DATABASE=[データベース名]\n $ heroku config:set DB_HOST=[ホスト名]\n $ heroku config:set DB_USERNAME=[ユーザー名]\n $ heroku config:set DB_PASSWORD=[パスワード] \n\n"}]}]}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"もう少し頑張って（その他の諸設定）"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{className:[e]},children:[{type:b,tag:f,props:{className:[g,h]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"$ heroku config:set APP_ENV=heroku \n$ heroku config:set LANG=ja_JP.UTF-8\n$ heroku config:set TZ=Asia\u002FTokyo\n"}]}]}]},{type:a,value:c},{type:b,tag:p,props:{id:F},children:[{type:b,tag:j,props:{href:"#5-%E3%83%9E%E3%82%A4%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{className:[e]},children:[{type:b,tag:f,props:{className:[g,h]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"heroku run php artisan migrate\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"※うまくいかない時"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e]},children:[{type:b,tag:f,props:{className:[g,h]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"[PDOException] SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 767 bytes\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"↓"},{type:b,tag:o,props:{},children:[]},{type:a,value:"\r\n【原因は文字コードのバイト数にあり！】"}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Laravel5.4より前（utf8)：3バイト\u002F字  varchar(255)  255文字✕3バイト＝765バイト"},{type:b,tag:o,props:{},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Laravel5.4以降(utf8mb4)：4バイト\u002F字  varchar(255)  255文字✕4バイト＝1020バイト"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"対策①：config\u002Fdatabase.phpの修正"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{className:[e]},children:[{type:b,tag:f,props:{className:[g,h]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"'charset' =\u003E 'utf8mb4',\n'collation' =\u003E 'utf8mb4_unicode_ci',\n\n【変更後】\n'charset' =\u003E 'utf8', \n'collation' =\u003E 'utf8_unicode_ci',\n"}]}]}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"対策②　AppServiceProvider"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Schema::defaultStringLength(191);　を追加"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{className:[e]},children:[{type:b,tag:f,props:{className:[g,h]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"\u003C?php\n \nnamespace App\\Providers;\n \nuse Illuminate\\Support\\ServiceProvider;\n \nclass AppServiceProvider extends ServiceProvider\n{\n    \u002F**\n     * Bootstrap any application services.\n     *\n     * @return void\n     *\u002F\n    public function boot()\n    {\n        \u002F\u002F\n          Schema::defaultStringLength(191);\n    }\n \n    \u002F**\n     * Register any application services.\n     *\n     * @return void\n     *\u002F\n    public function register()\n    {\n        \u002F\u002F\n    }\n}\n"}]}]}]}]},dir:"\u002Fblog\u002Flaravel",path:"\u002Fblog\u002Flaravel\u002FHeroku_mysql",extension:".md"}}],fetch:{},mutations:[]}}("text","element","\n","div","nuxt-content-highlight","pre","language-text","line-numbers","code","a","li","p",2,"ul","br","h2","true",-1,"span","icon","icon-link","blockquote","2021-10-28T00:00:00.000Z","1-アカウント作成クレジット登録","1. アカウント作成＆クレジット登録","2-アドオン追加cleardb","2. アドオン追加（cleardb）","3-configで環境変数の取得","3. configで環境変数の取得","4-環境変数の設定","4. 環境変数の設定","5-マイグレーション","5. マイグレーション","https:\u002F\u002Fjp.heroku.com","nofollow","noopener","noreferrer","_blank","http:\u002F\u002Fjudress.tsukuenoue.com\u002F")));