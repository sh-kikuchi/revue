__NUXT_JSONP__("/blog/laravel/903_Heroku_PostgreSQL", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:[{content:{slug:"903_Heroku_PostgreSQL",description:"Herokuのマイグレーション",title:"HerokuのDB設定（PostgreSQL）",category:"Laravel",createdAt:s,updatedAt:s,sortNumber:903,toc:[],body:{type:"root",children:[{type:a,tag:k,props:{id:"1-はじめに"},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#1-%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:"1. はじめに"}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"LaravelをHerokuにデプロイしてからのデータベース作成をしよう。ここではPostgreSQLの設定をheroku-postgresqlというHerokuのアドオンを用いて行う。"}]},{type:b,value:c},{type:a,tag:r,props:{},children:[]},{type:b,value:c},{type:a,tag:k,props:{id:"2-herokuのアドオンにpostgresqlを作成する"},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#2-heroku%E3%81%AE%E3%82%A2%E3%83%89%E3%82%AA%E3%83%B3%E3%81%ABpostgresql%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B",tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:"2. herokuのアドオンにPostgreSQLを作成する"}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"$ heroku addons:create heroku-postgresql:hobby-dev\n"}]}]}]},{type:b,value:c},{type:a,tag:r,props:{},children:[]},{type:b,value:c},{type:a,tag:k,props:{id:"3-環境変数の取得"},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#3-%E7%92%B0%E5%A2%83%E5%A4%89%E6%95%B0%E3%81%AE%E5%8F%96%E5%BE%97",tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:"3. 環境変数の取得"}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"$ heroku config:get DATABASE_URL\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"下記のURLが出現"}]},{type:b,value:c},{type:a,tag:t,props:{},children:[{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"postgres:\u002F\u002F\u003Cユーザ名\u003E:\u003Cパスワード\u003E@\u003Cホスト\u003E:5432\u002F\u003CDB名\u003E"}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"$ heroku config:set DB_CONNECTION=pgsql\n$ heroku config:set DB_HOST=\u003Cホスト\u003E\n$ heroku config:set DB_DATABASE=\u003CDB名\u003E\n$ heroku config:set DB_USERNAME=\u003Cユーザ名\u003E\n$ heroku config:set DB_PASSWORD=\u003Cパスワード\u003E\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"※configを設定する際、イコールより先はクオーテーションマークは要らない。そのままコピぺ。"}]},{type:b,value:c},{type:a,tag:r,props:{},children:[]},{type:b,value:c},{type:a,tag:k,props:{id:"4-dbのマイグレーション"},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#4-db%E3%81%AE%E3%83%9E%E3%82%A4%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3",tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:"4. DBのマイグレーション"}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"※準備：composer.jsonに加筆"}]},{type:b,value:c},{type:a,tag:t,props:{},children:[{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Laravelの.env はgit管理外なので、Heroku用の.env.heroku を用意。デプロイの際にHerokuサーバー内で.env.heroku を.env にコピーするようにする。"}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"    \"scripts\": {\n        (前略)\n        \"compile\": [\n            \"@php -r \\\"file_exists('.env') ││ copy('.env.example', '.env');\\\"\"\n        ]\n    },\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"マイグレーション"}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"$ heroku run php artisan migrate\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"マイグレーションをやり直したい場合"}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"# (マイグレーションをやり直したい場合)\n\u003E heroku run php artisan migrate:refresh --seed\n"}]}]}]},{type:b,value:c},{type:a,tag:r,props:{},children:[]},{type:b,value:c},{type:a,tag:k,props:{id:"5-おわりに"},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#5-%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:"5. おわりに"}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"MySqlよりはPostgreSQLの方が簡単な印象。"}]}]},dir:"\u002Fblog\u002Flaravel",path:"\u002Fblog\u002Flaravel\u002F903_Heroku_PostgreSQL",extension:".md"},navigation:"blog\u002Flaravel",dirParam:"laravel"}],fetch:{},mutations:[]}}("element","text","\n","p","div","nuxt-content-highlight","pre","language-text","line-numbers","code","h1","a","true",-1,"span","icon","icon-link","br","2021-10-28T00:00:00.000Z","blockquote")));