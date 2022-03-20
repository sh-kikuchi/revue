<template>
  <div id="news">
    <h1 class="page-title pt-3">Tech News</h1>
    <h3 class="page-sub-title">Powered by NewsAPI</h3>
    <v-container>
      <v-row dense>
        <v-col
          v-for="(article, index) in articles"
          :key="index"
          cols
          sm="12"
          md="6"
        >
          <v-card class="news-card mt-3" style="height: 100%">
            <v-row>
              <v-col cols sm="12" md="12">
                <v-layout justify-center>
                  <a v-bind:href="article.url" target="_blank">
                    <img
                      class="card-image"
                      d-block
                      d-flex="center"
                      v-bind:src="article.urlToImage"
                    />
                  </a>
                </v-layout>
              </v-col>
              <v-col cols sm="12" md="12">
                <v-card-title class="card-title">{{
                  article.title
                }}</v-card-title>
                <v-card-text card-text>
                  {{ article.description }}
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "news",
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    var vm = this;
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=jp&category=technology&apiKey=5785938c03ca4389ac72870c66102c51"
      )
      .then(function (response) {
        vm.articles = response.data.articles;
      })
      .catch(function (error) {
        vm.message = "Error!" + error;
      })
      .finally(function () {
        vm.message = "";
      });
  },
};
</script>

<style scoped>
.search-input {
  width: 300px;
  margin: 0 auto;
}
.card-title {
  border-bottom: 1px dashed #000;
  margin-bottom: 5px;
  font-size: 14px;
}
.card-image {
  width: 300px;
  height: 300px;
  object-fit: contain;
}
.card-text {
  font-size: 12px;
}
</style>
