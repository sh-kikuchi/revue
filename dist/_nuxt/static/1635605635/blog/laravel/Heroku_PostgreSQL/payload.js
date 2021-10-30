__NUXT_JSONP__("/blog/laravel/Heroku_PostgreSQL", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){return {data:[{content:{slug:"Heroku_PostgreSQL",description:"Herokuのマイグレーション",title:"HerokuのDB設定（PostgreSQL）",category:"Laravel",createdAt:s,updatedAt:s,sortNumber:3,toc:[{id:t,depth:k,text:u},{id:v,depth:k,text:w},{id:x,depth:k,text:y}],body:{type:"root",children:[{type:a,tag:l,props:{id:t},children:[{type:a,tag:m,props:{ariaHidden:n,href:"#1-heroku%E3%81%AE%E3%82%A2%E3%83%89%E3%82%AA%E3%83%B3%E3%81%ABpostgresql%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B",tabIndex:o},children:[{type:a,tag:p,props:{className:[q,r]},children:[]}]},{type:b,value:u}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"$ heroku addons:create heroku-postgresql:hobby-dev\n"}]}]}]},{type:b,value:c},{type:a,tag:l,props:{id:v},children:[{type:a,tag:m,props:{ariaHidden:n,href:"#2-%E7%92%B0%E5%A2%83%E5%A4%89%E6%95%B0%E3%81%AE%E5%8F%96%E5%BE%97",tabIndex:o},children:[{type:a,tag:p,props:{className:[q,r]},children:[]}]},{type:b,value:w}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"$ heroku config:get DATABASE_URL\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"下記のURLが出現"}]},{type:b,value:c},{type:a,tag:z,props:{},children:[{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"postgres:\u002F\u002F\u003Cユーザ名\u003E:\u003Cパスワード\u003E@\u003Cホスト\u003E:5432\u002F\u003CDB名\u003E"}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"$ heroku config:set DB_CONNECTION=pgsql\n$ heroku config:set DB_HOST=\u003Cホスト\u003E\n$ heroku config:set DB_DATABASE=\u003CDB名\u003E\n$ heroku config:set DB_USERNAME=\u003Cユーザ名\u003E\n$ heroku config:set DB_PASSWORD=\u003Cパスワード\u003E\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"※configを設定する際、イコールより先はクオーテーションマークは要らない。そのままコピぺ。"}]},{type:b,value:c},{type:a,tag:l,props:{id:x},children:[{type:a,tag:m,props:{ariaHidden:n,href:"#3-db%E3%81%AE%E3%83%9E%E3%82%A4%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3",tabIndex:o},children:[{type:a,tag:p,props:{className:[q,r]},children:[]}]},{type:b,value:y}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"※準備：composer.jsonに加筆"}]},{type:b,value:c},{type:a,tag:z,props:{},children:[{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Laravelの.env はgit管理外なので、Heroku用の.env.heroku を用意。デプロイの際にHerokuサーバー内で.env.heroku を.env にコピーするようにする。"}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"    \"scripts\": {\n        (前略)\n        \"compile\": [\n            \"@php -r \\\"file_exists('.env') || copy('.env.example', '.env');\\\"\"\n        ]\n    },\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"マイグレーション"}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"$ heroku run php artisan migrate\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"マイグレーションをやり直したい場合"}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"# (マイグレーションをやり直したい場合)\n\u003E heroku run php artisan migrate:refresh --seed\n"}]}]}]}]},dir:"\u002Fblog\u002Flaravel",path:"\u002Fblog\u002Flaravel\u002FHeroku_PostgreSQL",extension:".md"}}],fetch:{},mutations:[]}}("element","text","\n","p","div","nuxt-content-highlight","pre","language-text","line-numbers","code",2,"h2","a","true",-1,"span","icon","icon-link","2021-10-28T00:00:00.000Z","1-herokuのアドオンにpostgresqlを作成する","1. herokuのアドオンにPostgreSQLを作成する","2-環境変数の取得","2. 環境変数の取得","3-dbのマイグレーション","3. DBのマイグレーション","blockquote")));