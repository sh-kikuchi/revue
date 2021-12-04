---
title: PHPでメール送信
description: mb_send_mail関数を使ってみよう。
category: php
createdAt: 2021-10-28
updatedAt: 2021-10-28
sortNumber: 8
---

# メールフォーム送信
- 参考：https://techplay.jp/column/550
- 手順
	1. フォームをつくる。（name属性を指定して、POST送信）
	2. フォームの送信先を設定。（今回は送信先をsend_mail.phpとする）
	3. mb_send_mail関数を使って、送信先のメールアドレスに送信。
## ■ メールフォーム
```html
      <form action=".send_mail.php" method="POST">
        <div>
          <label for="name">お名前</label>
          <input type="text" name="name">
        </div>
        <div>
          <!--メールアドレス-->
          <label for="emall">メールアドレス</label>
          <input type="text" name="mail">
        </div>
        <div>
          <!--セレクトフォーム-->
          <label for="main">主なご用件</label>
          <div>
            <select name="option" required>
              <option value="" hidden>どのようなご用件ですか</option>
              <option value="ご質問・ご意見">ご質問・ご意見</option>
              <option value="オファー・依頼">オファー・依頼</option>
              <option value="サイトの感想">サイトの感想</option>
              <option value="その他">その他</option>
            </select>
          </div>
        </div>
        <div>
          <!--お問い合わせフォーム-->
          <label for="request-about">問い合わせ内容</label>
          <textarea name="comment" cols="60" rows="10">
          </textarea>
        </div>
        <!--送信ボタン-->
        <input type="submit" value="送信する">
      </form>
```

##  ■ メール送信処理
> send_mail.php
- mb_send_mailという関数をつかってみましょう。
- 引数→mb_send_mail(宛先, 件名, メッセージ, ヘッダ)
- mb_send_mail関数はマルチバイトに対応されており、日本語での送信が可能
```php
<?php
  mb_language("Japanese");
  mb_internal_encoding("UTF-8");

  $to = '送信先のメールアドレス';
  $title = $_POST['option']."(".$_POST['name'].")";
  $message = $_POST['comment'];
  $headers =  $_POST['mail'];

  if(mb_send_mail($to, $title, $message, $headers))
  {
    echo "メール送信しました。";
  }
  else
  {
    echo "メール送信失敗しました。";
  }
 ?>
