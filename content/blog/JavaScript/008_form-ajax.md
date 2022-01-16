---
title:  jQuery + Ajaxを利用したPOST送信
description: jQuery + Ajax + PHPによるメール送信機能を実装。
category: JavaScript
createdAt: 2022-01-15
updatedAt: 2022-01-15
sortNumber: 8
---

# 1. はじめに
前回、メールフォームを作って、バリデーションの実装をしました。フォームというと、普通は送信ボタンを押したら、フォームの`actions`で指定されたファイルに遷移されて何らかの処理が動きます。その時に`method`に指定していた通信方法（POST・GET）で値も渡してくれますね。でも、送信ボタンを押した時にJS側でエラーチェックをすると、PHPファイルにPOST送信するのは一筋縄では行きません。そこで今回はjQueryを利用してAjaxによるPOST送信を実現させたいと思います。<br>

```
   |── js
   |   |── script.js
   |
   |── index.html
   |── send_mail.php
```
※index.htmlとscript.jsのエラーチェックのコードは前回を参照のこと。
<br>

# 2. Ajaxとは？
- A（Asynchronous）: さまざまな処理を並列に行える通信(非同期)
- JA: JavaScript
- X: XML
> Webページ全体を更新することなく「一部分だけ情報を更新する」ことが可能。そのため、サーバー側にも負荷はかかりにくいのがメリット。検索エンジンやSNSサービスなどに利用される。Ajaxはオープンソースであるゆえに脆弱性が欠点になる。AjaxはJavaScriptにかなり依存しているため、JavascriptsやXMLHttpRequestをサポートするブラウザでなければ、Ajax技術を使ったページを利用できない。

<br>

# 3. 値を送る側の実装（jQuery,Ajax通信）
> 前回、メールフォームを作りました。`id=contactForm`のフォームで送信する時にエラーチェックの関数を備えたイベントを追加することで未入力の項目がないかとか、入力の形式が合っているかを確認出来るようになりました。今回はこの関数の中でPOST送信するためのajaxの処理を記述します。
- type: 通信方法→POST送信
- url: 送信先（値をどこのファイルに送る？）
- datatype: データの形式。ここではJsonに設定。
- data: 送りたい値。
- `.done`は成功した時、`.fail`は失敗した時の処理
  ```js
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (e) {

    //(上記略)
    $.ajax({
      type: 'post',
      url: 'send_mail.php',
      datatype: 'json',
      data: {
        username: $("#username").val(),
        mail: $("#mail").val(),
        option: $("#option").val(),
        comment: $("#comment").val()
      }
    })
      .done(function (response) {
        confirm('本当に送信しても宜しいでしょうか？');
        $("#username").text(response["username"]);
        $("#mail").text(response["mail"]);
        $("#option").text(response["option"]);
        $("#comment").text(response["comment"]);
      })
      .fail(function () {
        alert("通信エラー");
      });
  });

  ```

<br>

# 4. 値を受け取る側（PHP）の実装
> 上記の方法でPOST送信した時に、受け取り側ではJSONをエンコードする必要があります。PHPファイルのメール機能のコードは下記の通りです。
```php
<?php
  mb_language("Japanese");
  mb_internal_encoding("UTF-8");

  $to = '送信先のメールアドレス';
  $title = $_POST['option']."(".$_POST['username'].")";
  $message = $_POST['comment'];
  $headers =  $_POST['mail'];

  $result = mb_send_mail($to, $title, $message, $headers);

  //送信結果を判定
   if($result){
     echo json_encode(array('result' => true));
   }else{
     echo json_encode(array('result' => false));
   };

  //フォームに空の項目がありエラー
  echo json_encode(array('result' => false));
 ?>
```

ここではPHPの文法には触れないが、`mb_send_mail`を使って、エンコード変換を行ってメールを送信するための配列を生成します。そのあとで`json_encode`でJSONにエンコードをします。それによって、POST送信による値の受け取りを実現することが出来ます。

<br>

# 5. おわりに
PHP側でバリデーションをやるのであれば、POST送信したのちにサーバー側で処理を書けば良いかと思いますが、今回は送信前、つまりブラウザ側の方でJSによるバリデーションをやってからPOST送信をしてみました。非同期通信はイメージは付きやすいけど、なかなか奥が深そうです。今回の例もほんの一例なのでしょう（泣）。ただ、同期通信と非同期通信に触れるだけでもクライアント側の処理とサーバーサイドの処理の棲み分けだとか、使い分けが分かってくるのかなと思います。

<br>
