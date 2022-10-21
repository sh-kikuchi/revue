---
title: 環境変数
description: React×Express×TypeScript
category: Laravel
createdAt: 2022-09-14
updatedAt: 2022-09-14
sortNumber: 004
---

# 1. はじめに

```
プロジェクトディレクトリ
└─config
│   ├─env
│   │  └─config.json
|
├─index.ts
```

<br>

# 2. JSONで環境ごとに変数をセットする
ここではプロジェクトディレクトリに`config`フォルダ、その下に`env`フォルダを用意してから`config.json`を用意した。下記は開発と本番で環境変数を分けてセットしている。
```json
{
  "development": {
    "server": "http://localhost/",
    "user": "test_user",
    "password": "test_password"
  },
  "production": {
    "server": "http://example.com/",
    "user": "prod_user",
    "password": "prod_password"
  }
}

```
<br>

# 3. 環境変数のファイルの読み込み確認
プロジェクトディレクトリ内にあるindex.ts内で`press.json()`と`express.urlencoded({ extended: true })`を読み込んだ上で環境変数をコンソールで出力してみる。

```ts
import express from 'express'
const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const  config = require('./src/config/config.json')[app.get('env')];

console.log(express.urlencoded(config));
console.log(config.user);
console.log(config.password);


app.listen(3001, () => {
  console.log("Start on port 3001.")
})
```

<br>
【出力結果】
```
[Function: urlencodedParser]
test_user
test_password
Start on port 3001.
```

<br>

# 4.環境変数の切替


<br>

# 5.トラブルシューティング
上記の`index.ts`で用意した変数`config`でJSONデータを格納し、コンソールで出す時にエラーが出た。

```
Uncaught SyntaxError: Unexpected end of input
```
【対処】
- ✕ console.log(config);
- 〇 console.log(express.urlencoded(config));

<br>

# おわりに
