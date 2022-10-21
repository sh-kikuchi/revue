---
title: ExpressのDB連携
description: React×Express×TypeScript
category: Laravel
createdAt: 2022-09-14
updatedAt: 2022-09-14
sortNumber: 002
---

# 1. はじめに


```
プロジェクトディレクトリ
├─database ←新規作成
│  ├─pool.js ←新規作成
```

<br>

# 2. node-postgresモジュールをインストール
```
npm install pg
npm install @types/pg
```

# 3. DBの連携ファイルを作成
「はじめに」に記載しているようにプロジェクトディレクトリの`src`フォルダの直下に`database`フォルダを作成し、その中にpool.jsファイルを用意してみる。以下、pool.js内のコード。PostgreSQLに必要なDB情報を記載する場所になる。
```ts
const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "postgres",
  password: "postgres",
  port: 5432,
});
pool.connect();

//テストとして呼び出して見る
pool.query("SELECT NOW()", (err: string, res: string) => {
  console.log(err, res);
  pool.end();
});

module.exports = { pool };

```

<br>

# 4. 連携テストをしてみる。
例えば、databaseのディレクトリで下記のコマンドを叩いてみる。
```ts
npx ts-node Pool.ts
```

<br>

出力結果に下記のようなものが出てくればOK

```ts
 Result {
  command: 'SELECT',
  rowCount: 1,
  oid: null,
  rows: [ { now: 2022-09-14T04:30:44.683Z } ],
  fields: [
    Field {
      name: 'now',
      tableID: 0,
      columnID: 0,
      dataTypeID: 1184,
      dataTypeSize: 8,
      dataTypeModifier: -1,
      format: 'text'
    }
  ],
```

<br>※トラブルシューティング
- SELECT NOW()を呼び出すのに引数に使っている`err`や`res`は型を定義して置かないと下記のような面倒臭いエラーと出会う。
  ```
  Parameter 'xxx' implicitly has an 'any' type
  ```

<br>

# 5. おわりに
Parameter 'xxx' implicitly has an 'any' typeのエラーが出たから型をanyにする見たいな対応策をしている記事を見たけど、どうなんじゃろかって思って、stringにしてみた。<br>

DB連携が出来たのでCRUDも出来るようになるだろう。API通信のテストも成功しているので体制は整いつつある。

参考
[【Node.js入門】PostgreSQLに接続してデータを操作するためのチュートリアル！](https://www.sejuku.net/blog/81358)
