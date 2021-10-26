---
title: Laravel8のいろいろ
description: Laravel8
category: Laravel
createdAt: 2021-10-18
updatedAt: 2021-10-18
sortNumber: 2
---

## インストール
``` composer create-project laravel/laravel example-app ```

## Factoryファイルの作成
■ ダミーデータの日本語化（config app.php）
> 'faker_locale' => 'ja_JP',

■ factoryファイル内の編集
```
    public function definition()
    {
        return [
            'theme_id'=>Theme::factory(),
            'name'=>$this->faker->text($maxNbChars = 10),
            'title'=>$this->faker->text($maxNbChars = 25),
            'publisher'=>$this->faker->text($maxNbChars = 25),
            'year'=>$this->faker->numberBetween($min=1940, $max=2020),
        ];
    }
```

■ DatabaseSeederの編集
```
    public function run()
    {
        \App\Models\Book::factory(10)->create();
    }
```

※ 参考（factoryの編集に役立つ）
|        種類         | データ型                           |
| :-----------------: | :--------------------------------- |
|        人名         | name                               |
|        住所         | address                            |
|      テキスト       | text                               |
|  テキスト(日本語)   | realtext                           |
|     文字数制限      | text($maxNbChars = 100)            |
| 文字数制限(日本語)  | realtext($maxNbChars = 100)        |
| ランダム数字（1桁） | randomDigit                        |
|      数字制限       | numberBetween($min=100, $max=1000) |
|      電話番号       | phoneNumber                        |
|   メールアドレス    | email                              |

## Bootstrapの導入
■ Bootstrapのインストール
```
composer require laravel/ui
```
```
php artisan ui bootstrap
```
```
npm install && npm run dev
```
■ cssとjsを読み込む
```
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
<script src="{{ asset('js/app.js') }}"></script>

```
## FortAwesomeの導入
■ FortAwesomeのインストール
```
npm install @fortawesome/fontawesome-free

```
■ /resources/sass/app.scss　に追記
```
// Font Awesome
@import '~@fortawesome/fontawesome-free/scss/fontawesome';
@import '~@fortawesome/fontawesome-free/scss/regular';
@import '~@fortawesome/fontawesome-free/scss/solid';
@import '~@fortawesome/fontawesome-free/scss/brands';
```
■ コンパイル
```
npm run prod
```
or
```
npm run dev
```
■ HTMLで読み込む
```
<link type="text/css" rel="stylesheet" href="{{ mix('css/app.css') }}">
```
