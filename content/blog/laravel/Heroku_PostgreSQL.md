---
title: HerokuのDB設定（PostgreSQL）
description: Herokuのマイグレーション
category: Laravel
createdAt: 2021-10-28
updatedAt: 2021-10-28
sortNumber: 3
---

## 1. herokuのアドオンにPostgreSQLを作成する
```
$ heroku addons:create heroku-postgresql:hobby-dev
```

## 2. 環境変数の取得
```
$ heroku config:get DATABASE_URL
```
下記のURLが出現
> postgres://<ユーザ名>:<パスワード>@<ホスト>:5432/<DB名>
```
$ heroku config:set DB_CONNECTION=pgsql
$ heroku config:set DB_HOST=<ホスト>
$ heroku config:set DB_DATABASE=<DB名>
$ heroku config:set DB_USERNAME=<ユーザ名>
$ heroku config:set DB_PASSWORD=<パスワード>
```
※configを設定する際、イコールより先はクオーテーションマークは要らない。そのままコピぺ。

## 3. アプリの情報を設定する
```
$ heroku config:set APP_KEY=$(php artisan key:generate --show)
```
上記のコマンドが効かない場合は予め、php artisan key:generate --showでアプリキーを取得して、heroku config:set APP_KEY=<アプリキー>のコマンドを打つこと。

<div style="page-break-before:always"></div>

## 4. DBのマイグレーション
※準備：composer.jsonに加筆
> Laravelの.env はgit管理外なので、Heroku用の.env.heroku を用意。デプロイの際にHerokuサーバー内で.env.heroku を.env にコピーするようにする。
```
    "scripts": {
        (前略)
        "compile": [
            "@php -r \"file_exists('.env') || copy('.env.example', '.env');\""
        ]
    },
```
マイグレーション
```
$ heroku run php artisan migrate
```

マイグレーションをやり直したい場合
```
# (マイグレーションをやり直したい場合)
> heroku run php artisan migrate:refresh --seed
```
