---
title: モーダル画面を作ろう。
description: jQueryの活用
category: jQuery
createdAt: 2021-10-28
updatedAt: 2021-10-28
sortNumber: 3
---

## ■ HTML（ボタンとモーダル画面）
```HTML
<body>
    <!-- クリックでモーダルを表示 -->
    <div class="container">
        <a class="modal-open" href="">モーダルを表示するボタン</a>
    </div>
    <!-- モーダル画面を用意 -->
    <div class="modal js-modal">
        <div class="modal_bg modal-close"></div>
        <div class="modal_content">
            <p>モーダルの内容</p>
            <a class="modal-close" href="">閉じる</a>
        </div>
    </div>
</body>
```

## ■ モーダル画面のCSS
```CSS
/* 一面にモーダルのフィールド展開 */
.modal{
    display: none;
    height: 100vh;
    position: fixed;
    top: 0;
    width: 100%;
}
/* モーダル画面の周囲（黒） */
.modal_bg{
    background: rgba(0,0,0,0.8);
    height: 100vh;
    position: absolute;
    width: 100%;
}
/* モーダル画面（本体） */
.modal_content{
    background: #fff;
    left: 50%;
    padding: 40px;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 60%;
}
```

## ■　JavaScript（jQuery）
1. ボタン（class：modal-open）をクリック
2. モーダル画面（class:js-modal）がフェードイン
3. 閉じるボタン（class:modal-close）かモーダル外をクリックでフェードアウト

```JavaScript
$(function () {
    $('.modal-open').on('click', function () {
        $('.js-modal').fadeIn();
        return false;
    });
    $('.modal-close').on('click', function () {
        $('.js-modal').fadeOut();
        return false;
    });
});
```
