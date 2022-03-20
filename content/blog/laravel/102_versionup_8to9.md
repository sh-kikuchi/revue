---
title: Laravel8から9へ
description: ヴァージョンアップ
category: Laravel
createdAt: 2022-02-21
updatedAt: 2022-02-21
sortNumber: 102
---

## 1. composer.jsonを修正

■ laravel/framework
```
"laravel/framework": "^9.0",
```

■ nunomaduro/collision
```
"nunomaduro/collision": "^6.0",
```

■ spatie/laravel-ignition
```
"facade/ignition": "^2.3.6",
↓
"spatie/laravel-ignition": "^1.0",
```

■ なんかこれも"^8.0"⇒"^9.0"
```
"goldspecdigital/laravel-eloquent-uuid": "^9.0",
```

上記を変更したら`composer update`
(上手く行かない場合、`composer update --with-all-dependencies`)




## 2. Trusted Proxies

■ "fideloper/proxy": "^4.4"を削除

■ app/Http/Middleware/TrustProxies.php
- 【変更前】
  ```
  use Fideloper\Proxy\TrustProxies as Middleware;
  ```

- 【変更後】
  ```
  use Illuminate\Http\Middleware\TrustProxies as Middleware;

  ```

■ app/Http/Middleware/TrustProxies.php
- 【変更前】
  ```
  protected $headers = Request::HEADER_X_FORWARDED_ALL;
  ```

- 【変更後】
  ```php
  protected $headers =
          Request::HEADER_X_FORWARDED_FOR │
          Request::HEADER_X_FORWARDED_HOST │
          Request::HEADER_X_FORWARDED_PORT │
          Request::HEADER_X_FORWARDED_PROTO │
          Request::HEADER_X_FORWARDED_AWS_ELB;

  ```



- [Error: While updating laravel 8 to 9. Script @php artisan package:discover --ansi handling the post-autoload-dump event returned with error code 1](https://stackoverflow.com/questions/71103241/error-while-updating-laravel-8-to-9-script-php-artisan-packagediscover-ans)
