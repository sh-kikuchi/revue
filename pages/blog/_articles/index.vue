<template>
  <div class="article-list-container">
    <v-list shaped>
      <div class="navigation-bar pt-1">
        <v-icon>mdi-home</v-icon>
        <nuxt-link to="/" tag="a" class="navigation"> Home</nuxt-link
        ><span> > </span>
        <v-icon>mdi-fountain-pen</v-icon>
        <nuxt-link to="/blog" tag="a" class="navigation"> Blog</nuxt-link>
      </div>
      <v-subheader>記事一覧</v-subheader>
      <div class="d-md-flex">
        <v-list-item-group tag="div" class="tag-div-item-group">
          <v-list-item v-for="(c, index) in contents" :key="index">
            <v-list-item-content>
              <nuxt-link :to="c.path" tag="div" class="tag-div-nuxt-link">
                <div>
                  <div class="text-right">
                    <span
                      >更新日:{{
                        $moment(c.updatedAt).format("YYYY-MM-DD")
                      }}</span
                    >
                  </div>
                  <h2>
                    <span>{{ index + 1 }}. </span>{{ c.title }}
                  </h2>
                  <p class="pt-2 pl-2">{{ c.description }}</p>
                </div>
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
      .only(["title", "createdAt", "updatedAt", "description", "path"])
      .sortBy("sortNumber", "asc")
      .fetch();

    return {
      lists: contents,
      dirParam,
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
.navigation {
  color: black;
  text-decoration: none;
}
.navigation:hover {
  color: lightgreen;
}
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
