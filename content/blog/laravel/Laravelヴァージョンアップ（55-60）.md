---
title: Laravelヴァージョンアップ
description: Laravel5.5をLaravel6.xに更新する
category: Laravel
createdAt: 2021-10-18
updatedAt: 2021-10-18
sortNumber: 3
---

## composer.json
`composer.json`の以下の項目を書き換えて`composer update`を実施しました。
- PHPのバージョンの変更
- フレームワークのバージョンの変更
```
{
    "name": "laravel/laravel",
    "description": "The Laravel Framework.",
    "keywords": ["framework", "laravel"],
    "license": "MIT",
    "type": "project",
    "require": {
        <s>"php": ">=7.0.0",</s> "php": ">=7.4.5",
        "barryvdh/laravel-dompdf": "^0.8.3",
        "fideloper/proxy": "~3.3",
        "intervention/image": "^2.5",
        <s>"laravel/framework": "5.5.*",</s> "laravel/framework": "^6.0*",
        "laravel/tinker": "~1.0",
        "laravelcollective/html": "~5.0",
        "league/csv": "^9.3",
        "league/flysystem-sftp": "^1.0",
        "mopo922/laravel-treats": "^2.0",
        "weidner/goutte": "^1.3"
    },
    "require-dev": {
        "filp/whoops": "~2.0",
        "fzaninotto/faker": "~1.4",
        "mockery/mockery": "~1.0",
        "phpunit/phpunit": "~6.0",
        "symfony/thanks": "^1.0"
    },
    ......以下略......
```

その後、アクセスすると以下のようなエラーが出ました。

```laravel.log
laravel.ERROR: Type error: Argument 2 passed to Symfony\Component\HttpFoundation\Request::setTrustedProxies() must be of the type integer, array given, called in /app/vendor/fideloper/proxy/src/TrustProxies.php on line 54 {"exception":"[object] (Symfony\\Component\\Debug\\Exception\\FatalThrowableError(code: 0): Type error: Argument 2 passed to Symfony\\Component\\HttpFoundation\\Request::setTrustedProxies() must be of the type integer, array given, called in /app/vendor/fideloper/proxy/src/TrustProxies.php on line 54 at /app/vendor/symfony/http-foundation/Request.php:564)
```

## 対応
* [Upgrade Guide](https://laravel.com/docs/5.6/upgrade)(Trusted Proxiesの部分)

ミドルウェア`App\Http\Middleware\TrustProxies`を書き換えてね！って書いてありました。

```php:app/Http/Middleware/TrustProxies.php(Laravel5.5)
    protected $headers = [
        Request::HEADER_FORWARDED => 'FORWARDED',
        Request::HEADER_X_FORWARDED_FOR => 'X_FORWARDED_FOR',
        Request::HEADER_X_FORWARDED_HOST => 'X_FORWARDED_HOST',
        Request::HEADER_X_FORWARDED_PORT => 'X_FORWARDED_PORT',
        Request::HEADER_X_FORWARDED_PROTO => 'X_FORWARDED_PROTO',
    ];
```

記述の通りメンバ変数`$headers`の定義がUpgradeGuide同様に配列型からString型に変わっていました。
ここはカスタムしていなかったので置き換えました。

```php:app/Http/Middleware/TrustProxies.php(Laravel5.6)
    protected $headers = Request::HEADER_X_FORWARDED_ALL;
```
再度確認し、無事動作することを確認しました。
