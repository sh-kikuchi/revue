<template>
  <div>
    <v-list shaped>
      <v-subheader>記事一覧</v-subheader>
      <v-list-item-group>
        <v-list-item v-for="(c, index) in contents" :key="index">
          <v-list-item-content>
            <nuxt-link :to="c.path" tag="div" class="tag-div-nuxt-link">{{
              c.title
            }}</nuxt-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-pagination
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
    const contents = await $content("blog/nuxt_vue")
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
</style>
