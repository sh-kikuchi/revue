---
title: CSSのposition
description: 要素の位置を決める！
category: CSS
createdAt: 2021-11-04
updatedAt: 2021-11-04
sortNumber: 2
---

## Positionとは？
> 要素の位置を決めるためのもの

1. position: relative
- 普通の位置（初期値＝static）を基準として、配置を決めることが出来る。

<br>

2. position: absolute
- 親要素を基準として、配置を決めることが出来る。

<br>

3. position:fixed
- ウインドウ（画面全体）を基準とした絶対的な位置をしている。
- スクロールしても同じ位置に固定する。

<br>

## positionとセットで使って位置決め
|        |                      |
| ------ | -------------------- |
| top    | ある基準から上の位置 |
| bottom | ある基準から下の位置 |
| right  | ある基準から右の位置 |
| left   | ある基準から左の位置 |

<br>

## 要素同士を重ねて使うには？
> 親子関係を意識しよう！
<br> 今回やりたいこと：【親】の正方形の中で【子】の正方形の位置を決めたい。
-  HTMLにおける2つの正方形は以下の包含関係となっているとする。

```html
  <div class="position-parent">
    <div class="position-child"></div>
  </div>
```

- 【親】の正方形は大きい
```css
.position-parent {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: deepskyblue;
  margin: 10px auto;
  margin-top: 70px;
  margin-bottom: 50px;
}
```

- 【子】の正方形は小さい
```css
.position-child {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  background-color: lightslategrey;
}
```

★【親】の正方形を基準として,【子】の正方形の位置を決めるポイント
> 1. 親（大）はrelative、 子（小）はabsoluteで設定すること。
> 2. 子（小）は親（大）基準で位置（top,bottom,left,right）を決めることが出来る。

<br>

★ 詳しくはこちら！（小さい正方形を実際に動かして位置を確かめられる）
https://sh-revue.net/design
