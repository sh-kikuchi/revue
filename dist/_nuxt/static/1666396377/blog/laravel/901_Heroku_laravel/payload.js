__NUXT_JSONP__("/blog/laravel/901_Heroku_laravel", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){return {data:[{content:{slug:"901_Heroku_laravel",description:"Laravel篇",title:"Herokuのデプロイ方法",category:"Laravel",createdAt:u,updatedAt:u,sortNumber:901,toc:[],body:{type:"root",children:[{type:a,tag:k,props:{id:"1-はじめに"},children:[{type:a,tag:j,props:{href:"#1-%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",ariaHidden:l,tabIndex:m},children:[{type:a,tag:n,props:{className:[o,p]},children:[]}]},{type:b,value:"1. はじめに"}]},{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"HerokuにLaravelのアプリをインストールしてみる。まずはアプリをデプロイするところから順序立ててやってみる。"}]},{type:b,value:c},{type:a,tag:r,props:{},children:[]},{type:b,value:c},{type:a,tag:k,props:{id:"2-heroku-cliのインストール"},children:[{type:a,tag:j,props:{href:"#2-heroku-cli%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB",ariaHidden:l,tabIndex:m},children:[{type:a,tag:n,props:{className:[o,p]},children:[]}]},{type:b,value:"2. Heroku CLIのインストール"}]},{type:b,value:c},{type:a,tag:t,props:{},children:[{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:"【事前準備】gitを使えるようにしておくこと"}]},{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:"herokuのインストール\r\n"},{type:a,tag:j,props:{href:v,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,value:v}]}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:r,props:{},children:[]},{type:b,value:c},{type:a,tag:k,props:{id:"3-herokuをログイン"},children:[{type:a,tag:j,props:{href:"#3-heroku%E3%82%92%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3",ariaHidden:l,tabIndex:m},children:[{type:a,tag:n,props:{className:[o,p]},children:[]}]},{type:b,value:"3. herokuをログイン"}]},{type:b,value:c},{type:a,tag:t,props:{},children:[{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:w}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:x,props:{},children:[{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"heroku login -i"}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ heroku login -i\nheroku: Enter your login credentials\nEmail :自分のメールアドレス\nPassword: **************\nLogged in as ~~　←loggedでログイン成功！\n"}]}]}]},{type:b,value:c},{type:a,tag:r,props:{},children:[]},{type:b,value:c},{type:a,tag:k,props:{id:"4-procfileを作成する"},children:[{type:a,tag:j,props:{href:"#4-procfile%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B",ariaHidden:l,tabIndex:m},children:[{type:a,tag:n,props:{className:[o,p]},children:[]}]},{type:b,value:"4. Procfileを作成する"}]},{type:b,value:c},{type:a,tag:t,props:{},children:[{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:"HerokuでWebアプリを動かす指示書のようなもの"}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"  $ touch Procfile\n  $ echo web: vendor\u002Fbin\u002Fheroku-php-apache2 public\u002F \u003E Procfile\n"}]}]}]},{type:b,value:c},{type:a,tag:r,props:{},children:[]},{type:b,value:c},{type:a,tag:k,props:{id:"5レポジトリを作成する"},children:[{type:a,tag:j,props:{href:"#5%E3%83%AC%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B",ariaHidden:l,tabIndex:m},children:[{type:a,tag:n,props:{className:[o,p]},children:[]}]},{type:b,value:"5.レポジトリを作成する"}]},{type:b,value:c},{type:a,tag:t,props:{},children:[{type:b,value:c},{type:a,tag:s,props:{},children:[{type:b,value:w}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:x,props:{},children:[{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"$ heroku create 任意のアプリ名"}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ heroku create toolbox-kanban\nCreating ⬢ toolbox-kanban... done\nhttps:\u002F\u002Ftoolbox-kanban.herokuapp.com\u002F │ https:\u002F\u002Fgit.heroku.com\u002Ftoolbox-kanban.git\n\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{style:y},children:[]},{type:a,tag:r,props:{},children:[]},{type:b,value:c},{type:a,tag:k,props:{id:"6-アプリの情報を設定する"},children:[{type:a,tag:j,props:{href:"#6-%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E6%83%85%E5%A0%B1%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B",ariaHidden:l,tabIndex:m},children:[{type:a,tag:n,props:{className:[o,p]},children:[]}]},{type:b,value:"6. アプリの情報を設定する"}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ heroku config:set APP_KEY=$(php artisan key:generate --show)\n"}]}]}]},{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"上記のコマンドが効かない場合は予め、php artisan key:generate --showでアプリキーを取得して、heroku config:set APP_KEY=\u003Cアプリキー\u003Eのコマンドを打つこと。"}]},{type:b,value:c},{type:a,tag:d,props:{style:y},children:[]},{type:a,tag:r,props:{},children:[]},{type:b,value:c},{type:a,tag:k,props:{id:"7-herokuサーバーにpush"},children:[{type:a,tag:j,props:{href:"#7-heroku%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%ABpush",ariaHidden:l,tabIndex:m},children:[{type:a,tag:n,props:{className:[o,p]},children:[]}]},{type:b,value:"7. herokuサーバーにpush"}]},{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"①　既にアプリが出来上がっている場合\r\n（Gitも使っている状態）"}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ heroku git:remote -a Herokuアプリの名前\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:z}]}]}]},{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"【注意】　開発ブランチ（develop）をherokuのmasterブランチにpushする場合"}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ git push heroku develop:master\n"}]}]}]},{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"②　これからアプリを作る場合(リポジトリ新規作成の場合)"}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ git init \n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ heroku git:remote -a Herokuアプリの名前 \n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ git add .\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:"$ git commit -m \"the first commit\"\n"}]}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:f,props:{className:[g,h]},children:[{type:a,tag:i,props:{},children:[{type:b,value:z}]}]}]},{type:b,value:c},{type:a,tag:r,props:{},children:[]},{type:b,value:c},{type:a,tag:k,props:{id:"8-おわりに"},children:[{type:a,tag:j,props:{href:"#8-%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",ariaHidden:l,tabIndex:m},children:[{type:a,tag:n,props:{className:[o,p]},children:[]}]},{type:b,value:"8. おわりに"}]},{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"procfileの用意とアプリキーの設定は漏れているとデプロイしても、上手く表示できないっぽい。気を付けないと。"}]}]},dir:"\u002Fblog\u002Flaravel",path:"\u002Fblog\u002Flaravel\u002F901_Heroku_laravel",extension:".md"},navigation:"blog\u002Flaravel",dirParam:"laravel"}],fetch:{},mutations:[]}}("element","text","\n","div","nuxt-content-highlight","pre","language-text","line-numbers","code","a","h1","true",-1,"span","icon","icon-link","p","br","li","ul","2021-10-28T00:00:00.000Z","https:\u002F\u002Fdevcenter.heroku.com\u002Fja\u002Farticles\u002Fheroku-cli#download-and-install","コマンドをたたく場所はプロジェクトディレクトリ","blockquote","page-break-before:always","$ git push heroku master\n")));