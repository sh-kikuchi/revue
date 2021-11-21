---
title: PDOによるCRUD ver.D
description: コメントの削除処理
category: php
createdAt: 2021-11-13
updatedAt: 2021-11-13
sortNumber: 5
---

## comment.php
> フォームで削除ボタンをつくりました(POST通信)。URLにコメントのidを乗せたGET送信だと、知らない人がURLをたたくだけで削除出来てしまいます。
```html
    <div>
          <form name="id" action="../../database/store/db_delete.php">
              <input hidden class="form-input" name="id" value="<?php echo htmlspecialchars($comment["id"]); ?>">
              <button type="submit">削除する</button>
          </form>
    </div>
```

## delete処理用のphpファイルを用意
> db_delete.phpとし、データベースの削除処理を記述していきます。
>  1. require_onceでDB接続ファイルの呼び出し
>  2. フォームから値を受け取る
>  3. `delete`で追加処理を行う

```php
<?php
  require_once("../db_connect.php");

  $id = intval($_GET["id"]);

  try{
    $sql = "DELETE FROM comments WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":id", $id, PDO::PARAM_INT);
    $stmt->execute();
    header('Location:../../views/store/detail.php');
    exit;
  }catch(Exception $e){
    echo $e->getMessage();
  }
?>
```
