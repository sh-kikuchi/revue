---
title: 【CRUD】Delete
description: 削除機能の実装
category: Laravel
createdAt: 2021-11-15
updatedAt: 2021-11-21
sortNumber: 008

---

## ノート記事を削除出来るようにしよう（DELETE）

### `show.blade.php`に削除ボタンを追加
---

<br>

```html
@foreach($notes as $note)
<div class="media shadow-sm p-3 mb-1 bg-white rounded">
    <div class="media-body px-1 text-break">
        {{ $note -> note }}
        <div class="float-right">
            <button type="submit" class="btn btn-primary js-modal-open" href="" data-target="note-modal" data-note_id="{{$note->id}}" data-note_text="{{ $note-> note }}">編集</button>
            <!-- ここから -->
            <a class="btn btn-danger"  onclick="return confirm('このカードを削除して良いですか?')" rel="nofollow" data-method="delete" href="/note/destroy/{{ $note->id }}">削除</a>
            <!-- ここまで -->
        </div>
    </div>
</div>
@endforeach

```

### NoteControllerに削除機能を追加
```php
    public function destroy(Note $note)
    {
        $note = Note::find($note->id);
        $note->delete();
        return redirect('/');
    }
```
