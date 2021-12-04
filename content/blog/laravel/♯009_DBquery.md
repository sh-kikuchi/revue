---
title: DB操作のいろいろ
description: DBファザード
category: Laravel
createdAt: 2021-12―02
updatedAt: 2021-12-02
sortNumber: 009
---

# DBクラス共通の記述
DBクラスでもクエリビルダでもDBファサードによる記述のため`Illuminate\Support\Facades\DB`をuseします。

```php
use Illuminate\Support\Facades\DB;
```

#DBクラスによる操作
`DB::SQL値(SQL文、パラメータ配列)`で記述する方法でデーターべースを操作します。
SQL文をそのまま使用するイメージで記述できるためわかりやすいですが他の記述方法よりSQL文を理解する必要があります。

例）usersテーブルのselectとupdateとdelete

```php:全てをselect
public function select(Request $request) {
 $items = DB::select('SELECT * from users');
 return view('sample.index',['items' => $items]);
}

// 記述方法：DB::select('SELECT文')
```

```php:特定のIDをselect
public function select(Request $request) {
 $items = DB::select('SELECT * from users where id =:id', ['id'=>$request->id]);
 return view('sample.index',['items' => $items[0]]);
}

// 記述方法：DB::select('SELECT文', 'パラメータ')
// returnする際は、配列の0番目であることを記述すること
```

```php:特定IDのレコードをupdate
public function update(Request $request) {
 $param = [
  'id' => $request->id
  'name' => $request->name,
  'age' => $request->age,
 ];
 DB::update('UPDATE users set name=:name, email=:email where id=:id', $param);
}

// 記述方法：DB::update('UPDATE文', 'パラメータ')
```

```php:特定IDのレコードをdelete
public function dalete(Request $request) {
  $param = ['id' => $request->id];
  DB::delete('DELETE from sample where id =:id', $param);
}

// 記述方法：DB::dalete('DELETE文', 'パラメータ')
```


#クリエビルダによる操作
SQL文を生成するためのメソッドをメソッドチェーンで記述することによりデーターベースを操作します。
`DB::table('テーブル名')->DBメソッド`のように記述して操作します。
DBクラスのメソッドですが、ほぼSQL文と同じように記述できるためSQL文がある程度理解できていれば違和感なく使用できると思います。

例）usersテーブルのselectとupdateとdelete

```php:全てをselect
public function select(Request $request) {
 $items = DB::table('users')->get();
 return view('hello.index',['items' => $items]);
}

// 記述方法： DB::table('テーブル名')->get(['フィールド名', )
// getメソッドの引数を指定しなければ全てのフィールドが取得される
```

```php:特定のIDをselect
public function select(Request $request) {
 $items = DB::table('users')->where('id',$request->id)->first();
 return view('hello.index',['items' => $items]);
}

// 記述方法：DB::table('テーブル名')->where('フィールド名',パラメータ)->first();
```

```php:特定IDのレコードをupdate
public function update(Request $request) {
 $param = [
  'id' => $request->id
  'name' => $request->name,
  'age' => $request->age,
 ];
 DB::table('users')->where('id',$request->id)->update($param);
}

// 記述方法：DB::table('テーブル名')->where('フィール名',パラメータ)->update(パラメータ);
```

```php:特定IDのレコードをdelete
public function dalete(Request $request) {
  DB::table('samole')->where('id', $request->id)->delete();
}

// 記述方法：DB::table('テーブル名')->where('フィール名',パラメータ)->delete(パラメータ);
```



# 参考
[データベース：利用開始]
(https://readouble.com/laravel/6.x/ja/database.html)
[データベース：クリエビルダ]
(https://readouble.com/laravel/6.x/ja/queries.html)
