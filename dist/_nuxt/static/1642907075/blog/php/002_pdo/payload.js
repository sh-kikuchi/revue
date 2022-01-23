__NUXT_JSONP__("/blog/php/002_pdo", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI){return {data:[{content:{slug:"002_pdo",description:"PDOを利用したDB連携",title:"PHPとMySQLを連携しよう",category:R,createdAt:ae,updatedAt:ae,sortNumber:2,toc:[{id:af,depth:S,text:ag},{id:ah,depth:S,text:ai},{id:aj,depth:S,text:ak}],body:{type:"root",children:[{type:b,tag:T,props:{id:"1-はじめに"},children:[{type:b,tag:E,props:{ariaHidden:F,href:"#1-%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:"1. はじめに"}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"PHPとMySQLの連携方法についてまとめました。\r\n接続が出来ればCRUD（表示・追加・更新・削除）操作が可能となり、アプリ制作の幅も広がることでしょう。"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[]},{type:a,value:f},{type:b,tag:T,props:{id:"2データベースと連携しよう"},children:[{type:b,tag:E,props:{ariaHidden:F,href:"#2%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E3%81%A8%E9%80%A3%E6%90%BA%E3%81%97%E3%82%88%E3%81%86",tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:"2.データベースと連携しよう"}]},{type:a,value:f},{type:b,tag:U,props:{id:af},children:[{type:b,tag:E,props:{ariaHidden:F,href:"#pdo%E3%81%A8%E3%81%AF",tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:ag}]},{type:a,value:f},{type:b,tag:V,props:{},children:[{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"PDOはPHP Data Objectの略で、PHP標準（5.1.0以降）のデータベース接続クラスのこと。"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:k,props:{},children:[]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"■ PHPとMySQLの連携（database.php）"}]},{type:a,value:f},{type:b,tag:W,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[K,Z]},children:[{type:b,tag:_,props:{},children:[{type:b,tag:c,props:{className:[d,R,K]},children:[{type:b,tag:c,props:{className:[d,al,am]},children:[{type:a,value:"\u003C?php"}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:$}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n,r]},children:[{type:a,value:"\"localhost\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n,r]},children:[{type:a,value:"\"heiten\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"\u002F\u002Fデータソース名"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,n,r]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,n,r]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,n,r]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n,r]},children:[{type:a,value:"\"root\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n,r]},children:[{type:a,value:"\"\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:as}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:at}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:aw}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"\u002F\u002F \u002F\u002FSQLインジェクション対策"}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"\u002F\u002F $pdo-\u003EsetAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, false);"}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:aA}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:aC}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n,aD]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,al,am]},children:[{type:a,value:"?\u003E"}]}]},{type:a,value:L}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[]},{type:a,value:f},{type:b,tag:U,props:{id:ah},children:[{type:b,tag:E,props:{ariaHidden:F,href:"#%E5%AE%9A%E6%95%B0%E3%81%A7db%E6%8E%A5%E7%B6%9A%E5%85%88%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%82%92%E3%81%97%E3%82%88%E3%81%86",tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:ai}]},{type:a,value:f},{type:b,tag:aH,props:{},children:[]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"【DB_HOST定数】mysqlがある場所"},{type:b,tag:k,props:{},children:[]},{type:a,value:"\r\n【DB_NAME定数】使用するデータベースの名前"},{type:b,tag:k,props:{},children:[]},{type:a,value:"\r\n【DB_USER定数】mysqlにつながるユーザ名"},{type:b,tag:k,props:{},children:[]},{type:a,value:"\r\n【DB_PASS定数】mysqlにつながるパスワード"},{type:b,tag:k,props:{},children:[]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[]},{type:a,value:f},{type:b,tag:U,props:{id:aj},children:[{type:b,tag:E,props:{ariaHidden:F,href:"#db%E9%80%A3%E6%90%BA%E3%81%AB%E5%BF%85%E8%A6%81%E3%81%AA%E5%AE%9A%E6%95%B0%E3%82%92%E5%9F%BA%E3%81%ABpdo%E8%A8%AD%E5%AE%9A%E3%81%97%E3%82%88%E3%81%86",tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:ak}]},{type:a,value:f},{type:b,tag:aH,props:{},children:[]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"① データソース名(Data Source Name)"},{type:b,tag:k,props:{},children:[]}]},{type:a,value:f},{type:b,tag:V,props:{},children:[{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"データベースに接続するために必要な情報。"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:b,tag:k,props:{},children:[]},{type:a,value:"ここでは以下の3点を設定します。"}]},{type:a,value:f},{type:b,tag:"ol",props:{},children:[{type:a,value:f},{type:b,tag:ad,props:{},children:[{type:a,value:"ホスト名"}]},{type:a,value:f},{type:b,tag:ad,props:{},children:[{type:a,value:"データベース名"}]},{type:a,value:f},{type:b,tag:ad,props:{},children:[{type:a,value:"文字コード"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:W,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[K,Z]},children:[{type:b,tag:_,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,n,r]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,n,r]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,n,r]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"② PDO (PHP Data Object)"},{type:b,tag:k,props:{},children:[]},{type:a,value:"\r\n★ Point"}]},{type:a,value:f},{type:b,tag:V,props:{},children:[{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"PDO::__construct メソッドでインスタンスを生成している。"},{type:b,tag:k,props:{},children:[]},{type:a,value:"setAttributeはデータベースを操作するために使われるハンドル！"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:W,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[K,Z]},children:[{type:b,tag:_,props:{},children:[{type:a,value:"  "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:as}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:at}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:aw}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"\u002F\u002FSQLインジェクション対策"}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"ATTR_DEFAULT_FETCH_MODE"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,"boolean"]},children:[{type:a,value:"false"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n\n "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:aA}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:aC}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n,aD]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[]},{type:a,value:f},{type:b,tag:T,props:{id:"3-おわりに"},children:[{type:b,tag:E,props:{ariaHidden:F,href:"#3-%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:"3. おわりに"}]},{type:a,value:f},{type:b,tag:q,props:{},children:[{type:a,value:"DB連携ファイルはDB操作をしたいPHPファイルに読み込んだりするものなので、結構影響力のあるやつです。連携するためにしっかり設定することが大事です。"}]}]},dir:"\u002Fblog\u002Fphp",path:"\u002Fblog\u002Fphp\u002F002_pdo",extension:".md"},navigation:"blog\u002Fphp",dirParam:R}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n"," ","variable","operator",";","br","(",")","string","PDO",",","p","double-quoted-string","keyword","constant","scope","::","=","comment",".","\n    ","$pdo","-\u003E","function","\n   ","a","true",-1,"icon","icon-link","setAttribute","language-php","\n\n","$dsn","{","class-name","}","$e","php",3,"h1","h3","blockquote","div","nuxt-content-highlight","pre","line-numbers","code","$db_host","$db_name","$user","$password","li","2021-11-08T00:00:00.000Z","pdoとは","PDOとは？","定数でdb接続先の設定をしよう","定数でDB接続先の設定をしよう","db連携に必要な定数を基にpdo設定しよう","DB連携に必要な定数を基にPDO設定しよう","delimiter","important","\"mysql:host=\"","\";dbname=\"","\";charset=utf8mb4\"","\n\n  ","try","new","\u002F\u002Fエラーのモードを決める","ATTR_ERRMODE","ERRMODE_EXCEPTION","\u002F\u002F配列を必ず、キーとバリューで返す。","ATTR_EMULATE_PREPARES","FETCH_ASSOC","catch","PDOException","\n      ","echo","single-quoted-string","'接続失敗です'","getmessage","exit","hr","\n     ")));