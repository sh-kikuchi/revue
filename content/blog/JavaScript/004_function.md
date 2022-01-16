---
title: 関数チートシート
description: 色々な関数の書き方を整理
category: JavaScript
createdAt: 2022-01-10
updatedAt: 2022-01-10
sortNumber: 4
---

# 1. はじめに
関数のチートシートを作成。

<br>

# 2. 関数
```js
//基本的な関数書き方
function Total(a, b, c) {
  let sum = a + b + c;
  return sum;
}
let Result1 = Total(1, 2, 3);
console.log("計算結果は" + Result1 + "です。");

//関数リテラル（無名関数）:変数に関数の実行結果を格納
let calc2 = function (a, b, c) {
  return a + b - c;
}
let Result2 = calc2(10, 20, 15);
console.log("計算結果は" + Result2 + "です。");

//アロー関数
let calc3 = (a, b, c) => {
  return a - b - c;
}
let Result3 = calc3(10, 20, 15);
console.log("計算結果は" + Result3 + "です。");

//可変長引数（引数の数が可変）引数の前に '...' を付ける
function calc4(...num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
let Result4 = calc4(1, 2, 3, 4);
console.log("計算結果は" + Result4 + "です。");

//argumentsオブジェクトの利用。呼び出し側から渡されてきた値を取得
function calc5() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
let Result5 = calc5(1, 2, 3, 4, 5);
console.log("計算結果は" + Result5 + "です。");
```

<br>

# 3.おわりに
簡単な計算を例に関数の様々な書き方をまとめました。色々ある故になかなか覚えられない自分のための忘備録でした～。
