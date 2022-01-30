---
title: 認証実装の準備
description: DB連携と脆弱性対策
category: php
createdAt: 2022-01-29
updatedAt: 2022-01-29
sortNumber: 8
---

# 1. はじめに
Laravelのユーザー私は、ログイン実装はLaravel/uiに頼ってばかり。
ネイティブで作るとどれほど大変なのだろうとか、ログインってそもそもどのように
実装するのだろうとかを感じるようになったので、やってみました。今後、認証の実装をするにあたり、下記のようなディレクトリを想定して話を進めてまいります。今回の認証は[こちらの動画](https://www.youtube.com/playlist?list=PLCyDm9NTxdhKocC4K-CmdXVGEM-9a8U6C)を参考にさせて頂いております。これを土台としつつも、どんどん自分好みに昇華させて行きたいと思います。

```
プロジェクトディレクトリ
|
|── auth ←新規作成して下さい。
│   |── controller
│   |   |── auth.php
│   |
|   │── view
|       |── signTest.php 
|       |── signin.php
|       |── signup.php
│
|── database
│   |── db_connect.php ←【今回、ココ】
|
|── fragile
│   |── index.php ←【今回、ココ】
│
```

<br>

# 2. DBの準備

【準備】本サイトの「MySQLでDB接続」を参考にusersテーブルを作ってみて下さい。

それでは、databaseディレクトリの中で`db_connect.php`を作成してみましょう。ここでは、PHPとデータベースの連携用ファイルを用意します。

```php
<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'データベースの名前');
define('DB_USER', 'ユーザー名');
define('DB_PASS', 'パスワード');

function connect()
{
    $host = DB_HOST;
    $db   = DB_NAME;
    $user = DB_USER;
    $pass = DB_PASS;

    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

    try {
        $pdo = new PDO($dsn, $user, $pass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
        return $pdo;
    } catch(PDOExeption $e) {
        echo '接続失敗です！'. $e->getMessage();
        exit();
    }
}
```

<br>

# 3. トークン生成とXSS対策用のファイルを用意
```php
<?php
function h($str){
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

function setToken(){
    $csrf_token = bin2hex(random_bytes(32));
    $_SESSION['csrf_token'] = $csrf_token;

    return $csrf_token;
}
?>
```

### ■ htmlspecialchars関数
> HTML タグ(「&」「"」「'」「<」「>」など)などに使われる特殊文字をエンティティに変換する関数。
```php
 htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
```
上記のように関数のパラメータは` htmlspecialchars( 文字列, 変換パターン, 文字コード )`です。`ENT_QUOTES`の部分に関して、「‘」は「'」、「“」は「"」といった具体にシングルとダブルの引用符の特殊文字をちゃんと画面に表示できるように変換します。

参考 [PHPのドキュメント](https://www.php.net/manual/ja/function.htmlspecialchars.php)

<br>

### ■ トークンの生成
> CSRF（クロスサイト・リクエスト・フォージェリ）の対策のためにトークンを生成します。簡単にいうと、フォーム入力前のWebページで予めトークンを発行することでリクエスト時に送信されたトークンと入力前のトークンを比較し、正しいリクエスト元であるかどうかを判別する。
```php
function setToken(){
    $csrf_token = bin2hex(random_bytes(32));
    $_SESSION['csrf_token'] = $csrf_token;

    return $csrf_token;
}
```

<br>

# 4. おわりに
DB接続とセキュリティ対策など、準備作業をしました。これから認証の実装する時には欠かすこと出来ぬものたちなので、手始めにやっておくか..みたいなノリでまとめました。次号はサインアップ実装。

<br>
