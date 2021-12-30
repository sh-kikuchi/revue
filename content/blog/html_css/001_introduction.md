---
title: HTMLとCSS
description: テンプレート
category: HTML,CSS
createdAt: 2021-10-07
updatedAt: 2021-12-28
sortNumber: 1
---

## Webサイトの雛形を作ろう。

### HTML（HyperText Markup Language）とは？
---
- webページを作成するために開発されたマークアップ言語。
- HyperTextでは、ウェブページから別のウェブページにリンクをはったり（ハイパーリンク）、webページ内に画像・動画・音声などのデータファイルをリンクで埋め込むことができる。


### CSS（Cascading Style Sheets）とは？
---
- Webページを装飾するスタイル言語。
- ウェブページがPC画面に表示される際の色・サイズ・レイアウトなどの表示スタイルのみならず、出力スタイル（印刷・出力）、再生スタイル（音声の読み上げ）など、スタイルも様々。

### テンプレート
---
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!----- css----->
  <link rel="stylesheet" href="">
  <!----- js----->
  <script type="text/javascript" src=""></script>
  <title>タイトル</title>
</head>
<body>
  <!----- header----->
  <header>ヘッダー</header>
  <!----- main ----->
  <article>
    <h1>タイトル</h1>
    <section>
      <h2>見出し</h2>
      <p>コンテンツの内容</p>
    </section>
  </article>
  <!----- footer ----->
  <footer>フッター</footer>
</body>
</html>

```
