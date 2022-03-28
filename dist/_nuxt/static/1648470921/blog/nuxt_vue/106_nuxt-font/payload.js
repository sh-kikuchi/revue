__NUXT_JSONP__("/blog/nuxt_vue/106_nuxt-font", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S){return {data:[{content:{slug:"106_nuxt-font",description:"Googleフォントの使い方",title:"【解体新書】Nuxt.jsでフォント指定",category:"Nuxt.js",createdAt:"2021-10-30T00:00:00.000Z",updatedAt:"2022-01-08T00:00:00.000Z",sortNumber:106,toc:[],body:{type:"root",children:[{type:b,tag:r,props:{id:"1はじめに"},children:[{type:b,tag:i,props:{href:"#1%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"1.はじめに"}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"Nuxt.js でGoogle Fontを使ってみましょう。使えるようになると、フォントのバリエーションも豊かになります。 nuxt-webfontloaderというパッケージを使うことで気軽にNuxt.jsでもフォントの指定が可能になります。環境は下記の通りになります。"}]},{type:a,value:e},{type:b,tag:H,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Node.js：v14.17.5"},{type:b,tag:h,props:{},children:[]}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"npm：6.14.14"},{type:b,tag:h,props:{},children:[]}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Nuxt.js：2.15.7"},{type:b,tag:h,props:{},children:[]}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Nuxt Content：1.14.0"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[]},{type:a,value:e},{type:b,tag:r,props:{id:"2-nuxt-webfontloaderをインストール"},children:[{type:b,tag:i,props:{href:"#2-nuxt-webfontloader%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"2. nuxt-webfontloaderをインストール"}]},{type:a,value:e},{type:b,tag:H,props:{},children:[{type:a,value:e},{type:b,tag:n,props:{},children:[{type:b,tag:i,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fnuxt-webfontloader",rel:[I,J,K],target:L},children:[{type:a,value:"nuxt-webfontloaderのレファレンス"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:o,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,D]},children:[{type:b,tag:z,props:{},children:[{type:a,value:"npm install nuxt"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:"webfontloader\n"}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"#3. next.config.jsの中を編集する。\n■modulesの中に` 'nuxt-webfontloader'を追加"}]},{type:a,value:e},{type:b,tag:o,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,D]},children:[{type:b,tag:z,props:{},children:[{type:a,value:"  "},{type:b,tag:c,props:{className:[d,"literal-property","property"]},children:[{type:a,value:"modules"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"["}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"'nuxt-webfontloader'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"■webfontloaderを用意し、使いたいgoogleフォントのフォントファミリーとフォントウェイトを設定する。（これが漏れるとnpm run devではフォントの変更が反映されていても本番環境でされていないという不具合に出くわしたりする。。というのが自分の経験。）"}]},{type:a,value:e},{type:b,tag:o,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,"language-text"]},children:[{type:b,tag:z,props:{},children:[{type:a,value:"  webfontloader: {\n    google: {\n      families: ['Anton:400,700', 'Teko:400,700']\n    }\n  },\n"}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[]},{type:a,value:e},{type:b,tag:r,props:{id:"3-指定したい-vueファイルでフォント指定"},children:[{type:b,tag:i,props:{href:"#3-%E6%8C%87%E5%AE%9A%E3%81%97%E3%81%9F%E3%81%84-vue%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%A7%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E6%8C%87%E5%AE%9A",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"3. 指定したい vueファイルでフォント指定"}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"※参考にしたGoogleフォント(最終閲覧日:2021\u002F10\u002F30)\n"},{type:b,tag:i,props:{href:N,rel:[I,J,K],target:L},children:[{type:a,value:N}]}]},{type:a,value:e},{type:b,tag:o,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,D]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:"div "},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"class"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"="}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\"font\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,"maybe-class-name"]},children:[{type:a,value:"Freedom"}]},{type:a,value:" only"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:"style scoped"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:"\n@"},{type:b,tag:c,props:{className:[d,P,"module"]},children:[{type:a,value:"import"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:"url"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"("}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Anton&family=Teko:wght@500&display=swap\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:")"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"."}]},{type:b,tag:c,props:{className:[d,"property-access"]},children:[{type:a,value:"font"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"{"}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:"size"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:" 30px"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\"Anton\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"\"Teko\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"}"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:"style"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:F}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[]},{type:a,value:e},{type:b,tag:r,props:{id:"4-おわりに"},children:[{type:b,tag:i,props:{href:"#4-%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"4. おわりに"}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"まあ、、めんどくさいですけどもこれでGoogleフォントが使えるようになる...はずです。一度設定してしまえば、結構色々遊べると思うので、ぜひお試しを。"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[]}]},dir:"\u002Fblog\u002Fnuxt_vue",path:"\u002Fblog\u002Fnuxt_vue\u002F106_nuxt-font",extension:".md"},navigation:"blog\u002Fnuxt_vue",dirParam:"nuxt_vue"}],fetch:{},mutations:[]}}("text","element","span","token","\n","operator","punctuation","br","a","-","\u003C","\u003E","p","li","div"," ","string","h1","true",-1,"icon","icon-link","nuxt-content-highlight","pre","line-numbers","code",":",",",";","language-js","\u002F","\n\n","\n  font","ul","nofollow","noopener","noreferrer","_blank","\n  ","https:\u002F\u002Ffonts.google.com\u002Fspecimen\u002FTeko?preview.text=Freedom%20only&preview.text_type=custom","template","keyword","family"," sans","serif")));