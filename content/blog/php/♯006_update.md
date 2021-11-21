---
title: PDOによるCRUD ver.U
description: コメントの更新処理
category: php
createdAt: 2021-11-13
updatedAt: 2021-11-13
sortNumber: 6
---

## comment.php
>  comment.phpでは下記のように更新用フォーム遷移するためのリンクを用意していました。ここではGET送信でコメントのIDを拾うようにしてます。
```html
  <div>
      <a href="../comment/fm_update.php?id=<?php echo $comment["id"]; ?>">編集</a>
  </div>
```

## fm_update.phpを作ろう（DB連携や操作部分）
> ここでは、更新（編集）したいコメントを表示するようにします。
>  1. require_onceでDB接続用のdb_connect.phpを呼び出す。
>  2. 抽出したいデータをSQLで書く。
>  3. SQL文をデータベースに対して発行
```php
  //DB接続設定
  require_once("../../database/db_connect.php");

  //URLから値を受け取る（GET送信）
  $id = intval($_GET["id"]);

  //SQL文
  $sql  ="SELECT *
          FROM comments
          WHERE id = $id
          ORDER BY updated_at desc;";

  //PDOのquery機能
  $comments = $pdo->query($sql);
```

## fm_update.phpを作ろう（UI部分）
> 更新（編集）したいコメントを表示するようにします。
>  1. foreach文で$commentsを【表示】させていく。
>  2. htmlspecialchars関数でXSS対策をする。
>  3. フォームの`method`をPOST送信とすること
>  4. 各フォーム要素にname属性をつけること（POST送信する上で肝）
>  5. `action`にはcreate処理が書かれたphpファイルを設定

```html //phpだが、反応しないのでhtml
<!-- 下記は<body>タグの中身 -->
<div class="container">
    <div>
        <h2 class="page-title">コメントを編集します</h2>
        <section>
            <?php foreach ($comments as $comment){?>
            <form method="post" action="/heiten/database/store/db_update.php">
                <div>
                  <input hidden name="id" value="<?php echo htmlspecialchars($comment["id"]);?>">
                <div>
                  <label for="title">タイトル</label>
                  <input name="title" class="form-input" placeholder="名前を入力" value="<?php echo htmlspecialchars($comment["title"]);?>">
                </div>
                <div>
                  <label for="comment">コメント</label>
                  <textarea name="comment" class="form-input" rows="10" cols="20"><?php echo htmlspecialchars($comment["comment"]);?></textarea>
                </div>
                  <button type="submit">編集</button>
                </div>
          </form>
          <?php } ?>
        </section>
    </div>
</div>
```

## create処理用のphpファイルを用意
> db_create.phpとし、データベースの追加処理を記述していきます。
>  1. require_onceでDB接続ファイルの呼び出し
>  2. フォームから値を受け取る
>  3. `update`で追加処理を行う

```php
<?php
  require_once("../db_connect.php");

  $id = $_POST["id"];
  $title = $_POST["title"];
  $comment = $_POST["comment"];

  try{
    $sql = "UPDATE comments SET title = :title, comment = :comment WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":id", $id, PDO::PARAM_INT);
    $stmt->bindValue(":title", $title, PDO::PARAM_STR);
    $stmt->bindValue(":comment", $comment, PDO::PARAM_STR);
    $stmt->execute();
    header('Location:../../views/store/detail.php');
    exit;
  }catch(PDOException $e){
      echo '更新に失敗しました。', $e->getmessage();
      exit();
  }
?>

```
