---
title: XAMPPを使ったLaravelの開発環境
description: XAMPPを使って環境を整えよう
category: Laravel
createdAt: 2021-10-18
updatedAt: 2021-10-18
sortNumber: 1
---

```
【Xamppを使ったLaravelのデータベース環境構築】

① Xamppを起動
② XamppのhtdocsフォルダにLaravelフォルダを入れる
③ Laravel内の.envファイル内の設定を変更
　 DB_DATABASE=Laravel_CRUD
　 DB_USERNAME=root
　 DB_PASSWORD=

③ XamppのコントローラーからphpMyadminを起動
④ Laravel_CRUDというDBを作成
⑤ Cmderを起動
　『cd C:\xampp\htdocs\Laravel』でLaravelへ移動
　『php artisan serve』で起動
⑥ Laravel development server started: <http://数字～>
　 と表示されるので、表示されたURLにアクセスする。

終了の仕方は
Cmderで「Ctrl」+「C」で停止できます。
再度起動する際は、
① 『cd C:\xampp\htdocs\Laravel』でLaravelへ移動
② 『php artisan serve』で起動
③ Laravel development server started: <http://数字～>
と表示されるので、URLに『/login』をつけてアクセスという流れで大丈夫です。
```
