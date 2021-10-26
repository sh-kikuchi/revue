---
title: EXCEL出力
description:  Laravel8/php7.3
category: Laravel
createdAt: 2021-10-07
updatedAt: 2021-10-07
sortNumber: 5
---

## Laravel Excelのインストール
```
composer require maatwebsite/excel
```
## appフォルダの下にExport/BooksExport.phpを作成
```
$ php artisan make:export BooksExport --model=Book
```
↓↓ BooksExport.phpの編集
- Book::Allですべてのカラムを出力
- Book::selectで特定のカラムだけを出力
- headings()内でヘッダー名を付けられる。
- モデルのuseはヴァージョンによって違う。
```
<?php

namespace App\Exports;

use App\Models\Book;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class BooksExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Book::select('id','name','title','publisher','year')->get();
    }

	public function headings():array
	{
		return [
				'#',
				'name',
				'title',
				'publisher',
				'year',
			];
	}
}

```
## web.phpの編集（ルーティング）
```
Route::get('/book/export',[App\Http\Controllers\BookController::class,'export'])->name('book.export');
```

## コントローラーの編集（BookController)
```
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\BooksExport;

    public function export(){

	    return Excel::download(new UBooksExport, 'books.xlsx'); 

```

## Export設定が完了したらブラウザを使用して`/book/export`にアクセス→EXCELが出力されれば成功です。
参考：
[Laravel Excelをマスターしよう](https://reffect.co.jp/laravel/laravel_excel_master)
