<template>
  <div class="article-list-container">
    <v-list shaped>
      <a
        href="#"
        onclick="window.history.back(); return false;"
        class="back-link"
        >BACK</a
      >
      <v-subheader>記事一覧</v-subheader>
      <div class="d-sm-none d-md-flex">
        <v-list-item-group tag="div" class="tag-div-item-group">
          <v-list-item v-for="(c, index) in contents" :key="index">
            <v-list-item-content>
              <nuxt-link :to="c.path" tag="div" class="tag-div-nuxt-link">
                {{ c.title }}
              </nuxt-link>
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
  async asyncData({ $content, route }) {
    console.log(route.path);
    var dir = route.path.split("/");
    var dirParam = dir[dir.length - 1];
    console.log(dirParam);

    const contents = await $content("blog/" + dirParam)
      .only(["title", "createdAt", "path"])
      .sortBy("sortNumber", "asc")
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
.article-list-container {
  max-width: 820px;
  margin: 0 auto;
}
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
</style>
