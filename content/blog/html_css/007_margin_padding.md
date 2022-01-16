---
title: 余白を設定する
description: marginとpadding
category: HTML,CSS
createdAt: 2021-12-29
updatedAt: 2021-12-29
sortNumber: 7
---

## 1. padding
> HTMLの全要素には枠線(border,初期状態は非表示)がある。その枠線の内側(要素の内部)に余白を設定する場合はpaddingを利用。
- 四辺すべてに適用
  ```css
  padding: 10px;
  ```

- 上下が5px、左右が10px
  ```css
  padding: 5px 10px;
  ```

- 上が5px、左右が10px、下が7px
  ```css
  padding: 5px 10px 7px;
  ```

## 2. margin
> HTMLの全要素には枠線(border,初期状態は非表示)がある。その枠線の外側を設定する場合はmarginを利用。
- 四辺すべてに適用
  ```css
  margin: 10px;
  ```

- 上下が5px、左右が10px
  ```css
  margin: 5px 10px;
  ```

- 上が5px、左右が10px、下が7px
  ```css
  margin: 5px 10px 7px;
  ```

#### 配置
---
■ 中央配置
> ブロック要素に有効。下記の設定が上手くいかない時は幅が広くなっている可能性あるので、`width`で幅を設定しておきましょう。
```css
div {
    margin: 0 auto;
}
```

■ 右寄りの配置
> ブロック要素に有効。下記の設定が上手くいかない時は幅が広くなっている可能性あるので、`width`で幅を設定しておきましょう。
```css
div {
    margin:0 0 0 auto;
}
```