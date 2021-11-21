---
title: Bootstrap
description: CSSのフレームワークを使おう
category: CSS
createdAt: 2021-11-04
updatedAt: 2021-11-04
sortNumber: 3
---

## Bootstrapとは？
- CSSのフレームワーク
- 【特定のクラス名】を付けてあげるだけでデザイン可能

<br>

### 1. スタートアップ
HTMLファイルを用意して下記の通りをコピペすれば、あとは

```html
<!doctype html>
<html lang="ja">
<head>
	<title>Hello, world!</title>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
</head>
<body>
	<div>内容</div>

	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
</body>
</html>

```
<br>

### 2.グリッドシステム
- 1行を12分割
- 親要素にrow,子要素にcolを用意
- col-数字でwidth(横幅)の調整が出来る。
- 下記の例はcolの数字を足すと12になっているが、
  仮にこれが12以上だったら、超えた分は改行されるイメージ

```html
<div class="container">
  <div class="row">
    <div class="col-3">
      A
    </div>
    <div class="col-6">
      B
    </div>
    <div class="col-3">
      C
    </div>
  </div>
```
<br>

### 3.レスポンスデザイン
- smがスマホ、mdがPCかなぐらいのざっくり

| ブレークポイント | width（幅） |
| :--------------- | ----------: |
| xs               |      <576px |
| sm               |      ≥576px |
| md               |      ≥768px |
| lg               |      ≥992px |
| xl               |     ≥1200px |
| xxl              |     ≥1400px |

<br>

### 4.公式レファレンス
https://getbootstrap.jp/
