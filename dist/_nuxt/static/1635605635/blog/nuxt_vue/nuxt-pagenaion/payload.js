__NUXT_JSONP__("/blog/nuxt_vue/nuxt-pagenaion", (function(a,b,c,d){return {data:[{content:{slug:"nuxt-pagenaion",description:"Nuxt Content × SSG で作る静的ブログ。概念とセットアップについてまずは解説",title:"【解体新書】Nuxt.jsのページネーション",category:"Nuxt.js",createdAt:d,updatedAt:d,sortNumber:1,toc:[{id:b,depth:2,text:b}],body:{type:"root",children:[{type:a,tag:"h2",props:{id:b},children:[{type:a,tag:"a",props:{ariaHidden:"true",href:"#%E3%83%9A%E3%83%BC%E3%82%B8%E3%83%8D%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3",tabIndex:-1},children:[{type:a,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:c,value:b}]},{type:c,value:"\n"},{type:a,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:a,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:a,tag:"code",props:{},children:[{type:c,value:"\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Cv-list shaped\u003E\n      \u003Cv-subheader\u003E記事一覧\u003C\u002Fv-subheader\u003E\n      \u003Cv-list-item-group\u003E\n        \u003Cv-list-item v-for=\"(c, index) in contents\" :key=\"index\"\u003E\n          \u003Cv-list-item-content\u003E\n            \u003Cnuxt-link :to=\"c.path\" tag=\"div\" class=\"tag-div-nuxt-link\"\n              \u003E{{ c.title }}\u003C\u002Fnuxt-link\n            \u003E\n          \u003C\u002Fv-list-item-content\u003E\n        \u003C\u002Fv-list-item\u003E\n      \u003C\u002Fv-list-item-group\u003E\n    \u003C\u002Fv-list\u003E\n    \u003Cv-pagination\n      v-model=\"page\"\n      :length=\"length\"\n      @input=\"pageChange\"\n    \u003E\u003C\u002Fv-pagination\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n\u003Cscript\u003E\nexport default {\n  data() {\n    return {\n      page: 1,\n      length: 0,\n      lists: [],\n      contents: [],\n      pageSize: 10,\n    };\n  },\n  mounted: function () {\n    this.length = Math.ceil(this.lists.length \u002F this.pageSize);\n    this.contents = this.lists.slice(0, this.pageSize);\n  },\n  async asyncData({ store, $content, params }) {\n    const contents = await $content(\"blog\u002Fnuxt_vue\")\n      .only([\"title\", \"createdAt\", \"path\"])\n      .sortBy(\"sortNumber\", \"asc\")\n      .skip(0)\n      .limit(15)\n      .fetch();\n\n    return {\n      lists: contents,\n    };\n  },\n  methods: {\n    pageChange(pageNumber) {\n      this.contents = this.lists.slice(\n        this.pageSize * (pageNumber - 1),\n        this.pageSize * pageNumber\n      );\n    },\n  },\n};\n\u003C\u002Fscript\u003E\n\u003Cstyle scoped\u003E\ntag-div-nuxt-link {\n  color: black;\n  text-decoration: none;\n}\n\u003C\u002Fstyle\u003E\n\n"}]}]}]}]},dir:"\u002Fblog\u002Fnuxt_vue",path:"\u002Fblog\u002Fnuxt_vue\u002Fnuxt-pagenaion",extension:".md"}}],fetch:{},mutations:[]}}("element","ページネーション","text","2021-10-07T00:00:00.000Z")));