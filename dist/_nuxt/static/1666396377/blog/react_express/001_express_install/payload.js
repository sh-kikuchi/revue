__NUXT_JSONP__("/blog/react_express/001_express_install", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba){return {data:[{content:{slug:"001_express_install",description:"React×Express×TypeScript",title:"Expressのインストール",category:"Laravel",createdAt:ao,updatedAt:ao,sortNumber:1,toc:[{id:ap,depth:P,text:ab},{id:aq,depth:P,text:ac},{id:ar,depth:P,text:ad},{id:as,depth:P,text:ae}],body:{type:"root",children:[{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:x,props:{},children:[{type:b,tag:o,props:{href:at},children:[{type:a,value:au}]}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:b,tag:o,props:{href:av},children:[{type:a,value:aw}]},{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:x,props:{},children:[{type:b,tag:o,props:{href:ax},children:[{type:a,value:ab}]}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:b,tag:o,props:{href:ay},children:[{type:a,value:ac}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:b,tag:o,props:{href:az},children:[{type:a,value:aA}]},{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:x,props:{},children:[{type:b,tag:o,props:{href:aB},children:[{type:a,value:ad}]}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:b,tag:o,props:{href:aC},children:[{type:a,value:ae}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:b,tag:o,props:{href:aD},children:[{type:a,value:aE}]}]},{type:a,value:f}]},{type:a,value:f},{type:a,value:f},{type:b,tag:R,props:{id:"1-はじめに"},children:[{type:b,tag:o,props:{href:at,ariaHidden:y,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:au}]},{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:"しごとがうまくいかない。そんな時は軽い気持ちでプログラミングをやってみようではないか。2022年9月に現場で使っているReactとSpringbootのうち、Reactのスキルだけを奪って、Express.jsと連携させてみる。"}]},{type:a,value:f},{type:b,tag:H,props:{},children:[]},{type:a,value:f},{type:b,tag:R,props:{id:"2-各種インストール"},children:[{type:b,tag:o,props:{href:av,ariaHidden:y,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:aw}]},{type:a,value:f},{type:b,tag:S,props:{id:ap},children:[{type:b,tag:o,props:{href:ax,ariaHidden:y,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:ab}]},{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:"下記のコマンドでExpress.jsをインストールする。"},{type:b,tag:z,props:{},children:[{type:a,value:af}]},{type:a,value:"はexpressの雛形のディレクトリ構成を提供してくれる。まあどうせ、普通にインストールした時は0からこつこつやらないとだし、雛形といっても変えることは出来るんだから使っておきましょうよと。"}]},{type:a,value:f},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,aF]},children:[{type:b,tag:z,props:{},children:[{type:a,value:"npm install express"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:a,value:"typescript\nnpx express"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:a,value:"typescript "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"プロジェクト名 (デフォルトはexpress-gen-ts)\""}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:"【ツリーはこんな感じ】"}]},{type:a,value:f},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,aH]},children:[{type:b,tag:z,props:{},children:[{type:a,value:"├─spec\n│  ├─support\n│  ├─tests\n│  └─types\n│      └─supertest\n└─src\n│   ├─models\n│   ├─pre-start\n│   │  └─env\n│   ├─public\n│   │  ├─scripts\n│   │  └─stylesheets\n│   ├─repos\n│   ├─routes\n│   ├─services\n│   ├─shared\n│   ├─types\n│   │  └─express\n│   ├─util\n│   └─views\n│\n│─build.ts\n│─package-lock.json\n│─package.json\n│─tsconfig.json\n│─tsconfig.prod.json\n"}]}]}]},{type:a,value:f},{type:b,tag:S,props:{id:aq},children:[{type:b,tag:o,props:{href:ay,ariaHidden:y,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:ac}]},{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:"こんなノリでテンプレートエンジンを用意しないってことある？"}]},{type:a,value:f},{type:b,tag:"blockquote",props:{},children:[{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:"Due to the heavy use of single-page-applications, no view-engine is configured by default."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:"→ SPAを多用するため、デフォルトでテンプレートエンジンはない。(Viewフォルダにはhtmlファイル)\r\n"},{type:b,tag:o,props:{href:aI,rel:[aJ,aK,aL],target:aM},children:[{type:a,value:af}]}]},{type:a,value:f},{type:b,tag:H,props:{},children:[]},{type:a,value:f},{type:b,tag:R,props:{id:"3-apiテストして見よう"},children:[{type:b,tag:o,props:{href:az,ariaHidden:y,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:aA}]},{type:a,value:f},{type:b,tag:S,props:{id:ar},children:[{type:b,tag:o,props:{href:aB,ariaHidden:y,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:ad}]},{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:"プロジェクトディレクトリ直下に"},{type:b,tag:z,props:{},children:[{type:a,value:"index.ts"}]},{type:a,value:"を作成して下記のようなコードを用意"}]},{type:a,value:f},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,aF]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"import"}]},{type:a,value:" express "},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"from"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'express'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:aN}]},{type:a,value:" app"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"Express "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ag}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"json"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"urlencoded"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:" extended"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:"\u002F\u002FCROS対応"}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aR},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:" next"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"NextFunction"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ak}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"Access-Control-Allow-Origin\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"http:\u002F\u002Flocalhost:3000\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'Content-Type'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'application\u002Fjson'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"Access-Control-Allow-Methods\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"GET, POST, PUT, PATCH, DELETE, OPTION\""}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"Access-Control-Allow-Headers\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"Content-Type, Authorization\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"next"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:"\u002F\u002Fexpressのportは3001にセット"}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"listen"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"3001"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ak}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:"console"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"Start on port 3001.\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"type"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"class-name"]},children:[{type:b,tag:c,props:{className:[d,al]},children:[{type:a,value:aS}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ag}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n  id"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:w}]},{type:a,value:"\n  name"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:k}]},{type:a,value:"\n  email"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:aN}]},{type:a,value:" users"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,al]},children:[{type:a,value:aS}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:an}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ag}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:aT}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aU}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aV}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aW}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aX}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aY}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aZ}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:a_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:a$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ba}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:an}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,aj]},children:[{type:a,value:"\u002F\u002F一覧取得"}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"get"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"'\u002Fusers'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aR},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ak}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"send"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,al]},children:[{type:a,value:"JSON"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"stringify"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"users"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:F}]}]}]},{type:a,value:f},{type:b,tag:H,props:{},children:[]},{type:a,value:f},{type:b,tag:S,props:{id:as},children:[{type:b,tag:o,props:{href:aC,ariaHidden:y,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:ae}]},{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:"さっきindex.tsでnode側のポートは3001にセットした。ファイル中に一覧取得のAPIも作った。さあ、テストの時。"}]},{type:a,value:f},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,aH]},children:[{type:b,tag:z,props:{},children:[{type:a,value:"\u002F\u002F一覧取得\napp.get('\u002Fusers', (req: express.Request, res: express.Response) =\u003E {\n  res.send(JSON.stringify(users))\n})\n"}]}]}]},{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:"postmanでGetメソッドにセットして下記のURLをSendする\r\n"},{type:b,tag:z,props:{},children:[{type:a,value:"http:\u002F\u002Flocalhost:3001\u002Fusers"}]}]},{type:a,value:f},{type:b,tag:H,props:{},children:[]},{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:"下記のレスポンスが出てくればOK"}]},{type:a,value:f},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,"language-json"]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:aT}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aU}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aV}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aW}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aX}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aY}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aZ}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:a_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:a$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ba}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:an}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:H,props:{},children:[]},{type:a,value:f},{type:b,tag:R,props:{id:"4-おわりに"},children:[{type:b,tag:o,props:{href:aD,ariaHidden:y,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:aE}]},{type:a,value:f},{type:b,tag:s,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"Parsing error: Cannot read file '~~~\\tsconfig.json'"}]},{type:a,value:"にうんざりするわ。ESLINTのエラーに引っかかる。面倒くさいので一旦無視（2022\u002F09\u002F14）。それはそうと、APIのテストが簡単に出来たことで少しばかりの自由を手に入れた。NEXTステップはDBの接続をしてみようかね。。"}]},{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:"参考"}]},{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:x,props:{},children:[{type:b,tag:o,props:{href:aI,rel:[aJ,aK,aL],target:aM},children:[{type:a,value:af}]}]},{type:a,value:f}]}]},dir:"\u002Fblog\u002Freact_express",path:"\u002Fblog\u002Freact_express\u002F001_express_install",extension:".md"},navigation:"blog\u002Freact_express",dirParam:"react_express"}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n"," ","operator",":",",","string",".","(",")","a","function","{","}","p","\n        ","property","\n    ","number","li","true","code",-1,"icon","icon-link","\n  "," express","\n\n",";","br","div","nuxt-content-highlight","pre","line-numbers","keyword","\napp","\n  res",3,"ul","h1","h3","-","setHeader","builtin"," id"," name"," email","2","\"id\"","\"name\"","\"email\"","■ expressのインストール(ジェネレータ使用)","■ テンプレートエンジンについて","■ index.tsを用意","■ postman","express-generator-typescript","=","express","use","comment","=\u003E","constant","[","]","2022-09-14T00:00:00.000Z","-expressのインストールジェネレータ使用","-テンプレートエンジンについて","-indextsを用意","-postman","#1-%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB","1. はじめに","#2-%E5%90%84%E7%A8%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB","2. 各種インストール","#-express%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF%E4%BD%BF%E7%94%A8","#-%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6","#3-api%E3%83%86%E3%82%B9%E3%83%88%E3%81%97%E3%81%A6%E8%A6%8B%E3%82%88%E3%81%86","3. APIテストして見よう","#-indexts%E3%82%92%E7%94%A8%E6%84%8F","#-postman","#4-%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB","4. おわりに","language-ts","generator","language-text","https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fexpress-generator-typescript","nofollow","noopener","noreferrer","_blank","const","req","Request"," res","Response","GLAY","1","\"TAKURO\"","\"takuro@test.jp\"","\"TERU\"","\"teru@test.jp\"","\"HISASHI\"","\"hisashi@test.jp\"","3","\"JIRO\"","\"jiro@test.jp\"")));