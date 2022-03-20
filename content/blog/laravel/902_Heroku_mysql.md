---
title: HerokuでDB設定（MySQL）
description: cleardb
category: Laravel
createdAt: 2021-10-28
updatedAt: 2021-10-28
sortNumber: 902
---

## 1. アカウント作成＆クレジット登録
- アカウント登録：https://jp.heroku.com
- クレジットカード登録
  <br>① 自分のアカウントの「Account settings」を選択
  <br>② 「billng」でクレジットカードを登録
  <br>※住所を英語表記にする時のお役立ち
  <br> - JuDress: http://judress.tsukuenoue.com/

## 2. アドオン追加（cleardb）
```
$ heroku addons:add cleardb
```
- configコマンドで Heroku の環境変数である CLEARDB_DATABASE_URL を確認


## 3. configで環境変数の取得
```
heroku config │ grep CLEARDB_DATABASE_URL
```
> ▼コマンドを打つとしたのようなURLが出現（環境変数を設定するのに必要）
CLEARDB_DATABASE_URL: mysql://[DB_USERNAME]:[DB_PASSWORD]@[DB_HOST]/[DB_DATABASE]?reconnect=true

## 4. 環境変数の設定
- heroku configで取得した情報を基に設定
```
 $ heroku config:set DB_DATABASE=[データベース名]
 $ heroku config:set DB_HOST=[ホスト名]
 $ heroku config:set DB_USERNAME=[ユーザー名]
 $ heroku config:set DB_PASSWORD=[パスワード] 

```
- もう少し頑張って（その他の諸設定）
```
$ heroku config:set APP_ENV=heroku 
$ heroku config:set LANG=ja_JP.UTF-8
$ heroku config:set TZ=Asia/Tokyo
```

## 5. マイグレーション
```
heroku run php artisan migrate
```
※うまくいかない時
```
[PDOException] SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 767 bytes
```
↓<br>
【原因は文字コードのバイト数にあり！】
> Laravel5.4より前（utf8)：3バイト/字  varchar(255)  255文字✕3バイト＝765バイト<br>
Laravel5.4以降(utf8mb4)：4バイト/字  varchar(255)  255文字✕4バイト＝1020バイト

- 対策①：config/database.phpの修正
```
'charset' => 'utf8mb4',
'collation' => 'utf8mb4_unicode_ci',

【変更後】
'charset' => 'utf8', 
'collation' => 'utf8_unicode_ci',
```

- 対策②　AppServiceProvider
> Schema::defaultStringLength(191);　を追加
```
<?php
 
namespace App\Providers;
 
use Illuminate\Support\ServiceProvider;
 
class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
          Schema::defaultStringLength(191);
    }
 
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
```
