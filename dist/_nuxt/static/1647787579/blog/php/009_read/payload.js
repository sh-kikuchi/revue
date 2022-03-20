__NUXT_JSONP__("/blog/php/009_read", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am){return {data:[{content:{slug:"009_read",description:"PDOを用いたRead処理",title:"CRUDチュートリアル（読込）",category:M,createdAt:"2021-11-13T00:00:00.000Z",updatedAt:"2022-03-19T00:00:00.000Z",sortNumber:9,toc:[],body:{type:"root",children:[{type:b,tag:C,props:{id:"1-はじめに"},children:[{type:b,tag:t,props:{ariaHidden:D,href:"#1-%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:"1. はじめに"}]},{type:a,value:i},{type:b,tag:s,props:{},children:[{type:a,value:"CRUDの「R」、Read（読込・表示）の処理を整理する。"}]},{type:a,value:i},{type:b,tag:o,props:{className:[H]},children:[{type:b,tag:I,props:{className:[J,U]},children:[{type:b,tag:K,props:{},children:[{type:a,value:"プロジェクトディレクトリ\n│\n│── crud_tutorial\n│   │── crud\n│   │   │── create.php\n│   │   │── delete.php\n│   │   │── update.php\n│   │\n│   │── comment.php　←【今回、ココ】\n│   │── create_form.php\n│   │── update_form.php\n│\n│── database\n│   │── db_connect.php\n"}]}]}]},{type:a,value:i},{type:b,tag:N,props:{},children:[]},{type:a,value:i},{type:b,tag:C,props:{id:"2-commentphpを作ろうdb連携や操作部分"},children:[{type:b,tag:t,props:{ariaHidden:D,href:"#2-commentphp%E3%82%92%E4%BD%9C%E3%82%8D%E3%81%86db%E9%80%A3%E6%90%BA%E3%82%84%E6%93%8D%E4%BD%9C%E9%83%A8%E5%88%86",tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:"2. comment.phpを作ろう（DB連携や操作部分）"}]},{type:a,value:i},{type:b,tag:V,props:{},children:[{type:a,value:i},{type:b,tag:s,props:{},children:[{type:a,value:"comment.phpというファイルを作ったとしよう。\r\nそのファイルの最上行から下記のコードを記述していく。"}]},{type:a,value:i},{type:b,tag:W,props:{},children:[{type:a,value:i},{type:b,tag:y,props:{},children:[{type:a,value:"require_onceでDB接続用のdb_connect.phpを呼び出す。"}]},{type:a,value:i},{type:b,tag:y,props:{},children:[{type:a,value:"抽出したいデータをSQLで書く。"}]},{type:a,value:i},{type:b,tag:y,props:{},children:[{type:a,value:"SQL文をデータベースに対して発行"}]},{type:a,value:i}]},{type:a,value:i}]},{type:a,value:i},{type:b,tag:o,props:{className:[H]},children:[{type:b,tag:I,props:{className:[J,X]},children:[{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[d,M,X]},children:[{type:b,tag:c,props:{className:[d,Y,Z]},children:[{type:a,value:"\u003C?php"}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:_}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,O,$]},children:[{type:a,value:"'..\u002Ffragile\u002Findex.php'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:_}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,O,$]},children:[{type:a,value:"'..\u002Fdatabase\u002Fdb_connect.php'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:aa}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:"db_connect"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:"\n\n    "},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"try"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:"\u002F\u002FSQL文"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:ad}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,O,"double-quoted-string"]},children:[{type:a,value:"\"select * from comments order by updated_at desc;\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:"\u002F\u002FPDOのquery機能"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"$comments"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"-\u003E"}]},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:"query"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"catch"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,"class-name","class-name-fully-qualified"]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\\"}]},{type:a,value:"Exception"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"$e"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:"\n      "},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"return"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"constant","boolean"]},children:[{type:a,value:"false"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,Y,Z]},children:[{type:a,value:"?\u003E"}]}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:N,props:{},children:[]},{type:a,value:i},{type:b,tag:C,props:{id:"3commentphpを作ろうui部分"},children:[{type:b,tag:t,props:{ariaHidden:D,href:"#3commentphp%E3%82%92%E4%BD%9C%E3%82%8D%E3%81%86ui%E9%83%A8%E5%88%86",tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:"3.comment.phpを作ろう（UI部分）"}]},{type:a,value:i},{type:b,tag:V,props:{},children:[{type:a,value:i},{type:b,tag:s,props:{},children:[{type:a,value:"comment.phpの続きでし。\r\nそのファイルの最上行から下記のコードを記述していきます。"}]},{type:a,value:i},{type:b,tag:W,props:{},children:[{type:a,value:i},{type:b,tag:y,props:{},children:[{type:a,value:"foreach文でDBのデータが入った$commentsを【表示】させていく。"}]},{type:a,value:i},{type:b,tag:y,props:{},children:[{type:a,value:"htmlspecialchars関数でXSS対策をする。"}]},{type:a,value:i}]},{type:a,value:i}]},{type:a,value:i},{type:b,tag:o,props:{className:[H]},children:[{type:b,tag:I,props:{className:[J,U]},children:[{type:b,tag:K,props:{},children:[{type:a,value:" [詳しくはこちら](https:\u002F\u002Ftech-lab.sios.jp\u002Farchives\u002F21780)\n"}]}]}]},{type:a,value:i},{type:b,tag:o,props:{className:[H]},children:[{type:b,tag:I,props:{className:[J,"language-html"]},children:[{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:"\u003C!-- 下記は\u003Cbody\u003Eタグの中身 --\u003E"}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"crud-container"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"crud-title"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"コメント一覧"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"crud-create"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"..\u002Fcrud_tutorial\u002Fcreate_form.php"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"コメントを追加する"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\u003C?php foreach ($comments as $comment){?\u003E"}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"crud-card"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"crud-card-updated_at"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\u003C?php echo h($comment[\"updated_at\"]);?\u003E"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ah}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"crud-card-title"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\u003C?php echo h($comment[\"title\"]);?\u003E"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"crud-card-description"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\u003C?php echo h($comment[\"comment\"]);?\u003E"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n\n        "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"crud-card-detail"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"crud-edit"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"..\u002Fcrud_tutorial\u002Fupdate_form.php?id=\u003C?php echo $comment["},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"id\"];"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\"\u003E編集"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n         "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aj}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"method"}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"POST"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"action"}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"..\u002Fcrud_tutorial\u002Fcrud\u002Fdelete.php"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n                  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"input"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"hidden"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"crud-form-input"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"value"}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\u003C?php echo h($comment["},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"id\"]);"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\"\u003E\n                  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:am}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"type"}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"submit"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e,n]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"crud-delete"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"削除"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"\u003C?php }?\u003E"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:N,props:{},children:[]},{type:a,value:i},{type:b,tag:C,props:{id:"4-おわりに"},children:[{type:b,tag:t,props:{ariaHidden:D,href:"#4-%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:"4. おわりに"}]},{type:a,value:i},{type:b,tag:s,props:{},children:[{type:a,value:"追加した項目をリストで表示出来るようになったので、編集と削除は現状出来ないのでこれから実装してみようと。"}]}]},dir:"\u002Fblog\u002Fphp",path:"\u002Fblog\u002Fphp\u002F009_read",extension:".md"},navigation:"blog\u002Fphp",dirParam:M}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","tag","\""," ","\n","\u003E","attr-name","=","attr-value","attr-equals","div","\u003C","\u003C\u002F","class","p","a","\n    ","\n        ",";","variable","li","\n  ","keyword","prolog","h1","true",-1,"icon","icon-link","nuxt-content-highlight","pre","line-numbers","code","operator","php","br","string","(",")","comment","\n          ","\n              ","language-text","blockquote","ol","language-php","delimiter","important","require_once","single-quoted-string","$pdo","function","{","$sql","  ","}","href","h3","?","form","name","id","button")));