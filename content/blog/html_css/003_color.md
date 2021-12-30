---
title: 色を変えてみよう。
description: 文字/背景/グラデーション
category: HTML,CSS
createdAt: 2021-12-29
updatedAt: 2021-12-29
sortNumber: 3
---

## 文字や要素の背景の色を変える。

### 1.テキストの色を変更したい。
> color: 〇〇；
---
■ HTML
```html
<p>テキスト</p>
```
■ CSS
```css
p{
  color: red;
}
```

↑ textというクラス名のついた文字を赤字に変更する。

#### ※他にもこんな使い方が出来る。

【カラー名を16進数で表記する】（短縮形も存在はする）
```css
p { 
  color: #ff0000;
}
```
参考：http://www.netyasun.com/home/color.html

【RGBで設定】
> R=赤、G=緑、B=青、それぞれに0-255の範囲で色の度合を設定する（%表記でも可）。aは色の透明度を決めることができ、0~1.0の間で設定する。
```css
p { 
  color: rgb(255,0,0);
 }
p { 
  color: rgba(255,0,0,0.8);
 }
```
<br>

### 2.要素の色を変更したい。
> background-color:〇〇;
---
■ HTML
```html
<div>要素</div>
```
■ CSS
```css
div{
  background-color: red;
}
```
<br>

### 3.グラデーションをつける。
> background: linear-gradient();
---

■ HTML
```html
<div>要素</div>
```
■ CSS
```css
div{
  background: linear-gradient(45deg, red, blue);
}
```

グラデーションの軸を設定して、左から、右に方向に赤から青に変化する。色は2色に限らず、下記のように追加することも可能。

```css
div{
  background: linear-gradient(red, yellow, green, blue);
}
```

また、グラデーションの角度は〇〇degだけでなく、
`to top`,`to bottom`,`to left` ,`to right`というように表記も可能。下記は右下から左上に向かうグラデーション。
 ```css
 div{
    background: linear-gradient(to left top, red, blue);
 }
 ```
