<template>
  <div>
    <v-list shaped>
      <a
        href="#"
        onclick="window.history.back(); return false;"
        class="back-link"
        >◀BACK</a
      >
      <v-subheader>記事一覧</v-subheader>
      <div class="d-sm-none d-md-flex">
        <v-list-item-group tag="div" class="tag-div-item-group">
          <v-list-item v-for="(c, index) in contents" :key="index">
            <v-list-item-content>
              <nuxt-link :to="c.path" tag="div" class="tag-div-nuxt-link">{{
                c.title
              }}</nuxt-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <!--PC用ページネーション-->
        <v-pagination
          tag="div"
          class="pagination sp"
          v-model="page"
          :length="length"
          @input="pageChange"
        ></v-pagination>

        <div class="sidebar" style="width: 300px">
          <iframe
            class="amazon-link"
            style="width: 120px; height: 240px"
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            frameborder="0"
            src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=revue0f-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4297103680&linkId=21f25f149ba9671bcbaf040424c47be7"
          ></iframe>
        </div>
      </div>
    </v-list>
    <!--スマホ用ページネーション-->
    <v-pagination
      tag="div"
      class="pagination pc"
      v-model="page"
      :length="length"
      @input="pageChange"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      length: 0,
      lists: [],
      contents: [],
      pageSize: 10,
    };
  },
  mounted: function () {
    this.length = Math.ceil(this.lists.length / this.pageSize);
    this.contents = this.lists.slice(0, this.pageSize);
  },
  async asyncData({ store, $content, params }) {
    const contents = await $content("blog/JavaScript")
      .only(["title", "createdAt", "path"])
      .sortBy("sortNumber", "asc")
      .skip(0)
      .limit(15)
      .fetch();

    return {
      lists: contents,
    };
  },
  methods: {
    pageChange(pageNumber) {
      this.contents = this.lists.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      );
    },
  },
};
</script>
<style scoped>
tag-div-nuxt-link {
  color: black;
  text-decoration: none;
}
.tag-div-item-group {
  width: 800px;
}

.amazon-link {
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  text-align: center;
}
/* スマートフォンで見たときは"sp"のclassがついた画像が表示される */
@media only screen and (max-width: 750px) {
  .pc {
    display: none !important;
  }
  .sp {
    display: block !important;
  }
  .sidebar {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 15px auto;
    margin-top: 50px;
  }
}
</style>
