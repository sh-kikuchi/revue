---
title: PaginateMyTable.js（プラグイン）
description: PaginateMyTable.jsを使おう。
category: jQuery
createdAt: 2021-11-30
updatedAt: 2021-11-30
sortNumber: 4
---

## テーブルにページネーションをつける。

### ■ 準備
> インストール
```
https://github.com/agubal/PaginateMyTable
```

> `<head>`タグに下記のjs/cssのファイルを読み込む。
```html
<link type="text/css" rel="stylesheet" href="PaginateMyTable.css" />
<script src="http://code.jquery.com/jquery-1.9.0.min.js" defer></script>
<script src="PaginateMyTable.js" defer></script>
```

<br>

### ■ HTML（ボタンとモーダル画面）
> クラス名を`mytable`とする。
```HTML
<table class="mytable">
    (中略)
</table>
```

<br>

### ■　JavaScript（jQuery）
> 任意のJavaScriptファイルに下記のコードを書く。
```JavaScript
$(document).ready(function() {
  //デフォルトは5行/ページ
  $(".mytable").paginate(); 
});
```
※カスタマイズ
```js
$(".MyTable").paginate({
    rows: 10, // Set number of rows per page.
    position: "top",  // Set position of pager.
    jqueryui: true,  // Allows using jQueryUI theme for pager buttons.
    showIfLess: false  // Don't show pager if table has only one page.
        });
```
