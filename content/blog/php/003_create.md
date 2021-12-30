---
title: PDOによるCRUD ver.C
description: コメントの追加処理
category: php
createdAt: 2021-11-13
updatedAt: 2021-11-13
sortNumber: 3
---

## まずはフォームから
>  コメントを追加する用のフォームをつくりましょう。
>  1. フォームの`method`をPOST送信とすること
>  2. 各フォーム要素にname属性をつけること（POST送信する上で肝）
>  3. `action`にはcreate処理が書かれたphpファイルを設定

```html
<div class="container">
  <div>
    <h2 class="page-title">コメントを追加しましょう</h2>
    <section>
      <form method="post" action="/heiten/database/store/db_create.php">
        <div>
          <label for="name">お名前（ニックネーム可）</label>
          <input name="name" class="form-input" placeholder="名前を入力">
        </div>
        <div>
          <label for="title">タイトル</label>
          <input name="title" class="form-input" placeholder="タイトルを入力">
        </div>
        <div>
          <label for="comment">コメント</label>
          <textarea name="comment" class="form-input" rows="10" cols="20" placeholder="150字以内で入力して下さい" maxlength=150 required></textarea>
        </div>
          <button type="submit">編集</button>
        </div>
      </form>
    </section>
  </div>
</div>
?>
```

## create処理用のphpファイルを用意
> db_create.phpとし、データベースの追加処理を記述していきます。
>  1. require_onceでDB接続ファイルの呼び出し
>  2. フォームから値を受け取る
>  3. `insert`で追加処理を行う

```php
<?php
//require_onceでDB接続ファイルの呼び出し
require_once("../db_connect.php");

//フォームから値を受け取る
$title = $_POST["name"];
$title = $_POST["title"];
$comment = $_POST["comment"];

try{
  $sql = "insert into comments(name,title,comment) values(:name,:title,:comment)";
  $stmt = $pdo->prepare($sql);
  $stmt->bindValue(":name", $title, PDO::PARAM_STR);
  $stmt->bindValue(":title", $title, PDO::PARAM_STR);
  $stmt->bindValue(":comment", $comment, PDO::PARAM_STR);
  $stmt->execute();
  header('Location:../../views/store/detail.php');
}catch(Exception $e){
  echo $e -> getMessage();
}
?>
```
