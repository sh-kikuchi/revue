__NUXT_JSONP__("/blog/laravel/%E2%99%AF005_read", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar){return {data:[{content:{slug:"♯005_read",description:"ビュー表示の実装",title:"CRUD_Read",category:"Laravel",createdAt:"2021-11-15T00:00:00.000Z",updatedAt:"2021-11-21T00:00:00.000Z",sortNumber:5,toc:[{id:U,depth:2,text:V},{id:y,depth:W,text:y},{id:X,depth:W,text:Y}],body:{type:"root",children:[{type:b,tag:E,props:{id:U},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#db%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E8%A1%A8%E7%A4%BA%E3%81%97%E3%82%88%E3%81%86read",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:V}]},{type:a,value:f},{type:b,tag:Z,props:{id:y},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#%E3%83%93%E3%83%A5%E3%83%BC%E3%81%AE%E4%BD%9C%E6%88%90",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:y}]},{type:a,value:f},{type:b,tag:_,props:{},children:[]},{type:a,value:f},{type:b,tag:K,props:{},children:[{type:a,value:"（準備） views直下に「note」フォルダを作成（"},{type:b,tag:q,props:{},children:[{type:a,value:$}]},{type:a,value:"）"},{type:b,tag:aa,props:{},children:[]},{type:a,value:"\r\n　※下記コードではBootstrapを使用してます。"}]},{type:a,value:f},{type:b,tag:l,props:{className:[ab]},children:[{type:b,tag:ac,props:{className:[ad,"language-html"]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"ひとりごと"},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,e,N]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"pl-4"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"使い方は自由。todoリストやメモなどにお役立て下さい。"},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n@foreach($notes as $note)\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,e,N]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"media shadow-sm p-3 mb-1 bg-white rounded"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,e,N]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"media-body px-1 text-break"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        {{ $note -\u003E note }}\n    "},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n@endforeach\n"}]}]}]},{type:a,value:f},{type:b,tag:Z,props:{id:X},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#notecontroller%E5%86%85%E3%81%A7%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%82%92%E7%B7%A8%E9%9B%86",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:Y}]},{type:a,value:f},{type:b,tag:_,props:{},children:[]},{type:a,value:f},{type:b,tag:aa,props:{},children:[]},{type:a,value:f},{type:b,tag:"blockquote",props:{},children:[{type:a,value:f},{type:b,tag:K,props:{},children:[{type:a,value:"変数"},{type:b,tag:q,props:{},children:[{type:a,value:O}]},{type:a,value:"を設定し、eloquentを使ってDB抽出を行う。\r\nそれから"},{type:b,tag:q,props:{},children:[{type:a,value:"return view"}]},{type:a,value:"でビューの指定先と変数を指定する。"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{className:[ab]},children:[{type:b,tag:ac,props:{className:[ad,af]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,"php",af]},children:[{type:b,tag:c,props:{className:[d,"delimiter","important"]},children:[{type:a,value:"\u003C?php"}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"namespace"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"Controllers"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"\u002F\u002Fログイン権限"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:P}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ai},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"Support"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"Facades"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"\u002F\u002FNoteというmodelファイル使用"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:P}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:" \n"},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"\u002F\u002Fpost送信使う時はRequestもuseする"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:P}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ai},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"Request"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:" \n\n"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"class-name-definition",al]},children:[{type:a,value:"NoteController"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"extends"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,al]},children:[{type:a,value:"Controller"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"\u002F\u002Fログイン権限がある時のみ"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:am}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,an,k]},children:[{type:a,value:"__construct"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,"this"]},children:[{type:a,value:"$this"}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"middleware"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,u,v]},children:[{type:a,value:"'auth'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:"\n    \n    "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:am}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,an,k]},children:[{type:a,value:"show"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,ao]},children:[{type:a,value:O}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:ak},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aq}]}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"where"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,u,v]},children:[{type:a,value:"'user_id'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aq}]}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"User"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,"property"]},children:[{type:a,value:"id"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"orderBy"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,u,v]},children:[{type:a,value:"'updated_at'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,u,v]},children:[{type:a,value:"'desc'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"get"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"return"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"view"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,u,v]},children:[{type:a,value:"'note.show'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,u,v]},children:[{type:a,value:"'notes'"}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"=\u003E"}]},{type:b,tag:c,props:{className:[d,ao]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:f}]}]}]}]},{type:a,value:f},{type:b,tag:K,props:{},children:[{type:a,value:"※ return view~はnoteフォルダの"},{type:b,tag:q,props:{},children:[{type:a,value:$}]},{type:a,value:"というビューファイルを返すよという意味。"}]}]},dir:"\u002Fblog\u002Flaravel",path:"\u002Fblog\u002Flaravel\u002F♯005_read",extension:".md"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n","tag"," ","keyword","\u003E","function","div","\\","(",")",";","code","\"","\n    ","operator","string","single-quoted-string","\u003C","\u003C\u002F","ビューの作成","class","=","package","comment","-\u003E","h2","a","true",-1,"icon","icon-link","p","attr-name","attr-value","attr-equals","$notes","use","{","\n        ","}",",","dbのデータを表示しようread","DBのデータを表示しよう（READ）",3,"notecontroller内で表示するメソッドを編集","NoteController内で「表示」するメソッドを編集","h3","hr","show.blade.php","br","nuxt-content-highlight","pre","line-numbers","h5","language-php","App","Http","Illuminate","Auth","Note","class-name","public","function-definition","variable","scope","::","\n         ")));