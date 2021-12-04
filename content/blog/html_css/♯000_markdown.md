---
title: Markdownを使おう。
description: メモ帳やドキュメント作成に
category: HTML,CSS
createdAt: 2021-12-02
updatedAt: 2021-12-02
sortNumber: 0
---

## リスト
```
- HTML / CSS
- javascript
  - vue.js
  - jQuery
- PHP
  - Laravel
- SQL
  - mySQL
  - SQL server

1. 動画を見る
2. コードを書く
3. 改造する
```


- HTML / CSS
- javascript
  - vue.js
  - jQuery
- PHP
  - Laravel
- SQL
  - mySQL
  - SQL server

1. 動画を見る
2. コードを書く
3. 改造する


## 見出しのつけかた
---
> #の数とhタグの数字がリンクしている。
> 例えば、h1だったら`# 見出し`で、h3だったら`### 見出し`という具合。#と文字の間には半角スペースを開けること。

<br>

# 見出し（h1）

## 中見出し(h2)

### 小見出し(h3)

###### 見出し(h6)

<br>

## 引用の仕方

Q&Aサイトなど、引用箇所は【大なり】+ 半角スペース、

```
> xには整数値を代入する
```

> xには整数値を代入する

<br>

## 区切り線

下記が区切り線を付ける記法
```
---
```

↑半角のハイフンを 3 つ以上（前後に必ず空行を入れる必要がある）

<br>

## 強調　*で斜体、**太字

---

```
HTMLを使えばホームページを作ることができます。初心者に*特に*おすすめです。**今すぐはじめましょう！**
```

HTMLを使えばホームページを作ることができます。初心者に*特に*おすすめです。**今すぐはじめましょう！**



## URLの貼り付け方

---

```
- https://google.com
- [google](https://google.com)
```

- https://google.com
- [google](https://google.com)

## コードの貼り付け方


---

次のコードについて教えて下さい。特に`var board_id = $(this).data('board_id');`や
 ``` $(`.card-move-select option[value = ${board_id}]`).prop('selected', true); ```の部分が難解です。

<pre>
```js
function f() {
  $(function () {
  $('.js-modal-open').each(function () {
    $(this).on('click', function () {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      var board_id = $(this).data('board_id');
      var card_id = $(this).data('card_id');
      var board_name = $(this).data('board_name');
      var card_name = $(this).data('card_name');

      $('.input-board-id').val(board_id);
      $('.input-card-id').val(card_id);
      $('.input-board-name').val(board_name);
      $('.text-card-name').val(card_name);

      $(`.card-move-select option[value = ${board_id}]`).prop('selected', true);

      $(modal).fadeIn();
      return false;
    });
  });

  $('.js-modal-close').on('click', function () {
    $('.js-modal').fadeOut();
    return false;
  });
});
}
```
</pre>

```js
function f() {
  $(function () {
  $('.js-modal-open').each(function () {
    $(this).on('click', function () {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      var board_id = $(this).data('board_id');
      var card_id = $(this).data('card_id');
      var board_name = $(this).data('board_name');
      var card_name = $(this).data('card_name');

      $('.input-board-id').val(board_id);
      $('.input-card-id').val(card_id);
      $('.input-board-name').val(board_name);
      $('.text-card-name').val(card_name);

      $(`.card-move-select option[value = ${board_id}]`).prop('selected', true);

      $(modal).fadeIn();
      return false;
    });
  });

  $('.js-modal-close').on('click', function () {
    $('.js-modal').fadeOut();
    return false;
  });
});

}
```

## 画像の貼り付け方
---
```
[![JSアイコン](https://dotinstall.com/img/box/main-symbols/js-lime.png?v=20190130)](https://dotinstall.com)
```
[![JSアイコン](https://dotinstall.com/img/box/main-symbols/js-lime.png?v=20190130)](https://dotinstall.com)

## テーブルの書き方
---
<pre>
| 素材             | 軍票 |
| :--------------- | ---: |
| スワンの羽根     |  200 |
| イーグルの羽根   |  200 |
| 謎めいた結晶     | 4000 |
| ロースベーコン   |  250 |
| ローストコーヒー |  250 |
| ウーツ鉱         | 2250 |
| アラクネウェブ   | 2250 |
</pre>

| 素材             | 軍票 |
| :--------------- | ---: |
| スワンの羽根     |  200 |
| イーグルの羽根   |  200 |
| 謎めいた結晶     | 4000 |
| ロースベーコン   |  250 |
| ローストコーヒー |  250 |
| ウーツ鉱         | 2250 |
| アラクネウェブ   | 2250 |
