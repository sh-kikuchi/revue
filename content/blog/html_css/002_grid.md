---
title: グリッドシステム
description: テンプレート、その2
category: HTML,CSS
createdAt: 2021-10-07
updatedAt: 2021-12-28
sortNumber: 2
---

## グリッドシステム

■ HMTL

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="">
  <script type="text/javascript" src=""></script>
  <title>Document</title>
</head>
<body>
  <div class="container">
    <div class="header">
      <div>ヘッダー</div>
    </div>
    <div class="body">
      <div>ボディ</div>
      ...
    </div>
    <div class="footer">
      フッター
    </div>
  </div>

</body>
</html>

```

■ CSS
```
.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: calc(100vh - 15px);
}

.body {
  overflow-y: scroll;
}
```

ヘッダーとフッターはauto
<hr>

> auto を使うと、この行のセルがコンテンツのサイズに応じて空間が引き伸ばされ、その高さに合わせられます。

<br>

ボディーは「残り全部」
<hr>

> - 他にfrを使用していない場合は1frが「残り全部」
> - スクロール指定
