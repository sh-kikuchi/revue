__NUXT_JSONP__("/blog/nuxt_vue/103_nuxt-content", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au){return {data:[{content:{slug:"103_nuxt-content",description:"記事一覧作る",title:"【解体新書】Nuxt.jsでテックブログを作ろう3",category:"Nuxt.js",createdAt:"2021-11-25T00:00:00.000Z",updatedAt:"2022-01-08T00:00:00.000Z",sortNumber:103,toc:[{id:U,depth:ad,text:U},{id:V,depth:ad,text:V}],body:{type:"root",children:[{type:b,tag:Z,props:{id:"1-はじめに"},children:[{type:b,tag:L,props:{ariaHidden:M,href:"#1-%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:"1. はじめに"}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"ブログの記事を読み込んで、「記事一覧」を作ります。"},{type:b,tag:B,props:{},children:[]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"content"}]},{type:a,value:"フォルダ＞"},{type:b,tag:h,props:{},children:[{type:a,value:"blog"}]},{type:a,value:"フォルダの中に言語ごとのフォルダを用意し、各々記事を格納していることが前提となっております。"}]},{type:a,value:f},{type:b,tag:B,props:{},children:[]},{type:a,value:f},{type:b,tag:Z,props:{id:"2-indexvueを作成"},children:[{type:b,tag:L,props:{ariaHidden:M,href:"#2-indexvue%E3%82%92%E4%BD%9C%E6%88%90",tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:"2. "},{type:b,tag:h,props:{},children:[{type:a,value:Q}]},{type:a,value:"を作成"}]},{type:a,value:f},{type:b,tag:_,props:{},children:[]},{type:a,value:f},{type:b,tag:l,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"プロジェクトディレクトリ\n|\n|── pages\n│   |── blog\n│       |── _articles\n│       |     |── _slug.vue\n│       |     |── index.vue　←ここ\n"}]}]}]},{type:a,value:f},{type:b,tag:B,props:{},children:[]},{type:a,value:f},{type:b,tag:ae,props:{id:U},children:[{type:b,tag:L,props:{ariaHidden:M,href:"#template%E9%83%A8%E5%88%86",tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:U}]},{type:a,value:f},{type:b,tag:_,props:{},children:[]},{type:a,value:f},{type:b,tag:l,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,"language-html"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ag}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"shaped"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"記事一覧"},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ak}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"v-for"}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,e,S]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"(c, index) in contents"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:":key"}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,e,S]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"index"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n            "},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:an}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:":to"}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,e,S]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"c.path"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,e,S]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"class"}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,e,S]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"tag-div-nuxt-link"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"{{\n              c.title\n            }}"},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"■ "},{type:b,tag:h,props:{},children:[{type:a,value:"v-for=\"(c, index) in contents\" :key=\"index\""}]}]},{type:a,value:f},{type:b,tag:"blockquote",props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"変数"},{type:b,tag:h,props:{},children:[{type:a,value:"c"}]},{type:a,value:"に格納された情報をループで表示される。例えば、"},{type:b,tag:h,props:{},children:[{type:a,value:"c.title"}]},{type:a,value:"ようにメタ情報を表示することが出来る。※"},{type:b,tag:h,props:{},children:[{type:a,value:"\u003Cscript\u003E"}]},{type:a,value:"タグで設定した変数"},{type:b,tag:h,props:{},children:[{type:a,value:"contents"}]},{type:a,value:"でデータを抽出し、v-forでぶん回すことで記事のリストを表示することが出来る。"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:B,props:{},children:[]},{type:a,value:f},{type:b,tag:ae,props:{id:V},children:[{type:b,tag:L,props:{ariaHidden:M,href:"#script%E9%83%A8%E5%88%86",tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:V}]},{type:a,value:f},{type:b,tag:_,props:{},children:[]},{type:a,value:f},{type:b,tag:l,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,"language-js"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:m}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p,ap]},children:[{type:a,value:"export"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p,ap]},children:[{type:a,value:"default"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"data"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,p,$]},children:[{type:a,value:aq}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aa}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n      contents"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aa}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"async"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"asyncData"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:" $content"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:" route "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:as}]},{type:a,value:" dir "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:w}]},{type:a,value:" route"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"path"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,Y,x,K]},children:[{type:a,value:"split"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\"\u002F\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:as}]},{type:a,value:" dirParam "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:w}]},{type:a,value:" dir"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:"dir"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"length"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"-"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:"\n\n    "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"const"}]},{type:a,value:" contents "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:w}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p,$]},children:[{type:a,value:"await"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"$content"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\"blog\u002F\""}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"+"}]},{type:a,value:" dirParam"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,Y,x,K]},children:[{type:a,value:"only"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\"title\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\"createdAt\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\"path\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,Y,x,K]},children:[{type:a,value:"sortBy"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\"sortNumber\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\"asc\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,Y,x,K]},children:[{type:a,value:"fetch"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,p,$]},children:[{type:a,value:aq}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aa}]},{type:a,value:" contents"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\u002F"}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"■ 【Pick Up】 asyncDataを利用して【各言語ごとの】記事一覧"}]},{type:a,value:f},{type:b,tag:at,props:{},children:[{type:a,value:f},{type:b,tag:T,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:Q}]},{type:a,value:"のURLを取得し、URLの一部を変数として取得。\n"},{type:b,tag:l,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"var dir = route.path.split(\"\u002F\");\nvar dirParam = dir[dir.length - 1];\n"}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:at,props:{},children:[{type:a,value:f},{type:b,tag:T,props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"上記の変数を使って、contentフォルダ内の各言語のフォルダよりマークダウンの記事一覧を抽出"}]},{type:a,value:f},{type:b,tag:l,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"$content('blog\u002FdirParam')\n"}]}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:T,props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"マークダウンで書いた記事のyamlの項目から必要なものを抽出"}]},{type:a,value:f},{type:b,tag:l,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:h,props:{},children:[{type:a,value:".only([\"title\", \"createdAt\", \"path\"])\n"}]}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:T,props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"ソート番号を昇順で並べる。"}]},{type:a,value:f},{type:b,tag:l,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:h,props:{},children:[{type:a,value:au}]}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:T,props:{},children:[{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"最終的にデータを収集"}]},{type:a,value:f},{type:b,tag:l,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:h,props:{},children:[{type:a,value:au}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:B,props:{},children:[]},{type:a,value:f},{type:b,tag:Z,props:{id:"3おわりに"},children:[{type:b,tag:L,props:{ariaHidden:M,href:"#3%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:"3.おわりに"}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"元々、言語ごとに"},{type:b,tag:h,props:{},children:[{type:a,value:ab}]},{type:a,value:ac},{type:b,tag:h,props:{},children:[{type:a,value:Q}]},{type:a,value:"を用意していたのですが（例えばPHPの記事をまとめる時にはPHPのフォルダをつくり、その中に"},{type:b,tag:h,props:{},children:[{type:a,value:ab}]},{type:a,value:ac},{type:b,tag:h,props:{},children:[{type:a,value:Q}]},{type:a,value:"を格納）、今回は一元化するために"},{type:b,tag:h,props:{},children:[{type:a,value:"_articles"}]},{type:a,value:"の中に"},{type:b,tag:h,props:{},children:[{type:a,value:ab}]},{type:a,value:ac},{type:b,tag:h,props:{},children:[{type:a,value:Q}]},{type:a,value:"を用意しました。言語の識別はURLの一部分を抜き取って引数とすることで実現しました。次回はこの記事一覧で読みたい記事をクリックした時に記事を表示させたいと思います。"}]},{type:a,value:f},{type:b,tag:B,props:{},children:[]}]},dir:"\u002Fblog\u002Fnuxt_vue",path:"\u002Fblog\u002Fnuxt_vue\u002F103_nuxt-content",extension:".md"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n","tag","code"," ","\u003E","operator","div","\u003C","\"","p","keyword",",","nuxt-content-highlight","pre","line-numbers","\n    ","\u003C\u002F","=","function","(",")","string","br","language-text","\n  ","attr-name","\n      ","{","}",";",".","property-access","a","true",-1,"icon","icon-link","index.vue","attr-value","attr-equals","li","template部分","script部分","[","]","method","h1","hr","control-flow",":","_slug.vue","とか",2,"h2","template","v-list","v-subheader","v-list-item-group","\n        ","v-list-item","\n          ","v-list-item-content","nuxt-link","script","module","return","\n      lists","var","ul",".sortBy(\"sortNumber\", \"asc\")\n")));