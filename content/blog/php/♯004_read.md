---
title: PDOによるCRUD Ver.R
description: コメントの表示
category: php
createdAt: 2021-11-13
updatedAt: 2021-11-13
sortNumber: 4

---

## comment.phpを作ろう（DB連携や操作部分）
> comment.phpというファイルを作ったとしましょう。
>  そのファイルの最上行から下記のコードを記述していきます。
>  1. require_onceでDB接続用のdb_connect.phpを呼び出す。
>  2. 抽出したいデータをSQLで書く。
>  3. SQL文をデータベースに対して発行

```php
<?php
  //DB接続設定
  require_once("../../database/db_connect.php");

  //SQL文
  $sql  ="select *
          from comments
          order by updated_at desc;";

  //PDOのquery機能
  $comments = $pdo->query($sql);
?>
```

## comment.phpを作ろう（UI部分）
> comment.phpの続きでし。
>  そのファイルの最上行から下記のコードを記述していきます。
>  1. foreach文でDBのデータが入った$commentsを【表示】させていく。
>  2. htmlspecialchars関数でXSS対策をする。
     [詳しくはこちら](https://tech-lab.sios.jp/archives/21780)

```html //phpだが、反応しないのでhtml
<!-- 下記は<body>タグの中身 -->
<div class="container">
    <?php foreach ($comments as $comment){?>
    <div class="card">
        <h3 class="card-title"> <?php echo htmlspecialchars($comment["title"]);?></h3>
        <p class="card-description"><?php echo htmlspecialchars($comment["comment"]);?></p>
        <p class="card-updated_at"><?php echo htmlspecialchars($comment["updated_at"]);?></p>
        <div class="card-detail">
          <div>
              <a href="../comment/fm_update.php?id=<?php echo $comment["id"]; ?>">編集</a>
         </div>
          <div>
                <form name="id" action="../../database/store/db_delete.php">
                    <input hidden class="form-input" name="id" value="<?php echo htmlspecialchars($comment["id"]); ?>">
                    <button type="submit">削除する</button>
                </form>
          </div>
        <div>
    </div>
  <?php }?>
</div>
```
