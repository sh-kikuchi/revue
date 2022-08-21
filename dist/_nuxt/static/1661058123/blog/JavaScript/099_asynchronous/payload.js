__NUXT_JSONP__("/blog/JavaScript/099_asynchronous", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw){return {data:[{content:{slug:"099_asynchronous",description:"処理タイミングを理解しよう",title:"非同期処理",category:ae,createdAt:"2021-01-30T00:00:00.000Z",updatedAt:"2022-08-21T00:00:00.000Z",sortNumber:99,toc:[],body:{type:"root",children:[{type:b,tag:L,props:{id:"1-はじめに"},children:[{type:b,tag:M,props:{ariaHidden:C,href:"#1-%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:"1. はじめに"}]},{type:a,value:i},{type:b,tag:H,props:{},children:[{type:a,value:"同期処理は上から順に一つずつ処理が動く。その間に重い処理があるとそれだけ時間がかかってしまう。それに対して非同期処理はレスポンスが返るまでに別の処理も進めてレスポンスを受け取り次第、呼び出し元に値を返すことをする。今回は非同期処理の代表例としてsetTimeout関数・Promise・async\u002Fawaitの使い方を簡単にまとめてみる。"}]},{type:a,value:i},{type:b,tag:L,props:{id:"2-settimeout"},children:[{type:b,tag:M,props:{ariaHidden:C,href:"#2-settimeout",tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:"2. setTimeout"}]},{type:a,value:i},{type:b,tag:H,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:Q}]},{type:a,value:"関数を使うと任意のタイミングで処理を動かすことが出来る。下記のsetTimeout関数の例では、起動してから5秒後に処理が動く。"}]},{type:a,value:i},{type:b,tag:R,props:{className:[S]},children:[{type:b,tag:T,props:{className:[U,X]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"'ぎりぎりセーフ'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y,r]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"'いや、5秒遅刻だ'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:H,props:{},children:[{type:a,value:"↓（結果）"}]},{type:a,value:i},{type:b,tag:R,props:{className:[S]},children:[{type:b,tag:T,props:{className:[U,"language-text"]},children:[{type:b,tag:w,props:{},children:[{type:a,value:"ぎりぎりセーフ Sun Jan 30 2022 00: 49: 03 GMT + 0900(日本標準時)\nいや、5秒遅刻だ Sun Jan 30 2022 00: 49: 08 GMT + 0900(日本標準時)\n"}]}]}]},{type:a,value:i},{type:b,tag:V,props:{},children:[]},{type:a,value:i},{type:b,tag:L,props:{id:"3-promiseを使った非同期処理"},children:[{type:b,tag:M,props:{ariaHidden:C,href:"#3-promise%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E9%9D%9E%E5%90%8C%E6%9C%9F%E5%87%A6%E7%90%86",tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:"3. Promiseを使った非同期処理"}]},{type:a,value:i},{type:b,tag:H,props:{},children:[{type:a,value:"Promiseオブジェクトも非同期処理を扱う機能。この処理が成功した時には"},{type:b,tag:w,props:{},children:[{type:a,value:v}]},{type:a,value:"、失敗した時には"},{type:b,tag:w,props:{},children:[{type:a,value:ah}]},{type:a,value:"で値をセットする。"},{type:b,tag:w,props:{},children:[{type:a,value:Y}]},{type:a,value:"メソッドはPromise関数が成功した時に動く処理を指す。それに対して失敗した時に動く処理が"},{type:b,tag:w,props:{},children:[{type:a,value:ai}]},{type:a,value:"メソッド。"}]},{type:a,value:i},{type:b,tag:R,props:{className:[S]},children:[{type:b,tag:T,props:{className:[U,X]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aj}]},{type:a,value:" result "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"const"}]},{type:a,value:" test "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:" reject"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y,r]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,k,K]},children:[{type:a,value:"if"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"result "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"==="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"\"Succeed\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k,K]},children:[{type:a,value:"else"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"\"Failed\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,al]},children:[{type:a,value:"\u002F\u002F処理成功時"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y,r]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,k,K]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y,r]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,al]},children:[{type:a,value:"\u002F\u002F←メソッドチェーン：一番最後に;をつける"}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:V,props:{},children:[]},{type:a,value:i},{type:b,tag:L,props:{id:"4-promiseの直列処理"},children:[{type:b,tag:M,props:{ariaHidden:C,href:"#4-promise%E3%81%AE%E7%9B%B4%E5%88%97%E5%87%A6%E7%90%86",tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:"4. Promiseの直列処理"}]},{type:a,value:i},{type:b,tag:H,props:{},children:[{type:a,value:"処理が終わった後に、次の処理を繋げることも出来る。"}]},{type:a,value:i},{type:b,tag:R,props:{className:[S]},children:[{type:b,tag:T,props:{className:[U,X]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,am,n]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y,r]},children:[{type:a,value:z}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y,r]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"\"1回目の処理(起動時)\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y,r]},children:[{type:a,value:z}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y,r]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y,r]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"\"2回目の処理(5秒経過)\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:V,props:{},children:[]},{type:a,value:i},{type:b,tag:L,props:{id:"5-asyncとawait"},children:[{type:b,tag:M,props:{ariaHidden:C,href:"#5-async%E3%81%A8await",tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:"5. asyncとawait"}]},{type:a,value:i},{type:b,tag:H,props:{},children:[{type:a,value:"非同期処理は"},{type:b,tag:w,props:{},children:[{type:a,value:ap}]},{type:a,value:"と"},{type:b,tag:w,props:{},children:[{type:a,value:aa}]},{type:a,value:"を使って書くことも出来る。Promiseを利用した構文よりも、簡潔に書けるのが特徴的である。async function内の処理の中にawaitをしていたPromise構文を作成する。そうすることでawaitを指定した関数のPromiseの結果が返されるまで、async function内の処理が一時停止される。"}]},{type:a,value:i},{type:b,tag:R,props:{className:[S]},children:[{type:b,tag:T,props:{className:[U,X]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:ab}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ap}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,k,K]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y,r]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y,r]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,k,K]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y,r]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y,r]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,k,K]},children:[{type:a,value:ad}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:V,props:{},children:[]},{type:a,value:i},{type:b,tag:L,props:{id:"6-promise並列処理"},children:[{type:b,tag:M,props:{ariaHidden:C,href:"#6-promise%E4%B8%A6%E5%88%97%E5%87%A6%E7%90%86",tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:"6. Promise(並列処理)"}]},{type:a,value:i},{type:b,tag:H,props:{},children:[{type:a,value:"下記ではP1とP2の関数を用意している。P1は起動から2秒後に処理が動き、P2では起動時に処理が動く。"},{type:b,tag:w,props:{},children:[{type:a,value:"Promise.all"}]},{type:a,value:"を使うことによって、結果をまとめて取得することが出来る。"}]},{type:a,value:i},{type:b,tag:R,props:{className:[S]},children:[{type:b,tag:T,props:{className:[U,X]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,k,K]},children:[{type:a,value:ad}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"'P1'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"2000"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,k,K]},children:[{type:a,value:ad}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"'P2'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,am,n]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:"all"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n\n    "},{type:b,tag:c,props:{className:[d,o,n]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,j,u]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:V,props:{},children:[]},{type:a,value:i},{type:b,tag:L,props:{id:"7-おわりに"},children:[{type:b,tag:M,props:{ariaHidden:C,href:"#7-%E3%81%8A%E3%82%8F%E3%82%8A%E3%81%AB",tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:"7. おわりに"}]},{type:a,value:i},{type:b,tag:H,props:{},children:[{type:a,value:"Node.jsを触っていると非同期処理から逃れられず、苦手意識があったとしても理解しておかないといけないなと痛感する。この記事は好例があれば更新したいと思う。まずは覚書程度ですが、参考になればと思う。"}]},{type:a,value:i},{type:b,tag:V,props:{},children:[]}]},dir:"\u002Fblog\u002FJavaScript",path:"\u002Fblog\u002FJavaScript\u002F099_asynchronous",extension:".md"},navigation:"blog\u002FJavaScript",dirParam:ae}],fetch:{},mutations:[]}}("text","element","span","token","punctuation"," ","(",")","\n","function","keyword",";","\n  ","class-name","console","{","}","operator",".","method","property-access","resolve","code","\n    ","arrow","=\u003E","log","parameter","true",",","new","Promise","constant","p","string","number","control-flow","h1","a",-1,"icon","icon-link","setTimeout","div","nuxt-content-highlight","pre","line-numbers","br","\n      ","language-js","then","X","value","=","await","1","\n\n","return","JavaScript","Date","5000","reject","catch","let","boolean","comment","known-class-name","\n        ","\n          ","async","start","+=","1000","\n\n  ","P1","P2","result")));