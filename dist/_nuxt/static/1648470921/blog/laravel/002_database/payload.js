__NUXT_JSONP__("/blog/laravel/002_database", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM){return {data:[{content:{slug:"002_database",description:"DB設計をしよう",title:"マイグレーション",category:"Laravel",createdAt:ax,updatedAt:ax,sortNumber:ay,toc:[{id:W,depth:ay,text:W},{id:X,depth:Y,text:X},{id:Z,depth:Y,text:Z},{id:_,depth:Y,text:_},{id:$,depth:Y,text:$}],body:{type:"root",children:[{type:b,tag:"h2",props:{id:W},children:[{type:b,tag:G,props:{href:"#%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AE%E6%BA%96%E5%82%99",ariaHidden:N,tabIndex:O},children:[{type:b,tag:c,props:{className:[P,Q]},children:[]}]},{type:a,value:W}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:b,tag:G,props:{href:"https:\u002F\u002Freadouble.com\u002Flaravel\u002F8.x\u002Fja\u002Feloquent.html",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Laravel8レファレンス"}]}]},{type:a,value:g},{type:b,tag:aa,props:{id:X},children:[{type:b,tag:G,props:{href:"#%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%8F%96%E5%BE%97",ariaHidden:N,tabIndex:O},children:[{type:b,tag:c,props:{className:[P,Q]},children:[]}]},{type:a,value:X}]},{type:a,value:g},{type:b,tag:ab,props:{},children:[{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"モデルとマイグレーション、ファクトリ、シーダ、ポリシー、コントローラ、フォームリクエストを生成する短縮形"},{type:b,tag:R,props:{},children:[]}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,S]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"\u003E php artisan make:model Note --all\n"}]}]}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"下記のようなものが返ればOK"}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,S]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"Model created successfully.\nFactory created successfully.\nCreated Migration: 2021_11_21_052334_create_notes_table\nSeeder created successfully.\nRequest created successfully.\nController created successfully.\nPolicy created successfully.\n"}]}]}]},{type:a,value:g},{type:b,tag:aa,props:{id:Z},children:[{type:b,tag:G,props:{href:"#%E3%83%9E%E3%82%A4%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB",ariaHidden:N,tabIndex:O},children:[{type:b,tag:c,props:{className:[P,Q]},children:[]}]},{type:a,value:Z}]},{type:a,value:g},{type:b,tag:al,props:{},children:[]},{type:a,value:g},{type:b,tag:R,props:{},children:[]},{type:a,value:g},{type:b,tag:ab,props:{},children:[{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"database\u003Emigrations\u003E2021_11_21_052334_create_notes_table"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,H]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,J,h]},children:[{type:a,value:"up"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,K,an]},children:[{type:a,value:"Blueprint"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"bigIncrements"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"BigInteger"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"unsigned"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"nullable"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"foreign"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"references"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"on"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:"'users'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"onDelete"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:"'cascade'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,l,an]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"timestamps"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,J,h]},children:[{type:a,value:"down"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"dropIfExists"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"※users主キーのデータ型がBigIntで指定されているならば、notesの外部キーである"},{type:b,tag:t,props:{},children:[{type:a,value:"user_id"}]},{type:a,value:"もBigIntに合わせる必要がある。外部キーを設定した時は、外部キーの参照先のテーブルが先にマイグレーションしていないとエラーになる。"}]},{type:a,value:g},{type:b,tag:R,props:{},children:[]},{type:a,value:g},{type:b,tag:aa,props:{id:_},children:[{type:b,tag:G,props:{href:"#%E3%83%80%E3%83%9F%E3%83%BC%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E5%85%A5%E3%82%8C%E3%82%8B",ariaHidden:N,tabIndex:O},children:[{type:b,tag:c,props:{className:[P,Q]},children:[]}]},{type:a,value:_}]},{type:a,value:g},{type:b,tag:al,props:{},children:[]},{type:a,value:g},{type:b,tag:R,props:{},children:[]},{type:a,value:g},{type:b,tag:ab,props:{},children:[{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"ログイン実装時（Laravel\u002Fui）にusersテーブルの方は予めファクトリーファイル（ダミーデータをつくるためのファイル）が用意されてますね。万一ない場合は下記のコマンドを打つと作れます。"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,S]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"php artisan make:factory UserFactory\n"}]}]}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"ではLaravel\u002Fuiの時に生成されたUserFactory.phpをみてみましょう。"}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,H]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,J,h]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:"'name'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ae,l]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"name"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:"'email'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ae,l]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"unique"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"safeEmail"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:aD}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"now"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:"'password'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:"'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC\u002F.og\u002Fat2.uheWG\u002Figi'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:"'remember_token'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:"Str"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"random"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,J,h]},children:[{type:a,value:"unverified"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ae,l]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"state"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,l,"type-hint"]},children:[{type:a,value:"array"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"$attributes"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:aD}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"constant"]},children:[{type:a,value:"null"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:ab,props:{},children:[{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"php artisan make:model Note --allで生成されたNoteFactory.phpも下記のように編集する。"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,H]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:c,props:{className:[d,"php",H]},children:[{type:b,tag:c,props:{className:[d,"delimiter","important"]},children:[{type:a,value:"\u003C?php"}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"namespace"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:as}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:"Illuminate"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"Eloquent"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:as}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aH]},children:[{type:a,value:"\u002F\u002Fnotesテーブル参照"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:as}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aH]},children:[{type:a,value:"\u002F\u002Fusersテーブル参照"}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aI}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"class-name-definition",K]},children:[{type:a,value:"NoteFactory"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"extends"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:aG}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,J,h]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:au},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,ae,l]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aK}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"25"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:M}]}]}]}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"※Laravel8より前の場合（実証は6.x）"}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,H]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"$factory"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"define"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:at},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aI}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,K,an]},children:[{type:a,value:"Faker"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"numberBetween"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"$min"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"$max"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:ao}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aK}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"150"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"$indexSize"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"5"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"Factoryファイルの中身が編集出来たら、"},{type:b,tag:t,props:{},children:[{type:a,value:"DatabaseSeeder.php"}]},{type:a,value:"というファイルに下記の書けばダミーデータの生成を「実行」してくれます。（各テーブル10個作っちゃおう。）"}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,H]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,J,h]},children:[{type:a,value:"run"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,K,aL,aM]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:au}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,K,aL,aM]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:at}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:R,props:{},children:[]},{type:a,value:g},{type:b,tag:aa,props:{id:$},children:[{type:b,tag:G,props:{href:"#%E3%83%9E%E3%82%A4%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E5%AE%9F%E8%A1%8C",ariaHidden:N,tabIndex:O},children:[{type:b,tag:c,props:{className:[P,Q]},children:[]}]},{type:a,value:$}]},{type:a,value:g},{type:b,tag:al,props:{},children:[]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"今回はダミーデータを生成しているので、"},{type:b,tag:t,props:{},children:[{type:a,value:"--seed"}]},{type:a,value:"をつけている。"}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,S]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"php artisan migrate --seed\n"}]}]}]},{type:a,value:g},{type:b,tag:w,props:{},children:[{type:a,value:"1からマイグレーションし直す場合は下記のように"},{type:b,tag:t,props:{},children:[{type:a,value:"fresh"}]},{type:a,value:"をつける"}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,S]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"php artisan migrate:fresh --seed\n"}]}]}]}]},dir:"\u002Fblog\u002Flaravel",path:"\u002Fblog\u002Flaravel\u002F002_database",extension:".md"},navigation:"blog\u002Flaravel",dirParam:"laravel"}],fetch:{},mutations:[]}}("text","element","span","token","punctuation"," ","\n","function","operator","(",")","keyword","-\u003E","string","single-quoted-string",";","variable","\n        ","\\","code","\n    ",",","p","div","nuxt-content-highlight","pre","line-numbers","{","}","=\u003E","number","::","a","language-php","public","function-definition","class-name","$table","\n\n","true",-1,"icon","icon-link","br","language-text","scope","return","=","データベースの準備","ファイル取得",3,"マイグレーションファイル","ダミーデータを入れる","マイグレーション実行","h3","blockquote","'user_id'","[","this","$this","10","]","package","App","Models","hr","create","type-declaration","'note'","property","faker","\n            ","use","Note","User","factory","$faker","2021-11-18T00:00:00.000Z",2,"Schema","'notes'","'id'","definition","'email_verified_at'","Database","Factories","Factory","comment","class","realText","$maxNbChars","class-name-fully-qualified","static-context")));