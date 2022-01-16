---
title: オブジェクトチートシート
description: オブジェクトの使い方をマスターしよう
category: JavaScript
createdAt: 2022-01-14
updatedAt: 2022-01-14
sortNumber: 3
---

# 1. はじめに
オブジェクトのチートシートを作成しました。

<br>

# 2. オブジェクト
```js
//オブジェクトのキホン
let user = {
  name: 'しゅう',
  age: 27,
  address: '東京都北区赤羽',
  skill: ['vue.js', 'Laravel', 'Flutter'],
  getName: function () {
    return this.name;
  }
}
console.log(user);
console.log(user.name);
console.log(user['name']);
console.log(user.getName());

//プロパティの更新
user.name = 'shu'
console.log(user.name);

//プロパティの追加
user.hometown = 'Kanagawa';
console.log(user);

//プロパティの削除
delete user.address;
console.log(user);

//プロパティの存在判定
console.log(user.hasOwnProperty('skill'));

//ループ処理を使ってプロパティ名を出す
for (key in user) {
  console.log(user[key]);
}

//キー取得
let keyArray = Object.keys(user);
console.log(keyArray);

//値取得(forEach)
let keyArray2 = Object.keys(user);
keyArray2.forEach(function (element) {
  console.log(user[element]);
});

//値取得（value）
let valueArray = Object.values(user);
console.log(valueArray);

//キーと値の一覧取得(連想配列)
let propertyArray = Object.entries(user);
console.log(propertyArray);
//forEachで一行ずつ取り出す
propertyArray.forEach(function (element) {
  console.log(element);
});

```

<br>

# 3.おわりに
オブジェクトの色々な操作方法を整理してみました。1ページにまとまったカンペがあるとふと使いたいと思った時に役立つかなと思って作りました。
