---
title: Passport.jsでJWT認証
description: React×Express×TypeScript
category: Laravel
createdAt: 2022-09-14
updatedAt: 2022-09-14
sortNumber: 003
---

# 1. はじめに

```
プロジェクトディレクトリ
├─config ←新規作成
│  ├─passport.ts ←新規作成
```

<br>

# 2. passportのインストール
```
//Passport 本体
npm install passport

//ログインの実装に利用
npm install passport-local

//JWT の検証処理に利用
npm install passport-jwt

//JWT のトークン生成に利用
npm install jsonwebtoken

@types/passport-local
```
<br>

# 3. passport-local/passport-jwtの設定
まずはプロジェクトディレクトリに`config`フォルダを用意して、その中にpassport.tsを用意してみる。


# 4.トラブルシューティング
- passport周りのインポートエラー（赤い波線）
```
モジュール 'passport-jwt' の宣言ファイルが見つかりませんでした。'c:/Users/nbcc9/react-express/serverside/node_modules/passport-jwt/lib/index.js' は暗黙的に 'any' 型になります。
  存在する場合は `npm i --save-dev @types/passport-jwt` を試すか、`declare module 'passport-jwt';` を含む新しい宣言 (.d.ts) ファイルを追加します
```
【対処】npm i --save-dev @types/passport-jwtを実行してみる
