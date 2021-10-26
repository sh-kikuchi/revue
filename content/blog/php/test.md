---
title: Freedom Only
description: Nuxt Content × SSG で作る静的ブログ。概念とセットアップについてまずは解説
category: Laravel
createdAt: 2021-10-07
updatedAt: 2021-10-07
sortNumber: 1
---

- 記事詳細ページ
- カテゴリー
- 各々の一覧ページとページング

## カテゴリー
各記事ではカテゴリーを指定できるようになっています。
カテゴリーをクリックするとその一覧に飛ぶ。
▼ yml形式
```
title: 【解体新書】Nuxt.jsでつくるBlog
description: 本サイトのコードレシピを紹介します
category: blog
createdAt: 2021-10-07
```

## ページ構成
- /articles/
- /category/{category_key}/ <br>

※ページング
- /articles/page/{n}
- /category/{category_key}/page/{n}


> content->articles ->test.md
> pages  ->articles ->slug.vue
