__NUXT_JSONP__("/blog/laravel/901_Heroku_laravel", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L){return {data:[{content:{slug:"901_Heroku_laravel",description:"Laravel篇",title:"Herokuのデプロイ方法",category:"Laravel",createdAt:u,updatedAt:u,sortNumber:901,toc:[{id:v,depth:k,text:w},{id:x,depth:k,text:y},{id:z,depth:k,text:A},{id:B,depth:k,text:C},{id:D,depth:k,text:E},{id:F,depth:k,text:G}],body:{type:"root",children:[{type:a,tag:l,props:{id:v},children:[{type:a,tag:j,props:{href:"#1-heroku-cli%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB",ariaHidden:m,tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:w}]},{type:b,value:c},{type:a,tag:t,props:{},children:[{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:"【事前準備】gitを使えるようにしておくこと"}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:"herokuのインストール\r\n"},{type:a,tag:j,props:{href:H,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,value:H}]}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:l,props:{id:x},children:[{type:a,tag:j,props:{href:"#2-heroku%E3%82%92%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3",ariaHidden:m,tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:y}]},{type:b,value:c},{type:a,tag:t,props:{},children:[{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:I}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:J,props:{},children:[{type:b,value:c},{type:a,tag:r,props:{},children:[{type:b,value:"heroku login -i"}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ heroku login -i\nheroku: Enter your login credentials\nEmail :自分のメールアドレス\nPassword: **************\nLogged in as ~~　←loggedでログイン成功！\n"}]}]}]},{type:b,value:c},{type:a,tag:l,props:{id:z},children:[{type:a,tag:j,props:{href:"#3-procfile%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B",ariaHidden:m,tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:A}]},{type:b,value:c},{type:a,tag:t,props:{},children:[{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:"HerokuでWebアプリを動かす指示書のようなもの"}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"  $ touch Procfile\n  $ echo web: vendor\u002Fbin\u002Fheroku-php-apache2 public\u002F \u003E Procfile\n"}]}]}]},{type:b,value:c},{type:a,tag:l,props:{id:B},children:[{type:a,tag:j,props:{href:"#4%E3%83%AC%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B",ariaHidden:m,tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:C}]},{type:b,value:c},{type:a,tag:t,props:{},children:[{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:I}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:J,props:{},children:[{type:b,value:c},{type:a,tag:r,props:{},children:[{type:b,value:"$ heroku create 任意のアプリ名"}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ heroku create toolbox-kanban\nCreating ⬢ toolbox-kanban... done\nhttps:\u002F\u002Ftoolbox-kanban.herokuapp.com\u002F | https:\u002F\u002Fgit.heroku.com\u002Ftoolbox-kanban.git\n\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{style:K},children:[]},{type:b,value:c},{type:a,tag:l,props:{id:D},children:[{type:a,tag:j,props:{href:"#5-%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E6%83%85%E5%A0%B1%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B",ariaHidden:m,tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:E}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ heroku config:set APP_KEY=$(php artisan key:generate --show)\n"}]}]}]},{type:b,value:c},{type:a,tag:r,props:{},children:[{type:b,value:"上記のコマンドが効かない場合は予め、php artisan key:generate --showでアプリキーを取得して、heroku config:set APP_KEY=\u003Cアプリキー\u003Eのコマンドを打つこと。"}]},{type:b,value:c},{type:a,tag:d,props:{style:K},children:[]},{type:b,value:c},{type:a,tag:l,props:{id:F},children:[{type:a,tag:j,props:{href:"#6-heroku%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%ABpush",ariaHidden:m,tabIndex:n},children:[{type:a,tag:o,props:{className:[p,q]},children:[]}]},{type:b,value:G}]},{type:b,value:c},{type:a,tag:r,props:{},children:[{type:b,value:"①　既にアプリが出来上がっている場合\r\n（Gitも使っている状態）"}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ heroku git:remote -a Herokuアプリの名前\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:L}]}]}]},{type:b,value:c},{type:a,tag:r,props:{},children:[{type:b,value:"【注意】　開発ブランチ（develop）をherokuのmasterブランチにpushする場合"}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ git push heroku develop:master\n"}]}]}]},{type:b,value:c},{type:a,tag:r,props:{},children:[{type:b,value:"②　これからアプリを作る場合(リポジトリ新規作成の場合)"}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ git init \n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ heroku git:remote -a Herokuアプリの名前 \n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ git add .\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ git commit -m \"the first commit\"\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:L}]}]}]}]},dir:"\u002Fblog\u002Flaravel",path:"\u002Fblog\u002Flaravel\u002F901_Heroku_laravel",extension:".md"},navigation:"blog\u002Flaravel",dirParam:"laravel"}],fetch:{},mutations:[]}}("element","text","\n","div","nuxt-content-highlight","pre","language-text","line-numbers","code","a",2,"h2","true",-1,"span","icon","icon-link","p","li","ul","2021-10-28T00:00:00.000Z","1-heroku-cliのインストール","1. Heroku CLIのインストール","2-herokuをログイン","2. herokuをログイン","3-procfileを作成する","3. Procfileを作成する","4レポジトリを作成する","4.レポジトリを作成する","5-アプリの情報を設定する","5. アプリの情報を設定する","6-herokuサーバーにpush","6. herokuサーバーにpush","https:\u002F\u002Fdevcenter.heroku.com\u002Fja\u002Farticles\u002Fheroku-cli#download-and-install","コマンドをたたく場所はプロジェクトディレクトリ","blockquote","page-break-before:always","$ git push heroku master\n")));