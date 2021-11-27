---
title: 【解体新書】Nuxt.jsでブログを作ろう
description: ブログ記事を表示させよう
category: Nuxt.js
createdAt: 2021-11-25
updatedAt: 2021-11-25
sortNumber: 103
---

## ブログ記事を読み込みましょう
---
>  `_slug.vue`を作成

```
プロジェクトディレクトリ
|
|── pages
│   |── blog
│       |── html_css
│       |     |── _slug.vue
│       |     |── index.vue
│       |
│       |── JavaScript
│       |── html_css
│       |── nuxt_vue
│       |── php
│   
```
### template部分 
```html
<template>
  <div class="p-main-container">
    <div class="p-main-wrapper">
      <!-- メインのエリア -->
      <div id="l-center-area" class="ma-3">
        <div id="l-center-area" class="ma-3">
          <div chass="article-header">
            <v-row dense>
              <v-col cols="12">
                <v-card color="#385F73" max-width="800" class="mx-auto" dark>
                  <div chass="article-header">
                    <h1 class="c-article-title text-center">
                      {{ content.title }}
                    </h1>
                    <p class="c-article-descrition text-center">
                      {{ content.description }}
                    </p>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
        <!-- マークダウンのレンダリング箇所 -->
        <nuxt-content :document="content" />
      </div>
    </div>
  </div>
</template>
```
### script部分
--- 
> $contentフォルダの内のblogフォルダ
```js
<script>
export default {
  async asyncData({ $content, params, redirect }) {
    const content = await $content("blog/html_css")
      .where({ path: "/blog/html_css/" + params.slug })
      .fetch();
    if (content.length > 0) {
      return {
        content: content[0],
      };
    } else {
      redirect("/blog/html_css");
    }
  },
};
</script>
```

■ 【Pick Up】 asyncDataを利用して記事一覧
- `content = await $content("blog/html_css")`
  > content内のblog/html_cssフォルダーより記事を抽出

- `.fetch()`
  > データを収集

- if (content.length > 0) 
  > trueなら要素を出力
  > falseなら記事一覧にリダイレクトする。
