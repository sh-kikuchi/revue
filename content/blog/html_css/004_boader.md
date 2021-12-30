---
title: 枠線の使い方
description: 枠線の設定から図形まで
category: HTML,CSS
createdAt: 2021-12-29
updatedAt: 2021-12-29
sortNumber: 4
---

### border
> border: 幅 種類 色 ;
---
■ HTML
```html
<div>要素</div>
```
■ CSS
```css
div{
  border: 1px solid black;
}
```
<br>

※色々な種類がある。お試しを
- none;
- hidden;
- dotted;
- dashed;
- solid;
- double;
- groove;
- ridge;
- inset;
- outset

因みにborderの種類は`border-style`で設定することができる。
> border-style: ここに値を１~４つセット;

- 値が1つ→上下左右
- 値が2つ→上下は1つ目、左右は2つ目
- 値が3つ→上は1つ目、左右が2つ目、下が3つ目
- 値が4つ→上から時計回りに適用。

例はこちら（値4つセット）↓
```css
border-style: solid dashed groove dotted;
```

<br>

### 【図形】三角形を作ってみよう
> CSSで三角形を作ってみましょう。といっても、下記のコードだけで出来てしまいます。
> 本サイトの`<Design>`のページでは三角形のデモがあります。borderの調整をしながら様々な三角形を作ってみて下さい。

■ HTML
```html
<div class="triangle"></div>
```

■ CSS
```css
.triangle{
  width: 0px;
  border-color: tomato; //ここは好きな色♪
  border-right: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 50px solid transparent; 
}
```
