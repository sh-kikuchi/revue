__NUXT_JSONP__("/blog/php/001_mysql", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){return {data:[{content:{slug:"001_mysql",description:"DB操作の基本",title:"MySQLでDB接続",category:t,createdAt:u,updatedAt:u,sortNumber:1,toc:[{id:v,depth:3,text:w}],body:{type:"root",children:[{type:b,tag:s,props:{id:"1-はじめに"},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#1-%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:"1. はじめに"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"PHPはデータベースの操作を得意とします。MySQLとの親和性が高く、DBのデータ表示、追加、更新、削除が出来ます。今回は"},{type:b,tag:e,props:{},children:[{type:a,value:"tests"}]},{type:a,value:"というデータベース（以下、DB）を作って、その中に"},{type:b,tag:e,props:{},children:[{type:a,value:"comments"}]},{type:a,value:"というテーブルを作ってみましょう。このDBを利用してコメント一覧を使っていきます。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[]},{type:a,value:c},{type:b,tag:s,props:{id:"2-mysqlにおけるデータベース接続"},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#2-mysql%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E6%8E%A5%E7%B6%9A",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:"2. MySQLにおけるデータベース接続"}]},{type:a,value:c},{type:b,tag:"h3",props:{id:v},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#-mysql%E8%A8%AD%E5%AE%9Abr",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:w},{type:b,tag:f,props:{},children:[]}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"XAMPPがあるディレクトリまで移動"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"cd \u002Fxampp\u002Fmysql\u002Fbin\n"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"MySQLにログイン"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"mysql -u ユーザー名 -p password：←なにも入れずにEnter"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"mysql -u root -p\n"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"データベースを作る。"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"create database tests default charset utf8;\n"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"テーブルをつくる。"},{type:b,tag:f,props:{},children:[]}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"例）commentsテーブル"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"CREATE TABLE `comments` ( \n  `id` INT NOT NULL AUTO_INCREMENT \n  , `name` VARCHAR(50) NOT NULL \n  , `title` VARCHAR(50) NOT NULL \n  , `comment` VARCHAR(191) NOT NULL \n  , `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP \n  , `updated_at` DATETIME on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP \n  , PRIMARY KEY (`id`)) ENGINE = InnoDB;\n"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"テーブルにデータを入れる"},{type:b,tag:f,props:{},children:[]}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"INSERT INTO `comments` (`name`, `title`, `comment`, `created_at`, `updated_at`) VALUES ('JEDI', 'Force Awakens', 'May the force be with you.', current_timestamp(), current_timestamp());\n"}]}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[]},{type:a,value:c},{type:b,tag:s,props:{id:"3おわりに"},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#3%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:"3.おわりに"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"PHPに入る前にMySQLのDBの設定やテーブルの作るという準備で終わってしまいました。。が、次回はPHPと連携するにはどうすれば良いかを見ていきます。"}]}]},dir:"\u002Fblog\u002Fphp",path:"\u002Fblog\u002Fphp\u002F001_mysql",extension:".md"},navigation:"blog\u002Fphp",dirParam:t}],fetch:{},mutations:[]}}("text","element","\n","p","code","br","li","div","nuxt-content-highlight","pre","language-text","line-numbers","a","true",-1,"span","icon","icon-link","h1","php","2021-11-14T00:00:00.000Z","-mysql設定br","■ MySQL設定","blockquote")));